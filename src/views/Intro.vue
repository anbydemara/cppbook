<template>
<div class="whole-page">
  <div class="self-main">
    <div class="chapter-title">✋前言</div>
    <div class="lake-content" ref="content-data" typography="classic">
      <div class="self-section">
      <p class="ne-p" id="u11b51795" style="text-indent: 2em">
        <span class="ne-text">
          讲授C语言二十年，一直为C语言的灵活和强大感慨。虽然JAVA，Python等新的语言层出不穷，广受关注，但从基本编程思想的角度出发，计算机专业的学生，还是要首先学习C/C++。2019年开始，根据专业培养需要，整个学院的第一门编程语言统一修改为C/C++。与C语言相比，C++不仅提供了流、引用等新增语法，而且提供了面向对象、泛型编程等。从算法角度，STL的出现极大提升了C++的应用范围。太多的新知识，对于大一的初学者不是一件好事。从新手的角度，更多地应该掌握编程的基本语法和基本理念。因此本教程并不贪大求全，对内容做了精简。第一章描述了一些学习的知识准备；第二章至第六章，主要从面向过程的角度，讲授基本语法和基本算法。函数是一种编程理念，没有独立成为一个章节，并且从第三章就早早引入，希望初学者能够在潜移默化中接受这样一种思想。第七章的面向对象不是本教材的重点，它的出现仅仅是为了学习者能更好地了解STL中各种奇怪的语法形式，并为后继专业课的学习奠定基础。第八章以模板和容器为主，并没有逐个讲解每个API的用法，而是以案例为引导，让学习者能够用容器解决一些典型的算法问题。
        </span>
      </p>
      </div>
      <div class="self-section">
      <h1 id="t6UmF">
        <span class="ne-text"> 如何学习本教程？ </span>
      </h1>
      <p class="ne-p" id="u429ccece" style="text-indent: 2em">
        <span class="ne-text">
          我们一直认为，编程的学习应该以学习者为主体，以编程实践为主要学习方式，因此根据教程内容，提供了大量的习题，用于巩固和加深对理论内容的理解。教师在这个过程中，主要应该起到引导并解决关键问题的作用。但在具体教学实践过程中发现，刚刚入学的大一新生受中学阶段学习方式影响比较严重，缺乏主动学习精神。很多同学反映上课都能听得懂，但是做题时还是无从下手。这主要是因为不能把知识打通，建立彼此的联系。因此本教程对每个小节都进行了总结和提炼，通过双链建立知识点之间的依存关系，打通知识壁垒，建立知识网络。此外，对绝大部分的知识点，都指明关联的习题；对每个习题，都明确标注出相关的知识点，学习者在做题的过程中，可以反向学习相关的知识点，并参考相关的代码示例，完成习题的过程中，不断加深理解，树立信心。
        </span>
      </p>
      <p class="ne-p" id="u14e29086" style="text-indent: 2em">
        <span class="ne-text"> 本教程所有内容有同步的电子版，链接地址为 </span>
        <a
          class="ne-link"
          data-href="https://www.qingline.net/cppbook/"
          href="https://www.qingline.net/cppbook/"
          target="_blank"
        >
          <span class="ne-text"> https://www.qingline.net/cppbook/ </span>
        </a>
        <span class="ne-text">
          。所有知识点的正链和反链、以及相关的习题都添加了链接。在每一章的最后，都添加了题单。题单中不仅提供了相应习题的链接，也提供了对应的知识点链接。第二章到第七章的习题部署在
        </span>
        <a
          class="ne-link"
          data-href="https://www.luogu.com.cn/"
          href="https://www.luogu.com.cn/"
          target="_blank"
        >
          <span class="ne-text"> 洛谷 </span>
        </a>
        <span class="ne-text"> 上，而第八章主要根据题目特点，采用了 </span>
        <a
          class="ne-link"
          data-href="https://leetcode.cn/"
          href="https://leetcode.cn/"
          target="_blank"
        >
          <span class="ne-text"> 力扣 </span>
        </a>
        <span class="ne-text">
          上相关的习题进行支撑。将习题部署在洛谷、力扣等公开知名的网站上，就是为了更多的人群能够受益。为了更好地进行教学管理，所有习题在
        </span>
        <a
          class="ne-link"
          data-href="https://pintia.cn/"
          href="https://pintia.cn/"
          target="_blank"
        >
          <span class="ne-text"> https://pintia.cn/ </span>
        </a>
        <span class="ne-text">
          网站上建立了副本，教师能够更好地掌握学生的完成情况，并可以获得所有习题的源代码。
        </span>
      </p>
      <p class="ne-p" id="u48251ff3" style="text-indent: 2em">
        <span class="ne-text">
          所有知识点按照T“XYZ”的方式进行编号，其中T为前缀，X表示章节号，Y表示小节号，而Z表示序号。因为个别章节中的小节比较多，个别小节中的知识点较多，为了满足每个编号只有一位的排版需求，采用十六进制进行编号。所有习题按照LX“ABC”进行编号，其中LX为前缀，A为章节号，BC为两位序号。根据知识点和习题的编号，可以快速了解所属的章节位置。
        </span>
      </p>
      <p class="ne-p" id="ua87ef3d7" style="text-indent: 2em">
        <span class="ne-text">
          对于教程中的例题，不要孤立的看待。而是应该理解其解题思路和语法、算法的使用，将其作为模板，能够用于解决相似的问题，构建解决复杂问题的“积木块”。随堂练习是为了给教师提供与学生交互的机会，这些随堂练习与讲解的内容紧密相关，内容相对简单，促进消化理解。
        </span>
      </p>
      <p class="ne-p" id="u5ef0c050" style="text-indent: 2em">
        <span class="ne-text">
          部分小节内容比较深，与编译原理、操作系统、组成原理等计算机软硬件知识关联比较紧密。本教程在对应小节上用
        </span>
        <code class="ne-code">
          <span class="ne-text"> * </span>
        </code>
        <span class="ne-text">
          进行标注，在学习时根据个人具体情况进行抉择。理解这些内容对计算机专业课的学习会有所帮助，但初学者如果暂时承受不了，可以先行跳过。
        </span>
      </p>
      </div>
      <div class="self-section">
      <h1 id="Wbz2t">
        <span class="ne-text"> 致谢 </span>
      </h1>
      <p class="ne-p" id="u3dbcdbe6" style="text-indent: 2em">
        <span class="ne-text">
          在本书的撰写过程中，李文龙、孙百乐、刘镇毅、廖集秀、杨述敏、刘雯、邱元博和韩睿毅分别进行了第一章到第八章的编辑、整理和校对工作。魏子帅、李青阳、王乐宇、韩冰、徐程林同学为习题和测试用例的编写做了大量辛勤的工作。王富胜、赵晓飞、刘凯、郭华、类兴华同学也为这本教材付出了汗水。感谢“清览题库”对本书的电子资源进行支撑，本书的所有电子版资料都会在该网站上发布。还有很多朋友都提出了宝贵的意见，学生们在试用后的诸多反馈也成为了我们前进的动力。在此一并感谢！
        </span>
      </p>
      </div>
    </div>
  </div>
  <!-- outline -->
  <div class="self-outline" v-show="outlineShow" ref="scrollBox">
      <div class="outline-title">大纲</div>
      <ul ref="nav" class="self-nav">
          <li v-for="(sec, index) in outline" :key="index" :title="sec.content" @click="scrollTo(index)" 
              :class="{ activeOutline: activeIndex === index }" ref="outlineNode">
              <div :style="{ marginLeft: leftMargin(sec.id) }">{{ sec.title }}</div>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            outline: [],
            activeIndex: 0,
            height: 0,  // 保存当前页面距离顶部的距离
            headersHeight: [],
            timer: null,    // 定时器
            isDown: true,  // 鼠标滚动方向
            originActive: 0,    // 保存上一个激活大纲项
            outlineNodes: [],   // 保存大纲的所有节点
            clickToScroll: false,   // 用于防止点击大纲时大纲会滚动
            outlineShow: this.$store.state.outlineShow
        }
    },
    watch: {
        "$store.state.outlineShow":{
            handler:function(newVal, oldVal){
                this.outlineShow = newVal
            }
        },
    },
    beforeMount() {
        window.addEventListener("scroll", this.pageScroll);
    },
    mounted() {
        this.$store.dispatch('toChapter', 2);
        this.pageScroll();  // 初始化各个区域滚动位置

        this.getContent();
        // this.$nextTick(() => {
        //     this.goAnchor(window.location.hash);
        // });
        hljs.initHighlightingOnLoad();
        // hljs.highlightAll();
        hljs.initLineNumbersOnLoad({
            singleLine: true,
            // startFrom: 5,
        });
        
        this.mouseWheel();

    },
    
    methods: {
        goAnchor(selector) {
            if(selector){
                let elm = document.getElementById(selector.replace('#',''))
                elm.scrollIntoView(true)
            }
        },
        // 获取大纲
        getContent() {
            let contentDom = this.$refs['content-data']; 
            let content = this.$refs['content-data'].innerHTML;
            let toc = content.match(/<(h[1-2]).*?\><span.*?>.*?<\/span><\/[hH][1-2]>/g); 
            let arr = toc.map((item) => {
                let data = item.match(/^<[Hh](\d).*?><span.*?>(.*?)</);
                return { id: data[1], title: data[2] };
            });
            this.outline = arr
            for (let index = 0; index < toc.length; index++) {
                const origin = toc[index];
                toc[index] = `<div id='scroll${index}' class='scroll-loc'>${toc[index]}</div>`
                content = content.replace(origin, toc[index])
            }
            contentDom.innerHTML = content;
        },
        getOutlineNodes() {
            this.outlineNodes = this.$refs['outlineNode'];
        },
        // 动态调整大纲左边距
        leftMargin(num) {
            return num == 1 ? 15 + 'px':40 + 'px'
        },
        // 点击调整到序号为index的标题位置
        scrollTo(index) {   
            this.activeIndex = index;
            const id = 'scroll'+index;
            let target = document.getElementById(id).offsetTop;
            if (target) {
                window.scrollTo({
                    // top: target - 80,
                    // top: target - 64    //  BaseHeader -> 64 px high
                    top: target - 64
                });
                this.clickToScroll = true;
            }
        },

        // 页面滚动监听handler
        pageScroll() {
            if (this.timer) return;
            this.timer = window.setTimeout(() => {
                // 获取当前位置（view区域top）与页面top的距离
                let _scrollTop =window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
                // this.height = _scrollTop + 64;  //  BaseHeader -> 64 px high
                this.height = _scrollTop + 64;
                this.timer = null;  // 获取到后就清除定时器
                this.getHeadersHeight();
                this.setActiveIndex();
                this.outlineScroll();   // 滚动大纲
            }, 500);
        },
        
        // 获取所有标题距离顶部的距离
        getHeadersHeight() {
            let headers = document.querySelectorAll('.scroll-loc');
            let arr = [];
            for (let index = 0; index < headers.length; index++) {
                // arr.push(headers[index].offsetTop - 60);    //  BaseHeader -> 64 px high  误差用于防止两个标题之间太紧密
                arr.push(headers[index].offsetTop - 5);
            }
            this.headersHeight = arr; 
        },

        // 判断高亮
        setActiveIndex() {
            let arr = this.headersHeight;
            if (arr[0] > this.height) { // 在第一个标题之上
                return (this.activeIndex = 0);
            } 
            if (arr[arr.length - 1] < this.height) { // 在最后一个标题之下
                return (this.activeIndex = arr.length - 1);
            }
            for (let i = 0; i < arr.length - 1; i++) {  // 位于标题i于标题i+1之间
                if (arr[i] < this.height && arr[i + 1] > this.height) {
                    return (this.activeIndex = i);
                }
            }
        },

        // 鼠标滚动监听事件
        mouseScroll(e) {
            e = e || window.event;
            if (e.wheelDelta) {
                //判断浏览器IE，谷歌滑轮事件
                if (e.wheelDelta > 0) {
                    //当滑轮向上滚动时
                    this.isDown = false;
                }
                if (e.wheelDelta < 0) {
                    //当滑轮向下滚动时
                    this.isDown = true;
                }
            } else if (e.detail) {
                //Firefox滑轮事件
                if (e.detail > 0) {
                    //当滑轮向上滚动时
                    this.isDown = false;
                }
                if (e.detail < 0) {
                    //当滑轮向下滚动时
                    this.isDown = false;
                }
            }
        },
        mouseWheel() {
            if (document.addEventListener) {
                //火狐使用DOMMouseScroll绑定
                document.addEventListener("DOMMouseScroll", this.mouseScroll, false);
            }
            //其他浏览器直接绑定滚动事件
            document.addEventListener("mousewheel", this.mouseScroll);
        },

        // 大纲滚动
        outlineScroll() {
            if (this.originActive === this.activeIndex) return;

            // 滚动区域（可视区域）一半高度
            let midHeight = this.$refs['scrollBox'].clientHeight / 2;
            if (!this.outlineNodes.length) {
                this.getOutlineNodes();
            }
            // 当前激活项距离顶部距离
            let offsetTop = this.outlineNodes[this.activeIndex].offsetTop;

            this.originActive = this.activeIndex;
            if (this.clickToScroll) {
                // 如果时手动点击大纲，则大纲不自适应滚动
                this.clickToScroll = false;
                return
            }

            // if (offsetTop > this.outlineNodes[this.outlineNodes.length - 1].offsetTop - midHeight && this.isDown) {
            //     // return;     // 滚到了最后几项
            // }
            
            if (offsetTop > midHeight) {
                this.$refs['scrollBox'].scroll(0, offsetTop - midHeight + 19);     // outline -> li height = 38
            }
            if (offsetTop <= midHeight) {   // 解决：向上回滚未完整归位 and 向下（隐藏...）未自适应
                this.$refs['scrollBox'].scroll(0, 0);     
            }


        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.pageScroll);
        document.removeEventListener('mousewheel', this.mouseScroll);
        document.removeEventListener('DOMMouseScroll', this.mouseScroll);
    },
};
</script>