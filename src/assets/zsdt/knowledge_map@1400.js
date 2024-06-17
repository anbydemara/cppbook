function _1(md){return(
md`## 双图，增加超链接`
)}

function _container(d3)
{
    const svg = d3.create("svg")
      .attr("viewBox", [-400,-300,800,700])
      .property("value", "");
  return svg
}


function _chartContainer(html)
{
  return html`
`;
}


function _chart(tree,bilink,d3,data,colornone,line,colorin,colorout)
{
  const root = tree(bilink(d3.hierarchy(data)
      .sort((a, b) => d3.ascending(a.height, b.height) || d3.ascending(a.data.name, b.data.name))));

  const svg = d3.create("svg")
      .attr("viewBox", [-400,-300,800,700])
      .property("value", "");
      // .attr("viewBox", [-width / 2, -width / 2, width, width]);

  const g = svg.append("g");
  function countExpander(x){
    let emptyT = `Totals:
          `
    let t = `Totals:
          `
    for(const [key, value] of Object.entries(x)){
      t += `${key.split('.').pop()}: ${value} 
          `
    }
    if (t !== emptyT){
      return t
    }else{
      return t + "No traffic found..."
    }
  }
  const node = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 5)
      
    .selectAll("g")
    .data(root.leaves())
    .join("g")
      .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.x < Math.PI ? 6 : -6)
      .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
      .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
      .attr("fill", d => d.data.color)
      .text(d => d.data.name)
      
      .each(function(d) { d.text = this; })
      .on("click",click)
      .on("mouseover", overed)
      .on("mouseout", outed);

  const link = svg.append("g")
      .attr("stroke", colornone)
      .attr("fill", "none")
    .selectAll("path")
    .data(root.leaves().flatMap(leaf => leaf.outgoing))
    .join("path")
      .style("mix-blend-mode", "multiply")
      .attr("d", ([i, o]) => line(i.path(o)))
      .each(function(d) { d.path = this; });

  // var nodeLinkStatus = {};
  //    link.forEach(d => {
  //      nodeLinkStatus[`${d.source.index},${d.target.index}`] = 1;
  //    });
  // function isConnected(a, b) {
  //   return nodeLinkStatus[`${a.index},${b.index}`] || nodeLinkStatus[`${b.index},${a.index}`] || a.index === b.index;
  // }
  //let valuesum = 0;
  function click(d) {
    //window.location.href = d.data.url; 
    var url = d.data.url;
    var Turl= url.split('\/').join('');
    // window.open(json_encode(d.data.url, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE), "_blank", "resizable,scrollbars,status");
    window.open(Turl, "_blank", "resizable,scrollbars,status");
    //JSON_UNESCAPED_SLASHES
    //d3.select(this).attr("href", d=>d.url);
  }
  
  function overed(d) {
    link.style("mix-blend-mode", null);
    d3.select(this).attr("font-weight", 900).attr("font-size", 15);    //这里是选择了选中的节点
    link.attr("stroke", "white");
    d3.selectAll(d.incoming.map(d => d.path)).attr("stroke", colorin).raise();    //选中节点的链接
    d3.selectAll(d.incoming.map(([d]) => d.text)).attr("font-weight", 900).attr("font-size", 10);
    d3.selectAll(d.outgoing.map(d => d.path)).attr("stroke", colorout).raise();
    d3.selectAll(d.outgoing.map(([, d]) => d.text)).attr("font-weight", 900).attr("font-size", 10);
   // valuesum = valuesum + 1;
    svg.property("value", this).dispatch("input");
  }
  
  function outed(d) {
    link.style("mix-blend-mode", "multiply");
    d3.select(this).attr("font-weight", null).attr("font-size", 5);
    link.attr("stroke", colornone);
    d3.selectAll(d.incoming.map(d => d.path)).attr("stroke", null);
    d3.selectAll(d.incoming.map(([d]) => d.text)).attr("font-weight", null).attr("font-size", 5);
    d3.selectAll(d.outgoing.map(d => d.path)).attr("stroke", null);
    d3.selectAll(d.outgoing.map(([, d]) => d.text)).attr("font-weight", null).attr("font-size", 5);
    d3.select(this).attr("fill", d => d.data.color);
  }
  
//   svg.call(d3.zoom()
//       .extent([[0, 0], [width, height]])
//       .scaleExtent([1, 8])
//       .on("zoom", zoomed));

//   function zoomed() {
//     node.attr("transform", d3.event.transform);
//     link.attr("transform", d3.event.transform);
//   }

  // Legend
  // var groupHouses = (color.domain()).slice(0,7)
  // var colorLegend = svg
  //                        .selectAll('.colorLegend')
  //                        .data(groupHouses)
  //                        .enter().append("g")
  //                        .attr('transform', function(d, i) { 
  //                          return 'translate('+(10)+',' + (10+(25*i)) +')';
  //                        })
  // colorLegend.append('rect')
  //            .attr('fill', function(d) { return "red"; })
  //            .attr('width', 20)
  //            .attr('height', 20);

  
  return svg.node();
}


function _5(chart){return(
chart.__data__["data"]["name"]
)}

async function _data(hierarchy,FileAttachment){return(
hierarchy(await FileAttachment("my_newflare_xinwangzhan@1.json").json())
)}

function _hierarchy(){return(
function hierarchy(data, delimiter = ".") {
  let root;
  const map = new Map;
  data.forEach(function find(data) {
    const {name} = data;
    if (map.has(name)) return map.get(name);
    const i = name.lastIndexOf(delimiter);
    map.set(name, data);
    if (i >= 0) {
      find({name: name.substring(0, i), children: []}).children.push(data);
      data.name = name.substring(i + 1);
    } else {
      root = data;
    }
    return data;
  });
  return root;
}
)}

function _bilink(id){return(
function bilink(root) {
  const map = new Map(root.leaves().map(d => [id(d), d]));
  for (const d of root.leaves()) d.incoming = [], d.outgoing = d.data.imports.map(i => [d, map.get(i)]);
  for (const d of root.leaves()) for (const o of d.outgoing) o[1].incoming.push(o);
  return root;
}
)}

function _id(){return(
function id(node) {
  return `${node.parent ? id(node.parent) + "." : ""}${node.data.name}`;
}
)}

function _colorin(){return(
"#00f"
)}

function _colorout(){return(
"#f00"
)}

function _colornone(){return(
"#ccc"
)}

function _width(){return(
900
)}

function _height(){return(
60
)}

function _radius(width){return(
width / 2
)}

function _line(d3){return(
d3.lineRadial()
    .curve(d3.curveBundle.beta(0.85))
    .radius(d => d.y)
    .angle(d => d.x)
)}

function _tree(d3,radius){return(
d3.cluster()
    .size([2 * Math.PI, radius - 220])
)}

function _d3(require){return(
require("d3@5")
)}

function _19(md){return(
md`### 另一种图`
)}

function _d3_6(require){return(
require('d3@v6','d3-v6-tip')
)}

function _chart3(NetworkChart,chartContainer,data3){return(
new NetworkChart()
  .container(chartContainer)
  .svgWidth(975)
  .svgHeight(975)
  .data(data3)
  .render()
)}

function _my_newflared_w_color31(FileAttachment){return(
FileAttachment("my_newflare_xinwangzhan@1.json").json()
)}

function _NetworkChart(d3_6){return(
class NetworkChart {
  constructor() {
    const attrs = {
      id: 'ID' + Math.floor(Math.random() * 1000000),
      svgWidth: 350,
      svgHeight: 350,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      marginLeft: 5,
      container: 'body',
      defaultTextFill: '#2C3E50',
      defaultFont: 'Helvetica',
      duration: 500,
      initialDuration: 500,
      slowDuration: 2000,
      firstRender: true,
      initialLinkColor: '#555',
      normalCircleRadius: 33,
      rootCircleRadius: 50,
      isTree: false,
      transitionEase: d3_6.easeBack,
      dropShadowId: 'drop-shadow-id',
      onNodeMouseEnter: d => d,
      onNodeMouseLeave: d => d,
      data: null
    };
    this.getState = () => attrs;
    this.setState = d => Object.assign(attrs, d);
    Object.keys(attrs).forEach(key => {
      if (!this[key]) {
        //@ts-ignore
        this[key] = function(_) {
          var string = `attrs['${key}'] = _`;
          if (!arguments.length) {
            return eval(`attrs['${key}'];`);
          }
          eval(string);
          return this;
        };
      }
    });
    this.initializeEnterExitUpdatePattern();
  }

  setAutoBox({ svg }) {
    const node = svg.node();
    const { x, y, width, height } = node.getBBox();
    const result = [x, y, width, height];
    svg.attr('viewBox', result);
  }

  initializeEnterExitUpdatePattern() {
    d3_6.selection.prototype.patternify = function(params) {
      var container = this;
      var selector = params.selector;
      var elementTag = params.tag;
      var data = params.data || [selector];
      // Pattern in action
      var selection = container.selectAll('.' + selector).data(data, (d, i) => {
        if (typeof d === 'object') {
          if (d.id) {
            return d.id;
          }
        }
        return i;
      });
      selection.exit().remove();
      selection = selection
        .enter()
        .append(elementTag)
        .merge(selection);
      selection.attr('class', selector);
      return selection;
    };
  }

  // ================== RENDERING  ===================
  render() {
    const state = this.getState();

    this.setDynamicContainer(state);
    this.calculateProperties(state);
    this.createTree(state);
    this.computeNodeAndLinkData(state);
    this.drawSvgAndWrappers(state);
    this.createShadowsAndGradients();
    this.drawLinks(state);
    this.drawNodes(state);
    this.setAutoBox(state);
    this.setState({ firstRender: false });

    return this;
  }

  setDynamicContainer() {
    const attrs = this.getState();

    //Drawing containers
    var container = d3_6.select(attrs.container);
    var containerRect = container.node().getBoundingClientRect();
    //if (containerRect.width > 0) attrs.svgWidth = containerRect.width;
    this.setState({ container });
  }
  calculateProperties() {
    const attrs = this.getState();

    //Calculated properties
    var calc = {
      id: null,
      chartTopMargin: null,
      chartLeftMargin: null,
      chartWidth: null,
      chartHeight: null
    };
    calc.id = 'ID' + Math.floor(Math.random() * 1000000); // id for event handlings
    calc.chartLeftMargin = attrs.marginLeft;
    calc.chartTopMargin = attrs.marginTop;
    calc.chartWidth = attrs.svgWidth - attrs.marginRight - calc.chartLeftMargin;
    calc.chartHeight =
      attrs.svgHeight - attrs.marginBottom - calc.chartTopMargin;
    calc.radius = calc.chartWidth / 2;
    calc.centerX = calc.chartWidth / 2;
    calc.centerY = calc.chartHeight / 2;
    if (attrs.svgWidth < 850) {
      this.setState({ normalCircleRadius: 26 });
      this.setState({ rootCircleRadius: 40 });
    }

    this.setState({ calc });
  }

  // Retrieve links  and nodes
  computeNodeAndLinkData({ root }) {
    const nodesData = root.descendants();
    const linksData = root.links();
    this.setState({ nodesData, linksData });
  }

  createId() {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2)
    );
  }

  // Create shadows for lines and gradient for hover lines
  createShadowsAndGradients() {
    const { svg, dropShadowId } = this.getState();

    // Initialize shadow properties
    const color = '#66FCF1';
    const opacity = 0.2;
    const filterX = -30;
    const filterY = -30;
    const filterWidth = 400;
    const filterHeight = 400;
    const feOffsetDx = 0;
    const feOffsetDy = 0;
    const feOffsetX = -100;
    const feOffsetY = -100;
    const feGaussianBlurStdDeviation = 10.1;

    // Add Gradients
    var defs = svg.patternify({
      tag: 'defs',
      selector: 'defs-element'
    });

    // Add Shadows
    var filter = defs
      .patternify({
        tag: 'filter',
        selector: 'shadow-filter-element'
      })
      .attr('id', dropShadowId)
      .attr('y', `${filterY}%`)
      .attr('x', `${filterX}%`)
      .attr('height', `${filterHeight}%`)
      .attr('width', `${filterWidth}%`);
    filter
      .patternify({
        tag: 'feGaussianBlur',
        selector: 'feGaussianBlur-element'
      })
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', feGaussianBlurStdDeviation)
      .attr('result', 'blur');
    filter
      .patternify({
        tag: 'feOffset',
        selector: 'feOffset-element'
      })
      .attr('in', 'blur')
      .attr('result', 'offsetBlur')
      .attr('dx', feOffsetDx)
      .attr('dy', feOffsetDy)
      .attr('x', feOffsetX)
      .attr('y', feOffsetY);
    filter
      .patternify({
        tag: 'feFlood',
        selector: 'feFlood-element'
      })
      .attr('in', 'offsetBlur')
      .attr('flood-color', color)
      .attr('flood-opacity', opacity)
      .attr('result', 'offsetColor');

    filter
      .patternify({
        tag: 'feComposite',
        selector: 'feComposite-element'
      })
      .attr('in', 'offsetColor')
      .attr('in2', 'offsetBlur')
      .attr('operator', 'in')
      .attr('result', 'offsetBlur');
    var feMerge = filter.patternify({
      tag: 'feMerge',
      selector: 'feMerge-element'
    });
    feMerge
      .patternify({
        tag: 'feMergeNode',
        selector: 'feMergeNode-blur'
      })
      .attr('in', 'offsetBlur');
    feMerge
      .patternify({
        tag: 'feMergeNode',
        selector: 'feMergeNode-graphic'
      })
      .attr('in', 'SourceGraphic');
  }

  createTree() {
    const {
      data,
      isTree,
      calc: { radius }
    } = this.getState();
    let tree = d3_6.cluster().size([2 * Math.PI, radius - 100]);

    if (isTree) {
      tree = d3_6
        .tree()
        .size([2 * Math.PI, radius - 100])
        .separation((a, b) => (a.parent == b.parent ? 1 : 3) / a.depth);
    }

    const root = tree(
      d3_6.hierarchy(data).sort((a, b) => d3_6.ascending(a.data.name, b.data.name))
    );

    this.setState({ tree, root });
  }

  data(data, initialDepth = 1) {
    const h = d3_6
      .hierarchy(data)
      .each(d => (d.data.id = d.data.id || this.createId()))
      .sum(d => {
        // if (d.children) return 0;
        return 1;
      });

    h.each(d => {
      if (d.data.name) {
        if (d.data.name.length > 30) {
          d.data._name = `(${d.value - 1})</br>` + d.data.name;
        } else {
          d.data._name = d.data.name + `</br>(${d.value - 1})`;
        }

        if (d.value - 1 == 0) {
          d.data._name = d.data.name;
        }
      }
      if (d.data.title) {
        d.data._name = d.data.title;
      }
    });

    h.each(d => {
      if (d.depth >= initialDepth) {
        d.data._children = d.data.children;
        d.data.children = null;
      }
    });
    this.setState({ data });
    return this;
  }

  drawNodes({
    dropShadowId,
    firstRender,
    transitionEase,
    duration,
    chart,
    tip,
    root,
    nodesWrapper,
    nodesData,
    source,
    rootCircleRadius,
    normalCircleRadius,
    svgWidth
  }) {
    const that = this;
    // Create node wrappers selection
    const nodes = nodesWrapper
      .selectAll('.node-wrapper')
      .data(nodesData, d => d.data.id || d.data.name);

    // Get enter selection
    const nodeEnter = nodes
      .enter()
      .append('g')
      .attr('class', 'node-wrapper')
      //.attr('opacity', 0)
      //     .attr(
      //         "transform",
      //         d => `
      //   rotate(${(d.x * 180) / Math.PI - 90})
      //   translate(${d.y},0)
      // `
      //     )
      .on('mouseenter.tip', function(event, d) {
        const element = d3_6.select(this).select('circle');
        if ((d.data.name || d.data.title).length > 27) {
          tip.show(event, d, element.node());
        }
      })
      .on('mouseleave.tip', tip.hide)
      .on('mouseenter.raise', function(d) {
        d3_6.select(this).raise();
      })
      .on('mouseenter', (event, d) =>
        this.handleNodeMouseEnter({ event, d, state: this.getState() })
      )
      .on('mouseleave', (event, d) =>
        this.handleNodeMouseLeave({ event, d, state: this.getState() })
      )
      .on('click', (event, d) => {
        this.handleNodeClick({ event, d, state: this.getState() });
      });

    if (firstRender) {
      nodeEnter.attr(
        "transform",
        d => `
                  rotate(${(d.x * 180) / Math.PI - 90})
                  translate(${d.y},0)
                `
      );
    }

    nodeEnter.each(function(gd) {
      d3_6.select(this)
        .append('circle')
        .attr('class', 'node-circle')
        .attr("fill", c => {
           if (c.depth == 0 || c.depth == 2) return "steelblue";
           if (c.depth == 1) return "orange";
        })
        .attr('r', d => {
          if (d.depth == 0) return rootCircleRadius;
          if (d.data.children || d.data._children) return normalCircleRadius;
          return 10;
        });
    });

    // Merge and get update selection
    var nodeUpdate = nodeEnter.merge(nodes);

    nodeUpdate.each(function(gd) {
      d3_6.select(this)
        .patternify({
          tag: 'foreignObject',
          selector: 'text-fo',
          data: d => [gd]
        })
        .attr('width', d => Math.max((normalCircleRadius - 1) * 2, 0))
        .attr('height', d => Math.max(31 * 2, 0))
        .attr('pointer-events', 'none')
        .attr('x', d => {
          if (svgWidth < 850) {
            if (d.data.children || d.data._children) return -normalCircleRadius;
            if (d.x >= Math.PI) return -(normalCircleRadius - 2) * 2 - 17;
            return 16;
          }
          if (d.data.children || d.data._children)
            return -normalCircleRadius + 1;
          if (d.x >= Math.PI) return -(normalCircleRadius - 2) * 2 - 15;
          return 16;
        })
        .attr('y', d => {
          if (svgWidth < 850) {
            return -normalCircleRadius;
          }
          return -(normalCircleRadius - 3) + 2;
        })
        .patternify({
          tag: 'xhtml:div',
          selector: 'node-text-div',
          data: d =>
            [d].map(d => {
              let _textAlign = d.x >= Math.PI ? 'end' : 'start';
              if (d.data.children || d.data._children) {
                _textAlign = 'middle';
              }

              return Object.assign(d, { _textAlign });
            })
        })
        .style('color', d => d.data.textFill)
        .style('font-size', 20 + 'px')
        .style('text-align', 'center')
        .style('line-height', 1.2)
        .html(
          d => `
                            <div style="color:${
                              d.data.children || d.data._children
                                ? 'white'
                                : 'grey'
                            };display: table; width:${Math.max(
            (normalCircleRadius - 1) * 2,
            0
          )}px; height: ${31 * 2 - 4}px; overflow: hidden;">
                               <div style="display: table-cell; vertical-align: middle;text-align:${
                                 d._textAlign
                               }">
                                 <div style="opacity:1;${
                                   !(d.data.children || d.data._children)
                                     ? 'text-overflow: ellipsis;width:65px; white-space: nowrap; overflow: hidden;'
                                     : ''
                                 }" class="node-name-wrapper">
                                 ${that.limit(
                                   d.data._name || '',
                                   d.data.children || d.data._children
                                     ? svgWidth < 850
                                       ? 30
                                       : 40
                                     : 20
                                 )}
                                 </div>
                               </div>
                       </div>`
        );
    });

    nodeUpdate
      .select('foreignObject')
      .attr('transform', d => ` rotate(${(-d.x * 180) / Math.PI + 90})`);

    nodeUpdate.selectAll('.node-circle').style('filter', null);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(duration)
      .ease(transitionEase)
      .attr('opacity', 1)
      .attr(
        "transform",
        d => `
          rotate(${(d.x * 180) / Math.PI - 90})
          translate(${d.y},0)
        `
      )
      .on('end', d => {
        nodeUpdate
          .selectAll('.node-circle')
          .style('filter', `url(#drop-shadow-id)`);
      });

    // Remove any exiting nodes
    var nodeExit = nodes
      .exit()
      .transition()
      .duration(0)
      .ease(transitionEase)
      .attr('opacity', 0)
      .attr(
        "transform",
        d => `
          rotate(${(d.x * 180) / Math.PI - 90})
          translate(${d.y},0)
        `
      )
      .remove()
      .selectAll('circle')
      .attr('r', 0);
    this.setState({ svgNodeGroups: chart.selectAll('.node-wrapper') });
  }

  drawLinks({
    initialLinkColor,
    transitionEase,
    duration,
    chart,
    root,
    linksWrapper,
    linksData,
    source
  }) {
    // Link paths selection
    const links = linksWrapper
      .selectAll('path.link')
      .data(linksData, d => d.target.data.id);

    // Get and draw enter selection
    var linkEnter = links
      .enter()
      .append('path')
      .attr('class', 'link')

      .attr("d", d =>
        d3_6
          .linkRadial()
          .angle(d => d.x)
          .radius(d => d.y)({ source: d.source, target: d.source })
      );

    // Get and draw update selection
    const linkUpdate = linkEnter
      .merge(links)
      .attr("fill", "none")
      .attr("stroke", initialLinkColor)
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .classed('svg-links', true)
      .attr('pointer-events', 'none');

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(duration)
      .ease(transitionEase)
      .attr('opacity', 1)
      .attr("d", d =>
        d3_6
          .linkRadial()
          .angle(d => d.x)
          .radius(d => d.y)(d)
      );

    // Remove any exiting links
    var linkExit = links
      .exit()
      .transition()
      .ease(transitionEase)
      .duration(0)
      // .attr('opacity', 0)

      .attr("d", d =>
        d3_6
          .linkRadial()
          .angle(d => d.x)
          .radius(d => d.y)(d)
      )
      .remove();

    this.setState({ svgLinks: linkUpdate });
  }

  drawSvgAndWrappers() {
    const {
      container,
      svgHeight,
      defaultFont,
      svgWidth,
      calc
    } = this.getState();

    const { centerX, centerY } = calc;

    // Draw SVG
    const svg = container
      .patternify({
        tag: 'svg',
        selector: 'svg-chart-container'
      })

      .style('overflow', 'visible')
      .attr('preserveAspectRatio', 'xMidYMid meet')
      // .attr('height', svgHeight)
      // .attr('width', svgWidth)
      .attr('font-family', defaultFont);

    svg
      .patternify({ tag: 'rect', selector: 'boundary-rect' })
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('fill', 'none');

    /* Initialize tooltip */
    const tip = d3_6
      .tip()
      .offset([-80, 0])
      .attr('class', 'd3-tip')
      .html((EVENT, d) => d.data.name || d.data.title);

    /* Invoke the tip in the context of your visualization */
    svg.call(tip);

    //Add container g element
    var innerWrap = svg
      .patternify({
        tag: 'g',
        selector: 'inner-wrapper'
      })
      .attr(
        'transform',
        'translate(' + calc.chartLeftMargin + ',' + calc.chartTopMargin + ')'
      );

    //Add container g element
    var chart = innerWrap
      .patternify({
        tag: 'g',
        selector: 'chart'
      })
      .attr('transform', 'translate(' + centerX + ',' + centerY + ')');

    // Draw link and node wrappers
    const linksWrapper = chart.patternify({
      tag: 'g',
      selector: 'links-wrapper'
    });
    const nodesWrapper = chart.patternify({
      tag: 'g',
      selector: 'nodes-wrapper'
    });

    this.setState({ chart, svg, linksWrapper, nodesWrapper, tip });
  }

  handleNodeClick({ event, d, state: { svgCircles, svgLinks, tip, root } }) {
    tip.hide();

    d.eachAfter(ch => {
      if (d.data.children && ch.data.children && d != ch) {
        ch.data._children = ch.data.children;
        ch.data.children = null;
      }
    });

    if (d.data.children) {
      d.data._children = d.data.children;
      d.data.children = null;
    } else {
      d.data.children = d.data._children;
      d.data._children = null;
      this.limitMaximumVisibleNodes({
        max: 40,
        node: d,
        root: root
      });
    }
    this.setState({ source: d });
    this.updateTree(this.getState());
  }

  handleNodeMouseEnter({
    event,
    d: nodeData,
    state: { svgNodeGroups, svgLinks, onNodeMouseEnter }
  }) {
    onNodeMouseEnter(nodeData);
    let highlight = [];
    let ancestors = nodeData.ancestors();
    let descendants = nodeData.descendants();
    if (nodeData.depth == 0) {
      highlight = ancestors;
    } else {
      highlight = ancestors.concat(descendants);
    }

    svgLinks
      .filter(d => highlight.includes(d.target))
      .raise()
      .attr('stroke', '#1493C8')
      .classed('active', true)
      .attr('stroke-width', 5);

    svgNodeGroups
      .filter(d => highlight.includes(d))
      .classed('active', true)
      .raise()
      .attr('cursor', d =>
        d.data.children || d.data._children
          ? 'pointer'
          : Math.round(Math.random())
          ? 'no-drop'
          : 'copy'
      )
      .select('circle')
      .attr('fill', '#1493C8')

      .transition()
      .duration(500)
      .ease(d3_6.easeElastic)
      .attr('r', function(d) {
        if (d == nodeData) return +d3_6.select(this).attr('r') + 5;
        return d3_6.select(this).attr('r');
      });

    const template = {
      fill: 'white',
      stroke: '#2E2C2C'
    };
    const nodes = ancestors.map(d =>
      Object.assign({}, template, {
        text: d.data.name || d.data.title,
        node: d
      })
    );
  }

  handleNodeMouseLeave({
    event,
    d,
    state: {
      initialLinkColor,
      svgNodeGroups,
      svgLinks,
      normalCircleRadius,
      rootCircleRadius,
      onNodeMouseLeave
    }
  }) {
    onNodeMouseLeave(d);
    svgLinks
      .classed('active', false)
      .attr('stroke', initialLinkColor)
      .attr('stroke-width', 1.5);
    svgNodeGroups
      .classed('active', false)
      .attr('cursor', 'auto')
      .select('circle')
      .attr('fill', c => {
         if (c.depth == 0 || c.depth == 2) return "steelblue";
         if (c.depth == 1) return "orange";
      })
      .transition()
      .ease(d3_6.easeElastic)
      .duration(500)
      .attr('r', d => {
        if (d.depth == 0) return rootCircleRadius;
        if (d.data.children || d.data._children) return normalCircleRadius;
        return 10;
      });
  }

  limit(string, number) {
    var points = '';
    var diff = 0;
    if (number < string.length) {
      points = '...';
      diff = 3;
    }
    string = string.slice(0, number - diff);
    return string + points;
  }

  limitMaximumVisibleNodes({ max, node, root }) {
    let { slowDuration } = this.getState();
    const descendants = root.descendants();

    let currentNodeCount =
      descendants.length + (node.data.children || []).length;
    if (currentNodeCount >= max) {
      const ancestors = node.ancestors();
      root.eachAfter(ch => {
        if (ch.data.children && !ancestors.includes(ch)) {
          ch.data._children = ch.data.children;
          ch.data.children = null;
        }
      });
      this.setState({ duration: slowDuration });
    }
  }

  updateData(data) {
    const attrs = this.getChartState();
    return this;
  }

  // Update tree chart
  updateTree() {
    const state = this.getState();

    // Compute new nodes and links data
    this.createTree(state);
    this.computeNodeAndLinkData(state);
    this.drawNodes(state);
    this.drawLinks(state);
    this.setState({ duration: state.initialDuration });
  }

  open(hierarchicalNode) {
    const state = this.getState();

    hierarchicalNode.ancestors().forEach(parent => {
      if (parent.data._children && parent != hierarchicalNode) {
        parent.data.children = parent.data._children;
        parent.data._children = null;
      }
    });

    // Compute new nodes and links data
    this.createTree(state);

    const node = state.root
      .descendants()
      .filter(d => d.data == hierarchicalNode.data)[0];

    this.limitMaximumVisibleNodes({
      max: 40,
      node: node,
      root: state.root
    });

    this.setState({ source: state.root });
    this.updateTree(this.getState());

    const nodeNew = state.root
      .descendants()
      .filter(d => d.data == hierarchicalNode.data)[0];

    this.handleNodeMouseLeave({
      event: null,
      d: nodeNew,
      state: this.getState()
    });
    this.handleNodeMouseEnter({
      event: null,
      d: nodeNew,
      state: this.getState()
    });
  }

  loopOver(root, callback) {
    if (root.children) {
      root.children.forEach(d => {
        this.loopOver(d, callback);
      });
    }
    if (root._children) {
      root._children.forEach(d => {
        this.loopOver(d, callback);
      });
    }
    callback(root);
  }
}
)}

function _data3(deal_data,chart){return(
deal_data(chart.__data__["data"]["name"])
)}

function _deal_data(deepClone1,my_flare){return(
function deal_data(thekey) {
  var data4 = {"name":thekey,"children":[]};
  var arr = deepClone1(my_flare);
  for(var i in arr[thekey]){
    arr[arr[thekey][i]].splice(arr[arr[thekey][i]].indexOf(thekey),1);   //删除主节点
    var zi = [];
    for(var j in arr[arr[thekey][i]]){
      zi.push({"name":arr[arr[thekey][i]][j]}); 
    }
    var tiname = arr[thekey][i].split("(");
    data4["children"].push({"name":tiname[1].slice(0,-1),"children":zi});  //添加子节点
  }
  return data4;
}
)}

function _my_flare(FileAttachment){return(
FileAttachment("my_flare@5.json").json()
)}

function _deepClone1(){return(
function deepClone1(obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是
  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone1(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
)}

function _aaa(){return(
"U269(KX201)".split("(")
)}

function _29(aaa){return(
aaa[1].slice(0,-1)
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["my_newflared_w_color - 2.json", {url: "https://static.observableusercontent.com/files/2c47899a928b038d595eaef2e5a5109fd15afc6437d40890b21626d925af4ed224fb8d74b79ca479ad5e2ffd7f88ef7a679622478d16fc17d2648592a5febc99", mimeType: "application/json", toString}],
    ["my_flare@5.json", {url: "https://static.observableusercontent.com/files/e77f7f0f8556bfc95895e26d37e76a2792ec8679fe16e20b151ae01ca6736258b8e13d921c01c397fffbc4241a8ed663dcee473488b7b8795b852dd7cc3e7429", mimeType: "application/json", toString}],
    ["my_newflared_w_color - 3@2.json", {url: "https://static.observableusercontent.com/files/03a62b6668ca0af243969c295681a65f504842ff450b55ce0ea25574d43a9077336c5581bf5ddc6645adc5abbf9b9474f040dee65a2a0605ce87e160c3339f89", mimeType: "application/json", toString}],
    ["my_newflared_w_color - 3@3.json", {url: "https://static.observableusercontent.com/files/03a62b6668ca0af243969c295681a65f504842ff450b55ce0ea25574d43a9077336c5581bf5ddc6645adc5abbf9b9474f040dee65a2a0605ce87e160c3339f89", mimeType: "application/json", toString}],
    ["my_newflared_w_color - 3@4.json", {url: "https://static.observableusercontent.com/files/33e12af65b0d10c9f19ad9ed80678ec7e45f34f2415b4a1914a55dd1d434163449ddda415d7b21ec5874d4a201a0be56cce5cac8d07a7fc5e99bd811bdbcf3e7", mimeType: "application/json", toString}],
    ["my_newflared_w_color - 3@5.json", {url: "https://static.observableusercontent.com/files/3ad1f57c4250153f668f981f16ca1b53e41ec34c98d6c3a0b93fa831275b800b763ef28d63ffc0989906c88f6777f904cd28ab82b0f2c67dd85fa7911d18cb1d", mimeType: "application/json", toString}],
    ["my_newflare_xinwangzhan.json", {url: "https://static.observableusercontent.com/files/b379a236d3aefe07063edc4da2fe188925f4f4f41373721fdb3903526cfa7315c0b5f099f4f6bef3947f713dd09feb6cb287c01a8edcfc5c348dfe26fbdf85e8", mimeType: "application/json", toString}],
    ["my_newflare_xinwangzhan@1.json", {url: "https://static.observableusercontent.com/files/acb15b08f3edd65f0130c9ee4e8d6307ba34f7752a1ec172617618a7ca4597163873370e0d5285f4bbb7bea5c2d30ee9947615bb6c17d6dbd2166081d2771a0d", mimeType: "application/json", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("container")).define("container", ["d3"], _container);
  main.variable(observer("chartContainer")).define("chartContainer", ["html"], _chartContainer);
  main.variable(observer("viewof chart")).define("viewof chart", ["tree","bilink","d3","data","colornone","line","colorin","colorout"], _chart);
  main.variable(observer("chart")).define("chart", ["Generators", "viewof chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["chart"], _5);
  main.variable(observer("data")).define("data", ["hierarchy","FileAttachment"], _data);
  main.variable(observer("hierarchy")).define("hierarchy", _hierarchy);
  main.variable(observer("bilink")).define("bilink", ["id"], _bilink);
  main.variable(observer("id")).define("id", _id);
  main.variable(observer("colorin")).define("colorin", _colorin);
  main.variable(observer("colorout")).define("colorout", _colorout);
  main.variable(observer("colornone")).define("colornone", _colornone);
  main.variable(observer("width")).define("width", _width);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer("radius")).define("radius", ["width"], _radius);
  main.variable(observer("line")).define("line", ["d3"], _line);
  main.variable(observer("tree")).define("tree", ["d3","radius"], _tree);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("d3_6")).define("d3_6", ["require"], _d3_6);
  main.variable(observer("chart3")).define("chart3", ["NetworkChart","chartContainer","data3"], _chart3);
  main.variable(observer("my_newflared_w_color31")).define("my_newflared_w_color31", ["FileAttachment"], _my_newflared_w_color31);
  main.variable(observer("NetworkChart")).define("NetworkChart", ["d3_6"], _NetworkChart);
  main.variable(observer("data3")).define("data3", ["deal_data","chart"], _data3);
  main.variable(observer("deal_data")).define("deal_data", ["deepClone1","my_flare"], _deal_data);
  main.variable(observer("my_flare")).define("my_flare", ["FileAttachment"], _my_flare);
  main.variable(observer("deepClone1")).define("deepClone1", _deepClone1);
  main.variable(observer("aaa")).define("aaa", _aaa);
  main.variable(observer()).define(["aaa"], _29);
  return main;
}
