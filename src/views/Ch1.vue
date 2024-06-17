<template>
  <div class="whole-page">
    <!-- content -->
    <div class="self-main">
      <div class="chapter-title">✋第一章 学习准备</div>
<div class="lake-content" ref="content-data" typography="classic">
<!-- section 1 -->
<div class="self-section">
 <h1 id="YuMV6">
  <span class="ne-text">
   1. 教程特色
  </span>
 </h1>
 <h2 id="V7ODA">
  <span class="ne-text">
   1.1 双链知识网络
  </span>
 </h2>
 <p class="ne-p" id="u6610731a" style="text-indent: 2em">
  <span class="ne-text">
   C/C++发展至今，存在大量的语法和知识点，容易让学习者茫然无措，不知从何下手。本教程仔细梳理了初学者应该必备的知识点，按照从易到难的顺序进行组织，并在每个小节进行总结。构建了知识点之间的双链依存关系，形成知识网络。并按照知识点的顺序构建了习题，进一步构建了知识点和习题之间的双链关系。信息粒度是双链知识网络的最核心优势。将大块的知识细化为一个个相对独立的知识点，并把各个知识点从原有的语境中解放（抽象）出来，进而形成能够在长时间的考验下保留下来的知识。这样，当遇到新问题的时候，能迅速链接已有知识结构，解决新目标。
  </span>
 </p>
 <h2 id="yrnwB">
  <span class="ne-text">
   1.2 面向OJ系统
  </span>
 </h2>
 <p class="ne-p" id="uf6c5a64d" style="text-indent: 2em">
  <span class="ne-text">
   计算机是一门应用科学，实践是学习编程不变的真理。目前互联网上有大量开放的在线评测（Online Judge,
            OJ）系统，例如洛谷、力扣和PTA等。OJ系统能够对学习者编写的代码进行实时反馈，面向实际应用，解决实际问题，是现代编程学习的必备环节。
  </span>
 </p>
 <p class="ne-p" id="u3c2f109f" style="text-indent: 2em">
  <span class="ne-text">
   OJ系统的存在具有时代必然性。从实战角度出发，需要很多特别的技巧。本教程在讲解过程中，特别注意对这些实战技巧的引导。习题布置在洛谷、力扣等开放性OJ平台上，就是为了让更多的学习者能够受益。同时在PTA系统上布置了习题的副本，利于教师对教学进度的掌控。事实上，只有通过在OJ系统上的不断练习，才能掌握真正的编程能力，对学生未来读研和找工作都具有巨大的好处。
  </span>
 </p>
 <h2 id="xFbAp">
  <span class="ne-text">
   1.3 简明原则
  </span>
 </h2>
 <p class="ne-p" id="udff1af82" style="text-indent: 2em">
  <span class="ne-text">
   大学中目前普遍存在的现象就是课时不足。如何在有限的课时里让学生掌握最主要的部分是一个挑战。因此在编著本教程时，不求面面俱到，只要学生能对实战编程的要点进行掌握即可。例如switch，goto等不建议使用的语法，在本教程中不会出现。知识学习有用即可，“多”绝大部分时候都是给学生带来负面影响，阻碍学习的积极性。简明也体现在代码的书写优化上。每增加一行代码，甚至多增加一个字符，都会增加一份出错的概率。本教程在给出例题解决方案时，力求简洁，用最有效的方式完成。长期进行这种训练，能够提升学习者的计算思维。
  </span>
 </p>
 <h2 id="vSLPn">
  <span class="ne-text">
   1.4 易用原则
  </span>
 </h2>
 <p class="ne-p" id="ua66ee474" style="text-indent: 2em">
  <span class="ne-text">
   作为第一门编程课，很多同学迟迟不能入门，这是对计算机专业认知的一个重要阻碍。因此本教程在构造时，从问题下手，对于解决同一问题的多种方法，讲解最简单的方式，让学生快速入门，建立成就感，形成正反馈。易用原则对学习是一个重要的原则。
  </span>
 </p>
 <p class="ne-p" id="u666e10e3" style="text-indent: 2em">
  <span class="ne-text">
   例如在输入方式上，可以用C语言的scanf，也可以用C++的cin，但是很明显cin在书写和理解上都要更加简单方便，因此教程中对scanf的讲解非常粗略。但对非空白符分隔的数值输入问题，scanf具有明显的使用优势，学习者只要掌握scanf处理这种特殊情况的方法即可。再比如C语言字符串中的结束符'\0'，对学习者造成了大量的困扰，但C++中的string在解决字符串问题时具有明显的简洁性，因此本教程中的字符串问题主要采用string方式进行解决，对C语言的字符串方式没有太多笔墨。
  </span>
 </p>
</div>
<div class="self-section">
 <h1 id="nyyEY">
  <span class="ne-text">
   2. 计算机基本原理
  </span>
 </h1>
 <p class="ne-p" id="ufddadad2" style="text-indent: 2em">
  <span class="ne-text">
   现代电子计算机仍然没有超出由匈牙利科学家冯.诺依曼(von Neumann)
            于1945年提出的冯.诺依曼体
  </span>
 </p>
 <p class="ne-p" id="ub43a5025">
  <span class="ne-text">
   系结构的范畴。在该结构中，计算机被认为由5大部件组成，如图1.1所示。
  </span>
 </p>
 <p class="ne-p" id="u05957e95" style="text-align: center">
  <img class="ne-image img-50" id="ua076a2cf" src="../assets/images/1656922833243-a75e876d-dae7-455c-8e64-235db955acf3.png"/>
 </p>
 <p class="ne-p" id="u04383e61" style="text-align: center">
  <span class="ne-text">
   图1.1 冯.诺依曼体系结构
  </span>
 </p>
 <p class="ne-p" id="u9cbb0a3e" style="text-indent: 2em">
  <span class="ne-text">
   存储器又分为内部存储器及外部存储器两个部分。其中，内部存储器简称内存，通常是易失的，容量相对较小，但存取速度显著快于外部存储器。所谓易失，是指计算机断电后，内存中的数据会自动丢失。外部存储器通常指硬盘、固态硬盘、U盘等存储设备，相对于内存，其数据可以在断电后永久保存，容量通常也更大，但数据存取速度通常显著慢于内存。计算机处理的数据和指令(程序)一律用二进制表示，任何程序在运行时都要加载到内存，因此了解程序中相应部分在内存中的存储结构，才能更好地保证程序执行的正确性和效率。
  </span>
 </p>
 <p class="ne-p" id="ue6c8c24e" style="text-indent: 2em">
  <span class="ne-text">
   一个二进制位称为比特（Bit），它是存储器的最小单位。但是比特太小了，通常以字节（Byte）作为内存管理的基本单位，一个字节为8比特。1KB=1024byte=2
  </span>
  <sup>
   <span class="ne-text">
    10
   </span>
  </sup>
  <span class="ne-text">
   byte，1MB=1024KB=2
  </span>
  <sup>
   <span class="ne-text">
    20
   </span>
  </sup>
  <span class="ne-text">
   byte，1GB=1024MB=2
  </span>
  <sup>
   <span class="ne-text">
    30
   </span>
  </sup>
  <span class="ne-text">
   byte。
  </span>
 </p>
</div>
<div class="self-section">
 <h1 id="CAh6G">
  <span class="ne-text">
   3. C++程序设计
  </span>
 </h1>
 <h2 id="QkmM2">
  <span class="ne-text">
   3.1 C++程序基本结构
  </span>
 </h2>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="zqXxG"><span style="font-weight:bold;">代码1.1</span> 最简单的C++样例<code>#include &lt;iostream&gt;					//输入输出流标准库文件，支持cout，cin的使用
using namespace std;				//标准命名空间
int main()							//C++的主函数，每个程序都有且仅有一个main函数
{									//一对大括号构成一个代码块
    cout&lt;&lt;"Hello World!"&lt;&lt;endl;		//输出字符串Hello World!，其中endl表示换行符。
    return 0;						//主函数的返回值，0表示程序正常结束
}</code></pre>
 <details class="lake-collapse">
  <summary id="u3d1b6b70">
   <span class="ne-text">
    Hello World!
   </span>
  </summary>
 </details>
 <p class="ne-p" id="u1838d275">
  <strong>
   <span class="ne-text">
    说明：
   </span>
  </strong>
 </p>
 <ul class="ne-ul">
  <li id="uff2f1142">
   <span class="ne-text">
    C/C++中任何一条语句都必须以分号
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ;
    </span>
   </code>
   <span class="ne-text">
    结束。
   </span>
  </li>
  <li id="u3cfee8b7">
   <code class="ne-code">
    <span class="ne-text">
     //
    </span>
   </code>
   <span class="ne-text">
    表示行注释，当前行
   </span>
   <code class="ne-code">
    <span class="ne-text">
     //
    </span>
   </code>
   <span class="ne-text">
    后的部分为注释。
   </span>
  </li>
  <li id="u3e368c97">
   <span class="ne-text">
    不同的函数需要使用不同的头文件，当不清楚函数对应的头文件时，可采用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     #include&lt;bits/stdc++.h&gt;
    </span>
   </code>
   <span class="ne-text">
    ，称为万能头文件。它包含了C++的所有标准库，在所有的OJ系统中都被支持，可以有效解决头文件的困扰。但只建议在课程学习时使用，在完成复杂工程项目时，并不推荐。
   </span>
  </li>
 </ul>
 <h2 id="TrYYR">
  <span class="ne-text">
   3.2 C++程序的编译与运行
  </span>
 </h2>
 <p class="ne-p" id="u37455fd5" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
   C++
            语言代码由固定的词汇按照固定的格式组织起来，简单直观，程序员容易识别和理解，但是计算机根本不认识这些代码。这就需要一个工具，将 C++ 代码转换成计算机 能够识别的二进制指令，也就是将代码加工成 .exe
            程序的格式。这个工具是一个特殊的软件，叫做编译器（Compiler）。
  </span>
 </p>
 <p class="ne-p" id="ucc70cd0c" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
   编译器能够识别代码中的词汇、句子以及各种特定的格式，并将他们转换成计算机能够识别的二进制形式，这个过程称为编译。编译也可以理解为
            “翻译”，类似于将中文翻译成英文，它是一个复杂的过程，大致包括词法分析、语法分析、语义分析、性能优化、生成可执行文件五个步骤，期间涉及到复杂的算法和硬件架构。
  </span>
 </p>
 <p class="ne-p" id="u6f39e47f" style="text-indent: 2em">
  <span class="ne-text">
   本教程采用在Windows平台下的MinGW环境中的g++编译器。一定要选择C++11以上的版本选项。截止目前，C++14被广泛关注。在系统能够支持的情况下，可以选择更高的版本。实际上，对于初学者而言，几个版本的差异并不明显。下例中选用C++17。在Codeblocks的settings菜单下选择compiler，在打开的窗口中选择C++17。
  </span>
 </p>
 <p class="ne-p" id="u3de96259" style="text-align: center">
  <img class="ne-image img-60" id="b0SkH" src="../assets/images/1656918112464-685f09ca-8a46-44ed-a8d4-1a0bcbc0e85f.png"/>
 </p>
 <p class="ne-p" id="u31cb5d53" style="text-align: center">
  <span class="ne-text">
   图1.2 编译器设定
  </span>
 </p>
</div>
<div class="self-section">
 <h1 id="C3ERQ">
  <span class="ne-text">
   4. IDE的使用
  </span>
 </h1>
 <p class="ne-p" id="u964bd59c" style="text-indent: 2em">
  <span class="ne-text">
   程序设计主要学习语法和算法知识，IDE的选择并不重要。Codeblocks和VSCode都是当前比较流行的IDE工具，前者在安装和使用上比较简单，VSCode相对配置比较繁琐，但是对学习掌握一些底层编译有一定帮助。根据易用原则，甚至可以直接使用PTA在线编辑器进行编写，上面有测试模块，可以通过输出语句进行调试，能够满足基本编程需要。本教程使用Codeblocks为例进行讲解和配置。一定要选择带MinGW的setup版本进行下载。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="uf6ec3eec">
   <span class="ne-text">
    Codeblocks20.03版本下载地址：
   </span>
   <a class="ne-link" data-href="https://udomain.dl.sourceforge.net/project/codeblocks/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe" href="https://udomain.dl.sourceforge.net/project/codeblocks/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe" target="_blank">
    <span class="ne-text">
     https://udomain.dl.sourceforge.net/project/codeblocks/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe
    </span>
   </a>
  </p>
 </div>
 <h2 id="x6h5q">
  <span class="ne-text">
   4.1 Codeblocks新建项目
  </span>
 </h2>
 <p class="ne-p" id="u65ffd754">
  <span class="ne-text">
   1） 选择File-&gt;New-&gt;Project菜单，弹出窗口如图1.3所示，选择Console
            application，然后点击“Go”按钮。
  </span>
 </p>
 <p class="ne-p" id="u6fa6edb0" style="text-align: center">
  <img class="ne-image img-50" id="u9a8b1ac3" src="../assets/images/1656986100276-546b1b7d-62b9-48f0-b31f-9bbafa95231d.png"/>
 </p>
 <p class="ne-p" id="u6cca50cd" style="text-align: center">
  <span class="ne-text">
   图1.3 选择Console application
  </span>
 </p>
 <p class="ne-p" id="ud65b9141">
  <span class="ne-text">
   2）在接下来的几个窗口中都直接点击Next按钮，直到出现图1.4中的窗口。在“Project
            title”中输入你的项目名称，在“Folder to create project in:”中选择你的程序的保存路径。切记要输入一个有效文件路径，否则代码无法正常编译。然后点击Next按钮。
  </span>
 </p>
 <p class="ne-p" id="u58119e1c" style="text-align: center">
  <img class="ne-image img-50" id="u61c90c52" src="../assets/images/1656986307552-3c4ae077-da2e-4415-9707-8a4619a1dcca.png"/>
 </p>
 <p class="ne-p" id="ud816ca49" style="text-align: center">
  <span class="ne-text">
   图1.4 项目的名称和保存路径
  </span>
 </p>
 <p class="ne-p" id="u3c9476ce">
  <span class="ne-text">
   3）如图1.5所示，在最后的窗口点击Finish按钮，生成第一个项目。
  </span>
 </p>
 <p class="ne-p" id="uc6709f21" style="text-align: center">
  <img class="ne-image img-50" id="uf862faab" src="../assets/images/1656986401268-c1440572-1047-48a9-a0a8-e4fb754eb18d.png"/>
 </p>
 <p class="ne-p" id="u0d66ac32" style="text-align: center">
  <span class="ne-text">
   图1.5 选择编译器和配置
  </span>
 </p>
 <p class="ne-p" id="u30c7c81d">
  <span class="ne-text">
   4）在图1.6的窗口中，选择Projects标签页，展开下面的树状列表，双击显示main.cpp文件，然后输入你的程序。
  </span>
 </p>
 <p class="ne-p" id="ube6887c9" style="text-align: center">
  <img class="ne-image img-50" id="ue96b3038" src="../assets/images/1656988276098-88272ce9-e858-4ec0-a7f9-0541e1732a77.png"/>
 </p>
 <p class="ne-p" id="u8d864523" style="text-align: center">
  <span class="ne-text">
   图1.6 Codeblocks编程界面
  </span>
 </p>
 <p class="ne-p" id="u33fee8fa">
  <span class="ne-text">
   5）点击工具条上的
  </span>
  <img class="ne-image" id="uffe1ccf4" src="../assets/images/1656987015097-29927907-70ed-4540-b0f5-02852d8cce70.png" width="14.4"/>
  <span class="ne-text">
   进行编译，点击
  </span>
  <img class="ne-image" id="lNA9J" src="../assets/images/1656986915073-429bc9cc-55d9-4955-b047-6fbd39c2735a.png" width="12.8"/>
  <span class="ne-text">
   运行程序，点击
  </span>
  <img class="ne-image" id="u7fbf65d5" src="../assets/images/1656986679256-7566d026-fde3-4c6c-a53d-d756cd1e190f.png" width="19.2"/>
  <span class="ne-text">
   编译并运行程序。特别说明，
  </span>
  <img class="ne-image" id="ue2b53738" src="../assets/images/1656986915073-429bc9cc-55d9-4955-b047-6fbd39c2735a.png" width="12.8"/>
  <span class="ne-text">
   只是运行编译好的文件，每次修改程序后，要先用
  </span>
  <img class="ne-image" id="xzHD1" src="../assets/images/1656987015097-29927907-70ed-4540-b0f5-02852d8cce70.png" width="14.4"/>
  <span class="ne-text">
   进行编译，然后才能运行。或者直接点击
  </span>
  <img class="ne-image" id="GLPcc" src="../assets/images/1656986679256-7566d026-fde3-4c6c-a53d-d756cd1e190f.png" width="19.2"/>
  <span class="ne-text">
   编译并运行程序。很多初学者修改程序后运行结果不改变，就是因为这个问题。
  </span>
 </p>
 <p class="ne-p" id="u10376719" style="text-indent: 2em">
  <span class="ne-text">
   打开工程所在的文件夹，main.cpp就是源文件。obj/Debug文件夹下有一个后缀为.o的文件，这就是编译之后的中间文件，它是二进制的，用于计算机进行识别。bin/Debug文件夹下有一个后缀为.exe的文件，这是该程序最后生成的可执行文件。
  </span>
 </p>
 <p class="ne-p" id="udc1bd62c" style="text-indent: 2em">
  <span class="ne-text">
   如果运行时，右下角弹出信息框，提示“Can't find compiler
            executable in your configured search path's for GNU GCC
            Compiler”，说明编译器安装不正确。在Windows系统里，一定要安装带MinGW的Codeblocks，如果安装没有问题，请打开settings菜单下选择compiler，然后选择Toolchain
            executables，点击Auto-detect按钮进行自动检测，或者手工输入MinGW的目录，一般在Codeblocks安装路径的MinGW目录下，如图1.7所示。
  </span>
 </p>
 <p class="ne-p" id="u2268ab4f" style="text-indent: 2em; text-align: center">
  <img class="ne-image img-60" id="u670f1584" src="../assets/images/1662860756601-99aa7ddd-3c2c-4bb7-8cb6-e5909ad5b074.jpeg"/>
 </p>
 <p class="ne-p" id="ubf81d5ce" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   图1.7
            检测编译器的安装目录
  </span>
 </p>
 <h2 id="SzqL4">
  <span class="ne-text">
   4.2 Codeblocks常用功能
  </span>
 </h2>
 <ul class="ne-ul">
  <li id="u415c75d6">
   <span class="ne-text">
    代码格式化
   </span>
  </li>
 </ul>
 <p class="ne-p" id="uadb2832e" style="text-indent: 2em">
  <span class="ne-text">
   在代码编辑区的任意空白处，弹出右键菜单，点击
  </span>
  <span class="ne-text" style="font-size: 16px">
   Format use
            AStyle，进行代码格式化。专业的程序员必须要进行代码格式化，格式化之后的代码更容易阅读和理解，对于括号不匹配等问题，可以很容易发现。在Codeblocks中，将光标放在括号处，对应的括号会进行高亮，帮助发现对应的括号。
  </span>
 </p>
 <ul class="ne-ul">
  <li id="ub735dcad">
   <span class="ne-text" style="font-size: 16px">
    Ctrl+鼠标滚轮可以调整文字大小。
   </span>
  </li>
  <li id="ubac03dfc">
   <span class="ne-text" style="font-size: 16px">
    选中对应的代码块，按Ctrl+Shift+C注释，
                按Ctrl+Shift+X解除注释。在进行代码调试的时候，经常会用到大块区域的注释和解除注释。
   </span>
  </li>
  <li id="uc3c0703a">
   <span class="ne-text" style="font-size: 16px">
    选中对应的代码块，按Tab键缩进，按Shift+Tab反向缩进。
   </span>
  </li>
  <li id="u4a782452">
   <span class="ne-text">
    按F2和Shift+F2分别可以显隐下方Logs&amp; others栏和左方的Management栏。
   </span>
  </li>
 </ul>
</div>
<div class="self-section">
 <h1 id="VIVUC">
  <span class="ne-text">
   5. 在线评测系统
  </span>
 </h1>
 <p class="ne-p" id="u69fddc07">
  <span class="ne-text">
   代码在本地运行没有问题后，可以提交到在线评测（Online
            Judge）系统中。在线评测系统根据预制的输入，运行提交的代码，得到实际运行结果，并将这些结果与预制的结果进行比较。比较是非常精确的，相差一个空格都会产生格式错误。但是很多在线评测系统中做了一些优化，一些特殊情况不影响评测结果：1）输出结果的最后一行，是否存在一个回车，不影响评测结果。2）对于输出结果所有行，行尾是否存在空格或制表符，不影响评测结果。很多评测系统做了这种类型的优化，但是也有系统没做这样的修改，具体情况要根据使用的评测系统决定。
  </span>
 </p>
 <h2 id="fXFf5">
  <span class="ne-text">
   5.1 PTA
  </span>
 </h2>
 <p class="ne-p" id="u26095aaa" style="text-indent: 2em">
  <span class="ne-text">
   目前可以使用的在线评测系统有很多，下面以PTA系统为例，解析在线评测系统的使用方法。PTA系统的网址为
  </span>
  <a class="ne-link" data-href="https://pintia.cn/" href="https://pintia.cn/" target="_blank">
   <span class="ne-text">
    https://pintia.cn/
   </span>
  </a>
  <span class="ne-text">
   ，高校教师可以免费申请使用。
  </span>
 </p>
 <p class="ne-p" id="u936dc227" style="text-indent: 2em">
  <span class="ne-text">
   打开一个题目后，首先是题目描述，它决定了解决思路。然后是输入格式和输出格式，这里最重要的是确定变量的类型，例如较小的整数可以用int，较大的整数必须用long
            long；对于浮点数，可以统一采用double。对于输入格式，常常会有数据范围限定，如下：
  </span>
 </p>
 <table class="ne-table" id="VoHSi">
  <tbody>
   <tr style="height: 33px">
    <td width="750">
     <p class="ne-p" id="u5f092f68">
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       输入格式::
      </span>
     </p>
     <p class="ne-p" id="u763b6928" style="text-align: left">
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       一行两个整数表示地球的半径
      </span>
      <em>
       <span class="ne-text" style="color: rgb(64, 64, 64)">
        r
       </span>
      </em>
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       和从房顶到太平洋的距离
      </span>
      <em>
       <span class="ne-text" style="color: rgb(64, 64, 64)">
        d
       </span>
      </em>
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       。（1≤
      </span>
      <em>
       <span class="ne-text" style="color: rgb(64, 64, 64)">
        r
       </span>
      </em>
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       ,
      </span>
      <em>
       <span class="ne-text" style="color: rgb(64, 64, 64)">
        d
       </span>
      </em>
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       ≤10
      </span>
      <sup>
       <span class="ne-text" style="color: rgb(64, 64, 64)">
        5
       </span>
      </sup>
      <span class="ne-text" style="color: rgb(64, 64, 64)">
       ）
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u5c6e4446" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   这里的数据范围限定不是让用户在程序中检测，而是告诉用户测试用例的具体数据范围，超出该范围的数据不需要考虑。
  </span>
 </p>
 <p class="ne-p" id="ud2f7f068" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   然后是输入样例和输出样例。对于一个题目，会有很多组测试数据。输入样例和输出样例只是代表，不是全部。输入样例的结果必须正确，但该结果正确不代表所有测试用例的结果都是正确的。输入数据必须采用cin等方式在标准输入中输入，不能在程序中进行硬编码，直接写在程序中。
  </span>
 </p>
 <p class="ne-p" id="u4bddf51d" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   PTA是一个比较完善的系统，其编辑区提供了自动高亮、自动换行、自动缩进等功能，即使没有本地的编译器，也可以在此系统上直接进行代码编辑。
  </span>
 </p>
 <p class="ne-p" id="u80a8eec9" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   PTA中提供了一个测试功能，非常有利于初学者发现并纠正错误。该功能平时处于隐藏状态，点击图1.8中的按钮可以打开。测试运行不计入提交的统计信息。
  </span>
 </p>
 <p class="ne-p" id="uff5549f5" style="text-indent: 2em; text-align: center">
  <img class="ne-image img-60" id="u63b88b74" src="../assets/images/1662867309114-d9971269-394f-4a15-8154-e3c390c6ace4.png"/>
 </p>
 <p class="ne-p" id="u5e12e0af" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   图1.8 打开测试功能
  </span>
 </p>
 <p class="ne-p" id="uf7d9bb04" style="text-indent: 2em">
  <span class="ne-text">
   然后点击运行测试，如果有编译错误，会在“编译器输出”中显示，调整解决编译错误。程序正常运行后，会展示运行结果和预期结果的对比，例如图1.9的例子中二者相差一个回车符。如前所述，这种不同会被系统自动忽略。
  </span>
 </p>
 <p class="ne-p" id="u86895608" style="text-indent: 2em; text-align: center">
  <img class="ne-image img-60" id="ubc87ddbd" src="../assets/images/1662867499267-84bc42cf-2f82-4a71-95aa-243afd584772.png" width="629.6"/>
 </p>
 <p class="ne-p" id="u41029d05" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   图1.9
            测试的运行结果和预期结果
  </span>
 </p>
 <p class="ne-p" id="u2854db2f" style="text-indent: 2em">
  <span class="ne-text">
   如果有其他不同，如图1.10所示会在左侧以红色波浪线，右侧以绿色波浪线显示不同之处，根据提示修改代码。
  </span>
 </p>
 <p class="ne-p" id="ueaa2b961" style="text-indent: 2em; text-align: center">
  <img class="ne-image img-60" id="u6c17b5d0" src="../assets/images/1662867646059-a92e1f21-1e8f-4ce7-8a97-06553a23d682.png"/>
 </p>
 <p class="ne-p" id="u8f6b2cae" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   图1.10
            提示运行结果和预期结果的不同之处
  </span>
 </p>
 <p class="ne-p" id="u82d3bc23" style="text-indent: 2em">
  <span class="ne-text">
   测试用例区域的数据可以自行修改，但是因为自行输入的数据没有预期结果，因此不会显示对比，但会帮助用户确定异常数据的运行结果是否符合期望。
  </span>
 </p>
 <p class="ne-p" id="udac6f8ee" style="text-indent: 2em">
  <span class="ne-text">
   进入题目集后，可以在左侧的“提交列表”中，查看提交历史。在“排名”中查看题目完成状况和整体排名情况。
  </span>
 </p>
 <h2 id="HubK9">
  <span class="ne-text">
   5.2 其他OJ
  </span>
 </h2>
 <p class="ne-p" id="ucb3b9ca3" style="text-indent: 2em">
  <span class="ne-text">
   力扣的中文官网为
  </span>
  <a class="ne-link" data-href="https://leetcode.cn/" href="https://leetcode.cn/" target="_blank">
   <span class="ne-text">
    https://leetcode.cn/
   </span>
  </a>
  <span class="ne-text">
   ，其题库中的题目可以分为简单、中等和困难三个级别。初学者建议筛选其中的简单题开始刷题。其提交方式与PTA类似，但是全部以函数形式出现，对于输入输出部分已经由系统处理好，学习者专注于完成特定的算法即可。STL的容器是力扣支持的主要数据类型。因此建议学习完本教程后再开始力扣的刷题之旅。对于错误的测试用例，系统会给出反馈。但不建议学习者经常去看出错测试用例，应该学会主动思考可能产生的特例情况。另外，评论了和题解中有很多优秀的解题参考，可以深入思考，不断提升。
  </span>
 </p>
 <p class="ne-p" id="ue67477f5" style="text-indent: 2em">
  <span class="ne-text">
   洛谷的官网为
  </span>
  <a class="ne-link" data-href="https://www.luogu.com.cn/" href="https://www.luogu.com.cn/" target="_blank">
   <span class="ne-text">
    https://www.luogu.com.cn/
   </span>
  </a>
  <span class="ne-text">
   ，使用方式基本相同，但是可以通过个人设置中的题单，整理收集特定的题目，是一个很有效的用法。此外，对于函数体，并没有采用代码嵌入的形式，而是通过交互题的方式进行独立编译。因此对于函数题，需要添加必要的头文件，确保提交的代码文件可以独立成功编译。例如：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="rIast"><span style="font-weight:bold;">代码1.2</span> 洛谷交互题的必要头文件<code>#include&lt;bits/stdc++.h&gt;
using namespace std;</code></pre>
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
    name: 'Ch1',
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
        this.$store.dispatch('toChapter', 4);
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