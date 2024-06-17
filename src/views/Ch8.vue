<template>
<div class="whole-page">
    <!-- content -->
    <div class="self-main">
        <div class="chapter-title">✋第八章 模板和容器</div>
<div class="lake-content" ref="content-data" typography="classic">
    <div class="self-section">
 <h1 id="hai4M">
  <span class="ne-text">
   1. 泛型编程
  </span>
 </h1>
 <p class="ne-p" id="u88d7dbb7" style="text-align: justify; text-indent: 2em">
  <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
   泛型编程指在书写代码时，不考虑具体数据类型，而模板是泛型编程的基础。C++中的泛型编程主要分为模板函数和模板类。
  </span>
  <span class="ne-text">
   面向对象和泛型编程的目的就是提升复用性，
  </span>
  <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
   C++的
  </span>
  <span class="ne-text">
   标准模板库（Standard Template
            Library，STL）
  </span>
  <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
   提供了
  </span>
  <span class="ne-text">
   大体分为六大组件，分别是：容器、算法、迭代器、仿函数、适配器（配接器）、空间配置器
  </span>
  <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
   。
  </span>
 </p>
 <table border=1 class="ne-table" id="fx1sM" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td width="98">
     <p class="ne-p" id="u1c17859f">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       容器
      </span>
     </p>
    </td>
    <td width="502">
     <p class="ne-p" id="ud5189aeb">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       各种数据结构，如vector、list、deque、set、map等,用来存放数据。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="98">
     <p class="ne-p" id="u41863121">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       算法
      </span>
     </p>
    </td>
    <td width="502">
     <p class="ne-p" id="ub0af2466">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       各种常用的算法，如sort、find、copy、for_each等。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="98">
     <p class="ne-p" id="u00d5f0f9">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       迭代器
      </span>
     </p>
    </td>
    <td width="502">
     <p class="ne-p" id="u7464e424">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       扮演了容器与算法之间的胶合剂。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="98">
     <p class="ne-p" id="ud8ff3924">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       仿函数
      </span>
     </p>
    </td>
    <td width="502">
     <p class="ne-p" id="ued6f78c6">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       行为类似函数，可作为算法的某种策略。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="98">
     <p class="ne-p" id="u1d1606a2">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       适配器
      </span>
     </p>
    </td>
    <td width="502">
     <p class="ne-p" id="u80c1c37f">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       用来修饰容器或者仿函数或迭代器接口。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="98">
     <p class="ne-p" id="u85328bfe">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       空间配置器
      </span>
     </p>
    </td>
    <td width="502">
     <p class="ne-p" id="ub0b77536">
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
       负责空间的配置与管理。
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="twuaD">
  <span class="ne-text">
   1.1 模板函数
  </span>
 </h2>
 <p class="ne-p" id="udce3d890" style="text-align: justify; text-indent: 2em">
  <span class="ne-text">
   模板函数提供一个抽象的函数，并不具体指定其中数据的类型，而是某个虚拟类型代替。只提供基本的功能。其具体的数据类型，只在其被调用时视具体情况实例化。以下是一个具体样例：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="f8Yhz"><span style="font-weight:bold;">代码8.1</span> 最大值模板函数<code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

template &lt;typename T&gt;					//模板函数声明与定义
T const&amp; Max (T const&amp; a, T const&amp; b)
{
    return a &lt; b ? b:a;
}
int main ()
{
    int i = 39, j = 20;
    cout &lt;&lt; "Max(i, j): " &lt;&lt; Max(i, j) &lt;&lt; endl;
    double f1 = 13.5, f2 = 20.7;
    cout &lt;&lt; "Max(f1, f2): " &lt;&lt; Max(f1, f2) &lt;&lt; endl;
    string s1 = "Hello", s2 = "World";
    cout &lt;&lt; "Max(s1, s2): " &lt;&lt; Max(s1, s2) &lt;&lt; endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="hnUwD" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ub1709532">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uada2e8aa">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="3" width="375">
     <p class="ne-p" id="u64f29732">
      <span class="ne-text">
       （无）
      </span>
     </p>
     <p class="ne-p" id="u668ecdd4">
      <br/>
     </p>
    </td>
    <td rowspan="3" width="375">
     <p class="ne-p" id="u8e197031">
      <span class="ne-text">
       Max(i, j): 39
      </span>
     </p>
     <p class="ne-p" id="u58aad45a">
      <span class="ne-text">
       Max(i, j): 20.7
      </span>
     </p>
     <p class="ne-p" id="u09356994">
      <span class="ne-text">
       Max(i, j): World
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
   </tr>
   <tr style="height: 33px">
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u74b70b9d">
   <span class="ne-text">
    第5-9行定义了一个模板函数Max，实现了求两个数据最大值的操作；
   </span>
  </li>
  <li id="u22eb9628">
   <span class="ne-text">
    第5行template表明以下定义的是一个模板，typename指明T是一个虚拟类型，在第13,15,17行Max被调用时，根据传入数据的具体类型被具体化为实际的类型。也可以把T理解为一个类型的占位符；
   </span>
  </li>
  <li id="u9e1165ec">
   <span class="ne-text">
    第6行使用T定义了形参的类型和返回值的类型，const表示为常量，不可被修改；
   </span>
  </li>
  <li id="u0277a1f8">
   <span class="ne-text">
    交换模板
   </span>
   <code class="ne-code">
    <span class="ne-text">
     swap
    </span>
   </code>
   <span class="ne-text">
    的函数定义为：
   </span>
   <code class="ne-code">
    <span class="ne-text">
     template &lt;class T&gt; void swap(T&amp; a, T&amp; b)
    </span>
   </code>
   <span class="ne-text">
    。可以看到，与目标函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     Max
    </span>
   </code>
   <span class="ne-text">
    的定义非常相似，只是因为要修改参数的值，没有加
   </span>
   <code class="ne-code">
    <span class="ne-text">
     const
    </span>
   </code>
   <span class="ne-text">
    常量约束。对于任意两个类型相同的变量，都可以调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     swap
    </span>
   </code>
   <span class="ne-text">
    模板函数进行交换。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u3032745d" style="text-indent: 2em">
  <span class="ne-text">
   虚拟类型可以有多个，以下是另外一个样例：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="usHtn"><span style="font-weight:bold;">代码8.2</span> 求和模板函数<code>#include &lt;iostream&gt;
using namespace std;
template &lt;typename T1, typename T2&gt;	//模板函数声明与定义
T2 test(T1 tmp1, T2 tmp2) {
    T2 tmp = tmp1 + tmp2;
    return tmp;
}
int main(void) {
    cout &lt;&lt; "test(10,5)=" &lt;&lt; test(10,5) &lt;&lt; endl;
    cout &lt;&lt; "test(5,'A')=" &lt;&lt; test(5,'A') &lt;&lt; endl ;
    cout &lt;&lt; "test(10,5.5) =" &lt;&lt; test(10,5.5) &lt;&lt; endl;
    cout &lt;&lt; "test(5.5,10) =" &lt;&lt; test(5.5,10) &lt;&lt; endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="xxADp" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u76da1262">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uef556706">
      <strong>
       <span class="ne-text">
        样例输出
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="3" width="375">
     <p class="ne-p" id="u703f1017">
      <span class="ne-text">
       （无）
      </span>
     </p>
     <p class="ne-p" id="u38d82f89">
      <br/>
     </p>
    </td>
    <td rowspan="3" width="375">
     <p class="ne-p" id="u22cd6ec7">
      <span class="ne-text">
       test(10,5)=15
      </span>
     </p>
     <p class="ne-p" id="ua4c8fe56">
      <span class="ne-text">
       test(5,'A')=F
      </span>
     </p>
     <p class="ne-p" id="u2cd27cd4">
      <span class="ne-text">
       test(10,5.5) =15.5
      </span>
     </p>
     <p class="ne-p" id="u73533be3">
      <span class="ne-text">
       test(5.5,10) =15
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
   </tr>
   <tr style="height: 33px">
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u1e4cb3ac">
   <span class="ne-text">
    因为返回类型为T2，因此第10行的结果为字符类型，第11行结果为浮点类型，第12行结果被取整。
   </span>
  </li>
 </ul>
 <h3 id="e79I0">
  <span class="ne-text">
   知识点：T811
  </span>
 </h3>
 <table border=1 class="ne-table" id="eFJhg" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u56ce1ed6">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u2c41a7c2" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ud4559b13">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u02fb6a76">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ud9c6bf16">
      <span class="ne-text">
       T811
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u2ea69c53">
      <span class="ne-text">
       掌握模板函数，能够自定义简单的模板函数
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ud9d6361a">
      <a class="ne-link" data-href="ch#panTK" href="ch2#panTK">
       <span class="ne-text">
        T26B
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u3fe49083">
      <a class="ne-link" data-href="#qwRMs" href="#qwRMs">
       <span class="ne-text">
        T812
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="LutwA">
  <span class="ne-text">
   1.2 模板类*
  </span>
 </h2>
 <p class="ne-p" id="u4456e505" style="text-indent: 2em">
  <span class="ne-text">
   与模板函数类似，可以构建模板类，不指定具体数据类型。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="NQr53"><span style="font-weight:bold;">代码8.3</span> 模板类<code>#include &lt;iostream&gt;
using namespace std;
template&lt;class type&gt; class Container {
private:
    type data;
public:
    Container(type d) { this-&gt;data = d; }
    type operator+(const Container&lt;type&gt;&amp; t){
        return this-&gt;data + t.data;
    }
};
int main() {
    Container&lt;int&gt; ia(3), ib(5);
    cout &lt;&lt; ia + ib &lt;&lt; endl;
    Container&lt;string&gt; as("abc"), bs("def");
    cout &lt;&lt; as + bs &lt;&lt; endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="DiolX" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uf53ad80d">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc0823ac8">
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
     <p class="ne-p" id="ue1afd547">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u57595848">
      <span class="ne-text">
       8
      </span>
     </p>
     <p class="ne-p" id="u0fad1ad6">
      <span class="ne-text">
       15
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u433a9a03">
   <span class="ne-text">
    第3行定义了一个模板类，在第13行调用时，将数据类型指定的为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int
    </span>
   </code>
   <span class="ne-text">
    ，第15行调用时，数据类型指定为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     string
    </span>
   </code>
   <span class="ne-text">
    。具体执行时，就会显示不同的类型的具体操作，见第14行和第16行的输出结果。
   </span>
  </li>
  <li id="u0f235f97">
   <span class="ne-text">
    在第4-11行类的具体定义中，与
   </span>
   <code class="ne-code">
    <span class="ne-text">
     data
    </span>
   </code>
   <span class="ne-text">
    的数据类型关联时，都用指定的虚拟类型
   </span>
   <code class="ne-code">
    <span class="ne-text">
     type
    </span>
   </code>
   <span class="ne-text">
    代替。
   </span>
  </li>
  <li id="uc1240df7">
   <span class="ne-text">
    在1.2中使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     class
    </span>
   </code>
   <span class="ne-text">
    指定虚拟类型，而在1.1中使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     typename
    </span>
   </code>
   <span class="ne-text">
    指定虚拟类型，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     class
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     typename
    </span>
   </code>
   <span class="ne-text">
    在指定模板的虚拟类型时，是完全相同的。
   </span>
  </li>
 </ul>
 <h3 id="qwRMs">
  <span class="ne-text">
   知识点：T812
  </span>
 </h3>
 <table border=1 class="ne-table" id="Yllmf" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ub7589410">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ub55df1f0" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf32ee5ca">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf2a4db28">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="uda76e410">
      <span class="ne-text">
       T812
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="ube37ae85">
      <span class="ne-text">
       理解模板类，会用模板类执行基本操作。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ucf2029ac">
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="ch#e79I0" href="ch8#e79I0">
       <span class="ne-text">
        T811
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u7b6fd344">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 </div>
<div class="self-section">
 <h1 id="x7JiO">
  <span class="ne-text">
   2. STL容器
  </span>
 </h1>
 <p class="ne-p" id="u8f43e238" style="text-indent: 2em">
  <span class="ne-text">
   参考文档链接：
  </span>
  <a class="ne-link" data-href="https://cplusplus.com/reference/stl/" href="https://cplusplus.com/reference/stl/" target="_blank">
   <span class="ne-text">
    https://cplusplus.com/reference/stl/
   </span>
  </a>
 </p>
 <p class="ne-p" id="udaebc3a6" style="text-indent: 2em">
  <span class="ne-text">
   STL容器就是将运用最广泛的一些数据结构实现出来，常用的数据结构：数组,
            链表,树, 栈, 队列, 集合, 映射表 等。这些容器分为序列式容器和关联式容器两种。C++11新加入4种容器，主要结构采用哈希函数，因此也称为无序容器。
  </span>
 </p>
 <p class="ne-p" id="uda37c2d1" style="text-indent: 2em; margin-left: 2em; text-align: justify">
  <span class="ne-text">
   表8.1 STL容器种类
  </span>
 </p>
 <table border=1 class="ne-table" id="BQDA3" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td style="background-color: rgb(237, 237, 237)" width="108">
     <p class="ne-p" id="ue485a413">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       容器种类
      </span>
     </p>
    </td>
    <td style="background-color: rgb(237, 237, 237)" width="645">
     <p class="ne-p" id="uac7a3c82">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       功能
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="108">
     <p class="ne-p" id="u1b183c7d">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       序列容器
      </span>
     </p>
    </td>
    <td width="645">
     <p class="ne-p" id="u1060f7ca">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       主要包括 vector 向量容器、list 列表容器以及 deque
                            双端队列容器。之所以被称为序列容器，是因为元素在容器中的位置同元素的值无关，即容器不是排序的。将元素插入容器时，指定在什么位置，元素就会位于什么位置。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="108">
     <p class="ne-p" id="udb235111">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       关联式容器（排序容器）
      </span>
     </p>
    </td>
    <td width="645">
     <p class="ne-p" id="u8ce4a594">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       包括 set 集合容器、multiset多重集合容器、map映射容器以及
                            multimap 多重映射容器。排序容器中的元素默认是由小到大排序好的，即便是插入元素，元素也会插入到适当位置。所以关联容器在查找时具有非常好的性能。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="108">
     <p class="ne-p" id="ub1cc14d0">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       哈希容器
      </span>
     </p>
     <p class="ne-p" id="u3a348a69">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       （无序容器）
      </span>
     </p>
    </td>
    <td width="645">
     <p class="ne-p" id="ue89b5ccd">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       分别是 unordered_set 哈希集合、unordered_multiset
                            哈希多重集合、unordered_map 哈希映射以及 unordered_multimap
                            哈希多重映射。和排序容器不同，哈希容器中的元素是未排序的，元素的位置由哈希函数确定。
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="woi9U">
  <span class="ne-text">
   2.1 容器的分类
  </span>
 </h2>
 <p class="ne-p" id="u5bf217fc">
  <strong>
   <span class="ne-text">
    序列容器：
   </span>
  </strong>
 </p>
 <p class="ne-p" id="ube76f63b" style="text-indent: 2em">
  <span class="ne-text">
   所谓序列容器，即以线性排列（类似普通数组的存储方式）来存储某一指定类型（例如
            int、double
            等）的数据，每个元素均有固定的位置。需要特殊说明的是，该类容器并不会自动对存储的元素按照值的大小进行排序。需要注意，序列容器只是一类容器的统称，并不指具体的某个容器。序列容器大致包含以下几类容器，其对应的头文件与容器名相同。前三种容器可以进行随机访问，意味着底层存储结构为数组，存储空间连续；后面三种容器不可以随机访问，意味着每个节点都是独立存储，在空间上不具有连续性。
  </span>
 </p>
 <p class="ne-p" id="u1de86c77" style="text-indent: 2em">
  <span class="ne-text">
   表8.2 序列容器
  </span>
 </p>
 <table border=1 class="ne-table" id="C8aZn" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="u7e501b9a">
      <span class="ne-text" style="font-size: 14px">
       容器
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="u44b19196">
      <span class="ne-text">
       描述
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="u419482d1">
      <span class="ne-text">
      </span>
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       增加或删除元素
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="uf63975da">
      <span class="ne-text">
       随机访问
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="u3b6eaedb">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       数组容器
      </span>
     </p>
     <p class="ne-p" id="ua75c7a74">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       array&lt;T,N&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="u91f3fdc9">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       表示可以存储 N 个 T 类型的元素，是
      </span>
      <a class="ne-link" data-href="http://c.biancheng.net/cplus/" href="http://c.biancheng.net/cplus/" target="_blank">
       <span class="ne-text">
        C++
       </span>
      </a>
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       本身提供的一种容器。
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="u3fc3b074">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       长度固定，不能增加或删除元素
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="ub3b3f993">
      <span class="ne-text">
       Y
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="u247140e2">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       向量容器
      </span>
     </p>
     <p class="ne-p" id="u3519a885">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       vector&lt;T&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="ua7fa52b6">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       长度可变，即在存储空间不足时，会自动申请更多的内存。
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="u3d143d96">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       尾部增删效率O(1)
      </span>
     </p>
     <p class="ne-p" id="u815ea9f8">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       其他位置增删效率O(n)
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="ue53db899">
      <span class="ne-text">
       Y
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="u1b0b94ce">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       双端队列容器
      </span>
     </p>
     <p class="ne-p" id="u9f473518">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       deque&lt;T&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="u87c79e04">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       和 vector 相似，头部和尾部插入和删除元素都非常高效。
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="u79829722">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       头部尾部增删效率O(1)
      </span>
     </p>
     <p class="ne-p" id="u2eaa0daa">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       其他位置增删效率O(n)
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="ud93a3a09">
      <span class="ne-text">
       Y
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="uae0000fa">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       链表容器
      </span>
     </p>
     <p class="ne-p" id="u1792c506">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       list&lt;T&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="u619b5f61">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       长度可变，由 T 类型元素组成的序列，以双向链表形式组织元素
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="ue6253ea6">
      <span class="ne-text">
       任意位置增删效率O(1)
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="uae987944">
      <span class="ne-text">
       N
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="u54b45609">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       正向链表容器
      </span>
     </p>
     <p class="ne-p" id="u4377b343">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       forward_list&lt;T&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="ud9428c36">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       以单链表的形式组织元素，它内部的元素只能从第一个元素开始访问，比链表容器快、更节省内存。
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="u8db8a2f2">
      <span class="ne-text">
       任意位置增删效率O(1)
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="uc1c906a4">
      <span class="ne-text">
       N
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="uf301a83b">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       堆栈
      </span>
     </p>
     <p class="ne-p" id="u343d84ac">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       stack&lt;T&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="ub372b29d">
      <span class="ne-text">
       在deque&lt;T&gt;的基础上形成，只能在尾部进行增加删除，实现先进后出
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="ub0928928">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       尾部增删效率O(1)
      </span>
     </p>
     <p class="ne-p" id="ub124f6fd">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       其他位置不能增删
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="udf4c3335">
      <span class="ne-text">
       N
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="130">
     <p class="ne-p" id="uc6a9f39c">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       单向队列
      </span>
     </p>
     <p class="ne-p" id="u6e7f6397">
      <span class="ne-text" style="color: rgb(0, 128, 0); font-size: 14px">
       queue&lt;T&gt;
      </span>
     </p>
    </td>
    <td width="330">
     <p class="ne-p" id="u33c06797">
      <span class="ne-text">
       在deque&lt;T&gt;的基础上形成，只能在尾部新增，头部弹出，实现先进先出
      </span>
     </p>
    </td>
    <td width="216">
     <p class="ne-p" id="u65a06606">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       尾部增加效率O(1)，头部弹出效率O(1)，其他位置不能增删
      </span>
     </p>
    </td>
    <td width="80">
     <p class="ne-p" id="u86cab139">
      <span class="ne-text">
       N
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u24db5402">
  <strong>
   <span class="ne-text">
    关联式容器：
   </span>
  </strong>
 </p>
 <p class="ne-p" id="ue22ff3e9" style="text-indent: 2em">
  <span class="ne-text">
   关联式容器底层采用二叉树结构，更确切的说是红黑树结构，各元素之间没有严格的物理顺序关系。与序列容器不同，关联式容器在存储元素值的同时，还会为各元素额外再配备一个值（又称为“键”，其本质也是一个
            C++
            基础数据类型或自定义类型的元素），它的功能是在使用关联式容器的过程中，如果已知目标元素的键的值，则直接通过该键就可以找到目标元素，而无需再通过遍历整个容器的方式。关联式容器可以快速查找、读取或者删除所存储的元素，同时该类型容器插入元素的效率也比序列式容器高。
  </span>
 </p>
 <p class="ne-p" id="u4728f068" style="text-indent: 2em">
  <span class="ne-text">
   也就是说，使用关联式容器存储的元素，都是“键值对”（
            &lt;key,value&gt; ），这是和序列式容器最大的不同。除此之外，序列式容器中存储的元素默认都是未经过排序的，而使用关联式容器存储的元素，默认会根据各元素的键值的大小做升序排序。
  </span>
 </p>
 <p class="ne-p" id="u10088f9a" style="text-indent: 2em">
  <span class="ne-text">
   表8.3 关联式容器
  </span>
 </p>
 <table border=1 class="ne-table" id="w1Snf" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td style="background-color: rgb(237, 237, 237)" width="122">
     <p class="ne-p" id="u6d937590">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       关联式容器名称
      </span>
     </p>
    </td>
    <td style="background-color: rgb(237, 237, 237)" width="622">
     <p class="ne-p" id="u689baef3">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       特点
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="122">
     <p class="ne-p" id="u03610cee">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       map
      </span>
     </p>
    </td>
    <td width="622">
     <p class="ne-p" id="u73d95f72">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       定义在 &lt;map&gt;
                            头文件中，使用该容器存储的数据，其各个元素的键必须是唯一的（即不能重复），该容器会根据各元素键的大小，默认进行升序排序（调用 std::less&lt;T&gt;）。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="122">
     <p class="ne-p" id="ue17aa354">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       set
      </span>
     </p>
    </td>
    <td width="622">
     <p class="ne-p" id="u9dde3e32">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       定义在 &lt;set&gt;
                            头文件中，使用该容器存储的数据，各个元素键和值完全相同，且各个元素的值不能重复（保证了各元素键的唯一性）。该容器会自动根据各个元素的键（其实也就是元素值）的大小进行升序排序（调用
                            std::less&lt;T&gt;）。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="122">
     <p class="ne-p" id="ud99c44a2">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       multimap
      </span>
     </p>
    </td>
    <td width="622">
     <p class="ne-p" id="ua4de79f5">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       定义在 &lt;map&gt; 头文件中，和 map
                            容器唯一的不同在于，multimap 容器中存储元素的键可以重复。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="122">
     <p class="ne-p" id="u22e1bf33">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       multiset
      </span>
     </p>
    </td>
    <td width="622">
     <p class="ne-p" id="u36e8b6ef">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       定义在 &lt;set&gt; 头文件中，和 set
                            容器唯一的不同在于，multiset 容器中存储元素的值可以重复（一旦值重复，则意味着键也是重复的）。
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u26a95070">
  <strong>
   <span class="ne-text">
    无序容器：
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u0c04f977" style="text-indent: 2em">
  <span class="ne-text">
   无序容器只是一类容器的统称，仅是在前面提到的 4
            种关联式容器名称的基础上，添加了
            "unordered_"。关联式容器会对存储的键值进行排序，但是无序容器不会。如果涉及大量遍历容器的操作，建议首选关联式容器；反之，如果更多的操作是通过键获取对应的值，则应首选无序容器。因为无序容器底层采用hash结构，其随机获取键值对的性能为常量级，即O(1)。
  </span>
 </p>
 <p class="ne-p" id="ufa3f2d9f" style="text-indent: 2em">
  <span class="ne-text">
   表8.4 无序容器
  </span>
 </p>
 <table border=1 class="ne-table" id="DrdE7" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td style="background-color: rgb(237, 237, 237)" width="166">
     <p class="ne-p" id="u9157a888">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       无序容器
      </span>
     </p>
    </td>
    <td style="background-color: rgb(237, 237, 237)" width="588">
     <p class="ne-p" id="u10900812">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       功能
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="166">
     <p class="ne-p" id="u093823a9">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       unordered_map
      </span>
     </p>
    </td>
    <td width="588">
     <p class="ne-p" id="u359868f5">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       存储键值对 &lt;key, value&gt;
                            类型的元素，其中各个键值对键的值不允许重复，且该容器中存储的键值对是无序的。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="166">
     <p class="ne-p" id="u34149751">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       unordered_multimap
      </span>
     </p>
    </td>
    <td width="588">
     <p class="ne-p" id="udb2241e6">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       和 unordered_map
                            唯一的区别在于，该容器允许存储多个键相同的键值对。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="166">
     <p class="ne-p" id="ufe579de8">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       unordered_set
      </span>
     </p>
    </td>
    <td width="588">
     <p class="ne-p" id="ud9eff5ec">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       不再以键值对的形式存储数据，而是直接存储数据元素本身（当然也可以理解为，该容器存储的全部都是键
                            key 和值 value 相等的键值对，正因为它们相等，因此只存储 value 即可）。另外，该容器存储的元素不能重复，且容器内部存储的元素也是无序的。
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="166">
     <p class="ne-p" id="u1aca7a02">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       unordered_multiset
      </span>
     </p>
    </td>
    <td width="588">
     <p class="ne-p" id="ud1eb1656">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       和 unordered_set
                            唯一的区别在于，该容器允许存储值相同的元素。
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="Y0XZc">
  <span class="ne-text">
   知识点：T821
  </span>
 </h3>
 <table border=1 class="ne-table" id="hjl5u" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ua7e4b6a0">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u6925104c" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u7bd55a69">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf50417a5">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u2cbe880c">
      <span class="ne-text">
       T821
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua90c705e">
      <span class="ne-text">
       了解STL容器的分类
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u273a53a2">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u1201e6fb">
      <a class="ne-link" data-href="#BPKTU" href="#BPKTU">
       <span class="ne-text">
        T823
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="LQGUv">
  <span class="ne-text">
   2.2 迭代器
  </span>
 </h2>
 <p class="ne-p" id="u291e3c76" style="text-indent: 2em">
  <span class="ne-text">
   如前所述，不同容器内部结构各不相同，但它们都是用于存储大量数据。因此也都需要对数据进行大量的遍历操作。为了满足排序、查找、求和等通用算法的需求，需要将遍历操作与具体的存储结构分离开，因此就产生了迭代器。迭代器隐藏了不同存储结构的内部差异，具备对容器进行遍历读写数据的能力。迭代器是
            C++ 程序中常用的一种设计模式，它最重要的作用是为访问容器提供了统一的接口。
   <br/>
  </span>
  <span class="ne-text">
   迭代器的底层实际就是一个指针，通过迭代器可以指向容器中的某个元素。
  </span>
  <code class="ne-code">
   <span class="ne-text">
    *迭代器名
   </span>
  </code>
  <span class="ne-text">
   就表示迭代器指向的元素。通过非常量迭代器还能修改其指向的元素。但很多迭代器对指针进行了封装，其功能与原生指针相比受一定限制，不同容器的迭代器功能强弱程度也有所不同。主要分为前向迭代器、双向迭代器和随机访问迭代器。
  </span>
 </p>
 <ul class="ne-ul">
  <li id="u18084171">
   <span class="ne-text">
    前向迭代器的功能被所有类型迭代器兼容，包括++操作，即一次前向移动一个位置；复制或赋值；还可以用 == 和 !=
                运算符进行比较。C++中采用begin()指向首元素，用end()指向尾后元素，即最后一个有效元素后面的元素。
   </span>
  </li>
  <li id="uc3e83706">
   <span class="ne-text">
    双向迭代器比正向迭代器多支持一个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     --
    </span>
   </code>
   <span class="ne-text">
    操作，即一次后向移动一个位置。
   </span>
  </li>
  <li id="u18a42b7c">
   <span class="ne-text">
    随机访问迭代器支持的功能最多，除了以上提到的功能，它还支持加上任意偏移量并得到新的迭代器；通过下标形式访问元素；用
                &lt;、&gt;、&lt;=、&gt;= 运算符进行比较；另外，两个迭代器的减法操作表示二者所指向元素的序号之差。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="udfcecb69" style="text-align: center">
  <span class="ne-text">
   表8.5 各容器支持的迭代器类型
  </span>
 </p>
 <table border=1 class="ne-table" id="KLd8C" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td style="background-color: rgb(237, 237, 237)" width="375">
     <p class="ne-p" id="ub3e70387">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       容器
      </span>
     </p>
    </td>
    <td style="background-color: rgb(237, 237, 237)" width="375">
     <p class="ne-p" id="u64ece421">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       对应的迭代器类型
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uefbecc30">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       array
      </span>
     </p>
    </td>
    <td rowspan="3" width="375">
     <p class="ne-p" id="u8264d89d">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
      </span>
     </p>
     <p class="ne-p" id="u7a3056bd">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       随机访问迭代器
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ube0f2e2f">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       vector
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uf835d85a">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       deque
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u449e7240">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       list
      </span>
     </p>
    </td>
    <td rowspan="3" width="375">
     <p class="ne-p" id="uaa2ed112">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
      </span>
     </p>
     <p class="ne-p" id="u779e29f9">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       双向迭代器
      </span>
     </p>
     <p class="ne-p" id="udab2670e">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="udfbbc933">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       set / multiset
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u9d5b659f">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       map / multimap
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u56a3cfc3">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       forward_list
      </span>
     </p>
    </td>
    <td rowspan="3" width="375">
     <p class="ne-p" id="u914484fb">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
      </span>
     </p>
     <p class="ne-p" id="u561764a1">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       前向迭代器
      </span>
     </p>
     <p class="ne-p" id="u5ca057ef">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u61dfb781">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       unordered_map / unordered_multimap
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="udd9fd883">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       unordered_set / unordered_multiset
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u1816b1d0">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       stack
      </span>
     </p>
    </td>
    <td rowspan="2" width="375">
     <p class="ne-p" id="u5c2938b4">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       不支持迭代器
      </span>
     </p>
     <p class="ne-p" id="u734449ab">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u5f15b61f">
      <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
       queue
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u46fc7f04">
   <span class="ne-text">
    array,
                vector和deque由于其存储的顺序性，可以将所有的指针存在在一个数组中，因此可以采用随机访问迭代器，其实就是具备了数组的通过偏移访问元素的能力，同时也就具备了指针间的减法操作和大小比较等功能；
   </span>
  </li>
  <li id="u4e81046b">
   <span class="ne-text">
    list, set和map等容器的元素存储不具有顺序性，因此只能通过迭代方式进行访问，所以是双向迭代器；
   </span>
  </li>
  <li id="u6848773e">
   <span class="ne-text">
    forward_list顾名思义，通过封装限制了反向遍历的能力，是为了保障特定算法的实现；哈希容器也支持了前向指针，单向迭代访问各个元素，无法通过偏移实现跳跃访问。
   </span>
  </li>
  <li id="u0d21d333">
   <span class="ne-text">
    stack的先进后出和queue的先进先出机制，只能访问栈顶或队列头部的元素，不允许出现遍历操作，因此不能支持迭代器，否则会破坏其固有的机制。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u594ce644" style="text-indent: 2em">
  <span class="ne-text">
   迭代器从本质上就是一个指针，但是根据不同容器的特点，采用类封装的方式，对功能进行了限制。随机访问迭代器支持底层结构为数组的容器，借助数组空间连续分配，可以随机访问的特性，因此功能最全面。而双向迭代器和前向迭代器所支持的容器，每个元素的存储空间是不连续的，在一个元素中，通过指针间接访问下一个元素，因此只能依次遍历。也是因为其空间不连续性，因此迭代器的值和元素的顺序没有关系，不具有大小关系，也就是说，不能采用小于尾结点的方式进行终止判断，只能采用不等于尾结点的方式。这些功能都是通过类封装（知识点：
  </span>
  <a class="ne-link" data-href="ch#dNdcQ" href="ch7#dNdcQ">
   <span class="ne-text">
    T751
   </span>
  </a>
  <span class="ne-text">
   ）和函数重载（知识点：
  </span>
  <a class="ne-link" data-href="ch#WLtg1" href="ch7#WLtg1">
   <span class="ne-text">
    T771
   </span>
  </a>
  <span class="ne-text">
   ）实现的。
  </span>
 </p>
 <p class="ne-p" id="u5c8b3dae" style="text-indent: 2em">
  <span class="ne-text">
   要特别注意，迭代器可能存在失效问题。失效的本质就是迭代器底层对应指针所指向的空间被销毁了，而使用一块被释放的空间会造成程序崩溃。任何底层空间改变的操作，都有可能导致迭代器失效，比如：resize,
            reserve, insert, erase, assign,
            push_back等。换句话说，这些操作都有可能导致容器空间的重新分配，因此原来的迭代器就会失效。解决的方式是在执行以上操作后，需要对迭代器进行重新赋值。
  </span>
 </p>
 <h3 id="BPKTU">
  <span class="ne-text">
   知识点：T822-T825
  </span>
 </h3>
 <table border=1 class="ne-table" id="R2bkO" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u9e33fae3">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u5b48a073" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u31619472">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u2701646e">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u396f0f1b">
      <span class="ne-text">
       T822
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u66e4e40d">
      <span class="ne-text">
       迭代器是容器访问的主要方式，其本质就是通过类封装进行功能限定的指针
      </span>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="ue160ad2d">
      <a class="ne-link" data-href="ch#VjX61" href="ch7#VjX61">
       <span class="ne-text">
        T791
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u8a532aa1">
      <a class="ne-link" data-href="#i9a97" href="#i9a97">
       <span class="ne-text">
        T831
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u83c253d8">
      <span class="ne-text">
       T823
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc4717747">
      <span class="ne-text">
       能够清晰掌握不同类型迭代器和不同类型容器直接的对应关系，并理解造成这些异同的原因
      </span>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="ud84d1b76">
      <a class="ne-link" data-href="ch#IS3uW" href="ch6#IS3uW">
       <span class="ne-text">
        T621
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#Y0XZc" href="#Y0XZc">
       <span class="ne-text">
        T821
       </span>
      </a>
     </p>
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u4359b417">
      <span class="ne-text">
       T824
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ufaecc25c">
      <span class="ne-text">
       双向迭代器和前向迭代器只能逐个遍历元素，终止判断只能采用
      </span>
      <code class="ne-code">
       <span class="ne-text">
        !=
       </span>
      </code>
      <span class="ne-text">
       运算
      </span>
     </p>
    </td>
    <td width="65">
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u0b9684fe">
      <span class="ne-text">
       T825
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u9fa46516">
      <span class="ne-text">
       resize, reserve, insert, erase, assign,
                            push_back等底层空间操作都会造成空间重新分配，进而导致迭代器的失效，因此要对迭代器进行重新赋值
      </span>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u437518a1">
      <a class="ne-link" data-href="ch#zTfai" href="ch5#zTfai">
       <span class="ne-text">
        T542
       </span>
      </a>
     </p>
    </td>
    <td width="67">
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="nCV7z">
  <span class="ne-text">
   3. 向量vector
  </span>
 </h1>
 <p class="ne-p" id="u86d3da24" style="text-indent: 2em">
  <span class="ne-text">
   STL中提供了模板数组array，用于优化原生数组的使用。与原生数组相比，模板数组更安全、更便利，这主要是因为array是一个类，通过重载操作符和一些访问控制函数，满足了更多的需求。例如在进行随机范围时，除了重载操作符[]通过下标访问之外，还提供了函数at进行下标访问，at在进行访问时会进行越界判断，使访问操作更加安全；此外，array还重载了赋值运算符和关系判断运算符，达成了原始数组无法达到的整体赋值和整体比较。
  </span>
 </p>
 <p class="ne-p" id="u8c13e110" style="text-indent: 2em">
  <img class="ne-image" style="display: block;margin: 10px auto;" id="u3a19ce7d" src="../assets/images/1676860900025-3f218d18-c64d-4f81-991e-bd2c6cb266e8.png" width="320"/>
 </p>
 <p class="ne-p" id="u5c6a85e5" style="text-align: center">
  <span class="ne-text">
   图8.1 模板数组array示例
  </span>
 </p>
 <p class="ne-p" id="u8d2c9050" style="text-indent: 2em">
  <span class="ne-text">
   数组的空间大小是固定的，很难按需申请，会造成空间的浪费。即使采用动态数组，当数据增长超过预留空间上限时，也需要重新全部申请空间。STL提供了向量vector类型，由头文件&lt;vector&gt;引入，其工作方式与数组类似，但是容量可以根据需要自动伸缩。与模板类array比较，vector更加灵活，但array的执行效率更高。在绝大部分情况下，vector和array的效率差可以被忽略，因此在需要使用array的场合，完全可以使用vector代替，array很少被使用。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="u974ef82a">
   <span class="ne-text">
    vector在进行扩展时，并不是在原空间之后续接新空间，而是找更大的内存空间，然后将原数据拷贝新空间，释放原空间。
   </span>
  </p>
 </div>
 <p class="ne-p" id="u0a1552f7" style="text-indent: 2em">
  <img class="ne-image" id="u085b3598" src="../assets/images/1676860934880-d997877f-83fb-4d5c-9afc-4fd160ade211.png" style="display: block;margin: 10px auto;" width="320"/>
 </p>
 <p class="ne-p" id="ude89ae9a" style="text-align: center">
  <span class="ne-text">
   图8.2 向量vector示例
  </span>
 </p>
 <h2 id="yhhga">
  <span class="ne-text">
   3.1 遍历
  </span>
 </h2>
 <p class="ne-p" id="ub6498a60" style="text-indent: 2em">
  <span class="ne-text">
   以下的遍历方式适用于所有使用随机访问迭代器的容器，例如：vector,
            string等。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="rj8l8"><span style="font-weight:bold;">代码8.4</span> vector的遍历方式<code>#include &lt;iostream&gt;
#include &lt;vector&gt; //需要引入 vector 头文件
using namespace std;
int main()
{
    vector&lt;int&gt; v1(4);							//创建长度为4的vector
    for (size_t i = 0; i &lt; v1.size(); i++)      //设定 values 容器为 {0,1,2,3}
        v1.at(i) = i;
    auto v2 = v1;
    v2[2] = 1;
    if (!v1.empty()) {      //如果容器不为空，则输出容器中所有的元素
        for (auto it = v1.begin(); it &lt; v1.end(); it++)
            cout &lt;&lt; *it &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
    for(auto e:v2)
        cout &lt;&lt; e &lt;&lt; " ";
    cout &lt;&lt; endl;
    for (auto it = v1.rbegin(); it &lt; v1.rend(); it++) //使用反向迭代器遍历容器
        cout &lt;&lt; *it &lt;&lt; " ";
    cout &lt;&lt; endl &lt;&lt; boolalpha;
    cout &lt;&lt; (v1 == v2) &lt;&lt; '\t' &lt;&lt; (v1 != v2)&lt;&lt; endl;
    cout &lt;&lt; (v1 &gt; v2) &lt;&lt; '\t' &lt;&lt; (v1 &lt; v2)&lt;&lt; endl;
}</code></pre>
 <table border=1 class="ne-table" id="gq20e" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u62d6f17a">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc128d1b6">
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
     <p class="ne-p" id="u27bf0ed7">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u519b979d">
      <span class="ne-text">
       0 1 2 3
      </span>
     </p>
     <p class="ne-p" id="u2eab4be0">
      <span class="ne-text">
       0 1 1 3
      </span>
     </p>
     <p class="ne-p" id="u9629f86f">
      <span class="ne-text">
       3 2 1 0
      </span>
     </p>
     <p class="ne-p" id="ufbf0eba9">
      <span class="ne-text">
       false true
      </span>
     </p>
     <p class="ne-p" id="uca18f638">
      <span class="ne-text">
       true false
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="udfe2f923">
   <span class="ne-text">
    第6行定义了一个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     vector
    </span>
   </code>
   <span class="ne-text">
    容器，长度为4，初始化为全0。默认初始化为0的操作是原生数组不具备的。
   </span>
  </li>
  <li id="u77f7879b">
   <span class="ne-text">
    第7行用传统的下标形式访问
   </span>
   <code class="ne-code">
    <span class="ne-text">
     vector
    </span>
   </code>
   <span class="ne-text">
    容器，注意这里下标数据类型为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     size_t
    </span>
   </code>
   <span class="ne-text">
    ，它在64位系统中为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     long unsigned int
    </span>
   </code>
   <span class="ne-text">
    （占用8字节的内存空间），在需要通过数组下标来访问数组时，通常建议将下标定义
   </span>
   <code class="ne-code">
    <span class="ne-text">
     size_t
    </span>
   </code>
   <span class="ne-text">
    类型。
   </span>
  </li>
  <li id="u62458d4f">
   <span class="ne-text">
    第8行使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     at
    </span>
   </code>
   <span class="ne-text">
    函数进行下标访问，与
   </span>
   <code class="ne-code">
    <span class="ne-text">
     v1[i]=i;
    </span>
   </code>
   <span class="ne-text">
    功能相同，但是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     at()
    </span>
   </code>
   <span class="ne-text">
    函数进行下标越界判定，更加安全。第10行采用了操作符
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    形式访问元素。
   </span>
  </li>
 </ul>
 <div class="ne-quote">
  <p class="ne-p" id="ub7a33a23">
   <span class="ne-text">
    虽然at()函数更加安全，但是毕竟有代价消耗。对于能确保访问不发生越界的情况，使用操作符
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    效率更高。
   </span>
  </p>
 </div>
 <ul class="ne-ul">
  <li id="uf7357c98">
   <span class="ne-text">
    第9行实现了数组的整体赋值，这是原生数组无法完成的。
   </span>
  </li>
  <li id="u1957a8fb">
   <span class="ne-text">
    第11行用判定容器是否为空，它与
   </span>
   <code class="ne-code">
    <span class="ne-text">
     v1.size()==0
    </span>
   </code>
   <span class="ne-text">
    功能相同，但
   </span>
   <code class="ne-code">
    <span class="ne-text">
     empty()
    </span>
   </code>
   <span class="ne-text">
    函数的效率更高，优先使用。
   </span>
  </li>
  <li id="u53f11a8a">
   <span class="ne-text">
    第12-13行用迭代器的方式遍历容器。由于每种容器的遍历方式都不相同，但是迭代器可以封装遍历过程，统一了遍历操作，进一步可以将容器和算法进行粘合。变量it就是一个迭代器，设定为auto类型，根据begin()函数的返回值自动设定为迭代器类型。begin()返回第一个元素的指针，end()返回最后一个元素的下一个指针，注意不是最后一个元素的指针，因此迭代器构建了一个左闭右开的区间，即包括begin()指向的元素，但是不包括end()指向的元素。因为迭代器返回的是指针，所以第13行用迭代器访问元素时用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     *
    </span>
   </code>
   <span class="ne-text">
    获取对应位置的值。vector采用随机访问迭代器，可以使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ++
    </span>
   </code>
   <span class="ne-text">
    或
   </span>
   <code class="ne-code">
    <span class="ne-text">
     --
    </span>
   </code>
   <span class="ne-text">
    操作进行前向或后向遍历。
   </span>
  </li>
  <li id="ude93f63b">
   <span class="ne-text">
    第16-17行展示了遍历容器的第三种方式。
   </span>
  </li>
  <li id="u6372c6b7">
   <span class="ne-text">
    第19-20行通过反向迭代器从尾部向头部依次遍历所有元素，注意反向迭代器中
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ++
    </span>
   </code>
   <span class="ne-text">
    表示向前移动。begin()和end()表示正向迭代，rbegin()和rend()表示反向迭代，cbegin(),cend()，crbegin()和crend()表示迭代的元素是const，不可修改。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="ue3c60208">
  <img class="ne-image img-70" id="cVOJg" src="../assets/images/1660379324357-53fff7a7-d418-409d-b996-c6d80365c924.gif"/>
 </p>
 <p class="ne-p" id="u60a3a522" style="text-align: center">
  <span class="ne-text">
   图8.3 正向迭代器和反向迭代器
  </span>
 </p>
 <ul class="ne-ul">
  <li id="u83685be1">
   <span class="ne-text">
    第21行的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     boolalpha
    </span>
   </code>
   <span class="ne-text">
    是为了让下面两行的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     bool
    </span>
   </code>
   <span class="ne-text">
    类型输出结果显示
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true/false
    </span>
   </code>
   <span class="ne-text">
    ，而不是1/0。
   </span>
  </li>
  <li id="u234982b2">
   <span class="ne-text">
    第22-23行验证了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     vector
    </span>
   </code>
   <span class="ne-text">
    容器可以进行整体比较。比较采用字典序，从第0个元素开始比较，如果对应元素相等，进行下一个位置元素的比较，如果不相等，两个对应元素的大小关系就直接作为两个容器的大小关系。
   </span>
  </li>
 </ul>
 <div class="ne-quote">
  <p class="ne-p" id="uefecb6bf">
   <span class="ne-text">
    STL的容器在很多操作上都是统一的，因此以上代码中的很多部分都可以使用到其他容器上。
   </span>
  </p>
  <p class="ne-p" id="u396caae7">
   <span class="ne-text">
    string类型原始的获取长度函数为length()，就是为了和STL的其他容器兼容，因此添加了完全相同功能的size()函数，确保string类型也能采用STL的算法完成。
   </span>
  </p>
  <p class="ne-p" id="u2626e18b">
   <span class="ne-text">
    在实际使用时，array很少被使用，常用vector代替，因为vector和array性能相近，而且更加灵活。
   </span>
  </p>
 </div>
 <h3 id="i9a97">
  <span class="ne-text">
   知识点：T831
  </span>
 </h3>
 <table border=1 class="ne-table" id="UFYdm" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u1f76ad26">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u4b93bb61" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u24030393">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u00adba13">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u1a8b9c84">
      <span class="ne-text">
       T831
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u8565cfd5">
      <span class="ne-text">
       掌握容器遍历的方式，empty是最高效的容器判定为空的方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u1bc8d401">
      <a class="ne-link" data-href="#BPKTU" href="#BPKTU">
       <span class="ne-text">
        T822
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u29662a11">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u8054633a">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" target="_blank">
       <span class="ne-text">
        （LX822）
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="L4SnJ">
  <span class="ne-text">
   3.2 vector的典型操作
  </span>
 </h2>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="YOftZ"><span style="font-weight:bold;">代码8.5</span> vector基本操作<code>#include&lt;iostream&gt;
#include&lt;vector&gt;
#include&lt;algorithm&gt;                  //for_each和copy
#include&lt;iterator&gt;                   //ostream_iterator
using namespace std;
int main()
{
    vector&lt;char&gt; v;                  //初始化一个空vector容量
    string s = "LTSA";
    for(auto e:string("LTSA")) v.emplace_back(e);     //或 v.assign(s.begin(), s.end());
    cout &lt;&lt; v.size() &lt;&lt; endl;       //容器中的元素个数
    v.pop_back();
    for (auto it = v.rbegin(); it &lt; v.rend(); it++) //使用反向迭代器遍历容器
        cout &lt;&lt; *it &lt;&lt; " ";
    cout &lt;&lt; endl;
    cout &lt;&lt; v.at(0) &lt;&lt;'\t'&lt;&lt;v.front()&lt;&lt;'\t'&lt;&lt;v.back()&lt;&lt; endl;
    v.emplace(v.begin()+1, 'C');    //在距离首元素偏移为1的位置插入新字符，也可以使用insert
    for_each(v.begin(), v.end(), [](auto &amp;elem) { cout &lt;&lt; elem &lt;&lt; ' '; });
    cout &lt;&lt; endl;
    v.erase(v.begin() + 2);          //删除距离首元素偏移为2的元素
    copy(v.begin(), v.end(), ostream_iterator&lt;char&gt;(cout, " "));
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="WOlbO" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u34542709">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ufbdab275">
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
     <p class="ne-p" id="uedb0837d">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u9ccf4971">
      <span class="ne-text">
       4
      </span>
     </p>
     <p class="ne-p" id="u3a26c57d">
      <span class="ne-text">
       S T L
      </span>
     </p>
     <p class="ne-p" id="u8f3f3c23">
      <span class="ne-text">
       L L S
      </span>
     </p>
     <p class="ne-p" id="u588bfc69">
      <span class="ne-text">
       L C T S
      </span>
     </p>
     <p class="ne-p" id="u128188f8">
      <span class="ne-text">
       L C S
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u5c0e2315">
   <span class="ne-text">
    第8行构建了一个向量vector容器，第10行依次将4个字符插入到容器的尾部，也可以采用assign的方式，直接将字符串转换为vector。第12行从尾部移除一个元素。
   </span>
  </li>
 </ul>
 <div class="ne-quote">
  <p class="ne-p" id="u2df35d69">
   <span class="ne-text">
    注意这里使用string类型，如果直接使用字符串“LTSA”，是C风格字符串，该字符串以字符'\0'结尾，将会是5个字符。string类型不存在字符'\0'。
   </span>
  </p>
 </div>
 <ul class="ne-ul">
  <li id="u1a197366">
   <span class="ne-text">
    第16行通过at(0)或front()函数访问首元素，用back()访问尾元素。
   </span>
  </li>
  <li id="ue27c6d54">
   <span class="ne-text">
    第17行在距离首元素偏移为1的位置插入新字符，第20行删除距离首元素偏移为2的元素。
   </span>
  </li>
  <li id="u2eb48b10">
   <span class="ne-text">
    第18行调用了算法for_each，它包含在头文件&lt;algorithm&gt;中，原型为for_each(iter1,iter2,op)，iter1和iter2指定了迭代器的开始和结束范围，op是一个函数，其作用是将迭代器中遍历的每个元素作为参数输入并进行处理。第18行中的op是一个匿名函数，将每个元素进行输出。当需要对一个容器某个区域的所有元素做相同的函数处理时，就可以使用for_each函数完成。
   </span>
  </li>
  <li id="uabfae266">
   <span class="ne-text">
    第20行调用erase函数删除指定位置上的字符，它还有一个函数原型
   </span>
   <code class="ne-code">
    <span class="ne-text">
     iterator erase (const_iterator first, const_iterator last)
    </span>
   </code>
   <span class="ne-text">
    ，用于删除指定范围内的所有字符。在头文件&lt;algorithm&gt;中，还有一个删除函数remove，用于删除指定范围内特定的字符。需要特别说明的是，erase在删除后容器的长度会发生改变，但remove只是逻辑删除，容器的长度不变。
   </span>
  </li>
  <li id="u01ef6567">
   <span class="ne-text">
    第21行使用了输出流迭代器ostream_iterator，它包含在头文件&lt;iterator&gt;中，第一个参数指定输出流，第二个参数指定分隔符，第21行指定的分隔符是空格。
   </span>
  </li>
  <li id="u86972236">
   <span class="ne-text">
    第21行调用了算法copy，它的前两个参数指出被复制的元素的区间范围，第三个参数指出复制到的目标区间起始位置。当需要将一个容器的某个区域的元素复制到另外一个容器的指定区域时，即可以调用copy函数完成。第21行将v从begin()到end()的所有元素复制到标准输出流cout构建的迭代器中，并且以空格分隔，这样就将全部元素显示出来。
   </span>
  </li>
  <li id="u9ec88147">
   <span class="ne-text">
    第17行的emplace可以替换为insert，第10行的emplace_back可以替换为push_back。emplace方法是C++11新提出来的用法。无论是insert还是push_back都是先创建对象，再将对象移动到指定位置，而emplace方法直接在指定位置创建对象，因此效率较高。
   </span>
  </li>
 </ul>
 <h3 id="eOdZZ">
  <span class="ne-text">
   随堂练习8.1
  </span>
 </h3>
 <p class="ne-p" id="u16e1a9de" style="text-align: left; text-indent: 2em">
  <span class="ne-text">
   输入一个超大的正整数n，n≤10
  </span>
  <sup>
   <span class="ne-text">
    30
   </span>
  </sup>
  <span class="ne-text">
   ，将n逐位保存到一个整型vector中。
  </span>
 </p>
 <h3 id="ucMFa">
  <span class="ne-text">
   知识点：T832
  </span>
 </h3>
 <table border=1 class="ne-table" id="SAeZj" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ue758a52b">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ud00aa365" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u8edff308">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf9e62442">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="uc2b3fcdc">
      <span class="ne-text">
       T832
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uceb41216">
      <span class="ne-text">
       掌握向量vector的典型操作，这是STL中最常用的容器
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue3d93adc">
      <a class="ne-link" data-href="#eRcMx" href="#eRcMx">
       <span class="ne-text">
        T541
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ueefab684">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="HhNID">
  <span class="ne-text">
   3.3 查找重复元素
  </span>
 </h2>
 <h3 id="MIQlr">
  <span class="ne-text">
   例题 8.1
  </span>
 </h3>
 <p class="ne-p" id="u18adb985" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   找出数组中重复的数字。在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1
            的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
  </span>
  <span class="ne-text">
   （剑指offer）
  </span>
 </p>
 <table border=1 class="ne-table" id="mqC2X" style="width: 100%">
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
       6
      </span>
     </p>
     <p class="ne-p" id="u1af45c75">
      <span class="ne-text">
       2 5 4 5 3 4
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua5a72bf4">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="ue542babf">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   【题目解析】可以
  </span>
  <span class="ne-text">
   sort排序后，遍历数组，前面的值和后面的值相等即为答案。排序的时间复杂度为O(nLog
  </span>
  <sub>
   <span class="ne-text">
    2
   </span>
  </sub>
  <span class="ne-text">
   n)。可以采用打表法，将时间复杂度降为O(n)。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="O5y2f"><span style="font-weight:bold;">代码8.6</span> 查找重复元素<code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;
class Solution {
public:
    int findRepeatNumber(vector&lt;int&gt;&amp; nums) {
        vector&lt;int&gt; ret(nums.size(),0);
        for(auto e:nums)
        {
            if(ret[e]!=0)  return e;
            ret[e]++;
        }
        return 0;
    }
};

int main ()
{
    Solution s;
    size_t n;
    cin &gt;&gt; n;
    vector&lt;int&gt; nums(n);
    for (size_t i = 0;i&lt;n;++i){
        cin &gt;&gt; nums[i];
    }
    cout &lt;&lt; s.findRepeatNumber(nums) &lt;&lt; endl;
}</code></pre>
 <ul class="ne-ul">
  <li id="ubdf2ecc8">
   <span class="ne-text">
    题目中保证输入的每个数字都小于n，因此第7行建立了一个vector，用来记录每个数出现的次数。初始化长度与nums相同，初始值全部为0。与原始数组相比，vector可以将初始值设定为任意值。由这个题目可以看出，vector的使用比原始数组更方便，掌握STL后，完全可以用vector代替原始数组。
   </span>
  </li>
  <li id="u2f251f97">
   <span class="ne-text">
    第22行初始化时，使用小括号定义长度为n，这是在调用vector的构造函数。注意这里不能使用中括号，使用时要区分与原始数组的机理不同。
   </span>
  </li>
 </ul>
 <h3 id="cOtOt">
  <span class="ne-text">
   知识点：T833
  </span>
 </h3>
 <table border=1 class="ne-table" id="J7YEh" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u33154f86">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="527">
     <p class="ne-p" id="u2db718e0" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="102">
     <p class="ne-p" id="ua13ef823">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uad8cc17e">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ua37d119c">
      <span class="ne-text">
       T833
      </span>
     </p>
    </td>
    <td width="527">
     <p class="ne-p" id="u3a61bb19">
      <span class="ne-text">
       掌握使用vector代替原生数组，理解vector比原生数组的易用性
      </span>
     </p>
    </td>
    <td width="102">
     <p class="ne-p" id="u52663764">
      <a class="ne-link" data-href="ch#bDkij" href="ch5#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u1f3a15c2">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u481ada2d">

      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" target="_blank">
       <span class="ne-text">
        (LX801)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161779" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161779" target="_blank">
       <span class="ne-text">
        (LX814)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="EZsP7">
  <span class="ne-text">
   4. 高级应用
  </span>
 </h1>
 <p class="ne-p" id="u31ed2a1f" style="text-indent: 2em">
  <span class="ne-text">
   向量vector和字符串string是最常见的两种容器，结合迭代器和算法，可以形成一些非常方便的应用。
  </span>
 </p>
 <h2 id="NTR6E">
  <span class="ne-text">
   4.1 降序排序
  </span>
 </h2>
 <p class="ne-p" id="ud4490176" style="text-indent: 2em">
  <span class="ne-text">
   sort函数默认是采用升序排序，第五章提到可以将升序排序的结果调用reverse函数，形成降序。结合迭代器或仿函数，可以直接进行降序排序。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Gwiaa"><span style="font-weight:bold;">代码8.7</span> 降序排序<code>#include&lt;iostream&gt;
#include&lt;vector&gt;
#include&lt;algorithm&gt;
using namespace std;

int main ()
{
   size_t n;
    cin&gt;&gt;n;
    vector&lt;int&gt; nums(n);
    for (size_t i = 0;i&lt;n;++i){
        cin&gt;&gt;nums[i];
    }
    sort(nums.rbegin(),nums.rend());//或sort(nums.begin(),nums.end(),greater&lt;int&gt;());
    for (size_t i = 0;i&lt;n;++i){
        cout&lt;&lt;nums[i]&lt;&lt;' ';
    }
}</code></pre>
 <table border=1 class="ne-table" id="co9iT" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u064ad3d4">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u3268b6f8">
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
     <p class="ne-p" id="u82b5756f">
      <span class="ne-text">
       4
      </span>
     </p>
     <p class="ne-p" id="u80d6868c">
      <span class="ne-text">
       3 5 1 7
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u10e4d70d">
      <span class="ne-text">
       7 5 3 1
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u850147da">
   <span class="ne-text">
    排序时采用反向迭代器，利用rbegin和rend两个函数，其中的大小比较与前向迭代正好相反，因此可以形成逆序效果。
   </span>
  </li>
  <li id="u62418745">
   <span class="ne-text">
    第14行注释的结果，是将仿函数greater作为比较器，大的元素在前，因此也可以达到降序的目的。
   </span>
  </li>
 </ul>
 <h3 id="j6bkK">
  <span class="ne-text">
   知识点：T841
  </span>
 </h3>
 <table border=1 class="ne-table" id="SKHj5" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u39c64533">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u3735b40c" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4dc602f5">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u2444ed3f">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u66666496">
      <span class="ne-text">
       T841
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u4b44cf70">
      <span class="ne-text">
       掌握逆序排序的方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uca2a7998">
      <a class="ne-link" data-href="#i9a97" href="#i9a97">
       <span class="ne-text">
        T831
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u0b40e6ec">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ua90bb163">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161787" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161787" target="_blank">
       <span class="ne-text">
        (LX823)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161782" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161782" target="_blank">
       <span class="ne-text">
        (LX818)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="j8VkO">
  <span class="ne-text">
   4.2 全部删除指定元素
  </span>
 </h2>
 <h3 id="LNdNn">
  <span class="ne-text">
   例题8.2
  </span>
 </h3>
 <p class="ne-p" id="u4e589748" style="text-align: left; text-indent: 2em">
  <span class="ne-text">
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   据说2011年11月11日是百年光棍节。这个日期写成字符串是“20111111”，有6个1连续出现，小明把这样的字符串（有6个1连续出现，但可以在1之间有空格间隔）叫做光棍串，即“2011
            11 11”也是光棍串。
  </span>
 </p>
 <p class="ne-p" id="u299d9e94">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="uee00027f" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输入数据的第一行为一个正整数T，表示测试数据的组数。然后是T组测试数据，每组测试输入1个字符串S（其中只包含空格与数字字符，长度不超过50个字符）。
  </span>
 </p>
 <p class="ne-p" id="u5c226690">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="u1309f09d" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   对于每组测试，若S是光棍串，则输出“Yes”，否则输出“No”。
  </span>
 </p>
 <table border=1 class="ne-table" id="zLx5J" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u139627f2">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u536d75de">
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
     <p class="ne-p" id="udaf31639">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       2
      </span>
     </p>
     <p class="ne-p" id="u3a3309ac">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       2011111
      </span>
     </p>
     <p class="ne-p" id="u75ad4352">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       2011 11 11
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ued08d11f">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       No
      </span>
     </p>
     <p class="ne-p" id="u73b4434e">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       Yes
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="uda35951e">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="uee65dfbd">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   简单分析题目，就是在字符串中查找是否存在6个1的子串，通过find就可以完成。题目的难度在于可能存在干扰的空格。将所有的空格去除掉，题目就变得简单了。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="wWC0E"><span style="font-weight:bold;">代码8.8</span> 删除所有空格<code>#include &lt;iostream&gt;
#include &lt;bits/stdc++.h&gt;

using namespace std;
int main()
{
    int n;
    cin &gt;&gt; n;
    cin.ignore();
    string s;
    while(n--){
        getline(cin,s);   
        auto it = remove(s.begin(),s.end(),' ');
        s.resize(it-s.begin());
        //s.erase(remove(s.begin(),s.end(),' '),s.end());
        size_t pos = s.find("111111");
        cout&lt;&lt;(pos==-1?"No":"Yes")&lt;&lt;endl;
    }
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="ued4b0f61">
   <span class="ne-text">
    函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     remove
    </span>
   </code>
   <span class="ne-text">
    的前两个参数指定删除范围，第三个参数为希望删除的字符。特别注意它的返回值，是一个迭代器，指向所有保留元素后的下一个位置。
   </span>
  </li>
  <li id="u122c05c3">
   <span class="ne-text">
    第13行调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     remove
    </span>
   </code>
   <span class="ne-text">
    后，返回第一个无效字符位置。用这个位置减去
   </span>
   <code class="ne-code">
    <span class="ne-text">
     begin
    </span>
   </code>
   <span class="ne-text">
    ，就得到了有效字符的长度。第14行
   </span>
   <code class="ne-code">
    <span class="ne-text">
     resize
    </span>
   </code>
   <span class="ne-text">
    只保留有效字符，达到了删除的目的。
   </span>
  </li>
  <li id="u02c472f3">
   <span class="ne-text">
    同样道理，第15行将无效部分删除，也达到了目的，函数嵌套的写法请仔细观察。其中
   </span>
   <code class="ne-code">
    <span class="ne-text">
     erase
    </span>
   </code>
   <span class="ne-text">
    的第一个参数不是函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     remove
    </span>
   </code>
   <span class="ne-text">
    ，而是函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     remove
    </span>
   </code>
   <span class="ne-text">
    的返回值。
   </span>
  </li>
  <li id="ub882d033">
   <span class="ne-text">
    如果不是删除无效元素，而是将无效元素全部置为空格，可以采用如下语句
   </span>
  </li>
 </ul>
 <ul class="ne-list-wrap">
  <ul class="ne-ul" ne-level="1">
   <li id="u661e32a5">
    <code class="ne-code">
     <span class="ne-text">
      fill(remove(s.begin(),s.end(),' '),s.end(),' ');
     </span>
    </code>
   </li>
  </ul>
 </ul>
 <h3 id="kYcFw">
  <span class="ne-text">
   知识点：T842
  </span>
 </h3>
 <table border=1 class="ne-table" id="j2rk9" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u2f36249e">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="udcf9683c" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u11800f6b">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uca1718d2">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="udfb7a90d">
      <span class="ne-text">
       T842
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u5a2d513b">
      <span class="ne-text">
       掌握全部删除指定元素的方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u54a743f2">
      <a class="ne-link" data-href="#eRcMx" href="#eRcMx">
       <span class="ne-text">
        T541
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u3a1ae55b">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u488783d5">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161768" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161768" target="_blank">
       <span class="ne-text">
        (LX804)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161774" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161774" target="_blank">
       <span class="ne-text">
        (LX6)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="Hf7IG">
  <span class="ne-text">
   4.3 for_each算法*
  </span>
 </h2>
 <h3 id="YRWmj">
  <span class="ne-text">
   例题8.3
  </span>
 </h3>
 <p class="ne-p" id="u0da74a38" style="text-align: left; text-indent: 2em">
  <span class="ne-text">
   要求编写程序，将英文字母替换加密。为了防止信息被别人轻易窃取，需要把电码明文通过加密方式变换成为密文。变换规则是：将明文中的所有英文字母替换为字母表中的后一个字母，同时将小写字母转换为大写字母，大写字母转换为小写字母。例如，字母a-&gt;B、b-&gt;C、…、z-&gt;A、A-&gt;b、B-&gt;c、…、Z-&gt;a。输入一行字符，将其中的英文字母按照以上规则转换后输出，其他字符按原样输出。
  </span>
 </p>
 <table border=1 class="ne-table" id="xaEal" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u2acfb77b">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u9dc788fe">
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
     <p class="ne-p" id="u573a0665">
      <span class="ne-text">
       Reold Z123?
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u3509b3c6">
      <span class="ne-text">
       sFPME a123?
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u6d4d9827">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="u1bb31e1f">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   采用简单循环可以达成目标。使用&lt;algorithm&gt;库中
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(64, 64, 64)">
    for_each
   </span>
  </code>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   算法，可以对容器中的每个元素做相同的处理。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="RYPog"><span style="font-weight:bold;">代码8.9</span> 英文字母加密<code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
using namespace std;

void encode(char&amp; ch)
{
    if(ch=='Z')
        ch='a';
    else if(ch=='z')
        ch='A';
    else if(islower(ch))
        ch=char(toupper(ch)+1);
    else if(isupper(ch))
        ch=char(tolower(ch)+1);
}
int main()
{
    string s;
    getline(cin,s);
    for_each(s.begin(),s.end(),encode);
    cout&lt;&lt;s;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u582fd26f">
   <span class="ne-text">
    第20行采用for_each函数，将容器指定范围内的所有元素都调用encode函数进行处理。为了得到处理后的结果，第5行的形参是采用引用形式。
   </span>
  </li>
  <li id="uf11b9881">
   <span class="ne-text">
    这种把函数做为另一个函数参数的形式，是一种高级调用形式。本质上传递是函数的指针。sort的第三个参数比较函数，也是采用相同的方法。这样函数不仅能把数据进行抽象，还能把行为进行抽象。这种形式在Python等语言中非常常见。
   </span>
  </li>
 </ul>
 <h3 id="zKGII">
  <span class="ne-text">
   知识点：T843
  </span>
 </h3>
 <table border=1 class="ne-table" id="CqS0A" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u0ea0aa47">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u4cd23e30" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ua9a0f337">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u38b29581">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="uff731383">
      <span class="ne-text">
       T843
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ufb7814a4">
      <span class="ne-text">
       掌握for_each算法，了解把一个函数作为另外一个函数参数的形式
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u6e66b9f6">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u67a3a9db">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="bUYYy">
  <span class="ne-text">
   5. 堆栈stack
  </span>
 </h1>
 <p class="ne-p" id="u1298da54" style="text-indent: 2em">
  <span class="ne-text">
   堆栈stack是先进后出的数据结构，在程序设计时使用比较广泛。它只能在尾部添加或删除，其他位置的元素不能进行增删操作。栈中只有顶端的元素才可以被外界使用，因此栈不允许有遍历行为。与queue类似，只有简单的push(),
            pop(), top(), empty(), size()对外接口。
  </span>
 </p>
 <p class="ne-p" id="ud7e9b8ae">
  <img class="ne-image" id="u87681a0a" src="../assets/images/1676860982277-3344c2ac-537d-42f3-8a6f-af0a98ae300a.png" style="display:block;margin: 10px auto;" width="320"/>
 </p>
 <p class="ne-p" id="u031b876a" style="text-align: center">
  <span class="ne-text">
   图8.4堆栈示例
  </span>
 </p>
 <h3 id="AouR5">
  <span class="ne-text">
   例题8.4
  </span>
 </h3>
 <p class="ne-p" id="u412610b9">
  <span class="ne-text">
   给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s
            ，判断字符串是否有效。有效字符串需满足：1）左括号必须用相同类型的右括号闭合。2）左括号必须以正确的顺序闭合。（
  </span>
  <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161787" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161787" target="_blank">
   <span class="ne-text">
    力扣20题
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <table border=1 class="ne-table" id="FKUat" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uc73c7da1">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc00c42f7">
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
     <p class="ne-p" id="ue2d265d9">
      <span class="ne-text">
       ()[]{}
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u7f36c871">
      <span class="ne-text">
       true
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u328bcb94">
      <span class="ne-text">
       ([)]
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ud3e93eac">
      <span class="ne-text">
       false
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="yL9xc"><span style="font-weight:bold;">代码8.10</span> 判断括号是否匹配<code>#include &lt;iostream&gt;
#include &lt;stack&gt;
using namespace std;
class Solution {
public:
    bool isValid(string s) {
        stack&lt;char&gt; st;
        for(auto e:s){
            if(e=='('||e=='['||e=='{')
                st.push(e);
            else if(!st.empty()&amp;&amp;abs(e-st.top())&lt;=2)	//有效括号对的ASCII码值不超过2
                st.pop();
            else
                return false;
        }
        return st.empty();      						//左括号有残留
   } 
};
int main ()
{
    Solution s;
    string str;
    cin &gt;&gt; str;
    cout &lt;&lt;boolalpha&lt;&lt; s.isValid(str) &lt;&lt; endl;
}</code></pre>
 <ul class="ne-ul">
  <li id="ub2d7521c">
   <span class="ne-text">
    遍历字符串，当遇到左括号时，将其压入堆栈。当遇到有括号时，堆栈的顶部应该正好与其匹配，如果不匹配或者堆栈为空，则括号序列错误。
   </span>
  </li>
  <li id="uec71fa19">
   <span class="ne-text">
    当字符串遍历结束时，堆栈应该为空，否则意味着有残留的左括号未找到匹配的右括号。
   </span>
  </li>
 </ul>
 <h3 id="BlTTv">
  <span class="ne-text">
   知识点：T851
  </span>
 </h3>
 <table border=1 class="ne-table" id="wFDUi" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u722579f9">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="515">
     <p class="ne-p" id="u1d7d2709" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u982997cf">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue3f43a27">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u8e6024b3">
      <span class="ne-text">
       T851
      </span>
     </p>
    </td>
    <td width="515">
     <p class="ne-p" id="u02cdb11f">
      <span class="ne-text">
       掌握堆栈stack的用法，学会堆栈增删元素的特点，主要解决匹配问题
      </span>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u58834ca6">
      <a class="ne-link" data-href="ch#wG8i3" href="ch2#wG8i3">
       <span class="ne-text">
        T241
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="ch#QAfJZ" href="ch3#QAfJZ">
       <span class="ne-text">
        T341
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u47ff1fdb">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="YXtaV">
  <span class="ne-text">
   6. 其他典型序列容器*
  </span>
 </h1>
 <h2 id="ZmQjd">
  <span class="ne-text">
   6.1 双向队列deque
  </span>
 </h2>
 <p class="ne-p" id="u76f31686" style="text-indent: 2em">
  <span class="ne-text">
   双向队列deque的绝大部分操作都与vector相同，但是可以在两端进行增删操作。vector对于头部的插入删除效率低，数据量越大，效率越低。deque相对而言，对头部的插入删除速度比vector快。vector访问元素时的速度会比deque快,这和两者内部实现有关。
  </span>
 </p>
 <p class="ne-p" id="u7ca2e824">
  <img class="ne-image img-50" id="Gg63D" src="../assets/images/1660388751603-9f34660c-c0cf-47ad-b0c6-b99415e2fc42.jpeg"/>
 </p>
 <p class="ne-p" id="uf76789a2" style="text-align: center">
  <span class="ne-text">
   图8.5 双向队列示例
  </span>
 </p>
 <p class="ne-p" id="u7931f9ab" style="text-indent: 2em">
  <span class="ne-text">
   deque内部有个中控器，维护每段缓冲区中的内容，缓冲区中存放真实数据。中控器维护的是每个缓冲区的地址，使得使用deque时像一片连续的内存空间。deque支持随机访问。
  </span>
 </p>
 <p class="ne-p" id="u570b258d">
  <img class="ne-image img-50" id="u93de3889" src="../assets/images/1660456972321-5a8dc67d-6587-4428-a5d3-a182eff2d7f2.jpeg"/>
 </p>
 <p class="ne-p" id="ubce2ad6e" style="text-align: center">
  <span class="ne-text">
   图8.6 deque中控器和缓冲器
  </span>
 </p>
 <h3 id="pW8UQ">
  <span class="ne-text">
   例题8.5
  </span>
 </h3>
 <p class="ne-p" id="ua53e8baf" style="text-indent: 2em">
  <span class="ne-text">
   给定一个整数数组
            nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。返回滑动窗口中的最大值 。（
  </span>
  <a class="ne-link" data-href="https://leetcode.cn/problems/sliding-window-maximum/" href="https://leetcode.cn/problems/sliding-window-maximum/" target="_blank">
   <span class="ne-text">
    力扣239题
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <table border=1 class="ne-table" id="Sv0pP" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ub0942b10">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uf681d8c5">
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
     <p class="ne-p" id="ue022313b">
      <span class="ne-text">
       nums = [1,3,-1,-3,5,3,6,7], k = 3
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u9917f270">
      <span class="ne-text">
       [3,3,5,5,6,7]
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="2" width="750">
     <p class="ne-p" id="uff3d8c95">
      <strong>
       <span class="ne-text">
        样例解释
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="2" width="750">
     <p class="ne-p" id="uffb959f5">
      <span class="ne-text">
       滑动窗口的位置 最大值
      </span>
     </p>
     <p class="ne-p" id="uad53568f">
      <span class="ne-text">
       [1 3 -1] -3 5 3 6 7 3
      </span>
     </p>
     <p class="ne-p" id="ua459e823">
      <span class="ne-text">
       1 [3 -1 -3] 5 3 6 7 3
      </span>
     </p>
     <p class="ne-p" id="u440e6aa1">
      <span class="ne-text">
       1 3 [-1 -3 5] 3 6 7 5
      </span>
     </p>
     <p class="ne-p" id="u22090e76">
      <span class="ne-text">
       1 3 -1 [-3 5 3] 6 7 5
      </span>
     </p>
     <p class="ne-p" id="u7b53d836">
      <span class="ne-text">
       1 3 -1 -3 [5 3 6] 7 6
      </span>
     </p>
     <p class="ne-p" id="uc39dd709">
      <span class="ne-text">
       1 3 -1 -3 5 [3 6 7] 7
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="ua4d05753">
  <span class="ne-text">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="u2d0aef08">
  <span class="ne-text">
   1）建立一个滑动窗口，将窗口内最大值的下标保存在窗口最前端，并忽略数组中滑动窗口范围内左侧的所有值，因为这些值在窗口继续滑动中不可能成为最大值。每次用O(1)的时间获取这个最大值。
  </span>
 </p>
 <p class="ne-p" id="u22d55bcd">
  <span class="ne-text">
   2）窗口中要保留下标，而不是具体的值，因为值会
  </span>
  <em>
   <span class="ne-text">
    失效
   </span>
  </em>
  <span class="ne-text">
   。用i表示当前元素下标，用sub表示窗口首部的下标，当i-sub&gt;=k时，sub就不再当前窗口之中了，移出队列。 这一步保证了窗口内的所有值都处于同一窗口。
  </span>
 </p>
 <p class="ne-p" id="ua2d88d61">
  <span class="ne-text">
   3）当有新元素来的时候，如果新元素大于窗尾的值，则利用循环，将所有小于这个数的值pop出去，因为所有值都处于同一窗口，小于当前元素的值已经失效，这一步保证了窗口的值最大。
  </span>
 </p>
 <p class="ne-p" id="u85dd774f">
  <span class="ne-text">
   4）当滑动窗口装满时，才能计算最大值。 当 i+1&gt;=k时表示正好装满，在此之后才能开始计算。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="bkm5a"><span style="font-weight:bold;">代码8.11</span> 滑动窗口的最大值<code>class Solution {
public:
    vector&lt;int&gt; maxSlidingWindow(vector&lt;int&gt;&amp; nums, size_t k) {
        vector&lt;int&gt; ret;
        deque&lt;int&gt; qe;
        if(nums.empty())     return ret;
        for(size_t i=0;i&lt;nums.size();i++) {
            //新来的元素&gt;队列之中的元素，说明最大值发生了变化
            while(!qe.empty()&amp;&amp;nums[i]&gt;=nums[qe.back()])
                qe.pop_back();
            //窗口之中保存的是下标
            //i-qe.front()&gt;=k，说明这个元素不在窗口之中了
            while(!qe.empty()&amp;&amp;i-qe.front()&gt;=k)
                qe.pop_front();
            qe.push_back(i);//将下标存入数组中，因为要比较元素是否"过期"
            if(i+1&gt;=k)//经过的元素可以满足一个窗口了
                ret.push_back(nums[qe.front()]);
        }
        return ret;
    }
};</code></pre>
 <h3 id="pyqMT">
  <span class="ne-text">
   知识点：T861
  </span>
 </h3>
 <table border=1 class="ne-table" id="bF9cQ" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u9211d3a7">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u9a2df881" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u53f1b3d3">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u1b4216af">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ufab59e09">
      <span class="ne-text">
       T861
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua8704f4d">
      <span class="ne-text">
       掌握双向队列deque的用法，主要解决在算法中需要设定滑动窗口的问题
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ua3724efe">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u94122fca">
      <a class="ne-link" data-href="#z5syf" href="#z5syf">
       <span class="ne-text">
        T862
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="rzfqq">
  <span class="ne-text">
   6.2 单向队列queue
  </span>
 </h2>
 <p class="ne-p" id="u87b4029b" style="text-indent: 2em">
  <span class="ne-text">
   单向队列queue是在双向队列deque基础上完成的，如果只需要一端增加，另一端删除时，建议采用queue。队列中只有队头和队尾才可以被外界使用，因此队列不允许有遍历行为。只有简单的push(),
            pop(), back(), front(), empty(), size()对外接口。如果没有特殊要求，也可以使用deque代替queue。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="uf87d79eb">
   <span class="ne-text">
    注意queue的在尾部添加函数为push()，在头部删除函为pop()，因为它只有一个push和一个pop操作，这与deque需要区分头部和尾部不同。
   </span>
  </p>
 </div>
 <p class="ne-p" id="ua2e73846">
  <img class="ne-image img-50" id="cDom5" src="../assets/images/1660388854927-9c3e4482-5f3c-46c6-b3ff-a1bd5515c5eb.jpeg"/>
 </p>
 <p class="ne-p" id="u8a9fd237" style="text-align: center">
  <span class="ne-text">
   图8.7 单向队列示例
  </span>
 </p>
 <h3 id="aE9F5">
  <span class="ne-text">
   例题8.6
  </span>
 </h3>
 <p class="ne-p" id="u20f80c90">
  <span class="ne-text">
   给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。（
  </span>
  <a class="ne-link" data-href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/" href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/" target="_blank">
   <span class="ne-text">
    力扣3题
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <table border=1 class="ne-table" id="SMJSc" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u6bbe8379">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u2bfa6ead">
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
     <p class="ne-p" id="u04b582c8">
      <span class="ne-text">
       akgekwelkrjlkjfkasdfashdfkladfald
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u84b0eda8">
      <span class="ne-text">
       7
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="ub71c15fd">
  <span class="ne-text">
   【题目解析】给定一个滑动窗口和标记数组，利用标记数组确定字符是否在窗口中出现过。如果字符没有出现过则添加到滑动窗口之中；如果出现了，则将已出现的字符左侧的所有字符移出滑动窗口。重复这个过程，记录能找到的滑动窗口的最大长度。从样例输入中可以看到，ashdfkl是最长不包含重复字符的子字符串。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="HGNXE"><span style="font-weight:bold;">代码8.12</span> 不含有重复字符的最长子串的长度<code>class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        queue&lt;char&gt;de;//滑动窗口
        vector&lt;bool&gt; arr(200,false);      //统计数组
        size_t maxsize=0;                       //记录最长的长度
        for(size_t i=0;i&lt;s.size();i++){
            if(arr[s[i]]){                      //表示不是第一次出现    
                maxsize=max(maxsize,de.size()); //先将最长的长度保存下来
                while(arr[s[i]]){               //不为false说明还有重复字符
                    arr[de.front()]=false;      //标记数组对应的字符为清除状态
                    de.pop();     				//删掉
                }
            }
            //此时说明删掉了开始部分重复的字符串，或新出现的字符没有出现过，直接进入滑动窗口
            de.push(s[i]);
            arr[s[i]]=true;                  	//标记数组，表示出现过
        }
        maxsize=max(maxsize,de.size());
        return maxsize;
    }
};</code></pre>
 <ul class="ne-ul">
  <li id="u5ac9f736">
   <span class="ne-text">
    第10-13行的循环，将滑动窗口中已存在的重复字符的左侧的所有字符移出滑动窗口。从滑动窗口构建的队列的队首开始移除，移除后第10行的循环重新开始判断，是否存在重复，如果存在重复则继续移除，直到全部移除，开始添加新的字符。
   </span>
  </li>
 </ul>
 <h3 id="z5syf">
  <span class="ne-text">
   知识点：T862
  </span>
 </h3>
 <table border=1 class="ne-table" id="MWt2X" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ufbbbcbc8">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua9768a5e" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u81a58afc">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u77869162">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uf772a23c">
      <span class="ne-text">
       T862
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uab7afb96">
      <span class="ne-text">
       掌握单向队列deque的用法，主要解决在算法中需要设定滑动窗口的问题
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue3cf9958">
      <a class="ne-link" data-href="#pyqMT" href="#pyqMT">
       <span class="ne-text">
        T861
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u506509d6">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u63aba985">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161783" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161783" target="_blank">
       <span class="ne-text">
        (LX819)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161788" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161788" target="_blank">
       <span class="ne-text">
        (LX824)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="agupy">
  <span class="ne-text">
   6.3 链表list
  </span>
 </h2>
 <p class="ne-p" id="u66ea456c" style="text-indent: 2em">
  <span class="ne-text">
   链表list是一种物理存储单元上非连续的存储结构，数据元素的逻辑顺序是通过链表中的指针链接实现。由一系列结点组成。每个节点包含两个域：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。STL中的链表是一个双向循环链表，正向链表容器forward_list是单向链表，只能从前向后访问。
  </span>
 </p>
 <p class="ne-p" id="u2a82027b">
  <img class="ne-image img-50" id="udfd1e15a" src="../assets/images/1660388907957-654add39-4d5b-42fc-9234-bb417537b693.jpeg"/>
 </p>
 <p class="ne-p" id="ube1165bf" style="text-align: center">
  <span class="ne-text">
   图8.8 链表示例
  </span>
 </p>
 <p class="ne-p" id="u4520fa57" style="text-indent: 2em">
  <span class="ne-text">
   由于链表的存储方式并不是连续的内存空间，因此链表list中的迭代器只支持前移和后移，属于双向迭代器。优点：1）采用动态存储分配，不会造成内存浪费和溢出；2）链表执行插入和删除操作十分方便，修改指针即可，不需要移动大量元素。缺点：1）链表灵活，但是空间(指针域)
            和 时间（遍历）额外耗费较大；2）List有一个重要的性质，插入操作和删除操作都不会造成原有list迭代器的失效，这在vector是不成立的。
  </span>
 </p>
 <h3 id="MwRYt">
  <span class="ne-text">
   例题8.7
  </span>
 </h3>
 <p class="ne-p" id="u70a786ce" style="text-indent: 2em">
  <em>
   <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
    n
   </span>
  </em>
  <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   个人围成一圈，从第一个人开始报数,数到 m 的人出列，再由下一个人重新从1开始报数，数到
            m
  </span>
  <em>
   <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   </span>
  </em>
  <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   的人再出圈，依次类推，直到所有的人都出圈，请输出依次出圈人的编号。（洛谷
  </span>
  <a class="ne-link" data-href="https://www.luogu.com.cn/problem/P1996" href="https://www.luogu.com.cn/problem/P1996" target="_blank">
   <span class="ne-text" style="font-size: 16px">
    P1996
   </span>
  </a>
  <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   ）
  </span>
 </p>
 <p class="ne-p" id="u8293c9e9">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="uff57374a">
  <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   输入两个整数
            n,m。
  </span>
 </p>
 <p class="ne-p" id="u41674062">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="uade24e05">
  <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   输出一行
            n
  </span>
  <em>
   <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   </span>
  </em>
  <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
   个整数，按顺序输出每个出圈人的编号。
  </span>
 </p>
 <table border=1 class="ne-table" id="wzBsD" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ucfe8da39">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u44e6169e">
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
     <p class="ne-p" id="u01b5d555">
      <span class="ne-text">
       10 3
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1b63a23c">
      <span class="ne-text">
       3 6 9 2 7 1 8 5 10 4
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u8ce5d390">
  <span class="ne-text">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="ua6d97770">
  <span class="ne-text">
   最重要的是形成一个环，然后能在任意位置形成高效的删除操作。list正好符合这样的要求。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="AJH9V"><span style="font-weight:bold;">代码8.13</span> 约瑟夫环问题<code>#include&lt;iostream&gt;
#include&lt;list&gt;
using namespace std;
int main(){
    int m,n;
    cin&gt;&gt;m&gt;&gt;n;
    list&lt;int&gt; ls;
    for(int i=0;i&lt;m;i++)
        ls.push_back(i+1);			//构建初始的list
    auto it=ls.begin();
    int i=0;
    while(!ls.empty()){
        i = (i+1)%n;
        auto next=++it;				//备份下一个节点的迭代器
        if(!i) {
            cout&lt;&lt;*(--it)&lt;&lt;' ';		//返回要删除的节点并输出
            ls.erase(it);			//删除节点，迭代器it失效
        }
        it = next;					//返回到下一个节点
        if(it==ls.end())			//形成循环访问
            it=ls.begin();
    }
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u4920e578">
   <span class="ne-text">
    第13行以n为循环进行叠加，第15行判断找到符合要求的数据，则进行删除。
   </span>
  </li>
  <li id="u9fc9cf8a">
   <span class="ne-text">
    特别注意在第14行对it进行了备份，因为一旦在第17行执行了删除操作，将会造成迭代器
   </span>
   <code class="ne-code">
    <span class="ne-text">
     it
    </span>
   </code>
   <span class="ne-text">
    的失效，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     it
    </span>
   </code>
   <span class="ne-text">
    不再具有遍历能力。
   </span>
  </li>
  <li id="u8a245559">
   <span class="ne-text">
    第14行不能写成
   </span>
   <code class="ne-code">
    <span class="ne-text">
     next=it+1
    </span>
   </code>
   <span class="ne-text">
    ，因为list不支持随机访问迭代器，即不支持偏移功能，只支持++操作。因此在第14行进行++，找到下一个节点，然后在第16行执行--操作，回到要删除的节点。
   </span>
  </li>
  <li id="u89fc2125">
   <span class="ne-text">
    第14行与第19行配合，相当与执行了++操作，然后在第20-21行，判定如果执行到了尾部，重新回到头部，形成循环访问。
   </span>
  </li>
  <li id="u77a52821">
   <span class="ne-text">
    这是一个典型的list访问案例，展示了list的遍历和删除节点操作，同时要特别注意迭代器失效问题。
   </span>
  </li>
 </ul>
 <h3 id="GquqL">
  <span class="ne-text">
   例题8.8
  </span>
 </h3>
 <p class="ne-p" id="u0d9a3ccc">
  <span class="ne-text">
   写一个程序完成以下命令：
  </span>
 </p>
 <p class="ne-p" id="uc930f91b">
  <span class="ne-text">
   new id ——新建一个指定编号为id的序列(id&lt;10000)
  </span>
 </p>
 <p class="ne-p" id="u00a6e292">
  <span class="ne-text">
   add id num——向编号为id的序列加入整数num
  </span>
 </p>
 <p class="ne-p" id="u124f645c">
  <span class="ne-text">
   merge id1 id2——合并序列id1和id2中的数，并将id2清空
  </span>
 </p>
 <p class="ne-p" id="u33058aa0">
  <span class="ne-text">
   unique id——去掉序列id中重复的元素
  </span>
 </p>
 <p class="ne-p" id="u1b073dcf">
  <span class="ne-text">
   out id ——从小到大输出编号为id的序列中的元素，以空格隔开。
  </span>
 </p>
 <p class="ne-p" id="uc43a92e7">
  <span class="ne-text">
   【输入描述】
  </span>
 </p>
 <p class="ne-p" id="u8728236c">
  <span class="ne-text">
   第一行一个数n，表示有多少个命令( n≤200000)。以后n行每行一个命令。
  </span>
 </p>
 <p class="ne-p" id="uac4971f8">
  <span class="ne-text">
   【输出描述】
  </span>
 </p>
 <p class="ne-p" id="u026dd17f">
  <span class="ne-text">
   按题目要求输出。
  </span>
 </p>
 <p class="ne-p" id="u0362e60d">
  <span class="ne-text">
   （
  </span>
  <a class="ne-link" data-href="https://blog.csdn.net/qq_44116998/article/details/104419169" href="https://blog.csdn.net/qq_44116998/article/details/104419169" target="_blank">
   <span class="ne-text" style="font-size: 16px">
    北大程序设计与算法（三）测验题汇总(2020春季)
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <table border=1 class="ne-table" id="H8OhL" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u2398f599">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua63243de">
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
     <p class="ne-p" id="uca0dfeb3">
      <span class="ne-text">
       16
      </span>
     </p>
     <p class="ne-p" id="uc69a31cd">
      <span class="ne-text">
       new 1
      </span>
     </p>
     <p class="ne-p" id="u677de113">
      <span class="ne-text">
       new 2
      </span>
     </p>
     <p class="ne-p" id="u4810d9d1">
      <span class="ne-text">
       add 1 4
      </span>
     </p>
     <p class="ne-p" id="ud5321a38">
      <span class="ne-text">
       add 1 2
      </span>
     </p>
     <p class="ne-p" id="u1a28dac9">
      <span class="ne-text">
       add 1 3
      </span>
     </p>
     <p class="ne-p" id="u69038a11">
      <span class="ne-text">
       add 2 3
      </span>
     </p>
     <p class="ne-p" id="ub6e42d8d">
      <span class="ne-text">
       add 2 2
      </span>
     </p>
     <p class="ne-p" id="u9dbe4119">
      <span class="ne-text">
       add 2 5
      </span>
     </p>
     <p class="ne-p" id="u127bc8ac">
      <span class="ne-text">
       add 2 4
      </span>
     </p>
     <p class="ne-p" id="u94631091">
      <span class="ne-text">
       out 1
      </span>
     </p>
     <p class="ne-p" id="uccc3ed52">
      <span class="ne-text">
       out 2
      </span>
     </p>
     <p class="ne-p" id="uc7d3f210">
      <span class="ne-text">
       merge 1 2
      </span>
     </p>
     <p class="ne-p" id="u8fe33106">
      <span class="ne-text">
       out 1
      </span>
     </p>
     <p class="ne-p" id="u53eb51f8">
      <span class="ne-text">
       out 2
      </span>
     </p>
     <p class="ne-p" id="ue8e64e8b">
      <span class="ne-text">
       unique 1
      </span>
     </p>
     <p class="ne-p" id="u2e1508ea">
      <span class="ne-text">
       out 1
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u876ed06e">
      <span class="ne-text">
       2 3 4
      </span>
     </p>
     <p class="ne-p" id="u36456cf4">
      <span class="ne-text">
       2 3 4 5
      </span>
     </p>
     <p class="ne-p" id="ua6a19c1a">
      <span class="ne-text">
       2 2 3 3 4 4 5
      </span>
     </p>
     <p class="ne-p" id="ue35efe1d">
      <span class="ne-text">
      </span>
     </p>
     <p class="ne-p" id="u79cc5e12">
      <span class="ne-text">
       2 3 4 5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="DCoCq"><span style="font-weight:bold;">代码8.14</span> 链表执行命令<code>#include&lt;iostream&gt;
#include&lt;list&gt;
#include&lt;algorithm&gt;     //find_if
#include&lt;iterator&gt;      //ostream_iterator
using namespace std;

int main()
{
	list&lt;int&gt; ls[10005];
	int n,id1,id2, num;
	cin &gt;&gt; n;
	char str[100];
	while(n--){
		cin &gt;&gt; str;
        if(str[0]=='a'){
            cin &gt;&gt; id1 &gt;&gt; num;
            auto it=find_if(ls[id1].begin(),ls[id1].end(),[&amp;num](int v) {return v&gt;num;});
            ls[id1].insert(it,num);
        }else if(str[0]=='n'){
            cin &gt;&gt; id1; 
        }else if(str[0]=='m'){
			cin &gt;&gt; id1 &gt;&gt; id2;
			ls[id1].merge(ls[id2]);         //合并的两个序列必须有序
        }else if(str[0]=='u'){
			cin &gt;&gt;id1;
			ls[id1].unique ();               //唯一化处理前，list必须有序
        }else if(str[0]=='o'){
			cin &gt;&gt; id1;
            copy(ls[id1].begin(), ls[id1].end(), ostream_iterator&lt;int&gt;(cout," "));
			cout &lt;&lt; endl;
        }
    }
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u3f7300a7">
   <span class="ne-text">
    第17-18行先找到插入位置，然后进行插入，实际上实现了插入法排序。find_if是STL的&lt;algorithm&gt;头文件中提供的一个算法，它在指定容器的范围内（前两个参数决定），查找满足第三个参数规定条件的元素迭代器位置。第18行在该位置插入元素。匿名函数从指定范围内第一个大于输入值的元素，保证了指定序列的递增性。
   </span>
  </li>
  <li id="u0ae7da38">
   <span class="ne-text">
    注意第17行的匿名函数中，使用了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     [&amp;num]
    </span>
   </code>
   <span class="ne-text">
    ，表示引用局部变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     num
    </span>
   </code>
   <span class="ne-text">
    。也可也使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     [&amp;]
    </span>
   </code>
   <span class="ne-text">
    表示引用当前范围内的任何变量，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     [num]
    </span>
   </code>
   <span class="ne-text">
    通过传值方式使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     num
    </span>
   </code>
   <span class="ne-text">
    ，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     [=]
    </span>
   </code>
   <span class="ne-text">
    通过传值方式使用当前范围内的任意变量。
   </span>
  </li>
  <li id="uf1fc5b1e">
   <span class="ne-text">
    list的合并函数merge()和去重函数unique()都要求list是有序的，因为在添加新元素时保证了有序性，因此在这两步操作之前都不需要排序。
   </span>
  </li>
  <li id="u27fd2375">
   <span class="ne-text">
    在进行命令判断时，因为每个命令的第一个字符正好不同，字符判断的效率要高于字符串，因此只取了首字符进行判断。
   </span>
  </li>
  <li id="u6bb93e92">
   <span class="ne-text">
    第9行创建了list的数组，数组中的每个元素都是一个list。
   </span>
  </li>
  <li id="ub64647b9">
   <span class="ne-text">
    insert(),merge()和unique()都需要对中间元素进行插入和删除操作，list用其特有的数据结构保证了算法的有效性。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u9b702e16" style="text-indent: 2em">
  <span class="ne-text">
   在STL中，算法大量的使用了仿函数，仿函数（Functor）又称为函数对象（Function
            Object）是一个能行使函数功能的类。仿函数本质上就是通过重载运算符()，将一个类对象按照函数形式进行访问，其使用方法与普通函数相同。以下定义了一个仿函数comp：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="k2Wy1"><span style="font-weight:bold;">代码8.15</span> 仿函数示例<code>class comp
{
public:
    comp(int t):num(t){}//显式构造函数
    //const放前面表示这个函数的返回值是不可修改的，放后面表示这个函数不修改当前对象的成员。
    bool operator()(int v) const{
        return v&gt;num;
    }
private:
    const int num;
};</code></pre>
 <ul class="ne-ul">
  <li id="u0869d4e0">
   <span class="ne-text">
    第4行的num(t)表示用形参t对成员属性num进行初始化。
   </span>
  </li>
  <li id="uf1368274">
   <span class="ne-text">
    第6-8行重载了操作符()，使comp的对象能够像函数一样被调用。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u3e9c9b10" style="text-indent: 2em">
  <span class="ne-text">
   有了这个仿函数之后，代码8.TODO的第17行就可以修改为：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="uN9cQ">auto it=find_if(ls[id1].begin(),ls[id1].end(),comp(num));</pre>
 <ul class="ne-ul">
  <li id="uc5c3200d">
   <code class="ne-code">
    <span class="ne-text">
     find_if()
    </span>
   </code>
   <span class="ne-text">
    的第三个参数应该是一个函数，对前两个参数指定范围内的每个元素进行判定。这里传入了一个仿函数对象，并将成员属性进行初始化。
   </span>
   <code class="ne-code">
    <span class="ne-text">
     find_if()
    </span>
   </code>
   <span class="ne-text">
    函数对其进行使用时，实际上是调用了仿函数重载的操作符
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ()
    </span>
   </code>
   <span class="ne-text">
    ，从而达到了调用函数的效果。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="uf9856935" style="text-indent: 2em">
  <span class="ne-text">
   从这个例子中也可以看到仿函数的作用，如果不使用匿名函数，而是使用普遍函数，由于
  </span>
  <code class="ne-code">
   <span class="ne-text">
    find_if()
   </span>
  </code>
  <span class="ne-text">
   的要求，该函数只能有一个参数，约束变量num无法传入，可以将num设定为全局变量，这样会导致数据的组织混乱。而仿函数通过构造函数将额外使用的数据通过构造函数传递给成员属性，操作符
  </span>
  <code class="ne-code">
   <span class="ne-text">
    ()
   </span>
  </code>
  <span class="ne-text">
   的函数体中就可以更加灵活的设置，而成员属性被约束在类的使用范围内，不会导致数据的组织混乱。
  </span>
 </p>
 <h3 id="mM2Dg">
  <span class="ne-text">
   知识点：T863
  </span>
 </h3>
 <table border=1 class="ne-table" id="jfnK0" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="udacd434b">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc2f01194" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uef7db88a">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u774500d9">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u44673f5d">
      <span class="ne-text">
       T863
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u61c8a8c2">
      <span class="ne-text">
       掌握链表list的用法，这是一个典型的节点空间不连续容器，迭代器终止判断不能用
      </span>
      <code class="ne-code">
       <span class="ne-text">
        &gt;
       </span>
      </code>
      <span class="ne-text">
       或
      </span>
      <code class="ne-code">
       <span class="ne-text">
        &lt;
       </span>
      </code>
      <span class="ne-text">
       ，只能用
      </span>
      <code class="ne-code">
       <span class="ne-text">
        !=
       </span>
      </code>
      <span class="ne-text">
       。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ubfb99afa">
      <a class="ne-link" data-href="ch#VjX61" href="ch7#VjX61">
       <span class="ne-text">
        T791
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u54d55755">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h1 id="wJ10H">
  <span class="ne-text">
   7 字典
  </span>
 </h1>
 <h2 id="SGdMn">
  <span class="ne-text">
   7.1 关联容器字典map
  </span>
 </h2>
 <p class="ne-p" id="ua1a73e6e" style="text-indent: 2em">
  <span class="ne-text">
   字典map是关联容器的典型代表，所有元素都是键值对，在C++中用pair实现。pair中第一个元素是first，作为key（键值），起到索引作用，第二个元素为second，作为value（实值），所有元素都会根据元素的键值自动排序，可以根据key值快速找到value值。
  </span>
 </p>
 <p class="ne-p" id="ua99babd7" style="text-indent: 2em">
  <span class="ne-text">
   map属于关联式容器，底层结构是用红黑树实现，查找复杂度为O(
  </span>
  <span class="ne-math" id="SOEhZ">
   <img src="../assets/images/cd40280cdc832013a593b2df92ed2275.svg"/>
  </span>
  <span class="ne-text">
   )，其中nbison元素的数量。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="uabccb829">
   <span class="ne-text">
    在数组一章获知，打表法是一种高效方法，用空间换时间，快速定位，减少搜索。打表法相当于用下标做键进行快速定位，但是如果使用的有效下标是稀疏的（即在一个较大范围里，只有少量下标被使用），或者所需要的键不是整型时，可以采用map实现打表法。只有有效的键才会出现在map中，减少了空间的浪费。并且map是按照键自动排序的，对有顺序要求的题目非常有用。
   </span>
  </p>
 </div>
 <h3 id="ZAq0N">
  <span class="ne-text">
   例题8.9
  </span>
 </h3>
 <p class="ne-p" id="u4067a641">
  <span class="ne-text">
   有
  </span>
  <code class="ne-code">
   <span class="ne-text">
    n
   </span>
  </code>
  <span class="ne-text">
   根可以忽视粗细的棒子。第
  </span>
  <code class="ne-code">
   <span class="ne-text">
    i
   </span>
  </code>
  <span class="ne-text">
   棒的长度是
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
   <sub>
    <span class="ne-text">
     i
    </span>
   </sub>
  </code>
  <span class="ne-text">
   。 有人想从这些棒子中选出4个棒子，用这些棒子做1个矩形(包括正方形)。 求最大可以制作的矩形面积。（2022年青岛市程序设计竞赛试题小学组真题）
  </span>
 </p>
 <p class="ne-p" id="u777fe1c3">
  <span class="ne-text">
   【输入格式 】
  </span>
 </p>
 <p class="ne-p" id="u7e0c9615">
  <span class="ne-text">
   第一行数量n。 第二行n个棒子的长度。4≤n≤10
  </span>
  <sup>
   <span class="ne-text">
    5
   </span>
  </sup>
  <span class="ne-text">
   ,1≤a
  </span>
  <sub>
   <span class="ne-text">
    i
   </span>
  </sub>
  <span class="ne-text">
   ≤10
  </span>
  <sup>
   <span class="ne-text">
    9
   </span>
  </sup>
 </p>
 <p class="ne-p" id="u4bbf5b9c">
  <span class="ne-text">
   【输出格式】
  </span>
 </p>
 <p class="ne-p" id="u59bd0eb4">
  <span class="ne-text">
   最大矩形面积，如果无法组成矩形，输出0。
  </span>
 </p>
 <table border=1 class="ne-table" id="y1jXP" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4e6c0e9c">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u954fa9df">
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
     <p class="ne-p" id="u40940cb6">
      <span class="ne-text">
       6
      </span>
     </p>
     <p class="ne-p" id="ua772b949">
      <span class="ne-text">
       3 1 2 4 2 1
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u7470a536">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u8069faad">
      <span class="ne-text">
       10
      </span>
     </p>
     <p class="ne-p" id="ub8fd6ec6">
      <span class="ne-text">
       3 3 3 3 4 4 4 5 5 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u67939961">
      <span class="ne-text">
       20
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uba479891">
      <span class="ne-text">
       4
      </span>
     </p>
     <p class="ne-p" id="u1d8ee60c">
      <span class="ne-text">
       1 2 3 4
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uad682aed">
      <span class="ne-text">
       0
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u8f2fd023">
  <span class="ne-text">
   【题目解析】从题目描述看，最佳方案应该是打表法，列出每种长度的棒子的数量，然后从大到小，找到最佳符合要求的棒子组成举行。但是题目给定的棒子长度的数值访问过大，容易造成内存不足，而且遍历所有长度的耗时也非常巨大。进一步查看题目，因为棒子的总数量相对比较小，可以采用map记录存在的棒子，这样键的总量就会大幅减少，map是按照键值从小到大排序的，因此从尾部寻找符合要求的棒子组成矩形即可。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="NXA6n"><span style="font-weight:bold;">代码8.16</span> 求最大可以制作的矩形面积<code>#include &lt;iostream&gt;
#include &lt;map&gt;
using namespace std;
int main ()
{
    map&lt;int,int&gt; a;
    int n;
    cin&gt;&gt;n;
    for(int i=0;i&lt;n;++i){
        int val;
        cin&gt;&gt;val;
        if(a.count(val))
        {   if(a[val]&lt;4)   a[val]++; }
        else
            a[val]=1;				//或写为a.insert(pair&lt;int,int&gt;(val,1));
    }
    int l1=0;
    for(auto rit=a.rbegin();rit!=a.rend();rit++){
        if(rit-&gt;second&gt;=2 &amp;&amp; l1&gt;0){              //当前棒子数量大于2，并且找到过一对棒子
            cout&lt;&lt;l1*rit-&gt;first&lt;&lt;endl;
            return 0;
        }else if(rit-&gt;second&gt;=4)                 //当前棒子数量大于4，直接构建方形
        {
            cout&lt;&lt;rit-&gt;first*rit-&gt;first&lt;&lt;endl;
            return 0;
        }else if(rit-&gt;second&gt;=2 &amp;&amp; l1==0){       //找到一对棒子，记录并寻找下一对棒子
            l1 = rit-&gt;first;
        }
    }
    cout&lt;&lt;0&lt;&lt;endl;                               //没有找到合适的棒子构成矩形
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="uf8eb855e">
   <span class="ne-text">
    第12行首先通过
   </span>
   <code class="ne-code">
    <span class="ne-text">
     count()
    </span>
   </code>
   <span class="ne-text">
    函数判断键是否存在，返回1或0。如果存在则加1，否则设置为初值1。根据题目描述，棒子数量超过4即可满足要求，因此当大于4时没有必须继续累加。
   </span>
  </li>
  <li id="u4d039be3">
   <span class="ne-text">
    第18行的循环逆序遍历map，因为迭代器书写比较复杂，所以auto自动构建数据类型书写更方便，而且可以减少语法关键词的记忆。
   </span>
  </li>
 </ul>
 <h3 id="cR2Bd">
  <span class="ne-text">
   知识点：T871
  </span>
 </h3>
 <table border=1 class="ne-table" id="ep52y" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u289ec800">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc7a4716b" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ua6ce4b85">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u1602e60b">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ue12809df">
      <span class="ne-text">
       T871
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u2630dcef">
      <span class="ne-text">
       掌握关联容器字典map的用法。可以认为这是打表法的高级用法，当数据量比较大但是比较稀疏时，可以用字典代替打表法
      </span>
     </p>
     <p class="ne-p" id="u6904c6de">
      <span class="ne-text">
       注意map的键是从小到大天然排序的
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc77abb6d">
      <a class="ne-link" data-href="ch#bDkij" href="ch5#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u6bc68414">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="u7d0255f4">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" target="_blank">
       <span class="ne-text">
        (LX801)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
    <td width="70">
    </td>
    <td width="67">
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="IOOHN">
  <span class="ne-text">
   7.2 无序容器字典unordered_map
  </span>
 </h2>
 <p class="ne-p" id="ucf7a680e" style="text-indent: 2em">
  <span class="ne-text">
   无序容器与关联容器的最大区别在于：关联容器底层采用红黑树，其所有元素按照键进行排序，当需要进行有序遍历时，非常用用；无序容器底层采用的是哈希表，当需要进行随机访问某个键时，访问速度为常量级，即O(1)，当需要频繁进行快速定位时，无序容器就显示出了它的效率优势。
  </span>
 </p>
 <h3 id="hpXsy">
  <span class="ne-text">
   例题8.10
  </span>
 </h3>
 <p class="ne-p" id="u8e33739d">
  <span class="ne-text">
   给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值
            target的那两个整数，并返回它们的数组下标。假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。可以按任意顺序返回答案。（
  </span>
  <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161788" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161788" target="_blank">
   <span class="ne-text">
    力扣1题
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <p class="ne-p" id="u0e256143">
  <span class="ne-text">
   【接口声明】
  </span>
 </p>
 <p class="ne-p" id="uee9b1a18">
  <span class="ne-text">
   vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int
            target)
  </span>
 </p>
 <p class="ne-p" id="ua00fcefd">
  <span class="ne-text">
   【数据范围】
  </span>
 </p>
 <p class="ne-p" id="u8ad30d3d">
  <span class="ne-text">
   2 ≤ nums.length ≤10
  </span>
  <sup>
   <span class="ne-text">
    4
   </span>
  </sup>
  <span class="ne-text">
   ，-10
  </span>
  <sup>
   <span class="ne-text">
    9
   </span>
  </sup>
  <span class="ne-text">
   ≤nums[i] ≤10
  </span>
  <sup>
   <span class="ne-text">
    9
   </span>
  </sup>
  <span class="ne-text">
   ，-10
  </span>
  <sup>
   <span class="ne-text">
    9
   </span>
  </sup>
  <span class="ne-text">
   ≤target ≤10
  </span>
  <sup>
   <span class="ne-text">
    9
   </span>
  </sup>
 </p>
 <p class="ne-p" id="u97a04722">
  <span class="ne-text">
   只会存在一个有效答案
  </span>
 </p>
 <table border=1 class="ne-table" id="n9j3b" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u313e9502">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua9536d91">
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
     <p class="ne-p" id="u5d64ab70">
      <span class="ne-text">
       nums = [2,7,11,15], target = 9
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uf319e3d1">
      <span class="ne-text">
       [0,1]
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uab9d92b6">
      <span class="ne-text">
       nums = [3,2,4], target = 6
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u44dad994">
      <span class="ne-text">
       [1,2]
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ud9fbce5a">
      <span class="ne-text">
       nums = [3,3], target = 6
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1d52dacb">
      <span class="ne-text">
       [0,1]
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u0e2dc613">
  <span class="ne-text">
   【题目解析】这是力扣的第1题，看似非常简单。用嵌套循环遍历所有组合的可能性，找到符合要求的答案进行输出即可，时间复杂度为O(n
  </span>
  <sup>
   <span class="ne-text">
    2
   </span>
  </sup>
  <span class="ne-text">
   )。实际上对于任意给定的值v，需要快速确定target-v是否存在，即v对于target的互补数是否存在。打表法可以完成这个任务需求。但2*10
  </span>
  <sup>
   <span class="ne-text">
    9
   </span>
  </sup>
  <span class="ne-text">
   的数值范围否决了开辟如此大空间的数组可行性。基于哈希表的unordered_map就发挥了它的作用。nums.length的数值范围决定了键的数量不会太多，哈希map既可以类似打表法中数组的快速定位，也可以避免无效空间的浪费。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="wp2aF"><span style="font-weight:bold;">代码8.17</span> 找出和为目标的整数<code>class Solution {
public:
    vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) {
        unordered_map&lt;int,size_t&gt; m;
        for (size_t i = 0; i &lt; nums.size();++i)
            m[nums[i]] = i;						//反向记录第i个数值对应的下标
        for (auto it1 = nums.begin(); it1 &lt; nums.end() - 1; it1++)
        {
            if (m.count(target - *it1))			//若存在互补数
            {
                int first = it1 - nums.begin();	//当前数的序号
                int second = m[target - *it1];	//互补数的序号
                if(first!=second){				//如果不是同一个元素
                    return {first,second};		//用两个元素初始化构建一个列表
                }
            }
        }
        return vector&lt;int&gt;();//返回一个空的vector，保证语法正确，本题保证不会执行到这里
    }
};</code></pre>
 <ul class="ne-ul">
  <li id="ubd12bbcc">
   <span class="ne-text">
    从力扣的解题记录中可以可以看到，基于暴力穷举的方法耗时为92ms，而基于unordered_map的方法耗时为8ms，十几倍的速度差显示了unordered_map在快速定位上的效率优势。利用哈希表的特点，第9行的快速定位的时间复杂度为O(1)，这样就将暴力穷举的时间复杂度O(n
   </span>
   <sup>
    <span class="ne-text">
     2
    </span>
   </sup>
   <span class="ne-text">
    )降为O(n)O(1)=O(n)。
   </span>
  </li>
  <li id="u188e22ca">
   <span class="ne-text">
    第5-6行以vector的值为键，以下标为值反向构建unordered_map，第9行判定目标值是否存在，利用了unordered_map的快速定位功能。如果找到目标值且不是同一个元素（第13行），则返回答案。
   </span>
  </li>
  <li id="u24ad1fcf">
   <span class="ne-text">
    第11行是将迭代器指针转换为序号的常用方法。
   </span>
  </li>
  <li id="ufcb5d654">
   <span class="ne-text">
    第14行的大括号是对vector进行初始化的方式，借助这种方式，与返回类型搭配使用，构建一个新的vector返回。
   </span>
  </li>
  <li id="ucc719b1f">
   <span class="ne-text">
    因为题目保证了一定有解，因此第18行是不会被执行的。但是从程序设计的角度，所有路径都必须有返回值，因此第18行必须存在。这一行也可以简写为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     return {};
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
 </ul>
 <div class="ne-quote">
  <p class="ne-p" id="ufa2b9c62">
   <span class="ne-text">
    很多文献上使用哈希map时使用头文件&lt;hash_map&gt;中的hash_map，这是一个非标准库，正确方式应该使用头文件&lt;unordered_map&gt;中的unordered_map。
   </span>
  </p>
 </div>
 <h3 id="jxNPL">
  <span class="ne-text">
   知识点：T872
  </span>
 </h3>
 <table border=1 class="ne-table" id="g6dTs" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uefa19cb8">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u9f1be56e" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u72a19960">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u5598679c">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u6d98c1c2">
      <span class="ne-text">
       T872
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u7330e0d3">
      <span class="ne-text">
       掌握无序容器的用法，重点掌握利用unordered_map构建大且稀疏数据的打表法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ua0f7978a">
      <a class="ne-link" data-href="ch#bDkij" href="ch5#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub517b6c1">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="u3defd62d">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" target="_blank">
       <span class="ne-text">
        (LX801)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
    <td width="70">
    </td>
    <td width="67">
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="EdSqb">
  <span class="ne-text">
   7.3 无序容器字典unordered_set
  </span>
 </h2>
 <p class="ne-p" id="ua9600562" style="text-indent: 2em">
  <span class="ne-text">
   可以认为字典是一种下标为任意类型的特殊数组，因为字典可以遍历，因此可以和循环联动，简化书写。
  </span>
 </p>
 <h3 id="FO3kF">
  <span class="ne-text">
   例题8.11
  </span>
 </h3>
 <p class="ne-p" id="uabc3ef9c">
  <span class="ne-text">
   给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] ==
            nums[j] 且 abs(i - j) &lt;= k 。如果存在，返回 true ；否则，返回 false 。（
  </span>
  <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" target="_blank">
   <span class="ne-text">
    力扣219题
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <p class="ne-p" id="uf60d4b14">
  <span class="ne-text">
   【接口声明】
  </span>
 </p>
 <p class="ne-p" id="ub669db11">
  <code class="ne-code">
   <span class="ne-text">
    bool containsNearbyDuplicate(vector&lt;int&gt;&amp; nums, int k)
   </span>
  </code>
  <span class="ne-text">
  </span>
 </p>
 <p class="ne-p" id="u850472a8">
  <span class="ne-text">
   【数据范围】
  </span>
 </p>
 <ul class="ne-ul">
  <li id="udf50c237">
   <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 13px">
    1 &lt;=
                nums.length &lt;= 10
   </span>
   <sup>
    <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 12px">
     5
    </span>
   </sup>
  </li>
  <li id="u1f87ee0a">
   <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 13px">
    -10
   </span>
   <sup>
    <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 12px">
     9
    </span>
   </sup>
   <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 13px">
    &lt;= nums[i] &lt;= 10
   </span>
   <sup>
    <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 12px">
     9
    </span>
   </sup>
  </li>
  <li id="u92609df4">
   <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 13px">
    0 &lt;= k
                &lt;= 10
   </span>
   <sup>
    <span class="ne-text" style="color: rgba(var(--grey-7-rgb),1); font-size: 12px">
     5
    </span>
   </sup>
  </li>
 </ul>
 <table border=1 class="ne-table" id="FHxMd" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ucb4cd583">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5f999755">
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
     <p class="ne-p" id="u13e6f7f7">
      <span class="ne-text">
       nums = [1,2,3,1], k = 3
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uda772353">
      <span class="ne-text">
       true
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ueb160759">
      <span class="ne-text">
       nums = [1,0,1,1], k = 1
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ueed98c9f">
      <span class="ne-text">
       true
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uf94d1141">
      <span class="ne-text">
       nums = [1,2,3,1,2,3], k = 2
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u795dab5b">
      <span class="ne-text">
       false
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u22d81690">
  <span class="ne-text">
   【题目解析】这是力扣的第219题，可以通过暴力解决，但效率比较低。以下引入滑动窗口的概念，只在长度为k的范围内进行查找，并且利用哈希表查找复杂度为O(1)的特点，加快查找的效率。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="okF7N"><span style="font-weight:bold;">代码8.18</span> 多重判断解决方案<code>class Solution {
public:
    bool containsNearbyDuplicate(vector&lt;int&gt;&amp; nums, int k) {
        unordered_set&lt;int&gt; s;
        for (int i = 0; i &lt; nums.size(); i++) {
            if (i &gt; k) {
                s.erase(nums[i - k - 1]);		//删除超过距离k的元素
            }
            if (s.count(nums[i])) {				//哈希查找
                return true;
            }
            s.emplace(nums[i]);					//添加新元素
        }
        return false;
    }
};</code></pre>
 <ul class="ne-ul">
  <li id="u04b29c11">
   <span class="ne-text">
    这是一个非常奇妙并且高效的解法。建立了一个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     unordered_set
    </span>
   </code>
   <span class="ne-text">
    对象，其中只保留
   </span>
   <code class="ne-code">
    <span class="ne-text">
     k
    </span>
   </code>
   <span class="ne-text">
    个元素，相当于一个
   </span>
   <strong>
    <span class="ne-text">
     滑动窗口
    </span>
   </strong>
   <span class="ne-text">
    。当距离超过
   </span>
   <code class="ne-code">
    <span class="ne-text">
     k
    </span>
   </code>
   <span class="ne-text">
    时，将元素从窗口中删除，第12行将新元素添加到窗口中。第9行利用哈希O(1)的复杂度进行判断是否存在。如果存在则返回
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true
    </span>
   </code>
   <span class="ne-text">
    。整个算法的时间复杂度为O(n)。
   </span>
  </li>
 </ul>
 <h3 id="Yve1p">
  <span class="ne-text">
   知识点：T873
  </span>
 </h3>
 <table border=1 class="ne-table" id="VQLtQ" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u53831e8d">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u370e0693" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4a33de2a">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ud85d8824">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u0e1dec2a">
      <span class="ne-text">
       T873
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uff46b348">
      <span class="ne-text">
       重点掌握利用unordered_set构建滑动窗口，理解哈希表查找复杂度为O(1)的特性，利用这一特性，可以代替数组的打表法，尤其对稀疏或非数值数据具有良好的效果。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u8f5d44b5">
      <a class="ne-link" data-href="ch#bDkij" href="ch5#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u17992f24">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ue6a7495a">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" target="_blank">
       <span class="ne-text">
        (LX821)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" target="_blank">
       <span class="ne-text">
        (LX801)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161779" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161779" target="_blank">
       <span class="ne-text">
        (LX814)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="wmBGH">
  <span class="ne-text">
   7.4 字典与循环的联动
  </span>
 </h2>
 <p class="ne-p" id="u737fec1f" style="text-indent: 2em">
  <span class="ne-text">
   可以认为字典是一种下标为任意类型的特殊数组，因为字典可以遍历，因此可以和循环联动，简化书写。
  </span>
 </p>
 <h3 id="uk7XO">
  <span class="ne-text">
   例题8.12
  </span>
 </h3>
 <p class="ne-p" id="u87ca6add">
  <span class="ne-text">
   罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
  </span>
 </p>
 <table border=1 class="ne-table" id="Rgum2" style="text-align:center"  align="center">
  <tbody>
   <tr style="height: 33px">
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="u2e484c2a">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="u1bd032ff">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="49">
     <p class="ne-p" id="ucdda6aac">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="uf141ba48">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="49">
     <p class="ne-p" id="u7bbbda00">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="ud28ab4c9">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="uba0eb1da">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="ufc02017f">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="uf5f1cd77">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="50">
     <p class="ne-p" id="u8539ee51">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="u9dcac37c">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="50">
     <p class="ne-p" id="u422ea58c">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="uf608460f">
      <span class="ne-text">
       字符
      </span>
     </p>
    </td>
    <td width="58">
     <p class="ne-p" id="ub9115e78">
      <span class="ne-text">
       数值
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="u97bd0b36" style="text-align: center">
      <span class="ne-text">
       I
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="u527d1871" style="text-align: center">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="49">
     <p class="ne-p" id="u9127025c" style="text-align: center">
      <span class="ne-text">
       V
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="u3bb44440" style="text-align: center">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="49">
     <p class="ne-p" id="u99dac573" style="text-align: center">
      <span class="ne-text">
       X
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="uf1f2f62e" style="text-align: center">
      <span class="ne-text">
       10
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="u4ba41eb4" style="text-align: center">
      <span class="ne-text">
       L
      </span>
     </p>
    </td>
    <td width="49">
     <p class="ne-p" id="uae3d54ef" style="text-align: center">
      <span class="ne-text">
       50
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="ub71da46b" style="text-align: center">
      <span class="ne-text">
       C
      </span>
     </p>
    </td>
    <td width="50">
     <p class="ne-p" id="u9dc4b1ad" style="text-align: center">
      <span class="ne-text">
       100
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="u7e6dd648" style="text-align: center">
      <span class="ne-text">
       D
      </span>
     </p>
    </td>
    <td width="50">
     <p class="ne-p" id="u25b0fc4c" style="text-align: center">
      <span class="ne-text">
       500
      </span>
     </p>
    </td>
    <td style="background-color: #FBE4E7" width="50">
     <p class="ne-p" id="ub8b578aa" style="text-align: center">
      <span class="ne-text">
       M
      </span>
     </p>
    </td>
    <td width="58">
     <p class="ne-p" id="u5bd7d138" style="text-align: center">
      <span class="ne-text">
       1000
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u13c18298">
  <span class="ne-text">
   例如， 罗马数字2写做 II，即为两个并列的1。12写做XII，即为X+II。 27写做XXVII,
            即为XX+V+II 。
  </span>
 </p>
 <p class="ne-p" id="u1a9e3d3e" style="text-indent: 2em">
  <span class="ne-text">
   通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4
            不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
  </span>
 </p>
 <p class="ne-p" id="u6e1370c4">
  <span class="ne-text">
   I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  </span>
 </p>
 <p class="ne-p" id="ud671d1c0">
  <span class="ne-text">
   X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
  </span>
 </p>
 <p class="ne-p" id="u17e3f52b">
  <span class="ne-text">
   C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
  </span>
 </p>
 <p class="ne-p" id="u3e087e66">
  <span class="ne-text">
   给定一个罗马数字，将其转换成整数。（
  </span>
  <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161778" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161778" target="_blank">
   <span class="ne-text">
    力扣13题
   </span>
  </a>
  <span class="ne-text">
   ）
  </span>
 </p>
 <p class="ne-p" id="u1c117b01">
  <span class="ne-text">
   【接口声明】
  </span>
 </p>
 <p class="ne-p" id="u4683908e">
  <span class="ne-text">
   int romanToInt(string s)
  </span>
 </p>
 <p class="ne-p" id="ue8213a02">
  <span class="ne-text">
   【数据范围】
  </span>
 </p>
 <p class="ne-p" id="u9963bd1b">
  <span class="ne-text">
   1 &lt;= s.length &lt;= 15
  </span>
 </p>
 <p class="ne-p" id="u869e80b1">
  <span class="ne-text">
   s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
  </span>
 </p>
 <p class="ne-p" id="u784590cc">
  <span class="ne-text">
   题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内
  </span>
 </p>
 <p class="ne-p" id="ue9349969">
  <span class="ne-text">
   题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
  </span>
 </p>
 <table border=1 class="ne-table" id="WupJh" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ubaa833e6">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u35703c1a">
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
     <p class="ne-p" id="u6bdecd3e">
      <span class="ne-text">
       s = "III"
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u6a70c6cb">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u58b38927">
      <span class="ne-text">
       s = "LVIII"
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ubd2eeadc">
      <span class="ne-text">
       58
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4fe1ed38">
      <span class="ne-text">
       s = "MCMXCIV"
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ud2dbb5db">
      <span class="ne-text">
       1994
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u9c513ea9">
  <span class="ne-text">
   【题目解析】这是力扣的第13题，可以通过多重判断解决。但是书写比较复杂。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="rkpaa"><span style="font-weight:bold;">代码8.19</span> 多重判断解决方案<code>class Solution {
public:
    int romanToInt(string s) {
        int sum=0;
        for(int i=0;i&lt;s.size();++i){
            if(s[i]=='I'){
                if(s[i+1]=='V'){++i;sum+=4;}
                else if(s[i+1]=='X'){++i;sum+=9;}
                else sum++;
            }
            else if(s[i]=='X'){
                if(s[i+1]=='L'){++i;sum+=40;}
                else if(s[i+1]=='C'){++i;sum+=90;}
                else sum+=10;
            }
            else if(s[i]=='C'){
                if(s[i+1]=='D'){++i;sum+=400;}
                else if(s[i+1]=='M'){++i;sum+=900;}
                else sum+=100;
            }
            else if(s[i]=='V'){sum+=5;}
            else if(s[i]=='L'){sum+=50;}
            else if(s[i]=='D'){sum+=500;}
            else if(s[i]=='M'){sum+=1000;}
        }
        return sum;
    }
};</code></pre>
 <p class="ne-p" id="u44548aaa" style="text-indent: 2em">
  <span class="ne-text">
   造成以上代码多重判断的复杂性根源在于键是一系列不规律的字符，可以将这些特殊键构造成字典，从而简化循环书写逻辑。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="T7yAG"><span style="font-weight:bold;">代码8.20</span> 字典解决方案<code>class Solution {
public:
    int romanToInt(string s) {
        int sum=0;
        unordered_map&lt;char,int&gt; m1=\{\{'I',1},{'V',5},{'X',10},{'L',50},
        							{'C',100},{'D',500},{'M',1000}};
        unordered_map&lt;string,int&gt; m2=\{\{"IV",4},{"IX",9},{"XL",40},
        							{"XC",90},{"CD",400},{"CM",900}};
        for(int i=0;i&lt;s.size();++i){
            if(m2.count(s.substr(i,2))) sum+=m2[s.substr(i++,2)];
            else sum+=m1[s[i]];
        }
        return sum;
    }
};</code></pre>
 <ul class="ne-ul">
  <li id="ufe6e7f6c">
   <span class="ne-text">
    可以看到，代码得到了极大的简化，核心就是构造了两个字典，形成了键值的映射。
   </span>
  </li>
  <li id="u6a509bb9">
   <span class="ne-text">
    第10行判断双字符键是否存在，如果存在则增加对应的值。特别注意i++，因为是双字符键，需要跨越两个字符，因此sum累加后，要将i增加1。
   </span>
  </li>
  <li id="u22c7438b">
   <span class="ne-text">
    第11行对单字符键进行累加操作。
   </span>
  </li>
 </ul>
 <h3 id="EnDgK">
  <span class="ne-text">
   随堂练习8.2
  </span>
 </h3>
 <p class="ne-p" id="u9a66d153" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   仿照C++的定义对可能含有转义序列的字符串进行转换，输出转换后的结果。
  </span>
  <strong>
   <span class="ne-text" style="color: rgb(64, 64, 64)">
    只需实现
   </span>
  </strong>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ：
  </span>
  <span class="ne-text" style="color: rgb(231, 76, 60)">
   \n
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ,
  </span>
  <span class="ne-text" style="color: rgb(231, 76, 60)">
   \t
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ,
  </span>
  <span class="ne-text" style="color: rgb(231, 76, 60)">
   \?
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ,
  </span>
  <span class="ne-text" style="color: rgb(231, 76, 60)">
   \'
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ,
  </span>
  <span class="ne-text" style="color: rgb(231, 76, 60)">
   \"
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ,
  </span>
  <span class="ne-text" style="color: rgb(231, 76, 60)">
   \\
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   即可。注意根据知识点
  </span>
  <a class="ne-link" data-href="ch#W9YYd" href="ch2#W9YYd">
   <span class="ne-text">
    T274
   </span>
  </a>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   ，当输入中有转义字符时，不会认为是转义字符，而会逐个字符处理。
  </span>
 </p>
 <table border=1 class="ne-table" id="IylW4" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ud9a1dcdd">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u57ee1c4b">
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
     <p class="ne-p" id="ua0bdb428">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       new\nline
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u8a1d18dd">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       new
      </span>
     </p>
     <p class="ne-p" id="u22a820d4">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       line
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u9eaea655">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       T\tAB
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uecbee0c7">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       T AB
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ubbbc3e11">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       \?\'\"\\
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u046afcbf">
      <span class="ne-text" style="color: rgb(64, 64, 64); font-size: 12px">
       ?'"\
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="mu9UI">
  <span class="ne-text">
   知识点：T874
  </span>
 </h3>
 <table border=1 class="ne-table" id="VCGJC" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u292cb2af">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua85aecbc" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc62273f0">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub22a0487">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uffaf4c1a">
      <span class="ne-text">
       T874
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua9ee8cb3">
      <span class="ne-text">
       掌握字典与循环联动的方法，理解字典在书写上类似特殊下标的数组
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u1faa894e">
      <a class="ne-link" data-href="ch#WGgmO" href="ch5#WGgmO">
       <span class="ne-text">
        T522
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub3d25c13">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="u27caa42c">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161778" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161778" target="_blank">
       <span class="ne-text">
        (LX815)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
    <td width="70">
    </td>
    <td width="67">
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u8a19d09d" style="text-indent: 0;">参考文献</p>
 <ol class="ne-ol">
  <li id="ucabb1a90">
   <a class="ne-link" data-href="https://frankcastle520.gitee.io/2020/03/16/language/c/c-ti-gao-bian-cheng/#toc-heading-103" href="https://frankcastle520.gitee.io/2020/03/16/language/c/c-ti-gao-bian-cheng/#toc-heading-103" target="_blank">
    <span class="ne-text">
     https://frankcastle520.gitee.io/2020/03/16/language/c/c-ti-gao-bian-cheng/#toc-heading-103
    </span>
   </a>
  </li>
  <li id="ua7a8bd0d">
   <a class="ne-link" data-href="http://c.biancheng.net/view/6803.html" href="http://c.biancheng.net/view/6803.html" target="_blank">
    <span class="ne-text">
     http://c.biancheng.net/view/6803.html
    </span>
   </a>
  </li>
  <li id="u8e1fff5b">
   <a class="ne-link" data-href="https://blog.csdn.net/ych9527/article/details/117324385" href="https://blog.csdn.net/ych9527/article/details/117324385" target="_blank">
    <span class="ne-text">
     https://blog.csdn.net/ych9527/article/details/117324385
    </span>
   </a>
  </li>
 </ol>
</div>
<div class="self-section">
 <h1 id="OEDhg">
  <span class="ne-text">
   题单
  </span>
 </h1>

 <table border=1 class="ne-table" id="FANQT">
  <tbody>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u8e2681c3">
      <span class="ne-text">
       序号
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u97ce9857">
      <span class="ne-text">
       题目名称
      </span>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u63a0c2cb">
      <span class="ne-text">
       知识点
      </span>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u3ad306a6">
      <span class="ne-text">
       序号
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="u4e859026">
      <span class="ne-text">
       题目名称
      </span>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ue4694c05">
      <span class="ne-text">
       知识点
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u15e91a5c">
      <span class="ne-text">
       LX801
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="ue6867b7d">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161765" target="_blank">
       <span class="ne-text">
        第一个出现两次的字母
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u8686f3c1">
      <a class="ne-link" data-href="ch#bDkij" href="ch5#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="ch#wG8i3" href="ch2#wG8i3">
       <span class="ne-text">
        T242
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="ufff68c93">
      <span class="ne-text">
       LX802
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="udd036635">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161766" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161766" target="_blank">
       <span class="ne-text">
        加一
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u0c69e5c3">
      <a class="ne-link" data-href="ch#TSGz6" href="ch5#TSGz6">
       <span class="ne-text">
        T549
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u0591cb18">
      <span class="ne-text">
       LX803
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="udecf8a13">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161767" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161767" target="_blank">
       <span class="ne-text">
        三个数的最大乘积
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u047289c9">
      <a class="ne-link" data-href="ch#pyYpq" href="ch5#pyYpq">
       <span class="ne-text">
        T527
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="uecefd206">
      <span class="ne-text">
       LX804
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="uefc5d0d5">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161768" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161768" target="_blank">
       <span class="ne-text">
        移动零
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uc95b687f">
      <a class="ne-link" data-href="#kYcFw" href="#kYcFw">
       <span class="ne-text">
        T842
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="ch#o8Kxq" href="ch5#o8Kxq">
       <span class="ne-text">
        T524
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u18d734d8">
      <span class="ne-text">
       LX805
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="ude098280">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161769" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161769" target="_blank">
       <span class="ne-text">
        只出现一次的数字
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u57bd9664">
      <a class="ne-link" data-href="ch#panTK" href="ch2#panTK">
       <span class="ne-text">
        T26C
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u70ee49c3">
      <span class="ne-text">
       LX806
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="ud550f8e0">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161774" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161774" target="_blank">
       <span class="ne-text">
        移除元素
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uec413efb">
      <a class="ne-link" data-href="#kYcFw" href="#kYcFw">
       <span class="ne-text">
        T842
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="ch#o8Kxq" href="ch5#o8Kxq">
       <span class="ne-text">
        T524
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u3a537aba">
      <span class="ne-text">
       LX807
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="uea49a3d1">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161770" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161770" target="_blank">
       <span class="ne-text">
        合并两个有序数组
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u5fa58791">
      <a class="ne-link" data-href="ch#pyYpq" href="ch5#pyYpq">
       <span class="ne-text">
        T527
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="ch#L8fPI" href="ch5#L8fPI" target="_blank">
       <span class="ne-text">
        T528
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="ua936f615">
      <span class="ne-text">
       LX808
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="ub80f4ea4">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161771" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161771" target="_blank">
       <span class="ne-text">
        搜索插入位置
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ua5467cd1">
      <a class="ne-link" data-href="ch#AE9qD" href="ch2#AE9qD">
       <span class="ne-text">
        T251
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u27585b6f">
      <span class="ne-text">
       LX809
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u22c8a90c">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161772" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161772" target="_blank">
       <span class="ne-text">
        和相等的子数组
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u2e0767bd">
      <a class="ne-link" data-href="#jxNPL" href="#jxNPL">
       <span class="ne-text">
        T872
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u4a20dc91">
      <span class="ne-text">
       LX810
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="u9cc23b50">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161773" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161773" target="_blank">
       <span class="ne-text">
        第三大的数
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u7559d6ea">
      <a class="ne-link" data-href="ch#TFSS3" href="ch5#TFSS3">
       <span class="ne-text">
        T515
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u261730c9">
      <span class="ne-text">
       LX811
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u6f7f3976">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161775" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161775" target="_blank">
       <span class="ne-text">
        学生分数的最小差值
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="ua73bb148">
      <a class="ne-link" data-href="ch#pyYpq" href="ch5#pyYpq">
       <span class="ne-text">
        T527
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="ch#TFSS3" href="ch5#TFSS3">
       <span class="ne-text">
        T515
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u769cf93a">
      <span class="ne-text">
       LX812
      </span>
     </p>
    </td>
   
    <td width="109">
     <p class="ne-p" id="uff6e743d">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161776" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161776" target="_blank">
       <span class="ne-text">
        串联数组
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="udc32ef04">
      <a class="ne-link" data-href="ch#zTfai" href="ch5#zTfai">
       <span class="ne-text">
        T542
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u7cd6df3e">
      <span class="ne-text">
       LX813
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="ua5204a90">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161777" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161777" target="_blank">
       <span class="ne-text">
        删除某些元素后的数组均值
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="uc5039c42">
      <a class="ne-link" data-href="ch#pyYpq" href="ch5#pyYpq">
       <span class="ne-text">
        T527
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u812a1ddb">
      <span class="ne-text">
       LX814
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="u946c0bcf">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161779" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161779" target="_blank">
       <span class="ne-text">
        丢失的数字
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u6b2e8efc">
      <a class="ne-link" data-href="ch#bDkij" href="ch5#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#Yve1p" href="#Yve1p">
       <span class="ne-text">
        T873
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="uc6a915c9">
      <span class="ne-text">
       LX815
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u7e18bf6b">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161778" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161778" target="_blank">
       <span class="ne-text">
        罗马数字转整数
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u2c91f959">
      <a class="ne-link" data-href="#mu9UI" href="#mu9UI">
       <span class="ne-text">
        T874
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u10138cc3">
      <span class="ne-text">
       LX816
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="ub130c7aa">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161780" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161780" target="_blank">
       <span class="ne-text">
        主要元素
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ue480f942">
      <a class="ne-link" data-href="#jxNPL" href="#jxNPL">
       <span class="ne-text">
        T872
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u0477cf72">
      <span class="ne-text">
       LX817
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="ueeb4d70a">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161781" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161781" target="_blank">
       <span class="ne-text">
        判断能否形成等差数列
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="ua714c028">
      <a class="ne-link" data-href="ch#pyYpq" href="ch5#pyYpq">
       <span class="ne-text">
        T527
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u20c2a107">
      <span class="ne-text">
       LX818
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="u14e28ab5">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161782" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161782" target="_blank">
       <span class="ne-text">
        棒球比赛
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ube88e950">
      <a class="ne-link" data-href="#BlTTv" href="#BlTTv">
       <span class="ne-text">
        T841
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="ud22ea8bb">
      <span class="ne-text">
       LX819
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u44e470cc">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161783" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161783" target="_blank">
       <span class="ne-text">
        存在连续三个奇数的数组
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u5a3fe690">
      <a class="ne-link" data-href="#z5syf" href="#z5syf">
       <span class="ne-text">
        T862
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u96689abd">
      <span class="ne-text">
       LX820
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="uaff7fbea">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161784" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161784" target="_blank">
       <span class="ne-text">
        重新排列数组
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u08544e3a">
      <a class="ne-link" data-href="ch#AE9qD" href="ch2#AE9qD">
       <span class="ne-text">
        T251
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="u8e7daa8a">
      <span class="ne-text">
       LX821
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u90fbc2da">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" target="_blank">
       <span class="ne-text">
        存在重复元素II
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u2e68871b">
      <a class="ne-link" data-href="#Yve1p" href="#Yve1p">
       <span class="ne-text">
        T873
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="u70fb75f4">
      <span class="ne-text">
       LX822
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="u930fe2ae">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161785" target="_blank">
       <span class="ne-text">
        存在重复元素
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u40f3e4c5">
      <a class="ne-link" data-href="#jxNPL" href="#jxNPL">
       <span class="ne-text">
        T872
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="66">
     <p class="ne-p" id="uc256348f">
      <span class="ne-text">
       LX823
      </span>
     </p>
    </td>
    
    <td width="202">
     <p class="ne-p" id="u0097c855">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161787" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161787" target="_blank">
       <span class="ne-text">
        有效的括号
       </span>
      </a>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u95ea3a91">
      <a class="ne-link" data-href="#BlTTv" href="#BlTTv">
       <span class="ne-text">
        T841
       </span>
      </a>
     </p>
    </td>
    <td width="65">
     <p class="ne-p" id="ud7b34d94">
      <span class="ne-text">
       LX824
      </span>
     </p>
    </td>
    <td width="109">
     <p class="ne-p" id="ub94f5b50">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161788" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161788" target="_blank">
       <span class="ne-text">
        两数之和
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u8c9240e9">
      <a class="ne-link" data-href="#jxNPL" href="#jxNPL">
       <span class="ne-text">
        T862
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
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
    name: 'Ch8',
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
        this.$store.dispatch('toChapter', 11);
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
