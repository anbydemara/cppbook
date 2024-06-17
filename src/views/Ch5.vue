<template>
<div class="whole-page">
    <!-- content -->
    <div class="self-main">
<div class="chapter-title">✋第五章 数组与字符串</div>
<div class="lake-content" ref="content-data" typography="classic">
    <div class="self-section">
 <h1 id="vftx2">
  <span class="ne-text">
   1. 一维数组的定义和初始化
  </span>
 </h1>
 <h2 id="docsq">
  <span class="ne-text">
   1.1 一维数组的定义
  </span>
 </h2>
 <p class="ne-p" id="u1389aad7" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   在程序设计中，为了便于程序处理，通常把具有相同类型的若干变量按有序的形式组织在一起，这些按序排列的同类数据元素的集合称为数组。其中，集合中的每一个元素都相当于一个与数组同类型的变量；集合中的每一个元素用同一个名字（数组名）和它在集合中的序号（下标）来区分引用。语法格式如下：
  </span>
 </p>
 <details class="lake-collapse">
  <summary id="ub5c5d47b">
   <span class="ne-text">
    数据类型 数组名[元素数量];
   </span>
  </summary>
 </details>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="h4xuI"><span
style="font-weight:bold;">代码5.1</span> 一维数组的定义
<code>int a[10];		//语法格式：//定义了长度为10的整型数组</code></pre>
 <ul class="ne-ul">
  <li id="u0b9fc52d">
   <span class="ne-text">
    第1行定义了一个包含10个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int
    </span>
   </code>
   <span class="ne-text">
    类型元素的数组，数组名为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    ，这10个元素分别是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[0]
    </span>
   </code>
   <span class="ne-text">
    ,
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[1]
    </span>
   </code>
   <span class="ne-text">
    , …
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[9]
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
  <li id="u01a845cb">
   <span class="ne-text">
    特别强调，C/C++中区分定义语句和非定义语句。同样的符号，在定义语句和非定义语句中表达的含义可能完全不同。
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    在数组定义时表示数组中元素的个数，而在数组使用时表示下标，即第
   </span>
   <code class="ne-code">
    <span class="ne-text">
     n
    </span>
   </code>
   <span class="ne-text">
    个元素。
   </span>
  </li>
  <li id="链接4b">
   <span class="ne-text">
    下标从0开始，以
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int a[10];
    </span>
   </code>
   <span class="ne-text">
    为例，第一个元素是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[0]
    </span>
   </code>
   <span class="ne-text">
    ，最后一个元素是a[9]。
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a[10]
    </span>
   </code>
   <span class="ne-text">
    并不存在，对其访问存在下标越界错误。
   </span>
  </li>
 </ul>
 <h3 id="sDNu2">
  <span class="ne-text">
   知识点：T511
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
    <td width="543">
     <p class="ne-p" id="u740c940a" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="57">
     <p class="ne-p" id="ue01922b6">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="105">
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
       T511
      </span>
     </p>
    </td>
    <td width="543">
     <p class="ne-p" id="u58d0930d">
      <span class="ne-text">
       掌握数组的基本定义，索引从0开始，中括号在定义语句和非定义语句中的含义
      </span>
     </p>
    </td>
    <td width="57">
     <p class="ne-p" id="uea6e9b8f">
      <br/>
     </p>
    </td>
    <td width="105">
     <p class="ne-p" id="u70d3a523">
      <a class="ne-link" data-href="#D8kyt" href="#D8kyt">
       <span class="ne-text">
        T531
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#eRcMx" href="#eRcMx">
       <span class="ne-text">
        T541
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="705">
     <p class="ne-p" id="ua8093131">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161729" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161729" target="_blank">
       <span class="ne-text">
        (LX501)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="T4QOe">
  <span class="ne-text">
   1.2 一维数组的初始化
  </span>
 </h2>
 <p class="ne-p" id="u6c094f71" style="text-indent: 2em">
  <span class="ne-text">
   定义后用大括号中的数值对各个元素依次进行赋值。数值个数不能超过数组定义时的元素数量。如果用全部数值进行了初始化，元素数量在定义时可以省略。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="YqhAq"><span
style="font-weight:bold;">代码5.2</span> 一维数组的初始化
<code>int main(){
    int a[5] = {1, 2, 3, 4, 5};
    double b[] = {7.1, 8.2, 9.3};
    double c1[10] = {0.5,1.0,1.5,2.0};
    long long c2[100] = {0};
    long long c3[100] = {};
    int d[50];
}</code></pre>
 <ul class="ne-ul">
  <li id="uf3d565ba">
   <span class="ne-text">
    数组b根据初始化数值的数量确定元素个数为3。
   </span>
  </li>
  <li id="uc6a2aea9">
   <span class="ne-text">
    数组c1的前4个数据为与初始化列表对应，根据C/C++的规则，部分初始化时，未赋值元素为0，因此c1[4]以后的元素为0。
   </span>
  </li>
 </ul>
 <img id="a8vfs" src="../assets/images/1676858457207-e52af739-7027-4ed0-9978-d25f7452d5f4.jpeg" class="img-60"/>
 <p class="ne-p" id="u2dde51fc" style="text-align: center">
  <span class="ne-text">
   图5.1 部分初始化时的数组c1
  </span>
 </p>
 <ul class="ne-ul">
  <li id="u6e6f5ac1">
   <span class="ne-text">
    根据部分初始化规则，可以用第5行的方法将所有数值初始化为全0。这是利用了规则，并不存在全1或其他数值的全部初始化操作。
   </span>
  </li>
  <li id="u94be4cea">
   <span class="ne-text">
    采用第6行的方式，也可以将数组全部初始化为0
   </span>
  </li>
  <li id="u5eeffd2c">
   <span class="ne-text">
    但是如果没有初始化，数值中所有元素的值是不确定的。变量定义时，只会分配空间，没有自动赋值为0的操作。例如数组d中的所有值是不确定的。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="ua78ab0fb" style="text-indent: 2em">
  <span class="ne-text">
   元素数量必须是非负整数，可以是常量，也可以是变量。如果定义数组时元素数量为常量，称为静态数组，在编译时分配存储空间，因为存储空间确定，所以可以进行初始化；但是如果元素数量是变量，称为动态数组，在运行时分配存储空间，编译时不能确定存储空间的大小。从C++11开始，动态数组可以进行初始化。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="IvVzf"><span
style="font-weight:bold;">代码5.3</span> 定义动态数组
<code>int main(){
    int n;
    cin&gt;&gt;n;
    int arr[n]={1,2};		//动态数组，从C++11开始支持初始化
    for(int i=0;i&lt;n;i++)
        cout&lt;&lt;arr[i]&lt;&lt;' ';
}</code></pre>
 <table border=1 class="ne-table" id="DxOZF" style="width: 100%">
  <tbody>
   <tr style="height: 37px">
    <td width="375">
     <p class="ne-p" id="u392f0c40">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u487d18ed">
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
     <p class="ne-p" id="u17b7d0e4">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua096d203">
      <span class="ne-text">
       1 2 0 0 0
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="Dr2WK">
  <span class="ne-text">
   知识点：T512
  </span>
 </h3>
 <table border=1 class="ne-table" id="eFZuq" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ufb3c903f">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u711c1477" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4bc49089">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u2ff086be">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u682eecb6">
      <span class="ne-text">
       T512
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u429b81d1">
      <span class="ne-text">
       掌握数组的初始化方法，尤其是部分初始化的作用；理解动态数组
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u46bcd3c7">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u07e96257">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ub6610ace">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161731" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161731" target="_blank">
       <span class="ne-text">
        (LX503)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="CSiAQ">
  <span class="ne-text">
   1.3 一维数组的内存模型
  </span>
 </h2>
 <p class="ne-p" id="u75c72bbb" style="text-indent: 2em">
  <span class="ne-text">
   从数组的定义中可以获知，一个数组中所有元素的数据类型必须相同。从存储角度，当定义一个数组
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   时，编译器根据指定的元素个数和元素的类型分配确定大小（元素类型大小*元素个数）的一块内存，并把这块内存的名字命名为
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   ，名字
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   一旦与这块内存匹配就不能再改变。由此可知，一个数组中所有元素的存储空间是连续的。对于一个数组
  </span>
  <code class="ne-code">
   <span class="ne-text">
    float a[]={1.2, 2.3, 3.4, 4.5,5.6}
   </span>
  </code>
  <span class="ne-text">
   ，
  </span>
  <code class="ne-code">
   <span class="ne-text">
    sizeof(a)=20=sizeof(float)*5
   </span>
  </code>
  <span class="ne-text">
   ，各元素的相关数据如下：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="fHktw"><span
style="font-weight:bold;">代码5.4</span> 数组元素的地址
<code>#include&lt;iostream&gt;
using namespace std;
int main (  )
{
    float a[]={1.2, 2.3, 3.4, 4.5,5.6};
    cout&lt;&lt;"下标";
    for(int i=0;i&lt;5;i++)
        cout&lt;&lt;"\ta["&lt;&lt;i&lt;&lt;']';
    cout&lt;&lt;endl;
    cout&lt;&lt;"值";
    for(int i=0;i&lt;5;i++)
        cout&lt;&lt;'\t'&lt;&lt;a[i];
    cout&lt;&lt;endl;    
    cout&lt;&lt;"地址";
    for(int i=0;i&lt;5;i++)
        cout&lt;&lt;'\t'&lt;&lt;&amp;a[i];
    cout&lt;&lt;endl;
    cout&lt;&lt;"a+i";
    for(int i=0;i&lt;5;i++)
        cout&lt;&lt;'\t'&lt;&lt;a+i;
    cout&lt;&lt;endl;
    cout&lt;&lt;endl;
}</code></pre>
 <p class="ne-p" id="udfe715c2" style="text-align: center">
  <span class="ne-text">
   表5.1 数组各元素的相关数据
  </span>
 </p>
 <table border=1 class="ne-table" id="uVkYL" style="text-align:center" align="center">
  <tbody>
   <tr style="height: 33px">
    <td width="123">
     <p class="ne-p" id="ud11151ba" style="text-align: center">
      <span class="ne-text">
       下标
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u905e224c" style="text-align: center">
      <span class="ne-text">
       a[0]
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u84d97ee0" style="text-align: center">
      <span class="ne-text">
       a[1]
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u54abcbdf" style="text-align: center">
      <span class="ne-text">
       a[2]
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u02ae78e2" style="text-align: center">
      <span class="ne-text">
       a[3]
      </span>
     </p>
    </td>
    <td width="127">
     <p class="ne-p" id="ubab4c90a" style="text-align: center">
      <span class="ne-text">
       a[4]
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="123">
     <p class="ne-p" id="ua1242f02" style="text-align: center">
      <span class="ne-text">
       值
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u2e0bbe7f" style="text-align: center">
      <span class="ne-text">
       1.2
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="udb49ddbb" style="text-align: center">
      <span class="ne-text">
       2.3
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u450b5935" style="text-align: center">
      <span class="ne-text">
       3.4
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="ub1556f3f" style="text-align: center">
      <span class="ne-text">
       4.5
      </span>
     </p>
    </td>
    <td width="127">
     <p class="ne-p" id="u5dcb7449" style="text-align: center">
      <span class="ne-text">
       5.6
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="123">
     <p class="ne-p" id="u4a4a0bc9" style="text-align: center">
      <span class="ne-text">
       地址
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u8a3cfde8" style="text-align: center">
      <span class="ne-text">
       0x61fe00
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="uf2be43e9" style="text-align: center">
      <span class="ne-text">
       0x61fe04
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u35a106b7" style="text-align: center">
      <span class="ne-text">
       0x61fe08
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u37faa00f" style="text-align: center">
      <span class="ne-text">
       0x61fe0c
      </span>
     </p>
    </td>
    <td width="127">
     <p class="ne-p" id="u4fd9ee82" style="text-align: center">
      <span class="ne-text">
       0x61fe10
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="123">
     <p class="ne-p" id="u88b34330" style="text-align: center">
      <span class="ne-text">
       a+i
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u5421bbfc" style="text-align: center">
      <span class="ne-text">
       0x61fe00
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u1d85b11d" style="text-align: center">
      <span class="ne-text">
       0x61fe04
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u69ef1d0d" style="text-align: center">
      <span class="ne-text">
       0x61fe08
      </span>
     </p>
    </td>
    <td width="123">
     <p class="ne-p" id="u9256ea22" style="text-align: center">
      <span class="ne-text">
       0x61fe0c
      </span>
     </p>
    </td>
    <td width="127">
     <p class="ne-p" id="udf2932f4" style="text-align: center">
      <span class="ne-text">
       0x61fe10
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u21f0f76b">
   <span class="ne-text">
    从输出结果中可以看出，第5行相当于同时定义了5个变量，下标从0开始，每个变量存储对应的值。
   </span>
  </li>
  <li id="u0adef987">
   <span class="ne-text">
    从表格第3行可以看到，所有元素的内存地址连续，间隔为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     sizeof(float)
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
  <li id="u1adb9b1e">
   <span class="ne-text">
    从
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a+i
    </span>
   </code>
   <span class="ne-text">
    的输出结果中可以看出，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a+i
    </span>
   </code>
   <span class="ne-text">
    与
   </span>
   <code class="ne-code">
    <span class="ne-text">
     &amp;a[i]
    </span>
   </code>
   <span class="ne-text">
    相同，都是表示第i个元素的地址。这是因为数组名代表了数组首元素的地址，简称首地址，即
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    +0=
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a
    </span>
   </code>
   <span class="ne-text">
    =0x61fe00，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a+1
    </span>
   </code>
   <span class="ne-text">
    中的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     1
    </span>
   </code>
   <span class="ne-text">
    不代表一个字节，而是表示一个元素的空间，即
   </span>
   <code class="ne-code">
    <span class="ne-text">
     sizeof(float)
    </span>
   </code>
   <span class="ne-text">
    。因此第
   </span>
   <code class="ne-code">
    <span class="ne-text">
     i
    </span>
   </code>
   <span class="ne-text">
    个元素的地址为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a+i*sizeof(float)
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u8daf9b97" style="text-indent: 2em">
  <span class="ne-text">
   总而言之，数组可以通过偏移快速定位第
  </span>
  <code class="ne-code">
   <span class="ne-text">
    i
   </span>
  </code>
  <span class="ne-text">
   个元素。偏移在计算机中是一个非常快速的基本运算，这也是数组能够进行快速访问的根本原因。
  </span>
 </p>
 <h3 id="pNT2u">
  <span class="ne-text">
   知识点：T513
  </span>
 </h3>
 <table border=1 class="ne-table" id="EHD3a" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ue4891310">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="522">
     <p class="ne-p" id="ua90f617b" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u6a593e6f">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="97">
     <p class="ne-p" id="ue861e59c">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 71px">
    <td width="58">
     <p class="ne-p" id="u732ec138">
      <span class="ne-text">
       T513
      </span>
     </p>
    </td>
    <td width="522">
     <p class="ne-p" id="uf51a7786">
      <span class="ne-text">
       数组的连续内存分配模型，通过偏移快速定位元素是数组的突出优势。
      </span>
     </p>
     <p class="ne-p" id="ud72f191f">
      <span class="ne-text">
       理解数组的物理空间和有效元素个数是不同的
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u69d646e0">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#QAfJZ" href="ch3#QAfJZ">
       <span class="ne-text">
        T341
       </span>
      </a>
     </p>
    </td>
    <td width="97">
     <p class="ne-p" id="ub03b9280">
      <a class="ne-link" data-href="#AE9qD" href="#AE9qD">
       <span class="ne-text">
        T521
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#fakFb" href="#fakFb">
       <span class="ne-text">
        T525
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#Km6tT" href="#Km6tT">
       <span class="ne-text">
        T528
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#zTfai" href="#zTfai">
       <span class="ne-text">
        T542
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#IS3uW" href="ch6#IS3uW">
       <span class="ne-text">
        T621
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="wVcOg">
  <span class="ne-text">
   1.4 数组的基本运算
  </span>
 </h2>
 <p class="ne-p" id="u8d7a303f" style="text-indent: 2em">
  <span class="ne-text">
   C/C++中的数组虽然可以看做一个整体，但并不是一种独立存在的数据类型。按照语法规定，不能整体赋值、整体比较、整体输入输出。当需要进行赋值或比较或输入输出时，需要通过循环逐个元素的进行。
  </span>
 </p>
 <h3 id="Px9Hv">
  <span class="ne-text">
   例题5.1
  </span>
 </h3>
 <p class="ne-p" id="ue04db5b5" style="text-indent: 2em">
  <span class="ne-text">
   输入n个同学的成绩，输出其中小于平均分的成绩。
  </span>
 </p>
 <table border=1 class="ne-table" id="DbXBx" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u4f7622fd">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u7225ce7f">
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
     <p class="ne-p" id="u0bb9a191">
      <span class="ne-text">
       5
      </span>
     </p>
     <p class="ne-p" id="u264f6db0">
      <span class="ne-text">
       7 6 5 3 1
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ue10644a4">
      <span class="ne-text">
       3 1
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="eF4bW"><span
style="font-weight:bold;">代码5.5</span> 数组的输入和比较
<code>#include&lt;iostream&gt;
using namespace std;
int main (  )
{
    int n;
    cin&gt;&gt;n;
    int score[n];
    double sum=0;
    for(int i=0;i&lt;n;++i){
        cin&gt;&gt;score[i];
        sum += score[i];
    }
    for(int i=0;i&lt;n;++i)
        if(score[i]&lt;sum/n)
            cout&lt;&lt;score[i]&lt;&lt;' ';
}</code></pre>
 <ul class="ne-ul">
  <li id="u809c1cbe">
   <span class="ne-text">
    数组毕竟占据较多存储空间，如果能用简单变量解决，可以尽量避免使用数组。本例题中所有元素要使用两遍，当得到平均值后，必须第二次遍历数组，因此必须使用数组记录每个元素。
   </span>
  </li>
  <li id="u4e3ce849">
   <span class="ne-text">
    数组在第7行定义时，元素数量是变量，因此是一个动态数组，不可以直接进行初始化。只能通过第9-12行的循环，逐个进行赋值。
   </span>
  </li>
  <li id="u49abb90d">
   <span class="ne-text">
    当需要对每个元素与平均值进行比较时，必须逐个元素进行比较，C/C++中没有提供整体比较的语法支持。
   </span>
  </li>
 </ul>
 <h3 id="nbQfZ">
  <span class="ne-text">
   知识点：T514
  </span>
 </h3>
 <table border=1 class="ne-table" id="Y2ByV" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u64df8305">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ubed3eae9" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u7f8c9ff3">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf751fea4">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uda671436">
      <span class="ne-text">
       T514
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u7afe5085">
      <span class="ne-text">
       只有多个数据反复利用时，才需要数组；单次使用多个数据尽量不用数组
      </span>
     </p>
     <p class="ne-p" id="u70a4c804">
      <span class="ne-text">
       数组不能整体赋值、整体比较、整体输入输出，必须与循环结合
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u6d0f394e">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue627c818">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u40d79084">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161730" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161730" target="_blank">
       <span class="ne-text">
        (LX502)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161732" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161732" target="_blank">
       <span class="ne-text">
        (LX504)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161733" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161733" target="_blank">
       <span class="ne-text">
        (LX505)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="AxwhE">
  <span class="ne-text">
   1.5 数组作为函数参数
  </span>
 </h2>
 <p class="ne-p" id="uc5cf79ab" style="text-indent: 2em">
  <span class="ne-text">
   当定义一个数组
  </span>
  <code class="ne-code">
   <span class="ne-text">
    int a[10];
   </span>
  </code>
  <span class="ne-text">
   时，根据前文所述内容可知，同时分配了10个
  </span>
  <code class="ne-code">
   <span class="ne-text">
    sizeof(int)
   </span>
  </code>
  <span class="ne-text">
   大小的空间。
  </span>
  <code class="ne-code">
   <span class="ne-text">
    a
   </span>
  </code>
  <span class="ne-text">
   存储了首地址。但并不存储元素的数量，只是从首地址开始，通过偏移访问各个元素。因此当把数组作为函数的参数时，实参数组会把它的地址传递给形参数组，但数组的元素数量并不会被传递。因此数组作为函数的参数时，必须同时传递数组地址和数组中元素的数量，否则无法知道数组的有效范围。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="TXxsb"><span
style="font-weight:bold;">代码5.6</span> 最小值下标
<code>#include&lt;iostream&gt;
using namespace std;

int argmin(int n,int arr[]){	//数组的元素数量n和数组的首地址
    int min = 0;				//默认下标为0的元素最小
    for(int i=1;i&lt;n;++i)
        if(arr[i]&lt;arr[min])		//当前元素和最小值元素进行比较
            min = i;			//min保留最小值的下标
    return min;
}

int main (  )
{
    int n;
    cin&gt;&gt;n;
    int a[n+10];
    for(int i=0;i&lt;n;++i)
        cin&gt;&gt;a[i];
    cout&lt;&lt;argmin(n,a)&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="x9EBh" style="width: 100%">
  <tbody>
   <tr style="height: 37px">
    <td width="375">
     <p class="ne-p" id="ufec18252">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4303b9ac">
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
     <p class="ne-p" id="udcd9f220">
      <span class="ne-text">
       5
      </span>
     </p>
     <p class="ne-p" id="u4db32bef">
      <span class="ne-text">
       7 3 8 1 9
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="udc96391b">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u8be6f4b7">
   <span class="ne-text">
    由代码5.6可以看出，把数组作为函数的参数时，必须同时传递元素的数量和数组的地址。
   </span>
  </li>
  <li id="u2eea9997">
   <span class="ne-text">
    关注第4行的形参
   </span>
   <code class="ne-code">
    <span class="ne-text">
     arr
    </span>
   </code>
   <span class="ne-text">
    ，可以看到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    为空。数组定义时，理论上
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    中应该注明元素的数量。但是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     arr
    </span>
   </code>
   <span class="ne-text">
    是形参，在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     argmin
    </span>
   </code>
   <span class="ne-text">
    函数被调用之前，它没有存储空间。在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     argmin
    </span>
   </code>
   <span class="ne-text">
    函数被调用之后，它的作用就是存放实参的首地址，因此元素数量对它没有任何意义。
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    在此仅仅表明
   </span>
   <code class="ne-code">
    <span class="ne-text">
     arr
    </span>
   </code>
   <span class="ne-text">
    是一个数组，即整型数组类型；更准确的说，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     arr
    </span>
   </code>
   <span class="ne-text">
    只是为了存储一个
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int
    </span>
   </code>
   <span class="ne-text">
    类型的地址。因此
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    为空，或者写成
   </span>
   <code class="ne-code">
    <span class="ne-text">
     [0]
    </span>
   </code>
   <span class="ne-text">
    或其他任何整数，对程序运行都没有任何影响。甚至可以将
   </span>
   <code class="ne-code">
    <span class="ne-text">
     int arr[]
    </span>
   </code>
   <span class="ne-text">
    改写成
   </span>
   <code class="ne-code">
    <span class="ne-text">
     auto arr
    </span>
   </code>
   <span class="ne-text">
    ，根据实参赋值决定形参
   </span>
   <code class="ne-code">
    <span class="ne-text">
     arr
    </span>
   </code>
   <span class="ne-text">
    的数据类型，也是可以的。由此可以进一步了解，数组名不包含任何的元素数量信息。
   </span>
  </li>
 </ul>
 <h3 id="TFSS3">
  <span class="ne-text">
   知识点：T515-T516
  </span>
 </h3>
 <table border=1 class="ne-table" id="BeKKq" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ufc0bd50a">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua81ccbf6" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u2bbb6415">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u8e1cfc14">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u9256bc32">
      <span class="ne-text">
       T515
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc53b48a9">
      <span class="ne-text">
       数组作为函数的参数，只是传递首元素地址，与实参共享存储空间
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u94387ee5">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接ca">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#aplSt" href="ch6#aplSt">
       <span class="ne-text">
        T625
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u7ab60e50">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161740" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161740" target="_blank">
       <span class="ne-text">
        (LX512)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u13c1d37f">
      <span class="ne-text">
       T516
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u691cf4d0">
      <span class="ne-text">
       掌握求数组极值及极值对应下标的方法
      </span>
     </p>
    </td>
    <td width="70">
    </td>
    <td width="67">
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ub4caaabe">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161734" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161734" target="_blank">
       <span class="ne-text">
        (LX506)
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
 <h1 id="s7C1R">
  <span class="ne-text">
   2. 一维数组的应用
  </span>
 </h1>
 <h2 id="eVqvU">
  <span class="ne-text">
   2.1 数组的插入与删除
  </span>
 </h2>
 <p class="ne-p" id="ua76cdc5f" style="text-indent: 2em">
  <span class="ne-text">
   因为数组的存储空间一定是连续的，因此对于非尾部数据的插入和删除是无法物理实现的，只能通过逻辑方式满足需求。删除时，将被删除元素右侧的所有元素向前平移，插入时将所有元素向后平移，留出插入空间。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="BNQMS"><span
style="font-weight:bold;">代码5.7</span> 删除和插入元素
<code>#include&lt;iostream&gt;
using namespace std;
bool remove(int n,int arr[],int pos){	//删除长度为n的数组的第pos个元素
    if(pos&lt;0 || pos&gt;=n)  return false;
    for(int i=pos;i&lt;n-1;++i)	//正序遍历
        arr[i]=arr[i+1];		//删除位置右侧的值向左移动
    return true;
}
bool insert(int n,int arr[],int pos,int val){//在长度为n的数组的第pos个位置插入新元素val
    if(pos&lt;0)  return false;
    if(pos&gt;n)	pos = n;		//如果插入位置过大，把数据添加到数组的末尾
    for(int i=n-1;i&gt;=pos;--i)	//必须倒序循环，保证数据不被覆盖
        arr[i+1] = arr[i];		//插入位置右侧的值向右移动
    arr[pos] = val;     		//将新值放到空白处
    return true;
}
void print(int n,int arr[]){
    for(int i=0;i&lt;n;++i)
        cout&lt;&lt;arr[i]&lt;&lt;(i&lt;n-1?' ':'\n');//控制输出间隔
}
int main (  )
{
    int n,index;
    cin&gt;&gt;n&gt;&gt;index;
    int values[n];
    for(int i=0;i&lt;n;++i)
        cin&gt;&gt;values[i];
    n-=remove(n,values,index);
    print(n,values);
    n+=insert(n,values,index,37);
    print(n,values);
}</code></pre>
 <table border=1 class="ne-table" id="gY1s4" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u0fde5374">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5c8074d2">
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
     <p class="ne-p" id="uc591be8e">
      <span class="ne-text">
       5 2
      </span>
     </p>
     <p class="ne-p" id="u02c4e45a">
      <span class="ne-text">
       1 2 3 4 5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u315f3d0f">
      <span class="ne-text">
       1 2 4 5
      </span>
     </p>
     <p class="ne-p" id="u1ffb4f4d">
      <span class="ne-text">
       1 2 37 4 5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u1b9c6e78">
   <span class="ne-text">
    利用元素左移模拟删除，利用元素右移模拟插入。插入时一定要倒序移位，因为正序移位会出现元素覆盖和数据丢失。请自行尝试体验。
   </span>
  </li>
  <li id="ub90944a1">
   <span class="ne-text">
    插入或删除成功返回
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true
    </span>
   </code>
   <span class="ne-text">
    ，否则返回
   </span>
   <code class="ne-code">
    <span class="ne-text">
     false
    </span>
   </code>
   <span class="ne-text">
    ，借助
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true
    </span>
   </code>
   <span class="ne-text">
    /
   </span>
   <code class="ne-code">
    <span class="ne-text">
     false
    </span>
   </code>
   <span class="ne-text">
    和1/0的对应关系，对数据总元素进行修正（第28和30行）。也就是说，数组的物理存储空间不会改变的，只是从逻辑上认为元素的总量发生变化。
   </span>
  </li>
  <li id="uc789237a">
   <span class="ne-text">
    对于插入而言，一定要保证物理存储空间足够用，不要在插入时发生下标超上限的现象。
   </span>
  </li>
  <li id="u0231c0ef">
   <span class="ne-text">
    第18-19行对数据分隔显示做了一个示范。从视觉上一个元素加一个空格是没有问题的，但是对于在线评测系统，多出一个空格，可能会导致整个题目被判错，一定严格遵守题目的输出规范和要求。
   </span>
  </li>
 </ul>
 <h3 id="AE9qD">
  <span class="ne-text">
   知识点：T521
  </span>
 </h3>
 <table border=1 class="ne-table" id="LXOiv" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u15df0f02">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u7ca76b81" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u189df400">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u8ab69cf7">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ue9c63e1e">
      <span class="ne-text">
       T521
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uefe75c83">
      <span class="ne-text">
       数组只能对单个元素做逻辑插入和删除，注意循环移位时的元素覆盖问题
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue78ed875">
      <a class="ne-link" data-href="#pNT2u" href="#pNT2u">
       <span class="ne-text">
        T513
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u32bf7359">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="qQ3m1">
  <span class="ne-text">
   2.2 数组与循环的联动
  </span>
 </h2>
 <p class="ne-p" id="链接51" style="text-indent: 2em">
  <span class="ne-text">
   有时在题目中没有明显需要数组的提示，可以采用数组记录已知的数据，利用数组可以跟循环联动的特点，极大简化程序的流程。
  </span>
 </p>
 <p class="ne-p" id="u7e32dc06" style="text-indent: 2em">
  <span class="ne-text">
   在例题5.2中，由于每月天数的不规律性，导致无法直接使用循环，只能通过多分支进行逐条处理，代码非常冗余。但是通过把每月天数预置到数组中，让循环与数组形成联动，对程序书写进行了极大的简化，降低了出错的概率。
  </span>
 </p>
 <h3 id="NA6mZ">
  <span class="ne-text">
   例题5.2
  </span>
 </h3>
 <p class="ne-p" id="u68d94f5f" style="text-indent: 2em">
  <span class="ne-text">
   把1月1日当做第1天，当用户输入年份和第n天时，输出第n天是几月几日？
  </span>
 </p>
 <table border=1 class="ne-table" id="UdIsw" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ub46570f9">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5858feb8">
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
     <p class="ne-p" id="链接38">
      <span class="ne-text">
       2022 33
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc27a8536">
      <span class="ne-text">
       2月2日
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="RBvZK"><span
style="font-weight:bold;">代码5.8</span> 数组与循环的联动
<code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int year,n;
    cin&gt;&gt;year&gt;&gt;n;
    int month[12]={31,28,31,30,31,30,31,31,30,31,30,31};
    auto leapyear = [](int year){return year%400==0||(year%4==0 &amp;&amp; year%100!=0);};
    month[1]+=leapyear(year);
    int i=0;
    while(n&gt;month[i])
        n-=month[i++];
    cout&lt;&lt;i+1&lt;&lt;"月"&lt;&lt;n&lt;&lt;"日"&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u2c70fb0b">
   <span class="ne-text">
    第8行定义了一个数组，记录了每个月的天数。
   </span>
  </li>
  <li id="uf7353724">
   <span class="ne-text">
    第9行赋值号右侧是一个匿名函数，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     []
    </span>
   </code>
   <span class="ne-text">
    表示后面定义了一个函数，参数和函数体的写法和普通函数定义相同。将定义后的匿名函数赋值给
   </span>
   <code class="ne-code">
    <span class="ne-text">
     auto
    </span>
   </code>
   <span class="ne-text">
    变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     leapyear
    </span>
   </code>
   <span class="ne-text">
    ，此时的leapyear就是一个函数。auto表示根据赋值号右侧的内容自动解析变量的类型。此处的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     leapyear
    </span>
   </code>
   <span class="ne-text">
    就被解析为函数。对于简单的函数，或只需要使用一次的函数，可以采用匿名函数的方式进行定义。
   </span>
  </li>
  <li id="u020fd781">
   <span class="ne-text">
    第10行将二月增加是否为闰年，因为闰年的二月比其他年份的二月多一天，同样是利用了
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true
    </span>
   </code>
   <span class="ne-text">
    /
   </span>
   <code class="ne-code">
    <span class="ne-text">
     false
    </span>
   </code>
   <span class="ne-text">
    和1/0的对应关系。
   </span>
  </li>
  <li id="uf81ae3eb">
   <span class="ne-text">
    第12-13行，利用数组和循环的联动，快速简单的定位了月份和日期。
   </span>
  </li>
  <li id="u6aac6b47">
   <span class="ne-text">
    第13行的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ++
    </span>
   </code>
   <span class="ne-text">
    在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     i
    </span>
   </code>
   <span class="ne-text">
    后面，表示先执行当前表达式的运算，然后再对i进行加1操作。即先执行
   </span>
   <code class="ne-code">
    <span class="ne-text">
     n-=month[i]
    </span>
   </code>
   <span class="ne-text">
    ，再执行
   </span>
   <code class="ne-code">
    <span class="ne-text">
     i++
    </span>
   </code>
   <span class="ne-text">
    。将两条语句简化成了一条语句，但是功能完全相同。初学者如果掌握不好这种技巧，可以将第13行的表达式拆成两条语句，保证代码理解的清晰度。
   </span>
  </li>
 </ul>
 <h3 id="WGgmO">
  <span class="ne-text">
   知识点：T522-T523
  </span>
 </h3>
 <table border=1 class="ne-table" id="WDS2Y" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u82ab1817">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc77b216c" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="链接d6">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="udc33556b">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ue9fa759b">
      <span class="ne-text">
       T522
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u19bef5cc">
      <span class="ne-text">
       单循环与数组搭配使用，嵌套循环与二维数组搭配使用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u73e3e40c">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub35f09ed">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#mu9UI" href="ch8#mu9UI">
       <span class="ne-text">
        T874
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="u580ca9e4">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161735" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161735" target="_blank">
       <span class="ne-text">
        (LX507)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161736" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161736" target="_blank">
       <span class="ne-text">
        (LX508)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="链接45">
      <span class="ne-text">
       T523
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u7add7016">
      <span class="ne-text">
       掌握匿名函数的基本使用方法，理解这种形式，不做重点掌握
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
 <h2 id="FCrRm">
  <span class="ne-text">
   2.3 尺取法
  </span>
 </h2>
 <p class="ne-p" id="uf2277451" style="text-indent: 2em">
  <span class="ne-text">
   尺取法又称双指针法，用来解决序列的区间问题，是一种常见的优化技巧。分为反向扫描法和同向扫描法。
  </span>
 </p>
 <p class="ne-p" id="u65f7e5cd" style="text-indent: 2em">
  <span class="ne-text">
   反向扫描法又称为左右指针法，即设定两个指针i和j，分别指向数组的头和尾，i和j方向相反，i从头向尾，j从尾向头，在中间集合。虽然设定两个指针，但是对同一个数组同时遍历，算法复杂度为O(n)。初学者由于对语法的不熟悉，容易写成嵌套循环，这样算法复杂度变为O(n
  </span>
  <sup>
   <span class="ne-text">
    2
   </span>
  </sup>
  <span class="ne-text">
   )，造成了大量无效的遍历。
  </span>
 </p>
 <h3 id="b9kDc">
  <span class="ne-text">
   例题5.3
  </span>
 </h3>
 <p class="ne-p" id="ude83e839" style="text-indent: 2em">
  <span class="ne-text">
   给定一个数组arr，判断数组是否对称。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="uAz0V"><span
style="font-weight:bold;">代码5.9</span> 数组的多变量遍历
<code>bool sym(int n,int arr[])
{
    for(int i=0,j=n-1;i&lt;j;++i,--j)
        if(arr[i]!=arr[j])
            return false;
    return true;
}</code></pre>
 <ul class="ne-ul">
  <li id="u23a28952">
   <span class="ne-text">
    注意第3行两个变量同时变化遍历数组的方法。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u48ce52db" style="text-indent: 2em">
  <span class="ne-text">
   同向扫描法同样是即设定两个指针i和j，同时指向数组的头或尾，i和j移动方向相同，但偏移速度不同，因此又称为快慢指针法。关键是一个指针处的修改不能影响另外一个指针的遍历。
  </span>
 </p>
 <h3 id="UP8pF">
  <span class="ne-text">
   随堂练习5.1
  </span>
 </h3>
 <p class="ne-p" id="ubd75b3ae" style="text-indent: 2em">
  <span class="ne-text">
   给定一个数组，采用尺取法将数组逆序。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="ua0777c31">
   <span class="ne-text">
    提示：注意交换要在数组的中间停止，否则会把已经逆序的数组重新修改为正序。
   </span>
  </p>
 </div>
 <h3 id="xecmX">
  <span class="ne-text">
   例题5.4
  </span>
 </h3>
 <p class="ne-p" id="u2ece06eb" style="text-indent: 2em">
  <span class="ne-text">
   给定一个数组arr，要求删除其中的指定值val。
  </span>
 </p>
 <p class="ne-p" id="链接03">
  <span class="ne-text">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="ud5db7a06">
  <span class="ne-text">
   方案一：基于第2.1小节中的删除元素方法，每次删除一个值，算法复杂度为O(n
  </span>
  <sup>
   <span class="ne-text">
    2
   </span>
  </sup>
  <span class="ne-text">
   )。
  </span>
 </p>
 <p class="ne-p" id="u17ac0c7e">
  <span class="ne-text">
   方案二：新建一个数组，将原数组中的有效值添加到新数组中。以空间换时间，算法复杂度降为O(n)。
  </span>
 </p>
 <p class="ne-p" id="ud25a8d1a" style="text-indent: 2em">
  <span class="ne-text">
   显然第二种方法更好一些。但在一些特殊情况下，要求在原数组上删除指定元素，不允许建立新数组。仔细分析可以发现，一个删除后的数组，元素的数量一定小于或等于原数组，因此可以设置两个索引i和index，i遍历原数组，index遍历保留的元素。因为index小于等于i，因此index处的赋值不会影响i的遍历。具体如下：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Henlz"><span
style="font-weight:bold;">代码5.10</span> 删除指定元素
<code>int remove(int n,int arr[],int val)
{
    int index = 0;
    for(int i=0;i&lt;n;++i){
        if(arr[i]!=val){
            arr[index] = arr[i];
            index++;
        }
    }
    return index;
}</code></pre>
 <ul class="ne-ul">
  <li id="ueb7df5ca">
   <span class="ne-text">
    index一定小于或等于i，因此第6行的赋值操作对第4行正在进行的遍历操作不会造成任何影响。
   </span>
  </li>
  <li id="u27c0912c">
   <span class="ne-text">
    一次性删除所有指定的值val。函数最后返回index，代表了保留元素的个数。
   </span>
  </li>
  <li id="ueafbbc07">
   <span class="ne-text">
    第八章将要提到的STL的remove算法与以上代码的想法完全一致。既不需要创建新空间，算法复杂度也降低到O(n)。
   </span>
  </li>
 </ul>
 <h3 id="HPdn9">
  <span class="ne-text">
   随堂练习5.2
  </span>
 </h3>
 <p class="ne-p" id="u6b66711d" style="text-indent: 2em">
  <span class="ne-text">
   移除一个数组中的重复元素。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="链接53">
   <span class="ne-text">
    提示：依次遍历每个元素，删除其后继元素中与其值相同的元素。
   </span>
  </p>
 </div>
 <h3 id="BNafm">
  <span class="ne-text">
   例题5.5
  </span>
 </h3>
 <p class="ne-p" id="u3efeb884" style="text-indent: 2em">
  <span class="ne-text">
   给定两个按非递减顺序的整数数组 nums1 和 nums2，元素数量分别为m
            和 n 。合并 nums2 到 nums1 中，使合并后的数组同样保持非递减顺序。nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素。
  </span>
 </p>
 <p class="ne-p" id="u7aa23ef5">
  <span class="ne-text">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="u94188e20">
  <span class="ne-text">
   方案一、将nums2直接拼接到nums1的尾部，然后采用快速排序，重新达成非递减顺序，算法复杂度为O((m+n)log(m+n))。并没有用到原数组已经有序的条件。
  </span>
 </p>
 <p class="ne-p" id="ua8fd307e">
  <span class="ne-text">
   方案二、新建一个数组，依次将两个数组中复合条件的数据添加到新数组中。以空间换时间，算法复杂度降为O(m+n)。
  </span>
 </p>
 <p class="ne-p" id="u9dad5e63" style="text-indent: 2em">
  <span class="ne-text">
   如果不允许建立新空间呢？主要存在的问题是一个数据可能未被处理前，就被新数据覆盖。但是如果倒序遍历，先让一个索引p指向最后一个元素的位置m+n-1，这样p一定大于或等于m或n，因此可以得到以下方法：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="KCBjU"><span
style="font-weight:bold;">代码5.11</span> 合并有序数组 I
<code>void merge(int nums1[], int m, int nums2[], int n) {
    int p=m--+(--n);
    while(m&gt;=0&amp;&amp;n&gt;=0){		//或while(m+1&amp;&amp;n+1)
        nums1[p--] = nums1[m]&gt;nums2[n]?nums1[m--]:nums2[n--];
    }
    while(n&gt;=0){			//或while(n+1)
        nums1[p--] = nums2[n--];
    }
}</code></pre>
 <ul class="ne-ul">
  <li id="u3dba40a2">
   <span class="ne-text">
    第2行将p指向数据尾部，注意
   </span>
   <code class="ne-code">
    <span class="ne-text">
     m--
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     --n
    </span>
   </code>
   <span class="ne-text">
    的使用，之所以使用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     --n
    </span>
   </code>
   <span class="ne-text">
    ，是因为p应该等于
   </span>
   <code class="ne-code">
    <span class="ne-text">
     m+n-1
    </span>
   </code>
   <span class="ne-text">
    ，所以要先减1。（知识点：
   </span>
   <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#t5tWx" href="ch2#t5tWx">
    <span class="ne-text">
     T268
    </span>
   </a>
   <span class="ne-text">
    ）
   </span>
  </li>
  <li id="u2d6eb975">
   <code class="ne-code">
    <span class="ne-text">
     p
    </span>
   </code>
   <span class="ne-text">
    一定大于或等于m或n，因此第4行的赋值操作对第3行正在进行的遍历操作不会造成任何影响。
   </span>
  </li>
  <li id="u5230aca4">
   <span class="ne-text">
    第6-8行的循环是为了处理
   </span>
   <code class="ne-code">
    <span class="ne-text">
     nums1
    </span>
   </code>
   <span class="ne-text">
    已经被处理完毕，但是
   </span>
   <code class="ne-code">
    <span class="ne-text">
     nums2
    </span>
   </code>
   <span class="ne-text">
    还有残留数据，这些数据必须迁移到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     nums1
    </span>
   </code>
   <span class="ne-text">
    中。如果
   </span>
   <code class="ne-code">
    <span class="ne-text">
     nums1
    </span>
   </code>
   <span class="ne-text">
    还有残留，那么正好处于应有的位置，不需要处理。
   </span>
  </li>
  <li id="ua7d8316a">
   <span class="ne-text">
    如果nums1已经处理完毕，可以只处理nums2，因此可以将以上代码中的两个循环简化成一个循环。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="mpDPc"><span
style="font-weight:bold;">代码5.12</span> 合并有序数组 II
<code>void merge(int nums1[], int m, int nums2[], int n) {
    int p=m--+(--n);
    while(n&gt;=0){		//或while(m+1&amp;&amp;n+1)
        nums1[p--] = m&gt;=0&amp;&amp;nums1[m]&gt;nums2[n]?nums1[m--]:nums2[n--];
    }
}</code></pre>
 <h3 id="o8Kxq">
  <span class="ne-text">
   知识点：T524
  </span>
 </h3>
 <table border=1 class="ne-table" id="oB63X" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uf4969c5f">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="549">
     <p class="ne-p" id="udaf7c6eb" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u4b73a5cc">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u4286ba57">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="链接32">
      <span class="ne-text">
       T524
      </span>
     </p>
    </td>
    <td width="549">
     <p class="ne-p" id="u2207db94">
      <span class="ne-text">
       掌握尺取法多指针反向或同向扫描法，掌握多变量方式对序列的遍历，能够把对称判断、原地删除和合并等方法作为解题模板。
      </span>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u43b7ca9b">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#FdHGv" href="ch4#FdHGv">
       <span class="ne-text">
        T475
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#FdHGv" href="ch4#FdHGv">
       <span class="ne-text">
        T476
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接ac">
      <a class="ne-link" data-href="#K2mZX" href="#K2mZX">
       <span class="ne-text">
        T547
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="Aw7Ea">
  <span class="ne-text">
   2.4 空间换时间
  </span>
 </h2>
 <p class="ne-p" id="u4b1163b7" style="text-indent: 2em">
  <span class="ne-text">
   有时需要在两个以上的多维度上对数据进行遍历，或多单一维度进行多重遍历时，计算复杂度高。通过把数组作为中间媒介，可以实现降维，把嵌套循环简化为并列循环，甚至单循环，能够极大地降低算法的复杂度。这是一种用空间换时间的思路。嵌套循环体现了乘法的思想，并列循环体现了加法的思想，嵌套循环简化为并列循环能对计算效率进行极大地提升。
  </span>
 </p>
 <h3 id="yuD60">
  <span class="ne-text">
   例题5.6
  </span>
 </h3>
 <p class="ne-p" id="链接35" style="text-indent: 2em">
  <span class="ne-text">
   长度为
  </span>
  <code class="ne-code">
   <span class="ne-text">
    L
   </span>
  </code>
  <span class="ne-text">
   的长江路上有一排树。如果把长江路看成一个0~
  </span>
  <code class="ne-code">
   <span class="ne-text">
    L
   </span>
  </code>
  <span class="ne-text">
   的数轴，则数轴上的每个整数0,1,2,...
  </span>
  <code class="ne-code">
   <span class="ne-text">
    L
   </span>
  </code>
  <span class="ne-text">
   都种有一棵树。由于长江路部分区域要建地铁。这些区域用它们在数轴上的起始点（整数）和终止点（整数）表示，区域之间可能有重合的部分。现在要把建地铁区域的树(包括区域端点)移走，计算移走后路上还有多少棵树。
  </span>
 </p>
 <table border=1 class="ne-table" id="B425Z" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u91534c10">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u954f7127">
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
     <p class="ne-p" id="ua2ae780a">
      <span class="ne-text">
       10
      </span>
     </p>
     <p class="ne-p" id="ude2a280d">
      <span class="ne-text">
       3 6
      </span>
     </p>
     <p class="ne-p" id="u0c175316">
      <span class="ne-text">
       5 7
      </span>
     </p>
     <p class="ne-p" id="u0ec83477">
      <span class="ne-text">
       10 10
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u66f5a055">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u24e773f9">
  <span class="ne-text">
   【问题分析】从简单的思维出发，判断每棵树是否在给定的所有范围里。这样需要遍历所有的树
  </span>
  <code class="ne-code">
   <span class="ne-text">
    L
   </span>
  </code>
  <span class="ne-text">
   ，对于每棵树，再次遍历所有范围（假定共有
  </span>
  <code class="ne-code">
   <span class="ne-text">
    R
   </span>
  </code>
  <span class="ne-text">
   个范围），树和范围两个维度进行嵌套遍历，时间复杂度为O(L*R)，其中O为算法复杂度表示方法。这种嵌套循环复杂度高，而且容易出错。仔细分析，每棵树只有保留或移走两种状态，可以通过数组记录状态变化。更重要的是，以数组为媒介，可以将嵌套循环拆解为并列循环，时间复杂度降为O(L+R)。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="PVS4D"><span
style="font-weight:bold;">代码5.13</span> 空间换时间
<code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int L;
    cin&gt;&gt;L;
    bool tree[L+1];
    for(auto &amp;e:tree)    e = 1;
    int left,right;
    while(cin&gt;&gt;left&gt;&gt;right)
        for(int i=left;i&lt;=right;++i)	//将删除区域的值修改为0
            tree[i] = 0;
    int sum = 0;
    for(auto e:tree)
        sum += e;
    cout&lt;&lt;sum&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u83a4478b">
   <span class="ne-text">
    因为第8行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     tree
    </span>
   </code>
   <span class="ne-text">
    是一个动态数组，不能进行直接初始化。第9行用范围
   </span>
   <code class="ne-code">
    <span class="ne-text">
     for
    </span>
   </code>
   <span class="ne-text">
    的形式将数组全部初始化为1。注意这里要改变每个元素的值，因此
   </span>
   <code class="ne-code">
    <span class="ne-text">
     e
    </span>
   </code>
   <span class="ne-text">
    必须采用引用形式。
   </span>
  </li>
  <li id="u8f7dd609">
   <span class="ne-text">
    第14-16行借助true/false和1/0的对应关系，不采用判断，直接将所有数值求和得到剩余树的数量。
   </span>
  </li>
  <li id="ud44d039f">
   <span class="ne-text">
    第9行和第15-16行遍历所有的树，第11-13行遍历所有的范围。这两个遍历的中间媒介是数组tree，两个遍历形成并列关系而不是嵌套关系。
   </span>
  </li>
 </ul>
 <h3 id="XV2Mo">
  <span class="ne-text">
   例题5.7
  </span>
 </h3>
 <p class="ne-p" id="u25c3d26d" style="text-indent: 2em">
  <span class="ne-text">
   假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2
            个台阶。你有多少种不同的方法可以爬到楼顶呢？其中
  </span>
  <span class="ne-math" id="l0bKX">
   <img src="../assets/images/2d1ce477ad43aec77a0cf4b5d550f3f8.svg"/>
  </span>
  <span class="ne-text">
   。
  </span>
  <strong>
   <span class="ne-text">
    (
   </span>
  </strong>
  <a class="ne-link" data-href="https://leetcode.cn/problems/climbing-stairs/description/" href="https://leetcode.cn/problems/climbing-stairs/description/" target="_blank">
   <strong>
    <span class="ne-text">
     力扣70
    </span>
   </strong>
  </a>
  <strong>
   <span class="ne-text">
    )
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u3cd4ba49">
  <span class="ne-text" style="font-size: 16px">
   【题目解析】
  </span>
 </p>
 <p class="ne-p" id="uaba1a2ec" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   仔细分析题目，如果上到第n-2阶台阶共有f(n-2)种方法，上到第n-1阶台阶共有f(n-1)种方法，则f(n)=f(n-1)+f(n-2)，这其实就是一个斐波那契数列。因此采用递归求解非常简单。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="DpG5i"><span
style="font-weight:bold;">代码5.14</span> 递归求斐波那契数列 I
<code>#include&lt;iostream&gt;
using namespace std;
long long fib(int n){
    if(n==1||n==2)return n;
    return fib(n-1)+fib(n-2);
}
int main ()
{
    int n;
    cin&gt;&gt;n;
    long long num = fib(n);
    cout&lt;&lt;num&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u3eee3ede">
   <span class="ne-text" style="font-size: 16px">
    整个程序一目了然，但是当输入为50时，在codeblocks上的运行时间为55.5秒。耗时的主要原因是重复计算。n越大，重复的越多，耗时就越长。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="ue509986b" style="text-align: center">
  <img class="ne-image img-60" id="ua8c5fe6f" src="../assets/images/1675564329857-752bcb8b-e6a5-40d0-8d7e-d4d03a4f12dd.png"/>
 </p>
 <p class="ne-p" id="u5d840fbd" style="text-align: center">
  <span class="ne-text">
   图5.2 斐波那契数列的递归展开，以fib(6)为例
  </span>
 </p>
 <p class="ne-p" id="u85eff2c0" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   事实上，如果已经计算过fib(n)，可以存储起来，下次用到的时候直接使用，就可以极大的加快计算速度。这是一个比较经典的以空间换时间的操作。这种方法称为带备忘录的递归方法，可以解决绝大部分递归超时问题。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="z8BKM"><span
style="font-weight:bold;">代码5.15</span> 递归求斐波那契数列 II
<code>#include&lt;iostream&gt;
using namespace std;
long long ret[100]={0,1,2};				//建立一个备忘录
long long fib(int n){
    if(n &amp;&amp; !ret[n])					//如果需要更新备忘录
    	ret[n]=fib(n-1)+fib(n-2);		//更新备忘录
    return ret[n];						//返回备忘录中对应的值
}
int main ()
{
    int n;
    cin&gt;&gt;n;
    long long num = fib(n);
    cout&lt;&lt;num&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="uc1d5e7c9">
   <span class="ne-text" style="font-size: 16px">
    第3行给定了一个全局变量数组，并初始化了fib(1)和fib(2)的值，其余默认为0。全局变量的生命周期贯穿整个程序的运行，可以在任意位置使用。
   </span>
  </li>
  <li id="u35dfe888">
   <span class="ne-text" style="font-size: 16px">
    第6行将每次计算的结果保存到数组
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     ret
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    中的对应位置上。计算时第5行先进行判断，如果fib(n)已经计算过（不为0），这直接返回结果，这样极大的加快了计算速度。当输入为50甚至90时，运行时间在codeblocks上大约都为3.5秒，这还是因为包括了输入输出的时间。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="uce603abc" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   因为全局变量可以在任意处使用，可能会造成程序的混乱，因此并不建议使用。以下代码采用static静态变量，其作用域在局部，但是生命周期与全局变量相同。初始化操作只会执行一次。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="RKoQP"><span
style="font-weight:bold;">代码5.16</span> 递归求斐波那契数列 III
<code>long long fib(int n){
    static long long ret[100]={0,1,2};	//建立一个备忘录
    if(n &amp;&amp; !ret[n])					//如果需要更新备忘录
    	ret[n]=fib(n-1)+fib(n-2);		//更新备忘录
    return ret[n];						//返回备忘录中对应的值
}</code></pre>
 <ul class="ne-ul">
  <li id="链接1a">
   <span class="ne-text" style="font-size: 16px">
    第2行定义的
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     ret
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    是静态变量，只能在函数内部使用。但是其生命周期与全局变量一致，贯穿整个程序的运行过程。第2行的代码在反复调用
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     fib
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    函数的过程中会多次执行到该位置，但是这条语句只在第一次执行的时候起作用，后继执行到该位置的时候，会自动忽略第2行语句，因此整个变量的定义和初始化只会执行一次，其效果与全局变量完全相同。
   </span>
  </li>
 </ul>
 <h3 id="fakFb">
  <span class="ne-text">
   知识点：T525
  </span>
 </h3>
 <table border=1 class="ne-table" id="V1psN" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u5ba8d48f">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="链接91" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ud830860d">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u155c4cd1">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u317ae03a">
      <span class="ne-text">
       T525
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u873f98d0">
      <span class="ne-text">
       以空间消耗换取时间效率是算法优化的基本方法
      </span>
     </p>
     <p class="ne-p" id="uce1fc837">
      <span class="ne-text">
       利用全局变量或静态变量构建数组，实现递归的快速计算，注意静态变量的使用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="udca1f575">
      <a class="ne-link" data-href="#pNT2u" href="#pNT2u">
       <span class="ne-text">
        T513
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ud4ca7379">
      <a class="ne-link" data-href="#bDkij" href="#bDkij">
       <span class="ne-text">
        T526
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
     </p>
     <p class="ne-p" id="u5dbfa2f6">
      <a class="ne-link" data-href="#Km6tT" href="#Km6tT">
       <span class="ne-text">
        T528
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="KKCom">
  <span class="ne-text">
   2.5 打表法
  </span>
 </h2>
 <p class="ne-p" id="ue2be086f" style="text-indent: 2em">
  <span class="ne-text">
   在一些题目中，某些计算过程需要反复使用，这就造成了时间的严重消耗，可能造成超时问题。遇到这种情况，可以一次性计算所有可能输入对应的的结果，并保存到数组中，之后直接查询。这种方式主要对每个可能的计算只操作一遍，从而达到了节省时间的目的。这种利用数组的方式称为打表法。注意这个技巧只适用于输入的值域不大的问题，否则可能会导致内存超限、时间超限等问题。
  </span>
 </p>
 <h3 id="AuYzI">
  <span class="ne-text">
   例题5.8
  </span>
 </h3>
 <p class="ne-p" id="ub03a1782" style="text-indent: 2em">
  <span class="ne-text">
   给定n个不同的非负整数，求这些数中有多少对整数的值正好相差1。
  </span>
  <strong>
   <span class="ne-text">
    （CSP2014年9月真题）
   </span>
  </strong>
 </p>
 <p class="ne-p" id="ubf4899ac">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u9d6dd9df">
  <span class="ne-text">
   第一行包含一个整数n（1≤n≤1000），表示给定非负整数的个数
  </span>
 </p>
 <p class="ne-p" id="ucc8895b1">
  <span class="ne-text">
   第二行包含n个给定的非负整数，每个整数不超过10000
  </span>
 </p>
 <p class="ne-p" id="u0480e687">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="ub26900a2">
  <span class="ne-text">
   这n个非负整数中有多少对整数的值正好相差1
  </span>
 </p>
 <table border=1 class="ne-table" id="LpRse" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u14aecf53">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u3f21584e">
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
     <p class="ne-p" id="ucae2b18b">
      <span class="ne-text">
       6
      </span>
     </p>
     <p class="ne-p" id="u2543f9a1">
      <span class="ne-text">
       10 2 6 3 7 8
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u7b2f52ab">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u52dd320a">
  <span class="ne-text">
   【样例说明】
  </span>
 </p>
 <p class="ne-p" id="uc813b9d8">
  <span class="ne-text">
   相差为1的整数对包括(2,3), (6,7), (7,8)
  </span>
 </p>
 <p class="ne-p" id="u99f6b07c">
  <span class="ne-text">
   【问题分析】朴素的方法是逐个枚举，使用双重嵌套循环，时间复杂度为O(
  </span>
  <em>
   <span class="ne-text">
    n
   </span>
  </em>
  <sup>
   <span class="ne-text">
    2
   </span>
  </sup>
  <span class="ne-text">
   )。也可以先排序，然后检测相邻元素是否符合题目规定，时间复杂度为O(
  </span>
  <em>
   <span class="ne-text">
    n
   </span>
  </em>
  <span class="ne-text">
   log
  </span>
  <em>
   <span class="ne-text">
    n
   </span>
  </em>
  <span class="ne-text">
   )，即排序的复杂度。根据题目说明，每个非负整数最大不超过10000，因此最佳方式是创建一个元素个数为10000的数组，将所有数据标定出来，再进行向量元素检测。时间复杂度降为O(
  </span>
  <em>
   <span class="ne-text">
    n
   </span>
  </em>
  <span class="ne-text">
   )。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="BEfZD"><span
style="font-weight:bold;">代码5.17</span> 打表法
<code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int n;
    cin&gt;&gt;n;
    bool cnt[10010]= {0};				//给定一些冗余空间，防止边界错误
    int x,min=10000,max=0,ans;
    for(int i=0; i&lt;n; ++i){
        cin&gt;&gt;x;
        if(x&lt;min)   min = x;			//求最小值
        if(x&gt;max)   max = x;			//求最大值
        cnt[x] = 1;						//对应x的位置有数值
    }
    for(int i=min+1;i&lt;=max;++i)			//遍历所有有效数值
        ans += (cnt[i]+cnt[i-1]==2);	//如果相邻两个元素都有效，则相加必为2
    cout&lt;&lt;ans&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="uad35a1c4">
   <span class="ne-text">
    本题目借助数组，虽然浪费了一定的空间，但是极大降低了算法的复杂度。当对
   </span>
   <code class="ne-code">
    <span class="ne-text">
     cnt
    </span>
   </code>
   <span class="ne-text">
    进行赋值后，实际上就是按空间顺序完成了排序，又不需要排序那么复杂。
   </span>
  </li>
  <li id="u1218e0ff">
   <span class="ne-text">
    第8行元素只有10000个，但是边界是最容易出问题的地方，因此额外定义了10个空间。
   </span>
  </li>
  <li id="u28c20882">
   <span class="ne-text">
    第16行的遍历，可以是0~10000，但本算法在输入过程中求解了最大值和最小值，降低了遍历的范围。
   </span>
  </li>
  <li id="u4856a8a6">
   <span class="ne-text">
    第17行也可以修改为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ans += cnt[i]&amp;&amp;cnt[i-1]
    </span>
   </code>
   <span class="ne-text">
    ，同样表示两个相邻元素都为1时计数加1。
   </span>
  </li>
  <li id="u88ade4e2">
   <span class="ne-text">
    第17行也可以修改为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ans += cnt[i]&amp;cnt[i-1]
    </span>
   </code>
   <span class="ne-text">
    ，只有两个相邻元素都为1时，进行“位与”运算的结果才能为1。位运算是底层运算，计算效率最高。
   </span>
  </li>
 </ul>
 <h3 id="aIxI7">
  <span class="ne-text">
   随堂练习5.3
  </span>
 </h3>
 <p class="ne-p" id="ud94c6621" style="text-indent: 2em">
  <span class="ne-text">
   有N个非零且各不相同的整数。请你编一个程序求出它们中有多少对相反数(a和-a为一对相反数)。
  </span>
  <strong>
   <span class="ne-text">
    （CSP2014年3月真题）
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u497b59e8">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="ub6ad2482">
  <span class="ne-text">
   第一行包含一个正整数N (1≤N≤500)。
  </span>
 </p>
 <p class="ne-p" id="uee6f0187">
  <span class="ne-text">
   第二行为N个用单个空格隔开的非零整数，每个数的绝对值不超过1000，保证这些整数各不相同。
  </span>
 </p>
 <p class="ne-p" id="u7ec30186">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="u87e5a5bf">
  <span class="ne-text">
   只输出一个整数， 即这N个数中包含多少对相反数。
  </span>
 </p>
 <table border=1 class="ne-table" id="UiR5f" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uf0333f61">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u103d05d0">
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
     <p class="ne-p" id="ud55b44fc">
      <span class="ne-text">
       5
      </span>
     </p>
     <p class="ne-p" id="ub15ceffc">
      <span class="ne-text">
       1 2 3 -1 -2
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u08caf513">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="oIzDD">
  <span class="ne-text">
   例题5.9
  </span>
 </h3>
 <p class="ne-p" id="u85994bf8" style="text-indent: 2em">
  <span class="ne-text">
   给定n个整数，求第i~j之间所有数据的和。
  </span>
 </p>
 <p class="ne-p" id="u4c62697a">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u12943a79">
  <span class="ne-text">
   第一行包含一个正整数N (1≤N≤10000)。
  </span>
 </p>
 <p class="ne-p" id="u51820b6a">
  <span class="ne-text">
   第二行为N个用单个空格隔开的整数，每个数小于10
  </span>
  <sup>
   <span class="ne-text">
    5
   </span>
  </sup>
  <span class="ne-text">
   。
  </span>
 </p>
 <p class="ne-p" id="u7bb9d509">
  <span class="ne-text">
   从第三行开始，每行输入两个整数
  </span>
  <em>
   <span class="ne-text">
    i
   </span>
  </em>
  <span class="ne-text">
   和
  </span>
  <em>
   <span class="ne-text">
    j
   </span>
  </em>
  <span class="ne-text">
   ，1≤
  </span>
  <em>
   <span class="ne-text">
    i
   </span>
  </em>
  <span class="ne-text">
   ≤
  </span>
  <em>
   <span class="ne-text">
    j
   </span>
  </em>
  <span class="ne-text">
   ≤10000
  </span>
 </p>
 <p class="ne-p" id="ud396afe4">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="uc93b914a">
  <span class="ne-text">
   输出从输入第三行开始每行指定范围的所有整数的和
  </span>
 </p>
 <table border=1 class="ne-table" id="zsDlf" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uf6fac26e">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u875c72c5">
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
     <p class="ne-p" id="u35dfde0f">
      <span class="ne-text">
       6
      </span>
     </p>
     <p class="ne-p" id="ub64d09f7">
      <span class="ne-text">
       10 2 6 3 7 8
      </span>
     </p>
     <p class="ne-p" id="链接fc">
      <span class="ne-text">
       2 4
      </span>
     </p>
     <p class="ne-p" id="ub75c16fa">
      <span class="ne-text">
       3 6
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u00f4bb38">
      <span class="ne-text">
       11
      </span>
     </p>
     <p class="ne-p" id="u307a54cd">
      <span class="ne-text">
       24
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u4582ec1a">
  <span class="ne-text">
   【题目分析】
  </span>
 </p>
 <p class="ne-p" id="uc12dd337" style="text-indent: 2em">
  <span class="ne-text">
   这个题目从表面上看就是一个简单的数据求和问题，但是求和范围可能有重叠，重叠部分如果范围较大，次数较多时，就会造成严重的时间浪费，从而出现超时问题。以下方法采用打表法进行解决。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="PeIpG"><span
style="font-weight:bold;">代码5.18</span> 打表法求数据和
<code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int n,x;
    cin&gt;&gt;n;
    int table[10010]= {0};
    for(int i=0; i&lt;n; ++i){
        cin&gt;&gt;x;
        table[i+1] = table[i]+x;
    }
    int i,j;
    while(cin&gt;&gt;i&gt;&gt;j)
        cout&lt;&lt;table[j]-table[i-1]&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u637e7aaa">
   <span class="ne-text">
    第8行建立了一个数组，保存在第9~12行中输入数据的累积和。
   </span>
  </li>
  <li id="u276d0477">
   <span class="ne-text">
    第15行中，对应范围的两个累积和相减，就得到了这个范围内所有数据的和。这种方法的最大优势就体现在对于重复的范围只计算了一次，去除了时间的反复消耗。
   </span>
  </li>
 </ul>
 <h3 id="MUXsu">
  <span class="ne-text">
   例题5.10
  </span>
 </h3>
 <p class="ne-p" id="ucb538bec">
  <span class="ne-text">
   计算小于给定非负整数n的所有素数的个数。0 ≤ n ≤ 5 * 10
  </span>
  <sup>
   <span class="ne-text">
    6
   </span>
  </sup>
  <span class="ne-text">
   ，当n为0或1时，对应结果为0。
  </span>
  <strong>
   <span class="ne-text">
    （
   </span>
  </strong>
  <a class="ne-link" data-href="https://leetcode.cn/problems/count-primes/" href="https://leetcode.cn/problems/count-primes/" target="_blank">
   <strong>
    <span class="ne-text">
     力扣204
    </span>
   </strong>
  </a>
  <strong>
   <span class="ne-text">
    ）
   </span>
  </strong>
 </p>
 <table border=1 class="ne-table" id="ZQPjS" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接21">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ud22a5519">
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
     <p class="ne-p" id="u466aa86f">
      <span class="ne-text">
       10
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u92a53031">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="uec63c9f7">
  <span class="ne-text">
   【样例说明】
  </span>
 </p>
 <p class="ne-p" id="u6b83d2bb">
  <span class="ne-text">
   分别为2, 3, 5, 7。
  </span>
 </p>
 <p class="ne-p" id="u7f91bad8">
  <span class="ne-text">
   【题目分析】如果对范围内的每个数据都进行素数判断，会造成极大的时间浪费。利用打表法，把这个想法倒过来。从2开始向后遍历，将所有数据的倍数标记为非素数，这样统计起来非常简单。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="SQ1Tc"><span
style="font-weight:bold;">代码5.19</span> 打表法求素数个数
<code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int n;
    cin&gt;&gt;n;
    int res = 0;
    bool prime[n+10];
    for(auto &amp;e:prime)  e=true;
    for (int i = 2; i &lt; n; ++i){
        if (prime[i]) {							//如果i是素数
            ++res;								//答案加1
            for (int j = i+i; j &lt; n; j+=i)		//将i的所有倍数设置为false
                prime[j] = false;
        }
    }
    cout&lt;&lt;res&lt;&lt;endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u2feed93a">
   <span class="ne-text">
    第9行建立了一个数组保存所有可能的候选答案，通过第10行全部初始化为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
  <li id="u45296da0">
   <span class="ne-text">
    第11-17行从小到大遍历所有可能的候选答案，将素数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     i
    </span>
   </code>
   <span class="ne-text">
    的所有倍数全部标记为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     false
    </span>
   </code>
   <span class="ne-text">
    。剩余的就全部为素数。
   </span>
  </li>
  <li id="u5fe6714d">
   <span class="ne-text">
    虽然从表面上看是一个嵌套循环，时间复杂度应该为O(n
   </span>
   <sup>
    <span class="ne-text">
     2
    </span>
   </sup>
   <span class="ne-text">
    )，但是仔细分析就可以知道，第14行的循环是跳跃的，整个程序执行完毕后，数组中的每个元素只被第14行的循环访问一次。
   </span>
  </li>
 </ul>
 <h3 id="bDkij">
  <span class="ne-text">
   知识点：T526
  </span>
 </h3>
 <table border=1 class="ne-table" id="DPUnD" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uaffd11eb">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u78b9dae8" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="61">
     <p class="ne-p" id="u00d59ae4">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="64">
     <p class="ne-p" id="uf883bdcc">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="链接54">
      <span class="ne-text">
       T526
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u0e85ac82">
      <span class="ne-text">
       打表法是数组应用的最重要方法之一，需要重点掌握
      </span>
     </p>
     <p class="ne-p" id="ue02bf2b9">
      <span class="ne-text">
       空间消耗不能过大，一般在
      </span>
      <span class="ne-math" id="j7aKi">
       <img src="../assets/images/c7022ea2f7be44ce2b2cc27bef201f60.svg"/>
      </span>
      <span class="ne-text">
       以内，如果题目中没有缩减范围则不能用打表法
      </span>
     </p>
     <p class="ne-p" id="u7273c2cc">
      <span class="ne-text">
       尽量减少数组遍历的范围
      </span>
     </p>
    </td>
    <td width="61">
     <p class="ne-p" id="u3c694ee5">
      <a class="ne-link" data-href="#fakFb" href="#fakFb">
       <span class="ne-text">
        T525
       </span>
      </a>
     </p>
    </td>
    <td width="64">
     <p class="ne-p" id="ub270fa6c">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#cOtOt" href="ch8#cOtOt">
       <span class="ne-text">
        T833
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#cR2Bd" href="ch8#cR2Bd">
       <span class="ne-text">
        T871
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#jxNPL" href="ch8#jxNPL">
       <span class="ne-text">
        T872
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#Yve1p" href="ch8#Yve1p">
       <span class="ne-text">
        T873
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="684">
     <p class="ne-p" id="u5f52ed60">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161739" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161739" target="_blank">
       <span class="ne-text">
        (LX509)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161738" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161738" target="_blank">
       <span class="ne-text">
        (LX510)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="Tpq9G">
  <span class="ne-text">
   2.6 排序
  </span>
 </h2>
 <p class="ne-p" id="ud8fc4d48" style="text-indent: 2em">
  <span class="ne-text">
   排序是多数值运算中的基本操作，一般分为升序和降序。排序的方法有很多，经典排序方法包括冒泡法、选择法、插入法和归并排序法等。这些算法的动画演示可以参见网站
  </span>
  <a class="ne-link" data-href="https://visualgo.net/zh/sorting" href="https://visualgo.net/zh/sorting" target="_blank">
   <span class="ne-text">
    https://visualgo.net/zh/sorting
   </span>
  </a>
  <span class="ne-text">
   。
  </span>
 </p>
 <div class="ne-quote">
  <p class="ne-p" id="u14bc16b7">
   <span class="ne-text">
    visualgo是一个非常好的算法动画演示平台，很多常用算法都在该网站有动画形式展现。
   </span>
  </p>
 </div>
 <h3 id="wQDhG">
  <span class="ne-text">
   2.6.1 冒泡排序
  </span>
 </h3>
 <p class="ne-p" id="u781c2e10" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   冒泡排序是一种简单的排序算法，它也是一种稳定排序算法。
  </span>
  <span class="ne-text">
   重复遍历要排序的元素，依次比较两个相邻的元素，如果顺序错误就进行交换，直到没有相邻元素需要交换，完成排序。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。
  </span>
 </p>
 <p class="ne-p" id="链接e6" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   假设对待排序序列(5,1,4,2,8)进行升序排列，第一轮排序将最大元素置于最后：
  </span>
 </p>
 <p class="ne-p" id="u6d6708bb">
  <img class="ne-image img-70" id="u68921a78" src="../assets/images/1658920317330-459be34e-07e0-4642-b243-de5fffd8bd98.gif"/>
 </p>
 <p class="ne-p" id="u4e6c74d0" style="text-align: center">
  <span class="ne-text">
   图5.3 冒泡排序的第一轮排序
  </span>
 </p>
 <p class="ne-p" id="uceedb06b" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   第二轮待排序序列只包含前 4 个元素，将其中最大元素放置在待排序序列尾部：
  </span>
  <img class="ne-image img-70" id="u321c19bd" src="../assets/images/1658920445648-234a4e23-9637-405d-91e1-88f3b016d0c5.gif"/>
 </p>
 <p class="ne-p" id="u3db7541a" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   图5.4
            冒泡排序的第二轮排序
  </span>
 </p>
 <p class="ne-p" id="u3eb4b2a8" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(68, 68, 68)">
   第三轮待排序序列只包含前 3个元素，将其中最大元素放置在待排序序列尾部：
  </span>
 </p>
 <p class="ne-p" id="udb95ad8c">
  <img class="ne-image img-70" id="u3b92afa2" src="../assets/images/1658920575968-02c2b058-9ea0-494e-a51c-045b28306f0f.gif"/>
 </p>
 <p class="ne-p" id="udadd12ea" style="text-align: center">
  <span class="ne-text">
   图5.5 冒泡排序的第三轮排序
  </span>
 </p>
 <p class="ne-p" id="u8634c3d1" style="text-indent: 2em">
  <span class="ne-text">
   第四轮只剩下2个元素，对其进行顺序调整，完成排序。
  </span>
 </p>
 <p class="ne-p" id="u573d8b85">
  <img class="ne-image img-70" id="u908d2632" src="../assets/images/1658920721916-5732318c-b1ad-40f9-bee8-d957776ba801.gif"/>
 </p>
 <p class="ne-p" id="ua1c2b1e4" style="text-align: center">
  <span class="ne-text">
   图5.6 冒泡排序的第四轮排序
  </span>
 </p>
 <p class="ne-p" id="udb1ca1d4" style="text-indent: 2em">
  <span class="ne-text">
   由此可以推导，对于
  </span>
  <code class="ne-code">
   <span class="ne-text">
    n
   </span>
  </code>
  <span class="ne-text">
   个元素的排序，需要比较
  </span>
  <code class="ne-code">
   <span class="ne-text">
    n-1
   </span>
  </code>
  <span class="ne-text">
   轮，对于第
  </span>
  <code class="ne-code">
   <span class="ne-text">
    i
   </span>
  </code>
  <span class="ne-text">
   轮排序，比较
  </span>
  <code class="ne-code">
   <span class="ne-text">
    n-i
   </span>
  </code>
  <span class="ne-text">
   次。该算法时间复杂度为O(n
  </span>
  <sup>
   <span class="ne-text">
    2
   </span>
  </sup>
  <span class="ne-text">
   )。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="mrjZR"><span
style="font-weight:bold;">代码5.20</span> 冒泡排序
<code>#include &lt;iostream&gt;
using namespace std;

void bubble_sort(int n,int a[]) {
    for (int i = 0; i &lt; n; i++) {
        //对待排序序列进行冒泡排序
        for (int j = 0; j + 1 &lt; n - i; j++) {
            //相邻元素进行比较，当顺序不正确时，交换位置
            if (a[j] &gt; a[j + 1]) {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
        cout&lt;&lt;"第"&lt;&lt;i+1&lt;&lt;"轮排序：";
        for(int j = 0; j&lt; n; ++j)
            cout&lt;&lt;a[j]&lt;&lt;' ';
        cout&lt;&lt;endl;
    }
}

int main(){
    int a[] = { 5,1,4,2,8 };
    bubble_sort(sizeof(a)/sizeof(int),a);
    return 0;
}</code></pre>
 <h3 id="bgmHW">
  <span class="ne-text">
   2.6.2 其他典型排序方法
  </span>
 </h3>
 <p class="ne-p" id="uaf3021b1" style="text-indent: 2em">
  <strong>
   <span class="ne-text">
    选择法排序
   </span>
  </strong>
  <span class="ne-text">
   ：与冒泡法基本流程相同，但是每次比较的时候不进行交换，只是记录最优值的下标，每轮交换一次，将一个极值放到有序位置。只是交换的次数比冒泡法少。
  </span>
 </p>
 <p class="ne-p" id="u0ce5646c" style="text-indent: 2em">
  <strong>
   <span class="ne-text">
    插入法排序
   </span>
  </strong>
  <span class="ne-text">
   ：每次取出一个元素，放到已有有序数组的对应位置上。类似打牌时一边摸牌，一边排序。例如山东流行的“保皇”“勾机”等玩法需要四副牌，这种摸牌方法尤其通用。
  </span>
 </p>
 <p class="ne-p" id="u7cd20bd0" style="text-indent: 2em">
  <strong>
   <span class="ne-text">
    快速排序
   </span>
  </strong>
  <span class="ne-text">
   ：每轮随机选取一个元素作为基准，将所有元素分为比基准大和小两组，分别放到基准的左侧和右侧，然后分别对两组采用相同的方法进行处理。这样排序轮次降低为
  </span>
  <span class="ne-math" id="Q2ZuN">
   <img src="../assets/images/cd40280cdc832013a593b2df92ed2275.svg"/>
  </span>
  <span class="ne-text">
   。C++中默认提供的sort函数就是采用的快速排序方法。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="QTNB9"><span
style="font-weight:bold;">代码5.21</span> 快速排序函数
<code>#include &lt;iostream&gt;
#include &lt;algorithm&gt;
using namespace std;

bool cmp(int a,int b){
    return a&gt;b;
}

int main()
{
    int n;
    cin &gt;&gt; n;
    int a[n+3];
    for (int i=0;i&lt;n;++i){
        cin &gt;&gt; a[i];
    }
    sort(a,a+n);			//升序
    //reverse(a,a+n);		//逆序
    for (int i=0;i&lt;n;++i){
        cout &lt;&lt; a[i] &lt;&lt; " ";
    }
    cout&lt;&lt;endl;
    sort(a,a+n,cmp);			//按照cmp函数指定的规则进行排序，此处为降序
    for (int i=0;i&lt;n;++i){
        cout &lt;&lt; a[i] &lt;&lt; " ";
    }
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="fe9Di" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uc64e9462">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接01">
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
     <p class="ne-p" id="uadd4410b">
      <span class="ne-text">
       4
      </span>
     </p>
     <p class="ne-p" id="ua9c16f29">
      <span class="ne-text">
       5 1 7 6
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua6197b86">
      <span class="ne-text">
       1 5 6 7
      </span>
     </p>
     <p class="ne-p" id="u3812d3c5">
      <span class="ne-text">
       7 6 5 1
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u318c91fb">
   <code class="ne-code">
    <span class="ne-text">
     sort
    </span>
   </code>
   <span class="ne-text">
    默认按照升序排列，如果需要降序，将排列好的数组调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     reverse
    </span>
   </code>
   <span class="ne-text">
    进行逆序即可。
   </span>
  </li>
  <li id="u2e548913">
   <span class="ne-text">
    注意第5-7行自定义的比较函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     cmp
    </span>
   </code>
   <span class="ne-text">
    ，要求返回值为布尔类型，两个参数的数据类型与数组中元素的数据类型相同。其中a和b代表数组中的两个元素。函数体中定义两个元素的比较规则。例如第6行中定义当
   </span>
   <code class="ne-code">
    <span class="ne-text">
     a&gt;b
    </span>
   </code>
   <span class="ne-text">
    时返回为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     true
    </span>
   </code>
   <span class="ne-text">
    ，因此第23行的调用结果形成降序。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u762b0a2f" style="text-indent: 2em">
  <span class="ne-text">
   一般情况下，称某个排序算法稳定，指的是当待排序序列中有相同的元素时，它们的相对位置在排序前后不会发生改变。在NOI竞赛中，经常考察算法的稳定性，下表列出常用排序算法的时间复杂度和稳定性。
  </span>
 </p>
 <p class="ne-p" id="u10ca6adf" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   表5.2
            常用排序算法的时间复杂度和稳定性
  </span>
 </p>
 <table border=1 class="ne-table no-border" id="NR6nV" style="text-align:center" align="center">
  <tbody>
   <tr style="height: 33px">
    <td colspan="7" style="background-color: #101E60" width="855">
     <p class="ne-p" id="u1680db17" style="text-align: center">
      <strong>
       <span class="ne-text" style="color: #FFFFFF">
        各种常用排序算法
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" style="background-color: #CEF5F7" width="107">
     <p class="ne-p" id="u2c40f95e" style="text-align: center">
      <strong>
       <span class="ne-text">
        类别
       </span>
      </strong>
     </p>
    </td>
    <td rowspan="2" style="background-color: #CEF5F7" width="107">
     <p class="ne-p" id="uf7152c9c" style="text-align: center">
      <strong>
       <span class="ne-text">
        排序方法
       </span>
      </strong>
     </p>
    </td>
    <td colspan="3" style="background-color: #CEF5F7" width="409">
     <p class="ne-p" id="u6cfeb09f" style="text-align: center">
      <strong>
       <span class="ne-text">
        时间复杂度
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #CEF5F7" width="124">
     <p class="ne-p" id="u58ce580e" style="text-align: center">
      <strong>
       <span class="ne-text">
        空间复杂度
       </span>
      </strong>
     </p>
    </td>
    <td rowspan="2" style="background-color: #CEF5F7" width="108">
     <p class="ne-p" id="u83b0542e" style="text-align: center">
      <strong>
       <span class="ne-text">
        稳定性
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td style="background-color: #CEF5F7" width="132">
     <p class="ne-p" id="u004e90ac" style="text-align: center">
      <strong>
       <span class="ne-text">
        平均情况
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #CEF5F7" width="145">
     <p class="ne-p" id="u6b8acef7" style="text-align: center">
      <strong>
       <span class="ne-text">
        最好情况
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #CEF5F7" width="132">
     <p class="ne-p" id="ue3bac58b" style="text-align: center">
      <strong>
       <span class="ne-text">
        最坏情况
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #CEF5F7" width="124">
     <p class="ne-p" id="u0daa17a5" style="text-align: center">
      <strong>
       <span class="ne-text">
        辅助存储
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" style="background-color: #F8B881" width="107">
     <p class="ne-p" id="u40ed5293" style="text-align: center">
      <strong>
       <span class="ne-text">
        插入排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F8B881" width="107">
     <p class="ne-p" id="u92729dc2" style="text-align: center">
      <strong>
       <span class="ne-text">
        直接插入
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="udf56efdb" style="text-align: center">
      <span class="ne-math" id="HGN1C">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="u8d3fd7e5" style="text-align: center">
      <span class="ne-math" id="NQ1Na">
       <img src="../assets/images/e65a67ac353abeeff44c359310d05c02.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u35d877f3" style="text-align: center">
      <span class="ne-math" id="eKgbx">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u4c6399fa" style="text-align: center">
      <span class="ne-math" id="kCvAS">
       <img src="../assets/images/a2006f1ac61cb1902beacb3e29fff089.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="u370c7fe7" style="text-align: center">
      <span class="ne-text">
       稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td style="background-color: #F8B881" width="107">
     <p class="ne-p" id="链接a6" style="text-align: center">
      <strong>
       <span class="ne-text">
        shell排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u37889af5" style="text-align: center">
      <span class="ne-math" id="MvQKF">
       <img src="../assets/images/057b59460eee88aad289b71782d747e2.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="ud8d18d45" style="text-align: center">
      <span class="ne-math" id="pWGME">
       <img src="../assets/images/e65a67ac353abeeff44c359310d05c02.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="ua7f3c274" style="text-align: center">
      <span class="ne-math" id="ebqyJ">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u730a7963" style="text-align: center">
      <span class="ne-math" id="osgIF">
       <img src="../assets/images/a2006f1ac61cb1902beacb3e29fff089.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="链接f2" style="text-align: center">
      <span class="ne-text">
       不稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" style="background-color: #F8B881" width="107">
     <p class="ne-p" id="u1ed5767b" style="text-align: center">
      <strong>
       <span class="ne-text">
        选择排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F8B881" width="107">
     <p class="ne-p" id="ufb545f21" style="text-align: center">
      <strong>
       <span class="ne-text">
        直接选择
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u7fe9ef31" style="text-align: center">
      <span class="ne-math" id="x1xB7">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="u205cdd53" style="text-align: center">
      <span class="ne-math" id="JBGw0">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="ua9d7f0c0" style="text-align: center">
      <span class="ne-math" id="NmQGS">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u6819ae9d" style="text-align: center">
      <span class="ne-math" id="ZMn2t">
       <img src="../assets/images/a2006f1ac61cb1902beacb3e29fff089.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="u74b89cc1" style="text-align: center">
      <span class="ne-text">
       不稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td style="background-color: #F8B881" width="107">
     <p class="ne-p" id="ued955eb8" style="text-align: center">
      <strong>
       <span class="ne-text">
        堆排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="ua2274385" style="text-align: center">
      <span class="ne-math" id="Fm5Y9">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="uc8839769" style="text-align: center">
      <span class="ne-math" id="DnYvO">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u8c5a6c3b" style="text-align: center">
      <span class="ne-math" id="zd56k">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u80b48ca2" style="text-align: center">
      <span class="ne-math" id="l2ACv">
       <img src="../assets/images/a2006f1ac61cb1902beacb3e29fff089.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="u52a5fc79" style="text-align: center">
      <span class="ne-text">
       不稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" style="background-color: #F8B881" width="107">
     <p class="ne-p" id="ub7f5a2fa" style="text-align: center">
      <strong>
       <span class="ne-text">
        交换排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F8B881" width="107">
     <p class="ne-p" id="u63adc47a" style="text-align: center">
      <strong>
       <span class="ne-text">
        冒泡排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="uff08789c" style="text-align: center">
      <span class="ne-math" id="M3MEp">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="u35912cc9" style="text-align: center">
      <span class="ne-math" id="tF5C8">
       <img src="../assets/images/e65a67ac353abeeff44c359310d05c02.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u076cbcb0" style="text-align: center">
      <span class="ne-math" id="rDZna">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u0f3be563" style="text-align: center">
      <span class="ne-math" id="gHKLn">
       <img src="../assets/images/a2006f1ac61cb1902beacb3e29fff089.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="u6e4f51d6" style="text-align: center">
      <span class="ne-text">
       稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td style="background-color: #F8B881" width="107">
     <p class="ne-p" id="u750bacd4" style="text-align: center">
      <strong>
       <span class="ne-text">
        快速排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u7eb608aa" style="text-align: center">
      <span class="ne-math" id="K9zRk">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="u8ba5017e" style="text-align: center">
      <span class="ne-math" id="b4kp9">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="ufe372be1" style="text-align: center">
      <span class="ne-math" id="GNze3">
       <img src="../assets/images/f2d5f588234eb61a559ff90c41511b85.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u4452a5a1" style="text-align: center">
      <span class="ne-math" id="Gc5Ot">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="u96959b75" style="text-align: center">
      <span class="ne-text">
       不稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="2" style="background-color: #F8B881" width="214">
     <p class="ne-p" id="u069e59f1" style="text-align: center">
      <strong>
       <span class="ne-text">
        归并排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="ub670663a" style="text-align: center">
      <span class="ne-math" id="TuDp9">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="u7a6df89b" style="text-align: center">
      <span class="ne-math" id="Lnovf">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u38aa211c" style="text-align: center">
      <span class="ne-math" id="c4HQM">
       <img src="../assets/images/cc25c72f0ea4026e2d48746dc93d855d.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="u1a3b185c" style="text-align: center">
      <span class="ne-math" id="YXRZA">
       <img src="../assets/images/a2006f1ac61cb1902beacb3e29fff089.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="u85f71f0f" style="text-align: center">
      <span class="ne-text">
       稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="2" style="background-color: #F8B881" width="214">
     <p class="ne-p" id="ubbad094b" style="text-align: center">
      <strong>
       <span class="ne-text">
        基数排序
       </span>
      </strong>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="u003ed9ff" style="text-align: center">
      <span class="ne-math" id="DdBB5">
       <img src="../assets/images/09842c90e02b38248f6f9bca3bba2979.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="145">
     <p class="ne-p" id="ua7a0166a" style="text-align: center">
      <span class="ne-math" id="Zss1e">
       <img src="../assets/images/b4d3ac356aef6e64c1c425155c81b9d8.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="132">
     <p class="ne-p" id="uded5575c" style="text-align: center">
      <span class="ne-math" id="OtUzu">
       <img src="../assets/images/09842c90e02b38248f6f9bca3bba2979.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="124">
     <p class="ne-p" id="uacf71304" style="text-align: center">
      <span class="ne-math" id="MYB1Y">
       <img src="../assets/images/120f6e4d5da3fdac818f17632cc4f475.svg"/>
      </span>
     </p>
    </td>
    <td style="background-color: #F5D480" width="108">
     <p class="ne-p" id="uc5c85f02" style="text-align: center">
      <span class="ne-text">
       稳定
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="7" style="background-color: #8CCF17" width="855">
     <p class="ne-p" id="ua5f2187d" style="text-align: center">
      <span class="ne-text">
       注：基数排序的复杂度中，r
                            代表关键字的基数，d 代表长度，n 代表关键字的个数
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="pyYpq">
  <span class="ne-text">
   知识点：T527
  </span>
 </h3>
 <table border=1 class="ne-table" id="y6HAe" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u8cb5b9ba">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u2a7d4f6b" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub2d829b3">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ud4a78711">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u82f327cf">
      <span class="ne-text">
       T527
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="udea63818">
      <span class="ne-text">
       排序是基本算法，理解冒泡法、选择法、插入法和快速排序的基本思想和时间效率；能使用algorithm库中的sort函数对数组进行快速排序，能自定义比较规则
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uaf408078">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#XPPV7" href="ch3#XPPV7">
       <span class="ne-text">
        T312
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u80699b14">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="696">
     <p class="ne-p" id="ucaf0af93">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161737" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161737" target="_blank">
       <span class="ne-text">
        (LX511)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="e3uMh">
  <span class="ne-text">
   2.7 动态规划*
  </span>
 </h2>
 <p class="ne-p" id="u4212ada1" style="text-indent: 2em">
  <span class="ne-text">
   动态规划（Dynamic Programming,
            DP）是求解多阶段决策问题最优化的一种算法技术。为了解决复杂问题，它将大问题分解为相对简单的子问题，大问题的最优解取决于子问题的最优解。
  </span>
 </p>
 <p class="ne-p" id="u49f8e938" style="text-indent: 2em">
  <span class="ne-text">
   如果一个问题，能够把所有可能的答案穷举出来，并且穷举出来后，发现存在重叠子问题，就可以考虑使用动态规划。
  </span>
  <strong>
   <span class="ne-text">
    重叠子问题
   </span>
  </strong>
  <span class="ne-text">
   是指求解大问题时需要多次重复求解小问题，它曾在
  </span>
  <a class="ne-link" data-href="#XV2Mo" href="#XV2Mo">
   <span class="ne-text">
    例题5.7
   </span>
  </a>
  <span class="ne-text">
   中被提及。
  </span>
 </p>
 <p class="ne-p" id="链接f7" style="text-indent: 2em">
  <span class="ne-text">
   下面以例题5.7为例，讲解使用动态规划解题的步骤。
  </span>
 </p>
 <p class="ne-p" id="u305d31e7">
  <strong>
   <span class="ne-text">
    第一步：穷举分析
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u28ee8075" style="text-indent: 2em">
  <span class="ne-text">
   假设爬到第n级台阶共有f(n)种爬法。
  </span>
 </p>
 <p class="ne-p" id="ud056e690" style="text-indent: 2em">
  <span class="ne-text">
   当台阶数n为1时，只有一种爬法，f(1) = 1。
  </span>
 </p>
 <p class="ne-p" id="u07eacb16" style="text-indent: 2em">
  <span class="ne-text">
   当台阶数n为2时，有两种爬法。第一种是直接爬两级，第二种是先爬一级然后再爬一级。f(2) = 2。
  </span>
 </p>
 <p class="ne-p" id="u9069da46" style="text-indent: 2em">
  <span class="ne-text">
   当台阶数n为3时，要么是先爬到第二级台阶然后再爬一级，要么是先爬到第一级台阶然后再直接爬两级。因此f(3) = f(2) + f(1) = 3。
  </span>
 </p>
 <p class="ne-p" id="u0c61c59e" style="text-indent: 2em">
  <span class="ne-text">
   当台阶数n为4时，要么是先爬到第三级台阶然后再爬一级，要么是先爬到第二级台阶然后再直接爬两级。因此f(4) = f(3) + f(2) = 5。
  </span>
 </p>
 <p class="ne-p" id="ueaefc84f" style="text-indent: 2em">
  <span class="ne-text">
   以此类推。
  </span>
 </p>
 <p class="ne-p" id="链接ce">
  <strong>
   <span class="ne-text">
    第二步：确定边界
   </span>
  </strong>
 </p>
 <p class="ne-p" id="ue47ffc8c" style="text-indent: 2em">
  <span class="ne-text">
   通过穷举分析，发现当台阶数n是1或2时，能够直接求得有多少种爬法，即f(1)
            = 1, f(2) = 2。当台阶数
  </span>
  <span class="ne-math" id="m0HJe">
   <img src="../assets/images/6cfed3df29ab5de9a8803963ff06dcd0.svg"/>
  </span>
  <span class="ne-text">
   时，已经呈现出规律：f(n) = f(n-1) + f(n-2)。因此f(1) = 1, f(2) = 2就是爬楼梯问题的边界。
  </span>
 </p>
 <p class="ne-p" id="uc488b046">
  <strong>
   <span class="ne-text">
    第三步：找规律，确定最优子结构
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u6a088195" style="text-indent: 2em">
  <strong>
   <span class="ne-text">
    最优子结构
   </span>
  </strong>
  <span class="ne-text">
   是指大问题的最优解可以由其子问题的最优解有效地构造出来。当台阶数
  </span>
  <span class="ne-math" id="zqyTG">
   <img src="../assets/images/6cfed3df29ab5de9a8803963ff06dcd0.svg"/>
  </span>
  <span class="ne-text">
   时，有f(n) = f(n-1) + f(n-2)，因此
  </span>
  <span class="ne-text" style="color: rgb(77, 77, 77)">
   f(n-1)和f(n-2) 就是 f(n) 的最优子结构。
  </span>
 </p>
 <p class="ne-p" id="uedc6ea8c">
  <strong>
   <span class="ne-text">
    第四步：写出状态转移方程
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u2a3e100f" style="text-indent: 2em">
  <span class="ne-text">
   通过前面三个步骤，得到状态转移方程如下：
  </span>
 </p>
 <p class="ne-p" id="ucdaa97fe" style="text-align: center">
  <span class="ne-math" id="Y9TEb">
   <img src="../assets/images/2265b1d76248c03dc23a0239619d08dc.svg"/>
  </span>
 </p>
 <p class="ne-p" id="u87b7a629">
  <span class="ne-text">
   使用动态规划解题的模板如下：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="ZtOXQ"><span
style="font-weight:bold;">代码5.22</span> 动态规划解题的模板
<code>// 动态规划解题的模板
// dp[0][0][...] = 边界值;
// for(状态1: 所有状态1的值){
//     for(状态2: 所有状态2的值){
//         for(...){
//         	状态转移方程;
//         }
//     }
// }
#include&lt;iostream&gt;
using namespace std;
int main ()
{
    int n;
    cin&gt;&gt;n;
    int a[n] = {1,2};				//设定边界值
    for(int i=2;i&lt;n;i++)			//遍历所有状态1的值
        a[i] = a[i-1]+a[i-2];		//转移方程
	cout&lt;&lt;a[n-1];
    return 0;
}</code></pre>
 <h3 id="Eno2R">
  <span class="ne-text">
   例题5.11
  </span>
 </h3>
 <p class="ne-p" id="u9cdbda59" style="text-indent: 2em">
  <span class="ne-text">
   给你一个整数数组 nums ，找到其中最长严格递增子序列(Longest
            Increasing Subsequence, LIS)的长度。
  </span>
 </p>
 <p class="ne-p" id="ucfb6dd5a">
  <strong>
   <span class="ne-text">
    子序列
   </span>
  </strong>
  <span class="ne-text">
   是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
            的子序列。
  </span>
  <strong>
   <span class="ne-text">
    （
   </span>
  </strong>
  <a class="ne-link" data-href="https://leetcode.cn/problems/longest-increasing-subsequence/" href="https://leetcode.cn/problems/longest-increasing-subsequence/" target="_blank">
   <strong>
    <span class="ne-text">
     力扣300
    </span>
   </strong>
  </a>
  <strong>
   <span class="ne-text">
    ）
   </span>
  </strong>
 </p>
 <p class="ne-p" id="udeba5c2d">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u0b14e037">
  <span class="ne-text">
   第一行，整数数组nums的元素个数。
  </span>
 </p>
 <p class="ne-p" id="ub6c27511">
  <span class="ne-text">
   第二行，整数数组nums，整数之间用空格分隔。
  </span>
 </p>
 <p class="ne-p" id="uc881a350">
  <span class="ne-text">
   1 &lt;= nums.length &lt;= 2500，-10
  </span>
  <sup>
   <span class="ne-text">
    4
   </span>
  </sup>
  <span class="ne-text">
   &lt;= nums[i] &lt;= 10
  </span>
  <sup>
   <span class="ne-text">
    4
   </span>
  </sup>
 </p>
 <p class="ne-p" id="u0f375c92">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="ue32f320f">
  <span class="ne-text">
   最长严格递增子序列的长度。
  </span>
 </p>
 <table border=1 class="ne-table" id="BVIhn" style="width: 100%">
  <tbody>
   <tr style="height: 37px">
    <td width="375">
     <p class="ne-p" id="ub5129e9c">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ue2f82da3">
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
     <p class="ne-p" id="u0cea57e7">
      <span class="ne-text">
       8
      </span>
     </p>
     <p class="ne-p" id="u88312d24">
      <span class="ne-text">
       10 9 2 5 3 7 101 18
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uddfcb250">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="uecf2e9f4">
  <span class="ne-text">
   【题目分析】
  </span>
  <span class="ne-text" style="color: #DF2A3F">
  </span>
 </p>
 <p class="ne-p" id="u20f8ff78">
  <strong>
   <span class="ne-text">
    第一步：穷举分析
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u5bdd8e5d" style="text-indent: 2em">
  <span class="ne-text">
   以样例输入中的数组[10, 9, 2, 5, 3, 7, 101,
            18]为例，进行穷举分析：
  </span>
 </p>
 <p class="ne-p" id="u53e3eb72" style="text-indent: 2em">
  <span class="ne-text">
   当nums只有一个元素10时，最长严格递增子序列是{10}，长度是1。
  </span>
 </p>
 <p class="ne-p" id="u1c421c12" style="text-indent: 2em">
  <span class="ne-text">
   当nums加入一个元素9时，最长严格递增子序列是{10}或{9}，长度是1。
  </span>
 </p>
 <p class="ne-p" id="uac517123" style="text-indent: 2em">
  <span class="ne-text">
   当nums再加入一个元素2时，最长严格递增子序列是{10}或{9}或{2}，长度是1。
  </span>
 </p>
 <p class="ne-p" id="u1936f4cc" style="text-indent: 2em">
  <span class="ne-text">
   当nums再加入一个元素5时，最长严格递增子序列是{2,
            5}，长度是2。
  </span>
 </p>
 <p class="ne-p" id="u6f74c165" style="text-indent: 2em">
  <span class="ne-text">
   当nums再加入一个元素3时，最长严格递增子序列是{2, 5}或{2,
            3}，长度是2。
  </span>
 </p>
 <p class="ne-p" id="u66b7233e" style="text-indent: 2em">
  <span class="ne-text">
   当nums再加入一个元素7时，最长严格递增子序列是{2, 5, 7}或{2,
            3, 7}，长度是3。
  </span>
 </p>
 <p class="ne-p" id="u2d89dc87" style="text-indent: 2em">
  <span class="ne-text">
   当nums再加入一个元素101时，最长严格递增子序列是{2, 5, 7,
            101}或{2, 3, 7, 101}，长度是4。
  </span>
 </p>
 <p class="ne-p" id="u0151f581" style="text-indent: 2em">
  <span class="ne-text">
   当nums再加入一个元素18时，最长严格递增子序列是{2, 5, 7,
            101}或{2, 3, 7, 101}或{2, 5, 7, 18}或{2, 3, 7, 18}，长度是4。
  </span>
 </p>
 <p class="ne-p" id="u5aa4937b" style="text-indent: 2em">
  <span class="ne-text">
   分析以上过程可得，在以数组每个元素结尾的最长严格递增子序列组成的集合中，元素最多的即为数组的最长严格递增子序列。因此原问题转化成先求出以每个元素结尾的最长严格递增子序列集合，再求最大长度。创建一个整型数组
  </span>
  <code class="ne-code">
   <span class="ne-text">
    dp
   </span>
  </code>
  <span class="ne-text">
   ，用
  </span>
  <code class="ne-code">
   <span class="ne-text">
    dp[i]
   </span>
  </code>
  <span class="ne-text">
   表示以
  </span>
  <code class="ne-code">
   <span class="ne-text">
    nums[i]
   </span>
  </code>
  <span class="ne-text">
   结尾的最长严格递增子序列的长度，得到表5.3。
  </span>
 </p>
 <p class="ne-p" id="ubbacb82b" style="text-indent: 2em; text-align: center">
  <span class="ne-text">
   表5.3 nums[i] 和
            dp[i] 的取值
  </span>
 </p>
 <table border=1 class="ne-table" id="CCine" style="text-align:center" align="center">
  <tbody>
   <tr style="height: 33px">
    <td width="83">
     <p class="ne-p" id="u6f45551d" style="text-align: center">
      <span class="ne-text">
       下标 i
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="uec4af441" style="text-align: center">
      <span class="ne-text">
       0
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="uec269dea" style="text-align: center">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u354dd24d" style="text-align: center">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="ue6fca119" style="text-align: center">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u7dc86c51" style="text-align: center">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u330d7f3c" style="text-align: center">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u2d943d3a" style="text-align: center">
      <span class="ne-text">
       6
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u6627b259" style="text-align: center">
      <span class="ne-text">
       7
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="83">
     <p class="ne-p" id="u5e013219" style="text-align: center">
      <span class="ne-text">
       nums[i]
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u7123c9cd" style="text-align: center">
      <span class="ne-text">
       10
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u16931e47" style="text-align: center">
      <span class="ne-text">
       9
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="ue635fe3f" style="text-align: center">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u6050f650" style="text-align: center">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="uf1c02bb7" style="text-align: center">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="uf6167094" style="text-align: center">
      <span class="ne-text">
       7
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="uad51f0cf" style="text-align: center">
      <span class="ne-text">
       101
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u5eb4f9ae" style="text-align: center">
      <span class="ne-text">
       18
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="83">
     <p class="ne-p" id="u52e601c5" style="text-align: center">
      <span class="ne-text">
       dp[i]
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="ue8d1cbdd" style="text-align: center">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="ubcaac92c" style="text-align: center">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="链接36" style="text-align: center">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u6fa4fa7d" style="text-align: center">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="链接18" style="text-align: center">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="u91c56faf" style="text-align: center">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="83">
     <p class="ne-p" id="ud71bbc3e" style="text-align: center">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u27bdeff5" style="text-align: center">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="udf0872ab" style="text-indent: 2em">
  <span class="ne-text">
   事实上，只要在前面找到
  </span>
  <code class="ne-code">
   <span class="ne-text">
    nums[j]&lt;nums[i]
   </span>
  </code>
  <span class="ne-text">
   ，以
  </span>
  <code class="ne-code">
   <span class="ne-text">
    nums[j]
   </span>
  </code>
  <span class="ne-text">
   结尾的严格递增子序列加上
  </span>
  <code class="ne-code">
   <span class="ne-text">
    nums[i]
   </span>
  </code>
  <span class="ne-text">
   即可得到以
  </span>
  <code class="ne-code">
   <span class="ne-text">
    nums[i]
   </span>
  </code>
  <span class="ne-text">
   结尾的严格递增子序列。显然，可能形成多种新的子序列，选择最长的子序列，即为以
  </span>
  <code class="ne-code">
   <span class="ne-text">
    nums[i]
   </span>
  </code>
  <span class="ne-text">
   结尾的最长严格递增子序列。
  </span>
 </p>
 <p class="ne-p" id="u01f51cce">
  <strong>
   <span class="ne-text">
    第二步：确定边界
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u3cb1c1e4" style="text-indent: 2em">
  <span class="ne-text">
   对于某个数组，dp[0] = 1，dp[1] = 2或1， 因此边界就是
            dp[0] =1。
  </span>
 </p>
 <p class="ne-p" id="ub081aa5a">
  <strong>
   <span class="ne-text">
    第三步：找规律，确定最优子结构
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u19f13249" style="text-indent: 2em">
  <span class="ne-text">
   根据穷举分析，发现如下规律：
  </span>
 </p>
 <p class="ne-p" id="u6b5dec73" style="text-indent: 2em">
  <span class="ne-text">
   对于
  </span>
  <span class="ne-math" id="TO8lP">
   <img src="../assets/images/f027975f2de3791a604840f12c6665eb.svg"/>
  </span>
  <span class="ne-text">
   并且
  </span>
  <span class="ne-math" id="XTAS7">
   <img src="../assets/images/64739660eac42c9283467327709c9699.svg"/>
  </span>
  <span class="ne-text">
   ，有
  </span>
  <span class="ne-math" id="EUBFD">
   <img src="../assets/images/6f0ea4852110e17bda5840375cc33f90.svg"/>
  </span>
 </p>
 <p class="ne-p" id="ue59be560" style="text-indent: 2em">
  <span class="ne-math" id="HX6WB">
   <img src="../assets/images/f212db0d8037d680672b6dcf97bbcccd.svg"/>
  </span>
  <span class="ne-text">
   就是最优子结构。
  </span>
 </p>
 <p class="ne-p" id="ucd18944c">
  <strong>
   <span class="ne-text">
    第四步：写出状态转移方程
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u04aba16a" style="text-indent: 2em">
  <span class="ne-text">
   通过前面三个步骤，得到状态转移方程如下：
  </span>
 </p>
 <p class="ne-p" id="u8a69bc4a" style="text-align: center">
  <span class="ne-math" id="po02K">
   <img src="../assets/images/7ebb873bdac3d4b6b21b7846c426e04d.svg"/>
  </span>
 </p>
 <p class="ne-p" id="u69cea09f" style="text-indent: 2em">
  <span class="ne-text">
   因此数组nums的最长严格递增子序列的长度为max(dp[i])。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="RWsDJ"><span
style="font-weight:bold;">代码5.23</span> 动态规划求最长递增子序列的长度
<code># include&lt;iostream&gt;
using namespace std;

int lengthOfLIS(int array[], int length){
        if(length == 0) return 0;
        int dp[length];
        int ans = 1;
        for(int i = 0; i &lt; length; ++i){
            dp[i] = 1;
            for(int j = 0; j &lt; i; ++j) 
                if(array[j] &lt; array[i]) 
                    dp[i] = max(dp[i], dp[j] + 1);
            ans = max(ans, dp[i]);
        }
        return ans;
}

int main(){
    int length;
    cin&gt;&gt;length;
    int nums[length];
    for(int i = 0; i &lt; length; ++i)
        cin&gt;&gt;nums[i];
	cout&lt;&lt;lengthOfLIS(nums, length);
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="ua96001c8">
   <span class="ne-text">
    第4行，数组作为函数的参数时，必须同时传递数组地址和数组中元素的数量，否则无法知道数组的有效范围。详细内容见本章1.5小节。
   </span>
  </li>
  <li id="u28b5e8a1">
   <span class="ne-text">
    第11-12行，只有
   </span>
   <code class="ne-code">
    <span class="ne-text">
     array[i]
    </span>
   </code>
   <span class="ne-text">
    大于
   </span>
   <code class="ne-code">
    <span class="ne-text">
     array[j]
    </span>
   </code>
   <span class="ne-text">
    ，才能将
   </span>
   <code class="ne-code">
    <span class="ne-text">
     array[i]
    </span>
   </code>
   <span class="ne-text">
    放在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     array[j]
    </span>
   </code>
   <span class="ne-text">
    后面以形成更长的严格递增子序列。
   </span>
  </li>
  <li id="u06fd4a0a">
   <span class="ne-text">
    第12行用于计算
   </span>
   <span class="ne-math" id="rhsFW">
    <img src="../assets/images/7f452a3568af766a0838b1c9d8dee2a3.svg"/>
   </span>
   <span class="ne-text">
    ，从而确定最终的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     dp[i]
    </span>
   </code>
   <span class="ne-text">
    ，这与
   </span>
   <span class="ne-math" id="CnZl6">
    <img src="../assets/images/7124203268a26612b2a44250dfc91d17.svg"/>
   </span>
   <span class="ne-text">
    是等价的。
   </span>
  </li>
  <li id="u4eaed9ed">
   <span class="ne-text">
    第13行用于计算所有
   </span>
   <code class="ne-code">
    <span class="ne-text">
     dp[i]
    </span>
   </code>
   <span class="ne-text">
    中的最大值。
   </span>
  </li>
  <li id="uc36e49c0">
   <span class="ne-text">
    分析lengthOfLIS函数可知，该函数先解决子问题再递推到大问题，具体过程为使用多个for循环填写数组，根据已计算的结果，逐步递推出大问题的解决方案。这便是动态规划的解题思路。
   </span>
  </li>
 </ul>
 <h3 id="Km6tT">
  <span class="ne-text">
   知识点：T528
  </span>
 </h3>
 <table border=1 class="ne-table" id="iMJcI" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u5680fc5b">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u7688ac58" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uabb9314e">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u0af822ff">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u35f0bac4">
      <span class="ne-text">
       T528
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u7645f82d">
      <span class="ne-text">
       动态规划将大问题分解为子问题，求解时从子问题递推到大问题
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ub51f8eb2">
      <a class="ne-link" data-href="#pNT2u" href="#pNT2u">
       <span class="ne-text">
        T513
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
     </p>
     <p class="ne-p" id="u9e21fa1e">
      <a class="ne-link" data-href="#fakFb" href="#fakFb">
       <span class="ne-text">
        T525
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ud8db5685">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="rxqUf">
  <span class="ne-text">
   3. 二维数组
  </span>
 </h1>
 <p class="ne-p" id="ubec09511" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
   C++ 支持多维数组。多维数组声明的一般形式如下：
  </span>
 </p>
 <details class="lake-collapse">
  <summary id="ufb553712">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    type name
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    [
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    size1
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ][
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    size2
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ]...[
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    sizeN
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ];
   </span>
  </summary>
 </details>
 <p class="ne-p" id="uf2bc85f4" style="text-indent: 2em">
  <span class="ne-text">
   type 可以是任意有效的 C++ 数据类型，arrayName
            是一个有效的 C++ 标识符。
  </span>
  <span class="ne-text" style="color: rgb(51, 51, 51)">
   例如，下面的声明创建了一个三维 5X10X4
            整型数组：
  </span>
 </p>
 <p class="ne-p" id="u4153bb41">
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(0, 0, 136)">
    int
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    threedim
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    [
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    5
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ][
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    10
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ][
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    4
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ];
   </span>
  </code>
 </p>
 <p class="ne-p" id="u1600e452" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(51, 51, 51)">
   一个二维数组可以被认为是一个带有 x 行和 y 列的表格。下面是一个二维数组，包含 3 行和 4 列：
  </span>
 </p>
 <p class="ne-p" id="u285e514b" style="text-align: center">
  <img class="ne-image img-50" id="M8GwC" src="../assets/images/1658992813726-9373dc7b-e339-4b3f-8985-85e8923a0f8f.jpeg"/>
 </p>
 <p class="ne-p" id="u10fe7d60" style="text-align: center">
  <span class="ne-text">
   图5.7 二维数组的示意图
  </span>
 </p>
 <p class="ne-p" id="u51b03844" style="text-indent: 2em">
  <span class="ne-text">
   多维数组可以通过在括号内为每行指定值来进行初始化。下面是一个带有 3 行 4
            列的数组。
  </span>
 </p>
 <p class="ne-p" id="ud873fac2">
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(0, 0, 136)">
    int
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    a
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    [
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    3
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ][
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    4
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ]
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    =
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    {
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    {
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    0
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    1
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    2
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    3
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    }
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(136, 0, 0)">
    /*  初始化索引号为 0 的行 */
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
  </code>
 </p>
 <p class="ne-p" id="u7d5b1997" style="margin-left: 6em">
  <span class="ne-text" style="color: rgb(102, 102, 0)">
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    {
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    4
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    5
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    6
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    7
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    }
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(136, 0, 0)">
    /*  初始化索引号为 1 的行 */
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
  </code>
 </p>
 <p class="ne-p" id="u67c79983" style="margin-left: 6em">
  <span class="ne-text" style="color: rgb(102, 102, 0)">
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    {
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    8
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    9
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    10
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    11
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    }
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(136, 0, 0)">
    /*  初始化索引号为 2 的行 */
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    };
   </span>
  </code>
 </p>
 <p class="ne-p" id="ue7d88871" style="text-indent: 2em">
  <span class="ne-text">
   内部嵌套的括号是可选的，下面的初始化与上面是等同的：
  </span>
 </p>
 <p class="ne-p" id="u4b6ad1c0">
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(0, 0, 136)">
    int
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    a
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    [
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    3
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ][
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    4
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ]
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    =
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    {
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    0
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    1
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    2
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    3
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    4
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    5
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    6
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    7
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    8
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    9
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    10
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    ,
   </span>
   <span class="ne-text" style="color: rgb(0, 102, 102)">
    11
   </span>
   <span class="ne-text" style="color: rgb(102, 102, 0)">
    };
   </span>
  </code>
 </p>
 <p class="ne-p" id="ubce31078" style="text-indent: 2em">
  <span class="ne-text">
   多维数组如果被进行初始化，或作为函数参数时，紧挨变量名的第一个维度的长度可以省略，其余的元素数量必须明确定义。否则编译器无法获知每个维度的长度。
  </span>
 </p>
 <p class="ne-p" id="u6b4b00ff" style="text-indent: 2em">
  <span class="ne-text">
   编程时，无论是输入输出还是遍历，多维数组通常是和嵌套循环搭配使用的。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="qaU4R"><span
style="font-weight:bold;">代码5.24</span> 二维数组遍历
<code>#include &lt;iostream&gt;
using namespace std;

int main ()
{
    int a[2][5] = { {3,5,7,6,8}, {1,8,2,5,3}};
    cout&lt;&lt;"行\\列";
    for ( int j = 0; j &lt; 5; j++ )
        cout&lt;&lt;'\t'&lt;&lt;j;
    cout&lt;&lt;endl;
    for ( int i = 0; i &lt; 2; i++ ){
        cout&lt;&lt;i;
        for ( int j = 0; j &lt; 5; j++ ){
            cout &lt;&lt;'\t'&lt;&lt; a[i][j];
        }
        cout&lt;&lt;endl;
    }
    return 0;
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
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u32adee92">
      <span class="ne-text">
       行\列 0 1 2 3 4
      </span>
     </p>
     <p class="ne-p" id="u0c39d4d2">
      <span class="ne-text">
       0 3 5 7 6 8
      </span>
     </p>
     <p class="ne-p" id="u14b48965">
      <span class="ne-text">
       1 1 8 2 5 3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="uiPXq">
  <span class="ne-text">
   例题5.12
  </span>
 </h3>
 <p class="ne-p" id="ub4c4ed69" style="text-indent: 2em">
  <span class="ne-text">
   旋转是图像处理的基本操作，在这个问题中，你需要将一个图像逆时针旋转90
  </span>
  <sup>
   <span class="ne-text">
    。
   </span>
  </sup>
  <span class="ne-text">
   。计算机中的图像可以用一个矩阵来表示。为了旋转一个图像，只需要旋转对应的矩阵即可。
  </span>
  <strong>
   <span class="ne-text">
    （CSP2015年3月真题）
   </span>
  </strong>
 </p>
 <p class="ne-p" id="u2a9c27cb">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u6a4550a1">
  <span class="ne-text">
   输入的第一行包含两个整数 n、m,分别表示图像矩阵的行数和列数。
  </span>
 </p>
 <p class="ne-p" id="u2614b15e">
  <span class="ne-text">
   接下来n行，每行包含m个整数，表示输入的图像。
  </span>
 </p>
 <p class="ne-p" id="u2b201bd7">
  <span class="ne-text">
   1≤n,m≤1000， 矩阵中的数都是不超过1000的非负整数。
  </span>
 </p>
 <p class="ne-p" id="链接8d">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="uef65a8ce">
  <span class="ne-text">
   输出m行，每行包含n个整数，表示原始矩阵逆时针旋转90° 后的矩阵。
  </span>
 </p>
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
       2 3
      </span>
     </p>
     <p class="ne-p" id="ub28eb368">
      <span class="ne-text">
       1 5 3
      </span>
     </p>
     <p class="ne-p" id="ubf3ade96">
      <span class="ne-text">
       3 2 4
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ua127b29b">
      <span class="ne-text">
       3 4
      </span>
     </p>
     <p class="ne-p" id="u4c1a9eb9">
      <span class="ne-text">
       5 2
      </span>
     </p>
     <p class="ne-p" id="链接fe">
      <span class="ne-text">
       1 3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Utgvz"><span
style="font-weight:bold;">代码5.25</span> 旋转矩阵
<code>#include &lt;iostream&gt;
using namespace std;
int a[1005][1005];
int main ()
{
    int n,m;
    cin&gt;&gt;n&gt;&gt;m;
    for ( int i = 0; i &lt; n; i++ ){
        for ( int j = 0; j &lt; m; j++ ){
            cin&gt;&gt;a[i][j];
        }
    }
    for ( int j = m-1; j &gt;=0; j-- ){
        for ( int i = 0; i &lt; n; i++ ){
            cout&lt;&lt;a[i][j]&lt;&lt;' ';
        }
        cout&lt;&lt;endl;
    }
    return 0;
}</code></pre>
 <p class="ne-p" id="ufab44283" style="text-indent: 2em">
  <span class="ne-text">
   在二维数组中，最重要的是对角线、上三角和下三角的概念。对角线上行列坐标相等，上三角中的行坐标小于列坐标，下三角中列坐标小于行坐标。
  </span>
 </p>
 <div style="display: flex;
        justify-content: center;
        align-items: center;">
 <img id="WyisE" src="../assets/images/1672278331640-e88682f1-c4d1-407c-8494-2f6ef7177fc2.jpeg" style="display: block; width: 300px"/>

</div>
 <p class="ne-p" id="ub096f195" style="text-align: center">
  <span class="ne-text">
   图5.8 二维数组的主对角线和上三角、下三角
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="aN3VP"><span
style="font-weight:bold;">代码5.26</span> 对角线图案
<code>#include &lt;iostream&gt;
using namespace std;

int main ()
{
    int n;
    cin&gt;&gt;n;
    int a[n][n];
    for ( int i = 0; i &lt; n; i++ ){
        for ( int j = 0; j &lt; n; j++ ){
            a[i][j]=abs(i-j);
            cout&lt;&lt;a[i][j]&lt;&lt;' ';
        }
        cout&lt;&lt;endl;
    }
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="Ralfh" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u04cda78a">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u03261e32">
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
     <p class="ne-p" id="u2177d376">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uf39f0907">
      <span class="ne-text">
       0 1 2 3 4
      </span>
     </p>
     <p class="ne-p" id="ub32124db">
      <span class="ne-text">
       1 0 1 2 3
      </span>
     </p>
     <p class="ne-p" id="ud3198c2e">
      <span class="ne-text">
       2 1 0 1 2
      </span>
     </p>
     <p class="ne-p" id="u62ab26cd">
      <span class="ne-text">
       3 2 1 0 1
      </span>
     </p>
     <p class="ne-p" id="u78d4ff60">
      <span class="ne-text">
       4 3 2 1 0
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="D8kyt">
  <span class="ne-text">
   知识点：T531
  </span>
 </h3>
 <table border=1 class="ne-table" id="j8JCx" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u5085b907">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ufd179469" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u16ecd914">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u69dd8e6c">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u2beb1e10">
      <span class="ne-text">
       T531
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uc4085f83">
      <span class="ne-text">
       掌握二维数组的基本使用方法，掌握主对角线、上三角、下三角的概念
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue6d00adb">
      <a class="ne-link" data-href="#sDNu2" href="#sDNu2">
       <span class="ne-text">
        T511
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接22">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#WC0X9" href="ch6#WC0X9">
       <span class="ne-text">
        T623
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="JEgY6">
  <span class="ne-text">
   4. C++的字符串
  </span>
 </h1>
 <h2 id="gItBo">
  <span class="ne-text">
   4.1 字符串的基本操作
  </span>
 </h2>
 <p class="ne-p" id="ude345260" style="text-indent: 2em">
  <span class="ne-text">
   字符串是常见的基本类型，在C++中提供了string类型进行字符串处理。可以将字符串理解成一个数组，其中每个元素都是一个字符，可以按照数组的形式进行访问。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="jHFGi"><span
style="font-weight:bold;">代码5.27</span> 以数组的形式访问字符串
<code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
int main(){
    string s = "1234567890";
    for(int i=0,len=s.length(); i&lt;len; i++){//采用数组形式进行遍历
        cout&lt;&lt;s[i]&lt;&lt;" ";
    }
    cout&lt;&lt;endl;
    s[5] = 'a';			//修改字符串中某个字符
    cout&lt;&lt;s&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="YliaL" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u6d4e95c2">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u705cceb8">
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
     <p class="ne-p" id="u8acd97ad">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u31b98cee">
      <span class="ne-text">
       1 2 3 4 5 6 7 8 9 0
       <br/>
      </span>
      <span class="ne-text">
       12345a7890
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u95fefb43" style="text-indent: 2em">
  <span class="ne-text">
   字符串在C语言中是用'\0'结尾的字符数组进行表达的，但是操作和理解上都比较复杂，按照数组的基本规定，不能进行整体赋值，不能进行整体比较。因此在在C++中将字符数组封装成了一个类string，通过成员函数和操作符重载等一系列面向对象的处理，string类在处理上变得非常简单。例如当需要将两个字符串进行拼接时，只需要用
  </span>
  <code class="ne-code">
   <span class="ne-text">
    +
   </span>
  </code>
  <span class="ne-text">
   进行完成。此外string还提供了增删改查等基本操作：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="eaCxb"><span
style="font-weight:bold;">代码5.28</span> string类提供的基本操作
<code>#include &lt;iostream&gt;
using namespace std;

int main(){
    cout&lt;&lt;"字符串拼接："&lt;&lt;endl;
    string s1 = "first ";
    string s2 = "second ";
    cout&lt;&lt;s1+s2&lt;&lt;endl&lt;&lt;s1+"third"&lt;&lt;endl;
    cout&lt;&lt;"插入子字符串："&lt;&lt;endl;
    s1.insert(3,"aaa");
    cout&lt;&lt;s1&lt;&lt;endl;
    cout&lt;&lt;"删除子字符串："&lt;&lt;endl;
    s1.erase(3);
    s2.erase(3,2);
    cout&lt;&lt;s1&lt;&lt;endl&lt;&lt;s2&lt;&lt;endl;
    cout&lt;&lt;"抽取子字符串："&lt;&lt;endl;
    s1 = "first third second";
    s2 = s1.substr(6, 5);
    cout&lt;&lt;s2&lt;&lt;endl;
    cout&lt;&lt;"字符串查找："&lt;&lt;endl;
    s1 = "first second third second";
    s2 = "second";
    size_t index = s1.find(s2,7);
    if(index &lt; s1.length())
        cout&lt;&lt;"Found at index : "&lt;&lt; index &lt;&lt;endl;
    else
        cout&lt;&lt;"Not found"&lt;&lt;endl;
    index = s1.rfind(s2,7);
    if(index &lt; s1.length())
        cout&lt;&lt;"Found at index : "&lt;&lt; index &lt;&lt;endl;
    else
        cout&lt;&lt;"Not found"&lt;&lt;endl;
    cout&lt;&lt;"查找子字符串任意字符在字符串中首次出现的位置："&lt;&lt;endl;
    index = s1.find_first_of(s2);
    if(index &lt; s1.length())
        cout&lt;&lt;"Found at index : "&lt;&lt; index &lt;&lt;endl;
    else
        cout&lt;&lt;"Not found"&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="h46DV" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u825d0821">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4e997850">
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
     <p class="ne-p" id="链接61">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ucc226c1a">
      <span class="ne-text">
       字符串拼接：
      </span>
     </p>
     <p class="ne-p" id="链接36">
      <span class="ne-text">
       first second
      </span>
     </p>
     <p class="ne-p" id="u25c2e7fb">
      <span class="ne-text">
       first third
      </span>
     </p>
     <p class="ne-p" id="u60325d9c">
      <span class="ne-text">
       插入子字符串：
      </span>
     </p>
     <p class="ne-p" id="u8de432ca">
      <span class="ne-text">
       firaaast
      </span>
     </p>
     <p class="ne-p" id="ue472f3bd">
      <span class="ne-text">
       删除子字符串：
      </span>
     </p>
     <p class="ne-p" id="uf955d9b4">
      <span class="ne-text">
       fir
      </span>
     </p>
     <p class="ne-p" id="链接af">
      <span class="ne-text">
       secd
      </span>
     </p>
     <p class="ne-p" id="u70f6851f">
      <span class="ne-text">
       抽取子字符串：
      </span>
     </p>
     <p class="ne-p" id="ue3267cc6">
      <span class="ne-text">
       third
      </span>
     </p>
     <p class="ne-p" id="ua62c9ecb">
      <span class="ne-text">
       字符串查找：
      </span>
     </p>
     <p class="ne-p" id="u9d2fb2c5">
      <span class="ne-text">
       Found at index : 19
      </span>
     </p>
     <p class="ne-p" id="u6bc0543e">
      <span class="ne-text">
       Found at index : 6
      </span>
     </p>
     <p class="ne-p" id="u2e4bf8a7">
      <span class="ne-text">
       查找子字符串任意字符在字符串中首次出现的位置：
      </span>
     </p>
     <p class="ne-p" id="u945d951c">
      <span class="ne-text">
       Found at index : 3
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ubaf6ee95">
   <code class="ne-code">
    <span class="ne-text">
     insert()
    </span>
   </code>
   <span class="ne-text">
    函数可以在
   </span>
   <code class="ne-code">
    <span class="ne-text">
     string
    </span>
   </code>
   <span class="ne-text">
    字符串中指定的位置插入另一个字符串，第一个参数表示要插入的位置，也就是下标；第二个参数表示要插入的字符串。第10行在下标为3的位置插入了一个子串"aaa"。
   </span>
  </li>
  <li id="u2714a4f3">
   <span class="ne-text" style="color: rgb(51, 51, 51); background-color: rgb(238, 238, 238); font-size: 14px">
    erase()
   </span>
   <span class="ne-text">
    函数可以删除
   </span>
   <code class="ne-code">
    <span class="ne-text">
     string
    </span>
   </code>
   <span class="ne-text">
    中的一个子字符串。第一个参数表示要删除子字符串的起始下标，第二个参数表示要删除子字符串的长度。如果没有第二个参数，那么直接删除到字符串结束处的所有字符。
   </span>
  </li>
  <li id="u811f72d7">
   <span class="ne-text" style="color: rgb(51, 51, 51); background-color: rgb(238, 238, 238); font-size: 14px">
    substr()
   </span>
   <span class="ne-text">
    函数用于从
   </span>
   <code class="ne-code">
    <span class="ne-text">
     string
    </span>
   </code>
   <span class="ne-text">
    字符串中提取子字符串。第一个参数为要提取的子字符串的起始下标，第二个参数为要提取的子字符串的长度。
   </span>
  </li>
  <li id="u2a53ad25">
   <code class="ne-code">
    <span class="ne-text">
     find()
    </span>
   </code>
   <span class="ne-text">
    函数用于在
                string字符串中查找子字符串出现的位置。第一个参数为待查找的子字符串，第二个参数为开始查找的位置（下标）；如果不指明，则从第0个字符开始查找。最终返回的是子字符串第一次出现在字符串中的起始下标。如果没有查找到子字符串，那么会返回一个无穷大值。第23行的查找从下标7开始，因此找到的是第二个second出现的位置19。
   </span>
  </li>
  <li id="u02e08b73">
   <code class="ne-code">
    <span class="ne-text">
     rfind()
    </span>
   </code>
   <span class="ne-text">
    函数与
   </span>
   <code class="ne-code">
    <span class="ne-text">
     find()
    </span>
   </code>
   <span class="ne-text">
    类似，但是它最多查找到第二个参数处，如果到了第二个参数所指定的下标还没有找到子字符串，则返回一个无穷大值。
   </span>
  </li>
  <li id="u2926ca9f">
   <code class="ne-code">
    <span class="ne-text">
     find_first_of()
    </span>
   </code>
   <span class="ne-text">
    函数不把子串作为一个整体，而是查找子串中任意字符在字符串中第一次出现的位置。第34行进行查找时，'s'出现在second中，并且它在s1中的下标为3，因此返回结果为3，并不是second的6。
   </span>
  </li>
  <li id="链接43">
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    在string的众多函数中，涉及位置、长度信息时，使用的数据类型都是
   </span>
   <code class="ne-code">
    <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
     size_t
    </span>
   </code>
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    ，在64位系统中
   </span>
   <code class="ne-code">
    <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
     size_t
    </span>
   </code>
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    定义为
   </span>
   <code class="ne-code">
    <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
     long long unsigned int
    </span>
   </code>
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    ，在32位系统中定义为
   </span>
   <code class="ne-code">
    <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
     unsigned int
    </span>
   </code>
   <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
    ，也就是一个无符号的整型。
   </span>
  </li>
 </ul>
 <h3 id="eRcMx">
  <span class="ne-text">
   知识点：T541
  </span>
 </h3>
 <table border=1 class="ne-table" id="oCLEW" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="链接0c">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="461">
     <p class="ne-p" id="u44a295c4" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="uc93f9fc6">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="105">
     <p class="ne-p" id="udd375b4b">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="udb43b1e7">
      <span class="ne-text">
       T541
      </span>
     </p>
    </td>
    <td width="461">
     <p class="ne-p" id="ue50bb5f1">
      <span class="ne-text">
       掌握string字符串增删改查的基本操作和对应的函数
      </span>
     </p>
    </td>
    <td width="94">
     <p class="ne-p" id="u29d1a12b">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#LBVF5" href="ch2#LBVF5">
       <span class="ne-text">
        T243
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#sDNu2" href="#sDNu2">
       <span class="ne-text">
        T511
       </span>
      </a>
     </p>
    </td>
    <td width="105">
     <p class="ne-p" id="链接aa">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#ucMFa" href="ch8#ucMFa">
       <span class="ne-text">
        T832
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#kYcFw" href="ch8#kYcFw">
       <span class="ne-text">
        T842
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="660">
     <p class="ne-p" id="uf034c48d">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161741" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161741" target="_blank">
       <span class="ne-text">
        (LX513)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161742" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161742" target="_blank">
       <span class="ne-text">
        (LX514)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="AUfOt">
  <span class="ne-text">
   4.2 字符串的容量和长度*
  </span>
 </h2>
 <p class="ne-p" id="uc310ba21" style="text-indent: 2em">
  <span class="ne-text" style="font-size: 16px">
   字符串的长度和存储容量是两个概念，二者并不一致。长度指字符串中实际有效的字符数量，而存储容量是指对该字符串分配的存储空间大小。长度可以用size()或length()函数获取，两个函数是完全等价的；存储容量用capacity()获取。长度和容量为什么会不相等呢？因为字符串本质上是一个字符构成的数组，数组中所有元素在内存中必须连续分配。当字符串长度发生变化，已有空间不能满足需求时，就需要重新分配空间，而为了保证空间的连续性，只能进行全部存储空间的重新分配。字符串作为常用数据类型，其基本操作增删改都会涉及到长度变化，如果每次都全部重新分配内存空间，运行效率将会变得非常低。因此通常字符串的容量都要大于有效字符的长度，这样当字符串长度进行小范围变化时，不需要重新分配空间。而当出现空间不足的情况时，重新分配的新空间还是会有一定的冗余度。至于新空间具体是多少，是由操作系统提供的策略进行保障的，用户不需要过多了解。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="vFA73"><span
style="font-weight:bold;">代码5.29</span> 字符串的容量和长度
<code>#include &lt;iostream&gt;
using namespace std;

int main(){
    string s;
    cout&lt;&lt;s.empty()&lt;&lt;endl;
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    s="abcdefghijklmnopqrstuvwxyz";
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    s="abcdefghijklmnopqrstuvwxyzabcdefg";
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    s.resize(20);
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    s.resize(70);
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    s.reserve(80);
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    s.reserve(50);//或s.reserve()
    cout&lt;&lt;s.size()&lt;&lt;'\t'&lt;&lt;s.capacity()&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="v67O8" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="udf465b03">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u9be33970">
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
     <p class="ne-p" id="ua46e4da5">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uc6fccaf1">
      <span class="ne-text">
       1
      </span>
     </p>
     <p class="ne-p" id="u59f65a8b">
      <span class="ne-text">
       0 15
      </span>
     </p>
     <p class="ne-p" id="uf2d70a4d">
      <span class="ne-text">
       26 30
      </span>
     </p>
     <p class="ne-p" id="uce58d709">
      <span class="ne-text">
       33 60
      </span>
     </p>
     <p class="ne-p" id="ub9e82173">
      <span class="ne-text">
       20 60
      </span>
     </p>
     <p class="ne-p" id="ua77f0941">
      <span class="ne-text">
       70 120
      </span>
     </p>
     <p class="ne-p" id="ue772ac33">
      <span class="ne-text">
       70 80
      </span>
     </p>
     <p class="ne-p" id="udef5bd7e">
      <span class="ne-text">
       70 70
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ufd4cde6d">
   <span class="ne-text" style="font-size: 16px">
    实际输出结果与执行环境有关，可能会有所差异，但是原理上相同。
   </span>
  </li>
  <li id="u99ef2917">
   <span class="ne-text" style="font-size: 16px">
    可以通过
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     resize()
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    函数调整字符串的长度(size)，通过
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     reserve()
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    函数调整字符串的容量(capacity)。size调整时会导致capacity跟随发生变化，但是capacity调整时，size不会发生变化。
   </span>
  </li>
  <li id="u4e88e11b">
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     empty
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    可以判断一个字符串是否为空，其效率比
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     size()
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    函数要高。
   </span>
  </li>
  <li id="u8689a38f">
   <span class="ne-text" style="font-size: 16px">
    第7行看到空字符的size为0，但是其容量并非为0，也就是说，当字符数量小于15时，不需要为该字符串重新分配空间。
   </span>
  </li>
  <li id="ue7c2cf7b">
   <span class="ne-text" style="font-size: 16px">
    第8行因为新字符串长度超过15，size变为实际长度26，但是capacity=30&gt;26，第10行再次打破capacity的限制变成33后，capacity被调整为60。第12行通过
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     resize
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    函数将size变小后，capacity不会发生变化，但第14行将size变大后超过了当前的capacity，capacity被再次扩容。可以确定，capacity会一直大于等于size，但具体的值是根据操作系统的策略进行动态调整的。
   </span>
  </li>
  <li id="ua1725432">
   <span class="ne-text">
    string可以调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     reserve()
    </span>
   </code>
   <span class="ne-text">
    缩减实际容量。但用一个“小于现有容量”的参数调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     reserve()
    </span>
   </code>
   <span class="ne-text">
    ，是一种非强制性请求。也就是说可能想要缩减容量至某个目标，但不保证一定达成。string的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     reserve()
    </span>
   </code>
   <span class="ne-text">
    参数默认值为0，所以调用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     reserve()
    </span>
   </code>
   <span class="ne-text">
    并且不给参数，就是一种“非强制性适度缩减请求”。第18行缩放目标小于size的值，但新的capacity变为70，并没有按照目标指示变成50或0。
   </span>
  </li>
 </ul>
 <h3 id="MuqMr">
  <span class="ne-text">
   例题5.13
  </span>
 </h3>
 <p class="ne-p" id="u99810e85" style="text-indent: 2em">
  <span class="ne-text">
   完成函数string str_remove(string s, char
            ch)，从s中删除指定的字符ch，并将剩余字符串作为返回值。
  </span>
 </p>
 <table border=1 class="ne-table" id="evXWR" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ub59cfe6a">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u909b8f93">
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
     <p class="ne-p" id="u2a488e3b">
      <span class="ne-text">
       s="abbce", ch='b'
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5d3dd7fa">
      <span class="ne-text">
       ace
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="s01yL"><span
style="font-weight:bold;">代码5.30</span> 删除指定字符
<code>string str_remove(string s, char ch)
{
    size_t j=0;
    for(size_t i=0; i&lt;s.size(); i++)
        if(s[i]!=ch)
            s[j++]=s[i];
    s.resize(j);
    return s; 
}</code></pre>
 <p class="ne-p" id="ub287144e" style="text-indent: 2em">
  <span class="ne-text">
   string在本质上是由字符组成的数组。不能做物理删除，只能形成逻辑删除。比较自然的思路是，每次遇到指定字符时，都进行前移操作，形成逻辑上的删除效果。但这种方法需要嵌套循环，算法复杂度为O(n
  </span>
  <sup>
   <span class="ne-text">
    2
   </span>
  </sup>
  <span class="ne-text">
   )。代码5.30中，借助了复制形成新字符串的想法，将留存的字符形成新的字符串。因为删除后的字符串长度一定小于或等于原字符串，即
  </span>
  <code class="ne-code">
   <span class="ne-text">
    i&gt;=j
   </span>
  </code>
  <span class="ne-text">
   ，因此可以在原字符串的空间上完成复制操作。j只有在找到符合要求的字符后，才执行加1操作。这种想法将算法复杂度降为O(n)，并且不需要开辟新的空间。
  </span>
 </p>
 <ul class="ne-ul">
  <li id="u52c4cdbe">
   <span class="ne-text">
    第3-4行中
   </span>
   <code class="ne-code">
    <span class="ne-text">
     i
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     j
    </span>
   </code>
   <span class="ne-text">
    的数据类型定义为size_t，无论是size()还是length()返回的数据类型都是size_t，保证数据类型的兼容性。size_t依赖于编译器，在32位编译器下等同于unsigned
                int，在64位编译器下等同于unsigned long long，其值永远非负。
   </span>
  </li>
  <li id="u69755ee1">
   <span class="ne-text">
    第7行中用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     resize()
    </span>
   </code>
   <span class="ne-text">
    重新调整了s的长度，否则删除处理后s的长度保持不变。
   </span>
  </li>
 </ul>
 <h3 id="zTfai">
  <span class="ne-text">
   知识点：T542
  </span>
 </h3>
 <table border=1 class="ne-table" id="XqduF" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uc1cdf6cf">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u61e65e71" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u6f07bdca">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u6b55ad32">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="链接5f">
      <span class="ne-text">
       T542
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ud9c7fc21">
      <span class="ne-text">
       明确区分字符串的物理空间和逻辑上的有效空间，新建立的字符串一定要重新resize，否则逻辑空间长度不正确
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u78637a5d">
      <a class="ne-link" data-href="#pNT2u" href="#pNT2u">
       <span class="ne-text">
        T513
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ucea8028d">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#BPKTU" href="ch8#BPKTU">
       <span class="ne-text">
        T825
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="Vfxnc">
  <span class="ne-text">
   4.3 字符串与整型的相互转换
  </span>
 </h2>
 <h3 id="Stkta">
  <span class="ne-text">
   4.3.1 字符串转数值
  </span>
 </h3>
 <p class="ne-p" id="u5923d9d8" style="text-indent: 2em">
  <span class="ne-text">
   cin可以从标准输入流中读取整型或其他类型的数据，因此可以将字符串首先转换为流数据，然后从流中读取相应类型的数据，这就是转换的第一种方法；此外，C语言的库函数中存在字符串转换其他标准数据类型的函数，例如：字符串转整型atoi，字符串转浮点数atof等，但C语言中不存在string类型，需要先调用string的c_str()函数将string转换为C风格字符串，才能得到正确的结果。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="ER6fd"><span
style="font-weight:bold;">代码5.31</span> 字符串转数值
<code>#include&lt;iostream&gt;
#include&lt;cstdlib&gt;      //atoi,atof
#include&lt;sstream&gt;       //istringstream
using namespace std;

int main()
{
    string a="1234";
    //使用字符串流将字符串转换为整型
    istringstream is(a); //构造输入字符串流，流的内容初始化为“12”的字符串
    int i;
    is &gt;&gt; i; //从is流中读入一个int整数存入i中
    cout&lt;&lt;i+1&lt;&lt;endl;  //i已经是整型，可以进行数学运算
    //atoi和atof的使用方式
    cout&lt;&lt;atoi(a.c_str())-1&lt;&lt;endl;     //注意一定要使用c_str函数将string转换为C风格字符串
    cout&lt;&lt;atof("1212.34")+1&lt;&lt;endl;     //双引号构成的字符串是C风格字符串
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="Uelpq" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u8c832ce9">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1e9f8a6b">
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
     <p class="ne-p" id="uba51633b">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4ea75a3f">
      <span class="ne-text">
       1235
      </span>
     </p>
     <p class="ne-p" id="u0af9fec1">
      <span class="ne-text">
       1233
      </span>
     </p>
     <p class="ne-p" id="ue2d0c03c">
      <span class="ne-text">
       1213.34
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ua1c1e480">
   <code class="ne-code">
    <span class="ne-text">
     atoi
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     atof
    </span>
   </code>
   <span class="ne-text">
    是C语言函数，只支持C语言风格字符串，即以
   </span>
   <code class="ne-code">
    <span class="ne-text">
     \0
    </span>
   </code>
   <span class="ne-text">
    结尾的字符数组。如果用到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     string
    </span>
   </code>
   <span class="ne-text">
    类型，必须通过
   </span>
   <code class="ne-code">
    <span class="ne-text">
     c_str
    </span>
   </code>
   <span class="ne-text">
    函数转换为C风格字符串。
   </span>
  </li>
 </ul>
 <h3 id="AhO5J">
  <span class="ne-text">
   知识点：T543-T544
  </span>
 </h3>
 <table border=1 class="ne-table" id="kKhdp" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ubcaad7e8">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uad510df1" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u84b54ee1">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u58e4bad2">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u30993e50">
      <span class="ne-text">
       T543
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u2aeb5c91">
      <span class="ne-text">
       掌握字符串转数值的常用方法。istringstream虽然使用上比较繁琐，但是好用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uc0b89462">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#FpCPw" href="ch4#FpCPw">
       <span class="ne-text">
        T484
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u519f65b0">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u590b48d5">
      <span class="ne-text">
       T544
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ue2ff300e">
      <span class="ne-text">
       了解string与C风格字符串不同，以及通过
      </span>
      <code class="ne-code">
       <span class="ne-text">
        c_str
       </span>
      </code>
      <span class="ne-text">
       完成转换
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
 <h3 id="JeULu">
  <span class="ne-text">
   4.3.2 数值转字符串
  </span>
 </h3>
 <p class="ne-p" id="u4ebfe2da" style="text-indent: 2em">
  <span class="ne-text">
   C++中的std提供了标准的函数to_string()可以将基础数据类型转换为字符串，不需要任何头文件。函数to_string()可以满足绝大多数情况下的转换需求，但是如果有精度和宽度限制，或其他特殊需求时，处理比较繁琐。这时可以使用sprintf函数将需要的内容转换为C风格字符串，然后再将C风格字符串转换为string类型。sprintf函数与函数printf的使用方法几乎完全类似，只是printf将结果打印到标准输出中，而sprintf将结果打印到一个C风格的字符串中。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="H9HcS"><span
style="font-weight:bold;">代码5.32</span> 数值转字符串
<code>#include&lt;iostream&gt;
#include&lt;sstream&gt;		//ostringstream的头文件
using namespace std;

int main()
{
    //to_string方式
    cout&lt;&lt;to_string(1234)&lt;&lt;endl;
    cout&lt;&lt;to_string(1234.56)&lt;&lt;endl;
    //sprintf方式转换为C风格字符串
    char str[1000];		//C风格的字符数组用来存储C风格的字符串
    sprintf(str,"%.2f",1.2345);
    //C风格字符串转换为string类型
    string s=str;		//初始化
    string s1(str);		//构造函数
    string s2 {str};	//初始化
    cout&lt;&lt;s&lt;&lt;endl;
    cout&lt;&lt;s1&lt;&lt;endl;
    cout&lt;&lt;s2&lt;&lt;endl;
    ostringstream oss;
    oss&lt;&lt;3.14;
    oss&lt;&lt;" ";
    oss&lt;&lt;55555555;
    cout&lt;&lt;oss.str();
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="k34j7" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接44">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u5ef407bd">
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
     <p class="ne-p" id="u82c7b1b9">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1529fbca">
      <span class="ne-text">
       1234
      </span>
     </p>
     <p class="ne-p" id="ubbe18caa">
      <span class="ne-text">
       1234.560000
      </span>
     </p>
     <p class="ne-p" id="u74cb39d1">
      <span class="ne-text">
       1.23
      </span>
     </p>
     <p class="ne-p" id="u81f79acc">
      <span class="ne-text">
       1.23
      </span>
     </p>
     <p class="ne-p" id="u7ead3c76">
      <span class="ne-text">
       1.23
      </span>
     </p>
     <p class="ne-p" id="ue1d78aa1">
      <span class="ne-text">
       3.14 55555555
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="ADJJr">
  <span class="ne-text">
   知识点：T545
  </span>
 </h3>
 <table border=1 class="ne-table" id="FndsP" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ufb180b32">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ua18200e5" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u77e0b94f">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub053fbcd">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ua9c80eb7">
      <span class="ne-text">
       T545
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u8550f575">
      <span class="ne-text">
       掌握数值转字符串的基本方法，最重要的方法是
      </span>
      <code class="ne-code">
       <span class="ne-text">
        to_string
       </span>
      </code>
     </p>
     <p class="ne-p" id="udbeed6ae">
      <span class="ne-text">
       ostringstream是C++中拼接字符串的重要方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u67ab53a5">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ubc255612">
      <a class="ne-link" data-href="#CUEPT" href="#CUEPT">
       <span class="ne-text">
        T546
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="ROwVJ">
  <span class="ne-text">
   4.4 字符串分割
  </span>
 </h2>
 <p class="ne-p" id="ue26beeb1">
  <span class="ne-text">
   字符串分割是常见操作，在Python，Java等语言中，可以通过简单的调用split完成分割，但是C/C++中不存在这样的函数。C语言中可以采用“循环+strtok”的方式完成分割，但代码比较繁琐。本节提供两种基于字符串数据流的方法，简单有效地完成分割操作。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="XFh3o"><span
style="font-weight:bold;">代码5.33</span> 字符串分割
<code>#include &lt;iostream&gt;
#include &lt;sstream&gt;
using namespace std;
int main()
{
    string str = "good good study day day up";
    istringstream in(str);						//将字符串转换为数据流
// 方法1：借助数据流以空白符分割的特性，形成字符串的分割
    string s;
    while (in &gt;&gt; s){
        cout&lt;&lt;s&lt;&lt;' ';
    }
    cout&lt;&lt;endl;

    str = "good,good,study,day,day,up";
    istringstream in2(str);						//将字符串转换为数据流
// 方法2：利用自定义分割符的getline函数，达到采用任意字符分割的效果
    while (getline(in2, s, ',')){  	//这里单引号要注意，第3个参数可以是任意字符
        cout&lt;&lt;s&lt;&lt;' ';
    }
}</code></pre>
 <table border=1 class="ne-table" id="G9Zvy" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接3d">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ue8c28edd">
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
     <p class="ne-p" id="u2d1063c7">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u079dbb94">
      <span class="ne-text">
       good good study day day up
      </span>
     </p>
     <p class="ne-p" id="u871dd33f">
      <span class="ne-text">
       good good study day day up
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="链接90">
   <span class="ne-text">
    如果分割符为空白符，采用方法1更加简单；如果分割符为任意字符，只能采用方法2。
   </span>
  </li>
  <li id="u60711e1f">
   <span class="ne-text">
    采用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     ostringstream
    </span>
   </code>
   <span class="ne-text">
    对字符串进行拼接，采用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     istringstream
    </span>
   </code>
   <span class="ne-text">
    对字符串进行分割。
   </span>
  </li>
 </ul>
 <h3 id="CUEPT">
  <span class="ne-text">
   知识点：T546
  </span>
 </h3>
 <table border=1 class="ne-table" id="uP0mE" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ube9fef26">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u23b655ea" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="132">
     <p class="ne-p" id="ua45d6998">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ucf0a1e39">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 37px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uc48f8683">
      <span class="ne-text">
       T546
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="链接f8">
      <span class="ne-text">
       掌握用数据流对字符串进行分割的方法
      </span>
     </p>
    </td>
    <td width="132">
     <p class="ne-p" id="u81eeb202">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#ri2d9" href="ch2#ri2d9">
       <span class="ne-text">
        T271
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#FpCPw" href="ch4#FpCPw">
       <span class="ne-text">
        T484
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#ADJJr" href="#ADJJr">
       <span class="ne-text">
        T545
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uf94e1411">
      <a class="ne-link" data-href="#K2mZX" href="#K2mZX">
       <span class="ne-text">
        T547
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="684">
     <p class="ne-p" id="ua347047d">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161742" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161742" target="_blank">
       <span class="ne-text">
        (LX514)
       </span>
      </a>
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161743" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161743" target="_blank">
       <span class="ne-text">
        (LX515)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="o43D1">
  <span class="ne-text">
   4.5 子串问题
  </span>
 </h2>
 <h3 id="nES6r">
  <span class="ne-text">
   例题5.14
  </span>
 </h3>
 <p class="ne-p" id="u66d2ea1d" style="text-align: left; text-indent: 2em">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   昕哥有一串很长的英文字母，可能包含大写和小写。在这串字母中，有很多连续的是重复的。昕哥想了一个办法将这串字母表达得更短：将连续的几个相同字母写成字母+出现次数的形式。例如，连续的5个a，即
            aaaaa，简写成 a5。对于这个例子：aaaaaCCeeelHH，昕哥可以简写成 a5C2e3lH2。为了方便表达，昕哥不会将连续的超过9个相同的字符写成简写的形式。请帮助昕哥完成简写。
  </span>
 </p>
 <p class="ne-p" id="ua621594f">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="u6a9ffb01" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输入一行为一个由大写字母和小写字符构成的字符串，长度不超过100000。
  </span>
 </p>
 <p class="ne-p" id="u2f3e916d">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="ua54693d8" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输出为一行字符串，表示简写后的字符串。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="iJmhe"><span
style="font-weight:bold;">代码5.34</span> 子串问题
<code>#include &lt;iostream&gt;
using namespace std;
void print(const string&amp; s){
    if(s.size()==1||s.size()&gt;9)
        cout&lt;&lt;s;
    else
        cout&lt;&lt;s[0]&lt;&lt;s.size();
}
int main() {
	string a;
	cin&gt;&gt;a;
	size_t left=0;
    a += '$';
	for(size_t j=1;j&lt;a.size();j++){
        if(a[j]^a[left]){					//或写成if(a[j]!=a[left])
            print(a.substr(left,j-left));
            left = j;
        }
    }
	return 0;
}</code></pre>
 <table border=1 class="ne-table" id="KNf10" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="链接92">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接39">
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
     <p class="ne-p" id="uc894fc48">
      <span class="ne-text">
       aaaaaCCeeelHH
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u39bece20">
      <span class="ne-text">
       a5C2e3lH2
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u643ad9e5">
   <span class="ne-text">
    对于每个子串的缩写，是一个相对比较独立的过程。以上代码中将其独立成一个函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     print
    </span>
   </code>
   <span class="ne-text">
    ，这样能有效降低程序的复杂度，强烈建议使用。
   </span>
  </li>
  <li id="u8defc159">
   <span class="ne-text">
    用变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     left
    </span>
   </code>
   <span class="ne-text">
    记录每个子串的起点，然后用
   </span>
   <code class="ne-code">
    <span class="ne-text">
     substr
    </span>
   </code>
   <span class="ne-text">
    截取每个子串，分别送到
   </span>
   <code class="ne-code">
    <span class="ne-text">
     print
    </span>
   </code>
   <span class="ne-text">
    中去进行缩写。这是子串拆分的经典方法。其本质上就是采用尺取法的同向扫描，利用快慢指针形成字符完全相同的“移动窗口”，然后对移动窗口做出相应的简写处理。尺取法是处理子串分隔的一种基本方法。
   </span>
  </li>
  <li id="uff3ac3f5">
   <span class="ne-text">
    第15行用异或操作判断两个元素不相等，它与直接书写不等于是等价的。
   </span>
  </li>
  <li id="ucfbefef7">
   <span class="ne-text">
    特别注意第13行的操作。因为循环是对有效部分进行操作，当第14行循环结束时，最后一个子串并未得到相应的处理。因此在第13行中插入一个原有字符串中不可能出现的字符，保证原字符串中的最后一个子串被处理，又对题目要求的结果没有任何影响。这种方法也称为
   </span>
   <strong>
    <span class="ne-text">
     边界填充法
    </span>
   </strong>
   <span class="ne-text">
    。这是一个非常便捷的技巧。如果没有这行处理，必须在循环结束时对最后一个子串进行处理。这也是一个非常容易产生错误的地方。
   </span>
  </li>
 </ul>
 <h3 id="K2mZX">
  <span class="ne-text">
   知识点：T547-T548
  </span>
 </h3>
 <table border=1 class="ne-table" id="ejdjy" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u93757bb4">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u6c8eb9a2" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u9caa0abe">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u2cfcec7d">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ue4cdfe26">
      <span class="ne-text">
       T547
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u9cb37961">
      <span class="ne-text">
       掌握使用尺取法进行子串分隔，特别注意最后一个子串的处理，掌握边界填充法
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="ucc69dd49">
      <a class="ne-link" data-href="#o8Kxq" href="#o8Kxq">
       <span class="ne-text">
        T524
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#CUEPT" href="#CUEPT">
       <span class="ne-text">
        T546
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u51f8eb20">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="677">
     <p class="ne-p" id="u558a493b">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161744" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161744" target="_blank">
       <span class="ne-text">
        (LX516)
       </span>
      </a>
      <span class="ne-text">
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ucec4ad73">
      <span class="ne-text">
       T548
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u75d60bab">
      <span class="ne-text">
       将相对独立的功能抽取为函数，将极大减轻程序书写逻辑
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u8f58cdd8">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#VKSK4" href="ch3#VKSK4">
       <span class="ne-text">
        T331
       </span>
      </a>
     </p>
    </td>
    <td width="67">
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="F1rgU">
  <span class="ne-text">
   4.6 高精度计算
  </span>
 </h2>
 <h3 id="JkiCi">
  <span class="ne-text">
   例题5.15
  </span>
 </h3>
 <p class="ne-p" id="u5a7801fe" style="text-align: left; text-indent: 2em">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输入两个不超过100位的位数相等的正整数，求其和。
  </span>
 </p>
 <p class="ne-p" id="u938fca7b">
  <span class="ne-text">
   【题目分析】
  </span>
 </p>
 <p class="ne-p" id="u8d7e38fb" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   C++中提供的最大整数类型为long long，为64位，大概表示
  </span>
  <span class="ne-math" id="e1aok" style="color: rgb(64, 64, 64)">
   <img src="../assets/images/fccc9702a18cbf05973072ab08a6c8d4.svg"/>
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   量级，显然无法表示题目所述的整数。因此需要用字符串表达这两个100位的整数，通过小学所学的逐位计算的方法计算加法。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="fBFW8"><span
style="font-weight:bold;">代码5.35</span> 大数计算
<code>#include &lt;iostream&gt;
using namespace std;
string plus(const string&amp; s1,const string&amp; s2){
    string r=s1;
    int carry = 0;
    for(size_t i=r.size()-1;i&lt;r.size();i--){
        int temp = s1[i]-'0'+s2[i]-'0'+carry;
        r[i] = temp%10+'0';
        carry = temp/10;
    }
    return carry?"1"+r:r;
}
int main() {
	string s1,s2;
	cin&gt;&gt;s1&gt;&gt;s2;
	cout&lt;&lt;plus(s1,s2)&lt;&lt;endl;
	return 0;
}</code></pre>
 <table border=1 class="ne-table" id="N6lTE" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u61ab441b">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u057d528f">
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
     <p class="ne-p" id="u11526eea">
      <span class="ne-text">
       686897979708804564328634
      </span>
     </p>
     <p class="ne-p" id="u2a311c95">
      <span class="ne-text">
       475825687845753588322687
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u36838e1f">
      <span class="ne-text">
       1162723667554558152651321
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u0dc33f76">
   <span class="ne-text">
    这是一个模拟加法计算过程的算法，第4行让结果
   </span>
   <code class="ne-code">
    <span class="ne-text">
     r
    </span>
   </code>
   <span class="ne-text">
    有一个初始长度，然后第6行的循环逐位执行加法操作。注意循环条件有点不合常规，这是因为size_t是unsigned类型，-1是该类型的最大值，一定大于字符串长度。
   </span>
  </li>
  <li id="u5b245d30">
   <span class="ne-text">
    按照加法计算规则，每位的结果都是对应两位相加，并且加上进位。设置初始进位为0。
   </span>
  </li>
  <li id="u416a909d">
   <span class="ne-text">
    第11行是为了防止最高位有进位，根据加法规则，进位只能是1。
   </span>
  </li>
 </ul>
 <h3 id="bKBAL">
  <span class="ne-text">
   随堂练习5.4
  </span>
 </h3>
 <p class="ne-p" id="u2e7b8ee5">
  <span class="ne-text">
   如果两个大数相加，且位数不相等，应该如何处理？
  </span>
 </p>
 <h3 id="TSGz6">
  <span class="ne-text">
   知识点：T549
  </span>
 </h3>
 <table border=1 class="ne-table" id="ZnNPV" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ue76c4a8e">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u47043fa0" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="ufb759d17">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub2d26512">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u6a0a2153">
      <span class="ne-text">
       T549
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="ub26ab69d">
      <span class="ne-text">
       掌握大数计算的基本方法
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="uba96efc5">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wG8i3" href="ch2#wG8i3">
       <span class="ne-text">
        T242
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接b5">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td colspan="3" width="677">
     <p class="ne-p" id="u651d7b63">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161745" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161745" target="_blank">
       <span class="ne-text">
        (LX517)
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
 <h1 id="NrvLX">
  <span class="ne-text">
   5. C风格的字符串
  </span>
 </h1>
 <h2 id="Y4dUN">
  <span class="ne-text">
   5.1 C风格字符串的定义和初始化
  </span>
 </h2>
 <p class="ne-p" id="ue60eec28" style="text-indent: 2em">
  <span class="ne-text">
   C语言并没有提供“字符串”这种复杂数据类型，它借助字符类型的数组来存储一个串的内容，以特殊字符'\0'作为串的结束标志。从存储结构上来说，C语言的字符串就是“以'\0'结尾的字符数组”，长度指串中位于'\0'之前的字符个数。字符串一定是一个字符数组，但字符数组未必是字符串，关键看是否包含'\0'。一个字符数组可以存储多个'\0'，但它存储的字符串内容到第一个'\0'出现的位置就结束了。字符串的查找、求长度、复制、比较等常见算法都是紧紧围绕“以'\0'结尾”这一特性，对字符数组进行操作。
  </span>
 </p>
 <p class="ne-p" id="u6250a3ad" style="text-indent: 2em">
  <span class="ne-text">
   定义字符串类型的变量其实就是定义字符数组类型的变量，必须保证数组大小足够容纳末尾的'\0'。例如：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="JQHpX"><span
style="font-weight:bold;">代码5.36</span>  C风格字符串的定义和初始化
<code>#include &lt;iostream&gt;
using namespace std;
int main ()
{
    char s1[10]; //数组s1是一维数组，它可以存放10个字符，或者一个长度不大于9的字符串
    char s2[6]="China"; 									//用字符串常量赋值
    char s3[6]= {'C', 'h', 'i', 'n', 'a', '\0'};			//用字符常量赋值
    char name[3][10];		//数组name是二维数组，存放3个长度不大于9的字符串
    char w_day[ ][10]={"Sunday","Monday", "Tuesday",
            "Wednesday","Thursday","Friday", "Saturday" };	//二维字符串初始化
    int num;
    cin&gt;&gt;num;
    cout&lt;&lt;s2&lt;&lt;' '&lt;&lt;s3&lt;&lt;endl;
    s2[3]='\0';
    cout&lt;&lt;s2&lt;&lt;' '&lt;&lt;w_day[num]&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="ir2ht" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u287c8f8c">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u77fde59b">
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
     <p class="ne-p" id="u1f046a8e">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4122f694">
      <span class="ne-text">
       China China
      </span>
     </p>
     <p class="ne-p" id="u50cd5577">
      <span class="ne-text">
       Chi Wednesday
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="链接e7">
   <span class="ne-text">
    C风格字符串分为两个长度：物理长度和逻辑长度。定义时字符数组的长度为其物理长度，表示了该字符数组能够存储字符的数量。而字符串要求至少有一个'\0'，第一个'\0'前的字符数量为其逻辑长度，也是字符串的长度。物理长度至少要比逻辑长度大1，用于存储'\0'。
   </span>
  </li>
  <li id="uee3e13d0">
   <span class="ne-text">
    第6行和第9行用字符串常量进行初始化，会自动在尾部添加一个'\0'，表示字符串的结束。
   </span>
  </li>
  <li id="u23bfd64b">
   <span class="ne-text">
    第14行将字符串
   </span>
   <code class="ne-code">
    <span class="ne-text">
     s2
    </span>
   </code>
   <span class="ne-text">
    的第3个字符设置为'\0'，因此其逻辑长度修改为3，第15行只输出Chi三个字符。
   </span>
  </li>
  <li id="ud5e9d9c2">
   <span class="ne-text">
    第8-9行定义了两个二维字符串，用于存储多个字符串，每个字符串都要以'\0'结束。
   </span>
  </li>
 </ul>
 <h3 id="vSfer">
  <span class="ne-text">
   知识点：T551
  </span>
 </h3>
 <table border=1 class="ne-table" id="dTV9o" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ud90d743d">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u20d8623b" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="uf934b21b">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u179f7133">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u3b47cce6">
      <span class="ne-text">
       T551
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u0ae240bc">
      <span class="ne-text">
       掌握C风格字符串的定义和初始化，理解物理长度和逻辑长度
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="u2746b4f9">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue9d1212c">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="poKOJ">
  <span class="ne-text">
   5.2 C风格字符串的基本操作
  </span>
 </h2>
 <p class="ne-p" id="uabd779ce" style="text-indent: 2em">
  <span class="ne-text">
   C风格字符串本质上是字符数组，因此不能整体赋值和整体比较。对于字符串的常见操作，都存放在头文件&lt;cstring&gt;中，求长度函数strlen，赋值函数strcpy，比较函数strcmp，连接函数为strcat。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="wAIma"><span
style="font-weight:bold;">代码5.37</span>  C风格字符串的常见函数
<code>#include&lt;iostream&gt;
#include&lt;cstring&gt;
using namespace std;
int main ()
{
    char source[30] = "Why always me?",target[20];
    cout&lt;&lt;strlen(source)&lt;&lt;' '&lt;&lt;sizeof(source)&lt;&lt;endl;
    strcpy(target, source);
    cout&lt;&lt;strlen(target)&lt;&lt;' '&lt;&lt;target&lt;&lt;endl;
    char other[] = "Why not he?";
    cout&lt;&lt;strcmp(source,other)&lt;&lt;endl;
    cout&lt;&lt;strcat(source,other)&lt;&lt;endl;
}</code></pre>
 <table border=1 class="ne-table" id="PHNo9" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u3b370339">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u9ac00455">
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
     <p class="ne-p" id="ufa94edcc">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接3f">
      <span class="ne-text">
       14 30
      </span>
     </p>
     <p class="ne-p" id="u76f2f948">
      <span class="ne-text">
       14 Why always me?
      </span>
     </p>
     <p class="ne-p" id="u4186dc8f">
      <span class="ne-text">
       -1
      </span>
     </p>
     <p class="ne-p" id="ub7337be7">
      <span class="ne-text">
       Why always me?Why not he?
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u6d6b4360">
   <span class="ne-text">
    第7行输出结果显示，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     source
    </span>
   </code>
   <span class="ne-text">
    的逻辑长度为14，物理长度为30，strlen的返回结果为字符串的逻辑长度。
   </span>
  </li>
  <li id="ua94f5b04">
   <span class="ne-text">
    第8行将
   </span>
   <code class="ne-code">
    <span class="ne-text">
     source
    </span>
   </code>
   <span class="ne-text">
    的内容赋值给
   </span>
   <code class="ne-code">
    <span class="ne-text">
     target
    </span>
   </code>
   <span class="ne-text">
    ，这里特别注意C风格字符串是数组，不能进行整体赋值，因此绝对不能写成
   </span>
   <code class="ne-code">
    <span class="ne-text">
     target=source
    </span>
   </code>
   <span class="ne-text">
    ，只能采用strcpy对字符串进行赋值。
   </span>
  </li>
  <li id="u1f80a011">
   <span class="ne-text">
    第11行进行字符串的大小比较，采用结果为：0（相等），正数（第一个字符串大），负数（第二个字符串大）。这里的大小指字典序，即单词在字典中的排列顺序。从左到右依次遍历字符，当遇到第一个不相同的字符时，该字符的ASCII码比较结果就是两个字符串的大小关系。例如：
   </span>
   <code class="ne-code">
    <span class="ne-text">
     strcmp("abcd","abck")&lt;0
    </span>
   </code>
   <span class="ne-text">
    ，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     strcmp("abc","ab")&gt;0
    </span>
   </code>
   <span class="ne-text">
    ，
   </span>
   <code class="ne-code">
    <span class="ne-text">
     strcmp("abc","b")&lt;0
    </span>
   </code>
   <span class="ne-text">
    。
   </span>
  </li>
  <li id="u28fbc478">
   <span class="ne-text">
    第12行对两个字符串进行了连接，并将连接的结果放在第一个字符串
   </span>
   <code class="ne-code">
    <span class="ne-text">
     source
    </span>
   </code>
   <span class="ne-text">
    中，函数的返回值也是连接的结果。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u91b7c10a" style="text-indent: 2em">
  <span class="ne-text">
   以下内容将C风格字符串中的常见操作进行了具体的代码实现。使用时可以采用库函数，以下实现是为了更好地从基础操作中理解C风格字符串的使用。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="KitS2"><span
style="font-weight:bold;">代码5.38</span>  字符串串长
<code>int my_strlen(char s[])
{
    int len=0; //len计算串长
    while (s[len]!='\0') len++; //统计'\0'前的字符数
    return len;
}</code></pre>
 <ul class="ne-ul">
  <li id="ue2ff687d">
   <span class="ne-text">
    根据C风格字符串的特点，求串长就是统计'\0'前的字符数。
   </span>
  </li>
  <li id="u22d80871">
   <span class="ne-text">
    第4行用while循环实现，这使得代码的可读性更强；在熟练使用for循环后也可以写成
   </span>
   <code class="ne-code">
    <span class="ne-text">
     for (len = 0; s[len]!='\0'; len++);
    </span>
   </code>
   <span class="ne-text">
    ，注意不要遗漏了末尾的分号，这表示循环条件成立时执行空语句，仅改变计数变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     len
    </span>
   </code>
   <span class="ne-text">
    的值。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="AlPNW"><span
style="font-weight:bold;">代码5.39</span>  字符串复制
<code>void my_strcpy(char target[], char source[])
{
    int i=0; //两个字符串从首位开始复制
    while((target[i++]=source[i])); //将source字符串中'\0'及之前的字符复制给target
}</code></pre>
 <ul class="ne-ul">
  <li id="uc5810002">
   <span class="ne-text">
    根据C风格字符串的特点，字符串复制就是将source字符串中'\0'及之前的字符复制给target。常规的写法有很多种，这里采用了尽量简洁的写法。
   </span>
  </li>
  <li id="u1d26c5e4">
   <span class="ne-text">
    该函数使用时注意一定要保证target数组的大小足够保存source字符串，必要的话可以在上面函数中添加一段长度验证程序（略）。
   </span>
  </li>
  <li id="u12bf5c98">
   <span class="ne-text">
    第4行用到了几个知识点：①C语言用0代表“false”，非0代表“true”；②赋值表达式的终值是赋值符左边的数值；③变量i的自加运算符'++'在后，先取i的值进行运算，然后自增1。因此整个执行过程为：先将source[i]赋值给target[i]，然后i自增1，然后判断条件表达式结果是否为“true”，当source[i]为'\0'时结束循环。
   </span>
  </li>
  <li id="ufefcabfe">
   <span class="ne-text">
    特别注意，source字符串末尾的'\0'一定也要复制过来，或者手动添加。
   </span>
  </li>
 </ul>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="MfJO4"><span
style="font-weight:bold;">代码5.40</span>  字符串比较
<code>int my_strcmp(char str1[], char str2[])
{
    int res,i=0 ; //res保存第一个出现的不同字符的ASCII码差值。
    while((res = str1[i] - str2[i]) == 0 &amp;&amp; str1[i]) i++; //字符相同且str1未到末尾时i下移。
    return res;
}</code></pre>
 <ul class="ne-ul">
  <li id="ua596483f">
   <span class="ne-text">
    根据C风格字符串的特点，字符串比较就是依次对比str1和str2的同位置字符的ASCII码数值，直到不同为止，结果为：0（相等），正数（str1大），负数（str2大）。常规的写法有很多种，这里采用了尽量简洁的写法。
   </span>
  </li>
  <li id="udd56ebd5">
   <span class="ne-text">
    第4行的条件逻辑是str1未到末尾（不是'\0'），且同位置字符不相同时，位移变量i下移一位；不用判断str2是否到末尾，因为如果str1长度大于str2，str2先到末尾，那么此处字符是'\0'，必然小于str1同位置字符。
   </span>
  </li>
  <li id="udf68cf53">
   <span class="ne-text">
    res返回的结果是str1和str2首次出现不同字符时，两个字符的ASCII码差值。
   </span>
  </li>
  <li id="ub2acd85d">
   <span class="ne-text">
    后面的练习题期望结果为：0（相等），1（str1大），-1（str2大），即：将任意正值变成1，任意负值变成-1。这里提供一个解法：将上述代码第5行改为return
                (res&gt;0)-((-res)&gt;0)。
   </span>
  </li>
 </ul>
 <h3 id="uBitN">
  <span class="ne-text">
   随堂练习5.5
  </span>
 </h3>
 <p class="ne-p" id="ua109e5d9">
  <span class="ne-text">
   如何让my_strcmp的返回值为-1,0,1，即正数返回1，负数返回-1。
  </span>
 </p>
 <p class="ne-p" id="u6e7c297e">
  <span class="ne-text">
   提示：知识点
  </span>
  <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#MIXWN" href="ch2#MIXWN">
   <span class="ne-text">
    T267
   </span>
  </a>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="v4pKy"><span
style="font-weight:bold;">代码5.41</span>  字符串串联
<code>void my_strcat(char target[], char source[])
{
    int lt=strlen(target),i=0; //lt保存target串长，i标记source串下标
    while((target[lt++]=source[i++])); //将source字符串中'\0'及之前的字符串联到target末尾
}</code></pre>
 <ul class="ne-ul">
  <li id="ue0f8874b">
   <span class="ne-text">
    该函数实现思想类似于字符串复制，只是运算位置从target末尾的'\0'处开始。
   </span>
  </li>
  <li id="udf06269d">
   <span class="ne-text">
    该函数使用时注意一定要保证target数组的大小足够保存串联后的字符串，必要的话可以在上面函数中添加一段长度验证程序（略）。
   </span>
  </li>
  <li id="u138e7c2c">
   <span class="ne-text">
    第3行求target串长时用到了strlen函数，也可以自己写个循环代替，参考求串长代码。上述算法考虑到运算效率，不希望每次调用strlen函数重新计算target串长，因此用了临时变量lt记录target初始长度，这也是空间换时间的思想体现。
   </span>
  </li>
  <li id="u41c66120">
   <span class="ne-text">
    其他知识点参考my_strcpy的实现，第4行代码在复制source的'\0'后结束循环。
   </span>
  </li>
  <li id="ua18fe737">
   <span class="ne-text">
    特别注意，source字符串末尾的'\0'一定也要复制过来，或者手动添加。
   </span>
  </li>
 </ul>
 <h3 id="hoc5F">
  <span class="ne-text">
   知识点：T552
  </span>
 </h3>
 <table border=1 class="ne-table" id="KrEpt" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="链接29">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="u83acebae" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="ue4385963">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ud76b678c">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u9003e9be">
      <span class="ne-text">
       T552
      </span>
     </p>
    </td>
    <td width="485">
     <p class="ne-p" id="uef1b3251">
      <span class="ne-text">
       掌握C风格字符串的基本操作以及实现方式，通过代码示例掌握C风格字符串的基本操作，掌握字典序
      </span>
     </p>
    </td>
    <td width="125">
     <p class="ne-p" id="ubea73b17">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u4de7a682">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h2 id="TGdg3">
  <span class="ne-text">
   5.3 C风格字符的应用
  </span>
 </h2>
 <h3 id="Spxl1">
  <span class="ne-text">
   例题5.16
  </span>
 </h3>
 <p class="ne-p" id="ua8467dcb" style="text-align: left; text-indent: 2em">
  <span class="ne-text">
   从字符串str中查找某个字符ch第一次出现的位置
  </span>
 </p>
 <p class="ne-p" id="u66fe7eb5">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="ue22856da" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输入一个字符串str和一个字符ch，以空格分隔。
  </span>
 </p>
 <p class="ne-p" id="uf3c2c990">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="uc6f9bf1d" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输出
  </span>
  <span class="ne-text">
   ch在str中第一次出现的位置
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="RZsRb"><span
style="font-weight:bold;">代码5.42</span>  查找字符
<code>#include &lt;iostream&gt;
using namespace std;
int main()
{
    char str[100],ch;
    int i=0;
    cin.getline(str,100); //读入字符串str
    cin.get(ch); //读入要查找的字符ch
    while(str[i]!='\0' &amp;&amp; str[i]!=ch) i++; //未到串尾且未找到ch时，下标下移
    //找到则输出位置，否则提示未找到
    str[i] == ch ? cout&lt;&lt;"at position: "&lt;&lt;i&lt;&lt;endl : cout&lt;&lt;"not found!"&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="nX70t" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u24fb26e9">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ud3c91951">
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
     <p class="ne-p" id="uda89279a">
      <span class="ne-text">
       asdsf1234567
      </span>
     </p>
     <p class="ne-p" id="udb759bbf">
      <span class="ne-text">
       6
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u00fb2d51">
      <span class="ne-text">
       at position: 10
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u047e3b75">
   <span class="ne-text">
    第9行将找到/找不到的条件合并在一起。
   </span>
  </li>
  <li id="u14e6bc03">
   <span class="ne-text">
    第11行用了条件运算符输出结果，注意不要遗漏了找不到的情况。
   </span>
  </li>
 </ul>
 <h3 id="gHWBk">
  <span class="ne-text">
   例题5.17
  </span>
 </h3>
 <p class="ne-p" id="u86f705fb" style="text-align: left; text-indent: 2em">
  <span class="ne-text">
   从字符串str中查找第一个只出现一次的字符，如果没有找到，输出"-1"。
  </span>
 </p>
 <p class="ne-p" id="u99643e49">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="uf317567a" style="text-align: left">
  <span class="ne-text">
   输入一个字符串str，可能包含空格。
  </span>
 </p>
 <p class="ne-p" id="u17838a3f">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="uc6c327c0" style="text-align: left">
  <span class="ne-text">
   如果找到符合条件的字符则输出，否则输出"-1"。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="yO3dU"><span
style="font-weight:bold;">代码5.43</span>  查找第一个只出现一次的字符
<code>#include&lt;iostream&gt;
#include&lt;cstring&gt;
using namespace std;
int main()
{
    char str[100];
    int a[128] = {0};//记录字符串str中每个字符的出现次数
    cin.getline(str,100); //读入字符串str
    int len = strlen(str); //保存字符串长度
    int i;
    for(i=0; i&lt;len; i++) //统计字符串str中每个字符的出现次数
        a[str[i]] ++;
    for(i=0; i&lt;len; i++) //按出现顺序查找只出现一次的字符
        if (1 == a[str[i]]) break;
    i&lt;len ? cout&lt;&lt;str[i]&lt;&lt;endl : cout&lt;&lt;"-1"&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="tvuH8" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u3c40d20e">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ud4c58efd">
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
     <p class="ne-p" id="ucc826bf7">
      <span class="ne-text">
       asdf fdsa 123
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ueb271e7b">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u84647cc9">
   <span class="ne-text">
    该程序也是一个比较经典的以空间换时间的操作，比较自然的思路是对每个字符统计出现次数，这需要用到嵌套循环，算法复杂度比本程序高。
   </span>
  </li>
  <li id="uec38df38">
   <span class="ne-text">
    第7行定义的数组a记录字符串str中每个字符的出现次数，因为ASCII表有128个字符，因此数组大小至少定义为128。
   </span>
  </li>
  <li id="ua960b8a7">
   <span class="ne-text">
    第9行变量len保存字符串str的长度，因为要多次使用，所以用变量保存下来，节约调用strlen函数的次数。
   </span>
  </li>
  <li id="u95c0b13c">
   <span class="ne-text">
    第14行将常量1放在'=='左边，这是一个良好的习惯，当粗心将'=='误写为'='时编译器会报错。
   </span>
  </li>
  <li id="u19d24a0d">
   <span class="ne-text">
    如果查找到，str字符串中i的位置就是符合条件的字符；查找不到则最终i的值等于len。
   </span>
  </li>
 </ul>
 <h3 id="ZnDf4">
  <span class="ne-text">
   例题5.18
  </span>
 </h3>
 <p class="ne-p" id="链接53" style="text-align: left; text-indent: 2em">
  <span class="ne-text">
   输入若干单词，将它们从小到大排列后输出。
  </span>
 </p>
 <p class="ne-p" id="u5c308729">
  <span class="ne-text">
   【输入】
  </span>
 </p>
 <p class="ne-p" id="ub2fd622d" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   第一个输入数字n，然后n行，每行输入一个单词，每个单词无空格。
  </span>
 </p>
 <p class="ne-p" id="uef9460ac">
  <span class="ne-text">
   【输出】
  </span>
 </p>
 <p class="ne-p" id="uf0a9b93b" style="text-align: left">
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   输出
  </span>
  <span class="ne-text">
   排序后的单词，每行一个单词
  </span>
  <span class="ne-text" style="color: rgb(64, 64, 64)">
   。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="P0mNY"><span
style="font-weight:bold;">代码5.44</span>  单词排序
<code>#include&lt;iostream&gt;
#include&lt;cstring&gt;
using namespace std;
int main()
{
    int n;
    cin&gt;&gt;n;//首先读入第一行的整数，即单词数
    cin.ignore();//清除残留的回车符
    char str[n][100], t[100];//str保存读取的n个单词
    for (int i=0; i&lt;n; i++) cin.getline(str[i],100);
    for(int i=0; i&lt;n-1; i++)//交换法排序
        for (int j=i+1; j&lt;n; j++)
            if (strcmp( str[i], str[j]) &gt; 0 )
            {
                strcpy ( t, str[i]);
                strcpy (str[i], str[j]);
                strcpy(str[j], t);
            }
    for (int i=0; i&lt;n; i++)  cout&lt;&lt;str[i]&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="y1lWw" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u5ff80fb8">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="uaa5b8dee">
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
     <p class="ne-p" id="ud6e87821">
      <span class="ne-text">
       5
      </span>
     </p>
     <p class="ne-p" id="ua068a994">
      <span class="ne-text">
       word
      </span>
     </p>
     <p class="ne-p" id="ue57a45e3">
      <span class="ne-text">
       work
      </span>
     </p>
     <p class="ne-p" id="uc2887b26">
      <span class="ne-text">
       homework
      </span>
     </p>
     <p class="ne-p" id="u3adbcc6e">
      <span class="ne-text">
       job
      </span>
     </p>
     <p class="ne-p" id="u100d20b4">
      <span class="ne-text">
       good
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u0840ed92">
      <span class="ne-text">
       good
      </span>
     </p>
     <p class="ne-p" id="u4a47ac94">
      <span class="ne-text">
       homework
      </span>
     </p>
     <p class="ne-p" id="ueff98189">
      <span class="ne-text">
       job
      </span>
     </p>
     <p class="ne-p" id="uc90942aa">
      <span class="ne-text">
       word
      </span>
     </p>
     <p class="ne-p" id="uf803a470">
      <span class="ne-text">
       work
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u656ce580">
   <span class="ne-text">
    程序用一个字符串数组保存单词，在C语言中存储结构用二维字符数组描述。
   </span>
  </li>
  <li id="链接25">
   <span class="ne-text">
    第8行不要忘了用cin.ignore()清除读走整数后缓冲区中残留的回车符，否则接下来读到的第一个单词是空串。当然也有其他解决方法，例如用cin.get()读走单个字符、用getline读走空行等等。
   </span>
  </li>
  <li id="u752fc9ef">
   <span class="ne-text">
    第11-18行是交换法排序，需要注意的是，字符串的比较、赋值要用专用的处理函数strcmp、strcpy，而不是用于简单变量的运算符。
   </span>
  </li>
 </ul>
</div>
<div class="self-section">
 <h1 id="dHWol">
  <span class="ne-text">
   题单
  </span>
 </h1>
 <table border=1 class="ne-table" id="Pbqom" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="ud3f4f331" style="text-align: center">
      <strong>
       <span class="ne-text">
        序号
       </span>
      </strong>
     </p>
    </td>

    <td width="117">
     <p class="ne-p" id="ua5bc6756" style="text-align: center">
      <strong>
       <span class="ne-text">
        题目名称
       </span>
      </strong>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="链接f7" style="text-align: center">
      <strong>
       <span class="ne-text">
        知识点
       </span>
      </strong>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="uac19ee35" style="text-align: center">
      <strong>
       <span class="ne-text">
        序号
       </span>
      </strong>
     </p>
    </td>

    <td width="121">
     <p class="ne-p" id="u5008ef0c" style="text-align: center">
      <strong>
       <span class="ne-text">
        题目名称
       </span>
      </strong>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u3e749bf0" style="text-align: center">
      <strong>
       <span class="ne-text">
        知识点
       </span>
      </strong>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="u5bf275a1" style="text-align: center">
      <span class="ne-text">
       LX501
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="ubb3c77c6" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161729" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161729" target="_blank">
       <span class="ne-text">
        逆序输出数组
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ub1fb718f" style="text-align: center">
      <a class="ne-link" data-href="#sDNu2" href="#sDNu2">
       <span class="ne-text">
        T511
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u3ec9922b" style="text-align: center">
      <span class="ne-text">
       LX502
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="u23f6521b" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161730" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161730" target="_blank">
       <span class="ne-text">
        数组求和
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uc6537786" style="text-align: center">
      <a class="ne-link" data-href="#wVcOg" href="#wVcOg">
       <span class="ne-text">
        T514
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="ub2b3855b" style="text-align: center">
      <span class="ne-text">
       LX503
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="u198c854f" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161731" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161731" target="_blank">
       <span class="ne-text">
        昨天
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="链接22" style="text-align: center">
      <a class="ne-link" data-href="#Dr2WK" href="#Dr2WK">
       <span class="ne-text">
        T512
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="uf283bf9a" style="text-align: center">
      <span class="ne-text">
       LX504
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="u39cbc626" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161732" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161732" target="_blank">
       <span class="ne-text">
        求最值
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u472d9719" style="text-align: center">
      <a class="ne-link" data-href="#wVcOg" href="#wVcOg">
       <span class="ne-text">
        T514
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="u2f40170b" style="text-align: center">
      <span class="ne-text">
       LX505
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="u3ee51409" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161733" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161733" target="_blank">
       <span class="ne-text">
        平均之上
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ucd2e11e4" style="text-align: center">
      <a class="ne-link" data-href="#wVcOg" href="#wVcOg">
       <span class="ne-text">
        T514
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u293e2aaa" style="text-align: center">
      <span class="ne-text">
       LX506
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="u73a2b0a8" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161734" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161734" target="_blank">
       <span class="ne-text">
        编程团体赛
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uf3092b24" style="text-align: center">
      <a class="ne-link" data-href="#s7C1R" href="#s7C1R">
       <span class="ne-text">
        T516
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="u5569af40" style="text-align: center">
      <span class="ne-text">
       LX507
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="ub2b3d382" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161735" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161735" target="_blank">
       <span class="ne-text">
        光棍串
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u7373d7ad" style="text-align: center">
      <a class="ne-link" data-href="#qQ3m1" href="#qQ3m1">
       <span class="ne-text">
        T522
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="链接8c" style="text-align: center">
      <span class="ne-text">
       LX508
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="uc90ecfca" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161736" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161736" target="_blank">
       <span class="ne-text">
        小写数转大写
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uf4a581de" style="text-align: center">
      <a class="ne-link" data-href="#qQ3m1" href="#qQ3m1">
       <span class="ne-text">
        T522
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="链接d8" style="text-align: center">
      <span class="ne-text">
       LX509
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="uc003dd01" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161739" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161739" target="_blank">
       <span class="ne-text">
        最小正整数
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ud0d371e7" style="text-align: center">
      <a class="ne-link" data-href="#KKCom" href="#KKCom">
       <span class="ne-text">
        T526
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u79bd3c70" style="text-align: center">
      <span class="ne-text">
       LX510
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="ud07d8e8e" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161738" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161738" target="_blank">
       <span class="ne-text">
        建国的难题
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uf2b05e25" style="text-align: center">
      <a class="ne-link" data-href="#KKCom" href="#KKCom">
       <span class="ne-text">
        T526
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="ubaea98c7" style="text-align: center">
      <span class="ne-text">
       LX511
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="uaea82665" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161737" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161737" target="_blank">
       <span class="ne-text">
        排序
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ued38cbc2" style="text-align: center">
      <a class="ne-link" data-href="#Tpq9G" href="#Tpq9G">
       <span class="ne-text">
        T527
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u6bc47215" style="text-align: center">
      <span class="ne-text">
       LX512
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="u9a413cd5" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161740" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161740" target="_blank">
       <span class="ne-text">
        矩阵运算
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ua600fa9d" style="text-align: center">
      <a class="ne-link" data-href="#rxqUf" href="#rxqUf">
       <span class="ne-text">
        T515
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="uc19f34b2" style="text-align: center">
      <span class="ne-text">
       LX513
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="u04f7645c" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161741" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161741" target="_blank">
       <span class="ne-text">
        字符串测试
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u5d308137" style="text-align: center">
      <a class="ne-link" data-href="#gItBo" href="#gItBo">
       <span class="ne-text">
        T541
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u0b361db0" style="text-align: center">
      <span class="ne-text">
       LX514
      </span>
     </p>
    </td>
    
    <td width="121">
     <p class="ne-p" id="uc7558304" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161742" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161742" target="_blank">
       <span class="ne-text">
        字符串跨距
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uce597bb3" style="text-align: center">
      <a class="ne-link" data-href="#gItBo" href="#gItBo">
       <span class="ne-text">
        T541
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#CUEPT" href="#CUEPT">
       <span class="ne-text">
        T546
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="u38912f4f" style="text-align: center">
      <span class="ne-text">
       LX515
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="u72d02d62" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161743" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161743" target="_blank">
       <span class="ne-text">
        首字母大写
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u3e5c85b1" style="text-align: center">
      <a class="ne-link" data-href="#ROwVJ" href="#ROwVJ">
       <span class="ne-text">
        T546
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u19ea83f2" style="text-align: center">
      <span class="ne-text">
       LX516
      </span>
     </p>
    </td>
     
    <td width="121">
     <p class="ne-p" id="u89ccbb14" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161744" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161744" target="_blank">
       <span class="ne-text">
        交替01串
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u24029c44" style="text-align: center">
      <a class="ne-link" data-href="#o43D1" href="#o43D1">
       <span class="ne-text">
        T547
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="uee22cb6e" style="text-align: center">
      <span class="ne-text">
       LX517
      </span>
     </p>
    </td>
     
    <td width="117">
     <p class="ne-p" id="u93197e95" style="text-align: center">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161745" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161745" target="_blank">
       <span class="ne-text">
        大数加1
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="uc4f3bfca" style="text-align: center">
      <a class="ne-link" data-href="#TSGz6" href="#TSGz6">
       <span class="ne-text">
        T549
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u7671f783" style="text-align: center">
      <br/>
     </p>
    </td>
    
    <td width="121">
     <p class="ne-p" id="u86fd8e38" style="text-align: center">
      <br/>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u2737e2b0" style="text-align: center">
      <br/>
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
    name: 'Ch5',
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
        this.$store.dispatch('toChapter', 8);
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
