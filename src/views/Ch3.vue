<template>
<div class="whole-page">
    <div class="self-main">
        <div class="chapter-title">✋第三章 分支与函数初步</div>
<div class="lake-content" ref="content-data" typography="classic">
<div class="self-section">
 <h1 id="j2O86">
  <span class="ne-text">
   1. 分支结构
  </span>
 </h1>
 <h2 id="wTe4k">
  <span class="ne-text">
   1.1 单分支控制
  </span>
 </h2>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="BfK58"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>if(条件)
{    语句块1;   }</code></pre>
 <p class="ne-p" id="uca5e1fe6">
  <span class="ne-text">
   如果条件成立，则执行语句块1，否则直接执行后继语句，语句块1被忽略，执行后继语句。
  </span>
 </p>
 <h3 id="nBEvt">
  <span class="ne-text">
   例题3.1
  </span>
 </h3>
 <p class="ne-p" id="uc8c91ece" style="text-indent: 2em">
  <span class="ne-text">
   输入两个数m和n，对这两个数进行降序排序。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="WT10G"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int m,n;
    cin&gt;&gt;m&gt;&gt;n;
    if(m&lt;n)		//此处末尾不能有分号，千万不要写成if(m&lt;n);
    {
        int t=m;
        m=n;
        n=t;
    }
    cout&lt;&lt;"sorted: "&lt;&lt;m&lt;&lt;' '&lt;&lt;n&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="LOmZR" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ua26b82b9">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接f1">
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
     <p class="ne-p" id="u3aa7a017">
      <span class="ne-text">
       3 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5e034cf3">
      <span class="ne-text">
       sorted: 5 3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ue5946008">
   <span class="ne-text">
    第7行为条件判断，如果m&lt;n，则执行第9-11行，交换m和n的值。这个交换操作是C/C++中的基本操作，在C++中也可以简单的使用swap代替；如果条件不成立，则跳过第8-12行，直接执行第13行。
   </span>
  </li>
  <li id="u24c73cf1">
   <span class="ne-text">
    第7行的右小括号右侧不能加分号，因为语句未结束。如果添加了分号，表示条件成立时执行空语句（单个分号表示空语句），第8-12行与第7行的if语句就没有任何关联性了。
   </span>
  </li>
  <li id="ud83ad112">
   <span class="ne-text">
    if语句后面只能接一条语句或一个语句块，如果需要执行多条语句，就用大括号将多条语句封装成语句块。初学者如果分不清什么时候加大括号，可以在任何时候都加大括号，这样语法上总是正确的。
   </span>
  </li>
  <li id="u5acf6e05">
   <span class="ne-text">
    真正的程序员必须保证代码具有良好的缩进，这里的if，以及后面将要提及的else，或循环语句，其关联的语句块都要保持缩进状态，这样可以非常快速的了解程序的层次关系。
   </span>
  </li>
 </ul>
 <h3 id="MeWtj">
  <span class="ne-text">
   例题3.2
  </span>
 </h3>
 <p class="ne-p" id="u6364b098" style="text-indent: 2em">
  <span class="ne-text">
   对三个数a,b,c进行降序排序。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="HKtmj"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int a,b,c;
    cin&gt;&gt;a&gt;&gt;b&gt;&gt;c;
    if(a&lt;b)
    {   swap(a,b);	}
    if(a&lt;c)
    {   swap(a,c);	}
    if(b&lt;c)
    {   swap(b,c);	}
    cout&lt;&lt;"Sorted: "&lt;&lt;a&lt;&lt;' '&lt;&lt;b&lt;&lt;' '&lt;&lt;c&lt;&lt;endl;
}</code></pre>
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
       3 2 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua5a72bf4">
      <span class="ne-text">
       sorted: 5 3 2
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ue452a7da">
   <span class="ne-text">
    通过组合使用代码3.1中的“比较+交换”操作，可以达成对多个数据排序的目的。当数据量比较大的时候，需要用到循环和数组，将在后继章节中介绍。
   </span>
  </li>
  <li id="u1703a082">
   <span class="ne-text">
    第7-10行保证
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    中存储了三个数的最大值，然后第11-12行对
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     c
    </span>
   </code>
   <span class="ne-text">
    进行了“比较+交换”，从而保证了三个数的降序。同样道理，如果第7行处理
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a&lt;c
    </span>
   </code>
   <span class="ne-text">
    ，第9行处理
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b&lt;c
    </span>
   </code>
   <span class="ne-text">
    ，可以让
   </span>
   <code class="ne-code">
    <span class="ne-text">
     c
    </span>
   </code>
   <span class="ne-text">
    中先存储最小值，然后再对
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b
    </span>
   </code>
   <span class="ne-text">
    进行“比较+交换”。
   </span>
  </li>
 </ul>
 <h3 id="ZvwtH">
  <span class="ne-text">
   随堂练习3.1
  </span>
 </h3>
 <p class="ne-p" id="u488d5fb4" style="text-indent: 2em">
  <span class="ne-text">
   填充以下代码下划线部分，达成对三个数a,b,c进行降序排序。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="pySxv"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int a,b,c;
    cin&gt;&gt;a&gt;&gt;b&gt;&gt;c;
    if(a&lt;b)
    {   swap(a,b);	}
    if(b&lt;c)
    {   swap(b,c);	}
    if(____&lt;____)
    {   swap(____, ____);	}
    cout&lt;&lt;"Sorted："&lt;&lt;a&lt;&lt;' '&lt;&lt;b&lt;&lt;' '&lt;&lt;c&lt;&lt;endl;
}</code></pre>
 <h3 id="XPPV7">
  <span class="ne-text">
   知识点：T311-T313
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
    <td rowspan="2" width="58">
     <p class="ne-p" id="ud9ccd0f7">
      <span class="ne-text">
       T311
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="u70312b70">
      <span class="ne-text">
       掌握单分支条件语句的基本写法，千万注意不要添加额外的分号
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc344a142">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf6db8821">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="675">
     <p class="ne-p" id="u7b4f6381">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183790" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183790" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX301)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u31265a5c">
      <span class="ne-text">
       T312
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="udab3bd66">
      <span class="ne-text">
       掌握少量数据的排序方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ucf2ddce5">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#panTK" href="ch2#panTK">
       <span class="ne-text">
        T26B
       </span>
      </a>
     </p>
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="675">
     <p class="ne-p" id="u9dfb95a5">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183791" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183791" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX302)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u9e47a27f">
      <span class="ne-text">
       T313
      </span>
     </p>
    </td>
    <td width="538">
     <p class="ne-p" id="uc2c75ded">
      <span class="ne-text">
       良好的代码缩进是编程基本素养，遇到左大括号缩进，遇到右大括号缩进完成
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
 <h2 id="hiF4I">
  <span class="ne-text">
   1.2 双分支控制
  </span>
 </h2>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="QCSA2"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>if(条件)
{    语句块1;   }
else
{    语句块2;   }</code></pre>
 <p class="ne-p" id="u410d8bb7">
  <span class="ne-text">
   如果条件成立，则执行语句块1，否则执行语句块2，二者必然有一项要被执行。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="u285a4649">
   <span class="ne-text" style="font-size: 16px">
    else后面不写条件，但是具有隐含条件，即if的条件不成立。
   </span>
  </p>
 </div>
 <h3 id="DidN2">
  <span class="ne-text">
   例题3.3
  </span>
 </h3>
 <p class="ne-p" id="ua0e363d2" style="text-indent: 2em">
  <span class="ne-text">
   输入一个整数m，判断m的奇偶性。
  </span>
 </p>
 <table border=1 class="ne-table" id="wRUSk" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接5a">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4c7577d4">
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
     <p class="ne-p" id="u1c431d7c">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u34ebd846">
      <span class="ne-text">
       奇数
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="yoP3O"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int m;
    cin&gt;&gt;m;
    if(m%2==0)
        cout&lt;&lt;"偶数"&lt;&lt;endl;
    else
    {
        cout&lt;&lt;"奇数"&lt;&lt;endl;
    }
}</code></pre>
 <table border=1 class="ne-table" id="dXoyv" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u52fcb0b6">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u7951f6ef">
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
     <p class="ne-p" id="u3ba86ac8">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u10d6f93c">
      <span class="ne-text">
       奇数
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ud195e13e">
   <span class="ne-text">
    这里if和else接的语句都是单条语句，可以像第8行那样不加大括号，也可以像第11行那样增加大括号。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u3d42b7a7" style="text-indent: 2em">
  <span class="ne-text">
   根据整型和布尔型之间的对应关系，以上程序也可以改写为：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="ZLCR2"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int m;
    cin&gt;&gt;m;
    if(m%2)					//或if(m&amp;1)
        cout&lt;&lt;"奇数"&lt;&lt;endl;
    else
        cout&lt;&lt;"偶数"&lt;&lt;endl;
}</code></pre>
 <p class="ne-p" id="u0a439db0" style="text-indent: 2em">
  <span class="ne-text">
   进一步可以改写为问号表达式：
  </span>
  <code class="ne-code">
   <span class="ne-text">
    条件?条件成立语句:条件不成立语句
   </span>
  </code>
  <span class="ne-text">
   。首先进行条件判断，条件成立时执行冒号前的语句，否则执行冒号后的语句。这是C/C++中的三目运算符，极大简化了双分支结构的书写。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="HPwSa"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int m;
    cin&gt;&gt;m;
    cout&lt;&lt;(m%2?"奇数":"偶数")&lt;&lt;endl;
}</code></pre>
 <h3 id="IftcA">
  <span class="ne-text">
   知识点：T314-T316
  </span>
 </h3>
 <table border=1 class="ne-table" id="ISmXL" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uaa9bd2a8">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="512">
     <p class="ne-p" id="ubd8f58e5" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="udd595065">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="103">
     <p class="ne-p" id="u784f3cea">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u61decc4e">
      <span class="ne-text">
       T314
      </span>
     </p>
    </td>
    <td width="512">
     <p class="ne-p" id="u838fa403">
      <span class="ne-text">
       掌握双分支条件语句的基本写法，else部分没有显式条件，但有隐含条件。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uac8b3f41">
      <br/>
     </p>
    </td>
    <td width="103">
     <p class="ne-p" id="uc7f36b48">
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T315
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T317
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="685">
     <p class="ne-p" id="uc33e6fa1">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183792" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183792" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX303)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183793" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183793" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX304)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u4dde19ea">
      <span class="ne-text">
       T315
      </span>
     </p>
    </td>
    <td width="512">
     <p class="ne-p" id="u756ac92d">
      <span class="ne-text">
       掌握问号表达式的用法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc8c134f4">
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T314
       </span>
      </a>
     </p>
    </td>
    <td width="103">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="685">
     <p class="ne-p" id="uac28b809">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u1762a75c">
      <span class="ne-text">
       T316
      </span>
     </p>
    </td>
    <td width="512">
     <p class="ne-p" id="ue0bbed50">
      <span class="ne-text">
       在进行0或非0判断时，不需要写关系表达式，见代码3.4
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue9313b1e">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#iAVWo" href="ch2#iAVWo">
       <span class="ne-text">
        T244
       </span>
      </a>
     </p>
    </td>
    <td width="103">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="685">
     <p class="ne-p" id="uab87cc75">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="sEstw">
  <span class="ne-text">
   1.3 多分支控制
  </span>
 </h2>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="e5syw"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>if(条件1)
{    语句块1;   }
else if(条件2)
{    语句块2;   }
else
{    语句块3;   }</code></pre>
 <p class="ne-p" id="u7c78a62b" style="text-indent: 2em">
  <span class="ne-text">
   如果条件1成立，则执行语句块1，否则执行条件2的判断，如果条件2成立，执行语句块2，否则执行语句块3。必然有一个分支要被执行。
  </span>
 </p>
 <div class="ne-quote">
  <ul class="ne-ul">
   <li id="ud83356bf">
    <span class="ne-text" style="font-size: 16px">
     else具有隐含条件，第3行的else表示条件1不成立，第5行的else表示条件1和条件2都不成立。因此不要在条件2中去判断条件1不成立，因为一旦执行到第4-6行，表示条件1肯定是不成立的，不需要判断。
    </span>
   </li>
   <li id="uffe59a39">
    <span class="ne-text" style="font-size: 16px">
     C/C++提供switch结构进行多分支，但是其执行效率与else
                    if的多分支相同，不建议使用switch。
    </span>
   </li>
  </ul>
 </div>
 <h3 id="Et82p">
  <span class="ne-text">
   例题3.4
  </span>
 </h3>
 <p class="ne-p" id="ufe1b5209" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   编写一个程序，根据用户输入的期末考试成绩，输出相应的成绩评定信息。成绩大于等于90分输出“优”；成绩大于等于80分小于90分输出“良”；成绩大于等于60分小于80分输出“中”；成绩小于60分输出“差”。
  </span>
 </p>
 <table border=1 class="ne-table" id="u1HFf" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ucc3badb1">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ubacc488d">
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
     <p class="ne-p" id="u6dd4e459">
      <span class="ne-text">
       83
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u6e0fcedf">
      <span class="ne-text">
       良
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="hJnZX"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int score;
    cin&gt;&gt;score;
    int grade=score/10;
    if(grade&gt;=9)
        cout&lt;&lt;"优"&lt;&lt;endl;
    else if(grade==8)			//建议写成if(8==grade)
        cout&lt;&lt;"良"&lt;&lt;endl;
    else if(grade&gt;=6)			//不需要写成if(grade&lt;8 &amp;&amp; grade&gt;=6)
        cout&lt;&lt;"中"&lt;&lt;endl;
    else
        cout&lt;&lt;"差"&lt;&lt;endl;
}</code></pre>
 <ul class="ne-ul">
  <li id="ud3be1750">
   <span class="ne-text" style="font-size: 16px">
    这里用到了整除特性，将百分制转换为10个区间，然后用多分支划分为5个区域。
   </span>
  </li>
  <li id="uc18ea3ee">
   <span class="ne-text" style="font-size: 16px">
    第10行的
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     ==
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    如果误写为
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     =
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，则程序流程为先将
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     grade
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    赋值为8，然后判断
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     grade
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    的布尔值。因为8为非零数，总是代表
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     true
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，所以全部小于90的分数都会被输出良好。因此要特别注意
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     ==
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     =
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    的区别。
   </span>
  </li>
  <li id="uba3424b2">
   <span class="ne-text" style="font-size: 16px">
    当判断变量和常量是否相等时，建议把常量写在左侧，如果
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     ==
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    被误写为
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     =
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，程序编译时会报错，因为常量不能被赋值。
   </span>
  </li>
 </ul>
 <div class="ne-quote">
  <p class="ne-p" id="u737ac1ea">
   <span class="ne-text" style="font-size: 16px">
    当进行多分支判断时，要注意条件的判断顺序，遵循先特殊后一般的原则。例如判断一个三角形的类型，划分为5个类别：1）锐角三角形；2）直角三角形；3）钝角三角形；4）等腰三角形；5）等边三角形。如果按照题目陈述顺序判断，最后两个条件永远也用不到。按照先特殊后一般的准则，正确判断顺序应该为5）4）3）2）1）。这样才能得到正确的答案。
   </span>
  </p>
 </div>
 <h3 id="rVM6q">
  <span class="ne-text">
   知识点：T317-T318
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
    <td width="513">
     <p class="ne-p" id="ub55df1f0" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="94">
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
    <td rowspan="2" width="58">
     <p class="ne-p" id="u4813d1b9">
      <span class="ne-text">
       T317
      </span>
     </p>
    </td>
    <td width="513">
     <p class="ne-p" id="u7a96bbc3">
      <span class="ne-text">
       掌握多分支条件语句的基本写法，特别注意else的隐含条件，不要重复书写。见代码3.6中的第10行。
      </span>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u47040d9f">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#bqzYv" href="ch2#bqzYv">
       <span class="ne-text">
        T261
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T314
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u7c7938c0">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="674">
     <p class="ne-p" id="ucca1d6fa">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uda76e410">
      <span class="ne-text">
       T318
      </span>
     </p>
    </td>
    <td width="513">
     <p class="ne-p" id="ube37ae85">
      <span class="ne-text">
       在进行多分支判断时，要遵循先特殊后一般的顺序
      </span>
     </p>
    </td>
    <td width="94">
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="674">
     <p class="ne-p" id="u5b8f12dd">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="UGzTz">
  <span class="ne-text">
   1.4 分支嵌套
  </span>
 </h2>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="N9yLr"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>if(条件1)
{    
    if(条件2)
    {    语句块2;   }  
    else
    {    语句块3;   }
}
else
{    语句块4;   }</code></pre>
 <ul class="ne-ul">
  <li id="u9c34260d">
   <span class="ne-text" style="font-size: 16px">
    每个else 部分总是与它前面最近的那个缺少对应的 else 部分的 if
                语句配对。
   </span>
  </li>
  <li id="ufd4b3c66">
   <span class="ne-text" style="font-size: 16px">
    建议使用大括号避免二义性。
   </span>
  </li>
 </ul>
 <h3 id="LAKGx">
  <span class="ne-text">
   例题3.5
  </span>
 </h3>
 <p class="ne-p" id="uad990555" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   将例题3.4改写为分支嵌套结构。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="xkFp8"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int score;
    cin&gt;&gt;score;
    if(score&gt;=60)
    {
        if(score&lt;70)
            cout&lt;&lt;"及格"&lt;&lt;endl;
        else if(score&lt;80)
        {    cout&lt;&lt;"一般"&lt;&lt;endl;	}
        else if(score&lt;90)
        {    cout&lt;&lt;"良好"&lt;&lt;endl;	}
        else
        {    cout&lt;&lt;"优秀"&lt;&lt;endl;	}
    }
    else
    {    cout&lt;&lt;"不及格"&lt;&lt;endl;	}
}</code></pre>
 <ul class="ne-ul">
  <li id="ud9ef211e">
   <span class="ne-text" style="font-size: 16px">
    以第11行为例，不要将其写成
   </span>
   <code class="ne-code">
    <span class="ne-text">
     else if(score&gt;=70 &amp;&amp; score&lt;80)
    </span>
   </code>
   <span class="ne-text">
    ，这里的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     else
    </span>
   </code>
   <span class="ne-text">
    代表的含义就是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     score&gt;=70
    </span>
   </code>
   <span class="ne-text">
    ，不需要重复表达。
   </span>
  </li>
  <li id="链接df">
   <span class="ne-text">
    每个if或else可以接一条简单语句（第10行）或一条复合语句（第12,14,16,19行），复合语句即将多条语句用大括号包含到一起。对于初学者，建议即使是简单语句，也采用复合语句的形式编写代码，减少犯错概率。
   </span>
  </li>
 </ul>
 <h3 id="shJF7">
  <span class="ne-text">
   知识点：T319
  </span>
 </h3>
 <table border=1 class="ne-table" id="BBzxw" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u7f46a344">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u740c940a" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue01922b6">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="udaec95f4">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u487f0a74">
      <span class="ne-text">
       T319
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u58d0930d">
      <span class="ne-text">
       掌握嵌套结构的写法，尽量全部使用复合语句
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uea6e9b8f">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u70d3a523">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ua8093131">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="W50rR">
  <span class="ne-text">
   2. 分支程序优化
  </span>
 </h1>
 <p class="ne-p" id="u8fdc33fa" style="text-indent: 2em">
  <span class="ne-text">
   程序设计是一种思维训练，每个程序都尽量的进行优化，这样可以锻炼思维，让程序达到最优。以两个样例探讨分支程序的优化。
  </span>
 </p>
 <h2 id="E0Ldj">
  <span class="ne-text">
   2.1 三天打鱼两天晒网
  </span>
 </h2>
 <h3 id="ep25S">
  <span class="ne-text">
   例题3.6
  </span>
 </h3>
 <p class="ne-p" id="ud6dedded" style="text-indent: 2em">
  <span class="ne-text">
   中国有句俗语叫“三天打鱼两天晒网”。假设某人从某天起，开始三天打鱼两天晒网”，问这个人在以后的第N天中是"打鱼“还是晒网”?
  </span>
 </p>
 <p class="ne-p" id="u6fc382a6">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u8d0c2ac8">
  <span class="ne-text">
   输入在一行中给出1个不超过1000的正整数N。
  </span>
 </p>
 <p class="ne-p" id="链接1a">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="ue78512f6">
  <span class="ne-text">
   在一行中输出此人在第N天中是'Fishing" (打鱼")还是“Drying"
            (晒网")，并且输出"on day N"。
  </span>
 </p>
 <table border=1 class="ne-table" id="nEvJw" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u6da9bbb9">
      <strong>
       <span class="ne-text">
        样例输入1
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ueb43cb3f">
      <strong>
       <span class="ne-text">
        样例输出1
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u886c4ab0">
      <span class="ne-text">
       103
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u385aee4c">
      <span class="ne-text">
       Fishing on day 103
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ub807b044">
      <strong>
       <span class="ne-text">
        样例输入2
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uf26f86f5">
      <strong>
       <span class="ne-text">
        样例输出2
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uc741f84b">
      <span class="ne-text">
       34
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uf00ed72d">
      <span class="ne-text">
       Drying on day 34
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u2a8359fe">
  <span class="ne-text">
   【问题分析】第1-3天打鱼，第4-5天晒网，然后不断循环这个过程。这种数据的周期性最适合用取模运算进行解决。因此有了第一个解决方案：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="S7tJo"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int day;
    cin&gt;&gt;day;
    if (day%5==1||day%5==2||day%5==3)
        cout&lt;&lt;"Fishing on day "&lt;&lt;day&lt;&lt;endl;
    else
        cout&lt;&lt;"Drying on day "&lt;&lt;day&lt;&lt;endl;
    return 0;
}</code></pre>
 <p class="ne-p" id="u2bb38c93" style="text-indent: 2em">
  <span class="ne-text">
   考虑晒网的天数少，可以书写上减少一个条件，因此第7-10行可以改写为：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="liFMr"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>if (day%5==4||day%5==0)
    cout&lt;&lt;"Drying on day "&lt;&lt;day&lt;&lt;endl;
else
    cout&lt;&lt;"Fishing on day "&lt;&lt;day&lt;&lt;endl;</code></pre>
 <p class="ne-p" id="uf5a1839f" style="text-indent: 2em">
  <span class="ne-text">
   连续数字可以用范围表示，但是0和4在这个范围的两侧，不好归结。这时就可以考虑数学变换。第7-10行可以改写为：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="vc33g"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>if ((day-1)%5&lt;3)
    cout&lt;&lt;"Fishing on day "&lt;&lt;day&lt;&lt;endl;
else
    cout&lt;&lt;"Drying on day "&lt;&lt;day&lt;&lt;endl;</code></pre>
 <p class="ne-p" id="u24a9173c">
  <span class="ne-text">
   最后，还可以用问号表达式进行书写优化。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="qSvxd"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>cout&lt;&lt;((day-1)%5&lt;3?"Fishing":"Drying")&lt;&lt;" on day "&lt;&lt;day&lt;&lt;endl;</code></pre>
 <h2 id="dPcmG">
  <span class="ne-text">
   2.2 虫子吃苹果
  </span>
 </h2>
 <p class="ne-p" id="u7d5db9fb">
  <strong>
   <span class="ne-text">
    例题3.7
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u521afedb" style="text-indent: 2em">
  <span class="ne-text">
   你买了一箱n个苹果，很不幸的是买完时箱子里混进了一条虫子。虫子每x小时能吃掉一个苹果假设虫子在吃完一个苹果之前不会吃另 一个,那么经过y小时你还有多少个完整的苹果?
  </span>
 </p>
 <p class="ne-p" id="u180aade9">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u0b0b1d04">
  <span class="ne-text">
   输入仅一行，包括n, x和y (均为整数)
  </span>
 </p>
 <p class="ne-p" id="ue239384c">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="ufe37d442">
  <span class="ne-text">
   输出仅一行，剩下的苹果个数
  </span>
 </p>
 <table border=1 class="ne-table" id="WgEan" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4db6ff26">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u23a9f107">
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
     <p class="ne-p" id="u76e6467a">
      <span class="ne-text">
       10 4 9
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4127f9fe">
      <span class="ne-text">
       7
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="zTOGb"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int n,x,y;
    cin&gt;&gt;n&gt;&gt;x&gt;&gt;y;
    if (y%x==0)
        cout&lt;&lt;(n-y/x)&lt;&lt;endl;
    else
        cout&lt;&lt;(n-y/x-1)&lt;&lt;endl;
    return 0;
}</code></pre>
 <p class="ne-p" id="ubb13daf5">
  <span class="ne-text">
   程序思想非常简单，如果y是x的倍数，则直接得到结果，否则需要多减一天。这里实际上是一种向上取整的方法，可以通过数学进行优化。因为x和y都是整数，所以最小的差距是1。如果在y的基础上增加x-1，那么只要有余数，被吃掉苹果的数量就会加1，如果正好整除，x-1会被整除操作自动舍弃。以下代码优化后去掉了分支操作。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="HRRSA"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    int n,x,y;
    cin&gt;&gt;n&gt;&gt;x&gt;&gt;y;
    cout&lt;&lt;(n-(y+x-1)/x)&lt;&lt;endl;
    return 0;
}</code></pre>
 <p class="ne-p" id="u5d333cf2">
  <span class="ne-text">
   C/C++中提供了ceil函数进行向上取整。书写上比数学方法麻烦，但是更容易理解。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="COQ36"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
#include&lt;cmath&gt;							//支持ceil函数的定义
using namespace std;
int main()
{
    int n,x,y;
    cin&gt;&gt;n&gt;&gt;x&gt;&gt;y;
    cout&lt;&lt;(n-ceil(y/(float)x))&lt;&lt;endl;	//通过强制类型转换，把整除改为浮点数除法
    return 0;
}</code></pre>
 <p class="ne-p" id="u5a473cfe">
  <span class="ne-text">
   总而言之，可以通过语法、数学方法或库函数对程序进行优化。
  </span>
 </p>
 <h3 id="DJ77U">
  <span class="ne-text">
   知识点：T321
  </span>
 </h3>
 <table border=1 class="ne-table" id="weZX3" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u510cb6eb">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u57b3488e" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf6faf2f8">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ua02245fa">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ud02e81a0">
      <span class="ne-text">
       T321
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u6df4109c">
      <span class="ne-text">
       优化是程序员不断追求的目标，既可以锻炼思维逻辑，又可以减小出错概率。简单的书写优化可以通过语法、数学方法或库函数进行
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u640b54ea">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#GYNKe" href="ch2#GYNKe">
       <span class="ne-text">
        T291
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u014d2f3b">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u1e1f5fb2">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u33713e48">
      <span class="ne-text">
       T322
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc7825bec">
      <span class="ne-text">
       掌握对数值进行向上取整的方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4841e244">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#f8WvB" href="ch2#f8WvB">
       <span class="ne-text">
        T256
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
 <h1 id="Dhxl5">
  <span class="ne-text">
   3. 自定义函数
  </span>
 </h1>
 <h2 id="Lj7tb">
  <span class="ne-text">
   3.1 函数定义
  </span>
 </h2>
 <p class="ne-p" id="u0e99b15a" style="text-indent: 2em">
  <span class="ne-text">
   从之前使用的库函数可以知道，一个功能独立的函数，可以被一次定义，多次执行。使程序的逻辑更加清晰，代码具有较高的可读性。函数是对一个独立功能的封装，这也是英文单词function同时具有函数和功能两个意思的原因。函数每次执行时可以输入不同的参数，从而得到不同的结果，因此可以把函数看做一个黑盒子。函数包括多条语句，完成了一个独立的功能，是对一个行为的封装。除了C/C++中提供的库函数外，也可以自行定义函数。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="G8yyS"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>函数类型  函数名(参数声明列表）
{ 
  语句块
  return 返回值;
}</code></pre>
 <ul class="ne-ul">
  <li id="uef0baa88">
   <span class="ne-text">
    函数类型：函数返回值的数据类型，如int，char；若没有返回值，类型应为void。
   </span>
  </li>
  <li id="uece86fb3">
   <span class="ne-text" style="font-size: 16px">
    函数类型与第4行return返回值相对应，函数类型就是返回值的数据类型。
   </span>
   <span class="ne-text">
    一个函数只能有一个返回值，函数类型就是这个唯一返回值的数据类型。
   </span>
  </li>
  <li id="链接18">
   <span class="ne-text">
    函数名是调用这个函数的唯一标识。
   </span>
  </li>
  <li id="ua5904b23">
   <span class="ne-text">
    参数声明列表
   </span>
   <span class="ne-text" style="font-size: 16px">
    用逗号分隔的一组变量说明，形式：
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     类型 参数1, 类型 参数2, …
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，
   </span>
   <span class="ne-text">
    其中有0个或多个参数，
   </span>
   <span class="ne-text" style="font-size: 16px">
    每个参数前的数据类型都要写。如果没有参数列表，成为无参函数。
   </span>
  </li>
  <li id="uef672e8d">
   <span class="ne-text" style="font-size: 16px">
    第1行称为函数头，第2-5行称为函数体。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="uYFPU"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

int my_max(int x,int y)
{
    int z;
    z = x &gt; y ? x : y;
    return z;
}

int main()
{
    int a,b;
    cin&gt;&gt;a&gt;&gt;b;
    cout&lt;&lt;my_max(a,b)&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="RefkG" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接a1">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua5413ccd">
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
     <p class="ne-p" id="u0432a7d2">
      <span class="ne-text">
       7 9
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5f061874">
      <span class="ne-text">
       9
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u5080a64b">
   <span class="ne-text" style="font-size: 16px">
    第4-9行称为函数定义，第15行称为函数调用。
   </span>
  </li>
  <li id="uc7f132b6">
   <span class="ne-text" style="font-size: 16px">
    定义时使用的参数称为形参，例如x, y。调用时使用的参数称为实参，例如a, b。
   </span>
  </li>
  <li id="ud442ca87">
   <span class="ne-text" style="font-size: 16px">
    形参的每个参数的数据类型都要写，实参不能写数据类型。
   </span>
  </li>
  <li id="uda6b49f0">
   <span class="ne-text" style="font-size: 16px">
    执行第15行时，对应实参对形参进行赋值。即a对x赋值，b对y赋值。
   </span>
  </li>
  <li id="ufd22bfb6">
   <span class="ne-text" style="font-size: 16px">
    实参和形参的数量、顺序和对应参数的数据类型必须相同。
   </span>
  </li>
  <li id="u2c6b78ff">
   <span class="ne-text" style="font-size: 16px">
    第15行函数调用结束后，将函数的返回值按照函数类型返回给main函数并进行输出。
   </span>
  </li>
 </ul>
 <h3 id="VKSK4">
  <span class="ne-text">
   知识点：T331
  </span>
 </h3>
 <table border=1 class="ne-table" id="yWCiW" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u58a9c099">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u69fd703c" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc441aa3c">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u215d669f">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ubdeb22eb">
      <span class="ne-text">
       T331
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u33a4bdb3">
      <span class="ne-text">
       掌握函数定义的基本写法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u139e2d45">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue7c4b3b6">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="uda2da936">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183801" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183801" target="_blank">
       <span class="ne-text">
        (LX312)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183802" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183802" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX313)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="GbqQA">
  <span class="ne-text">
   3.2 函数执行顺序
  </span>
 </h2>
 <p class="ne-p" id="ue8f3ae69" style="text-indent: 2em">
  <span class="ne-text">
   一个C/C++程序可以由一个或多个源程序文件组成，一个C/C++源程序文件可以由一个或多个函数组成（第三章）。但一个C/C++程序中，有且仅有一个主函数main，它是一个程序的起点。
  </span>
  <span class="ne-text" style="font-size: 16px">
   程序从main函数的第一条语句开始执行，到main函数的最后一条语句执行完结束。
  </span>
 </p>
 <img id="JsTK6" src="../assets/images/1657520478689-150bed2a-f94f-41cd-b103-5fc06a1e197e.jpeg" class="img-70"/>
 <p class="ne-p" id="u3dccc9df" style="text-align: center">
  <span class="ne-text" style="font-size: 16px">
   图3.1
            C/C++的文件组织结构
  </span>
 </p>
 <p class="ne-p" id="u48513a46" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   函数定义用于向编译器解释函数的接口和实现，并不会导致函数被执行。一个函数是否被执行，由其是否被main函数直接或间接调用决定。当调用一个函数时，所有当前信息会被保存，包括当前执行的语句的位置。然后用实参对形参进行赋值开，始执行被调用的函数。函数执行结束后，返回到之前的调用点，返回值被传递给调用者。
  </span>
 </p>
 <img id="WWshN" src="../assets/images/1657423712180-c1b678f3-534e-48f6-931f-5be75e334826.jpeg" class="img-70"/>
 <p class="ne-p" id="u1a173132" style="text-align: center">
  <span class="ne-text" style="font-size: 16px">
   图3.2
            函数执行顺序示意图
  </span>
 </p>
 <h3 id="TweCk">
  <span class="ne-text">
   知识点：T332
  </span>
 </h3>
 <table border=1 class="ne-table" id="bGZEM" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u2f598113">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u4ed58996" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u8a1a4408">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uacb2ce8d">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u9d58a539">
      <span class="ne-text">
       T332
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u4b422739">
      <span class="ne-text">
       掌握函数的执行顺序
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub9f1fad5">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u3c1ba2d9">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#BRLYJ" href="ch4#BRLYJ">
       <span class="ne-text">
        T462
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="QllUH">
  <span class="ne-text">
   3.3 函数声明
  </span>
 </h2>
 <p class="ne-p" id="u6b48b11c" style="text-indent: 2em">
  <span class="ne-text">
   在程序中调用函数应遵循“
  </span>
  <strong>
   <span class="ne-text">
    先定义后使用
   </span>
  </strong>
  <span class="ne-text">
   ”的原则，即被调函数的定义要出现在主调函数的定义之前，
  </span>
  <span class="ne-text" style="font-size: 16px">
   与
  </span>
  <strong>
   <span class="ne-text" style="font-size: 16px">
    变量必须先定义后使用
   </span>
  </strong>
  <span class="ne-text" style="font-size: 16px">
   一样。也可以采用声明的方式改变顺序，如下所示：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="mwbwX"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

int my_max(int x,int y);

int main()
{
    int a,b;
    cin&gt;&gt;a&gt;&gt;b;
    int ret = my_max(a,b);
    cout&lt;&lt;ret&lt;&lt;endl;
    return 0;
}

int my_max(int x,int y)
{
    int z;
    z = x &gt; y ? x : y;
    return z;
}</code></pre>
 <p class="ne-p" id="u4b9b9136" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   第4行称为函数声明，可以简单地将第15行的函数头复制一遍，并以
  </span>
  <code class="ne-code">
   <span class="ne-text" style="font-size: 16px">
    ;
   </span>
  </code>
  <span class="ne-text" style="font-size: 16px">
   结束，如果有函数声明，那么函数定义可以出现在程序的任何地方。实际上，每个库函数在使用前，必须包括对应的头文件。头文件中就包含了函数的定义或声明。
  </span>
 </p>
 <p class="ne-p" id="ua371db40" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   对于库函数，官方文档
  </span>
  <a class="ne-link" data-href="https://cplusplus.com/reference/cmath/" href="https://cplusplus.com/reference/cmath/" target="_blank">
   <span class="ne-text">
    https://cplusplus.com/reference/
   </span>
  </a>
  <span class="ne-text" style="font-size: 16px">
   中给出的全部是函数声明，需要掌握通过官方文档给出的函数声明，了解一个库函数的使用方法。
  </span>
 </p>
 <h3 id="oh0W5">
  <span class="ne-text">
   例题3.8
  </span>
 </h3>
 <p class="ne-p" id="u0145a265" style="text-indent: 2em">
  <span class="ne-text">
   对下面问题，分析已知条件和结果，写出函数声明
  </span>
 </p>
 <ul class="ne-ul">
  <li id="ub6182ad6">
   <span class="ne-text">
    求两个实数的和。
   </span>
  </li>
  <li id="uf80c2731">
   <span class="ne-text">
    求两个整数的最大公约数。
   </span>
  </li>
  <li id="u03fed068">
   <span class="ne-text">
    判断任一个正整数n是否为素数。
   </span>
  </li>
  <li id="u94e16ad5">
   <span class="ne-text">
    在一行中输出指定个数的星号（*）
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="utgbk"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>float sum(float x, float y);
int   common_divisor(int m, int n);
int   prime(int n);
void  print_star(int n);</code></pre>
 <ul class="ne-ul">
  <li id="u60ddedba">
   <span class="ne-text">
    第一个问题要求输入两个实数，因此设定两个浮点数类型的形参；要求得到两个实数的和，该和也应该是实数类型，因此函数的返回类型也为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     float
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
  <li id="链接3f">
   <span class="ne-text">
    第四个问题要求打印，不需要任何返回，因此函数类型设置为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     void
    </span>
   </code>
   <span class="ne-text">
    ，表示不需要返回值。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="UmQCE"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>void  print_star(int n)
{
    cout&lt;&lt;"*******************"&lt;&lt;endl;
    return;								//因为没有返回值，所以此行语句可以省略不写。
}</code></pre>
 <h3 id="Qiv4p">
  <span class="ne-text">
   知识点：T333
  </span>
 </h3>
 <table border=1 class="ne-table" id="lqpcu" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u07cee916">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc0082b85" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u13fddf7d">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u01273ab3">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uef4bc58b">
      <span class="ne-text">
       T333
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="链接88">
      <span class="ne-text">
       掌握函数声明的基本写法，掌握通过查阅官方文档掌握一个库函数的使用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="链接2b">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue78094b5">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u7fa4c6cf">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="h8x7U">
  <span class="ne-text">
   3.4 函数返回值
  </span>
 </h2>
 <p class="ne-p" id="ud900e716" style="text-indent: 2em">
  <span class="ne-text">
   函数类型决定了函数返回值的类型，函数的返回值通过return语句返回。return的作用是
  </span>
  <span class="ne-text" style="font-size: 16px">
   终止函数运行，返回调用者，若有返回值，将返回值传递给调用者。return可以采用以下形式：
  </span>
 </p>
 <table border=1 class="ne-table" id="R1JJl" style="text-align:center" align="center">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uaf2a4546">
      <span class="ne-text">
       return (表达式)；
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接a6">
      <span class="ne-text">
       表达式结果类型与函数类型相同
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u83b9d191">
      <span class="ne-text">
       return 表达式；
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u156bf5e6">
      <span class="ne-text">
       表达式结果类型与函数类型相同
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uc8b42fb0">
      <span class="ne-text">
       return ；
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u42d5a780">
      <span class="ne-text">
       对应void函数类型
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="uc955bf96" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   一个函数只能有一个返回值，但可以有多个return。因为return会终止当前函数，所以即使一个函数有多个return，也只是有一个返回值。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="m0NVB"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>float max(float x, float y)
{   
    if(x &gt; y)  return x ;
    else  return y ;
}</code></pre>
 <p class="ne-p" id="u4a9b27b7" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   以上代码可以简化为：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="nbPKb"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>float max(float x, float y)
{	
    return (x &gt; y) ? x:y;
}</code></pre>
 <p class="ne-p" id="u74ce030d" style="text-indent: 2em">
  <span class="ne-text">
   当return语句中表达式的类型和函数返回值的类型不匹配时，会发生
  </span>
  <strong>
   <span class="ne-text">
    隐式类型转换
   </span>
  </strong>
  <span class="ne-text">
   。函数的返回值转换为函数类型指定的数据类型。
  </span>
 </p>
 <h3 id="chBU6">
  <span class="ne-text">
   知识点：T334
  </span>
 </h3>
 <table border=1 class="ne-table" id="jtLPz" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u13e0fd49">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u481a4f7d" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u9fa2271b">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ucf9280d4">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u702e0ded">
      <span class="ne-text">
       T334
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u074be74b">
      <span class="ne-text">
       掌握函数类型和函数返回值，return可以有多个，但是只有一个被执行。当返回值与函数类型不一致时，会发生隐式类型转换。
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u718bc646">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u0212bfbc">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#BRLYJ" href="ch4#BRLYJ">
       <span class="ne-text">
        T462
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="uceffaae3">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183803" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183803" target="_blank">
       <span class="ne-text">
        (LX314)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183806" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183806" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX315)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="WNcth">
  <span class="ne-text">
   3.5 变量的作用域
  </span>
 </h2>
 <p class="ne-p" id="u16df0867" style="text-indent: 2em">
  <span class="ne-text">
   变量的作用域指变量有效的范围。表现为有些变量有的可以在整个程序范围内引用（全局变量），有的则只能在局部范围内引用（局部变量）。C/C++中用大括号定义一个代码块，代码块可以层级嵌套。
  </span>
  <span class="ne-text" style="font-size: 16px">
   每个局部变量只在定义它的那个大括号内生效，如果不在任何大括号里，即为全局变量。在同一个层级里，一个变量名称只能使用一次，但是在不同层级里，变量名称可以相同。当不同作用范围的同名变量发生冲突时，以作用范围最小的变量为准。函数的参数是属于该函数的局部变量。一个局部变量脱离了它的作用域，就会被自动释放内存，不能再被使用。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="WSrRU"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

int a=9;						//全局变量a
void f(int a)					//属于函数f的局部变量a
{
    a=5;						//第5行定义的参数a
    {
        a++;					//第5行定义的参数a
        cout&lt;&lt;a&lt;&lt;endl;			//第5行定义的参数a
        int a=1;				//只属于第8-13行的代码块，从本行开始生效
        cout&lt;&lt;a&lt;&lt;endl;			//第11行定义的a
    }
    cout&lt;&lt;a&lt;&lt;endl;				//第5行定义的参数a
}
int main()
{
    cout&lt;&lt;a&lt;&lt;endl;				//全局变量a
    int a=7;					//main函数中定义的局部变量a
    cout&lt;&lt;a&lt;&lt;endl;				//第19行定义的a
    f(a);						//第19行定义的a
    cout&lt;&lt;a&lt;&lt;endl;				//第19行定义的a
}</code></pre>
 <table border=1 class="ne-table" id="oy7KM" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u7ee9b4ea">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4a9b3027">
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
     <p class="ne-p" id="u6ea1d985">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc92ad3c3">
      <span class="ne-text">
       9
      </span>
     </p>
     <p class="ne-p" id="u3589edbc">
      <span class="ne-text">
       7
      </span>
     </p>
     <p class="ne-p" id="u019afdd4">
      <span class="ne-text">
       6
      </span>
     </p>
     <p class="ne-p" id="u6bfdbcd0">
      <span class="ne-text">
       1
      </span>
     </p>
     <p class="ne-p" id="uc55b9474">
      <span class="ne-text">
       6
      </span>
     </p>
     <p class="ne-p" id="ufaf2e51c">
      <span class="ne-text">
       7
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u3f6c98ea">
   <span class="ne-text">
    程序从第18行开始执行，此时只有一个全局变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    生效，因此输出9。
   </span>
  </li>
  <li id="u97dc5c20">
   <span class="ne-text">
    第20行存在两个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，全局变量和第19行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     main
    </span>
   </code>
   <span class="ne-text">
    函数中的局部变量a，局部变量的作用域更小，因此局部变量生效，输出结果为7。
   </span>
  </li>
  <li id="uc7800e5e">
   <span class="ne-text">
    第21行开始转入函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     f
    </span>
   </code>
   <span class="ne-text">
    执行，用第19行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，对第5行定义的形参
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    进行赋值。
   </span>
  </li>
  <li id="u8ca86f9a">
   <span class="ne-text">
    第19行的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     main
    </span>
   </code>
   <span class="ne-text">
    函数的局部变量，它在函数f的执行过程中是完全不可见的。
   </span>
  </li>
  <li id="u7e0988b2">
   <span class="ne-text">
    第9-10行存在两个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，全局变量和第5行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     f
    </span>
   </code>
   <span class="ne-text">
    函数中的局部变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，局部变量的作用域更小，因此局部变量生效，输出结果为6。
   </span>
  </li>
  <li id="u12ccac6f">
   <span class="ne-text">
    第12行存在三个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，全局变量、第5行定义的f函数中的局部变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    、第11行定义的代码块中的
   </span>
   <code class="ne-code">
   </code>
   <span class="ne-text">
    a，第11行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    作用域最小，从第11行开始生效，输出结果为1。
   </span>
  </li>
  <li id="uc14fe169">
   <span class="ne-text">
    执行到14行时，第11行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    已经失效，不再其作用，因此这里的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    是第5行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，经过第7和9行的处理后，值为6。
   </span>
  </li>
  <li id="ud4866e0d">
   <span class="ne-text">
    函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     f
    </span>
   </code>
   <span class="ne-text">
    执行结束，返回到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     main
    </span>
   </code>
   <span class="ne-text">
    函数的第22行，此时
   </span>
   <code class="ne-code">
    <span class="ne-text">
     f
    </span>
   </code>
   <span class="ne-text">
    函数中定义的所有
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    都失效了，因此使用的是19行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，其值为7。
   </span>
  </li>
 </ul>
 <h3 id="AlX1z">
  <span class="ne-text">
   知识点：T335
  </span>
 </h3>
 <table border=1 class="ne-table" id="zoyO8" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uf9447bdd">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="496">
     <p class="ne-p" id="u731fa33a" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u1336fe59">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="110">
     <p class="ne-p" id="ufd15dc67">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ucccb44b0">
      <span class="ne-text">
       T335
      </span>
     </p>
    </td>
    <td width="496">
     <p class="ne-p" id="u434a92fb">
      <span class="ne-text">
       掌握变量的作用域
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u1a74d108">
      <br/>
     </p>
    </td>
    <td width="110">
     <p class="ne-p" id="u60fade8a">
      <a class="ne-link" data-href="#QAfJZ" href="#QAfJZ">
       <span class="ne-text">
        T341
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/dky80n#Z9DBN" href="ch7#Z9DBN">
       <span class="ne-text">
        T781
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="G7cJ2">
  <span class="ne-text">
   3.6 参数传递和引用
  </span>
 </h2>
 <p class="ne-p" id="ucf3bd0ee" style="text-indent: 2em">
  <span class="ne-text">
   实参是定义在调用函数范围内的变量，形参是定义在被调用函数中的局部变量。实参与形参必须在数量、顺序、类型上完全匹配。当实参与形参的类型不匹配时，会发生
  </span>
  <strong>
   <span class="ne-text">
    隐式类型转换
   </span>
  </strong>
  <span class="ne-text">
   ，函数中按照形参的类型进行计算。如果不能发生隐式类型转换，将会出现语法错误。
  </span>
 </p>
 <p class="ne-p" id="u92507b7f" style="text-indent: 2em">
  <span class="ne-text">
   除了在调用时，实参对形参有一次赋值操作外，二者在定义或存储空间等其他方面没有任何交集。因此形参的改变不会影响实参。这种方式被称为传值方式。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="a5amW"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

void my_swap ( int  x, int y )
{
    int  temp = x;
    x = y;
    y = temp;
    cout&lt;&lt;"x="&lt;&lt;x&lt;&lt;" y="&lt;&lt;y&lt;&lt;endl;
}
int main (  )
{
    int a, b;
    cin&gt;&gt;a&gt;&gt;b;
    my_swap(a, b);
    cout&lt;&lt;"a="&lt;&lt;a&lt;&lt;" b="&lt;&lt;b&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="KXcFh" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ubaec865d">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1b5c4907">
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
     <p class="ne-p" id="uac2722f4">
      <span class="ne-text">
       3 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua127b29b">
      <span class="ne-text">
       x=5 y=3
      </span>
     </p>
     <p class="ne-p" id="u291b8865">
      <span class="ne-text">
       a=3 b=5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u07a81b87" style="text-indent: 2em">
  <span class="ne-text">
   第15行函数调用时，用a对x赋值，用b对y赋值，此后a,b和x,y就没有任何关系了。第9行输出中看到x和y被交换了，但是a和b还是保持原来的状态。归根结底，a,b和x,y在存储空间上是完全不相关的。
  </span>
 </p>
 <p class="ne-p" id="ubd50453d" style="text-indent: 2em">
  <span class="ne-text">
   如果希望通过函数交换实参，就需要使用新的概念——引用。语法上在定义变量时，在其前面加一个&amp;符号。它表示新的变量与原有变量共享存储空间，是对原有变量存储空间增加了一个新的变量名称。一个存储空间同时有两个名字。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Z6S5Q"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

void ref_swap ( int  &amp;x, int &amp;y)	//注意这里的参数是引用形式。
{
    int  temp = x;
    x = y;
    y = temp;
    cout&lt;&lt;"x="&lt;&lt;x&lt;&lt;" y="&lt;&lt;y&lt;&lt;endl;
}
int main (  )
{
    int a, b;
    cin&gt;&gt;a&gt;&gt;b;
    ref_swap(a, b);
    cout&lt;&lt;"a="&lt;&lt;a&lt;&lt;" b="&lt;&lt;b&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="lB0jP" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ueef96383">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc7c9c639">
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
     <p class="ne-p" id="ub8accd82">
      <span class="ne-text">
       3 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u668f23e8">
      <span class="ne-text">
       x=5 y=3
      </span>
     </p>
     <p class="ne-p" id="u269cda0f">
      <span class="ne-text">
       a=5 b=3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="ua574ee1a" style="text-indent: 2em">
  <span class="ne-text">
   第4行的引用表示
  </span>
  <code class="ne-code">
   <span class="ne-text">
    x
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   指向了同一个存储空间，
  </span>
  <code class="ne-code">
   <span class="ne-text">
    y
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    b
   </span>
  </code>
  <span class="ne-text">
   指向了同一个存储空间，对
  </span>
  <code class="ne-code">
   <span class="ne-text">
    x
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    y
   </span>
  </code>
  <span class="ne-text">
   的修改，其实就是对
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    b
   </span>
  </code>
  <span class="ne-text">
   的修改。第6-8行交换了形参
  </span>
  <code class="ne-code">
   <span class="ne-text">
    x
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    y
   </span>
  </code>
  <span class="ne-text">
   的值，因此实参
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    b
   </span>
  </code>
  <span class="ne-text">
   也被交换了。
  </span>
 </p>
 <p class="ne-p" id="链接d2" style="text-indent: 2em">
  <span class="ne-text">
   引用是C++中提出的概念，C语言中没有引用的概念。引用可以通俗地理解为一个存储空间的多个变量名。也可以理解为把实参的地址传递给了形参，形参用这个地址来访问变量。因此这种方式也称为传地址方式。
  </span>
 </p>
 <p class="ne-p" id="ua50bd9ed" style="text-indent: 2em">
  <span class="ne-text">
   C++中库函数swap和ref_swap基本相同，实现了变量交换。但C++中swap是使用模板完成的，更加复杂一些。
  </span>
 </p>
 <p class="ne-p" id="u2278fe2c" style="text-indent: 2em">
  <br/>
 </p>
 <h3 id="RheLP">
  <span class="ne-text">
   知识点：T336
  </span>
 </h3>
 <table border=1 class="ne-table" id="FaZxA" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u2c336f78">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="518">
     <p class="ne-p" id="u0c96f5a3" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub0efe628">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="97">
     <p class="ne-p" id="u116a4510">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u4058d872">
      <span class="ne-text">
       T336
      </span>
     </p>
    </td>
    <td width="518">
     <p class="ne-p" id="ue915e3be">
      <span class="ne-text">
       掌握实参与形参的关系，实参与形参必须在数量、顺序、类型上完全匹配
      </span>
     </p>
     <p class="ne-p" id="uf9994e61">
      <span class="ne-text">
       掌握参数传递的传值方式和引用方式
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u01118b59">
      <br/>
     </p>
    </td>
    <td width="97">
     <p class="ne-p" id="ud2842ef7">
      <a class="ne-link" data-href="#ZvJ3S" href="#ZvJ3S">
       <span class="ne-text">
        T338
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#TOnfM" href="ch6#TOnfM">
       <span class="ne-text">
        T613
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="685">
     <p class="ne-p" id="udd5981e3">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183804" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183804" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX316)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="Jdc2M">
  <span class="ne-text">
   3.7 函数重载
  </span>
 </h2>
 <p class="ne-p" id="链接14" style="text-indent: 2em">
  <span class="ne-text">
   如果两个或多个函数同名，但是参数的类型、顺序或数量不同，会被认为是不同的函数，这种现象被称为
  </span>
  <strong>
   <span class="ne-text">
    函数重载
   </span>
  </strong>
  <span class="ne-text">
   。在函数调用时，会根据实参的类型，自动寻找最匹配的函数进行调用。
  </span>
 </p>
 <p class="ne-p" id="uc91d5ea6" style="text-indent: 2em">
  <span class="ne-text">
   但是如果两个函数的函数名和参数完全一致，只有返回类型不同，会被认为是重复定义，报语法错误。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="oWpTV"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

void overload_swap ( int  &amp;x, int &amp;y)	//注意这里的参数是引用形式。
{
    swap(x,y);
    cout&lt;&lt;"swap 2 integers"&lt;&lt;endl;
}
void overload_swap ( string  &amp;x, string &amp;y)	//注意这里的参数是引用形式。
{
    swap(x,y);
    cout&lt;&lt;"swap 2 strings"&lt;&lt;endl;
}
void overload_swap ( int  &amp;x, int &amp;y, int &amp;z)	//注意这里的参数是引用形式。
{
    swap(z,y);
    swap(x,y);
    swap(y,z);
    cout&lt;&lt;"swap 3 integers"&lt;&lt;endl;
}
int main (  )
{
    int a, b, c;
    cin&gt;&gt;a&gt;&gt;b;
    overload_swap(a, b);
    cout&lt;&lt;"a="&lt;&lt;a&lt;&lt;" b="&lt;&lt;b&lt;&lt;endl;
    string s1,s2;
    cin&gt;&gt;s1&gt;&gt;s2;
    overload_swap(s1, s2);
    cout&lt;&lt;"s1="&lt;&lt;s1&lt;&lt;" s2="&lt;&lt;s2&lt;&lt;endl;
    cin&gt;&gt;a&gt;&gt;b&gt;&gt;c;
    overload_swap(a, b, c);
    cout&lt;&lt;"a="&lt;&lt;a&lt;&lt;" b="&lt;&lt;b&lt;&lt;" c="&lt;&lt;c&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="IClFo" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u2caf9f09">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接4b">
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
     <p class="ne-p" id="udeff86ce">
      <span class="ne-text">
       3 5
      </span>
     </p>
     <p class="ne-p" id="u85dd1346">
      <span class="ne-text">
       abc def
      </span>
     </p>
     <p class="ne-p" id="uc8136832">
      <span class="ne-text">
       3 4 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接d4">
      <span class="ne-text">
       swap 2 integers
      </span>
     </p>
     <p class="ne-p" id="u7c7e753f">
      <span class="ne-text">
       a=5 b=3
      </span>
     </p>
     <p class="ne-p" id="uba02f95d">
      <span class="ne-text">
       swap 2 strings
      </span>
     </p>
     <p class="ne-p" id="ud1c6da1a">
      <span class="ne-text">
       s1=def s2=abc
      </span>
     </p>
     <p class="ne-p" id="ue9325f9f">
      <span class="ne-text">
       swap 3 integers
      </span>
     </p>
     <p class="ne-p" id="ue145fcc4">
      <span class="ne-text">
       a=5 b=4 c=3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="iHpZV">
  <span class="ne-text">
   知识点：T337
  </span>
 </h3>
 <table border=1 class="ne-table" id="c4JhH" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u5fce665f">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="518">
     <p class="ne-p" id="u07872d73" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ud27ae9a9">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="97">
     <p class="ne-p" id="u987e8eb9">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u001b6a73">
      <span class="ne-text">
       T337
      </span>
     </p>
    </td>
    <td width="518">
     <p class="ne-p" id="u1710f64c">
      <span class="ne-text">
       掌握函数重载
      </span>
     </p>
    </td>
    <td width="70">
    </td>
    <td width="97">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="685">
     <p class="ne-p" id="uaf7be7a3">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183805" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183805" target="_blank">
       <span class="ne-text">
        (LX317)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183807" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183807" target="_blank">
       <span class="ne-text">
        (LX318)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183808" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183808" target="_blank">
       <span class="ne-text">
        (LX319)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="HCbT7">
  <span class="ne-text">
   3.8 参数的默认值*
  </span>
 </h2>
 <p class="ne-p" id="u44f3c60a" style="text-indent: 2em">
  <span class="ne-text">
   形参可以在定义时以赋值的形式给出默认值。在调用时，如果形参有对应的实参，则用实参赋值，如果没有对应的实参，用默认值。参数的默认值必须
  </span>
  <strong>
   <span class="ne-text">
    从右向左
   </span>
  </strong>
  <span class="ne-text">
   提供，即无默认值的参数不能出现在有默认值参数的右边。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="LXbxu"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;

int func(int a,int b=4,int c=5)
{
    return  a+b+c;
}
int main (  )
{
    int a,b,c;
    cin&gt;&gt;a&gt;&gt;b&gt;&gt;c;
    cout&lt;&lt;func(a)&lt;&lt;endl;
    cout&lt;&lt;func(a,b)&lt;&lt;endl;
    cout&lt;&lt;func(a,b,c)&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="gtQ0N" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uea05f8db">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u8b99fc5d">
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
     <p class="ne-p" id="u8a3c95ce">
      <span class="ne-text">
       6 7 8
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1588bc74">
      <span class="ne-text">
       15
      </span>
     </p>
     <p class="ne-p" id="u99a056c0">
      <span class="ne-text">
       18
      </span>
     </p>
     <p class="ne-p" id="u08c94822">
      <span class="ne-text">
       21
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="uc9dcb2c1">
   <span class="ne-text">
    第12行只给定了一个实参，因此
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     c
    </span>
   </code>
   <span class="ne-text">
    用默认值，得到结果为6+4+5=15
   </span>
  </li>
  <li id="ua2903726">
   <span class="ne-text">
    第13行形参
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b
    </span>
   </code>
   <span class="ne-text">
    用实参值7，得到结果为6+7+5=18
   </span>
  </li>
  <li id="u72673a3a">
   <span class="ne-text">
    第14行都采用传入的实参，得到结果为6+7+8=21
   </span>
  </li>
  <li id="ub319e4cd">
   <span class="ne-text">
    由此可知，当参数个数为1,2,3时，都可以调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     func
    </span>
   </code>
   <span class="ne-text">
    函数，这样可以避免重复写三个重载函数。形参
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    没有默认值，调用时不可以省略实参。
   </span>
  </li>
  <li id="u699ff085">
   <span class="ne-text">
    参数的默认值必须
   </span>
   <strong>
    <span class="ne-text">
     从右向左
    </span>
   </strong>
   <span class="ne-text">
    提供，因此
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int func(int a=3,int b,int c=5)
    </span>
   </code>
   <span class="ne-text">
    是不允许的，但是可以全部带有默认值，例如
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int func(int a=3,int b=4,int c=5)
    </span>
   </code>
   <span class="ne-text">
    是可以的。
   </span>
  </li>
 </ul>
 <h3 id="ZvJ3S">
  <span class="ne-text">
   知识点：T338
  </span>
 </h3>
 <table border=1 class="ne-table" id="hG5st" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u3c8a1aa1">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u68f626ce" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ua7e5bc3e">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接92">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u0f7ba489">
      <span class="ne-text">
       T338
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u6ec25b90">
      <span class="ne-text">
       掌握参数默认值的语法规则
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uff95e9ef">
      <a class="ne-link" data-href="#RheLP" href="#RheLP">
       <span class="ne-text">
        T336
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ua3f4a02d">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ueeb6b8d2">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX201)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="chZyg">
  <span class="ne-text">
   4. 局部变量和函数的内存模型
  </span>
 </h1>
 <p class="ne-p" id="u25d8432d" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
   程序和数据平常存储在硬盘等存储器上，运行时，这些内容都会被加载到内存中。为了更好地管理内存，内存被以字节为单位进行编号，这些编号称为内存地址。
  </span>
  <span class="ne-text">
   也就是说一个内存地址代表一个字节（8bit）的存储空间。一个32位的电脑，最多支持2
  </span>
  <sup>
   <span class="ne-text">
    32
   </span>
  </sup>
  <span class="ne-text">
   =4GB的内存空间，而64位电脑就可以支持2
  </span>
  <sup>
   <span class="ne-text">
    64
   </span>
  </sup>
  <span class="ne-text">
   的内存空间。当代计算机的物理内存通常大于4GB，这也是这些计算机必须安装64位操作系统的原因。
  </span>
 </p>
 <p class="ne-p" id="u26118e8e" style="text-indent: 2em">
  <span class="ne-text">
   编程中的每一行代码，代码中用到的每个数据，都需要在内存上有其映射地址。当定义一个变量时，根据数据类型分配一个相应的内存空间，比如int类型分配sizeof(int)=4个字节的内存空间，这4个字节必须连续，4个字节对应4个地址，其中最小的一个地址作为这个变量的地址。当使用一个变量时，编译器实际上是通过变量名获知变量的地址，然后根据数据类型告诉编译器要从该地址开始的多少字节用来解释，按照什么方式进行解释。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="qlbwr"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
int main (  )
{
    char c='A';
    int a = 65;
    printf("%d %c %d %c",c,c,a,a);
}</code></pre>
 <table border=1 class="ne-table" id="XIz7V" style="width: 100%">
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
     <p class="ne-p" id="uc9e59d28">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u811d2973">
      <span class="ne-text">
       65 A 65 A
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ub865ea96">
   <span class="ne-text">
    字符实际上先被映射成ASCII码，然后才能在计算机中存储。因此字符'A'和整数65实际上在内存中的二进制表示是完全相同的。
   </span>
  </li>
  <li id="ub35878a8">
   <span class="ne-text">
    占位符%d要求将变量按照十进制整数进行解释，%c要求将变量按照字符类型进行解释，因此同一个变量，因为要求的解释方式不同，就会输出不同的结果。本质上是因为它们在内存中的二进制表示形式是完全相同的。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u8f8c009e" style="text-indent: 2em">
  <span class="ne-text">
   当一个程序开始运行时，会分配一个称为堆栈（stack，简称为栈）的空间。栈是一个一端封闭，一端开放的数据结构。当有新的数据分配需求时，从栈顶开始依次分配。当需要释放空间时，也只能先释放栈顶的空间。栈的这种特性被称为“后进先出”。栈底在高地址，栈顶在低地址。因此先定义的变量会相对靠下，后定义的变量会相对靠上，总体来说是从高到低分配，这就解释了下面代码3.26中
  </span>
  <code class="ne-code">
   <span class="ne-text">
    abcde
   </span>
  </code>
  <span class="ne-text">
   变量为什么地址会从低到高。理论上这些变量的内存地址应该是相邻的，但是因为操作系统一些机制（例如编译器数据对齐，64位操作系统会尽量以8个字节为“单位”）的存在，连续定义的多个局部变量在内存中并不一定连续。
  </span>
 </p>
 <p class="ne-p" id="uca0f15b3" style="text-indent: 2em">
  <span class="ne-text">
   局部变量内存空间的分配与回收是由编译器自动管理的，不需要用户人工干预。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Z2TrW"><span style="font-weight:bold;">代码2.1</span> 数据
类型和基本输⼊输出<code>#include&lt;iostream&gt;
using namespace std;
void dummy(){
    int x;
    cout&lt;&lt;"x("&lt;&lt;x&lt;&lt;")\t的地址为"&lt;&lt;(&amp;x)&lt;&lt;"，占据"&lt;&lt;sizeof(x)&lt;&lt;"字节"&lt;&lt;endl;
}
int main (  )
{
    int a=3;
    double b=1.2;
    char c='A';
    long long d=4;
    float e=8.7;
    dummy();
    cout&lt;&lt;"a("&lt;&lt;a&lt;&lt;")\t的地址为"&lt;&lt;(&amp;a)&lt;&lt;"，占据"&lt;&lt;sizeof(a)&lt;&lt;"字节"&lt;&lt;endl;
    cout&lt;&lt;"b("&lt;&lt;b&lt;&lt;")\t的地址为"&lt;&lt;(&amp;b)&lt;&lt;"，占据"&lt;&lt;sizeof(b)&lt;&lt;"字节"&lt;&lt;endl;
    cout&lt;&lt;"c("&lt;&lt;c&lt;&lt;")\t的地址为"&lt;&lt;(void*)(&amp;c)&lt;&lt;"，占据"&lt;&lt;sizeof(c)&lt;&lt;"字节"&lt;&lt;endl;
    cout&lt;&lt;"d("&lt;&lt;d&lt;&lt;")\t的地址为"&lt;&lt;(&amp;d)&lt;&lt;"，占据"&lt;&lt;sizeof(d)&lt;&lt;"字节"&lt;&lt;endl;
    cout&lt;&lt;"e("&lt;&lt;e&lt;&lt;")\t的地址为"&lt;&lt;(&amp;e)&lt;&lt;"，占据"&lt;&lt;sizeof(e)&lt;&lt;"字节"&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="el4xH" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u34bcec20">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua601edff">
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
     <p class="ne-p" id="uceb28918">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u71db0fdf">
      <span class="ne-text">
       x(32762) 的地址为0x61fdbc，占据4字节
      </span>
     </p>
     <p class="ne-p" id="u193b6672">
      <span class="ne-text">
       a(3) 的地址为0x61fe1c，占据4字节
      </span>
     </p>
     <p class="ne-p" id="ue984a459">
      <span class="ne-text">
       b(1.2) 的地址为0x61fe10，占据8字节
      </span>
     </p>
     <p class="ne-p" id="u73b11df2">
      <span class="ne-text">
       c(A) 的地址为0x61fe0f，占据1字节
      </span>
     </p>
     <p class="ne-p" id="u54b2364c">
      <span class="ne-text">
       d(4) 的地址为0x61fe00，占据8字节
      </span>
     </p>
     <p class="ne-p" id="u97ed5341">
      <span class="ne-text">
       e(8.7) 的地址为0x61fdfc，占据4字节
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u9a44e20e">
   <span class="ne-text">
    用操作符
   </span>
   <code class="ne-code">
    <span class="ne-text">
     sizeof
    </span>
   </code>
   <span class="ne-text">
    获得每个变量占据的内存空间大小，在变量前添加
   </span>
   <code class="ne-code">
    <span class="ne-text">
     &amp;
    </span>
   </code>
   <span class="ne-text">
    获取该变量的内存地址。
   </span>
  </li>
  <li id="ue547f19d">
   <span class="ne-text">
    C/C++中，将
   </span>
   <code class="ne-code">
    <span class="ne-text">
     char
    </span>
   </code>
   <span class="ne-text">
    类型地址理解为字符数组的起点，如果该数组中存在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     \0
    </span>
   </code>
   <span class="ne-text">
    字符，则将这个字符数组理解为从起点到结束标记
   </span>
   <code class="ne-code">
    <span class="ne-text">
     \0
    </span>
   </code>
   <span class="ne-text">
    的字符串。当cout遇到char类型的地址时，将会从该地址开始，将遇到所有内容按照字符串来进行解释并输出，直到遇到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     \0
    </span>
   </code>
   <span class="ne-text">
    停止。因此如果不做强制类型转换，第17行将会输出一个字符串。而第17行期望输出地址。因此将该地址强制转换为无类型进行输出，这样才能正确输出一个地址。实际上可以将其转换为任意非字符地址类型，都可以正确输出。char类型地址只是一个特例。其中的符号*表示指针，即存储地址的变量，将在后继章节中进行详细展开。
   </span>
  </li>
  <li id="u5e0d1e1d">
   <span class="ne-text">
    内存地址通常用16进制表示，代码3.26中
   </span>
   <code class="ne-code">
    <span class="ne-text">
     main
    </span>
   </code>
   <span class="ne-text">
    函数的5个连续变量的内存地址在整体上从高到低分配。
   </span>
  </li>
  <li id="u9797b31d">
   <span class="ne-text">
    连续定义的变量内存上有时连续，例如：0x61fe10-0x61fe0f=1（
   </span>
   <code class="ne-code">
    <span class="ne-text">
     c
    </span>
   </code>
   <span class="ne-text">
    占据的字节数），0x61fe00-0x61fdfc=4（
   </span>
   <code class="ne-code">
    <span class="ne-text">
     e
    </span>
   </code>
   <span class="ne-text">
    占据的字节数）；有时不连续，例如：0x61fe1c-0x61fe10=12（不等于
   </span>
   <code class="ne-code">
    <span class="ne-text">
     b
    </span>
   </code>
   <span class="ne-text">
    占据的字节数8），0x61fe0f-0x61fe00=15（不等于
   </span>
   <code class="ne-code">
    <span class="ne-text">
     d
    </span>
   </code>
   <span class="ne-text">
    占据的字节数8），如图3.3所示。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u6cf76111" style="text-align: center">
  <img class="ne-image img-70" id="xUiEU" src="../assets/images/1657782932838-2b4ece8a-0736-44bb-bad9-43bea30f79fd.png"/>
 </p>
 <p class="ne-p" id="u43147e40" style="text-align: center">
  <span class="ne-text">
   图3.3 局部变量和函数的内存分配
  </span>
 </p>
 <p class="ne-p" id="u06c28707" style="text-indent: 2em">
  <span class="ne-text">
   内存的最终分配结果与编译器、计算机和操作系统都紧密相关，当这些条件不一致时，都可能会导致结果不相同。同一个程序在不同时间运行，内存地址也会不同。但其基本原理不会发生变化。
  </span>
 </p>
 <p class="ne-p" id="u9c0d3af2" style="text-indent: 2em">
  <span class="ne-text">
   当一个函数被调用前，它是不占据内存空间的。只有调用时才从栈顶分配空间。函数调用结束后，该空间被自动释放。因为函数调用还要保存调用点等信息，因此
  </span>
  <code class="ne-code">
   <span class="ne-text">
    x
   </span>
  </code>
  <span class="ne-text">
   的内存地址和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    e
   </span>
  </code>
  <span class="ne-text">
   并不连续。但是要注意栈空间是有大小限制的，如果分配的变量空间过多，或调用的函数过多，会形成栈溢出。因此不要分配过多的变量（主要指数组的元素数量不能过大），不要形成无限递归调用。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="u6c48ec45">
   <span class="ne-text">
    本小节内容的理解对于初学者过于复杂，因此只需要谨记三个原则：
   </span>
  </p>
  <p class="ne-p" id="u182a80ee">
   <span class="ne-text">
    a) 每个变量都会根据其数据类型分配内存，因此一定存在对应的内存地址，即在内存中的位置编号。
   </span>
  </p>
  <p class="ne-p" id="ud5ae524f">
   <span class="ne-text">
    b) 局部变量会自动分配和释放内存。对于连续定义的变量，其内存地址不一定连续。
   </span>
  </p>
  <p class="ne-p" id="u54203a08">
   <span class="ne-text">
    c) 数组的元素数量不能过大。可以自行尝试大小，一般情况下足够用，一旦超出运行时会报错。
   </span>
  </p>
 </div>
 <h3 id="QAfJZ">
  <span class="ne-text">
   知识点：T341
  </span>
 </h3>
 <table border=1 class="ne-table" id="OHKS3" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uec6b69de">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="473">
     <p class="ne-p" id="u0a896d35" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u5b4b9cca">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="147">
     <p class="ne-p" id="u6d02fd8f">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u3a04be51">
      <span class="ne-text">
       T341
      </span>
     </p>
    </td>
    <td width="473">
     <p class="ne-p" id="u38b4f7c3">
      <span class="ne-text">
       掌握局部变量和函数调用的内存模型，这是掌握指针的基础
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4260e5e9">
      <a class="ne-link" data-href="#AlX1z" href="#AlX1z">
       <span class="ne-text">
        T335
       </span>
      </a>
     </p>
    </td>
    <td width="147">
     <p class="ne-p" id="u58574a13">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#pNT2u" href="ch5#pNT2u">
       <span class="ne-text">
        T513
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#XPPV7" href="ch6#XPPV7">
       <span class="ne-text">
        T611
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#BlTTv" href="ch8#BlTTv">
       <span class="ne-text">
        T851
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="gMfTd">
  <span class="ne-text">
   5. 变量的深度理解*
  </span>
 </h1>
 <p class="ne-p" id="u5880e128" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   变量名是一个
  </span>
  <a class="ne-link" data-href="https://www.zhihu.com/search?q=%E6%A0%87%E8%AF%86%E7%AC%A6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A58226555%7D" href="https://www.zhihu.com/search?q=%E6%A0%87%E8%AF%86%E7%AC%A6&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A58226555%7D" target="_blank">
   <span class="ne-text">
    标识符
   </span>
  </a>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   (identifier)，用来指代一块内存区域，即变量。
  </span>
  <span class="ne-text">
   这块区域的值一般是可以更改的，这就是它“变”的由来。如果使用如const等一些修饰符号来限定这一内存区域的操作特性，例如
  </span>
  <code class="ne-code">
   <span class="ne-text">
    const
   </span>
   <span class="ne-text" style="color: rgb(18, 18, 18)">
    int b;
   </span>
  </code>
  <span class="ne-text">
   ，
  </span>
  <code class="ne-code">
   <span class="ne-text">
    const
   </span>
  </code>
  <span class="ne-text">
   修饰使变量不能更改，这样的变量称为常变量。
  </span>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   变量使程序代码操作内存更加方便，因此C/C++被称为高级语言。定义
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(18, 18, 18)">
    int a;
   </span>
  </code>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   时,编译器分配4个字节内存，并将该4个字节的空间名字为
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(18, 18, 18)">
    a
   </span>
  </code>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   (即变量名)，当用到变量名
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(18, 18, 18)">
    a
   </span>
  </code>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   时,就是在使用对应4个字节的内存空间。
  </span>
 </p>
 <p class="ne-p" id="u084b570b" style="text-indent: 2em">
  <span class="ne-text">
   一个变量与一块内存空间绑定，那么变量怎样存储地址呢？在
  </span>
  <span class="ne-text" style="color: rgb(18, 18, 18)">
   C/C++等编译型程序中，变量实际上不存储地址。
  </span>
  <span class="ne-text">
   变量名是给程序员看的，让程序员可以方便直观的操作内存地址。一段代码经过编译、链接之后形成二进制的机器代码，然后才能够执行，机器代码是给计算机使用的。在经过编译链接后，所有的变量在机器代码中都被直接替换为对应的地址，也就是说，机器代码中不存在变量名。当程序中操作一个变量时，最终是通过地址访问对应的内存区域，完成相应的操作。例如
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a=5;
   </span>
  </code>
  <span class="ne-text">
   就是把
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   指向的内存区域的值修改为5；
  </span>
  <code class="ne-code">
   <span class="ne-text">
    b=a;
   </span>
  </code>
  <span class="ne-text">
   就是将
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   指向的内存区域的值复制到
  </span>
  <code class="ne-code">
   <span class="ne-text">
    b
   </span>
  </code>
  <span class="ne-text">
   指向的内存区域中。可用取地址符号
  </span>
  <code class="ne-code">
   <span class="ne-text">
    &amp;
   </span>
  </code>
  <span class="ne-text">
   来获得它所代表的变量的存放地址。
  </span>
 </p>
 <p class="ne-p" id="uf61e3669" style="text-indent: 2em">
  <span class="ne-text">
   在一个局部区域定义两个变量如果同名，都会在机器代码中被编译为相同的地址，不能被区分为两个变量，因此相同局部区域的变量不能同名。如果在不同局部区域，例如图3.3中的
  </span>
  <code class="ne-code">
   <span class="ne-text">
    main
   </span>
  </code>
  <span class="ne-text">
   和
  </span>
  <code class="ne-code">
   <span class="ne-text">
    dummy
   </span>
  </code>
  <span class="ne-text">
   ，这两个区域不在一起，因此在两个区域里即使存在同名变量，也会被编译成两个不同的地址，因此不同区域的变量可以同名。与此类似，实参和形参被分配到两个不同的内存块中，地址完全不同，除了调用时有一次赋值操作外，实参与形参完全不相关，因此形参的修改不会影响实参，这也是传值方式的特性。当采用引用定义变量时，新变量和被引用变量在机器代码中被编译成相同的地址，并没有新的存储空间被分配。而变量是通过地址操作相应的存储空间。因此采用传地址方式时，修改形参实际上就是在修改实参。
  </span>
 </p>
 <h3 id="jyKKI">
  <span class="ne-text">
   知识点：T351
  </span>
 </h3>
 <table border=1 class="ne-table" id="vQ95T" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u8fe8807f">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u46802b9a" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub0ecd7fd">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue8154d9a">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ud82f2ca8">
      <span class="ne-text">
       T351
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ub62dbd54">
      <span class="ne-text">
       掌握变量在编译后的表示方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u5d93b6a6">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue8dd1ee0">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="UnPt9">
  <span class="ne-text">
   题单
  </span>
 </h1>
 <table border=1 class="ne-table" id="kw76W" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u48de0c83">
      <span class="ne-text">
       序号
      </span>
     </p>
    </td>
    
    <td width="109">
     <p class="ne-p" id="ue8290a08">
      <span class="ne-text">
       题目名称
      </span>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ua1e1b9b1">
      <span class="ne-text">
       知识点
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ud4432eef">
      <span class="ne-text">
       序号
      </span>
     </p>
    </td>
    
    <td width="95">
     <p class="ne-p" id="u1978b8e5">
      <span class="ne-text">
       题目名称
      </span>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u6cbca5cd">
      <span class="ne-text">
       知识点
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="uef974bef">
      <span class="ne-text">
       LX301
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="u3f21d5f6">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183790" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183790" target="_blank">
       <span class="ne-text">
        三角形的面积
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u48baf8f8">
      <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
       <span class="ne-text">
        T311
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ub6c98782">
      <span class="ne-text">
       LX302
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="uad9df7f4">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183791" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183791" target="_blank">
       <span class="ne-text">
        按顺序输出
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uc400181f">
      <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
       <span class="ne-text">
        T312
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u5ae74343">
      <span class="ne-text">
       LX303
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="ub68f977d">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183792" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183792" target="_blank">
       <span class="ne-text">
        回文数
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u450ce2be">
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T314
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u5b745015">
      <span class="ne-text">
       LX304
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u64aca1e2">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183793" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183793" target="_blank">
       <span class="ne-text">
        外卖费
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u1161d681">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#iAVWo" href="ch2#iAVWo">
       <span class="ne-text">
        T244
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T314
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u58fdc068">
      <span class="ne-text">
       LX305
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="链接12">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183794" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183794" target="_blank">
       <span class="ne-text">
        狐狸和兔子
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u121da240">
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T315
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#IftcA" href="#IftcA">
       <span class="ne-text">
        T316
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u8db1cc2d">
      <span class="ne-text">
       LX306
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u1cf1d1d8">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183795" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183795" target="_blank">
       <span class="ne-text">
        春华秋实
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u1ca589b1">
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T317
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u47358bbb">
      <span class="ne-text">
       LX307
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="链接80">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183796" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183796" target="_blank">
       <span class="ne-text">
        粮油站
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="uf295b1b7">
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T317
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="uee27404c">
      <span class="ne-text">
       LX308
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u2ba301d6">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183797" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183797" target="_blank">
       <span class="ne-text">
        字符类型
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u6754d45d">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wG8i3" href="ch2#wG8i3">
       <span class="ne-text">
        T242
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T317
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u112fd2c0">
      <span class="ne-text">
       LX309
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="ue59b1691">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183798" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183798" target="_blank">
       <span class="ne-text">
        提交记录
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u7012a5f3">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#ZBSEW" href="ch2#ZBSEW">
       <span class="ne-text">
        T281
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T317
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u26af475f">
      <span class="ne-text">
       LX310
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u04428b98">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183799" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183799" target="_blank">
       <span class="ne-text">
        三角形类型
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ubabdcac4">
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T318
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="链接f4">
      <span class="ne-text">
       LX311
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="uf3f8f945">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183800" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183800" target="_blank">
       <span class="ne-text">
        某年某月天数
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u9a6da594">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#MIXWN" href="ch2#MIXWN">
       <span class="ne-text">
        T266
       </span>
      </a>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
       ,
      </span>
      <a class="ne-link" data-href="#rVM6q" href="#rVM6q">
       <span class="ne-text">
        T317
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u5f2aca5c">
      <span class="ne-text">
       LX312
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u1d1281bc">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183801" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183801" target="_blank">
       <span class="ne-text">
        自定义plus
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="udcc7d058">
      <a class="ne-link" data-href="#VKSK4" href="#VKSK4">
       <span class="ne-text">
        T331
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="链接4e">
      <span class="ne-text">
       LX313
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="u02d20e25">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183802" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183802" target="_blank">
       <span class="ne-text">
        除数博弈
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u2a88b085">
      <a class="ne-link" data-href="#VKSK4" href="#VKSK4">
       <span class="ne-text">
        T331
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u217bbf97">
      <span class="ne-text">
       LX314
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="ucbd1c829">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183803" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183803" target="_blank">
       <span class="ne-text">
        最小偶倍数
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ub0ecab6f">
      <a class="ne-link" data-href="#chBU6" href="#chBU6">
       <span class="ne-text">
        T334
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="ud351022e">
      <span class="ne-text">
       LX315
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="uafa8018e">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183806" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183806" target="_blank">
       <span class="ne-text">
        符号函数
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ud091202c">
      <a class="ne-link" data-href="#chBU6" href="#chBU6">
       <span class="ne-text">
        T334
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u8cff993d">
      <span class="ne-text">
       LX316
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u683afcbf">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183804" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183804" target="_blank">
       <span class="ne-text">
        买一送一
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u0c387941">
      <a class="ne-link" data-href="#RheLP" href="#RheLP">
       <span class="ne-text">
        T336
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u3b1be70e">
      <span class="ne-text">
       LX317
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="u43d774c9">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183805" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183805" target="_blank">
       <span class="ne-text">
        加法重载
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ua560ea20">
      <a class="ne-link" data-href="#RheLP" href="#RheLP">
       <span class="ne-text">
        T337
       </span>
      </a>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="uf08f5a31">
      <span class="ne-text">
       LX318
      </span>
     </p>
    </td>
     
    <td width="95">
     <p class="ne-p" id="u597e27a6">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183807" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183807" target="_blank">
       <span class="ne-text">
        面积计算器
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u374e1135">
      <a class="ne-link" data-href="#RheLP" href="#RheLP">
       <span class="ne-text">
        T337
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="69">
     <p class="ne-p" id="u67b8a123">
      <span class="ne-text">
       LX319
      </span>
     </p>
    </td>
     
    <td width="109">
     <p class="ne-p" id="u2ebffca8">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183808" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183808" target="_blank">
       <span class="ne-text">
        最大值函数
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u76dba2da">
      <a class="ne-link" data-href="#RheLP" href="#RheLP">
       <span class="ne-text">
        T337
       </span>
      </a>
     </p>
    </td>
    <td width="63">
    </td>
    <td width="95">
    </td>
    <td width="99">
    </td>
   </tr>
  </tbody>
 </table>
</div>
</div>
    </div>
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
    name: 'Ch3',
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
        this.$store.dispatch('toChapter', 6);
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