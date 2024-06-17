<template>
<div class="whole-page">
    <!-- content -->
    <div class="self-main">
      <div class="chapter-title">✋第六章 指针</div>
<div class="lake-content" ref="content-data" typography="classic">
  <div class="self-section">
 <h1 id="tqxi1">
  <span class="ne-text">
   1. 指针的概念与指针变量的定义
  </span>
 </h1>
 <h2 id="aV7zm">
  <span class="ne-text">
   1.1 指针与指针变量
  </span>
 </h2>
 <p class="ne-p" id="u3aaebc18" style="text-indent: 2em;">
  <span class="ne-text">
   在很多经典的C/C++教材中，都会提到指针是灵魂。
  </span>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   正确灵活地运用它，可以有效地表达一些复杂的数据结构，比如系统地动态分配内存、消息机制、任务调度、灵活矩阵定时等，掌握指针可以使程序更加简洁、紧凑、高效。
  </span>
  <span class="ne-text">
   但是因为指针在理解上有些抽象，对于很多初学者而言，指针是一场噩梦。其实关键是要理解地址的概念，而指针只是一个存储地址的变量。也就是说，指针也是一个变量，其中存储的“值”是一个地址，而这个地址是某个普通变量的地址，通过地址可以间接的找到需要处理的普通变量。
  </span>
 </p>
 <p class="ne-p" id="u4c246bb5" style="text-indent: 2em;">
  <span class="ne-text">
   指针变量：专门存放变量地址的变量。
  </span>
 </p>
 <p class="ne-p" id="uc6322f0a" style="text-indent: 2em;">
  <span class="ne-text">
   如图
  </span>
  <span class="ne-text" style="font-size: 16px">
   6.1
  </span>
  <span class="ne-text">
   所示：变量
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a</span></code>
  <span class="ne-text">
   的地址是0x61FE1C，指针变量
  </span>
  <code class="ne-code">
   <span class="ne-text">
    p</span></code>
  <span class="ne-text">
   存放的是变量
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a</span></code>
  <span class="ne-text">
   的地址。此时说
  </span>
  <code class="ne-code">
   <span class="ne-text">
    p</span></code>
  <span class="ne-text">
   指向了
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a</span></code>
  <span class="ne-text">
   。
  </span>
 </p>
 <p class="ne-p" id="u6caf06f2" style="text-align: center">
  <span class="ne-text">
  </span>
  <img class="ne-image img-50" id="RONVA" src="images/1659091383836-f815870d-967f-4bb3-97d0-0efa424d3baa.png"/>
 </p>
 <p class="ne-p" id="ub0d6f828" style="text-align: center">
  <span class="ne-text" style="font-size: 16px">
   图6.1
  </span>
  <span class="ne-text">
   指针变量
  </span>
 </p>
 <h3 id="XPPV7">
  <span class="ne-text">
   知识点：T611
  </span>
 </h3>
 <table border=1 class="ne-table" id="vqJMe" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u97fb5874">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u3a8c19f7" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u06abcab9">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u59c417a4">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ud9ccd0f7">
      <span class="ne-text">
       T611
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u70312b70">
      <span class="ne-text">
       掌握指针基本概念，它是一个存储地址的变量，关键是要理解地址的概念
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc344a142">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#QAfJZ" href="ch3#QAfJZ">
       <span class="ne-text">
        T341
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf6db8821">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="oaPLJ">
  <span class="ne-text">
   1.2 指针变量的定义
  </span>
 </h2>
 <details class="lake-collapse">
  <summary id="u5961fc19">
   <span class="ne-text" style="color: red">
    数据类型
   </span>
   <span class="ne-text">
   </span>
   <strong>
    <span class="ne-text" style="color: blue; font-size: 16px">
     *
    </span>
   </strong>
   <span class="ne-text">
    指针名；
   </span>
  </summary>
 </details>
 <p class="ne-p" id="ud97c91d9">
  <span class="ne-text">
   如：
  </span>
  <code class="ne-code">
   <span class="ne-text">
    int *p,*q,a,b,c;   char *s,ch,s;   float *y,*w,x;</span></code>
 </p>
 <p class="ne-p" id="链接90">
  <span class="ne-text">
   其中：
  </span>
  <code class="ne-code">
   <span class="ne-text">
    p,q,s,y,w</span></code>
  <span class="ne-text">
   为指针变量，
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a,b,c,ch,s,x</span></code>
  <span class="ne-text">
   为普通变量。
  </span>
 </p>
 <p class="ne-p" id="ub589a53e" style="text-indent: 2em;">
  <span class="ne-text" style="color: red">
   数据类型
  </span>
  <span class="ne-text">
   是指针变量的目标类型，即它所指变量的类型。此处的
  </span>
  <code class="ne-code">
   <span class="ne-text">
    *</span></code>
  <span class="ne-text">
   是告诉计算机，其后的变量为指针变量，不包含任何的运算。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="uc9ea83e7">
   <span class="ne-text">
    很多初学者也会为定义的书写形式而苦恼，到底是应该在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *</span></code>
   <span class="ne-text">
    的左侧加空格，还是右侧？这就要了解的空格在程序中的本质含义。实际上，空格在程序中所起到的最大作用是分隔，当书写
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int a;</span></code>
   <span class="ne-text">
    时，空格将数据类型和变量名进行了分隔。而在指针定义时，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *</span></code>
   <span class="ne-text">
    可以起到同样的分隔作用，因此可以在左侧写空格，也可以在右侧写空格，也可以左右都不写空格，都是正确的。
   </span>
  </p>
 </div>
 <p class="ne-p" id="u124d44ef" style="text-indent: 2em;">
  <span class="ne-text">
   两个有关的运算符：
  </span>
 </p>
 <p class="ne-p" id="u101b7395" style="margin-left: 2em">
  <code class="ne-code">
   <span class="ne-text">
    &amp;</span></code>
  <span class="ne-text">
   ：取地址运算符，只能作用于变量。
  </span>
 </p>
 <p class="ne-p" id="u700a3ddb" style="margin-left: 2em">
  <code class="ne-code">
   <span class="ne-text">
    *</span></code>
  <span class="ne-text">
   ： 取内容运算符（或称“间接访问”运算符）。
  </span>
 </p>
 <p class="ne-p" id="ubc8377ce" style="text-indent: 2em;">
  <span class="ne-text">
   例如：
  </span>
  <code class="ne-code">
   <span class="ne-text">
    &amp;a</span></code>
  <span class="ne-text">
   为取变量
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a</span></code>
  <span class="ne-text">
   的地址，
  </span>
  <code class="ne-code">
   <span class="ne-text">
    *p</span></code>
  <span class="ne-text">
   为取指针
  </span>
  <code class="ne-code">
   <span class="ne-text">
    p</span></code>
  <span class="ne-text">
   所指向的存贮单元的内容。
  </span>
 </p>
 
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="kHI31"><span style="font-weight:bold;">代码6.1</span> 取地址与取内容运算符<code>#include &lt;iostream&gt;
using namespace std;
int main ()
{
    int a=97;
    int *p;
    p=&amp;a;
    cout&lt;&lt;(&amp;a)&lt;&lt;'\t'&lt;&lt;p&lt;&lt;endl;
    cout&lt;&lt;a&lt;&lt;'\t'&lt;&lt;*p&lt;&lt;endl;
    *p=65;
    cout&lt;&lt;a&lt;&lt;'\t'&lt;&lt;*p&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="idgDG" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u904c55e3">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ucc6302cc">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ufd8d0139">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5de0078b">
      <span class="ne-text">
       0x61fe14 0x61fe14
      </span>
     </p>
     <p class="ne-p" id="u08e2ab2c">
      <span class="ne-text">
       97 97
      </span>
     </p>
     <p class="ne-p" id="u4926f96e">
      <span class="ne-text">
       65 65
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ue2778aa9">
   <span class="ne-text">
    第6行定义了一个指针，为了与变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    进行绑定，其类型必须与
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    保持一致，因此定义为整型指针。
   </span>
  </li>
  <li id="链接27">
   <span class="ne-text">
    第7行将变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的地址赋值给
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p</span></code>
   <span class="ne-text">
    ，指针变量只能用地址进行赋值，而且跟其他变量一样，指针必须先赋值再使用。
   </span>
  </li>
  <li id="u5b26ac5f">
   <span class="ne-text">
    第8行的输出结果显示，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p</span></code>
   <span class="ne-text">
    中存放了变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的地址。
   </span>
  </li>
  <li id="u2296f9e1">
   <span class="ne-text">
    第9行使用了取内容运算符
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *</span></code>
   <span class="ne-text">
    ，可以看到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p</span></code>
   <span class="ne-text">
    的输出内容相同。这是因为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p</span></code>
   <span class="ne-text">
    指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    ，即
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p</span></code>
   <span class="ne-text">
    中存放了变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的地址，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p</span></code>
   <span class="ne-text">
    表示通过地址定位了变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    ，然后将
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的值进行了打印。
   </span>
  </li>
  <li id="u36454da2">
   <span class="ne-text">
    第10-11行显示当修改
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p</span></code>
   <span class="ne-text">
    后，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的值同时进行了改变。因为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    完全等价，它们操作的是同一块内存区，即变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的内存区。
   </span>
  </li>
 </ul>
 <div class="ne-quote">
  <p class="ne-p" id="u048dd782">
   <span class="ne-text">
    再次强调相同运算符在定义语句和非定义语句中含义是完全不同的。第6行中的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *</span></code>
   <span class="ne-text">
    表示
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p</span></code>
   <span class="ne-text">
    是一个指针变量，第9-11行中的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *</span></code>
   <span class="ne-text">
    表示取指针所指向区域的内容，即取
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    的值。
   </span>
  </p>
 </div>
 <h3 id="TOnfM">
  <span class="ne-text">
   知识点：T612-T613
  </span>
 </h3>
 <table border=1 class="ne-table" id="pxsMa" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ub5048773">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ub2785426" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf0327b3b">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u5a1f4d84">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u93f27275">
      <span class="ne-text">
       T612
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="uc2885ac2">
      <span class="ne-text">
       掌握指针变量的定义方式，区分取地址运算符
      </span>
      <code class="ne-code">
       <span class="ne-text">
        &amp;</span></code>
      <span class="ne-text">
       和取内容运算符
      </span>
      <code class="ne-code">
       <span class="ne-text">
        *</span></code>
      <span class="ne-text">
       。理解
      </span>
      <code class="ne-code">
       <span class="ne-text">
        *</span></code>
      <span class="ne-text">
       在定义语句和非定义语句含义的不同。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u2e86cd6e">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#qAd0N" href="ch2#qAd0N">
       <span class="ne-text">
        T277
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ucfd660a5">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u4f0e57b8">
      <span class="ne-text">
       T613
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u1b7742c6">
      <span class="ne-text">
       指针与所指向变量共享存储空间，如果把指针作为函数参数，则形参与实参共享存储空间。因此很多时候把指针作为形参是为了获取函数中的计算结果，也就是达到了多返回值的目的
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4a4f6ba5">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#RheLP" href="ch3#RheLP">
       <span class="ne-text">
        T336
       </span>
      </a>
     </p>
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="675">
     <p class="ne-p" id="ud0fecf96">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161746" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161746" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX601)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161748" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161748" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX603)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161747" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161747" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX602)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161749" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161749" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX604)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161751" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161751" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX606)
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="xrqjf">
  <span class="ne-text">
   1.3 指针的两个“值”
  </span>
 </h2>
 <p class="ne-p" id="u6550baa8">
  <span class="ne-text">
   一个指针包含了两个“值”，这是最容易让初学者迷惑的地方。指针作为一个变量，它存储了一个“值”，其实就是一个地址；但通过操作符
  </span>
  <code class="ne-code">
   <span class="ne-text">
    *</span></code>
  <span class="ne-text">
   ，它可以得到它指向变量的值，称为间接取值。地址相当于一个ID，帮助指针找到对应的变量。对于这个地址，不需要关心它具体的值是多少，重点关注它所指向的内容。例如当去图书馆找一本书时，每本书都有编号，代表哪个房间几号柜第几层。通过这个编号，可以快速找到书，书是我们关注的实体，但编号的具体内容对于我们没有使用价值，只是一个帮助定位的媒介。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="dfOR3"><span style="font-weight:bold;">代码6.2</span> 指针的两个“值”<code>#include &lt;iostream&gt;
using namespace std;
int main ()
{
    int a=10, b=20, *p1=&amp;a, *p2=&amp;b;
    cout&lt;&lt;a&lt;&lt;'\t'&lt;&lt;*p1&lt;&lt;endl&lt;&lt;b&lt;&lt;'\t'&lt;&lt;*p2&lt;&lt;endl&lt;&lt;endl;
    int *p = p1;
    p1 = p2;
    p2 = p;
    cout&lt;&lt;a&lt;&lt;'\t'&lt;&lt;*p1&lt;&lt;endl&lt;&lt;b&lt;&lt;'\t'&lt;&lt;*p2&lt;&lt;endl&lt;&lt;endl;
    a=10, b=20, p1=&amp;a, p2=&amp;b;
    int temp = *p1;
    *p1 = *p2;
    *p2 = temp;
    cout&lt;&lt;a&lt;&lt;'\t'&lt;&lt;*p1&lt;&lt;endl&lt;&lt;b&lt;&lt;'\t'&lt;&lt;*p2&lt;&lt;endl&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="ovNvF" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ua2d0b234">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接c1">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u5c0f304e">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u2cb3f887">
      <span class="ne-text">
       10 10
      </span>
     </p>
     <p class="ne-p" id="u466b7174">
      <span class="ne-text">
       20 20
      </span>
     </p>
     <p class="ne-p" id="uccc86f3d">
      <span class="ne-text">
      </span>
     </p>
     <p class="ne-p" id="uefa27f29">
      <span class="ne-text">
       10 20
      </span>
     </p>
     <p class="ne-p" id="u57fb0085">
      <span class="ne-text">
       20 10
      </span>
     </p>
     <p class="ne-p" id="u1d159c40">
      <span class="ne-text">
      </span>
     </p>
     <p class="ne-p" id="ubc4db286">
      <span class="ne-text">
       20 20
      </span>
     </p>
     <p class="ne-p" id="u38d9348e">
      <span class="ne-text">
       10 10
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u9e995cf5">
   <span class="ne-text">
    第5行将
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p1</span></code>
   <span class="ne-text">
    指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    ，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p2</span></code>
   <span class="ne-text">
    指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    ，因此
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p1</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    等价，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p2</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    等价。
   </span>
  </li>
  <li id="u396c512e">
   <span class="ne-text">
    第7-9行将两个指针所存储的地址发生了交换，即让
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p1</span></code>
   <span class="ne-text">
    指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    ，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p2</span></code>
   <span class="ne-text">
    指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    ，因此
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p1</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *p2</span></code>
   <span class="ne-text">
    显示的内容发生了交换，但是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    并没有发生任何改变。
   </span>
  </li>
  <li id="uc6aab850">
   <span class="ne-text">
    第12-14行将两个指针所指向的内容进行了交换，即交换了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    ，但
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p1</span></code>
   <span class="ne-text">
    仍旧指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    ，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     p2</span></code>
   <span class="ne-text">
    仍旧指向了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    。
   </span>
  </li>
 </ul>
 <h3 id="rEv7E">
  <span class="ne-text">
   知识点：T614
  </span>
 </h3>
 <table border=1 class="ne-table" id="bre8x" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ucb7aa69c">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="链接88" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ud55880eb">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uef6b2e59">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u1a2ff0bb">
      <span class="ne-text">
       T614
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u9891fcbb">
      <span class="ne-text">
       注意区分指针包含的两个“值”：存储的地址以及访问地址所指向空间的值
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc6ed94f3">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u2c3a7635">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="zEdzO">
  <span class="ne-text">
   1.4 强大的指针
  </span>
 </h2>
 <p class="ne-p" id="u099e8afc" style="text-indent: 2em;">
  <span class="ne-text">
   既然可以通过变量访问简单直观的访问内存，为什么需要用指针间接访问内存呢？这是因为在很多情况下，是找不到变量的，但是所有程序运行后都会加载到内存上，可以通过一些方法定位到所需要处理的内容在内存上的地址。例如在打游戏的时候，只能运行安装的exe文件启动游戏，加载到内存中畅玩，但是并没有游戏的源代码，因此不能通过变量访问内存。但是可以通过一些方法找到我们需要处理的内容在内存上地址。例如控制游戏中的角色受到一些伤害，血量发生变化（尽量控制不要让其他内容发生变化）。对比受伤前后两块内存区域，找到变化的地方，也就找到了代表血量的内存区。这时候你就可以自己写一个程序，用指针修改找到的内存区域的值，让你的英雄“满血复活”。再举一个例子，很多系统将存储真实密码的变量和存储你输入密码的变量是连续定义的，这样它们的内存区是相邻的。通过改变输入，很快就可以定位输入密码的内存位置，将其相邻内存区域的内容复制过来，就可以通过密码验证了。
  </span>
 </p>
 <p class="ne-p" id="链接b6" style="text-indent: 2em;">
  <span class="ne-text">
   从以上案例可以看出，通过指针可以直接访问内存区，造成了指针的强大功能，这是Java，Python等没有指针的编程语言所无法办到的。但是同样指针也是一把双刃剑，对不确定内存区域进行修改，会造成程序的错误，甚至系统的崩溃。因此使用指针一定要特别小心，保证指针一定要指向正确的内存区。只要对内存分布、地址编码有了充分的了解，就可以发挥指针的强大功能。
  </span>
 </p>
 <p class="ne-p" id="u3bc2ffb2" style="text-indent: 2em;">
  <span class="ne-text">
   对于在线评测的算法试题而言，即使完全不懂指针，也不影响题目求解。例如当需要一个函数返回多个值时，C语言只能通过将参数设定为指针进行解决，其实就是让形参访问实参的内存区；但C++中提供了引用功能，可以同样解决问题，但书写和理解上却得到了极大简化，因此在程序设计时不需要必须使用指针。C语言中用字符数组表示字符串，用指针可以更加灵活地进行访问，但是C++中的string类型对字符串的使用进行了良好的封装，也完全可以不使用指针就可以得到良好的性能。
  </span>
 </p>
 <p class="ne-p" id="u3bb48a52" style="text-indent: 2em;">
  <span class="ne-text">
   无论如何，指针是C/C++中一个强大的功能。了解指针，就能对计算机的基本存储结构有了深层次的理解，对提高程序的性能会有很大帮助。
  </span>
 </p>
 <h3 id="spGKQ">
  <span class="ne-text">
   知识点：T615
  </span>
 </h3>
 <table border=1 class="ne-table" id="mow87" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ufd2272ed">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ub1bb98b2" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc8c2c69e">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u69181a39">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u2c5f2497">
      <span class="ne-text">
       T615
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="链接72">
      <span class="ne-text">
       理解指针的优势和弊端，使用指针的时候要保证指针指向正确的内存区
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc249aacc">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u52852f6c">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
  </div>
  <div class="self-section">
 <h1 id="OmxSk">
  <span class="ne-text">
   2. 数组与指针
  </span>
 </h1>
 <h2 id="mKXBK">
  <span class="ne-text" style="color: rgb(77, 77, 77)">
   2.1 一维数组与指针
  </span>
 </h2>
 <p class="ne-p" id="链接e9">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   数组名不是指针，但大多数使用到数组名的地方，
  </span>
  <span class="ne-text">
   编译器
  </span>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   都会把数组名隐式转换成一个指向数组首元素的指针常量来处理。也就是说，数组名被解释为存放地址的变量，但却是常变量，其中保存的地址不可以被修改。
  </span>
 </p>
 <p class="ne-p" id="ub5178dad" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   除了存储的地址不可以被修改外，数组名就是一个指针。数组通过下标访问元素，跟指针进行偏移进行元素访问完全相同。这种对于连续空间的数据，通过偏移访问任意元素的方式，也称为随机访问。以
  </span>
  <code class="ne-code">
   <span class="ne-text" style="font-size: 16px">
    int  a[5],*p=a;</span></code>
  <span class="ne-text" style="font-size: 16px">
   为例，下表中前4列完全等价，后3列完全等价。
  </span>
 </p>
 <p class="ne-p" id="u68f2dd02" style="text-indent: 2em;; text-align: center">
  <span class="ne-text" style="font-size: 16px">
   表6.1 数组元素的值与地址
  </span>
 </p>
 <span style="margin-left: 2em">
  <table border=1 class="ne-table" id="Ew0hb" align="center">
   <tbody>
    <tr style="height: 33px">
     <td colspan="4" width="360">
      <p class="ne-p" id="uf5adadbc" style="text-align: center">
       <span class="ne-text" style="font-size: 16px">
        元素的值
       </span>
      </p>
     </td>
     <td colspan="3" width="274">
      <p class="ne-p" id="u7c8fbc88" style="text-align: center">
       <span class="ne-text">
        元素的地址
       </span>
      </p>
     </td>
    </tr>
    <tr style="height: 33px">
     <td width="90">
      <p class="ne-p" id="u97c26df4">
       <span class="ne-text" style="font-size: 16px">
        a[0]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u8157dc76">
       <span class="ne-text">
        *a
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u10168b0a">
       <span class="ne-text">
        *p
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="uc9c85b13">
       <span class="ne-text" style="font-size: 16px">
        p[0]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="uab719d91">
       <span class="ne-text">
        a
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u83b16467">
       <span class="ne-text">
        p
       </span>
      </p>
     </td>
     <td width="94">
      <p class="ne-p" id="u5d75184d">
       <span class="ne-text">
        &amp;a[0]
       </span>
      </p>
     </td>
    </tr>
    <tr style="height: 33px">
     <td width="90">
      <p class="ne-p" id="u46b29781">
       <span class="ne-text">
        a[1]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="ud978197c">
       <span class="ne-text">
        *(a+1)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u21b283e8">
       <span class="ne-text">
        *(p+1)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u42c35eb7">
       <span class="ne-text">
        p[1]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="ua2303c88">
       <span class="ne-text">
        a+1
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u433c4920">
       <span class="ne-text">
        p+1
       </span>
      </p>
     </td>
     <td width="94">
      <p class="ne-p" id="ud9f66bfb">
       <span class="ne-text">
        &amp;a[1]
       </span>
      </p>
     </td>
    </tr>
    <tr style="height: 33px">
     <td width="90">
      <p class="ne-p" id="u3cbc7852">
       <span class="ne-text">
        a[2]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="uaf2a4c8b">
       <span class="ne-text">
        *(a+2)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u4ff9fe36">
       <span class="ne-text">
        *(p+2)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="链接57">
       <span class="ne-text">
        p[2]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u19f0710a">
       <span class="ne-text">
        a+2
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u2fb546a0">
       <span class="ne-text">
        p+2
       </span>
      </p>
     </td>
     <td width="94">
      <p class="ne-p" id="u5cf4d8b2">
       <span class="ne-text">
        &amp;a[2]
       </span>
      </p>
     </td>
    </tr>
    <tr style="height: 33px">
     <td width="90">
      <p class="ne-p" id="u51feb000">
       <span class="ne-text">
        a[3]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u732cf082">
       <span class="ne-text">
        *(a+3)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="uac83b5cb">
       <span class="ne-text">
        *(p+3)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="ud4948c9d">
       <span class="ne-text">
        p[3]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="ubd486583">
       <span class="ne-text">
        a+3
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u046db9b2">
       <span class="ne-text">
        p+3
       </span>
      </p>
     </td>
     <td width="94">
      <p class="ne-p" id="u1e46c0cf">
       <span class="ne-text">
        &amp;a[3]
       </span>
      </p>
     </td>
    </tr>
    <tr style="height: 33px">
     <td width="90">
      <p class="ne-p" id="u0205ccb0">
       <span class="ne-text">
        a[4]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u8fabb49a">
       <span class="ne-text">
        *(a+4)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u43f2f2be">
       <span class="ne-text">
        *(p+4)
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u703e721f">
       <span class="ne-text">
        p[4]
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u7a36359f">
       <span class="ne-text">
        a+4
       </span>
      </p>
     </td>
     <td width="90">
      <p class="ne-p" id="u0635c603">
       <span class="ne-text">
        p+4
       </span>
      </p>
     </td>
     <td width="94">
      <p class="ne-p" id="u2887b1a8">
       <span class="ne-text">
        &amp;a[4]
       </span>
      </p>
     </td>
    </tr>
   </tbody>
  </table>
 </span>
 <p class="ne-p" id="ud9cb69e9" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   有两种特例情况数组名不会被转换为指针，以
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    int a[10];</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   为例：
  </span>
 </p>
 <p class="ne-p" id="u8a69652a" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   1）对数组名使用sizeof运算符，则
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    sizeof(a)</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   代表整个数组所占的
  </span>
  <span class="ne-text">
   内存
  </span>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   大小，
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    a</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   是长度为10的int（4字节）数组，运算结果是40。用数组的总字节长度除以单个元素的字节长度得到元素个数，例如
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    sizeof(a)/sizeof(*a)</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   。
  </span>
 </p>
 <p class="ne-p" id="链接67" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   2）对数组名取地址，
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    &amp;a</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   表示数组的地址。注意，数组的地址和数组首元素的地址是不同的概念，尽管二者存储的值相同，但它们的跨度是不同的。这就像山东省的省政府在济南，但是济南的市政府也在济南，地址相同，但是代表的意义完全不同。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="N1yWY"><span style="font-weight:bold;">代码6.3</span> 数组取地址<code>int main (  )
{
    int a[10];
    cout&lt;&lt;a&lt;&lt;'\t'&lt;&lt;&amp;a&lt;&lt;endl;
    cout&lt;&lt;a+1&lt;&lt;'\t'&lt;&lt;&amp;a+1&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="s6uVi" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ue61a5ffb">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ud0295e41">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u8b042617">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u443bd1ab">
      <span class="ne-text">
       0x61fdf0 0x61fdf0
      </span>
     </p>
     <p class="ne-p" id="u639b320d">
      <span class="ne-text">
       0x61fdf4 0x61fe18
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u3d8f4a5b" style="text-indent: 2em;">
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    a</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    &amp;a</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   的存储的地址相同。
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    a</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   指向首元素，右移一位，地址增加了4字节，也就是一个
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    int</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   的长度；
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    &amp;a</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   指向数组，右移一位，地址增加了40字节，相当于指向了下一个数组（可能并不存在），这在C++里称为尾后指针。
  </span>
 </p>
 <p class="ne-p" id="链接47" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   除了上面说的两种例外，其他情况下编译器都将数组名隐式转换成指针常量。比如使用下标引用数组元素
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    a[3]</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   ，它将会自动转换成表达式
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    *(a + 3)</span></code>
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   。因为第一种写法会自动转换成第二种，这个过程需要一些开销，所以第二种写法通常效率会高一些。但是毕竟第一种写法更方便，通常代码里不会有太多的下标引用数组，因此这种效率提高可以忽略。
  </span>
 </p>
 <p class="ne-p" id="ubdc47bad" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   由上可知，数组和指针在C/C++中可以认为是相同内容的两种不同书写形式，除了数组名是常指针不可被修改外，二者是完全一样的。数组可以写成指针形式，同样指针也可以用数组方式进行访问。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="F6FDT"><span style="font-weight:bold;">代码6.4</span> 数组与指针<code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int a[5]={1,2,3,4,5};
    int*p = a+2;
    p[1] = 7;
    for(auto e:a)
        cout&lt;&lt;e&lt;&lt;' ';
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="tR6wO" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uce562b0e">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u65b49f5a">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u6e94dd96">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u8397f5cd">
      <span class="ne-text">
       1 2 3 7 5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u26d5a732">
   <span class="ne-text" style="font-size: 16px">
    指针
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     p</span></code>
   <span class="ne-text" style="font-size: 16px">
    指向
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     a[2]</span></code>
   <span class="ne-text" style="font-size: 16px">
    的地址，
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     p[1]=*(p+1)=*((a+2)+1)=a[3]</span></code>
   <span class="ne-text" style="font-size: 16px">
    。因此
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     a[3]</span></code>
   <span class="ne-text" style="font-size: 16px">
    对应的值被修改。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u04d6945c">
  <span class="ne-text">
   指针可以进行类型转换，然后按照新的数据类型访问空间。以memset为例，它可以对大块内存进行赋值，但是只能以字节为单位，因此无论任意类型的数组，在使用memset时都是以字节为单位进行进行赋值的。memset函数需要头文件&lt;memory.h&gt;或&lt;string.h&gt;，函数原型是extern
            void *memset(void *buffer, int c, int count) ，其中buffer为指针或是数组，c是赋给buffer的值，count是buffer的长度。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="pv2DN"><span style="font-weight:bold;">代码6.5</span> 数组与指针<code>#include&lt;bits/stdc++.h&gt;
using namespace std;
int main() {
	int arr[5];
    memset(arr,0,sizeof(arr));
	for(auto i:arr)		cout&lt;&lt;i&lt;&lt;" "; cout&lt;&lt;endl;
    memset(arr,255,sizeof(arr));
	for(auto i:arr)		cout&lt;&lt;i&lt;&lt;" "; cout&lt;&lt;endl;
	memset(arr,1,sizeof(arr));
	for(auto i:arr)		cout&lt;&lt;i&lt;&lt;" "; cout&lt;&lt;endl;
	cout&lt;&lt;bitset&lt;32&gt;(16843009)&lt;&lt;endl;
    char* s=(char*)arr;
	for(int i=0;i&lt;sizeof(arr)/sizeof(char);i++)		s[i]=1;
	for(auto i:arr)		cout&lt;&lt;i&lt;&lt;" "; cout&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="yYXAu" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="276">
     <p class="ne-p" id="ufeb12b02">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="474">
     <p class="ne-p" id="u03223b79">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="276">
     <p class="ne-p" id="u459da67c">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="474">
     <p class="ne-p" id="ucede45d2">
      <span class="ne-text">
       0 0 0 0 0
      </span>
     </p>
     <p class="ne-p" id="链接a2">
      <span class="ne-text">
       -1 -1 -1 -1 -1
      </span>
     </p>
     <p class="ne-p" id="uefb4e3b1">
      <span class="ne-text">
       16843009 16843009 16843009 16843009
                            16843009
      </span>
     </p>
     <p class="ne-p" id="u135ff4e3">
      <span class="ne-text">
       00000001000000010000000100000001
      </span>
     </p>
     <p class="ne-p" id="uf29e46c7">
      <span class="ne-text">
       16843009 16843009 16843009 16843009
                            16843009
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u475ea48b">
   <span class="ne-text">
    第5行将整个数组全部赋值为0，第7行将数组的所有内存区间设置为全1，从第6行和第8行的输出结果可以证明。但第10行输出结果显示，并没有按照预期将5个元素设置为1，这是因为memset以字节为单位，相当于将arr的整型地址转换为char类型地址，然后对每个char用指定的第二个参数进行赋值，每个字节都被赋值为1，从第11行的输出结果可以看到。第12-14行展示了与第9行相同执行的效果。
   </span>
  </li>
  <li id="ub813f27c">
   <span class="ne-text">
    这里给出这个例子，并不是为了掌握使用memset赋初值的方法，这种赋初值的方法没有第八章的STL容器方便。主要希望学习者看到，指针的主要作用是访问空间，用不同类型的指针访问，就可以达到不同的效果。代码中的数组定义是整型，但是memset强制按照char类型的指针进行访问，就可以达到按字节处理的目的。
   </span>
  </li>
 </ul>
 <h3 id="IS3uW">
  <span class="ne-text">
   知识点：T621-T622
  </span>
 </h3>
 <table border=1 class="ne-table" id="cs8MI" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u5095cfe3">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u4c30888f" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="64">
     <p class="ne-p" id="u8ff52ebc">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u4102c1e7">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ue2fa160c">
      <span class="ne-text">
       T621
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u9891d6dd">
      <span class="ne-text">
       理解数组名和指针的异同，理解表6.1中各种方式的对应关系，对于一个数组空间，即使给出的是指针形式，也可以按照数组形式进行访问，更便于理解
      </span>
     </p>
    </td>
    <td width="64">
     <p class="ne-p" id="uc0904a02">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#pNT2u" href="ch5#pNT2u">
       <span class="ne-text">
        T513
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u6575d2ef">
      <a class="ne-link" data-href="#MrbQT" href="#MrbQT">
       <span class="ne-text">
        T626
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#BPKTU" href="ch8#BPKTU" target="_blank">
       <span class="ne-text">
        T823
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ue73e571e">
      <span class="ne-text">
       T622
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u664cff2a">
      <span class="ne-text">
       通过显示转换指针的类型，就可以对空间采用不同的访问形式
      </span>
     </p>
    </td>
    <td width="64">
     <p class="ne-p" id="u1271ca85">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#vctGB" href="ch2#vctGB">
       <span class="ne-text">
        T252
       </span>
      </a>
     </p>
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="669">
     <p class="ne-p" id="u6c3ebf1c">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161754" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161754" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX609)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161747" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161747" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX602)
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="ko90t">
  <span class="ne-text">
   2.2 二维数组与指针
  </span>
 </h2>
 <p class="ne-p" id="u4968dc70" style="text-indent: 2em;; text-align: left">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   二维数组及多维数组的存储原理与一维数组一样。以一个 5 行 4 列的二维数组
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(207, 149, 17); background-color: rgb(252, 252, 252)">
    int
   </span>
   <span class="ne-text" style="color: rgb(68, 68, 68); background-color: rgb(252, 252, 252)">
    a
   </span>
   <span class="ne-text" style="color: rgb(48, 48, 238); background-color: rgb(252, 252, 252)">
    [
   </span>
   <span class="ne-text" style="color: rgb(50, 186, 6); background-color: rgb(252, 252, 252)">
    5
   </span>
   <span class="ne-text" style="color: rgb(48, 48, 238); background-color: rgb(252, 252, 252)">
    ][
   </span>
   <span class="ne-text" style="color: rgb(50, 186, 6); background-color: rgb(252, 252, 252)">
    4
   </span>
   <span class="ne-text" style="color: rgb(48, 48, 238); background-color: rgb(252, 252, 252)">
    ];</span></code>
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   为例，它在逻辑上是由行和列组成的，可以分为三层来理解，如图 6.2所示。
  </span>
 </p>
 <p class="ne-p" id="u22e62bd9" style="text-indent: 2em;; text-align: center">
  <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 16px">
   <br/>
  </span>
  <img class="ne-image img-60" id="Elx5C" src="images/1658061323564-749f5c0c-1532-4f97-9fc7-9940133833bf.jpeg"/>
 </p>
 <p class="ne-p" id="ua7e0653f" style="text-indent: 2em;; text-align: center">
  <span class="ne-text" style="font-size: 16px">
   图6.2 二维数组
  </span>
 </p>
 <p class="ne-p" id="u285bc30a" style="text-indent: 2em;">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   第一层，将数组
            a 看作一个变量，该变量的地址为 &amp;a，长度为 sizeof(a)。因为数组的长度为元素数量乘以每个元素类型的大小，这里的二维数组 a 为 5 行 4 列共 20 个元素，每个元素占用 4 字节，所以变量 a
            占用 80 字节。
  </span>
  <span class="ne-text">
   <br/>
  </span>
  <span class="ne-text">
  </span>
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   第二层，将数组 a 看作一个一维数组，由 a[0]、a[1]、a[2]、a[3] 与 a[4] 等 5 个元素组成。数组的首地址为 a 或
            &amp;a[0]（即数组首地址和第一个元素的地址相同，而每个数组元素的地址相差为 16，表示每个数组元素的长度为 16），使用 sizeof(a[0]) 可得到数组元素的长度。
  </span>
  <span class="ne-text">
   <br/>
  </span>
  <span class="ne-text">
  </span>
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   第三层，将第二层中的每个数组元素看作一个单独的数组。第二层中的每一个元素又由 4 个元素构成，如 a[0] 又由
            a[0][0]、a[0][1]、a[0][2] 与 a[0][3] 等 4 个元素组成，每个元素占用sizeof(a[0][0]) =4字节。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="iSKfa"><span style="font-weight:bold;">代码6.6</span> 二维数组与指针<code>#include&lt;iostream&gt;
#include&lt;typeinfo&gt;
using namespace std;
#define type(obj) typeid(obj).name()

int main (  )
{
    int a[5][4];
    cout&lt;&lt;"对象\ta\ta[0]\ta[0][0]"&lt;&lt;endl;
    cout&lt;&lt;"类型"&lt;&lt;'\t'&lt;&lt;type(a)&lt;&lt;'\t'&lt;&lt;type(a[0])&lt;&lt;'\t'&lt;&lt;type(a[0][0])&lt;&lt;endl;
    cout&lt;&lt;"地址类型"&lt;&lt;'\t'&lt;&lt;type(&amp;a)&lt;&lt;'\t'&lt;&lt;type(&amp;a[0])&lt;&lt;'\t'&lt;&lt;type(&amp;a[0][0])&lt;&lt;endl;
    cout&lt;&lt;"地址"&lt;&lt;'\t'&lt;&lt;&amp;a&lt;&lt;'\t'&lt;&lt;&amp;a[0]&lt;&lt;'\t'&lt;&lt;&amp;a[0][0]&lt;&lt;endl;
    cout&lt;&lt;"空间"&lt;&lt;'\t'&lt;&lt;sizeof(a)&lt;&lt;'\t'&lt;&lt;sizeof(a[0])&lt;&lt;'\t'&lt;&lt;sizeof(a[0][0])&lt;&lt;endl;
    cout&lt;&lt;"地址+1"&lt;&lt;'\t'&lt;&lt;&amp;a+1&lt;&lt;'\t'&lt;&lt;&amp;a[0]+1&lt;&lt;'\t'&lt;&lt;&amp;a[0][0]+1&lt;&lt;endl;
    cout&lt;&lt;"地址空间"&lt;&lt;'\t'&lt;&lt;sizeof(&amp;a)&lt;&lt;'\t'&lt;&lt;sizeof(&amp;a[0])&lt;&lt;'\t'&lt;&lt;sizeof(&amp;a[0][0])&lt;&lt;endl;

    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="w1GQl" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="u52d9ccfb">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td colspan="4" width="600">
     <p class="ne-p" id="u971c385e">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="7" width="150">
     <p class="ne-p" id="u5a9241f2">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u9416d50a">
      <span class="ne-text" style="font-size: 16px">
       对象
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="ua60ea518">
      <span class="ne-text">
       a
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="ufe0501fc">
      <span class="ne-text">
       a[0]
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u4ee34bbc">
      <span class="ne-text">
       a[0][0]
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="u2da45dd2">
      <span class="ne-text">
       类型
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="链接96">
      <span class="ne-text">
       A5_A4_i
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u590cf7ee">
      <span class="ne-text">
       A4_i
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="ud60edcc4">
      <span class="ne-text">
       i
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="u4d45f09e">
      <span class="ne-text">
       地址类型
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="uad723237">
      <span class="ne-text">
       PA5_A4_i
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="uf4587ff6">
      <span class="ne-text">
       PA4_i
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u00dc08e7">
      <span class="ne-text">
       Pi
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="ua5294bfd">
      <span class="ne-text">
       地址
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u7331b168">
      <span class="ne-text">
       0x61fdc0
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="ubf86e4d8">
      <span class="ne-text">
       0x61fdc0
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u1e342e39">
      <span class="ne-text">
       0x61fdc0
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="uf17bf59e">
      <span class="ne-text">
       空间
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u1aa05859">
      <span class="ne-text">
       80
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="ufe570861">
      <span class="ne-text">
       16
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u84329e45">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="u8839e391">
      <span class="ne-text">
       地址+1
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u52f05795">
      <span class="ne-text">
       0x61fe10
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u83d06d14">
      <span class="ne-text">
       0x61fdd0
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u35d98a42">
      <span class="ne-text">
       0x61fdc4
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="150">
     <p class="ne-p" id="u55b7291e">
      <span class="ne-text">
       地址空间
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="u34353c1e">
      <span class="ne-text">
       8
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="uf6677488">
      <span class="ne-text">
       8
      </span>
     </p>
    </td>
    <td width="150">
     <p class="ne-p" id="uace6937d">
      <span class="ne-text">
       8
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ubf5e4037">
   <span class="ne-text">
    将三层元素的相关信息进行输出比较，观察它们的异同。
   </span>
  </li>
  <li id="uefc1b09f">
   <span class="ne-text">
   </span>
   <code class="ne-code">
    <span class="ne-text">
     typeid(obj).name()</span></code>
   <span class="ne-text">
    可以输出变量的类型，第4行将其定义为宏，简化后继代码中的书写。宏是一个替换的概念，所有出现
   </span>
   <code class="ne-code">
    <span class="ne-text">
     type(obj)</span></code>
   <span class="ne-text">
    的内容都在机器代码中被编译器替换为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     typeid(obj).name()</span></code>
   <span class="ne-text">
    。
   </span>
  </li>
  <li id="ufc7f6dfa">
   <code class="ne-code">
    <span class="ne-text">
     typeid(obj).name()</span></code>
   <span class="ne-text">
    的输出中，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     i</span></code>
   <span class="ne-text">
    表示int，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     A</span></code>
   <span class="ne-text">
    表示数组，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     P</span></code>
   <span class="ne-text">
    表示指针。
   </span>
   <span class="ne-text">
    三层元素的首地址是相同的，但是它们的类型并不相同。进一步可以推导出地址也是类型的，相同的地址代表了不同的含义。第三章第4节局部变量的内存模型中提到过，65和'A'在内存中的表示形式完全相同，但是因为类型不同代表了不同的含义。从表格的类型一行可以看出，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    是一个5行4列的整型数组，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[0]</span></code>
   <span class="ne-text">
    是一个包含4个元素的一维整型数组，而
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[0][0]</span></code>
   <span class="ne-text">
    是一个整数。它们对应的地址是指针类型。
   </span>
  </li>
  <li id="ufe91418f">
   <span class="ne-text">
    每个类型占据的空间不同，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    占据5*4*sizeof(int)=80个字节，而
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[0]</span></code>
   <span class="ne-text">
    占据4*sizeof(int)=20个字节，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[0][0]</span></code>
   <span class="ne-text">
    只占据4个字节，因此地址进行+1操作时，得到的结果完全不同。
   </span>
  </li>
  <li id="u9ff60adc">
   <span class="ne-text">
    最后一行非常让初学者迷惑。这是因为地址本身也需要占用空间，在64位系统中，每个地址占64/8=8个字节，因此64位系统最大能管理2
   </span>
   <sup>
    <span class="ne-text">
     64
    </span>
   </sup>
   <span class="ne-text">
    的内存空间。
   </span>
  </li>
 </ul>
 <h3 id="WC0X9">
  <span class="ne-text">
   知识点：T623
  </span>
 </h3>
 <table border=1 class="ne-table" id="x5Cjj" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u6b4d3669">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ua2367ab0" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ucca6ad51">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf396b434">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ucc0cd8e7">
      <span class="ne-text">
       T623
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="uebdacb81">
      <span class="ne-text">
       掌握二维数组的存储原理，理解多级地址形成指针的区别
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u32d1cf7c">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#D8kyt" href="ch5#D8kyt">
       <span class="ne-text">
        T531
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u8e8c0ed4">
      <a class="ne-link" data-href="#apHlP" href="#apHlP">
       <span class="ne-text">
        T624
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="675">
     <p class="ne-p" id="u584c32d7">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161748" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161748" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX603)
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="aBdGg">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   2.3 二维数组与一维数组
  </span>
 </h2>
 <p class="ne-p" id="u849c15f0" style="text-indent: 2em;">
  <span class="ne-text">
   计算机中的内存是按照线性规划地址的，也就是说所有的地址都是一维的。因此二维以上的高维数组只是逻辑上的概念，在最终存储时，还是一维的。因为数组要求所有元素的存储空间必须是连续的，所以高维数组都是低维数据存储结束后，存储下一个低维的所有数据，所有数据在一维上是连续的。以二维数组a[3][4]为例，C/C++是行优先存储的，首先存储第0行的4个元素，然后继续存储第1行的4个元素，最后存储第2行的4个元素，这12个元素在地址空间上是连续的。也就是说，高维数组也可以转换为一维数组进行访问。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="e82El"><span style="font-weight:bold;">代码6.7</span> 二维数组与一位数组<code>#include &lt;iostream&gt;
using namespace std;

int main ()
{
    int a[3][4] = { {3,5,7,6}, {1,8,2,5},{7,6,2,9}};
    int *p=&amp;a[0][0];
    for ( int i = 0; i &lt; 3; i++ ){
        for ( int j = 0; j &lt; 4; j++ ){
            cout &lt;&lt;'\t'&lt;&lt; p[i*4+j];
        }
        cout&lt;&lt;endl;
    }
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="r5Luy" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="udd44fec0">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="udace85e2">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4a867be4">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u7b0932b2">
      <span class="ne-text">
       3 5 7 6
      </span>
     </p>
     <p class="ne-p" id="u8a932d3b">
      <span class="ne-text">
       1 8 2 5
      </span>
     </p>
     <p class="ne-p" id="uadfc4389">
      <span class="ne-text">
       7 6 2 9
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ua55e2ee8">
   <span class="ne-text">
    第7行的一维指针p指向了二维数组首元素的地址，第10行显示可以用一维的形式遍历二维数组的数据，二维数组的所有元素在一维上是连续的。
   </span>
  </li>
 </ul>
 <h3 id="apHlP">
  <span class="ne-text">
   知识点：T624
  </span>
 </h3>
 <table border=1 class="ne-table" id="mTbBk" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ue1da0dd7">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="链接82" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub13dc03b">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u9ec8d225">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ua188207a">
      <span class="ne-text">
       T624
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ubfc344ab">
      <span class="ne-text">
       所有数组的物理存储都是一维的，掌握高维数组和一维数组的逻辑对应关系
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="链接96">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#WC0X9" href="ch6#WC0X9">
       <span class="ne-text">
        T623
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf3e1cd6b">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="675">
     <p class="ne-p" id="u1ddcd139">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161749" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161749" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX604)
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="xOowc">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   2.4 数组作为函数参数
  </span>
 </h2>
 <p class="ne-p" id="ue9e63acf" style="text-indent: 2em;">
  <span class="ne-text">
   将数组作为函数参数时，形式上虽然是数组，但是实际上是指针。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="aB6jI"><span style="font-weight:bold;">代码6.8</span> 数组作为函数参数<code>#include&lt;iostream&gt;
#include&lt;typeinfo&gt;
using namespace std;
#define type(obj) typeid(obj).name()

void dummy(int b0[],int b[],int bb[][4])
{
    cout&lt;&lt;type(b0)&lt;&lt;'\t'&lt;&lt;type(b)&lt;&lt;'\t'&lt;&lt;type(bb)&lt;&lt;endl;
    cout&lt;&lt;b0[0]&lt;&lt;'\t'&lt;&lt;b&lt;&lt;'\t'&lt;&lt;bb&lt;&lt;endl;
    cout&lt;&lt;++b0&lt;&lt;'\t'&lt;&lt;++b&lt;&lt;'\t'&lt;&lt;++bb&lt;&lt;endl;
}

int main (  )
{
    int a0=3;
    int a[5];
    int aa[5][4];
    cout&lt;&lt;type(a0)&lt;&lt;'\t'&lt;&lt;type(a)&lt;&lt;'\t'&lt;&lt;type(aa)&lt;&lt;endl;
    cout&lt;&lt;&amp;a0&lt;&lt;'\t'&lt;&lt;a&lt;&lt;'\t'&lt;&lt;aa&lt;&lt;endl;
    //a=a+1;//a++;
    dummy(&amp;a0,a,aa);
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="m6svB" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u6ba273ea">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uaed9bf07">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ub7b8941c">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接76">
      <span class="ne-text">
       i A5_i A5_A4_i
      </span>
     </p>
     <p class="ne-p" id="ua0616059">
      <span class="ne-text">
       0x62fe0c 0x62fdf0 0x62fda0
      </span>
     </p>
     <p class="ne-p" id="u01d9c91f">
      <span class="ne-text">
       Pi Pi PA4_i
      </span>
     </p>
     <p class="ne-p" id="u4c178cf2">
      <span class="ne-text">
       3 0x62fdf0 0x62fda0
      </span>
     </p>
     <p class="ne-p" id="uf3c3200f">
      <span class="ne-text">
       0x62fe10 0x62fdf4 0x62fdb0
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u496ffcbd">
   <span class="ne-text">
    第20行执行会报错，提示错误incompatible types in assignment of : int* to int
                [5]'，表示类型不匹配；如果改写为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a++</span></code>
   <span class="ne-text">
    ，会提示错误. lvalue required as increment operand，意思是自增操作需要左值(lvalue)，左值就是可以放在赋值号
   </span>
   <code class="ne-code">
    <span class="ne-text">
     =</span></code>
   <span class="ne-text">
    左边的标识符，也就是必须要求是变量。引起这两个错误本质上的原因是数组名是常变量，不允许被修改。
   </span>
  </li>
  <li id="uf84d9f29">
   <span class="ne-text">
    第18行获知
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a0</span></code>
   <span class="ne-text">
    是一个整数，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    是一维数组，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     aa</span></code>
   <span class="ne-text">
    是二维数组。第8行输出结果说明对应的形参是指针类型。
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b0</span></code>
   <span class="ne-text">
    是一个整型指针，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    也是一个整型指针，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     bb</span></code>
   <span class="ne-text">
    是一个指向长度为4的数组的指针。
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     bb</span></code>
   <span class="ne-text">
    的类型从A变成了P，这也就是意味着数组类型的形参是指针变量，是可修改的。因此第10行可以正常执行。
   </span>
  </li>
  <li id="uf59b4468">
   <code class="ne-code">
    <span class="ne-text">
     a0</span></code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a</span></code>
   <span class="ne-text">
    虽然一个是整数，一个是整型数组，但是都可以用指针的形式传递给函数。地址加1后，分别增加了4个字节，但
   </span>
   <code class="ne-code">
    <span class="ne-text">
     bb</span></code>
   <span class="ne-text">
    是一个二维数组指针，+1后增加了4*4个字节。
   </span>
  </li>
  <li id="ue21e25f8">
   <code class="ne-code">
    <span class="ne-text">
     a0</span></code>
   <span class="ne-text">
    虽然是一个整数，也可以被作为长度为1的数组进行访问，见第9行。
   </span>
  </li>
  <li id="uf9f38f20">
   <span class="ne-text">
    第18行和第9行的输出结果完全相同，因为形参是指针变量，实参将其地址赋值给对应的形参。从实参对形参赋值的角度，就可以理解数组作为形参不能被解析为常变量。
   </span>
  </li>
 </ul>
 <h3 id="aplSt">
  <span class="ne-text">
   知识点：T625
  </span>
 </h3>
 <table border=1 class="ne-table" id="HAejl" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u2d3d0a85">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ue12537a6" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ufb7ce7b8">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ud70020fb">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u05845cae">
      <span class="ne-text">
       T625
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u8e74ed65">
      <span class="ne-text">
       掌握
      </span>
      <span class="ne-text" style="color: rgb(68, 68, 68)">
       数组作为函数参数的基本用法
      </span>
      <span class="ne-text">
       ，注意数组作为函数参数时实际上就是指针；单个变量也可以被认为是长度为1的数组。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub7148efc">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#TFSS3" href="ch5#TFSS3">
       <span class="ne-text">
        T515
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u6424b205">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="675">
     <p class="ne-p" id="ue6b73892">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161746" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161746" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX601)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161750" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161750" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX605)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161752" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161752" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX607)
       </span>
      </a>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161753" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161753" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX608)
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="iJjW5">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   2.5 C风格字符串与指针
  </span>
 </h2>
 <p class="ne-p" id="uec9c2a55" style="text-indent: 2em;">
  <span class="ne-text">
   C风格的字符串，实际上就是从第一个字符的地址开始向后遍历，到'\0'结束，构成字符串。以下代码将C风格字符串的基本操作用指针形式完成。通过这些代码，可以进一步理解C风格字符串与指针的关系，掌握指针的遍历、偏移等基本含义。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="KitS2"><span style="font-weight:bold;">代码6.9</span> 字符串与指针<code>int ptr_strlen(char* s)
{
    char* p=s;
    while(*p)	++p;
    return p-s;
}</code></pre>
 <ul class="ne-ul">
  <li id="ue2ff687d">
   <span class="ne-text">
    结束字符'\0'的ASCII码为0，代表false，因此第4行不断++向后遍历，直到找到'\0'。
   </span>
  </li>
  <li id="u22d80871">
   <span class="ne-text">
    第5行中指针p指向'\0'，而s是首字符的地址，二者之间的减法表示了偏移量，即元素的个数。因此p-s代表了字符串的逻辑长度。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="uHnCm"><span style="font-weight:bold;">代码6.10</span> 字符串与指针<code>void ptr_strcpy(char* target, char* source)
{
    while(*source)
        *target++=*source++;
    *target='\0';			//或*target=*source;
    // do{
    //     *target++=*source++;
    // }while(*source);
}</code></pre>
 <ul class="ne-ul">
  <li id="udcb96ca3">
   <span class="ne-text">
    第4行通过++不断向后偏移，将对应的字符赋值给target
   </span>
  </li>
  <li id="u1d26c5e4">
   <span class="ne-text">
    第5行时，target指针已经指向尾部，必须给予'\0'，表示字符串的结束。也可以用source进行赋值，因为此时的source正好指向'\0'。
   </span>
  </li>
  <li id="u0c7aee70">
   <span class="ne-text">
    第3-5行也可以替换为第6-8行，因为do-while循环先赋值再比较，因此能确保'\0'被赋值。（知识点：
   </span>
   <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#kRPdd" href="ch4#kRPdd">
    <span class="ne-text">
     T421
    </span>
   </a>
   <span class="ne-text">
    ）
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="MfJO4"><span style="font-weight:bold;">代码6.11</span> 字符串与指针<code>int ptr_strcmp(char* str1, char* str2)
{
    while(*str1&amp;&amp;*str1==*str2)
    {str1++;str2++;}
    return *str1-*str2;
}</code></pre>
 <ul class="ne-ul">
  <li id="ua596483f">
   <span class="ne-text">
    第3行添加判断str1是否结束，是为了防止两个字符串相等，然后越过'\0'继续比较无效字符部分。但是因为后面的等于比较，不需要判断str2是否结束。
   </span>
  </li>
  <li id="uf6ccbdbb">
   <span class="ne-text">
    第6行将对应的两个字符作差返回，如果两个字符不同，则反映了两个字符串的大小关系。如果两个字符串相同，则str1和str2同时指向'\0'，返回结果为0表示相等。如果一个字符串结束而另一个字符串没结束，因为'\0'的ASCII码为0，任何字符都会大于'\0'。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="v4pKy"><span style="font-weight:bold;">代码6.12</span> 字符串与指针<code>char* ptr_strcat(char* target, char* source)
{
    char* p=target;
    while(*target)  target++;
    do{
        *target++=*source++;
    }while(*source);
    return p;
}</code></pre>
 <ul class="ne-ul">
  <li id="ue0f8874b">
   <span class="ne-text">
    第3行保留target的首指针，为了最后返回。
   </span>
  </li>
  <li id="udf06269d">
   <span class="ne-text">
    第4行先让target指向尾部。
   </span>
  </li>
  <li id="uabf2a163">
   <span class="ne-text">
    第5-7行将source的内容复制到target的尾部，包括'\0'。
   </span>
  </li>
 </ul>
 <h3 id="n9zKV">
  <span class="ne-text">
   随堂练习6.1
  </span>
 </h3>
 <p class="ne-p" id="u9f4cc103">
  <span class="ne-text">
   提取一个字符串中的所有数字字符（'0'...'9'）并输出。
  </span>
 </p>
 <table border=1 class="ne-table" id="af6zx" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u353f0152">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u3e63b308">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u3114a012">
      <span class="ne-text">
       s0d34f0df21gh
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u824aa38e">
      <span class="ne-text">
       034021
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="bC9Mx">
  <span class="ne-text">
   随堂练习6.2
  </span>
 </h3>
 <p class="ne-p" id="ueb5be7db">
  <span class="ne-text">
   提取一个字符串中的所有数字字符（'0'...'9'）将其转换为一个整数输出。
  </span>
 </p>
 <table border=1 class="ne-table" id="yzXkq" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4ae3818b">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u6066ba5f">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接00">
      <span class="ne-text">
       s0d034f0df21gh
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ub265146d">
      <span class="ne-text">
       34021
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="ua189dc4d">
  <span class="ne-text">
   提示：通过aoti将结果字符串转换为整数。（知识点：
  </span>
  <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#AhO5J" href="ch5#AhO5J">
   <span class="ne-text">
    T543
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <h3 id="MrbQT">
  <span class="ne-text">
   知识点：T626
  </span>
 </h3>
 <table border=1 class="ne-table" id="ue5C8" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u12ecf130">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u8ca91297" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u468e22c8">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ube4c9507">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u9678cf1d">
      <span class="ne-text">
       T626
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="链接09">
      <span class="ne-text">
       掌握C风格字符串与字符指针的对应关系
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf32b7fe4">
      <a class="ne-link" data-href="#IS3uW" href="#IS3uW">
       <span class="ne-text">
        T621
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u3faac6d0">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="HQgZO">
  <span class="ne-text">
   3. 堆内存与动态空间分配*
  </span>
 </h1>
 <p class="ne-p" id="u452f501f" style="text-indent: 2em;">
  <span class="ne-text">
   内存分配分为静态分配和动态分配，二者不同分为四个方面：1）分配时间：程序执行分为编辑、编译、连接、运行四个阶段，静态内存在编译开始阶段分配，动态内存在程序运行时分配，因而静态内存不占用CPU资源，而动态内存占用。2）分配位置：静态内存分配在栈区，动态内存分配在堆区。3）分配方式：静态内存由编译器自动分配，自动回收；动态内存由编程者手动分配，手动回收。4）分配大小：静态内存大小明确，分配时就确定了。动态内存无法确定大小，需要指针来指示位置。
  </span>
 </p>
 <p class="ne-p" id="ub01d437e" style="text-indent: 2em;">
  <span class="ne-text">
   由此可知，局部变量的内存分配都属于静态内存分配，分配在栈中。因为栈通常比较小，所以局部变量不能申请太大空间。对于多线程的程序，每个线程都有自己的栈内存，栈中的内容不能跨线程调用。函数可以定义一些参数（形参），函数体里也可以定义局部变量。对于每一个函数来说，当前函数一旦返回，这些形参和局部变量就出了作用域，占用的内存也就可以安全地释放。形参和局部变量的生命周期和函数调用的生命周期一致。一个函数所需要的内存大小在编译时就能知道，如果不考虑编译时优化，每个栈帧的大小等于当前函数的所有形参和局部变量的大小总和，外加一些元数据的大小。并且每个形参和局部变量在栈上的内存地址偏移量也都是固定的，所以只要有个变量名就可以直接获取到这个变量对应的内存地址。实际上，变量名被直接编译成偏移量，编译后的二进制代码不存在变量名。
  </span>
 </p>
 <p class="ne-p" id="u7dae4184" style="text-indent: 2em;">
  <span class="ne-text">
   堆内存是一种按需分配的动态内存管理机制。申请时才分配，申请多少给多少，而栈内存只要调了函数就直接把所有本次调用可能需要的内存都进行分配。动态内存分配机制能让数据一直存在，直到手工销毁，也能让多个线程共享同一个内存里的对象，任何线程只要拿到这片内存的地址和大小就能访问。但是由于它的动态，导致数据访问必须通过指针或引用。此外，堆内存分配耗时较多，对于有时间要求的程序，尽量减少使用动态内存分配。C++中采用new和delete进行堆内存的动态分配和释放，理论上要求new和delete一定要成对出现。因为堆内存分配必须要手动释放，否则会一直存在。如果只分配不释放，可用内存就会越来越少，造成内存泄露。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="V2xui"><span style="font-weight:bold;">代码6.13</span> 堆内存与动态空间分配<code>#include &lt;iostream&gt;
using namespace std;
int main()
{
    int *a = new int;                    //动态申请一个int类型空间
    int *a1 = new int(5);                //动态申请一个int类型的空间并且初始化为5
    int *a2 = new int[5];                //动态申请5个int类型数组
    int *a3 = new int[5]{1, 2, 3, 4, 5}; // C++11开始支持动态数组的初始化
    *a = 7;
    cout &lt;&lt; *a&lt;&lt;' ' &lt;&lt; *a1&lt;&lt;' ' &lt;&lt; a2[2]&lt;&lt;' ' &lt;&lt; a3[2] &lt;&lt; endl;
    cout &lt;&lt; a[0] &lt;&lt;' '&lt;&lt; a[1] &lt;&lt;' '&lt;&lt; a1[0] &lt;&lt; endl;
    delete a;
    delete a1;
    delete[] a2;
    delete[] a3;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="zevgQ" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4abd3c72">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u807dcdfb">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4a178f8a">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ue8dbae1d">
      <span class="ne-text">
       7 5 14942544 3
      </span>
     </p>
     <p class="ne-p" id="u2c9b6350">
      <span class="ne-text">
       7 0 5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u69c0194a">
   <span class="ne-text">
    动态内存分配就是分配了一块内存空间，用指针进行访问，第6行的形式表示对单个int类型空间进行初始化为5，而第7行表示同时申请了5个int类型空间。
   </span>
  </li>
  <li id="ua5ed8330">
   <span class="ne-text">
    因为a2未初始化，因此输出的值是随机的。
   </span>
  </li>
  <li id="u27c843f8">
   <span class="ne-text">
    第11行可以看出，指针就是按照地址进行访问，因此*a和a[0]的结果是一样的。也可以进行内存地址偏移，但是a+1地址处的内容是未知的，因此输出结果也是未知的。
   </span>
  </li>
 </ul>
 <h3 id="QzjoP">
  <span class="ne-text">
   知识点：T631
  </span>
 </h3>
 <table border=1 class="ne-table" id="VukRn" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u892f5d31">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="504">
     <p class="ne-p" id="ub1a89843" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf9b18378">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="108">
     <p class="ne-p" id="uc7baafef">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ub18a6baa">
      <span class="ne-text">
       T631
      </span>
     </p>
    </td>
    <td width="504">
     <p class="ne-p" id="ua2318a26">
      <span class="ne-text">
       理解静态分配和动态分配的区别，掌握动态内存分配和释放
      </span>
      <span class="ne-text" style="color: rgb(68, 68, 68)">
       的基本写法
      </span>
      <span class="ne-text">
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub09729cb">
      <br/>
     </p>
    </td>
    <td width="108">
     <p class="ne-p" id="ub5a78777">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/dky80n#BrVpR" href="ch7#BrVpR">
       <span class="ne-text">
        T721
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/dky80n#Tx7ka" href="ch7#Tx7ka">
       <span class="ne-text">
        T731
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="pcJ9k">
  <span class="ne-text">
   题单
  </span>
 </h1>
 <table border=1 class="ne-table" id="Il0IZ" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="68">
     <p class="ne-p" id="ua817d7da">
      <span class="ne-text">
       序号
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="u016ed7e8">
      <span class="ne-text">
       题目名称
      </span>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u11cbdaea">
      <span class="ne-text">
       知识点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u415a3461">
      <span class="ne-text">
       序号
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="ud95ae385">
      <span class="ne-text">
       题目名称
      </span>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uf8390a0c">
      <span class="ne-text">
       知识点
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="68">
     <p class="ne-p" id="链接d7">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX601
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="链接de">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161746" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161746" target="_blank">
       <span class="ne-text">
        调和平均
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ue66ca48f">
      <a class="ne-link" data-href="#TOnfM" href="#TOnfM">
       <span class="ne-text">
        T613
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#aplSt" href="#aplSt">
       <span class="ne-text">
        T625
       </span>
      </a>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uca4bd3e4">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX602
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u5da89085">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161747" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161747" target="_blank">
       <span class="ne-text">
        IPv4地址
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u2aba2962">
      <a class="ne-link" data-href="#TOnfM" href="#TOnfM">
       <span class="ne-text">
        T613
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#IS3uW" href="#IS3uW">
       <span class="ne-text">
        T622
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="68">
     <p class="ne-p" id="ue8fc8cbc">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX603
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="u6b9b7780">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161748" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161748" target="_blank">
       <span class="ne-text">
        创建二维数组
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ubf6023de">
      <a class="ne-link" data-href="#TOnfM" href="#TOnfM">
       <span class="ne-text">
        T613
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#WC0X9" href="#WC0X9">
       <span class="ne-text">
        T623
       </span>
      </a>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc19170db">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX604
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u7c4302d1">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161749" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161749" target="_blank">
       <span class="ne-text">
        对角线置1
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u85d14509">
      <a class="ne-link" data-href="#TOnfM" href="#TOnfM">
       <span class="ne-text">
        T613
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#apHlP" href="#apHlP">
       <span class="ne-text">
        T624
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="68">
     <p class="ne-p" id="ue2762da1">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX605
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="u3e9b084b">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161750" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161750" target="_blank">
       <span class="ne-text">
        逆置一维数组
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u9e253534">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#TFSS3" href="ch5#TFSS3">
       <span class="ne-text">
        T515
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#aplSt" href="#aplSt">
       <span class="ne-text">
        T625
       </span>
      </a>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf2b6def7">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX606
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u19619dfb">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161751" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161751" target="_blank">
       <span class="ne-text">
        指针数据交互
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ue38c1de0">
      <a class="ne-link" data-href="#TOnfM" href="#TOnfM">
       <span class="ne-text">
        T613
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="68">
     <p class="ne-p" id="u360dda1f">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX607
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="uc1571b77">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161752" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161752" target="_blank">
       <span class="ne-text">
        排序函数
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="链接72">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#TFSS3" href="ch5#TFSS3">
       <span class="ne-text">
        T515
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#aplSt" href="#aplSt">
       <span class="ne-text">
        T625
       </span>
      </a>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u36c866f3">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX608
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u8fa12e29">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161753" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161753" target="_blank">
       <span class="ne-text">
        矩阵每行元素和
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uf84e05b9">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#TFSS3" href="ch5#TFSS3">
       <span class="ne-text">
        T515
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#D8kyt" href="ch5#D8kyt">
       <span class="ne-text">
        T531
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#aplSt" href="#aplSt">
       <span class="ne-text">
        T625
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="68">
     <p class="ne-p" id="ub384ae4b">
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       LX609
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="ue590fade">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161754" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161754" target="_blank">
       <span class="ne-text">
        空间内部结构
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u2414fe6c">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#ADJJr" href="ch5#ADJJr">
       <span class="ne-text">
        T545
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#IS3uW" href="#IS3uW">
       <span class="ne-text">
        T622
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 </div>
</div>
      <!-- 网站内容 -->

      
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
    name: 'Ch6',
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
        this.$store.dispatch('toChapter', 9);
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
