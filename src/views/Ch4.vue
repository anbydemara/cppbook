<template>
<div class="whole-page">
  <!-- content -->
  <div class="self-main">
    <div class="chapter-title">✋第四章 循环</div>
    <div class="lake-content" ref="content-data" typography="classic">
      <div class="self-section">
      <h1 id="ATRzv">
        <span class="ne-text"> 1. while循环 </span>
      </h1>
      <p class="ne-p" id="ue795316a" style="text-indent: 2em">
        <span class="ne-text"> while循环的基本语法格式如下： </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="kSwKZ"
      ><span style="font-weight:bold;">while循环语法规则</span><code>while(条件)
{
     代码块;
}</code></pre>
      <ul class="ne-ul">
        <li id="uf4a9b3e6">
          <span class="ne-text">
            while的语法格式与if的单分支语法格式完全相同，但是if在符合条件后只能执行一次，而while在符合条件时，可以反复执行，直到条件不符合退出循环。
          </span>
        </li>
        <li id="u9bc077fe">
          <span class="ne-text">
            第2-4行称为循环体，当第1行的条件符合时，循环体被反复执行，当条件不符合时，循环体不会被执行。
          </span>
        </li>
        <li id="u944f4f12">
          <span class="ne-text">
            注意第1行末尾不能有分号，分号表示空语句，形成了一个无效的空循环。
          </span>
        </li>
      </ul>
      <h3 id="FPxVs">
        <span class="ne-text" style="color: rgb(38, 38, 38)"> 例题4.1 </span>
        <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
        </span>
      </h3>
      <p class="ne-p" id="u9e58317f" style="text-indent: 2em">
        <span class="ne-text"> 1~N求和。请求出100以内，1至任意数之和。 </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="orhjv"
      ><span style="font-weight:bold;">代码4.1</span> 1~N求和
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int sum=0,i=1,count;
    cin&gt;&gt;count;					//循环控制变量初始化
    while(i&lt;=count)				//循环条件
    {
        sum+=i;
        ++i;					//循环控制变量的改变
    }
    cout&lt;&lt;sum&lt;&lt;endl;
}</code></pre>
      <table border="1" class="ne-table" id="bvAUu" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub1abe314">
                <span class="ne-text"> </span>
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u1dca1cad">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u7133e281">
                <span class="ne-text"> 100 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u31a485f5">
                <span class="ne-text"> 5050 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u5e602d41" style="text-indent: 2em">
        <span class="ne-text">
          循环的三要素为：1）循环控制变量初始化；2）循环条件；3）循环控制变量的改变。每个循环一般情况下要包含这三个要素。循环控制变量初始化定义了循环的起点，循环条件界定了循环的终点，循环控制变量的改变决定了循环的方向和改变的步长。
        </span>
      </p>
      <p class="ne-p" id="u8bd93ea8" style="text-indent: 2em">
        <span class="ne-text">
          代码4.1是一个典型的累积求和过程，注意第6行的累积变量必须要先初始化为0。变量在使用前必须进行初始化，否则结果是不确定的。如果没有初始化，很有可能在本地运行时结果正确，但是提交到在线系统时结果错误。这是初学者常见问题。
        </span>
      </p>
      <p class="ne-p" id="u431ed8e4" style="text-indent: 2em">
        <span class="ne-text">
          使用while完成指定次数的循环，可以采用以下简约的形式。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="UDljm"
      ><span style="font-weight:bold;">代码4.2</span> 1~100求和（简约版）
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int sum=0,i;
    cin&gt;&gt;i;					//循环控制变量初始化
    while(i--)				//循环条件
    {
        sum+=(i+1);
    }
    cout&lt;&lt;sum&lt;&lt;endl;
}</code></pre>
      <table border="1" class="ne-table" id="NDjfL" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub21814d9">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="ubdf06bec">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u51601c9f">
                <span class="ne-text"> 100 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uda0a5f13">
                <span class="ne-text"> 5050 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="u795a4893">
          <span class="ne-text"> 采用反向循环，当 </span>
          <code class="ne-code">
            <span class="ne-text"> i </span>
          </code>
          <span class="ne-text"> 为0时，循环条件为 </span>
          <code class="ne-code">
            <span class="ne-text"> false </span>
          </code>
          <span class="ne-text"> ，停止循环。 </span>
        </li>
        <li id="ubae09696">
          <span class="ne-text">
            第8行先进行判断，然后执行了自减1操作，循环次数得到了保障。对于这个题目而言，
          </span>
          <code class="ne-code">
            <span class="ne-text"> i </span>
          </code>
          <span class="ne-text">
            既作为循环控制变量，也在第10行参与了运算。第10行的
          </span>
          <code class="ne-code">
            <span class="ne-text"> i </span>
          </code>
          <span class="ne-text"> 已经是被自减1后的结果，因此要改为 </span>
          <code class="ne-code">
            <span class="ne-text"> i+1 </span>
          </code>
          <span class="ne-text"> 。 </span>
        </li>
      </ul>
      <h3 id="pjuoH">
        <span class="ne-text"> 知识点：T411-T412 </span>
      </h3>
      <table border="1" class="ne-table" id="IAC5k" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u60f6fb29">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="432">
              <p class="ne-p" id="链接36" style="text-align: center">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="95">
              <p class="ne-p" id="uef4d0053">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="158">
              <p class="ne-p" id="uc7b1b2c3">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u6a4217db" style="text-align: center">
                <span class="ne-text"> T411 </span>
              </p>
            </td>
            <td width="432">
              <p class="ne-p" id="u1e8cf1cf">
                <span class="ne-text"> 循环三要素的作用和基本使用方法 </span>
              </p>
            </td>
            <td width="95">
              <p class="ne-p" id="ud3026067">
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="158">
              <p class="ne-p" id="udbf57057">
                <a class="ne-link" data-href="#kRPdd" href="#kRPdd">
                  <span class="ne-text"> T421 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T432 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="685">
              <p class="ne-p" id="u850e182f">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161713"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161713"
                  target="_blank"
                >
                  <span class="ne-text"> （LX401） </span>
                </a>

                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161714"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161714"
                  target="_blank"
                >
                  <span class="ne-text"> (LX402) </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161715"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161715"
                  target="_blank"
                >
                  <span class="ne-text"> (LX403) </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161716"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161716"
                  target="_blank"
                >
                  <span class="ne-text"> （LX404） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  target="_blank"
                >
                  <span class="ne-text"> (LX407) </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  target="_blank"
                >
                  <span class="ne-text"> （LX408） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161721"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161721"
                  target="_blank"
                >
                  <span class="ne-text"> （LX409） </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 43px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u6b7aef1f">
                <span class="ne-text"> T412 </span>
              </p>
            </td>
            <td width="432">
              <p class="ne-p" id="u197cf57f">
                <span class="ne-text"> 熟练掌握 </span>
                <code class="ne-code">
                  <span class="ne-text"> while(变量--) </span>
                </code>
                <span class="ne-text"> 的循环次数控制方法 </span>
              </p>
            </td>
            <td width="95">
              <p class="ne-p" id="u6b51c119">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#iAVWo"
                  href="ch2#iAVWo"
                >
                  <span class="ne-text"> T244 </span>
                </a>
                <span class="ne-text"> , </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#t5tWx"
                  href="ch2#t5tWx"
                >
                  <span class="ne-text"> T268 </span>
                </a>
              </p>
            </td>
            <td width="158"></td>
          </tr>
          <tr style="height: 43px">
            <td colspan="3" width="685">
              <p class="ne-p" id="u2294abf3">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161719"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161719"
                  target="_blank"
                >
                  <span class="ne-text"> （LX406） </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="self-section">
      <h1 id="H0BuQ">
        <span class="ne-text"> 2. do-while循环 </span>
      </h1>
      <p class="ne-p" id="u65ec0262" style="text-indent: 2em">
        <span class="ne-text"> do-while循环的基本语法格式如下： </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="Ck6NV"
      ><span style="font-weight:bold;"></span>do-while循环语法规则
 <code>do
{
    代码块;
} while (条件);</code></pre>
      <p class="ne-p" id="u4fc2c9f6" style="text-indent: 2em">
        <span class="ne-text"> do-while循环 </span>
        <strong>
          <span class="ne-text" style="font-size: 16px"> 先执行 </span>
        </strong>
        <span class="ne-text" style="font-size: 16px">
          循环体中的语句，然后
        </span>
        <strong>
          <span class="ne-text" style="font-size: 16px"> 再判断 </span>
        </strong>
        <span class="ne-text" style="font-size: 16px">
          条件是否为真。while循环是
        </span>
        <strong>
          <span class="ne-text" style="font-size: 16px"> 先判断再执行 </span>
        </strong>
        <span class="ne-text" style="font-size: 16px">
          。所以while循环可能一遍也不执行，而do-while循环的第一遍是一定要执行。
        </span>
      </p>
      <div class="ne-quote">
        <p class="ne-p" id="u101f3acc">
          <span class="ne-text" style="font-size: 16px">
            注意第4行最后一定要有一个分号
          </span>
          <code class="ne-code">
            <span class="ne-text" style="font-size: 16px"> ; </span>
          </code>
          <span class="ne-text" style="font-size: 16px">
            ，表示do-while循环的结束。
          </span>
        </p>
      </div>
      <h3 id="pgYfQ">
        <span class="ne-text"> 例题4.2 </span>
      </h3>
      <p class="ne-p" id="u57b59d4e" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          猜数游戏。要求猜一个介于1～10之间的数字，根据用户猜测的数与标准值进行对比，并给出提示，以便下次猜测能接近标准值，直到猜中为止。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="rqSS0"
      ><span style="font-weight:bold;">代码4.3</span> 猜数游戏
 <code>#include&lt;iostream&gt;
#include&lt;ctime&gt;
using namespace std;

int main (  )
{
    srand(time(NULL));						//随机数的种子
    int magic=rand()%10+1;					//将随机数控制在1-10之间
    int guess;
    do
    {
        cin&gt;&gt;guess;
        if (guess &gt; magic)
            cout&lt;&lt;"太大\n";
        else if (guess &lt; magic)
            cout&lt;&lt;"太小\n";
    }while (guess != magic);
    cout&lt;&lt;"答案是："&lt;&lt;guess&lt;&lt;endl;
}</code></pre>
      <table border="1" class="ne-table" id="nE3xK" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ud2095361">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="374">
              <p class="ne-p" id="链接85">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="3" width="375">
              <p class="ne-p" id="u3c799bc3">
                <span class="ne-text"> 3 </span>
              </p>
              <p class="ne-p" id="ucafba224">
                <span class="ne-text"> 8 </span>
              </p>
              <p class="ne-p" id="u84f1bb53">
                <span class="ne-text"> 5 </span>
              </p>
            </td>
            <td rowspan="3" width="374">
              <p class="ne-p" id="链接c5">
                <span class="ne-text"> 太小 </span>
              </p>
              <p class="ne-p" id="ue75bcc44">
                <span class="ne-text"> 太大 </span>
              </p>
              <p class="ne-p" id="链接93">
                <span class="ne-text"> 答案是：5 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px"></tr>
          <tr style="height: 33px"></tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="链接fa">
          <span class="ne-text">
            第7行是随机数种子，当种子相同时，随机数产生的序列总是相同的。这里将时间作为种子，时间总是在不断流逝，因此每次运行的时候种子总是不一样的，产生不同的随机数。
          </span>
        </li>
        <li id="链接00">
          <span class="ne-text"> 第8行通过取余和加1操作，将 </span>
          <code class="ne-code">
            <span class="ne-text"> rand </span>
          </code>
          <span class="ne-text"> 产生的随机整数控制到1-10的范围内。 </span>
        </li>
        <li id="uf7be7936">
          <span class="ne-text">
            采用do-while循环，保证玩者至少要猜一次。
          </span>
        </li>
      </ul>
      <h3 id="UqZzx">
        <span class="ne-text"> 随堂练习4.1 </span>
      </h3>
      <p class="ne-p" id="uab6516bb" style="text-indent: 2em">
        <span class="ne-text"> 产生一个在80-100范围内的随机整数。 </span>
      </p>
      <h3 id="kRPdd">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T421
        </span>
      </h3>
      <table border="1" class="ne-table" id="L4YbM" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="ubf5486e0">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ufef8b668" style="text-align: center">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u8c7024a9">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="61">
              <p class="ne-p" id="ubaba4e23">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="ub3efc4af">
                <span class="ne-text"> T421 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u77ef6e5c">
                <span class="ne-text"> 掌握 </span>
                <code class="ne-code">
                  <span class="ne-text"> do-while </span>
                </code>
                <span class="ne-text">
                  的使用方法，至少执行一次，结束处的分号不能缺失
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u992ff77f">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
              </p>
            </td>
            <td width="61">
              <p class="ne-p" id="uc1fdeeca">
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="self-section">
      <h1 id="zLfxh">
        <span class="ne-text"> 3. for循环 </span>
      </h1>
      <p class="ne-p" id="uc28708b1" style="text-indent: 2em">
        <span class="ne-text">
          前文提到了循环三要素，当已知循环范围时，采用for循环书写更加简洁清晰。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="LYqrt"
      ><span style="font-weight:bold;"></span>for循环语法规则
 <code>for(初始化; 循环控制条件; 循环控制变量的改变)
{
    语句块;
}</code></pre>
      <p class="ne-p" id="u36f7eaf7">
        <span class="ne-text">
          以下代码求n的阶乘，其实现方法与代码4.1非常类似，但书写上明显简洁了很多。
        </span>
      </p>
      <h3 id="vEvSt">
        <span class="ne-text"> 例题4.3 </span>
      </h3>
      <p class="ne-p" id="u5a0e439d" style="text-indent: 2em">
        <span class="ne-text"> 求n的阶乘。 </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="X3QNb"
      ><span style="font-weight:bold;">代码4.4</span> 求n的阶乘
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int n;
    cin&gt;&gt;n;
    int factorial=1;
    for(int i=1;i&lt;=n;++i)
        factorial*=i;
    cout&lt;&lt;factorial&lt;&lt;endl;
}</code></pre>
      <table border="1" class="ne-table" id="MbK2d" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="uf2d43c79">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u05fbca11">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u739e8ee8">
                <span class="ne-text"> 5 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uf25c825e">
                <span class="ne-text"> 120 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="u1ed1d9fd">
          <span class="ne-text">
            与代码4.1进行对照，第9行初始化语句只执行了一遍，然后执行条件判断，然后执行循环体，最后执行
          </span>
          <code class="ne-code">
            <span class="ne-text"> ++i; </span>
          </code>
          <span class="ne-text"> 操作。再次执行条件判断、循环体、 </span>
          <code class="ne-code">
            <span class="ne-text"> ++i; </span>
          </code>
          <span class="ne-text"> 操作。如果条件不成立，则循环退出。 </span>
        </li>
        <li id="u9efd0516">
          <span class="ne-text"> 初试化语句执行了1遍，循环体执行了 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 遍， </span>
          <code class="ne-code">
            <span class="ne-text"> ++i; </span>
          </code>
          <span class="ne-text"> 执行了 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 遍，而条件判断执行了 </span>
          <code class="ne-code">
            <span class="ne-text"> n+1 </span>
          </code>
          <span class="ne-text"> 遍，其中包括 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 次成立和1次不成立。 </span>
        </li>
        <li id="u42d5c07a">
          <span class="ne-text"> 循环结束时， </span>
          <code class="ne-code">
            <span class="ne-text"> i </span>
          </code>
          <span class="ne-text"> 为 </span>
          <code class="ne-code">
            <span class="ne-text"> n+1 </span>
          </code>
          <span class="ne-text"> ，表示第一次条件不成立时i的值。 </span>
        </li>
      </ul>
      <p class="ne-p" id="u505cd93d" style="text-indent: 2em">
        <span class="ne-text">
          C++中专门提供了一种基于范围的循环，比传统的for循环语法简单很多。
        </span>
      </p>
      <h3 id="G7paI">
        <span class="ne-text"> 例题4.4 </span>
      </h3>
      <p class="ne-p" id="uf32ce395" style="text-indent: 2em">
        <span class="ne-text">
          输入一串由小写字母组成的句子，将其中的所有小写字母转换为大写字母输出。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="buuYU"
      ><span style="font-weight:bold;">代码4.5</span> 基于范围的循环
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    string s;
    getline(cin,s);
    for(auto ch:s)
        cout.put(toupper(ch));
}</code></pre>
      <table border="1" class="ne-table" id="q0YFt" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="uff482052">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="链接26">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u5e646578">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  this is a lower string
                </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="链接72">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  THIS IS A LOWER STRING
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="u30ff83ef">
          <span class="ne-text"> 第8行的for循环， </span>
          <code class="ne-code">
            <span class="ne-text"> : </span>
          </code>
          <span class="ne-text">
            后表示一个容器变量，从该容器变量里，逐个取出元素，从头到尾进行循环。
          </span>
          <code class="ne-code">
            <span class="ne-text"> auto </span>
          </code>
          <span class="ne-text">
            表示自动根据容器中每个元素的类型自动解析元素的数据类型。
          </span>
        </li>
        <li id="u3e23786e">
          <span class="ne-text"> 第9行的 </span>
          <code class="ne-code">
            <span class="ne-text"> toupper </span>
          </code>
          <span class="ne-text">
            是C/C++中自带的小写转大写函数，同理大写转小写函数为
          </span>
          <code class="ne-code">
            <span class="ne-text"> tolower </span>
          </code>
          <span class="ne-text"> （知识点: </span>
          <a
            class="ne-link"
            data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wG8i3"
            href="ch2#wG8i3"
          >
            <span class="ne-text"> T242 </span>
          </a>
          <span class="ne-text"> ）。 </span>
        </li>
      </ul>
      <div class="ne-quote">
        <p class="ne-p" id="u204b7960">
          <span class="ne-text"> </span>
          <code class="ne-code">
            <span class="ne-text"> auto </span>
          </code>
          <span class="ne-text">
            不是一种数据类型，它通过判断自动解析变量的类型。例如
          </span>
          <code class="ne-code">
            <span class="ne-text"> auto a=5; </span>
          </code>
          <span class="ne-text"> ，a就被自动解析为整型。 </span>
        </p>
      </div>
      <h3 id="pEcIC">
        <span class="ne-text"> 随堂练习4.2 </span>
      </h3>
      <p class="ne-p" id="ue9ae6d50" style="text-indent: 2em">
        <span class="ne-text"> 输出1-10每个数的阶乘。 </span>
      </p>
      <h3 id="zN3EO">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T431-T433
        </span>
      </h3>
      <table border="1" class="ne-table" id="nA20Q" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="uabc4a335">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ua37338ae">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="ud15daf26">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="60">
              <p class="ne-p" id="u23d72fef">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="ue9c982dd">
                <span class="ne-text"> T431 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u25b79876">
                <code class="ne-code">
                  <span class="ne-text"> for </span>
                </code>
                <span class="ne-text">
                  循环的使用方法，用两个分号确定循环三要素，掌握每个要素的执行时间和执行次数
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u5aec27e1">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
              </p>
            </td>
            <td width="60">
              <p class="ne-p" id="u37228bda">
                <a class="ne-link" data-href="#bNUwd" href="#bNUwd">
                  <span class="ne-text"> T441 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#FRxma" href="#FRxma">
                  <span class="ne-text"> T474 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="685">
              <p class="ne-p" id="ue018a802">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161713"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161713"
                  target="_blank"
                >
                  <span class="ne-text"> （LX401） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161714"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161714"
                  target="_blank"
                >
                  <span class="ne-text"> （LX402） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161715"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161715"
                  target="_blank"
                >
                  <span class="ne-text"> （LX403） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161716"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161716"
                  target="_blank"
                >
                  <span class="ne-text"> （LX404） </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="uf3eb337e">
                <span class="ne-text"> T432 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u337e89f1">
                <span class="ne-text"> 当循环次数确定时，建议使用 </span>
                <code class="ne-code">
                  <span class="ne-text"> for </span>
                </code>
                <span class="ne-text"> ；当循环次数不确定时，建议使用 </span>
                <code class="ne-code">
                  <span class="ne-text"> while </span>
                </code>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u1916dff0">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
              </p>
            </td>
            <td width="60"></td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="685">
              <p class="ne-p" id="ua52c385f">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  target="_blank"
                >
                  <span class="ne-text"> (LX407) </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  target="_blank"
                >
                  <span class="ne-text"> (LX408) </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161725"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161725"
                  target="_blank"
                >
                  <span class="ne-text"> (LX413) </span>
                </a>

              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u4a46e6f6">
                <span class="ne-text"> T433 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u3f306b6d">
                <span class="ne-text"> 掌握 </span>
                <code class="ne-code">
                  <span class="ne-text"> for(auto 变量 : 容器) </span>
                </code>
                <span class="ne-text"> 的循环形式 </span>
              </p>
            </td>
            <td width="65"></td>
            <td width="60"></td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="self-section">
      <h1 id="thbiT">
        <span class="ne-text"> 4. 嵌套循环 </span>
      </h1>
      <h2 id="HloKs">
        <span class="ne-text"> 4.1 嵌套循环基本方法 </span>
      </h2>
      <p class="ne-p" id="ue1c9a6f7" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          嵌套循环体现了一个笛卡尔积的概念，是内外循环的循环次数的乘积。这一节用
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> * </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          构造图形展现嵌套循环。这些图形在实际使用中用处不大，但是对初学者理解嵌套循环有很大意义。
        </span>
      </p>
      <h3 id="YxSWt">
        <span class="ne-text"> 例题4.5 </span>
      </h3>
      <p class="ne-p" id="u73826af6" style="text-indent: 2em">
        <span class="ne-text"> 用 * 组成三行四列的矩形并输出。 </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="XC4jM"
      ><span style="font-weight:bold;">代码4.6</span> 输出矩形
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    for(int i=0;i&lt;3;i++){
        for(int j=0;j&lt;4;j++)
            cout.put('*');
        cout&lt;&lt;endl;
    }
}</code></pre>
      <table border="1" class="ne-table" id="qcpiu" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="uab0bbcb1">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u9e7e5cb0">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u0ec0fb25">
                <span class="ne-text"> 无 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u0a6a3129">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ****
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ****
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ****
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="uf66e0059">
          <span class="ne-text" style="font-size: 16px">
            嵌套循环最重要的准则是内循环先循环，当i=0时，内循环执行一遍，然后i=1时再执行一遍，以此类推，共执行三遍。因此出现了一个三行4列的矩形。
          </span>
        </li>
        <li id="u22f594d8">
          <span class="ne-text" style="font-size: 16px">
            内循环和外循环的循环控制变量不能相同。
          </span>
        </li>
        <li id="ud1e51098">
          <span class="ne-text" style="font-size: 16px">
            每行输出结束的时候，第9行输出一个回车，进入下一行。
          </span>
        </li>
      </ul>
      <h3 id="wLk7z">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.6
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="uab51cee3" style="text-indent: 2em">
        <span class="ne-text">
          用 * 组成底为4，高为4的左对齐的直角三角形并输出。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="EoAGr"
      ><span style="font-weight:bold;">代码4.7</span> 输出直角三角形
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    for(int i=0;i&lt;4;i++){
        for(int j=0;j&lt;=i;j++)
            cout.put('*');
        cout&lt;&lt;endl;
    }
}</code></pre>
      <table border="1" class="ne-table" id="kXuEj" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u146fd22b">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="ud920890b">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u0b3e6a02">
                <span class="ne-text"> 无 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uf41d48ab">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  *
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  **
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ***
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ****
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="u69a7757a">
          <span class="ne-text" style="font-size: 16px">
            当执行内循环时，外循环的循环控制变量是不变的，因此可以形成变长控制。
          </span>
        </li>
      </ul>
      <h3 id="V6FUC">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.7
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="u1a5504de" style="text-indent: 2em">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          用 * 组成底为4，高为4的右对齐的直角三角形并输出。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="UJ4Kd"
      ><span style="font-weight:bold;">代码4.8</span> 输出右对齐的直角三角形
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    for(int i=0;i&lt;4;i++){
        for(int j=0;j&lt;4-1-i;j++)
            cout.put(' ');
        for(int j=0;j&lt;=i;j++)
            cout.put('*');
        cout&lt;&lt;endl;
    }
}</code></pre>
      <table border="1" class="ne-table" id="aCVLj" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="链接51">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u091ff154">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u1d855567">
                <span class="ne-text"> 无 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="ud165334b">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  *
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  **
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ***
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  ****
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="u2b46b59c">
          <span class="ne-text" style="font-size: 16px">
            标准输出是按文本行制定的，不能控制输出的位置。因此在每行输出
          </span>
          <code class="ne-code">
            <span class="ne-text" style="font-size: 16px"> * </span>
          </code>
          <span class="ne-text" style="font-size: 16px">
            前，控制输出空格的数量，以此达到右对齐的目的。
          </span>
        </li>
      </ul>
      <p class="ne-p" id="u8769f612" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          其实可以看到，每一行输出的字符总数量是相等的，因此可以改成简单的矩形输出，控制输出字符，也可以达到相同的目的。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="kNrii"
      ><span style="font-weight:bold;">代码4.9</span> 特殊字符图像输出模板
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    for(int i=0;i&lt;4;i++){					//外循环控制行
        for(int j=0;j&lt;4;j++)				//内循环控制列
            cout.put(j&lt;4-1-i?' ':'*');		//根据特定条件输出不同字符
        cout&lt;&lt;endl;
    }
}</code></pre>
      <p class="ne-p" id="u1e3174e2" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          这种方法可以进一步推广，用来输出更加复杂的图形。
        </span>
      </p>
      <h3 id="X3qVC">
        <span class="ne-text"> 例题4.8 </span>
      </h3>
      <p class="ne-p" id="ud43084b7" style="text-indent: 2em">
        <span class="ne-text"> 用 * 组成总高为5的“X形”并输出。 </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="eVLTv"
      ><span style="font-weight:bold;">代码4.10</span> 输出X形
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    for(int i=0;i&lt;5;i++){
        for(int j=0;j&lt;5;j++)
            cout.put(j==i||j+i==5-1?'*':' ');
        cout&lt;&lt;endl;
    }
}</code></pre>
      <table border="1" class="ne-table" id="h4XiI" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub783394e">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u22a77fc5">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u2387b7e5">
                <span class="ne-text"> 无 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u28cde6ed">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  * *
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  * *
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  *
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  * *
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  * *
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h3 id="I2ZCX">
        <span class="ne-text"> 随堂练习4.3 </span>
      </h3>
      <p class="ne-p" id="u8e9e238e" style="text-indent: 2em">
        <span class="ne-text"> 实现九九乘法表。实现方法与输出 </span>
        <code class="ne-code">
          <span class="ne-text"> * </span>
        </code>
        <span class="ne-text">
          组成的直角三角形完全相同。注意，控制输出格式
        </span>
        <code class="ne-code">
          <span class="ne-text"> %-4d </span>
        </code>
        <span class="ne-text"> 。其中 </span>
        <code class="ne-code">
          <span class="ne-text"> - </span>
        </code>
        <span class="ne-text"> 表示左对齐，4表示占4个字符的位置。 </span>
      </p>
      <h3 id="bNUwd">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T441-T442
        </span>
      </h3>
      <table border="1" class="ne-table" id="l0l41" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="ud2a24edc">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ubeb162db">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="ucef3f0eb">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="59">
              <p class="ne-p" id="uaa1dbd48">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u0bcb6383">
                <span class="ne-text"> T441 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ucea0e675">
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  掌握嵌套循环的基本使用方法，内循环先循环
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u8a1ed8d6">
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
              </p>
            </td>
            <td width="59">
              <p class="ne-p" id="u9348ba8a">
                <a class="ne-link" data-href="#x2iD7" href="#x2iD7">
                  <span class="ne-text"> T443 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#FRxma" href="#FRxma">
                  <span class="ne-text"> T474 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="684">
              <p class="ne-p" id="ub81435c8">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  target="_blank"
                >
                  <span class="ne-text"> （LX405） </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u545f50b6">
                <span class="ne-text"> T442 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ua48f3da2">
                <span class="ne-text">
                  掌握代码4.9所示的特殊字符图像输出模板
                </span>
              </p>
            </td>
            <td width="65"></td>
            <td width="59"></td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="684">
              <p class="ne-p" id="u0a2393bc">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161727"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161727"
                  target="_blank"
                >
                  <span class="ne-text"> （LX415） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161728"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161728"
                  target="_blank"
                >
                  <span class="ne-text"> （LX416） </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="fZgQD">
        <span class="ne-text"> 4.2 内循环变量的初始化 </span>
      </h2>
      <p class="ne-p" id="u53ff5f7b" style="text-indent: 2em">
        <span class="ne-text">
          在使用嵌套循环时，经常会出现某些变量只出现在内循环中。对于这些变量的初始化要特别小心。下面的代码希望输出一个由数字组成的直角三角行，特别注意第8行。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="vjqsT"
      ><span style="font-weight:bold;">代码4.11</span> 输出数字组成的直角三角形
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int i=1,j=1,num;
    cin&gt;&gt;num;
    while(i&lt;=num){
        //j=1;
        while(j&lt;=i){
            cout&lt;&lt;j&lt;&lt;'\t';
            ++j;
        }
        cout&lt;&lt;endl;
        ++i;
    }
}</code></pre>
      <table border="1" class="ne-table" id="Ij3O4" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u56bb84d8">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u8bbccd45">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u1fb7e1cd">
                <span class="ne-text"> 5 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uaa1b63a3">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  1
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  2
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  3
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  4
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)"> 5 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u15907efb" style="text-indent: 2em">
        <span class="ne-text">
          只有将第9行的注释去掉，才能得到期望的结果。
        </span>
      </p>
      <table border="1" class="ne-table" id="SlUTT" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ua594b178">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u7ac2b6fe">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ua4b34390">
                <span class="ne-text"> 5 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uac44c0e9">
                <span class="ne-text"> 1 </span>
              </p>
              <p class="ne-p" id="uae1b3a96">
                <span class="ne-text"> 1 2 </span>
              </p>
              <p class="ne-p" id="uad5da06a">
                <span class="ne-text"> 1 2 3 </span>
              </p>
              <p class="ne-p" id="ufe0e524a">
                <span class="ne-text"> 1 2 3 4 </span>
              </p>
              <p class="ne-p" id="u49f4bcbb">
                <span class="ne-text"> 1 2 3 4 5 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u393c8a07" style="text-indent: 2em">
        <span class="ne-text">
          这里遇到的重要问题时，内循环的循环控制变量每次都需要重新进行初始化，而初学者往往容易忽略这个问题。一方面内循环可以尽量采用for循环，其语法结构会提醒编程者要进行初始化；另一方面切记一个准则，内循环控制变量的初始化要写在
        </span>
        <strong>
          <span class="ne-text"> 外循环的里面，内循环的外面 </span>
        </strong>
        <span class="ne-text"> 。 </span>
      </p>
      <h3 id="x2iD7">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T443
        </span>
      </h3>
      <table border="1" class="ne-table" id="RLHrk" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="uf2ea8fa8">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="528">
              <p class="ne-p" id="u650c041d">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="105">
              <p class="ne-p" id="u29c45217">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="链接3a">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u78fd33f4">
                <span class="ne-text"> T443 </span>
              </p>
            </td>
            <td width="528">
              <p class="ne-p" id="u9c565807">
                <span class="ne-text">
                  内循环控制变量的初始化要写在外循环的里面，内循环的外面
                </span>
              </p>
            </td>
            <td width="105">
              <p class="ne-p" id="uec90341c">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#MOJpK"
                  href="ch2#MOJpK"
                >
                  <span class="ne-text"> T217 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#bNUwd" href="#bNUwd">
                  <span class="ne-text"> T441 </span>
                </a>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="u32e62847">
                <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="self-section">
      <h1 id="PlyMK">
        <span class="ne-text"> 5. break和continue </span>
      </h1>
      <h2 id="wKFdn">
        <span class="ne-text"> 5.1 死循环与break </span>
      </h2>
      <p class="ne-p" id="u5d86fa53" style="text-indent: 2em">
        <span class="ne-text">
          在书写循环时，尽力避免死循环，因为死循环永无终止的。就像我们小时听的故事：
        </span>
        <span class="ne-text" style="color: rgb(18, 18, 18)">
          从前有座山，山里有座庙，庙里有个老和尚，老和尚在给小和尚讲故事。讲的是什么故事呢：从前有座山，山里有座庙…………。
        </span>
      </p>
      <p class="ne-p" id="udcffd432" style="text-indent: 2em">
        <span class="ne-text" style="color: rgb(18, 18, 18)">
          C/C++中经典的死循环写法是
        </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(18, 18, 18)">
            while(1){}
          </span>
        </code>
        <span class="ne-text" style="color: rgb(18, 18, 18)">
          。其中1表示true，因为永远为真，所以会一直循环下去。与之相对应的语法是
        </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(18, 18, 18)"> break </span>
        </code>
        <span class="ne-text" style="color: rgb(18, 18, 18)">
          ，break表示退出当前循环。注意break只退出一层循环。死循环加break可以构建未知循环次数的基本结构。
        </span>
      </p>
      <h3 id="EVxxY">
        <span class="ne-text"> 例题4.9 </span>
      </h3>
      <p class="ne-p" id="u1592c2c2" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          输入一系列整数，-1表示结束。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="LDrMB"
      ><span style="font-weight:bold;">代码4.12</span> 特殊数据结束输入
 <code>while(1)
{
	cin&gt;&gt;num;
	if(num==-1)
		break;
    ...
}</code></pre>
      <div class="ne-quote">
        <p class="ne-p" id="u652ed1cc">
          <strong>
            <span class="ne-text" style="font-size: 16px"> 提示 </span>
          </strong>
          <span class="ne-text" style="font-size: 16px">
            ：在确定循环次数的情况下，建议使用for循环，循环次数未知时，建议使用while循环。
          </span>
        </p>
      </div>
      <h3 id="x6ypP">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T451
        </span>
      </h3>
      <table border="1" class="ne-table" id="kxIz8" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u3bb0515d">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u2008d746">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="uddb1d94b">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="u6cd0b407">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u38f901c6">
                <span class="ne-text"> T451 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="uc66ef88a">
                <span class="ne-text" style="color: rgb(18, 18, 18)">
                  break可以退出当前循环，但是只退出一层循环，掌握用特殊值终止输入的方法
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u3aaa7816">
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="u7876d7f9">
                <a class="ne-link" data-href="#Cbfbb" href="#Cbfbb">
                  <span class="ne-text"> T472 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="683">
              <p class="ne-p" id="链接f7">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  target="_blank"
                >
                  <span class="ne-text"> （LX405） </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="gNSPZ">
        <span class="ne-text"> 5.2 循环与continue </span>
      </h2>
      <p class="ne-p" id="u03b11504" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          continue与break类似，都是跳出循环。不同点在于break退出当前循环，而continue只是退出本次循环，不执行循环体中的后继语句，直接转到下一次循环，并非完全跳出循环。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="aCBec"
      ><span style="font-weight:bold;"></span>循环与continue语法规则
 <code>while(1)
{
    语句块1；
	if(条件)
		continue;
    语句块2；
}</code></pre>
      <p class="ne-p" id="ue4f3f557" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          如果条件成立，语句块2不会被执行，跳转到第1行，继续执行下一次循环。
        </span>
      </p>
      <p class="ne-p" id="uad36b892" style="text-align: center">
        <img
          class="ne-image"
          id="u3b8ade37"
          src="../assets/images/1672471712898-a2a038c9-0ae1-4aaa-9245-2c23950673b5.png"
          width="320"
        />
      </p>
      <p class="ne-p" id="u27b9c8d1" style="text-align: center">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          图4.1 break与continue
        </span>
      </p>
      <h3 id="LPmdx">
        <span class="ne-text"> 随堂练习 4.4 </span>
      </h3>
      <p class="ne-p" id="u6faacf3a" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          组织n个同学一起玩数7游戏。n个同学围成圆圈，从1开始报数。7的倍数和末尾为7的同学请击掌，不要报数。有报数错误的同学，游戏终止。在这个游戏中，理想状态下是一个无限循环，每个同学都要执行报数操作。击掌同学执行的是continue操作，跳过了报数，但是进入下一次循环。而报数错误的同学执行了break操作，终止了循环。
        </span>
      </p>
      <h3 id="FI3Wr">
        <span class="ne-text"> 例题4.10 </span>
      </h3>
      <p class="ne-p" id="uf67a1b68" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          化工12-1班有30名同学，学号能被3整除的为女生，请输出该班的女生。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="nJTnb"
      ><span style="font-weight:bold;">代码4.13</span> continue使用示例
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    for(int i=1; i&lt;=30; i++)
    {
        if(i%3!=0)
            continue;
        cout&lt;&lt;i&lt;&lt;"是漂亮女生"&lt;&lt;endl;
    }
}</code></pre>
      <ul class="ne-ul">
        <li id="u94546c46">
          <span class="ne-text" style="font-size: 16px">
            男生的学号符合第8行的条件，因此第10行不会被执行。只有女生的学号会执行第10行。
          </span>
        </li>
      </ul>
      <div class="ne-quote">
        <p class="ne-p" id="uab0ff51c">
          <span class="ne-text" style="font-size: 16px">
            金点子：break和continue都只能出现在循环体中，虽然没有明确的语法规定，但是它们都要跟if合用。如果没有条件判断，就意味着循环体中该语句后继部分永远不会被执行。
          </span>
        </p>
      </div>
      <h3 id="I11qM">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T452
        </span>
      </h3>
      <table border="1" class="ne-table" id="CYOYM" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u2c1e80ec">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="uf72583f4">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u1f10c707">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="u3c32d0ef">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u9541b38c">
                <span class="ne-text"> T452 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ue79f2812">
                <span class="ne-text"> </span>
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  continue只是退出本次循环，不执行循环体中的后继语句，直接转到下一次循环，并非完全跳出循环
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="uc234b5e8">
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="u54338f55">
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 id="LnNkd">
        <span class="ne-text"> 6.循环与递归 </span>
      </h1>
      <h2 id="jfpml">
        <span class="ne-text"> 6.1 递归的演化 </span>
      </h2>
      <p class="ne-p" id="uda75bae9" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          函数是可以嵌套调用的，如下图所示，main可以调用函数A，函数A继续调用函数B。
        </span>
      </p>
      <p class="ne-p" id="ub3bf3afb" style="text-align: center">
        <img
          class="ne-image img-60"
          id="链接68"
          src="../assets/images/1672474192546-ba26e02a-f683-4823-9af3-2e880d8dbc72.png"
        />
      </p>
      <p class="ne-p" id="u5d4d043f" style="text-align: center">
        <span class="ne-text"> 图4.2 函数的嵌套调用 </span>
      </p>
      <p class="ne-p" id="u4ed49745" style="text-indent: 2em">
        <span class="ne-text"> 其代码形式如下： </span>
      </p>
      <table border="1" id="kwzgw" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="v00Ne"
              ><span style="font-weight:bold;"></span>在函数A中调用函数B
     <code>int A(int x)
{
    int y,z;
    代码块1;
    z=B(y);
    代码块2;
    return 2*z;
}</code></pre>
            </td>
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="iifCC"
              ><span style="font-weight:bold;"></span>函数B
     <code>int B(int t)
{
    int a,c;
    代码块1;
    代码块3;
    代码块2;
    return 3+c;
}</code></pre>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u51f70cd5" style="text-indent: 2em">
        <span class="ne-text">
          如果函数A调用了函数B，同时函数B也调用了函数A，就形成了间接递归调用：
        </span>
      </p>
      <table border="1" id="d2rPS" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="h5xnk"
              ><span style="font-weight:bold;"></span>在函数A中调用函数B
     <code>int A(int x)
{
    int y,z;
    代码块1;
    z=B(y);
    代码块2;
    return 2*z;
}</code></pre>
            </td>
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="xJIJr"
              ><span style="font-weight:bold;"></span>在函数B中调用函数A
     <code>int B(int t)
{
    int a,c;
    代码块1;
    c=A(a);
    代码块2;
    return 3+c;
}</code></pre>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="链接23" style="text-indent: 2em">
        <span class="ne-text">
          再考虑一种特殊形式，如果A和B两个函数除了函数名之外，其他部分完全相同：
        </span>
      </p>
      <table border="1" id="Q5UuJ" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="c0JlI"
              ><span style="font-weight:bold;"></span>在函数A中调用函数B
     <code>int A(int x)
{
    int y,z;
    代码块1;
    z=B(y);
    代码块2;
    return 2*z;
}</code></pre>
            </td>
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="RjJIc"
              ><span style="font-weight:bold;"></span>在函数B中调用函数A
     <code>int B(int x)
{
    int y,z;
    代码块1;
    z=A(y);
    代码块2;
    return 2*z;
}</code></pre>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="ud6dde92d" style="text-indent: 2em">
        <span class="ne-text">
          这也是间接递归调用，但是很显然，没有必要把完全相同的函数体定义成两个函数，因此只保留函数A，依旧可以达到以上代码的效果。这就是直接递归调用：
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="hkBH0"
      ><span style="font-weight:bold;"></span>直接递归调用
 <code>int A(int x)
{
    int y,z;
    代码块1;
    z=A(y);
    代码块2;
    return 2*z;
}</code></pre>
      <p class="ne-p" id="u0187c4fc" style="text-indent: 2em">
        <span class="ne-text"> 其中 </span>
        <code class="ne-code">
          <span class="ne-text"> z=A(y); </span>
        </code>
        <span class="ne-text">
          调用了自身，称为递归调用。当进行递归调用时，将
        </span>
        <code class="ne-code">
          <span class="ne-text"> y </span>
        </code>
        <span class="ne-text"> 作为参数，从头执行函数 </span>
        <code class="ne-code">
          <span class="ne-text"> A </span>
        </code>
        <span class="ne-text"> ，反复迭代下去，其效果相当于死循环。 </span>
      </p>
      <h3 id="A5BKZ">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T461
        </span>
      </h3>
      <table border="1" class="ne-table" id="XPTZO" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="uc31ac7f9">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="ub3978e41">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u20ce2930">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="57">
              <p class="ne-p" id="u61afc972">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u0a35fb25">
                <span class="ne-text"> T461 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u6fafb198">
                <span class="ne-text">
                  在一个函数内重新调用自身，则实现了递归调用
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u0bf79436">
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="57">
              <p class="ne-p" id="uea2efde0">
                <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="wY7GB">
        <span class="ne-text"> 6.2 简单递归 </span>
      </h2>
      <p class="ne-p" id="链接b8" style="text-indent: 2em">
        <span class="ne-text">
          为了让代码执行有限次，递归调用之前需要加一个条件判断，在何种条件下停止递归递归调用。因此一个递归函数最重要的两个部分是：1）建立递归终止条件；2）形成递归调用。任何递归函数都必须出现这两个部分。以下是递归函数的通用模板：
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="oCIKD"
      ><span style="font-weight:bold;"></span>递归函数的通用模板
 <code>递归函数f(参数列表)
{
	if(参数符合特定条件)终止递归；
	进行递归调用，参数发生变化，向终止条件靠拢
}</code></pre>
      <h3 id="s0JpL">
        <span class="ne-text"> 例题4.11 </span>
      </h3>
      <p class="ne-p" id="u6641da32" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px"> 求n的阶乘n! </span>
      </p>
      <p class="ne-p" id="u0b16ee8d" style="text-indent: 2em">
        <span class="ne-math" id="sSQiZ" style="font-size: 16px">
          <img src="../assets/images/aef8bcd8fd7ef862e081bc68b9155891.svg" />
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="EXnl1"
      ><span style="font-weight:bold;">代码4.14</span> 用递归方法求n的阶乘
 <code>#include&lt;iostream&gt;
using namespace std;

long long factn(int n)				//递归函数
{
    long long fac;
    if (n == 1)						//循环终止条件
        return 1;
    fac = n * factn(n-1);			//递归调用
    return fac;
}

int main (  )
{
    int n;
    cin&gt;&gt;n;
    cout&lt;&lt;factn(n)&lt;&lt;endl;
}</code></pre>
      <p class="ne-p" id="u63432e39">
        <span class="ne-text" style="font-size: 16px">
          其具体执行流程如下：
        </span>
      </p>
      <p class="ne-p" id="u963f9910" style="text-align: center">
        <img
          class="ne-image img-60"
          id="ua11d97b9"
          src="../assets/images/1672478925083-fe63180b-cf2f-4d31-ad5a-3f98a8a529fc.png"
        />
      </p>
      <p class="ne-p" id="链接53" style="text-align: center">
        <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 16px">
          图4.3 递归的执行流程
        </span>
      </p>
      <p class="ne-p" id="ued99c1e1" style="text-indent: 2em">
        <span class="ne-text"> 当 </span>
        <code class="ne-code">
          <span class="ne-text"> main </span>
        </code>
        <span class="ne-text"> 函数开始调用 </span>
        <code class="ne-code">
          <span class="ne-text"> factn(4) </span>
        </code>
        <span class="ne-text"> 时，开始递归过程，依次调用 </span>
        <code class="ne-code">
          <span class="ne-text"> factn(3) </span>
        </code>
        <span class="ne-text"> , </span>
        <code class="ne-code">
          <span class="ne-text"> factn(2 </span>
        </code>
        <span class="ne-text"> ), </span>
        <code class="ne-code">
          <span class="ne-text"> factn(1) </span>
        </code>
        <span class="ne-text">
          ，这个过程就是函数的嵌套调用，比较容易理解。最重要的是当执行
        </span>
        <code class="ne-code">
          <span class="ne-text"> factn(1) </span>
        </code>
        <span class="ne-text"> 时，因为满足 </span>
        <code class="ne-code">
          <span class="ne-text"> n==1 </span>
        </code>
        <span class="ne-text"> 的条件，执行 </span>
        <code class="ne-code">
          <span class="ne-text"> return(1) </span>
        </code>
        <span class="ne-text">
          ，递归调用被终止，但是程序并没有结束。它将返回值1传递给调用它的
        </span>
        <code class="ne-code">
          <span class="ne-text"> factn(2) </span>
        </code>
        <span class="ne-text">
          ，并从调用点开始继续向下执行，形成返回值2并传递给它的父函数
        </span>
        <code class="ne-code">
          <span class="ne-text"> factn(3) </span>
        </code>
        <span class="ne-text"> ，以此类推，最终 </span>
        <code class="ne-code">
          <span class="ne-text"> factn(4) </span>
        </code>
        <span class="ne-text"> 将计算结果24返回给 </span>
        <code class="ne-code">
          <span class="ne-text"> main </span>
        </code>
        <span class="ne-text">
          函数，得到期望的结果。总而言之，调用的过程容易被理解，但是初学者往往容易忽视返回的过程。
        </span>
      </p>
      <p class="ne-p" id="u47098a35" style="text-indent: 2em">
        <span class="ne-text">
          从前面的知识可以获知，求阶乘操作是可以用循环进行计算的，递归函数也能完成相同的功能。理论上，循环和递归是可以相互替换的。有时用循环求解相关问题，逻辑上会比较复杂。一旦掌握了递归，思路上就会非常简洁清晰，因为具体的实施过程不需要编程者思考。但是因为函数调用需要代价消耗，其效率有时会比循环低，在一些在线评测题目中，如果对时间效率的要求比较高，可以采用循环代替递归。
        </span>
      </p>
      <h3 id="tZX13">
        <span class="ne-text"> 随堂练习 4.5 </span>
      </h3>
      <p class="ne-p" id="链接68" style="text-indent: 2em">
        <span class="ne-text"> 用递归方法求2的n次幂。 </span>
      </p>
      <h3 id="hLxBT">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            随堂
          </span>
        </strong>
        <span class="ne-text"> 练习 4.6 </span>
      </h3>
      <p class="ne-p" id="udd2b74dd" style="text-indent: 2em">
        <span class="ne-text">
          输入一个字符串，用递归方法逆序输出每个字符。
        </span>
      </p>
      <h3 id="LYn6x">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            随堂
          </span>
        </strong>
        <span class="ne-text"> 练习 4.7 </span>
      </h3>
      <p class="ne-p" id="u2f46deb9" style="text-indent: 2em">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          斐波那契数列（Fibonacci
          sequence），又称黄金分割数列，因数学家莱昂纳多·斐波那契（Leonardo
          Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以递推的方法定义：F(0)=0，F(1)=1,
          F(
        </span>
        <em>
          <span class="ne-text" style="color: rgb(64, 64, 64)"> n </span>
        </em>
        <span class="ne-text" style="color: rgb(64, 64, 64)"> )=F( </span>
        <em>
          <span class="ne-text" style="color: rgb(64, 64, 64)"> n </span>
        </em>
        <span class="ne-text" style="color: rgb(64, 64, 64)"> - 1)+F( </span>
        <em>
          <span class="ne-text" style="color: rgb(64, 64, 64)"> n </span>
        </em>
        <span class="ne-text" style="color: rgb(64, 64, 64)"> - 2)（ </span>
        <em>
          <span class="ne-text" style="color: rgb(64, 64, 64)"> n </span>
        </em>
        <span class="ne-text" style="color: rgb(64, 64, 64)"> ≥ 2， </span>
        <em>
          <span class="ne-text" style="color: rgb(64, 64, 64)"> n </span>
        </em>
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          为正整数）。试用递归方法求解该数列的第
        </span>
        <em>
          <span class="ne-text" style="color: rgb(64, 64, 64)"> n </span>
        </em>
        <span class="ne-text" style="color: rgb(64, 64, 64)"> 项。 </span>
      </p>
      <h3 id="BRLYJ">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T462
        </span>
      </h3>
      <table border="1" class="ne-table" id="HRpgI" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="uf7779a61">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="545">
              <p class="ne-p" id="u30c94b57">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="96">
              <p class="ne-p" id="ub2f89588">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u7e6e4933">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u403dafcf">
                <span class="ne-text"> T462 </span>
              </p>
            </td>
            <td width="545">
              <p class="ne-p" id="u89914b5a">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  掌握递归函数的使用，理解终止条件，理解返回路径的执行。掌握递归书写模板
                </span>
              </p>
            </td>
            <td width="96">
              <p class="ne-p" id="u9b192633">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#TweCk"
                  href="ch3#TweCk"
                >
                  <span class="ne-text"> T332 </span>
                </a>
                <span class="ne-text"> , </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#chBU6"
                  href="ch3#chBU6"
                >
                  <span class="ne-text"> T334 </span>
                </a>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u82983c7d">
                <a class="ne-link" data-href="#EvOZG" href="#EvOZG">
                  <span class="ne-text"> T463 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="697">
              <p class="ne-p" id="u2d85f7f1">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  target="_blank"
                >
                  <span class="ne-text"> 链接 </span>
                </a>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  (LX410)
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="sJft8">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          6.3 分类递归
        </span>
      </h2>
      <p class="ne-p" id="u4090e8a8" style="text-indent: 2em">
        <span class="ne-text">
          对于一些特定的场景，需要先进行分类，然后对每个类别进行递归后汇总。以一个例子展开这个问题：
        </span>
      </p>
      <h3 id="C6hKh">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.12
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="ue6495d44" style="text-indent: 2em">
        <span class="ne-text">
          将m个相同的小球放到n个相同的袋子里，允许空袋，共有多少种放法？1≤m,
          n＜100。允许空袋。（CSP-J2019年真题）
        </span>
      </p>
      <p class="ne-p" id="链接b4">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          【输入格式】
          <br />
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          一行，两个数据m和n，分别表示小球的数量和袋子的数量
          <br />
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          【输出格式】
          <br />
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          一个整数，表示共有多少种放法
        </span>
      </p>
      <table border="1" class="ne-table" id="K7lCN" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u2fa9e45c">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u114a596d">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u0ee4024c">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  8 5
                </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u889a7adc">
                <span class="ne-text"> 18 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="uc5c12f81" style="text-indent: 2em">
        <span class="ne-text">
          在这个问题中，因为允许空袋的存在，很难形成递推公式。但是可以分别考虑1个袋子，2个袋子，多个袋子非空的情况，最后把这些情况汇总到一起，就得到了需要的答案。因此得到主函数如下：
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="sFavn"
      ><span style="font-weight:bold;">代码4.15</span> 主函数
 <code>#include &lt;iostream&gt;
using namespace std;

int place(int m,int n);

int main ()
{
    int m,n;
    cin&gt;&gt;m&gt;&gt;n;
    int sum=0;
    for(int i=1; i&lt;=min(m,n); i++)	//遍历非空袋子的可能性
        sum+=place(m,i);			//对每一种非空袋子数量进行递归求解
    cout&lt;&lt;sum&lt;&lt;endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="u74ac795e">
          <span class="ne-text"> 如果 </span>
          <code class="ne-code">
            <span class="ne-text"> m&lt;n </span>
          </code>
          <span class="ne-text"> ，那么将 </span>
          <code class="ne-code">
            <span class="ne-text"> m </span>
          </code>
          <span class="ne-text"> 个球放到 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 个非空的袋子中是不可能的。因此第11行取 </span>
          <code class="ne-code">
            <span class="ne-text"> m </span>
          </code>
          <span class="ne-text"> 和 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 的最小值。 </span>
          <code class="ne-code">
            <span class="ne-text"> min </span>
          </code>
          <span class="ne-text"> 是 </span>
          <code class="ne-code">
            <span class="ne-text"> std </span>
          </code>
          <span class="ne-text"> 的库函数，可以直接调用，同样 </span>
          <code class="ne-code">
            <span class="ne-text"> std </span>
          </code>
          <span class="ne-text"> 也提供了 </span>
          <code class="ne-code">
            <span class="ne-text"> max </span>
          </code>
          <span class="ne-text"> 函数。 </span>
          <code class="ne-code">
            <span class="ne-text"> place </span>
          </code>
          <span class="ne-text"> 函数计算将 </span>
          <code class="ne-code">
            <span class="ne-text"> m </span>
          </code>
          <span class="ne-text"> 个球放到 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 个非空袋子中的情况。 </span>
        </li>
        <li id="uf681c228">
          <span class="ne-text">
            因为袋子都是完全相同的，因此放法可能存在重复，不失一般性，只考虑非递减序列，即每个袋子中小球数量都大于等于前一个袋子，这样就保证了放法的唯一性。
          </span>
        </li>
        <li id="ud17e4a5f">
          <span class="ne-text"> 考虑三种递归终止条件： </span>
          <code class="ne-code">
            <span class="ne-text"> m&lt;n </span>
          </code>
          <span class="ne-text"> 时，放法为0； </span>
          <code class="ne-code">
            <span class="ne-text"> n=1 </span>
          </code>
          <span class="ne-text"> 或 </span>
          <code class="ne-code">
            <span class="ne-text"> m=n </span>
          </code>
          <span class="ne-text"> 时，只有1种放法 </span>
        </li>
        <li id="ub3007269">
          <span class="ne-text">
            对于递归，分为两种情况进行考虑：1）第一个袋子只放一个小球，这样就需要计算
          </span>
          <code class="ne-code">
            <span class="ne-text"> m-1 </span>
          </code>
          <span class="ne-text"> 个球放到 </span>
          <code class="ne-code">
            <span class="ne-text"> n-1 </span>
          </code>
          <span class="ne-text"> 个袋子中的情况，即 </span>
          <code class="ne-code">
            <span class="ne-text"> place(m-1,n-1) </span>
          </code>
          <span class="ne-text">
            ；2）第一个袋子不止放一个小球，因为是非递减序列，当第一个袋子放入一个小球后，其他袋子也至少放置一个小球，
          </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 个小球已经被放置，因此需要考虑 </span>
          <code class="ne-code">
            <span class="ne-text"> m-n </span>
          </code>
          <span class="ne-text"> 个小球放到 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 个非空袋子中的情况，即 </span>
          <code class="ne-code">
            <span class="ne-text"> place(m-n,n) </span>
          </code>
          <span class="ne-text"> 。 </span>
        </li>
      </ul>
      <p class="ne-p" id="u4ba0c9ed" style="text-indent: 2em">
        <span class="ne-text"> 综上所述，就得到了递归函数 </span>
        <code class="ne-code">
          <span class="ne-text"> place </span>
        </code>
        <span class="ne-text"> 的写法： </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="pHeDo"
      ><span style="font-weight:bold;">代码4.16</span> 递归函数place
 <code>int place(int m,int n)
{
    if(n==1||m==n){ return 1; }
    if(m&lt;n){ return 0; }
    return place(m-1,n-1)+place(m-n,n);
}</code></pre>
      <p class="ne-p" id="ue2e2a0e8" style="text-indent: 2em">
        <span class="ne-text">
          以上方法如果理解比较困难，也可以考虑纵向递归，即逐个考虑每个袋子的情况。每个袋子最少放置小球的数量与前一个袋子相同，最多放置小球的数量不超过
        </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            ⌊
          </span>
          <span class="ne-text"> m/n </span>
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            ⌋
          </span>
        </code>
        <strong>
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            ，
          </span>
        </strong>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            m/n
          </span>
        </code>
        <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
          向下取整。一旦超过了
        </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            ⌊
          </span>
          <span class="ne-text"> m/n </span>
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            ⌋
          </span>
        </code>
        <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
          ，就破坏了序列的非递减性。当
        </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
            n=1
          </span>
        </code>
        <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
          时，因为前面计算保证了序列的非递减性，因此是一定能够放下的。由此得到了一下递归算法：
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="RaIcT"
      ><span style="font-weight:bold;">代码4.17</span> 分类递归
 <code>int place(int m,int n,int start)		//start表示该袋子中最少放置的小球数
{
    if(n==1){ return 1; }
    int sum = 0;
    for(int j=start; j&lt;=m/n; j++)
        sum+=place(m-j,n-1,j);			//下一个带袋子中起始的小球数为当前袋子中的小球数
    return sum;
}

int main ()
{
    int m,n;
    cin&gt;&gt;m&gt;&gt;n;
    int sum=0;
    for(int i=1; i&lt;=min(m,n); i++)		//遍历非空袋子的可能性
        sum+=place(m,i,1);				//第一个袋子从1个小球开始考虑
    cout&lt;&lt;sum&lt;&lt;endl;
    return 0;
}</code></pre>
      <h3 id="EvOZG">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T463
        </span>
      </h3>
      <table border="1" class="ne-table" id="ucG32" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u059ac8e5">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u68cc7ea3">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="ua2d38a6d">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="u6ab84ea8">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u0922e42b">
                <span class="ne-text"> T463 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u40155f05">
                <span class="ne-text">
                  分类递归就是先分类，在不同类别上执行递归，如何划分类别需要仔细思考
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u28bdfbc8">
                <a class="ne-link" data-href="#BRLYJ" href="#BRLYJ">
                  <span class="ne-text"> T462 </span>
                </a>
              </p>
            </td>
            <td width="58">
              <p class="ne-p" id="udf62050a">
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 id="sl1AS">
        <span class="ne-text"> 7. 经典循环问题 </span>
      </h1>
      <h2 id="iQUBP">
        <span class="ne-text"> 7.1 整数分解和倒序重组 </span>
      </h2>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="haU6z"
      ><span style="font-weight:bold;">代码4.18</span> 整数分解和倒序重组
 <code>int reverse(int n)
{
    int ret=0;
    while(n){					//如果n大于0则循环
        ret = ret*10+n%10;		//取出n的各位数，并添加到最终结果ret中
        n/=10;					//n整除10，通过循环不断减少，最终变为0退出循环
    }
    return ret;
}</code></pre>
      <h3 id="cmGwU">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            随堂练习4.8
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="ufa3d7bf7" style="text-indent: 2em">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          若一个数（首位不为零）从左向右读与从右向左读都一样，将其称之为回文数。对于任意的正整数，判断其是否为回文数。
        </span>
      </p>
      <h3 id="P6Anb">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            随堂练习4.9
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="u1f4d4947" style="text-indent: 2em">
        <span class="ne-text">
          给你一个 32 位的有符号整数 x ，返回将 x
          中的数字部分反转后的结果。如果反转后整数超过 32
          位的有符号整数的范围 [−2
        </span>
        <sup>
          <span class="ne-text"> 31 </span>
        </sup>
        <span class="ne-text"> ,  2 </span>
        <sup>
          <span class="ne-text"> 31 </span>
        </sup>
        <span class="ne-text">
          − 1] ，就返回 0。假设环境不允许存储 64 位整数（
        </span>
        <a
          class="ne-link"
          data-href="https://leetcode.cn/problems/reverse-integer"
          href="https://leetcode.cn/problems/reverse-integer"
          target="_blank"
        >
          <span class="ne-text"> 力扣7题 </span>
        </a>
        <span class="ne-text"> ）。 </span>
      </p>
      <div class="ne-quote">
        <p class="ne-p" id="u03fd3cae">
          <span class="ne-text">
            提示：为了防止数据溢出，要进行提前判断，符合要求的才能组合。
          </span>
        </p>
      </div>
      <h3 id="IcjHC">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T471
        </span>
      </h3>
      <table border="1" class="ne-table" id="z2wzf" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u3dcb9cc0">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="531">
              <p class="ne-p" id="ua65c77fd">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="97">
              <p class="ne-p" id="u9ab70529">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="ua20be860">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u47fa5824">
                <span class="ne-text"> T471 </span>
              </p>
            </td>
            <td width="531">
              <p class="ne-p" id="u5a04e725">
                <span class="ne-text">
                  通过循环达成整数分解和倒序重组，实质上就是除10取余法
                </span>
              </p>
            </td>
            <td width="97">
              <p class="ne-p" id="uc15ec092">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#ru7rn"
                  href="ch2#ru7rn"
                >
                  <span class="ne-text"> T225 </span>
                </a>
                <span class="ne-text"> , </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#aQStI"
                  href="ch2#aQStI"
                >
                  <span class="ne-text"> T265 </span>
                </a>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u8f634a63">
                <a class="ne-link" data-href="#FdHGv" href="#FdHGv">
                  <span class="ne-text"> T477 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="684">
              <p class="ne-p" id="u58a348e3">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  target="_blank"
                >
                  <span class="ne-text"> 链接 </span>
                </a>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  (LX407)，
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  target="_blank"
                >
                  <span class="ne-text"> 链接 </span>
                </a>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  (LX408)
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="xTZQ5">
        <span class="ne-text"> 7.2 素数判断 </span>
      </h2>
      <p class="ne-p" id="链接47" style="text-indent: 2em">
        <span class="ne-text">
          解决思路：对于一个整数n，如果在2~n-1范围内都没有因子，则该数为素数。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="jBUq1"
      ><span style="font-weight:bold;">代码4.19</span> 标记法素数判断
 <code>int prime(int n)
{
    bool flag=true;				//定义一个标记变量
    for(int i=2;i&lt;n;++i)
        if(n%i==0){				//如果能整除，则不是素数				
            flag=false;			//修改标记变量
            break;				//有一个整除，则表示n不是素数，退出循环
        }
    return flag;				//必须循环结束之后，才能判定n没有因子
}</code></pre>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="l3ecO"
      ><span style="font-weight:bold;">代码4.20</span> 循环次数法素数判断
 <code>int prime(int n)
{
    int i=2;				//i一定要定义在循环前，因为在循环后要使用
    for(;i&lt;n;++i)			//for的循环变量初始化可以为空，但是;不可省略
        if(n%i==0)			//如果能整除，则不是素数
            break;			//有一个整除，则表示n不是素数，退出循环
    return i==n;			//i与n相等，表示循环正常退出。如果执行了break，则i一定小于n
}</code></pre>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="BzgLC"
      ><span style="font-weight:bold;">代码4.21</span> return法素数判断
 <code>int prime(int n)
{
    for(int i=2;i&lt;n;++i)
        if(n%i==0)				//如果能整除，则不是素数				
            return false;		//有一个整除，则表示n不是素数，退出函数
    return true;				//如果程序能执行到这里，表示n肯定没有因子
}</code></pre>
      <p class="ne-p" id="链接e7" style="text-indent: 2em">
        <span class="ne-text">
          实际上，从数学角度，循环次数可以进一步优化。如果2~n/2范围内没有因子，则n/2~n-1范围内肯定没有因子。更进一步，如果2~
        </span>
        <span class="ne-math" id="JJKLL">
          <img src="../assets/images/dc6cd61c51eb8a988fa147213b0b3fc0.svg" />
        </span>
        <span class="ne-text"> 范围内没有因子，则 </span>
        <span class="ne-math" id="vskFA">
          <img src="../assets/images/dc6cd61c51eb8a988fa147213b0b3fc0.svg" />
        </span>
        <span class="ne-text"> ~n-1范围内肯定因子。 </span>
      </p>
      <h3 id="heMmZ">
        <span class="ne-text"> 例题4.13 </span>
      </h3>
      <p class="ne-p" id="ufb21c75c" style="text-indent: 2em">
        <strong>
          <span class="ne-text"> 证明 </span>
        </strong>
        <span class="ne-text"> ：假定a*b=n，如果b= </span>
        <span class="ne-math" id="RioUo">
          <img src="../assets/images/dc6cd61c51eb8a988fa147213b0b3fc0.svg" />
        </span>
        <span class="ne-text"> 则a一定等于 </span>
        <span class="ne-math" id="nNSh5">
          <img src="../assets/images/dc6cd61c51eb8a988fa147213b0b3fc0.svg" />
        </span>
        <span class="ne-text"> ，如果b&gt; </span>
        <span class="ne-math" id="c7qWX">
          <img src="../assets/images/dc6cd61c51eb8a988fa147213b0b3fc0.svg" />
        </span>
        <span class="ne-text"> 则a一定小于 </span>
        <span class="ne-math" id="w4zQQ">
          <img src="../assets/images/dc6cd61c51eb8a988fa147213b0b3fc0.svg" />
        </span>
        <span class="ne-text"> 。 </span>
      </p>
      <p class="ne-p" id="u918a2d65" style="text-indent: 2em">
        <span class="ne-text">
          因为开方计算的复杂度较高，另一方面开方结果也会产生浮点数，造成不精确比较的问题。因此可以用平方进行代替。素数判断的最优方式如下：
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="HtNmD"
      ><span style="font-weight:bold;">代码4.22</span> 素数判断最优方法
 <code>int prime(int n)
{
    for(int i=2;i*i&lt;=n;++i)		//优化循环次数
        if(n%i==0)				//如果能整除，则不是素数				
            return false;		//有一个整除，则表示n不是素数，退出函数
    return true;				//如果程序能执行到这里，表示n肯定没有因子
}</code></pre>
      <h3 id="Cbfbb">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T472-T473
        </span>
      </h3>
      <table border="1" class="ne-table" id="VS30g" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u8a5a4429">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u7088c114">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u6d89d81b">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="60">
              <p class="ne-p" id="uf58d1a3e">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 40px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="uc10cfcf6">
                <span class="ne-text"> T472 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="链接b4">
                <span class="ne-text">
                  了解素数判断原理，重点掌握解题模板：一种结果在循环中，一种结果在循环后
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="链接2b">
                <a class="ne-link" data-href="#x6ypP" href="#x6ypP">
                  <span class="ne-text"> T451 </span>
                </a>
              </p>
            </td>
            <td width="60">
              <p class="ne-p" id="u32a55d9a">
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="685">
              <p class="ne-p" id="u68028f42">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  target="_blank"
                >
                  <span class="ne-text"> （LX405） </span>
                </a>
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161724"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161724"
                  target="_blank"
                >
                  <span class="ne-text"> （LX412） </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u18e4793d">
                <span class="ne-text"> T473 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u8cbbd084">
                <span class="ne-text">
                  循环次数的优化是循环控制的重中之重
                </span>
              </p>
            </td>
            <td width="65"></td>
            <td width="60">
              <p class="ne-p" id="u96c4382b">
                <a class="ne-link" data-href="#JieQ4" href="#JieQ4">
                  <span class="ne-text"> T475 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#JieQ4" href="#JieQ4">
                  <span class="ne-text"> T478 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="685">
              <p class="ne-p" id="udeb71539">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  target="_blank"
                >
                  <span class="ne-text"> （LX410） </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="qEs8H">
        <span class="ne-text"> 7.3 穷举法 </span>
      </h2>
      <p class="ne-p" id="ucfb11ed4" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          对于多个变量，多个等式进行求解时，通常使用解方程的方法。但是对于计算机而言，解方程是无法接受的。但是计算机的特点就是运算速度快，因此可以用穷举法遍历所有的可能解，从而找到答案。穷举法是计算机求解的基本方法之一，它的基本架构是：
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="LuUlB"
      ><span style="font-weight:bold;"></span>穷举法基本架构
 <code>循环所有的可能解
{
    if(候选解满足题目要求)
    {输出答案}
}</code></pre>
      <h3 id="Aiylm">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.14
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="ue3f47df5" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          用50元钱买了三种水果。各种水果加起来一共100个。西瓜5元一个，苹果1元一个，桔子1元3个，设计一程序输出每种水果各买了几个。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="Djmk5"
      ><span style="font-weight:bold;">代码4.23</span> 穷举法
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    int  melon, apple, orange; //分别表示西瓜数、苹果数和桔子数
    for (melon=0; melon&lt;=10; melon++){ // 对每种可能的西瓜数
        for( apple=0; apple &lt;=50-5*melon; apple++){
            orange = 3*(50-5*melon-apple);  // 剩下的钱全买了桔子
            if (melon+apple+orange == 100)
                cout&lt;&lt;"melon:"&lt;&lt;melon&lt;&lt;",apple:"&lt;&lt;apple&lt;&lt;",orange:"&lt;&lt;orange&lt;&lt;endl;
        }
    }
}</code></pre>
      <table border="1" class="ne-table" id="wQHJt" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ud16181e0">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="ubcb5a0a2">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ueb1cec67">
                <span class="ne-text"> 无 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u65623fa9">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  melon:0,apple:25,orange:75
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  melon:1,apple:18,orange:81
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  melon:2,apple:11,orange:87
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  melon:3,apple:4,orange:93
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="链接35" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          这是一个非常经典的穷举法题目。双重循环，每重循环遍历所有的可能值。西瓜最多有50/5=10个；计算苹果最大可能个数时，排除掉已经购买西瓜的金额；而由于等式约束，桔子的数量直接计算，不需要循环。即完成了穷举，也根据实际情况和数学表达，最大可能的减少遍历的次数。
        </span>
      </p>
      <p class="ne-p" id="ue12c3b5b" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          第9-10行的表达式体现了计算思维，计算机中无法精确表达浮点数，因此这里不用除法，采用扩大倍数达到了相同的目的，避免了除法可能产生的浮点结果。
        </span>
      </p>
      <h3 id="FRxma">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T474
        </span>
      </h3>
      <table border="1" class="ne-table" id="yHMb1" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u5186b757">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="507">
              <p class="ne-p" id="uac617f14">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="121">
              <p class="ne-p" id="u2616fd9d">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u7bd3dbf4">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u1cb4734c">
                <span class="ne-text"> T474 </span>
              </p>
            </td>
            <td width="507">
              <p class="ne-p" id="链接1b">
                <span class="ne-text">
                  穷举法遍历所有可能解，是计算思维的主要特征之一
                </span>
              </p>
            </td>
            <td width="121">
              <p class="ne-p" id="u3d7cc1b1">
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#bNUwd" href="#bNUwd">
                  <span class="ne-text"> T441 </span>
                </a>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="uc06bfb91">
                <br />
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="684">
              <p class="ne-p" id="链接8f">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  target="_blank"
                >
                  <span class="ne-text"> （LX405） </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="Rdlji">
        <span class="ne-text"> 7.4 对称数判断 </span>
      </h2>
      <h3 id="HqrJx">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.15
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="u1b03e4fb" style="text-indent: 2em">
        <span class="ne-text">
          输入一个正整数n，求该数是否为对称数。如果n只有1位，则为对称数，否则要求前后对应位上数值相同。
        </span>
      </p>
      <table border="1" class="ne-table" id="x5yeM" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u77419ff7">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u4179c696">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="uc0cff7fb">
                <span class="ne-text"> 22 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u15ab59ef">
                <span class="ne-text"> true </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ua65712ba">
                <span class="ne-text"> 123 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u795b0d1c">
                <span class="ne-text"> false </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u69fd0d3c" style="text-indent: 2em">
        <span class="ne-text">
          因为涉及到每个数位上值的判断，因此需要进行整数分解。但考虑到字符串中每个字符是自然分解的，因此可以用字符串的方式进行对称判断，简化程序逻辑。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="kJdJo"
      ><span style="font-weight:bold;">代码4.24</span> 简化方法
 <code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
int main(){
    string n;
    cin&gt;&gt;n;
    for(int i=0,j=n.size()-1;i&lt;j;i++,j--){
        if(n[i]!=n[j]){
            cout&lt;&lt;boolalpha&lt;&lt;false&lt;&lt;endl;
            return 0;
        }
    }
    cout&lt;&lt;boolalpha&lt;&lt;true&lt;&lt;endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="u53dc1114">
          <span class="ne-text">
            第7行中采用了两个变量，分别指向字符串的头和尾，然后向中间靠拢。这是典型的多变量循环的写法。
          </span>
        </li>
        <li id="u4d15e1f2">
          <span class="ne-text">
            一个结果在循环中产生，另外一个结果在循环后，这与素数问题的判断逻辑相同。
          </span>
        </li>
      </ul>
      <h3 id="FdHGv">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T475-T477
        </span>
      </h3>
      <table border="1" class="ne-table" id="Ujxbv" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u72953ba8">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="507">
              <p class="ne-p" id="uf8ed00c4">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="122">
              <p class="ne-p" id="ucb83c17e">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="64">
              <p class="ne-p" id="u46ecfe93">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u3dff97e4">
                <span class="ne-text"> T475 </span>
              </p>
            </td>
            <td width="507">
              <p class="ne-p" id="u0b56ed30">
                <span class="ne-text"> 掌握对称判断的方法 </span>
              </p>
            </td>
            <td width="122">
              <p class="ne-p" id="u00791d18">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#iAVWo"
                  href="ch2#iAVWo"
                >
                  <span class="ne-text"> T245 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#Cbfbb" href="#Cbfbb">
                  <span class="ne-text"> T473 </span>
                </a>
              </p>
            </td>
            <td width="64">
              <p class="ne-p" id="u464e20af">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#o8Kxq"
                  href="ch5#o8Kxq"
                >
                  <span class="ne-text"> T524 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u2757d7f9">
                <span class="ne-text"> T476 </span>
              </p>
            </td>
            <td width="507">
              <p class="ne-p" id="u665f3a00">
                <span class="ne-text"> 掌握多变量循环的方法 </span>
              </p>
            </td>
            <td width="122"></td>
            <td width="64">
              <p class="ne-p" id="ud2778ead">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#o8Kxq"
                  href="ch5#o8Kxq"
                >
                  <span class="ne-text"> T524 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="ud48558f4">
                <span class="ne-text"> T477 </span>
              </p>
            </td>
            <td width="507">
              <p class="ne-p" id="ucc9adda6">
                <span class="ne-text">
                  掌握利用字符串达成整数自然分解的方法
                </span>
              </p>
            </td>
            <td width="122">
              <p class="ne-p" id="u3c37cb8b">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#aQStI"
                  href="ch2#aQStI"
                >
                  <span class="ne-text"> T265 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#IcjHC" href="#IcjHC">
                  <span class="ne-text"> T471 </span>
                </a>
              </p>
            </td>
            <td width="64"></td>
          </tr>
        </tbody>
      </table>
      <h2 id="nRPtw">
        <span class="ne-text"> 7.5 二进制中1的个数 </span>
      </h2>
      <h3 id="LZwie">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.16
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="ud7e43e96" style="text-indent: 2em">
        <span class="ne-text">
          输入一个整数，输出该数二进制表示中1的个数。（Leetcode剑指Offer15）
        </span>
      </p>
      <table border="1" class="ne-table" id="rwdrw" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u079d5d0b">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u46770b26">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub6ce1258">
                <span class="ne-text"> 22 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u7525a8a6">
                <span class="ne-text"> 3 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u03d30b18" style="text-indent: 2em">
        <span class="ne-text">
          因为涉及到二进制形式的运算，因此位运算是非常好的方法。以下两种方法分别通过左移位和右移位达到相同的目的。左侧代码第8行通过两次取反将一个非0数转换为1，形成一次简洁的判断。
        </span>
      </p>
      <table border="1" id="Hzt6h" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="En8WI"
              ><span style="font-weight:bold;">代码4.25</span> 左移位
     <code>#include &lt;iostream&gt;
using namespace std;
int main(){
    int n;
    cin&gt;&gt;n;
    int num = 0;
    for(int flag=1;flag&lt;=n;flag&lt;&lt;=1)
        num += !!(n&amp;flag);
    cout&lt;&lt;num&lt;&lt;endl;
    return 0;
}</code></pre>
            </td>
            <td width="375">
              <pre
                class="ne-codeblock language-cpp"
                data-language="cpp"
                id="uJlIU"
              ><span style="font-weight:bold;">代码4.26</span> 右移位
     <code>#include &lt;iostream&gt;
using namespace std;
int main(){
    int n;
    cin&gt;&gt;n;
    int num = 0;
    for(;n&gt;0;n&gt;&gt;=1)
        num += n&amp;1;
    cout&lt;&lt;num&lt;&lt;endl;
    return 0;
}</code></pre>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u82b7f3ec" style="text-indent: 2em">
        <span class="ne-text">
          以上方法无论对应位置上是1/0，都要进行一次判定，当位数较多时，会增加循环次数。可以用数学方法简化这个过程。2
        </span>
        <sup>
          <span class="ne-text"> m </span>
        </sup>
        <span class="ne-text"> 和2 </span>
        <sup>
          <span class="ne-text"> m </span>
        </sup>
        <span class="ne-text">
          -1进行位与操作，结果一定为0；而且n和n-1只在n的二进制形式中最右侧一个1向右的部分不同，因此形成了以下方法，每次消除n中最右侧的一个1。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="KcBb0"
      ><span style="font-weight:bold;">代码4.27</span> 简化方法
 <code>#include &lt;iostream&gt;
using namespace std;
int main(){
    int n;
    cin&gt;&gt;n;
    int num = 0;
    for(;n&gt;0;n&amp;=n-1)
        ++num;
    cout&lt;&lt;num&lt;&lt;endl;
    return 0;
}</code></pre>
      <p class="ne-p" id="u81de9069" style="text-indent: 2em">
        <span class="ne-text">
          以22=0b10110为例，22&amp;21=0b10110&amp;0b10101=0b10100=20，消除了0b10110中最右侧的1；然后20&amp;19=0b10100&amp;0b10011=0b10000=16再次消除最右侧的1，最后16&amp;15=0b10000&amp;0b1111=0。从这个过程中可以看到，n的二进制形式中有几个1，循环就会执行几次。
        </span>
      </p>
      <h3 id="JieQ4">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T478
        </span>
      </h3>
      <table border="1" class="ne-table" id="re1ez" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="链接ff">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="523">
              <p class="ne-p" id="ucf1f99bd">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="104">
              <p class="ne-p" id="ua770db51">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u21b2ee7e">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u1a95f0c1">
                <span class="ne-text"> T478 </span>
              </p>
            </td>
            <td width="523">
              <p class="ne-p" id="ua49e9bcf">
                <span class="ne-text">
                  掌握循环与位运算的结合，理解二进制的处理方法
                </span>
              </p>
            </td>
            <td width="104">
              <p class="ne-p" id="uab9876ae">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#fzLrK"
                  href="ch2#fzLrK"
                >
                  <span class="ne-text"> T26A </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#Cbfbb" href="#Cbfbb">
                  <span class="ne-text"> T473 </span>
                </a>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="ue4c10673">
                <a class="ne-link" data-href="#G4CX6" href="#G4CX6">
                  <span class="ne-text"> T479 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="683">
              <p class="ne-p" id="u08c68211">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  target="_blank"
                >
                  <span class="ne-text"> (LX410) </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="HZj4k">
        <span class="ne-text"> 7.6 乘法的加法实现* </span>
      </h2>
      <p class="ne-p" id="u577d18bf" style="text-indent: 2em">
        <span class="ne-text">
          计算机中只有加法器，减法是通过补码实现的，而乘法和除法是通过反复调用加法器实现的，下面以乘法为例给出其实现方式。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="RcX2e"
      ><span style="font-weight:bold;">代码4.28</span> 乘法的实现方式
 <code>#include&lt;iostream&gt;
using namespace std;

int multi(int x, int y) {
    int result = 0;
    while (y) {
        if (y &amp; 1)
            result += x;
        x &lt;&lt;= 1;
        y &gt;&gt;= 1;
    }
    return result;
}
int main (){
    cout&lt;&lt;multi(3,11)&lt;&lt;endl;
}</code></pre>
      <table border="1" class="ne-table" id="ypc9T" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ufb03d22b">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u4bea87fd">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u5e954d49">
                <span class="ne-text"> 无 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uf4550b2e">
                <span class="ne-text"> 33 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="ne-ul">
        <li id="ufca7d770">
          <span class="ne-text"> 为了简化运算过程，这里假定 </span>
          <code class="ne-code">
            <span class="ne-text"> x </span>
          </code>
          <span class="ne-text"> 和 </span>
          <code class="ne-code">
            <span class="ne-text"> y </span>
          </code>
          <span class="ne-text"> 大于0。 </span>
        </li>
        <li id="uc820a192">
          <span class="ne-text">
            3*11可以分解为3*1+3*2+3*8，即3&lt;&lt;0+3&lt;&lt;1+3&lt;&lt;3，第10行计算被乘数3移动相应位数后的值，第10行循环将每一位都变成个位，第7-8行判断如果个位上为1，就累加到最后的结果中。从而用加法实现了乘法操作。
          </span>
        </li>
      </ul>
      <h3 id="pTcgl">
        <span class="ne-text"> 例题4.17 </span>
      </h3>
      <p class="ne-p" id="uada80d55" style="text-indent: 2em">
        <span class="ne-text"> 用上述类似方法实现幂函数 </span>
        <span class="ne-math" id="fZiqV">
          <img src="../assets/images/5ec7331fcc32851de4a2c77b64536386.svg" />
        </span>
        <span class="ne-text"> 。 </span>
      </p>
      <p class="ne-p" id="ude427a5a" style="text-indent: 2em">
        <span class="ne-text"> 幂函数 </span>
        <code class="ne-code">
          <span class="ne-text"> x </span>
          <sup>
            <span class="ne-text"> n </span>
          </sup>
        </code>
        <span class="ne-text">
          是一个用途非常广泛的函数，其实现方式与上面代码中用加法器实现乘法的方式类型。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="tY9kI"
      ><span style="font-weight:bold;">代码4.29</span> 实现x^n计算
 <code>double pow(double x, int n) {
    double result = 1;
    int minus = 1;

    if (n &lt; 0) {
        minus = -1;
        n = -n;
    }

    if (0 == n) {
        return 1;
    } else if (0 == x) {
        return 0;
    }

    while (n) {
        if (n &amp; 1) 
            result *= x;
        x *= x;
        n &gt;&gt;= 1;
    }

    return minus&lt;0?1.0/result:result;
}</code></pre>
      <ul class="ne-ul">
        <li id="udf37cdcd">
          <span class="ne-text"> 第2-3行进行初始化工作 </span>
        </li>
        <li id="u49f575eb">
          <span class="ne-text"> 第5-8,23行对n为负数进行了特殊的处理 </span>
        </li>
        <li id="u688fca5f">
          <span class="ne-text"> 第10-14行对n和x的特殊值进行了处理 </span>
        </li>
        <li id="u9542ed8f">
          <span class="ne-text"> 第16-21行的实现理解有一定难度。以3 </span>
          <sup>
            <span class="ne-text"> 11 </span>
          </sup>
          <span class="ne-text"> 为例，3 </span>
          <sup>
            <span class="ne-text"> 11 </span>
          </sup>
          <span class="ne-text"> =3 </span>
          <sup>
            <span class="ne-text"> 8 </span>
          </sup>
          <span class="ne-text"> *3 </span>
          <sup>
            <span class="ne-text"> 2 </span>
          </sup>
          <span class="ne-text"> *3 </span>
          <sup>
            <span class="ne-text"> 1 </span>
          </sup>
          <span class="ne-text">
            ，这样就比较好理解了。第19行循环计算每位的权重，第17行如果n的个位为1，表示对应的权重有效，在第18行中将其累乘到结果中，每次计算后n向右移动一位。
          </span>
        </li>
      </ul>
      <h3 id="G4CX6">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T479
        </span>
      </h3>
      <table border="1" class="ne-table" id="x0pMm" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="ub7d33d68">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="525">
              <p class="ne-p" id="u04b26be1">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="101">
              <p class="ne-p" id="ue26cd01b">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="uaca31f6f">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u5c27ac06">
                <span class="ne-text"> T479 </span>
              </p>
            </td>
            <td width="525">
              <p class="ne-p" id="u640e6b97">
                <span class="ne-text">
                  以加法实现乘法，以乘法实现幂运算，发挥位运算的计算效率优势
                </span>
              </p>
            </td>
            <td width="101">
              <p class="ne-p" id="u13580a0a">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#fzLrK"
                  href="ch2#fzLrK"
                >
                  <span class="ne-text"> T26A </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#JieQ4" href="#JieQ4">
                  <span class="ne-text"> T478 </span>
                </a>
              </p>
            </td>
            <td width="56"></td>
          </tr>
        </tbody>
      </table>
      <h1 id="XIOqM">
        <span class="ne-text"> 8. 循环与输入 </span>
      </h1>
      <h2 id="kqkLd">
        <span class="ne-text"> 8.1 输入重定向 </span>
      </h2>
      <p class="ne-p" id="u3a3cf17a" style="text-indent: 2em">
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> cin </span>
        </code>
        <span class="ne-text" style="font-size: 16px"> 从标准输入 </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
            stdin
          </span>
        </code>
        <span class="ne-text" style="font-size: 16px"> 中读取数据， </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> cout </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          将结果写入标准输出
        </span>
        <code class="ne-code">
          <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
            stdout
          </span>
        </code>
        <span class="ne-text" style="font-size: 16px"> 进行显示。 </span>
        <code class="ne-code">
          <span class="ne-text"> cin </span>
        </code>
        <span class="ne-text"> 与 </span>
        <code class="ne-code">
          <span class="ne-text"> stdin </span>
        </code>
        <span class="ne-text">
          总是保持同步的，也就是说这两种方法可以混用，而不必担心文件指针混乱，同时
        </span>
        <code class="ne-code">
          <span class="ne-text"> cout </span>
        </code>
        <span class="ne-text"> 和 </span>
        <code class="ne-code">
          <span class="ne-text"> stdout </span>
        </code>
        <span class="ne-text">
          也一样，两者混用不会输出顺序错乱。正因为这个兼容性的特性，导致
        </span>
        <code class="ne-code">
          <span class="ne-text"> cin </span>
        </code>
        <span class="ne-text">
          有许多额外的开销。解决方法是在所有cin之前添加一条控制语句
        </span>
        <code class="ne-code">
          <span class="ne-text"> cin.sync_with_stdio(false); </span>
        </code>
        <span class="ne-text"> ，解除 </span>
        <code class="ne-code">
          <span class="ne-text"> cin </span>
        </code>
        <span class="ne-text"> 与 </span>
        <code class="ne-code">
          <span class="ne-text"> stdin </span>
        </code>
        <span class="ne-text">
          的同步，这样读取速度将会极大加快，对于大批量数据读入的问题，可以解决运行超时错误。
        </span>
      </p>
      <p class="ne-p" id="u54771cbc" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          此外，因为循环可以大批量处理数据。如果测试样例的数据比较多，在进行测试的时候会非常不方便，可以通过
        </span>
        <code class="ne-code">
          <span class="ne-text"> freopen("文件名","r",stdin); </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          的方式，将输入进行重定位，不再从
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> stdin </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          中读取数据，而是要求程序从指定文件读取数据。但将代码提交到在线测试平台前，要将
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> freopen </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          语句注释掉，否则在线测试平台是找不到用户指定的问题就的。初学者在使用
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> freopen </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          时，提交时经常忘记注释，从而产生莫名其妙的问题。进一步可以采用
        </span>
        <code class="ne-code">
          <span
            class="ne-text"
            style="
              color: rgb(64, 64, 64);
              background-color: rgb(246, 247, 249);
              font-size: 14px;
            "
          >
            ONLINE_JUDGE
          </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          宏的判断，解决这个问题。
        </span>
      </p>
      <p class="ne-p" id="ub3f08c18">
        <span class="ne-text" style="font-size: 16px">
          具体解决步骤如下：
        </span>
      </p>
      <p class="ne-p" id="u59440ae2">
        <span class="ne-text" style="font-size: 16px">
          1）在与源代码相同的目录下，新建一个文本文件，例如data.txt。如果使用CodeBlocks，可以选择File-&gt;New-&gt;Empty
          File菜单，在弹出的文件保存框中，输入一个自定义的文件名，例如data.txt，然后点击save按钮，然后点击ok，在左侧的文件管理窗口中，就会出现data.txt文件。
        </span>
      </p>
      <p class="ne-p" id="ub90d4058">
        <span class="ne-text" style="font-size: 16px">
          2）双击打开这个文件，粘贴上程序需要输入的数据，例如：
        </span>
      </p>
      <table border="1" class="ne-table" id="JrGoO" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u743ec229">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uf014477f">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ubd111a00">
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  3
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  1 2 3
                </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="uf44d3b81">
                <span class="ne-text"> 6 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="u215daea1">
        <span class="ne-text" style="font-size: 16px">
          3）仿照以下代码书写程序
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="GHwRi"
      ><span style="font-weight:bold;">代码4.30</span> 输入重定向
 <code>#include&lt;iostream&gt;
using namespace std;

int main (  )
{
    cin.sync_with_stdio(false);	//cin和stdin解除同步，在输入数据量比较小时不需要
#ifndef ONLINE_JUDGE
    freopen("data.txt","r",stdin);
#endif // ONLINE_JUDGE
    int sum=0;
    int n;
    cin&gt;&gt;n;
    for(int i=0; i&lt;n; ++i)
    {
        int num;
        cin&gt;&gt;num;
        sum += num;
    }
    cout&lt;&lt;sum&lt;&lt;endl;
}</code></pre>
      <ul class="ne-ul">
        <li id="u587a8a5f">
          <span class="ne-text" style="font-size: 16px"> 第8行的 </span>
          <code class="ne-code">
            <span class="ne-text" style="font-size: 16px"> freopen </span>
          </code>
          <span class="ne-text" style="font-size: 16px"> 用 </span>
          <code class="ne-code">
            <span class="ne-text" style="font-size: 16px"> data.txt </span>
          </code>
          <span class="ne-text" style="font-size: 16px"> 文件代替 </span>
          <code class="ne-code">
            <span class="ne-text" style="font-size: 16px"> stdin </span>
          </code>
          <span class="ne-text" style="font-size: 16px">
            进行数据输入传递给
          </span>
          <code class="ne-code">
            <span class="ne-text" style="font-size: 16px"> cin </span>
          </code>
          <span class="ne-text" style="font-size: 16px"> 。其中 </span>
          <code class="ne-code">
            <span class="ne-text"> data.txt </span>
          </code>
          <span class="ne-text">
            表示文件名，这里使用了相对路径，即输入数据文件和源代码文件在相同的目录下。
          </span>
          <code class="ne-code">
            <span class="ne-text"> r </span>
          </code>
          <span class="ne-text"> 表示“读”， </span>
          <code class="ne-code">
            <span class="ne-text"> stdin </span>
          </code>
          <span class="ne-text"> 表示标准输入。 </span>
        </li>
        <li id="udd11ad9f">
          <span class="ne-text"> 第7行的 </span>
          <code class="ne-code">
            <span class="ne-text"> ifndef </span>
          </code>
          <span class="ne-text"> 中 </span>
          <code class="ne-code">
            <span class="ne-text"> n </span>
          </code>
          <span class="ne-text"> 表示not， </span>
          <code class="ne-code">
            <span class="ne-text"> def </span>
          </code>
          <span class="ne-text"> 表示define，因此 </span>
          <code class="ne-code">
            <span class="ne-text"> ifndef </span>
          </code>
          <span class="ne-text"> 表示如果没有定义。第9行的 </span>
          <code class="ne-code">
            <span class="ne-text"> endif </span>
          </code>
          <span class="ne-text"> 与 </span>
          <code class="ne-code">
            <span class="ne-text"> ifndef </span>
          </code>
          <span class="ne-text">
            相对应，构成一个宏定义块。整体来说，如果程序预先没有定义宏
          </span>
          <code class="ne-code">
            <span class="ne-text"> ONLINE_JUDGE </span>
          </code>
          <span class="ne-text"> ，则第8行被编译，否则第8行将会被忽略。 </span>
        </li>
        <li id="uc8359f5e">
          <span class="ne-text"> 所有的宏都是以 </span>
          <code class="ne-code">
            <span class="ne-text"> # </span>
          </code>
          <span class="ne-text"> 开头，末尾不加 </span>
          <code class="ne-code">
            <span class="ne-text"> ; </span>
          </code>
          <span class="ne-text"> ，因为宏不是语句。由此推导， </span>
          <code class="ne-code">
            <span class="ne-text"> #include </span>
          </code>
          <span class="ne-text">
            也是宏，表示将对应的库文件的内容在此位置展开。
          </span>
        </li>
        <li id="ueb11b96d">
          <span class="ne-text"> 正常来说，在用户电脑上一般都没有定义 </span>
          <code class="ne-code">
            <span class="ne-text"> ONLINE_JUDGE </span>
          </code>
          <span class="ne-text"> 宏，但是所有的在线评测系统上都定义了宏 </span>
          <code class="ne-code">
            <span class="ne-text"> ONLINE_JUDGE </span>
          </code>
          <span class="ne-text">
            。因此在本机运行时，第8行将会被编译执行，但是提交到在线评测系统上，第8行语句将会被自动忽略。这就自动解决了用户再向在线评测系统提交时，忘记注释
          </span>
          <code class="ne-code">
            <span class="ne-text"> freopen </span>
          </code>
          <span class="ne-text"> 语句的尴尬。 </span>
        </li>
      </ul>
      <h3 id="KiWcv">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T481
        </span>
      </h3>
      <table border="1" class="ne-table" id="sNpp3" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="u475dc5f0">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u25d563d8">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="ua84aac49">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="uef8385ff">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="58">
              <p class="ne-p" id="u8ce4cc22">
                <span class="ne-text"> T481 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u1d57ab76">
                <span class="ne-text">
                  掌握输入重定向的方法，了解如何用输入重定向解决大数据量输入的问题，特别注意当输入数据量比较大时，需要用cin.sync_with_stdio(false);解除同步，防超时
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u99e95162">
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u1e048527">
                <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="qvz17">
        <span class="ne-text"> 8.2 数量不确定输入 </span>
      </h2>
      <p class="ne-p" id="uc55d4812" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          在线评测中，有一类题目并没有告知用户输入的确定数量，例如每行输入两个整数，但是没有告诉共有多少行。
        </span>
      </p>
      <p class="ne-p" id="uad5db369" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          实际上，在线评测系统中，所有的输入数据都是以文件形式存在的，如9.4节所示，使用了文件重定向功能，把特定的文件作为输入，代替了
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> stdin </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          。这样才有了以上类型题目的产生。对于这样的题目，可以通过
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> cin </span>
        </code>
        <span class="ne-text" style="font-size: 16px"> 不断读取，当 </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> cin </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          能正确读取数据时，返回
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> true </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          ；当读取到文件尾，会遇到一个特殊的文件结束符
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> EOF </span>
        </code>
        <span class="ne-text" style="font-size: 16px"> ，这时 </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> cin </span>
        </code>
        <span class="ne-text" style="font-size: 16px"> 返回 </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 16px"> false </span>
        </code>
        <span class="ne-text" style="font-size: 16px">
          ，表示读取的结束。
        </span>
      </p>
      <h3 id="GCQOx">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.18
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="u6bc49774" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 16px">
          有多行数据，每行有两个整数，输出每行两个整数的和。
        </span>
      </p>
      <table border="1" class="ne-table" id="WiGSs" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub6434e7e">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u899b8650">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ufa199503">
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  3 5
                  <br />
                </span>
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  7 9
                  <br />
                </span>
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  12 8
                </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="ua2d878a5">
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  8
                  <br />
                </span>
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  16
                  <br />
                </span>
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  20
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="C5uqA"
      ><span style="font-weight:bold;">代码4.31</span> 不确定数据的输入
 <code>#include&lt;iostream&gt;
using namespace std;
int main (  )
{
#ifndef ONLINE_JUDGE
    freopen("data.txt","r",stdin);
#endif // ONLINE_JUDGE
    int a,b;
    while(cin&gt;&gt;a&gt;&gt;b){
        cout&lt;&lt;a+b&lt;&lt;endl;
    }
}</code></pre>
      <ul class="ne-ul">
        <li id="ud44e122b">
          <span class="ne-text">
            如果没有第5~7行，也就是说没有使用文件重定向，而是用户通过键盘进行标准输入。那么在最后一行时，Windows用户需要输入
          </span>
          <code class="ne-code">
            <span class="ne-text"> Ctrl+z </span>
          </code>
          <span class="ne-text"> ，然后回车，这样也会产生一个结束符号； </span>
          <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
            在 UNIX/Linux/Mac OS 系统中，
          </span>
          <code class="ne-code">
            <span
              class="ne-text"
              style="color: rgb(68, 68, 68); font-size: 14px"
            >
              Ctrl+d
            </span>
          </code>
          <span class="ne-text" style="color: rgb(68, 68, 68); font-size: 14px">
            代表输入结束。否则以上程序会一直运行下去。
          </span>
        </li>
      </ul>
      <p class="ne-p" id="uf03e558d">
        <span class="ne-text"> 对于数据的输入，有三种方法： </span>
      </p>
      <p class="ne-p" id="ubc8f63f4">
        <span class="ne-text">
          1）给定循环的次数n，用for或while(n--)方式进行输入；
        </span>
      </p>
      <p class="ne-p" id="u8379d3f2">
        <span class="ne-text">
          2）不确定输入数量，用while+break的方式，用特殊值终止输入；(知识点：
        </span>
        <a class="ne-link" data-href="#x6ypP" href="#x6ypP">
          <span class="ne-text"> T451 </span>
        </a>
        <span class="ne-text"> ) </span>
      </p>
      <p class="ne-p" id="uaedbdf12">
        <span class="ne-text"> 3）不确定输入数量，利用OJ系统中， </span>
        <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 16px">
          文件结束符
        </span>
        <span class="ne-text"> 的方式终止输入。 </span>
      </p>
      <h3 id="rMmNI">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T482
        </span>
      </h3>
      <table border="1" class="ne-table" id="GLY2b" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="uae0c0636">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u55a18f58">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="ue1f70368">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u186e30c5">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u32be45f2">
                <span class="ne-text"> T482 </span>
              </p>
            </td>
            <td width="560">
              <p class="ne-p" id="u032efd95">
                <span
                  class="ne-text"
                  style="color: rgb(38, 38, 38); font-size: 16px"
                >
                  掌握数量不确定输入问题的解决方法，了解文件结束符发挥的作用
                </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u8a260c20">
                <br />
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="ud2d61618">
                <a class="ne-link" data-href="#FpCPw" href="#FpCPw">
                  <span class="ne-text"> T483 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="681">
              <p class="ne-p" id="u887c24f4">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161723"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161723"
                  target="_blank"
                >
                  <span class="ne-text"> (LX411) </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 id="Gas8T">
        <span class="ne-text"> 8.3 多级数量不确定输入 </span>
      </h2>
      <p class="ne-p" id="ubc22c48c" style="text-indent: 2em">
        <span class="ne-text" style="font-size: 14px">
          因为空格和回车都是空白符，都可以作为
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 14px"> cin </span>
        </code>
        <span class="ne-text" style="font-size: 14px">
          的分割符，所以每行的数据量不确定时，不能一体化输入，要区分为两个层次：行和行内数据。可以用
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 14px"> getline </span>
        </code>
        <span class="ne-text" style="font-size: 14px">
          将输入分割为多行，但对字符串内的数据进行分割时，依旧非常复杂。建议采用
        </span>
        <code class="ne-code">
          <span class="ne-text" style="font-size: 14px"> istringstream </span>
        </code>
        <span class="ne-text" style="font-size: 14px">
          将字符串转换为流，采用流的方式将数据进行自然分割，极大地降低了处理的复杂性。
        </span>
      </p>
      <h3 id="LEilE">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.19
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="u48f32776" style="text-align: left; text-indent: 2em">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          现在为若干组整数分别计算平均值。已知这些整数的绝对值都小于100，每组整数的数量不少于1个，不大于20个。
        </span>
      </p>
      <p class="ne-p" id="链接12" style="text-align: left">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          【输入格式】
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          <br />
        </span>
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          每一行输入一组数据（至少有一组数据），两个数据之间有1到3个空格。
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          <br />
        </span>
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          【输出格式】
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          <br />
        </span>
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          对于每一组数据，输出数据均值。输出的均值只输出整数部分，直接忽略小数部分。
        </span>
      </p>
      <table border="1" class="ne-table" id="BVi65" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub4683cac">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u70eb491a">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u9bdef099">
                <span class="ne-text" style="color: rgb(64, 64, 64)">
                  10 30 20 40
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(64, 64, 64)">
                  -10 17 10
                </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(64, 64, 64)">
                  10 9
                </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u3081d9b5">
                <span class="ne-text" style="color: rgb(64, 64, 64)"> 25 </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(64, 64, 64)"> 5 </span>
                <span class="ne-text" style="color: rgb(38, 38, 38)">
                  <br />
                </span>
                <span class="ne-text" style="color: rgb(64, 64, 64)"> 9 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="pvzfo"
      ><span style="font-weight:bold;">代码4.32</span> 多级数量不确定输入
 <code>#include &lt;iostream&gt;
#include &lt;string.h&gt;
#include&lt;sstream&gt;
using namespace std;
int main() {
	string line;
	while(getline(cin,line)){
	    istringstream iss(line);
        int i=0,num,sum=0;
        for(;iss&gt;&gt;num;++i)
            sum+=num;
        cout&lt;&lt;sum/i&lt;&lt;endl;
	}
}</code></pre>
      <h3 id="FpCPw">
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          知识点：T483-T484
        </span>
      </h3>
      <table border="1" class="ne-table" id="ZhdAw" style="width: 100%">
        <tbody>
          <tr class="table-header">
            <td width="58">
              <p class="ne-p" id="链接57">
                <span class="ne-text"> 索引 </span>
              </p>
            </td>
            <td width="525">
              <p class="ne-p" id="u1b48dd0c">
                <span class="ne-text"> 要点 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u053efb6c">
                <span class="ne-text"> 正链 </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="链接58">
                <span class="ne-text"> 反链 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="ub6a589d6">
                <span class="ne-text"> T483 </span>
              </p>
            </td>
            <td width="525">
              <p class="ne-p" id="u3cbb063d">
                <span class="ne-text"> 掌握多级数量不确定输入的方法 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="u3a0b69ce">
                <a class="ne-link" data-href="#rMmNI" href="#rMmNI">
                  <span class="ne-text"> T482 </span>
                </a>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u7ceae5dd">
                <span class="ne-text"> </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="679">
              <p class="ne-p" id="u99510aae">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161726"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161726"
                  target="_blank"
                >
                  <span class="ne-text"> (LX414) </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td rowspan="2" width="58">
              <p class="ne-p" id="u3822d5e9">
                <span class="ne-text"> T484 </span>
              </p>
            </td>
            <td width="525">
              <p class="ne-p" id="ue79e542a">
                <span class="ne-text"> 掌握用流的方式分解字符串 </span>
              </p>
            </td>
            <td width="56">
              <p class="ne-p" id="链接0e">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#ri2d9"
                  href="ch2#ri2d9"
                >
                  <span class="ne-text"> T271 </span>
                </a>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u9b21416a">
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#AhO5J"
                  href="ch5#AhO5J"
                >
                  <span class="ne-text"> T543 </span>
                </a>
                <span class="ne-text" style="color: rgb(38, 38, 38)"> , </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#CUEPT"
                  href="ch5#CUEPT"
                >
                  <span class="ne-text"> T546 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td colspan="3" width="679">
              <p class="ne-p" id="ue8cc3283">
                
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161726"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161726"
                  target="_blank"
                >
                  <span class="ne-text"> (LX414) </span>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 id="tZXmj">
        <span class="ne-text"> 9. 程序优化案例 </span>
      </h1>
      <p class="ne-p" id="u745fa007" style="text-indent: 2em">
        <span class="ne-text">
          本节对一个例题，从循环优化和代码书写等多个不同的角度，对程序进行优化。一方面通过程序优化提高程序的执行效率，另一方面对一个问题进行多角度思考，可以深入理解并将知识融为一体。
        </span>
      </p>
      <h3 id="XcNZe">
        <strong>
          <span class="ne-text" style="color: rgb(38, 38, 38); font-size: 19px">
            例题4.20
          </span>
        </strong>
      </h3>
      <p class="ne-p" id="u86de3bb0" style="text-align: left; text-indent: 2em">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          计算l,l+1,l+2,...r的异或和，即l^(l+1)^(l+2)...^r。
        </span>
      </p>
      <p class="ne-p" id="ud72b732f" style="text-align: left">
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          【输入格式】
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          <br />
        </span>
        <span class="ne-text">
          输入包括两个整数l和r，空格分隔，1≤l&lt;r≤10
        </span>
        <sup>
          <span class="ne-text"> 18 </span>
        </sup>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          <br />
        </span>
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          【输出格式】
        </span>
        <span class="ne-text" style="color: rgb(38, 38, 38)">
          <br />
        </span>
        <span class="ne-text" style="color: rgb(64, 64, 64)">
          输出题目描述中的异或和
        </span>
      </p>
      <table border="1" class="ne-table" id="VzGbH" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="ub33c3d3f">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输入
                  </span>
                </strong>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u31c36482">
                <strong>
                  <span class="ne-text" style="color: rgb(38, 38, 38)">
                    样例输出
                  </span>
                </strong>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="375">
              <p class="ne-p" id="u073e38e6">
                <span class="ne-text"> 3 6 </span>
              </p>
            </td>
            <td width="375">
              <p class="ne-p" id="u97fc7150">
                <span class="ne-text"> 4 </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="ne-p" id="ub975c6cd" style="text-indent: 2em">
        <span class="ne-text">
          这是一道非常简单的题目，将求和中的加法运算改成异或运算，就能得到结果。注意给定的数值范围，数据类型应该定义为long
          long。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="KR6v8"
      ><span style="font-weight:bold;">代码4.33</span> 基础解法
 <code>#include&lt;iostream&gt;
using namespace std;

int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    for(long long i=n1;i&lt;=n2;i++)
        sum ^= i;
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <p class="ne-p" id="u0430f4f1" style="text-indent: 2em">
        <span class="ne-text">
          如果给定范围比较小，以上代码能够完成题目需求。但是题目给定的数值范围为1018，循环次数过多，在线评测系统中将会引发运行超时。
        </span>
      </p>
      <p class="ne-p" id="u6669c99b" style="text-indent: 2em">
        <span class="ne-text">
          考虑异或操作的特点可以获知，任何偶数n和n+1异或将会得到1，而1^1为0，进一步得到任意偶数n和n+1,
          n+2,
          n+3的异或结果为0。也就是说，从任意一个偶数开始连续4个整数的异或结果为0，对于连续数值的异或和计算，绝大部分的计算都是毫无意义的耗时。因此可以寻找4的倍数，只对两端多出来的部分进行异或操作即可。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="YYWi8"
      ><span style="font-weight:bold;">代码4.34</span> 利用4的倍数
 <code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    long long a = 4 - n1%4,b = n2 %4;
    for (long long int i = n1; i &lt; n1 + a; i++)
        sum = i ^ sum;		//对于头部多出来的部分进行异或
    for (long long int i = n2 - b; i &lt;= n2; i++)
        sum = i ^ sum;		//对于尾部多出来的部分进行异或
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="u3b90bcde">
          <span class="ne-text">
            以上程序寻找头尾两端4的倍数，第7行中的a表示到头部第一个4的倍数的距离，b表示尾部到最后一个4的倍数的距离。
          </span>
        </li>
        <li id="uf2a74c09">
          <span class="ne-text">
            第8行循环时不包括第一个4的倍数，最多循环3次；第10行循环时包括尾部最后一个4的倍数，最多循环4次。但是如果是循环次数为4时，实际尾部的计算结果为0，第2个循环没有意义。
          </span>
        </li>
        <li id="u5eb49077">
          <span class="ne-text"> 如果 </span>
          <code class="ne-code">
            <span class="ne-text"> n1 </span>
          </code>
          <span class="ne-text"> 等于 </span>
          <code class="ne-code">
            <span class="ne-text"> n2 </span>
          </code>
          <span class="ne-text">
            ，以上程序依旧会循环5次，其中的4次为4的倍数开始的连续4个数，没有意义，最终结果会与
          </span>
          <code class="ne-code">
            <span class="ne-text"> n1 </span>
          </code>
          <span class="ne-text"> 和 </span>
          <code class="ne-code">
            <span class="ne-text"> n2 </span>
          </code>
          <span class="ne-text">
            相等。这是因为4的倍数具有周期性而形成的结果。
          </span>
        </li>
      </ul>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="FgwSf"
      ><span style="font-weight:bold;">代码4.35</span> while优化
 <code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    while (n1&lt;=n2 &amp;&amp; n1&amp;3)		//n1&amp;0b11或n1%4
        sum ^= n1++;
    while(n1&lt;=n2 &amp;&amp; (n2+1)&amp;3)	//(n2+1)&amp;0b11或(n2+1)%4
        sum ^=n2--;
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="udd0e6d76">
          <span class="ne-text"> 第7, 9行中的 </span>
          <code class="ne-code">
            <span class="ne-text"> &amp;3 </span>
          </code>
          <span class="ne-text">
            操作与对4取余等价，因为3的二进制为0b11，进行“位与”操作，相当于取二进制中的最后两位，也就是对4取余的结果。
          </span>
        </li>
        <li id="uf1eacb37">
          <span class="ne-text">
            第7-8行的循环也是对第一个4的倍数前的部分进行异或操作，但是因为有
          </span>
          <code class="ne-code">
            <span class="ne-text"> n1&lt;=n2 </span>
          </code>
          <span class="ne-text"> 判断，即使 </span>
          <code class="ne-code">
            <span class="ne-text"> n1 </span>
          </code>
          <span class="ne-text"> 与 </span>
          <code class="ne-code">
            <span class="ne-text"> n2 </span>
          </code>
          <span class="ne-text"> 相等，也不会产生额外操作。 </span>
        </li>
        <li id="ub286dd91">
          <span class="ne-text">
            第9-10行的循环也是从最后一个4的倍数开始向后进行运算，巧妙的使用了
          </span>
          <code class="ne-code">
            <span class="ne-text"> n2+1 </span>
          </code>
          <span class="ne-text">
            操作，这样即包含了最后一个4的倍数，但循环次数最多为3次。
          </span>
        </li>
      </ul>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="yzXn3"
      ><span style="font-weight:bold;">代码4.36</span> 计数while
 <code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    if (n1&amp;1)					//n1&amp;0b1或n1%2
        sum ^= n1++;
    int k=(n2-n1+1)&amp;3;			//(n2-n1+1)&amp;0b11或(n2-n1+1)%4
    while(k--)
        sum ^= n2--;
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="uf812623b">
          <span class="ne-text">
            事实上，只要从偶数开始即可，不需要一定从4的倍数开始，因此第7行判定如果为奇数，则将n1加到异或和中，并将n1加1，这样保证n1为偶数。第7行用n1&amp;1计算n1的奇偶性，位操作的速度更快。
          </span>
        </li>
        <li id="ubb3600f9">
          <span class="ne-text">
            第二个循环采用了计数方式。第7行计算了n2与n1之间刨除以偶数开始的连续4个整数之后剩余数值的数量，第8-9行对这些数值进行了异或计算。
          </span>
        </li>
      </ul>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="lKDVq"
      ><span style="font-weight:bold;">代码4.37</span> 偶奇对计数
 <code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    if(n1&amp;1)
        sum^=n1++;
    if(n2&amp;1){
        sum ^=((n2+1-n1)&gt;&gt;1)&amp;1;			//或((n2+1-n1)/2)%2
    }else{
        sum ^=((n2-n1)&gt;&gt;1)&amp;1;			//或((n2-n1)/2)%2
        sum ^=n2;
    }
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="u9f5c4096">
          <span class="ne-text">
            从偶数开始的n和n+1构成一对偶奇对，异或结果为1，因此中间部分的偶奇对数量为奇数则和为1，为偶数则和为0。
          </span>
        </li>
        <li id="ubb0e836b">
          <span class="ne-text">
            第9行如果n2为奇数，则表示尾部没有冗余。首先计算偶奇对的数量(n2+1-n1)，然后对偶奇对的数量除2并判定奇偶性。如果偶奇对的数量为奇数，则让结果与1异或，否则与0异或。这里用右移1位代替除2操作，二者是等价的。
          </span>
        </li>
        <li id="u5240a00c">
          <span class="ne-text">
            第11行如果n2为偶数，尾部有一个冗余。同样计算偶奇对的数量，并对最后一个元素进行异或操作。此外，第12行时n2和n1都是偶数，因此
          </span>
          <code class="ne-code">
            <span class="ne-text"> (n2-n1)&gt;&gt;1 </span>
          </code>
          <span class="ne-text"> 和 </span>
          <code class="ne-code">
            <span class="ne-text"> (n2+1-n1)&gt;&gt;1 </span>
          </code>
          <span class="ne-text">
            的结果是相同的，右移1位后，多加的1会被自动忽略掉。也就是说，第10行和第12行的代码可以完全相同，提取到选择结构外部。变成如下所示。
          </span>
        </li>
      </ul>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="IJ3IM"
      ><span style="font-weight:bold;">代码4.38</span> 简化选择结构
 <code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    if(n1&amp;1)
        sum^=n1++;
    sum ^=((n2+1-n1)&gt;&gt;1)&amp;1;
    if(!(n2&amp;1))
        sum ^=n2;
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <p class="ne-p" id="链接16" style="text-indent: 2em">
        <span class="ne-text">
          在并行运算中，如果每个子进程中都没有选择结构，将会进一步提高程序性能。以下代码展示了如何去除简单的条件语句。
        </span>
      </p>
      <pre
        class="ne-codeblock language-cpp"
        data-language="cpp"
        id="JPGcw"
      ><span style="font-weight:bold;">代码4.39</span> 去除简单条件语句
 <code>#include&lt;iostream&gt;
using namespace std;
int main()
{
    long long n1,n2,sum=0;
    cin &gt;&gt; n1 &gt;&gt; n2;
    bool odd1 = n1&amp;1;
    sum^=n1*odd1;
    n1+=odd1;
    sum ^=((n2+1-n1)&gt;&gt;1)&amp;1;
    sum ^=n2*!(n2&amp;1);
    cout &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
      <ul class="ne-ul">
        <li id="udabc6719">
          <span class="ne-text">
            第7行计算了条件的布尔值，利用这个结果，第8行和第11行用乘法，第9行用加分，控制了相关单元是否参与运算，取代了条件语句。
          </span>
        </li>
      </ul>
    </div>
    <div class="self-section">
      <h1 id="u7XM4">
        <span class="ne-text"> 题单 </span>
      </h1>
      <table border="1" class="ne-table" id="ZJW8j" style="width: 100%">
        <tbody>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u63fed6e9">
                <span class="ne-text"> 序号 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="uf360e273">
                <span class="ne-text"> 题目名称 </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="uf0541cab">
                <span class="ne-text"> 知识点 </span>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u66762b59">
                <span class="ne-text"> 序号 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="u78149b73">
                <span class="ne-text"> 题目名称 </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="ud273d5ed">
                <span class="ne-text"> 知识点 </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u60dc519e">
                <span class="ne-text"> LX401 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="ue44c02ab">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161713"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161713"
                  target="_blank"
                >
                  <span class="ne-text"> 斐波那契数列 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="ucd984684">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
                <span class="ne-text"> , </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
                <span class="ne-text"> , </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wfiRs"
                  href="ch2#wfiRs"
                >
                  <span class="ne-text"> T224 </span>
                </a>
                <span class="ne-text"> , </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#nCbZA"
                  href="ch2#nCbZA"
                >
                  <span class="ne-text"> T221 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="uf39bc63f">
                <span class="ne-text"> LX402 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="uab4174c5">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161714"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161714"
                  target="_blank"
                >
                  <span class="ne-text"> 区间异或 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u5b880f1a">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#panTK"
                  href="ch2#panTK"
                >
                  <span class="ne-text"> T26C </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u88072a37">
                <span class="ne-text"> LX403 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="ubc7c4d91">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161715"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161715"
                  target="_blank"
                >
                  <span class="ne-text"> 求阶乘 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="ub73f1049">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wfiRs"
                  href="ch2#wfiRs"
                >
                  <span class="ne-text"> T224 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#nCbZA"
                  href="ch2#nCbZA"
                >
                  <span class="ne-text"> T221 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="uce285986">
                <span class="ne-text"> LX404 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="uefb6f181">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161716"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161716"
                  target="_blank"
                >
                  <span class="ne-text"> 库洛牌 </span>
                </a>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="ub5e43781">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T431 </span>
                </a>
              </p>
              <p class="ne-p" id="uc98270f0">
                <span class="ne-text" style="color: var(--yq-text-link)">
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="uc91b6292">
                <span class="ne-text"> LX405 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="uc3aa461f">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161717"
                  target="_blank"
                >
                  <span class="ne-text"> 解方程 </span>
                </a>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="ub1c1982f">
                <a class="ne-link" data-href="#bNUwd" href="#bNUwd">
                  <span class="ne-text"> T441 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#x6ypP" href="#x6ypP">
                  <span class="ne-text"> T451 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#Cbfbb" href="#Cbfbb">
                  <span class="ne-text"> T472 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#FRxma" href="#FRxma">
                  <span class="ne-text"> T474 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="ue48a54bb">
                <span class="ne-text"> LX406 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="u34156ada">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161719"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161719"
                  target="_blank"
                >
                  <span class="ne-text"> a+b+c+d=? </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u5dc883d2">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T412 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wfiRs"
                  href="ch2#wfiRs"
                >
                  <span class="ne-text"> T224 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u83d2f387">
                <span class="ne-text"> LX407 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="u16507eaf">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161718"
                  target="_blank"
                >
                  <span class="ne-text"> 自守数 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="ud66541f6">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T432 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#iAVWo"
                  href="ch2#iAVWo"
                >
                  <span class="ne-text"> T245 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#IcjHC" href="#IcjHC">
                  <span class="ne-text"> T471 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u2b8d5001">
                <span class="ne-text"> LX408 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="udf689d61">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161720"
                  target="_blank"
                >
                  <span class="ne-text"> 水仙花数 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u036d8272">
                <a class="ne-link" data-href="#pjuoH" href="#pjuoH">
                  <span class="ne-text"> T411 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T432 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#iAVWo"
                  href="ch2#iAVWo"
                >
                  <span class="ne-text"> T245 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#IcjHC" href="#IcjHC">
                  <span class="ne-text"> T471 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u1da88ee2">
                <span class="ne-text"> LX409 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="u0087d4a1">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161721"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161721"
                  target="_blank"
                >
                  <span class="ne-text"> 替换加密 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="u8824ce2c">
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T411 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wG8i3"
                  href="ch2#wG8i3"
                >
                  <span class="ne-text"> T241 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#wG8i3"
                  href="ch2#wG8i3"
                >
                  <span class="ne-text"> T242 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u27f14a49">
                <span class="ne-text"> LX410 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="u8750d7a4">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161722"
                  target="_blank"
                >
                  <span class="ne-text"> 递归求1的个数 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="ubc70c3b6">
                <a class="ne-link" data-href="#BRLYJ" href="#BRLYJ">
                  <span class="ne-text"> T462 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#JieQ4" href="#JieQ4">
                  <span class="ne-text"> T478 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a class="ne-link" data-href="#Cbfbb" href="#Cbfbb">
                  <span class="ne-text"> T473 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#fzLrK"
                  href="ch2#fzLrK"
                >
                  <span class="ne-text"> T26A </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u8a862b54">
                <span class="ne-text"> LX411 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="链接af">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161723"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161723"
                  target="_blank"
                >
                  <span class="ne-text"> 若干行 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="uf016d3bc">
                <a class="ne-link" data-href="#rMmNI" href="#rMmNI">
                  <span class="ne-text"> T482 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="链接19">
                <span class="ne-text"> LX412 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="ua03f6839">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161724"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161724"
                  target="_blank"
                >
                  <span class="ne-text"> 哥德巴赫猜想 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="uf065d045">
                <a class="ne-link" data-href="#Cbfbb" href="#Cbfbb">
                  <span class="ne-text"> T472 </span>
                </a>
                <span
                  class="ne-text"
                  style="color: rgba(0, 0, 0, 0.75); font-size: 16px"
                >
                  ,
                </span>
                <a
                  class="ne-link"
                  data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#VKSK4"
                  href="ch3#VKSK4"
                >
                  <span class="ne-text"> T331 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="u50c4afa3">
                <span class="ne-text"> LX413 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="u5e8bf8b7">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161725"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161725"
                  target="_blank"
                >
                  <span class="ne-text"> 考拉慈猜想 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="uc6e9b999">
                <a class="ne-link" data-href="#zN3EO" href="#zN3EO">
                  <span class="ne-text"> T432 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u7b3caffb">
                <span class="ne-text"> LX414 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="u2da2a737">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161726"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161726"
                  target="_blank"
                >
                  <span class="ne-text"> 计算平均值 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u00dcf869">
                <a class="ne-link" data-href="#FpCPw" href="#FpCPw">
                  <span class="ne-text"> T483,T484 </span>
                </a>
              </p>
            </td>
          </tr>
          <tr style="height: 33px">
            <td width="66">
              <p class="ne-p" id="ubefcf8ab">
                <span class="ne-text"> LX415 </span>
              </p>
            </td>
            <td width="110">
              <p class="ne-p" id="ue9e64c6d">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161727"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161727"
                  target="_blank"
                >
                  <span class="ne-text"> 星号三角形 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="102">
              <p class="ne-p" id="ubc24838b">
                <a class="ne-link" data-href="#bNUwd" href="#bNUwd">
                  <span class="ne-text"> T442 </span>
                </a>
              </p>
            </td>
            <td width="65">
              <p class="ne-p" id="u89fa1c9a">
                <span class="ne-text"> LX416 </span>
              </p>
            </td>
            <td width="114">
              <p class="ne-p" id="uceaa8567">
                <a
                  class="ne-link"
                  data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161728"
                  href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161728"
                  target="_blank"
                >
                  <span class="ne-text"> 圆周率山 </span>
                </a>
                <span class="ne-text"> </span>
              </p>
            </td>
            <td width="98">
              <p class="ne-p" id="u821abe85">
                <a class="ne-link" data-href="#bNUwd" href="#bNUwd">
                  <span class="ne-text"> T442 </span>
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
    name: 'Ch4',
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
        this.$store.dispatch('toChapter', 7);
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
