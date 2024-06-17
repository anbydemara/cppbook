<template>
  <div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{ active: activeTab === index }"
      >
        {{ tab.title }}
        <div v-if="activeTab === index" class="underline"></div>
      </div>
    </div>
    <hr />
    <div class="tab-content">
      <div v-if="activeTab === 0">
        <p>讲授C语言二十年，一直为C语言的灵活和强大感慨。虽然JAVA，Python等新的语言层出不穷，广受关注，但从基本编程思想的角度出发，计算机专业的学生，还是要首先学习C/C++。2019年开始，根据专业培养需要，整个学院的第一门编程语言统一修改为C/C++。与C语言相比，C++不仅提供了流、引用等新增语法，而且提供了面向对象、泛型编程等。从算法角度，STL的出现极大提升了C++的应用范围。太多的新知识，对于大一的初学者不是一件好事。从新手的角度，更多地应该掌握编程的基本语法和基本理念。因此本教程并不贪大求全，对内容做了精简。第一章描述了一些学习的知识准备；第二章至第六章，主要从面向过程的角度，讲授基本语法和基本算法。函数是一种编程理念，没有独立成为一个章节，并且从第三章就早早引入，希望初学者能够在潜移默化中接受这样一种思想。第七章的面向对象不是本教材的重点，它的出现仅仅是为了学习者能更好地了解STL中各种奇怪的语法形式，并为后继专业课的学习奠定基础。第八章以模板和容器为主，并没有逐个讲解每个API的用法，而是以案例为引导，让学习者能够用容器解决一些典型的算法问题。</p>
      </div>
      <div v-if="activeTab === 1">
        <p>
          我们一直认为，编程的学习应该以学习者为主体，以编程实践为主要学习方式，因此根据教程内容，提供了大量的习题，用于巩固和加深对理论内容的理解。教师在这个过程中，主要应该起到引导并解决关键问题的作用。但在具体教学实践过程中发现，刚刚入学的大一新生受中学阶段学习方式影响比较严重，缺乏主动学习精神。很多同学反映上课都能听得懂，但是做题时还是无从下手。这主要是因为不能把知识打通，建立彼此的联系。因此本教程对每个小节都进行了总结和提炼，通过双链建立知识点之间的依存关系，打通知识壁垒，建立知识网络。此外，对绝大部分的知识点，都指明关联的习题；对每个习题，都明确标注出相关的知识点，学习者在做题的过程中，可以反向学习相关的知识点，并参考相关的代码示例，完成习题的过程中，不断加深理解，树立信心。
        </p>

        <p>
          本教程所有内容有同步的电子版，链接地址为
          <a href="https://www.qingline.net/cppbook/" target="blank">https://www.qingline.net/cppbook/</a>
          。所有知识点的正链和反链、以及相关的习题都添加了链接。在每一章的最后，都添加了题单。题单中不仅提供了相应习题的链接，也提供了对应的知识点链接。第二章到第七章的习题部署在
          洛谷 上，而第八章主要根据题目特点，采用了 力扣
          上相关的习题进行支撑。将习题部署在洛谷、力扣等公开知名的网站上，就是为了更多的人群能够受益。为了更好地进行教学管理，所有习题在
          <a href="https://pintia.cn/" target="blank">https://pintia.cn/</a>
          网站上建立了副本，教师能够更好地掌握学生的完成情况，并可以获得所有习题的源代码。
        </p>

        <p>
          所有知识点按照T“XYZ”的方式进行编号，其中T为前缀，X表示章节号，Y表示小节号，而Z表示序号。因为个别章节中的小节比较多，个别小节中的知识点较多，为了满足每个编号只有一位的排版需求，采用十六进制进行编号。所有习题按照LX“ABC”进行编号，其中LX为前缀，A为章节号，BC为两位序号。根据知识点和习题的编号，可以快速了解所属的章节位置。
        </p>

        <p>
          对于教程中的例题，不要孤立的看待。而是应该理解其解题思路和语法、算法的使用，将其作为模板，能够用于解决相似的问题，构建解决复杂问题的“积木块”。随堂练习是为了给教师提供与学生交互的机会，这些随堂练习与讲解的内容紧密相关，内容相对简单，促进消化理解。
        </p>

        <p>
          部分小节内容比较深，与编译原理、操作系统、组成原理等计算机软硬件知识关联比较紧密。本教程在对应小节上用
          *
          进行标注，在学习时根据个人具体情况进行抉择。理解这些内容对计算机专业课的学习会有所帮助，但初学者如果暂时承受不了，可以先行跳过。
        </p>
      </div>
      <div v-if="activeTab === 2"><p>在本书的撰写过程中，李文龙、孙百乐、刘镇毅、廖集秀、杨述敏、刘雯、邱元博和韩睿毅分别进行了第一章到第八章的编辑、整理和校对工作。魏子帅、李青阳、王乐宇、韩冰、徐程林同学为习题和测试用例的编写做了大量辛勤的工作。王富胜、赵晓飞、刘凯、郭华、类兴华同学也为这本教材付出了汗水。感谢“清览题库”对本书的电子资源进行支撑，本书的所有电子版资料都会在该网站上发布。还有很多朋友都提出了宝贵的意见，学生们在试用后的诸多反馈也成为了我们前进的动力。在此一并感谢！</p></div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [{ title: "前言" }, { title: "如何学习本教程" }, { title: "致谢" }],
    };
  },
};
</script>
  
  <style scoped>
.tabs {
  display: flex;
  justify-content: flex-start;
  position: relative;
}

.tabs > div {
  cursor: pointer;
  padding: 10px;
  position: relative;
  font-family: "Alimedium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 100% */
  color: #bbbbbb;
  margin-right: 32px;
  transition: color 0.3s ease, font-size 0.3s ease;
}

.tabs > div:last-child {
  margin-right: 0;
}

.tabs > div.active {
  color: #131313;
  font-size: 20px;
  font-weight: 900;
}

.underline {
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 5px;
  background: #0062f2;
  transition: all 0.3s ease;
  z-index: 2;
}

hr {
  border: 0;
  height: 1px;
  background: #ccc;
  position: relative;
  z-index: 1;
}

.tab-content p {
  font-family: "Alimedium";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 32px;
  /* or 200% */
  text-align: justify;
  color: #666666;
  margin-top:20px;
}

a {
  text-decoration: none;
}
</style>
  