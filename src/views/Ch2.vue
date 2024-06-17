<template>
    <div class="whole-page">
        <!-- content -->
        <div class="self-main">
            <div class="chapter-title">✋第二章 程序设计基础</div>
            <div class="lake-content" ref="content-data" typography="classic">
                <!-- section 1 -->
                <div class="self-section">
                    <h1 id="EnCEs"><span class="ne-text">1. 数据类型</span></h1>
                    <h2 id="ZcJ9v"><span class="ne-text">1.1 常见数据类型</span></h2>
                    <p class="ne-p" id="uecd307b5" style="text-indent: 2em">
                        <span class="ne-text">
                            C++中的常见数据类型包括int, short,long long,
                            float, double, char, string, bool。其中short（16位），int（32位）和long long（64位）表示整型，float（32位）, double（64位）和long
                            double（128位）表示浮点型；char表示字符，用单引号表示，一对单引号中
                        </span>
                        <strong>
                            <span class="ne-text">有且仅有一个字符</span>
                        </strong>
                        <span class="ne-text">
                            ，空格也是一个字符，单引号中不能为空；string表示字符串，用双引号表示，一对双引号中可以为空，也可以是多个字符；bool表示布尔类型，其值只能设置为true或false，也可以用1或0代替，在C/C++中，true和1等价，false和0等价。
                        </span>
                    </p>

    <pre class="ne-codeblock language-cpp" data-language="cpp" id="dqr8S"><span style="font-weight:bold;">代码2.1</span> 数据类型和基本输入输出
    <code>#include&lt;iostream&gt;
    using namespace std;
    int main()
    {
        int a,d;
        float b=2.578;
        char c='a';
        string s;
        cin&gt;&gt;a&gt;&gt;d;
        cin&gt;&gt;s;
        cout&lt;&lt;"a="&lt;&lt;a&lt;&lt;";d="&lt;&lt;d&lt;&lt;";a+b="&lt;&lt;a+d&lt;&lt;endl;
        cout&lt;&lt;"b="&lt;&lt;b&lt;&lt;endl;
        cout&lt;&lt;"c="&lt;&lt;c&lt;&lt;endl;
        cout&lt;&lt;s&lt;&lt;endl;;
        return 0;
    }</code>
    </pre>
                    
                    <table border=1 id="LOmZR" style="width: 100%">
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
                                    <p class="ne-p" id="u53336c51">
                                    <span class="ne-text">
                                    我喜欢中国石油大学（华东）
                                    </span>
                                    </p>
                                </td>
                                <td width="375">
                                    <p class="ne-p" id="u5e034cf3">
                                        <span class="ne-text">
                                            a=3; d=5; a+b=8
                                        </span>
                                    </p>
                                    <p class="ne-p" id="u00952e00">
                                        <span class="ne-text">
                                            b=2.578
                                        </span>
                                    </p>
                                    <p class="ne-p" id="uf0a6dd43">
                                        <span class="ne-text">
                                            c=a
                                        </span>
                                    </p>
                                    <p class="ne-p" id="u86ccfb37">
                                        <span class="ne-text">
                                            我喜欢中国石油大学（华东）
                                        </span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="ne-p" id="u6ce33c34">
                        <strong>
                            <span class="ne-text">
                                说明：
                            </span>
                        </strong>
                    </p>

                    <ul class="ne-ul">
                        <li id="链接19">
                        <span class="ne-text">
                            注意区分第5行的
                        </span>
                        <code class="ne-code">
                            <span class="ne-text">
                            a
                            </span>
                        </code>
                        <span class="ne-text">
                            和第7行的
                        </span>
                        <code class="ne-code">
                            <span class="ne-text">
                            'a'
                            </span>
                        </code>
                        <span class="ne-text">
                            。其中a是一个变量，被定义为int类型，可以被赋值；
                        </span>
                        <code class="ne-code">
                            <span class="ne-text">
                            'a'
                            </span>
                        </code>
                        <span class="ne-text">
                            是一个常量，代表小写字母a，不能被修改。
                        </span>
                        </li>
                        <li id="uf8c76be5">
                        <span class="ne-text">
                            第6-7行中的
                        </span>
                        <code class="ne-code">
                            <span class="ne-text">
                            =
                            </span>
                        </code>
                        <span class="ne-text">
                            表示赋值，将右侧计算的结果赋值给左侧的变量。注意
                        </span>
                        <strong>
                            <span class="ne-text">
                            赋值号左边只能写一个变量
                            </span>
                        </strong>
                        <span class="ne-text">
                            ，也称为左值。不能对多个变量同时赋值，也就是说，左值必须是唯一的。
                        </span>
                        </li>
                        <li id="ub324bfdd">
                        <code class="ne-code">
                            <span class="ne-text">
                            cin
                            </span>
                        </code>
                        <span class="ne-text">
                            是C++的标准输入方式，将输入内容赋值给变量；
                        </span>
                        <code class="ne-code">
                            <span class="ne-text">
                            cout
                            </span>
                        </code>
                        <span class="ne-text">
                            是C++的标准输出方式；采用这样的方式，可以让用户交互式的为变量赋值，并进行打印输出。
                        </span>
                        </li>
                        <li id="u5222a796">
                        <span class="ne-text">
                            在OJ系统中，如果给定的样例输出比较长，例如“我喜欢中国石油大学（华东）”，请将这样的复制粘贴到自己的程序中进行输出。这样可以防止潜在的书写错误，或中英文符号的混淆，例如这里的小括号是中文的，防止自行输入时写成英文的，这种小错误会让初学者非常烦恼。
                        </span>
                        </li>
                        <li id="u8c691f66">
                        <code class="ne-code">
                            <span class="ne-text">
                            endl
                            </span>
                        </code>
                        <span class="ne-text">
                            是C++中的一个关键字，表示end of line，即回车换行符。
                        </span>
                        </li>
                    </ul>
                    
                    <div class="ne-quote">
                        <p class="ne-p" id="ue3bb8f31">
                        <span class="ne-text">
                        打印输出的目的是为了验证程序运行的结果是否和用户的预期输出相同，并不是程序运行的目的。
                        </span>
                        </p>
                    </div>

                    <h3 id="XPPV7">
                        <span class="ne-text">
                        知识点：T211-T213
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
                        <td width="531">
                        <p class="ne-p" id="u3a8c19f7" style="text-align: center">
                        <span class="ne-text">
                        要点
                        </span>
                        </p>
                        </td>
                        <td width="49">
                        <p class="ne-p" id="u06abcab9">
                        <span class="ne-text">
                        正链
                        </span>
                        </p>
                        </td>
                        <td width="95">
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
                        T211
                        </span>
                        </p>
                        </td>
                        <td width="531">
                        <p class="ne-p" id="u70312b70">
                        <span class="ne-text">
                        区分字符和字符串，单引号中有且仅有一个字符，字符串用双引号
                        </span>
                        </p>
                        </td>
                        <td width="49">
                        <p class="ne-p" id="uc344a142">
                        <br/>
                        </p>
                        </td>
                        <td width="95">
                        <p class="ne-p" id="uf6db8821">
                        <a class="ne-link" data-href="#dnRYf" href="#dnRYf">
                        <span class="ne-text">
                            T241
                        </span>
                        </a>
                        <span class="ne-text">
                        ,
                        </span>
                        <a class="ne-link" data-href="#LBVF5" href="#LBVF5">
                        <span class="ne-text">
                            T243
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="675">
                        <p class="ne-p" id="u7b4f6381">
                        
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
                        <p class="ne-p" id="u08348e94">
                        <span class="ne-text">
                        T212
                        </span>
                        </p>
                        </td>
                        <td width="531">
                        <p class="ne-p" id="uacd9bd1b">
                        <span class="ne-text">
                        区分变量和常量，掌握标准输入和标准输出。如果要求的输出比较长，或含有特殊字符，请用复制粘贴的方式放到程序输出中，尽量不要手工输入，防止潜在错误的发生。
                        </span>
                        </p>
                        </td>
                        <td width="49">
                        <p class="ne-p" id="u00a985cf">
                        <br/>
                        </p>
                        </td>
                        <td width="95">
                        <p class="ne-p" id="ufcca546f">
                        <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                        <span class="ne-text">
                            T271
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="675">
                        <p class="ne-p" id="链接b9">
                        
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161691" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161691" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX202)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="58">
                        <p class="ne-p" id="u6cd710aa">
                        <span class="ne-text">
                        T213
                        </span>
                        </p>
                        </td>
                        <td width="531">
                        <p class="ne-p" id="uaf4a1b56">
                        <span class="ne-text">
                        赋值号为一个
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            =
                        </span>
                        </code>
                        <span class="ne-text">
                        ，其左侧只能有一个变量，称为左值
                        </span>
                        </p>
                        </td>
                        <td width="49">
                        </td>
                        <td width="95">
                        <p class="ne-p" id="u801a80bf">
                        <a class="ne-link" data-href="#bqzYv" href="#bqzYv">
                        <span class="ne-text">
                            T261
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <h2 id="jk9sf">
                        <span class="ne-text">
                        1.2 转义字符
                        </span>
                    </h2>
                    <p class="ne-p" id="ucc503829" style="text-indent: 2em">
                        <span class="ne-text">
                        C/C++的字符串中以
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            \
                        </span>
                        </code>
                        <span class="ne-text">
                        开头的字符称为转义字符，表示特殊含义的字符。例如
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            \t
                        </span>
                        </code>
                        <span class="ne-text">
                        表示制表符,
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            \n
                        </span>
                        </code>
                        <span class="ne-text">
                        表示回车符。转义字符在书写上呈现两个字符甚至多个字符，但是实际上代表一个特殊字符。下表列举了一些常见的转义字符。
                        </span>
                    </p>
                    <p class="ne-p" id="uad5a638b" style="text-align: center">
                    <span class="ne-text">
                    表2.1 常见转义字符
                    </span>
                    </p>
                    <table  border=1 class="ne-table" id="wcriI" style="text-align:center" align="center">
                    <tbody>
                    <tr style="height: 33px">
                        <td width="83">
                        <p class="ne-p" id="链接e3">
                        <span class="ne-text">
                        转义字符
                        </span>
                        </p>
                        </td>
                        <td width="277">
                        <p class="ne-p" id="u9ea8997f">
                        <span class="ne-text">
                        意义
                        </span>
                        </p>
                        </td>
                        <td width="86">
                        <p class="ne-p" id="u60ffef9b">
                        <span class="ne-text">
                        转义字符
                        </span>
                        </p>
                        </td>
                        <td width="226">
                        <p class="ne-p" id="uebb404df">
                        <span class="ne-text">
                        意义
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="83">
                        <p class="ne-p" id="ub1847830">
                        <span class="ne-text">
                        \n
                        </span>
                        </p>
                        </td>
                        <td width="277">
                        <p class="ne-p" id="u2e8d1558">
                        <span class="ne-text">
                        换行(LF) ，将当前位置移到下一行开头
                        </span>
                        </p>
                        </td>
                        <td width="86">
                        <p class="ne-p" id="u37c6aa55">
                        <span class="ne-text">
                        \'
                        </span>
                        </p>
                        </td>
                        <td width="226">
                        <p class="ne-p" id="u268e8469">
                        <span class="ne-text">
                        代表一个单引号（撇号）字符
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="83">
                        <p class="ne-p" id="u0da6bff0">
                        <span class="ne-text">
                        \r
                        </span>
                        </p>
                        </td>
                        <td width="277">
                        <p class="ne-p" id="u4e5e0238">
                        <span class="ne-text">
                        回车(CR) ，将当前位置移到本行开头
                        </span>
                        </p>
                        </td>
                        <td width="86">
                        <p class="ne-p" id="u4d4bf9e0">
                        <span class="ne-text">
                        \"
                        </span>
                        </p>
                        </td>
                        <td width="226">
                        <p class="ne-p" id="ua573b129">
                        <span class="ne-text">
                        代表一个双引号字符
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="83">
                        <p class="ne-p" id="u7202d1fa">
                        <span class="ne-text">
                        \t
                        </span>
                        </p>
                        </td>
                        <td width="277">
                        <p class="ne-p" id="uaaa39950">
                        <span class="ne-text">
                        水平制表(HT) （跳到下一个TAB位置）
                        </span>
                        </p>
                        </td>
                        <td width="86">
                        <p class="ne-p" id="u20c7f617">
                        <span class="ne-text">
                        \?
                        </span>
                        </p>
                        </td>
                        <td width="226">
                        <p class="ne-p" id="ud53c4faf">
                        <span class="ne-text">
                        代表一个问号
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="83">
                        <p class="ne-p" id="ueaed38a6">
                        <span class="ne-text">
                        \\
                        </span>
                        </p>
                        </td>
                        <td width="277">
                        <p class="ne-p" id="ud74d4dc4">
                        <span class="ne-text">
                        代表一个反斜线字符''\'
                        </span>
                        </p>
                        </td>
                        <td width="86">
                        <p class="ne-p" id="u5a76b355">
                        <span class="ne-text">
                        \0
                        </span>
                        </p>
                        </td>
                        <td width="226">
                        <p class="ne-p" id="u61c3f785">
                        <span class="ne-text">
                        空字符(NULL)
                        </span>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <h3 id="ISHX3">
                    <span class="ne-text">
                    知识点：T214
                    </span>
                    </h3>
                    <table  border=1 class="ne-table" id="wHvGJ" style="width: 100%">
                    <tbody>
                    <tr class="table-header">
                        <td width="58">
                        <p class="ne-p" id="u278b9bcd">
                        <span class="ne-text">
                        索引
                        </span>
                        </p>
                        </td>
                        <td width="569">
                        <p class="ne-p" id="u0b55114c" style="text-align: center">
                        <span class="ne-text">
                        要点
                        </span>
                        </p>
                        </td>
                        <td width="55">
                        <p class="ne-p" id="uc0c3cceb">
                        <span class="ne-text">
                        正链
                        </span>
                        </p>
                        </td>
                        <td width="57">
                        <p class="ne-p" id="u3ccc0be7">
                        <span class="ne-text">
                        反链
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td rowspan="2" width="58">
                        <p class="ne-p" id="u19f80410">
                        <span class="ne-text">
                        T214
                        </span>
                        </p>
                        </td>
                        <td width="569">
                        <p class="ne-p" id="uff652d9c">
                        <span class="ne-text">
                        理解字符串的转义字符，
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            \
                        </span>
                        </code>
                        <span class="ne-text">
                        在字符串中的特殊含义，打印一个
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            \
                        </span>
                        </code>
                        <span class="ne-text">
                        要写
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            \\
                        </span>
                        </code>
                        </p>
                        </td>
                        <td width="55">
                        <p class="ne-p" id="u3811b662">
                        <span class="ne-text">
                        </span>
                        </p>
                        </td>
                        <td width="57">
                        <p class="ne-p" id="u9f06b474">
                        <a class="ne-link" data-href="#MOJpK" href="#MOJpK">
                        <span class="ne-text">
                            T216
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="681">
                        <p class="ne-p" id="udb46e4fa">
                        
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161692" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161692" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX203)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <h2 id="QIb3q">
                    <span class="ne-text">
                    1.3 标识符
                    </span>
                    </h2>
                    <p class="ne-p" id="u89996eb6" style="text-indent: 2em">
                    <span class="ne-text">
                    标识符是用于表示变量名、常量名或函数名等的字符序列。标识符可以由字母、数字和
                                _（下划线）组合而成，变量名必须以字母或 _（下划线）开头。标识符是大小写敏感的，即区分大小写，
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
                        A
                    </span>
                    </code>
                    <span class="ne-text">
                    是两个不同的变量。以下都是合法的数据类型和标识符，建议使用有意义的名字作为变量名，在程序阅读时，通过变量名就可以理解程序的含义。
                    </span>
                    </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="kq9UK"><span style="font-weight:bold;">代码2.2</span> 变量标识符示例<code>int myNum = 5;               	// Integer (whole number)
    float myFloatNum = 5.99;     	// Floating point number
    double myDoubleNum = 9.987868;   // Floating point number
    char myLetter = 'D';         	// Character
    bool myBoolean = true;       	// Boolean
    string myText = "Hello";     	// String</code></pre>
                    <h2 id="Fx9l9">
                    <span class="ne-text">
                    1.4 C语言的输出方式
                    </span>
                    </h2>
                    <p class="ne-p" id="链接26" style="text-indent: 2em">
                    <span class="ne-text">
                    代码2.3中的
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        printf
                    </span>
                    </code>
                    <span class="ne-text">
                    是C语言的屏幕输出方式，其中的
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %4d
                    </span>
                    </code>
                    <span class="ne-text">
                    ，
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %.2f
                    </span>
                    </code>
                    <span class="ne-text">
                    和
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %c
                    </span>
                    </code>
                    <span class="ne-text">
                    称为占位符，分别表示整型(int)、单精度浮点型(float)和字符类型(char)，对应变量（
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        a
                    </span>
                    </code>
                    <span class="ne-text">
                    ,
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        b
                    </span>
                    </code>
                    <span class="ne-text">
                    ,
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        c
                    </span>
                    </code>
                    <span class="ne-text">
                    ）的值将在占位符位置进行输出。其中
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %.2f
                    </span>
                    </code>
                    <span class="ne-text">
                    表示输出的浮点数精度保留两位小数，如果是双精度浮点型
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        double
                    </span>
                    </code>
                    <span class="ne-text">
                    类型，采用
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %.2lf
                    </span>
                    </code>
                    <span class="ne-text">
                    的形式。占位符还可以进行宽度控制，例如
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %4d
                    </span>
                    </code>
                    <span class="ne-text">
                    表示打印内容占4个字符宽度的整型，且右对齐。
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        %-8.2f
                    </span>
                    </code>
                    <span class="ne-text">
                    表示占10个字符宽度，精度为2的浮点数，
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        -
                    </span>
                    </code>
                    <span class="ne-text">
                    表示左对齐。
                    </span>
                    </p>
                    <p class="ne-p" id="u03d680df" style="text-indent: 2em">
                    <code class="ne-code">
                    <span class="ne-text">
                        printf
                    </span>
                    </code>
                    <span class="ne-text">
                    书写比较复杂，还要进行类型控制，在C++中不推荐使用，C++的
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        cout
                    </span>
                    </code>
                    <span class="ne-text">
                    形式输出更加常用。
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        cin
                    </span>
                    </code>
                    <span class="ne-text">
                    和
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        cout
                    </span>
                    </code>
                    <span class="ne-text">
                    能够自动进行类型检测，不需要书写占位符，使用更加简单方便。
                    </span>
                    </p>
                    <div class="ne-quote">
                    <p class="ne-p" id="u68f934ed">
                    <span class="ne-text">
                        绝大部分情况下可以使用
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        cout
                        </span>
                    </code>
                    <span class="ne-text">
                        进行屏幕打印，但是如果涉及精度和宽度控制时，
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        cout
                        </span>
                    </code>
                    <span class="ne-text">
                        书写比较复杂，建议采用
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        printf
                        </span>
                    </code>
                    <span class="ne-text">
                        形式。
                    </span>
                    </p>
                    </div>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="AGB1Y"><span style="font-weight:bold;">代码2.3</span> printf使用示例<code>#include &lt;cstdio&gt;					//C语言标准输入scanf和标准输出printf的头文件
    using namespace std;
    int main()
    {
        int a=3,b=4,c;
        double d=3.1415926,e=3.1415927,f;
        printf("a=%-4d|b=%4d|c=%d\n",a,b,c);			//注意宽度控制,-表示左对齐
        printf("d=%.2f|e=%-8.2f|f=%8f\n",d,e,f);		//注意精度控制,-表示左对齐
        printf("character %c\n",'A');					//常量也可以采用占位符形式输出
    }</code></pre>
                    <table  border=1 class="ne-table" id="eANXW" style="width: 100%">
                    <tbody>
                    <tr style="height: 33px">
                        <td width="377">
                        <p class="ne-p" id="ue5f27fc0">
                        <strong>
                        <span class="ne-text">
                            样例输入
                        </span>
                        </strong>
                        </p>
                        </td>
                        <td width="377">
                        <p class="ne-p" id="u1ad37b25">
                        <strong>
                        <span class="ne-text">
                            样例输出
                        </span>
                        </strong>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="377">
                        <p class="ne-p" id="ub82ce373">
                        <span class="ne-text">
                        (无）
                        </span>
                        </p>
                        </td>
                        <td width="377">
                        <p class="ne-p" id="u3aa8202a">
                        <span class="ne-text">
                        a=3 |b= 4|c=0
                        </span>
                        </p>
                        <p class="ne-p" id="ud4d57fcf">
                        <span class="ne-text">
                        d=3.14|e=3.14 |f=0.000000
                        </span>
                        </p>
                        <p class="ne-p" id="u6cdc73a1">
                        <span class="ne-text">
                        character A
                        </span>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <ul class="ne-ul">
                    <li id="u75caed02">
                    <span class="ne-text">
                        注意
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        printf
                        </span>
                    </code>
                    <span class="ne-text">
                        中的精度控制、宽度控制和左对齐；
                    </span>
                    </li>
                    <li id="u099c9197">
                    <span class="ne-text">
                        因为
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        %
                        </span>
                    </code>
                    <span class="ne-text">
                        作为占位符的标记，因此如果想输出一个一个
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        %
                        </span>
                    </code>
                    <span class="ne-text">
                        ，需要使用两个
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        %%
                        </span>
                    </code>
                    <span class="ne-text">
                        ，与
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        \\
                        </span>
                    </code>
                    <span class="ne-text">
                        同理；
                    </span>
                    </li>
                    <li id="u5970d9ef">
                    <span class="ne-text">
                        常量也可以采用占位符的形式进行输出，但是意义不大，因为常量可以直接写进字符串；
                    </span>
                    </li>
                    <li id="u1c52a557">
                    <span class="ne-text">
                        在变量定义的时候直接进行赋值，叫做变量初始化，例如
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        a
                        </span>
                    </code>
                    <span class="ne-text">
                        ,
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        b
                        </span>
                    </code>
                    <span class="ne-text">
                        ,
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        c
                        </span>
                    </code>
                    <span class="ne-text">
                        ,
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        d
                        </span>
                    </code>
                    <span class="ne-text">
                        ；
                    </span>
                    </li>
                    <li id="u4d4263ad">
                    <code class="ne-code">
                        <span class="ne-text">
                        c
                        </span>
                    </code>
                    <span class="ne-text">
                        和
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        f
                        </span>
                    </code>
                    <span class="ne-text">
                        在使用前并未进行赋值，因此其结果是任意的。
                    </span>
                    </li>
                    </ul>
                    <p class="ne-p" id="u32bc6aa4" style="text-indent: 2em">
                    <span class="ne-text">
                    运行以上代码，
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        c
                    </span>
                    </code>
                    <span class="ne-text">
                    和
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        f
                    </span>
                    </code>
                    <span class="ne-text">
                    可能跟以上结果不相同。这里实际上包含了一条重要的原则，
                    </span>
                    <strong>
                    <span class="ne-text">
                        变量在使用前必须初始化
                    </span>
                    </strong>
                    <span class="ne-text">
                    。因此以上程序在运行时会出现2个警告，例如：'f' is used
                                uninitialized in this
                                function。当一个变量进行定义后，会根据指定的数据类型分配内存空间。但是由于未初始化，对应内存空间内的数值不会发生任何改变，把该内存空间中的二进制数值按照变量的数据类型进行解析，因此对应变量的值可以认为是任意值。这是非常危险的操作，它可能导致代码在本地运行结果正确，但是提交到服务器上进行在线评测的时候就发生了错误。变量未初始化给出警告，但不是错误，因此程序可以正常执行。
                    </span>
                    </p>
                    <div class="ne-quote">
                    <p class="ne-p" id="u675faef0">
                    <span class="ne-text">
                        警告虽然不影响程序的正常执行，但是一旦出现警告要认真对待，尽量避免，因为这可能导致潜在错误的发生。
                    </span>
                    </p>
                    </div>
                    <h3 id="MOJpK">
                    <span class="ne-text">
                    知识点：T215-T217
                    </span>
                    </h3>
                    <table  border=1 class="ne-table" id="EWb9S" style="width: 100%">
                    <tbody>
                    <tr class="table-header">
                        <td width="58">
                        <p class="ne-p" id="u21d83d2b">
                        <span class="ne-text">
                        索引
                        </span>
                        </p>
                        </td>
                        <td width="564">
                        <p class="ne-p" id="ud2fc614c" style="text-align: center">
                        <span class="ne-text">
                        要点
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="ucb06b709">
                        <span class="ne-text">
                        正链
                        </span>
                        </p>
                        </td>
                        <td width="56">
                        <p class="ne-p" id="ua830c533">
                        <span class="ne-text">
                        反链
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td rowspan="2" width="58">
                        <p class="ne-p" id="u6d27bda5">
                        <span class="ne-text">
                        T215
                        </span>
                        </p>
                        </td>
                        <td width="564">
                        <p class="ne-p" id="uef0e75d7">
                        <span class="ne-text">
                        正确使用占位符，控制宽度、精度等
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="u553ecee7">
                        <br/>
                        </p>
                        </td>
                        <td width="56">
                        <p class="ne-p" id="u84582e2e">
                        <a class="ne-link" data-href="#dnRYf" href="#dnRYf">
                        <span class="ne-text">
                            T231
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="681">
                        <p class="ne-p" id="u7ba2a8b8">
                        
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161693" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161693" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX204)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td rowspan="2" width="58">
                        <p class="ne-p" id="u2190c852">
                        <span class="ne-text">
                        T216
                        </span>
                        </p>
                        </td>
                        <td width="564">
                        <p class="ne-p" id="ua7b95bf0">
                        <span class="ne-text">
                        因为
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            %
                        </span>
                        </code>
                        <span class="ne-text">
                        表示占位符，所以输出时用
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            %%
                        </span>
                        </code>
                        <span class="ne-text">
                        表示一个
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            %
                        </span>
                        </code>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="ueef770ea">
                        <a class="ne-link" data-href="#ISHX3" href="#ISHX3">
                        <span class="ne-text">
                            T214
                        </span>
                        </a>
                        </p>
                        </td>
                        <td width="56">
                        <p class="ne-p" id="u178ca4f8">
                        <span class="ne-text">
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="681">
                        <p class="ne-p" id="u8c4aea0d">
                        
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161694" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161694" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX205)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="58">
                        <p class="ne-p" id="ub954a05c">
                        <span class="ne-text">
                        T217
                        </span>
                        </p>
                        </td>
                        <td width="564">
                        <p class="ne-p" id="u8552ee48">
                        <span class="ne-text">
                        变量在使用前必须先赋值
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="ufac0de86">
                        <br/>
                        </p>
                        </td>
                        <td width="56">
                        <p class="ne-p" id="u17f324cf">
                        <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#x2iD7" href="ch4#x2iD7">
                        <span class="ne-text">
                            T443
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </div>


                <!-- Section 2 -->
                <div class="self-section">
                    <h1 id="okQ7a"><span class="ne-text">2. 整型</span></h1>
                    <h2 id="GwqiK"><span class="ne-text">2.1 整型的数值范围</span></h2>
                    <p class="ne-p" id="ue58e80b1" style="text-indent: 2em">
                        <span class="ne-text">
                        以
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            int
                        </span>
                        </code>
                        <span class="ne-text">
                        类型为例，分析一下整型数据类型的内存表示。
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            int
                        </span>
                        </code>
                        <span class="ne-text">
                        由连续的4字节构成，共32比特，它在内存中的分配如图2.1所示。最高位作为符号位，剩余31位，因此
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            int
                        </span>
                        </code>
                        <span class="ne-text">
                        类型的数值范围为-2
                        </span>
                        <sup>
                        <span class="ne-text">
                            31
                        </span>
                        </sup>
                        <span class="ne-text">
                        ~2
                        </span>
                        <sup>
                        <span class="ne-text">
                            31
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1，最大值减一是因为0要占一种表示方式。如果最高位不作为符号位，即
                        </span>
                        <code class="ne-code">
                        <span class="ne-text">
                            unsigned int
                        </span>
                        </code>
                        <span class="ne-text">
                        类型，数值范围转换为0~2
                        </span>
                        <sup>
                        <span class="ne-text">
                            32
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1。
                        </span>
                    </p>
                    <img id="Uw0rm" class="img-70" src="../assets/images/1657069373287-7aefe071-5bfd-400b-947a-1490809c39ae.jpeg"/>
                    <p class="ne-p" id="ub99c468d" style="text-align: center">
                    <span class="ne-text">
                    图2.1 int类型的内存分配
                    </span>
                    </p>
                    <p class="ne-p" id="链接2f" style="text-indent: 2em">
                    <span class="ne-text">
                    对于有符号数据类型，符号位用0表示“正数”，用1表示“负数”。
                    </span>
                    </p>
                    <p class="ne-p" id="ubae5ee2c" style="text-indent: 2em">
                    <span class="ne-text">
                    与之类似，
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        long long
                    </span>
                    </code>
                    <span class="ne-text">
                    为64位的整型，char是8位的整型。表2.2列举了
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        &lt;climits&gt;
                    </span>
                    </code>
                    <span class="ne-text">
                    头文件中定义的部分常量，从这些常量中可以看到
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        char
                    </span>
                    </code>
                    <span class="ne-text">
                    ，
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        int
                    </span>
                    </code>
                    <span class="ne-text">
                    ，
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        long long
                    </span>
                    </code>
                    <span class="ne-text">
                    数据类型的表示范围。
                    </span>
                    </p>
                    <p class="ne-p" id="链接22" style="text-align: center">
                    <span class="ne-text">
                    表2.2 climits头文件中定义的部分常量
                    </span>
                    </p>
                    <table  border=1 class="ne-table" id="PWuKr" style="text-align:center" align="center">
                    <tbody>
                    <tr style="height: 33px">
                        <td width="89">
                        <p class="ne-p" id="uca8ef9bd">
                        <span class="ne-text">
                        类型
                        </span>
                        </p>
                        </td>
                        <td width="51">
                        <p class="ne-p" id="u05f26495">
                        <span class="ne-text">
                        字节
                        </span>
                        </p>
                        </td>
                        <td width="115">
                        <p class="ne-p" id="u9c653391">
                        <span class="ne-text">
                        最小值
                        </span>
                        </p>
                        <p class="ne-p" id="ue7383d93">
                        <span class="ne-text">
                        常量名称
                        </span>
                        </p>
                        </td>
                        <td width="65">
                        <p class="ne-p" id="uaf37a554">
                        <span class="ne-text">
                        最小值
                        </span>
                        </p>
                        </td>
                        <td width="116">
                        <p class="ne-p" id="u6e1279e9">
                        <span class="ne-text">
                        最大值
                        </span>
                        </p>
                        <p class="ne-p" id="ufa63b5fb">
                        <span class="ne-text">
                        常量名称
                        </span>
                        </p>
                        </td>
                        <td width="69">
                        <p class="ne-p" id="uf6c5e29a">
                        <span class="ne-text">
                        最大值
                        </span>
                        </p>
                        </td>
                        <td width="133">
                        <p class="ne-p" id="u9ca0c695">
                        <span class="ne-text">
                        unsigned最大值
                        </span>
                        </p>
                        <p class="ne-p" id="uad62c74f">
                        <span class="ne-text">
                        常量名称
                        </span>
                        </p>
                        </td>
                        <td width="88">
                        <p class="ne-p" id="u50ca7c8f">
                        <span class="ne-text">
                        unsigned
                        </span>
                        </p>
                        <p class="ne-p" id="udf5c5c6e">
                        <span class="ne-text">
                        最大值
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="89">
                        <p class="ne-p" id="uf08f282c">
                        <span class="ne-text">
                        char
                        </span>
                        </p>
                        </td>
                        <td width="51">
                        <p class="ne-p" id="ucdb1f686">
                        <span class="ne-text">
                        1
                        </span>
                        </p>
                        </td>
                        <td width="115">
                        <p class="ne-p" id="ubc8b1bac">
                        <span class="ne-text">
                        CHAR_ MIN
                        </span>
                        </p>
                        </td>
                        <td width="65">
                        <p class="ne-p" id="udd9576d2">
                        <span class="ne-text">
                        -2
                        </span>
                        <sup>
                        <span class="ne-text">
                            7
                        </span>
                        </sup>
                        </p>
                        </td>
                        <td width="116">
                        <p class="ne-p" id="uff63eb5e">
                        <span class="ne-text">
                        CHAR_ MAX
                        </span>
                        </p>
                        </td>
                        <td width="69">
                        <p class="ne-p" id="u527f47d2">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            7
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                        <td width="133">
                        <p class="ne-p" id="u107c57e0">
                        <span class="ne-text">
                        UCHAR_ MAX
                        </span>
                        </p>
                        </td>
                        <td width="88">
                        <p class="ne-p" id="u62f5fd1c">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            8
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="89">
                        <p class="ne-p" id="u30af10e3">
                        <span class="ne-text">
                        short
                        </span>
                        </p>
                        </td>
                        <td width="51">
                        <p class="ne-p" id="u7cfc0985">
                        <span class="ne-text">
                        2
                        </span>
                        </p>
                        </td>
                        <td width="115">
                        <p class="ne-p" id="uef6a4c3e">
                        <span class="ne-text" style="color: rgb(23, 23, 23); font-size: 14px">
                        SHRT_MIN
                        </span>
                        </p>
                        </td>
                        <td width="65">
                        <p class="ne-p" id="ud0621505">
                        <span class="ne-text">
                        -2
                        </span>
                        <sup>
                        <span class="ne-text">
                            15
                        </span>
                        </sup>
                        </p>
                        </td>
                        <td width="116">
                        <p class="ne-p" id="ueea9dba8">
                        <span class="ne-text" style="color: rgb(23, 23, 23); font-size: 14px">
                        SHRT_MAX
                        </span>
                        </p>
                        </td>
                        <td width="69">
                        <p class="ne-p" id="u7c71be67">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            15
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                        <td width="133">
                        <p class="ne-p" id="uf2a6cd73">
                        <span class="ne-text" style="color: rgb(23, 23, 23); font-size: 14px">
                        USHRT_MAX
                        </span>
                        </p>
                        </td>
                        <td width="88">
                        <p class="ne-p" id="ub8c6351f">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            16
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="89">
                        <p class="ne-p" id="uc0f6b0af">
                        <span class="ne-text">
                        int
                        </span>
                        </p>
                        </td>
                        <td width="51">
                        <p class="ne-p" id="u5b370139">
                        <span class="ne-text">
                        4
                        </span>
                        </p>
                        </td>
                        <td width="115">
                        <p class="ne-p" id="u26691cdd">
                        <span class="ne-text">
                        INT_ MIN
                        </span>
                        </p>
                        </td>
                        <td width="65">
                        <p class="ne-p" id="链接e6">
                        <span class="ne-text">
                        -2
                        </span>
                        <sup>
                        <span class="ne-text">
                            31
                        </span>
                        </sup>
                        </p>
                        </td>
                        <td width="116">
                        <p class="ne-p" id="u32b1af6c">
                        <span class="ne-text">
                        INT_ MAX
                        </span>
                        </p>
                        </td>
                        <td width="69">
                        <p class="ne-p" id="u9cfabbcd">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            31
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                        <td width="133">
                        <p class="ne-p" id="链接08">
                        <span class="ne-text">
                        UINT_ MAX
                        </span>
                        </p>
                        </td>
                        <td width="88">
                        <p class="ne-p" id="uef683824">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            32
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="89">
                        <p class="ne-p" id="u19e34104">
                        <span class="ne-text">
                        long long
                        </span>
                        </p>
                        </td>
                        <td width="51">
                        <p class="ne-p" id="u976a7557">
                        <span class="ne-text">
                        8
                        </span>
                        </p>
                        </td>
                        <td width="115">
                        <p class="ne-p" id="链接2e">
                        <span class="ne-text">
                        LLONG_ MIN
                        </span>
                        </p>
                        </td>
                        <td width="65">
                        <p class="ne-p" id="ufc06a536">
                        <span class="ne-text">
                        -2
                        </span>
                        <sup>
                        <span class="ne-text">
                            63
                        </span>
                        </sup>
                        </p>
                        </td>
                        <td width="116">
                        <p class="ne-p" id="u0b860fea">
                        <span class="ne-text">
                        LLONG_ MAX
                        </span>
                        </p>
                        </td>
                        <td width="69">
                        <p class="ne-p" id="uce876b2e">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            63
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                        <td width="133">
                        <p class="ne-p" id="uc7e980a6">
                        <span class="ne-text">
                        ULLONG_ MAX
                        </span>
                        </p>
                        </td>
                        <td width="88">
                        <p class="ne-p" id="u4403f993">
                        <span class="ne-text">
                        +2
                        </span>
                        <sup>
                        <span class="ne-text">
                            64
                        </span>
                        </sup>
                        <span class="ne-text">
                        -1
                        </span>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <p class="ne-p" id="uc152367c" style="text-indent: 2em">
                    <span class="ne-text">
                    观察上表可以看出，最大值都有一个减1，这是为0保留一个空间。这些在头文件
                    </span>
                    <code class="ne-code">
                    <span class="ne-text">
                        &lt;climits&gt;
                    </span>
                    </code>
                    <span class="ne-text">
                    定义的常量都可以直接使用，但是名称比较难于记忆，一方面可以利用IDE编辑器的提示功能，另一方面也可以通过移位操作直接计算。总体来说，常见整型数据类型中，无论是有符号和无符号，char为8位，int为32位，long
                                long为64位。有符号类型包括正负，数值的绝对值少一位。
                    </span>
                    </p>
                    <div class="ne-quote">
                    <p class="ne-p" id="uf52f50e8">
                    <span class="ne-text">
                        C++对C语言兼容，C语言的函数库在C++中都可以使用。使用时可以采用C语言方式
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        #include&lt;limits.h&gt;
                        </span>
                    </code>
                    <span class="ne-text">
                        ；也可以采用C++方式，去掉文件后缀
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        .h
                        </span>
                    </code>
                    <span class="ne-text">
                        ，在文件名前加字母c，例如
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        #include&lt;climits&gt;
                        </span>
                    </code>
                    <span class="ne-text">
                        。
                    </span>
                    </p>
                    </div>
                    <p class="ne-p" id="u319a84e3" style="text-indent: 2em">
                    <span class="ne-text">
                    因为每种类型都有其存储范围，如果数值过大，无法在限定的空间表示，高位多出的部分就会被自动忽略，结果就可能会发生错误。这种现象被称为
                    </span>
                    <strong>
                    <span class="ne-text">
                        溢出
                    </span>
                    </strong>
                    <span class="ne-text">
                    或
                    </span>
                    <strong>
                    <span class="ne-text">
                        截断操作
                    </span>
                    </strong>
                    <span class="ne-text">
                    。因此在程序设计时，一定要确保对应的数据类型能够保证所有的可能值能被正确的存储。
                    </span>
                    </p>
                    <p class="ne-p" id="u8d1f26b0" style="text-indent: 2em; text-align: center">
                    <img class="ne-image" style="margin: 10px auto;min-width: 125px;" id="jrG8S" src="../assets/images/1673252217927-a4874223-3ebe-4735-a15c-7af426c69586.png" width="275"/>
                    </p>
                    <p class="ne-p" id="u0098de00" style="text-indent: 2em; text-align: center">
                    <span class="ne-text">
                    图2.2 溢出
                    </span>
                    </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="llpUJ"><span style="font-weight:bold;">代码2.4</span> 数据类型的截断<code>#include &lt;iostream&gt;
    #include &lt;bitset&gt;
    using namespace std;
    int main(){
        char a = 97;   
        cout&lt;&lt;bitset&lt;32&gt;(97)&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;8&gt;(a)&lt;&lt;endl;
        char c = 0x1061;					//0x开始表示一个十六进制数
        cout&lt;&lt;bitset&lt;32&gt;(0x1061)&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;8&gt;(c)&lt;&lt;endl;
        cout&lt;&lt;c&lt;&lt;endl;
        return 0;
    }</code></pre>
                    <table  border=1 class="ne-table" id="Z2FKm" style="width: 100%">
                    <tbody>
                    <tr style="height: 33px">
                        <td width="375">
                        <p class="ne-p" id="u2e4e82fd">
                        <strong>
                        <span class="ne-text">
                            样例输入
                        </span>
                        </strong>
                        </p>
                        </td>
                        <td width="375">
                        <p class="ne-p" id="u4f85cbe0">
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
                        <p class="ne-p" id="u3f6fd7c6">
                        <span class="ne-text">
                        (无）
                        </span>
                        </p>
                        </td>
                        <td width="375">
                        <p class="ne-p" id="u2ee51ce8">
                        <span class="ne-text">
                        00000000000000000000000001100001
                        </span>
                        </p>
                        <p class="ne-p" id="uc5b7c429">
                        <span class="ne-text">
                        01100001
                        </span>
                        </p>
                        <p class="ne-p" id="ue66f635d">
                        <span class="ne-text">
                        00000000000000000001000001100001
                        </span>
                        </p>
                        <p class="ne-p" id="ua4924ab8">
                        <span class="ne-text">
                        01100001
                        </span>
                        </p>
                        <p class="ne-p" id="u3840a1aa">
                        <span class="ne-text">
                        a
                        </span>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <ul class="ne-ul">
                    <li id="u8047dd28">
                    <span class="ne-text">
                        bitset是C++中的一个类，用于将值进行二进制表示，bitset&lt;N&gt;(V)中N表示二进制的位数，V表示需要处理的值。以上代码中将相同的值用不同的二进制位进行表示，帮助理解溢出和截断；
                    </span>
                    </li>
                    <li id="uaab13e40">
                    <span class="ne-text">
                        在C++中，0b开头表示二进制，0x开头表示十六进制，
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        0b
                        </span>
                    </code>
                    <span class="ne-text">
                        这种二进制字面量表示形式是从C++14开始引入的。因为16是2的4次幂，因此1位十六进制可以表示为4位二进制，例如0x1=0b0001，0x6=0b0110。当存在多位十六进制时，简单地将每一位十六进制转换为二进制，然后顺序拼接到一起即可，例如0x61可以表达为0b0110和0b0001的拼接，即0b01100001；
                    </span>
                    </li>
                    <li id="u6804c41a">
                    <span class="ne-text">
                        注意这里的字面常量97本质上是一个int整数，对应的二进制为0b1100001，而一个int整数所占的内存空间是32个二进制位。字符变量
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        a
                        </span>
                    </code>
                    <span class="ne-text">
                        只能存放1个字节，即8个二进制位，存储空间超限。所以这个时候就会发生截断操作。截断的规则：低位保留，高位舍弃。97&lt;256(1字节)存储大小，因此第9-31位的高位部分全部为0，截断后
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        a
                        </span>
                    </code>
                    <span class="ne-text">
                        的值依旧是97。
                    </span>
                    </li>
                    <li id="链接e2">
                    <span class="ne-text">
                        同理，将变量
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        c
                        </span>
                    </code>
                    <span class="ne-text">
                        赋值为十六进制0x1061时，高位部分0x1000超出1字节的表示范围，被自动截断。剩余部分0x61等于十进制的97，即小写字母a的ASCII码，因此变量
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        c
                        </span>
                    </code>
                    <span class="ne-text">
                        会输出字符a。
                    </span>
                    </li>
                    </ul>
                    <h3 id="nCbZA">
                    <span class="ne-text">
                    知识点：T221-T222
                    </span>
                    </h3>
                    <table  border=1 class="ne-table" id="HA0km" style="width: 100%">
                    <tbody>
                    <tr class="table-header">
                        <td width="58">
                        <p class="ne-p" id="ucf52530b">
                        <span class="ne-text">
                        索引
                        </span>
                        </p>
                        </td>
                        <td width="558">
                        <p class="ne-p" id="uff8fe460" style="text-align: center">
                        <span class="ne-text">
                        要点
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="u30c9527c">
                        <span class="ne-text">
                        正链
                        </span>
                        </p>
                        </td>
                        <td width="60">
                        <p class="ne-p" id="ud8eff4a8">
                        <span class="ne-text">
                        反链
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="58">
                        <p class="ne-p" id="ud7d5f4db">
                        <span class="ne-text">
                        T221
                        </span>
                        </p>
                        </td>
                        <td width="558">
                        <p class="ne-p" id="uef9cc8e7">
                        <span class="ne-text">
                        理解整型的二进制存储形式；数值范围与存储空间的关系；溢出和截断产生的原因；掌握有符号整型和无符号整型（unsigned）的区别。
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="u27e55e6f">
                        <br/>
                        </p>
                        </td>
                        <td width="60">
                        <p class="ne-p" id="u090a2274">
                        <a class="ne-link" data-href="#zdu8o" href="#zdu8o">
                        <span class="ne-text">
                            T253
                        </span>
                        </a>
                        <span class="ne-text">
                        ,
                        </span>
                        <a class="ne-link" data-href="#p3aHU" href="#p3aHU">
                        <span class="ne-text">
                            T2A2
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td width="58">
                        <p class="ne-p" id="u4e4e237f">
                        <span class="ne-text">
                        T222
                        </span>
                        </p>
                        </td>
                        <td width="558">
                        <p class="ne-p" id="u91f51513">
                        <span class="ne-text">
                        理解字面量0b和0x的表示方法，掌握二进制与十六进制的关系
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        </td>
                        <td width="60">
                        <p class="ne-p" id="u49200c32">
                        <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                        <span class="ne-text">
                            T271
                        </span>
                        </a>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <h2 id="bMmIb">
                    <span class="ne-text">
                    2.2 整数N进制转十进制
                    </span>
                    </h2>
                    <p class="ne-p" id="u6590ea0f" style="text-indent: 2em">
                    <span class="ne-text">
                    所谓十进制就是逢十进一，二进制就是逢二进一，进一步泛化，N进制就是逢N进一。可以用指数求和的形式表示一个整数，例如1978=1*10
                    </span>
                    <sup>
                    <span class="ne-text">
                        3
                    </span>
                    </sup>
                    <span class="ne-text">
                    +9*10
                    </span>
                    <sup>
                    <span class="ne-text">
                        2
                    </span>
                    </sup>
                    <span class="ne-text">
                    +7*10
                    </span>
                    <sup>
                    <span class="ne-text">
                        1
                    </span>
                    </sup>
                    <span class="ne-text">
                    +8*10
                    </span>
                    <sup>
                    <span class="ne-text">
                        0
                    </span>
                    </sup>
                    <span class="ne-text">
                    。对于一个二进制可以用同样的办法转换为十进制，例二进制0b10110可以表示为1*2
                    </span>
                    <sup>
                    <span class="ne-text">
                        4
                    </span>
                    </sup>
                    <span class="ne-text">
                    +0*2
                    </span>
                    <sup>
                    <span class="ne-text">
                        3
                    </span>
                    </sup>
                    <span class="ne-text">
                    +1*2
                    </span>
                    <sup>
                    <span class="ne-text">
                        2
                    </span>
                    </sup>
                    <span class="ne-text">
                    +1*2
                    </span>
                    <sup>
                    <span class="ne-text">
                        1
                    </span>
                    </sup>
                    <span class="ne-text">
                    +0*2
                    </span>
                    <sup>
                    <span class="ne-text">
                        0
                    </span>
                    </sup>
                    <span class="ne-text">
                    =22。N进制数都可以采用这种方法转换为十进制。
                    </span>
                    </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="qfy7Z"><span style="font-weight:bold;">代码2.5</span> 二进制转十进制<code>#include &lt;iostream&gt;
    #include &lt;bitset&gt;
    using namespace std;
    int main(){
        unsigned int c = 0b10110;   		//0b开始表示一个二进制数
        cout&lt;&lt;c&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(c)&lt;&lt;endl;
        return 0;
    }</code></pre>
                    <table border=1 class="ne-table" id="MEoCj" style="width: 100%">
                    <tbody>
                    <tr style="height: 33px">
                        <td width="375">
                        <p class="ne-p" id="u7cbef09b">
                        <strong>
                        <span class="ne-text">
                            样例输入
                        </span>
                        </strong>
                        </p>
                        </td>
                        <td width="375">
                        <p class="ne-p" id="u5a1ffa8d">
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
                        <p class="ne-p" id="u77917b91">
                        <span class="ne-text">
                        （无）
                        </span>
                        </p>
                        </td>
                        <td width="375">
                        <p class="ne-p" id="u7fdc3f82">
                        <span class="ne-text">
                        22 00010110
                        </span>
                        </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    <ul class="ne-ul">
                    <li id="u5491b818">
                    <span class="ne-text">
                        第6行第一个输出，因为没有指定进制，按照默认的十进制进行输出，得到结果22。第二个输出
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        bitset&lt;8&gt;(c)
                        </span>
                    </code>
                    <span class="ne-text">
                        表示把变量
                    </span>
                    <code class="ne-code">
                        <span class="ne-text">
                        c
                        </span>
                    </code>
                    <span class="ne-text">
                        按照8位二进制进行表示，因此输出结果为 00010110。这种书写形式比较古怪，暂时不用深究，按照规定的形式进行书写即可得到需要的结果。
                    </span>
                    </li>
                    </ul>
                    <p class="ne-p" id="ud95d5ebd" style="text-indent: 2em">
                    <span class="ne-text">
                    在线评测网站上的题目经常出现数值范围为-10
                    </span>
                    <sup>
                    <span class="ne-text">
                        9
                    </span>
                    </sup>
                    <span class="ne-text">
                    ~10
                    </span>
                    <sup>
                    <span class="ne-text">
                        9
                    </span>
                    </sup>
                    <span class="ne-text">
                    或-10
                    </span>
                    <sup>
                    <span class="ne-text">
                        18
                    </span>
                    </sup>
                    <span class="ne-text">
                    ~10
                    </span>
                    <sup>
                    <span class="ne-text">
                        18
                    </span>
                    </sup>
                    <span class="ne-text">
                    等类似的数值范围说明。但是数据类型根据内存占用位数只能比较容易获取二进制表示的范围，不好和这些数值范围做比较。可以通过估算法确定采用何种数据类型。这种方法在线评测的时候经常会用得到。
                    </span>
                    </p>
                    <div class="ne-quote">
                    <p class="ne-p" id="ud5338f4a">
                    <span class="ne-text">
                        估算法：因为2
                    </span>
                    <sup>
                        <span class="ne-text">
                        10
                        </span>
                    </sup>
                    <span class="ne-text">
                        =1024约等于10
                    </span>
                    <sup>
                        <span class="ne-text">
                        3
                        </span>
                    </sup>
                    <span class="ne-text">
                        ，也就是说每10位二进制就可以表示3位十进制。因此int（31位）可以保留10
                    </span>
                    <sup>
                        <span class="ne-text">
                        9
                        </span>
                    </sup>
                    <span class="ne-text">
                        以下的整数，long long（63位）可以保留10
                    </span>
                    <sup>
                        <span class="ne-text">
                        18
                        </span>
                    </sup>
                    <span class="ne-text">
                        以下的整数。
                    </span>
                    </p>
                    </div>
                    <h3 id="wfiRs">
                    <span class="ne-text">
                    知识点：T223-T224
                    </span>
                    </h3>
                    <table border=1 class="ne-table" id="vWEJz" style="width: 100%">
                    <tbody>
                    <tr class="table-header">
                        <td width="58">
                        <p class="ne-p" id="u9b62f6b6">
                        <span class="ne-text">
                        索引
                        </span>
                        </p>
                        </td>
                        <td width="547">
                        <p class="ne-p" id="udbdd0d24" style="text-align: center">
                        <span class="ne-text">
                        要点
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="u4a44203c">
                        <span class="ne-text">
                        正链
                        </span>
                        </p>
                        </td>
                        <td width="73">
                        <p class="ne-p" id="ud0b6f46c">
                        <span class="ne-text">
                        反链
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td rowspan="2" width="58">
                        <p class="ne-p" id="u93e74b02">
                        <span class="ne-text">
                        T223
                        </span>
                        </p>
                        </td>
                        <td width="547">
                        <p class="ne-p" id="u201b86b9">
                        <span class="ne-text">
                        掌握N进制转换为十进制的算法
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        <p class="ne-p" id="ubd9d1d0d">
                        <br/>
                        </p>
                        </td>
                        <td width="73">
                        <p class="ne-p" id="u5a8dc33d">
                        <br/>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="681">
                        <p class="ne-p" id="u5057d2d1">
                        
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161695" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161695" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX206)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td rowspan="2" width="58">
                        <p class="ne-p" id="uc9e8b215">
                        <span class="ne-text">
                        T224
                        </span>
                        </p>
                        </td>
                        <td width="547">
                        <p class="ne-p" id="u842eb47a">
                        <span class="ne-text">
                        能够根据题目给定的数值范围，通过估算法确定整型的数据类型
                        </span>
                        </p>
                        </td>
                        <td width="61">
                        </td>
                        <td width="73">
                        <p class="ne-p" id="u2ddc1526">
                        <span class="ne-text">
                        T216
                        </span>
                        </p>
                        </td>
                    </tr>
                    <tr style="height: 33px">
                        <td colspan="3" width="681">
                        <p class="ne-p" id="u703be5b3">
                        
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161696" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161696" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX207)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161698" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161698" target="_blank">
                        <span class="ne-text" style="font-size: 16px">
                            (LX210)
                        </span>
                        </a>
                        <span class="ne-text" style="font-size: 16px">
                        </span>
                        <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" target="_blank">
                    <span class="ne-text" style="font-size: 16px">
                        (LX213)
                    </span>
                    </a>
                    <span class="ne-text" style="font-size: 16px">
                    </span>
                    </p>
                    </td>
                </tr>
                </tbody>
                </table>
                <h2 id="JUmTe">
                <span class="ne-text">
                2.3 整数十进制转换为N进制
                </span>
                </h2>
                <p class="ne-p" id="uc734ec10" style="text-indent: 2em">
                <span class="ne-text">
                整数十进制转换为二进制采用的经典方法称为除2取余法。
                </span>
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
                具体做法是：用2整除十进制整数，可以得到一个商和余数；再用2去除商，又会得到一个商和余数，如此进行，直到商为0停止。最后把先得到的余数作为二进制数的低位有效位，后得到的余数作为二进制数的高位有效位，依次排列起来，就得到了对应的二进制
                </span>
                <strong>
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
                    。
                </span>
                </strong>
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
                除N取余法可以将十进制转换为N进制。
                </span>
                </p>
                <img id="uecq5" class="img-70" src="../assets/images/1671074417433-e94c172f-2694-4129-92a5-84a8792b90e1.jpeg"/>
                <p class="ne-p" id="ub89d8bdb" style="text-indent: 2em; text-align: center">
                <span class="ne-text">
                图2.4
                            整数150转换为二进制10010110
                </span>
                </p>
                <h3 id="ru7rn">
                <span class="ne-text">
                知识点：T225
                </span>
                </h3>
                <table border=1 class="ne-table" id="IXgs8" style="width: 100%">
                <tbody>
                <tr class="table-header">
                    <td width="58">
                    <p class="ne-p" id="u71759d48">
                    <span class="ne-text">
                    索引
                    </span>
                    </p>
                    </td>
                    <td width="569">
                    <p class="ne-p" id="u9e402ca1" style="text-align: center">
                    <span class="ne-text">
                    要点
                    </span>
                    </p>
                    </td>
                    <td width="61">
                    <p class="ne-p" id="uddbb1a21">
                    <span class="ne-text">
                    正链
                    </span>
                    </p>
                    </td>
                    <td width="56">
                    <p class="ne-p" id="u8e3ecd1e">
                    <span class="ne-text">
                    反链
                    </span>
                    </p>
                    </td>
                </tr>
                <tr style="height: 33px">
                    <td rowspan="2" width="58">
                    <p class="ne-p" id="ue15b78ce">
                    <span class="ne-text">
                    T225
                    </span>
                    </p>
                    </td>
                    <td width="569">
                    <p class="ne-p" id="ud54bd2df">
                    <span class="ne-text">
                    掌握十进制转换为N进制的算法
                    </span>
                    </p>
                    </td>
                    <td width="61">
                    <p class="ne-p" id="ud8e683a7">
                    <br/>
                    </p>
                    </td>
                    <td width="56">
                    <p class="ne-p" id="uf1dbc58b">
                    <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#IcjHC" href="ch4#IcjHC">
                    <span class="ne-text">
                        T471
                    </span>
                    </a>
                    </p>
                    </td>
                </tr>
                <tr style="height: 33px">
                    <td colspan="3" width="686">
                    <p class="ne-p" id="u2bf85fb9">
                    
                    <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161697" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161697" target="_blank">
                    <span class="ne-text" style="font-size: 16px">
                        (LX208)
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
                

                <!-- Section 3 -->
                <div class="self-section">
                    <h1 id="u1dI9">
                    <span class="ne-text">
                    3. 浮点类型
                    </span>
                    </h1>
            <h2 id="ldUc5">
            <span class="ne-text">
            3.1 浮点数的内存表示
            </span>
            </h2>
            <p class="ne-p" id="u79c728ea" style="text-indent: 2em">
            <span class="ne-text">
            浮点数就是所谓的小数，一个float类型的对象占据4个字节共32比特。这32个比特以类似于科学计数法的形式来表达一个浮点数，即浮点数=(1+有效数值)*2
            </span>
            <sup>
            <span class="ne-text">
                指数
            </span>
            </sup>
            <span class="ne-text">
            。按照IEEE
                        754标准，如图2.5所示，最高的1位(第31位)用做符号位，接着的8位(第23-30位)是指数E，剩下的23位(第0-22位)为有效数字M。例如3.14159=1.570795*2
            </span>
            <sup>
            <span class="ne-text">
                1
            </span>
            </sup>
            <span class="ne-text">
            ，其中0.570795表示有效数值，记录了精度信息，2
            </span>
            <sup>
            <span class="ne-text">
                1
            </span>
            </sup>
            <span class="ne-text">
            中的1表示指数。
            </span>
            </p>
            <img id="LGeuD" src="../assets/images/1657069374289-de1cb485-8ecc-4aea-9acd-5c31b8c8e2eb.jpeg" class="img-70"/>
            <p class="ne-p" id="u67f89d88" style="text-align: center">
            <span class="ne-text">
            图2.5 float类型的内存表示
            </span>
            </p>
            <p class="ne-p" id="u0a0062d8" style="text-indent: 2em">
            <span class="ne-text">
            按照这样的表示方法，浮点数的表示精度是有限的，float类型大约能够存储小数点后6位精度的十进制数。double类型为64位，它的表示精度更大一些，大约为12-15位精度。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="u8cb1e78b">
            <span class="ne-text">
                初学者不需要掌握详细信息，只要知道浮点数的内存分布方式与整型不同即可。
            </span>
            </p>
            </div>
            <p class="ne-p" id="u3835d70d" style="text-indent: 2em">
            <span class="ne-text">
            当定义一个变量时，例如
            </span>
            <code class="ne-code">
            <span class="ne-text">
                int a=1;
            </span>
            </code>
            <span class="ne-text">
            。根据数据类型在内存中分配对应的空间，
            </span>
            <code class="ne-code">
            <span class="ne-text">
                int
            </span>
            </code>
            <span class="ne-text">
            类型分配4字节空间。然后将变量
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a
            </span>
            </code>
            <span class="ne-text">
            和这个空间绑定。按照整型的存储标准，将1转换为二进制，存储到对应的空间中。当后继代码使用
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a
            </span>
            </code>
            <span class="ne-text">
            时，将读取这块空间，并按照整型的存储格式进行解读。以下代码通过占位符将整型变量按照浮点数方式解读，将浮点数按照整型方式进行解读，虽然初始值都为1，但是得到的结果都是0，这就是存储内容和解读方式不对应的原因。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="aoTrt"><span style="font-weight:bold;">代码2.6</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main()
    {
        float a=1;
        int b = 1;
        printf("%d\n",a);
        printf("%f\n",b);
    }</code></pre>
            <table border=1 class="ne-table" id="TxhkQ" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="u6da96323">
                <span class="ne-text">
                样例输入
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="udf672f8f">
                <span class="ne-text">
                样例输出
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="u89481df1">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u51db5102">
                <span class="ne-text">
                0
                </span>
                </p>
                <p class="ne-p" id="ua2cba6a8">
                <span class="ne-text">
                0.000000
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <div class="ne-quote">
            <p class="ne-p" id="u015a0101">
            <span class="ne-text">
                对于初学者，不需要掌握为什么输出结果是0，只要清楚不同数据类型的内存结构不同，将一种类型强制按另外一种类型解析是错误的。
            </span>
            </p>
            </div>
            <h3 id="dnRYf">
            <span class="ne-text">
            知识点：T231-T232
            </span>
            </h3>
            <table border=1 class="ne-table" id="sPyWt" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ub5945d5e">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="574">
                <p class="ne-p" id="udc0e70ea" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u462eb777">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="uc92d5630">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u165bf81b">
                <span class="ne-text">
                T231
                </span>
                </p>
                </td>
                <td width="574">
                <p class="ne-p" id="u7511a072">
                <span class="ne-text">
                整型与浮点型的存储格式不同，因此解析方式也不同
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u4548bed6">
                <a class="ne-link" data-href="#MOJpK" href="#MOJpK">
                <span class="ne-text">
                    T215
                </span>
                </a>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u9d1d7bf6">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u56f8e38d">
                <span class="ne-text">
                T232
                </span>
                </p>
                </td>
                <td width="574">
                <p class="ne-p" id="u30f70170">
                <span class="ne-text">
                浮点数存储的精度有限
                </span>
                </p>
                </td>
                <td width="61">
                </td>
                <td width="56">
                <p class="ne-p" id="u793d2b92">
                <a class="ne-link" data-href="#iecae" href="#iecae">
                <span class="ne-text">
                    T234
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="a0Im0">
            <span class="ne-text">
            3.2 纯小数十进制转换为二进制
            </span>
            </h2>
            <p class="ne-p" id="u1f8b1f4b" style="text-indent: 2em">
            <span class="ne-text">
            纯小数十进制转换为二进制采用的经典方法称为乘2取整法。具体做法是：用2乘十进制小数，将积的整数部分取出，再用2乘余下的小数部分，又得到一个积，再将积的整数部分取出，如此进行，直到积中的小数部分为零，或者达到所要求的精度为止。
            </span>
            <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
            最后把先得到的余数作为二进制数的高位有效位，后得到的余数作为二进制数的低位有效位，依次排列起来，就得到了对应的二进制
            </span>
            <strong>
            <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 14px">
                。连接为二进制的时候从左向右，这与除2取整法是相反的。
            </span>
            </strong>
            </p>
            <img id="mG8iw" class="img-70" src="../assets/images/1671004932320-505a0d49-e3e9-48b2-94d5-5e59308b243d.jpeg"/>
            <p class="ne-p" id="u92903fa0" style="text-indent: 2em; text-align: center">
            <span class="ne-text">
            图2.6
                        纯小数0.570795转换为二进制0.10010
            </span>
            </p>
            <p class="ne-p" id="ue7a6941f" style="text-indent: 2em">
            <span class="ne-text">
            可以尝试用该方法转换其他纯小数，就会发现除了2
            </span>
            <sup>
            <span class="ne-text">
                -n
            </span>
            </sup>
            <span class="ne-text">
            或多个2
            </span>
            <sup>
            <span class="ne-text">
                -n
            </span>
            </sup>
            <span class="ne-text">
            之和外，其他数值转换为二进制小数时都是无限循环小数，而每个浮点数在计算机中的表示一定是有精度限制。由此可以得到结论，
            </span>
            <strong>
            <span class="ne-text">
                绝大部分十进制小数在计算机中都无法精确存储
            </span>
            </strong>
            <span class="ne-text">
            。例如：图2.6中二进制小数0.10010代表的十进制可以为1*
            </span>
            <span class="ne-math" id="bXBof">
            <img src="../assets/images/6f4289e55729c85ad321222e8c28c53f.svg"/>
            </span>
            <span class="ne-text">
            +1*
            </span>
            <span class="ne-math" id="IFE1b">
            <img src="../assets/images/3b8dc43f0f0d0cc8f668c97acc0bc460.svg"/>
            </span>
            <span class="ne-text">
            =0.5625，与原始输入的小数0.570795存在精度差。对于指定的浮点数据类型，该数据类型的有效数值部分的二进制位越长，这个精度差就会越小。但无限的二进制转换结果和有限的存储空间导致精度差必然存在。
            </span>
            </p>
            <p class="ne-p" id="ucaa3b02c" style="text-indent: 2em">
            <span class="ne-text">
            由此，在程序设计中存在一个奇异的特性，浮点数无法精确比较。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="yJitk"><span style="font-weight:bold;">代码2.7</span> 浮点数的精确比较<code>#include &lt;iostream&gt;
    #include &lt;cmath&gt;							//函数fabs的头文件
    using namespace std;
    int main()
    {
        float a=0.9876;
        int b = 9876;
        cout&lt;&lt;(a==0.9876)&lt;&lt;endl;				//错误浮点数比较方式
        cout&lt;&lt;(fabs(a-0.9876)&lt;0.0001)&lt;&lt;endl;	//正确浮点数比较方式
        cout&lt;&lt;(b==9876)&lt;&lt;endl;					//整型因为能精确存储，可以精确比较
    }</code></pre>
            <table border=1 class="ne-table" id="n3awj" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="uc77584b1">
                <span class="ne-text">
                样例输入
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="uebec94df">
                <span class="ne-text">
                样例输出
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="uf2676469">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u1061f1eb">
                <span class="ne-text">
                0
                </span>
                </p>
                <p class="ne-p" id="u4e7add52">
                <span class="ne-text">
                1
                </span>
                </p>
                <p class="ne-p" id="u0a79a430">
                <span class="ne-text">
                1
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u24bc1f60" style="text-indent: 2em">
            <span class="ne-text">
            从输出结果中可以看到，C++中0表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                false
            </span>
            </code>
            <span class="ne-text">
            ，1表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                true
            </span>
            </code>
            <span class="ne-text">
            。相同的浮点数，因为精度问题，在内存中存储的内容可能会有细微差别，而等于运算是一种精确的比较，导致第8行输出
            </span>
            <code class="ne-code">
            <span class="ne-text">
                false
            </span>
            </code>
            <span class="ne-text">
            。按照科学计算的规定，第9行才是浮点数的正确比较方式，其中的0.0001是用户自定义的误差阈值，根据问题需要的精度确定。总体来说，要比给定的精度更高一位精度，例如题目如果给出数值的精度为10
            </span>
            <sup>
            <span class="ne-text">
                -3
            </span>
            </sup>
            <span class="ne-text">
            ，则阈值应该设定为10
            </span>
            <sup>
            <span class="ne-text">
                -4
            </span>
            </sup>
            <span class="ne-text">
            。第10行中是两个整数的比较，整型能精确存储，因此可以精确比较。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="ud68a51f7">
            <span class="ne-text">
                第9行的误差比较法是计算机中进行浮点数相等判断的正确方法，必须掌握。
            </span>
            </p>
            </div>
            <h3 id="iecae">
            <span class="ne-text">
            知识点：T233-T234
            </span>
            </h3>
            <table border=1 class="ne-table" id="zT57u" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u261ec392">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="540">
                <p class="ne-p" id="uae33ede1" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="74">
                <p class="ne-p" id="ubd8d2718">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="74">
                <p class="ne-p" id="u3c8b6581">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u10fff67d">
                <span class="ne-text">
                T233
                </span>
                </p>
                </td>
                <td width="540">
                <p class="ne-p" id="u82da6542">
                <span class="ne-text">
                掌握十进制纯小数转换为二进制的算法，即乘2取整法
                </span>
                </p>
                </td>
                <td width="74">
                <p class="ne-p" id="链接ac">
                <br/>
                </p>
                </td>
                <td width="74">
                <p class="ne-p" id="u57c9a134">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="688">
                <p class="ne-p" id="ua4fb7c3f">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161699" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161699" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX209)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u236c6051">
                <span class="ne-text">
                T234
                </span>
                </p>
                </td>
                <td width="540">
                <p class="ne-p" id="uf4e8ca26">
                <span class="ne-text">
                绝大部分十进制浮点数无法精确存储，因此无法精确比较。必须掌握浮点数的误差比较法，阈值要比给定数值的精度更高一位。
                </span>
                </p>
                </td>
                <td width="74">
                <p class="ne-p" id="u285a4f8b">
                <a class="ne-link" data-href="#dnRYf" href="#dnRYf">
                <span class="ne-text">
                    T232
                </span>
                </a>
                </p>
                </td>
                <td width="74">
                <p class="ne-p" id="u3bf4260d">
                <a class="ne-link" data-href="#GYNKe" href="#GYNKe">
                <span class="ne-text">
                    T291
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="688">
                <p class="ne-p" id="uc97bf666">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX211)
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


                <!-- Section 4 -->
                <div class="self-section">
                    <h1 id="BtkHI">
            <span class="ne-text">
            4. 其他数据类型
            </span>
            </h1>
            <h2 id="Ebe3n">
            <span class="ne-text">
            4.1 字符
            </span>
            </h2>
            <p class="ne-p" id="ua3c17020" style="text-indent: 2em">
            <span class="ne-text">
            计算机中的所有内容都是以二进制形式进行存储的，数值类型可以转换为二进制存储到计算机中，但是字符是不可以的。为了存储字符，只能先把字符映射成数值，把读到的数值按照字符进行理解。国际统一的字符映射表称为ASCII表。
            </span>
            </p>
            <p class="ne-p" id="uca996135" style="text-indent: 2em; text-align: center">
            <span class="ne-text">
            表2.3
                        ACSII码表
            </span>
            </p>
            <table border=1 class="ne-table" id="CBksz" style="text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="udd7ca7b2" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    ASCII值
                </span>
                </strong>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u5fcde6ab" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    控制字符
                </span>
                </strong>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ufe56ee85" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    ASCII值
                </span>
                </strong>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接d7" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    控制字符
                </span>
                </strong>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u731f05aa" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    ASCII值
                </span>
                </strong>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u8f50f980" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    控制字符
                </span>
                </strong>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u4ccafc34" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    ASCII值
                </span>
                </strong>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u8e73505c" style="text-align: left">
                <strong>
                <span class="ne-text" style="color: rgb(0, 108, 191); font-size: 13px">
                    控制字符
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uc30fa41d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                0
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u1196b1c4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                NUT
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u66a7fc49" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                32
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u48b84191" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                (space)
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u5bcbc16b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                64
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u2a495913" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                @
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6efa506d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                96
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u63ac0b49" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                、
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ufa316af1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                1
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ubb8bb742" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                SOH
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue0bcdda5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                33
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u457fa01a" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                !
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接28" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                65
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ufa83fcc1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                A
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uefdbb2e7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                97
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua811d939" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                a
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue1aa7c01" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                2
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u62b7f829" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                STX
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u0f7bcb77" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                34
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ub53da1af" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                "
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6e8aadcc" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                66
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u99cb2ddb" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                B
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u3c138d9e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                98
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u062db6e3" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                b
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u1f491acd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                3
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua84c3797" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ETX
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6ac5e08d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                35
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ufda89fb6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                #
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub92ad35b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                67
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u5280b875" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                C
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="udcb8dea5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                99
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u8fe71413" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                c
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u84e1a263" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                4
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ueeeda7a4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                EOT
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u96e2d772" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                36
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u44dd58bc" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                $
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u356cb5fe" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                68
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ud43ede31" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                D
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u443a5462" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                100
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua63b28e2" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                d
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub34efb08" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                5
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u9877fff7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ENQ
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ufdd682c7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                37
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u3feb1c90" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                %
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ud2755be3" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                69
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua91f8140" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                E
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ufddc6c34" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                101
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u9218ac55" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                e
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6e5b5c8c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                6
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ueda09787" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ACK
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue6eb3e6a" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                38
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uf1743380" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                &amp;
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u91ea6948" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                70
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u7bd6ef1d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                F
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u0a7f89b6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                102
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接14" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                f
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uc35548ce" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                7
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u6c23aa86" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                BEL
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u4d7ed818" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                39
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u3326e0c3" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ,
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub07f4261" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                71
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u40ac1c1b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                G
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue96d25a0" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                103
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u325da08d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                g
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接55" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                8
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接78" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                BS
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u9878c4ff" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                40
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ud2628ee5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                (
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接36" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                72
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u99271d94" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                H
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u905f2e8e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                104
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u52fdf947" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                h
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u2fd6adc8" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                9
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接67" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                HT
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u2b941cfd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                41
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接35" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                )
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub675bef5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                73
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u95250cf4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                I
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接a2" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                105
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ufab87fdd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                i
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u30ef225c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                10
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u5549e172" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                LF
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub9e33d8c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                42
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uac6dc88e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                *
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接7f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                74
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ufd61ae29" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                J
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ucd693d6f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                106
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ubc893726" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                j
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue9a74eac" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                11
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u88ec5c6f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                VT
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u93f648bc" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                43
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uf40bf5c1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                +
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u01f8750d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                75
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uaa12d75f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                K
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u2c7143d8" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                107
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uaafd64e1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                k
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="ueb858d77" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                12
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="u326dba66" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                FF
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="udba59991" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                44
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="ub10accb7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ,
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="ub6f67deb" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                76
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="ua0176ced" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                L
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="u0e4a2286" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                108
                </span>
                </p>
                </td>
                <td style="background-color: rgb(245, 245, 245)" width="93">
                <p class="ne-p" id="udc86eac6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                l
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u780e3f88" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                13
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u32420fcd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                CR
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uf68c0431" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                45
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u8b8444df" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                -
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u63aa55ed" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                77
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u6aa67886" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                M
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u1d220098" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                109
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ud7f3ac14" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                m
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="udfc4cae0" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                14
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua45bb399" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                SO
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u1f3af060" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                46
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u87f0c2aa" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                .
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ud02ce35e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                78
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u30379b32" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                N
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u456a7f6f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                110
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="udc9b4e5e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                n
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u5f6f4747" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                15
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u66264ffb" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                SI
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u9da4eaef" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                47
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua55a5ebc" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                /
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u47a25b1a" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                79
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接b6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                O
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u18b2327f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                111
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u25beffb0" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                o
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u4bb8bb47" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                16
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接27" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                DLE
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub72b81ec" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                48
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ub2bb3ca3" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                0
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uf4e61227" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                80
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u12c0bcbd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                P
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u28abf2d3" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                112
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u43904b64" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                p
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ud26127ad" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                17
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u6c26dde5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                DCI
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6ae6fddd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                49
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u5b9bf6e6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                1
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ufba0fba6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                81
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u6a0a2326" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                Q
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u1ff458ca" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                113
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uc574c4f5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                q
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u74d10fff" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                18
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ud8b560af" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                DC2
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接55" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                50
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u61b823d4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                2
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u7edf70a8" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                82
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="udc509723" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                R
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6ec85124" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                114
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uc2eb3447" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                r
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u1b75aff8" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                19
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ueacc78a5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                DC3
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u97daf413" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                51
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接c8" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                3
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uf9eaac57" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                83
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uf0a29683" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                S
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="链接14" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                115
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u926bef4d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                s
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub09752ab" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                20
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u0553aba1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                DC4
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uf65d2502" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                52
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u183b9e17" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                4
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uaff736f2" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                84
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u6dbb00bb" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                T
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uafa3779a" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                116
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uab708a1d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                t
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u0602b5a1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                21
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u32b4b67f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                NAK
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u66a608bd" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                53
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ua4a229b4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                5
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue5bbf1e1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                85
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uc03332dc" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                U
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u9bb18ba9" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                117
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ue838263b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                u
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u9b8da063" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                22
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ub883efaa" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                SYN
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u4b95bb95" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                54
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接ce" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                6
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u5b3db411" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                86
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u08459ea9" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                V
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="udde9eaca" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                118
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ucda11860" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                v
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u68f4bfa6" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                23
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ud59a5c99" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                TB
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u4925df94" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                55
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u3c640a67" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                7
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u7e2de2a1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                87
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u8908c663" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                W
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u5ebeea3e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                119
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ueae09d23" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                w
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u97f096fe" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                24
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u2c8b8924" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                CAN
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u69fe02aa" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                56
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ue47fb4ba" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                8
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ue7d5274d" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                88
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uf2aae8e9" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                X
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub7bebc26" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                120
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u5d67da10" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                x
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u0fe9e402" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                25
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u4c68b61b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                EM
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6a12ee9b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                57
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uada3b1a7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                9
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u72d63129" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                89
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ufd202eaf" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                Y
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ud49991a4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                121
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ubc34a544" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                y
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u9b313134" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                26
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u2bba0591" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                SUB
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u5cba5a42" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                58
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ub146c2b7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                :
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u73652d14" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                90
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u53dd6a0f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                Z
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uf36c5c43" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                122
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u541aab51" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                z
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u86c601d5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                27
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u1cf7e806" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ESC
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u4e45d93c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                59
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u637f0cd1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ;
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u6028ff5b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                91
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u30012c0b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                [
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ued3a06bb" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                123
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uabf2b342" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                {
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u7e9a17fb" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                28
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u5c4cbe2b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                FS
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u257adbde" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                60
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ufc53325b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                &lt;
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u44a4b620" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                92
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u9ab8ecf7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                \
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uebedc1a7" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                124
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ub336330f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                |
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uca171689" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                29
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ub2ecdd31" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                GS
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u80d4a346" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                61
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u773f0e1c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                =
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u1ad008e5" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                93
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u7e21fcb9" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ]
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u019a6071" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                125
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u4a3a2add" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                }
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u0dc9ded3" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                30
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u866cb0a4" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                RS
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u07900e74" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                62
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u7cd1d57c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                &gt;
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ub2586cfc" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                94
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="uabd38b1f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ^
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="ubc4de64a" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                126
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u02a51aaa" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                `
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u01e8c212" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                31
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u14dfe63f" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                US
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="u189a4fc1" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                63
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="链接6e" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                ?
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uf1e2d20b" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                95
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="u067a7d6c" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                _
                </span>
                </p>
                </td>
                <td style="background-color: rgb(244, 244, 244)" width="93">
                <p class="ne-p" id="uee5cbb91" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                127
                </span>
                </p>
                </td>
                <td width="93">
                <p class="ne-p" id="ucce8cf70" style="text-align: left">
                <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 13px">
                DEL
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u7489ad4f" style="text-indent: 2em">
            <span class="ne-text">
            只需要知道这个表的存在，了解每个字符在计算机中实际上是一个整数。并不需要记住每个字符对应的数值。但以下规律是需要掌握。
            </span>
            </p>
            <ul class="ne-ul">
            <li id="u00ab7bc4">
            <span class="ne-text">
                数字字符是连续的，小写字符是连续的，大写字符是连续的，但是大写和小写字符是不连续的。
            </span>
            </li>
            <li id="u189fcaf2">
            <span class="ne-text">
                一对匹配的括号，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                ()
                </span>
            </code>
            <span class="ne-text">
                ,
            </span>
            <code class="ne-code">
                <span class="ne-text">
                []
                </span>
            </code>
            <span class="ne-text">
                ,
            </span>
            <code class="ne-code">
                <span class="ne-text">
                {}
                </span>
            </code>
            <span class="ne-text">
                ,
            </span>
            <code class="ne-code">
                <span class="ne-text">
                &lt;&gt;
                </span>
            </code>
            <span class="ne-text">
                ,ASCII码值相差不超过2。
            </span>
            </li>
            <li id="u43b9dea9">
            <span class="ne-text">
                对于一个字符，可以通过加减运算转换为另外一个字符，两个字符相减可以得到二者之间在ASCII码表上的差距，但是两个字符相加是没有物理含义的。
            </span>
            </li>
            </ul>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="ynwTI"><span style="font-weight:bold;">代码2.8</span> 小写转大写<code>#include &lt;iostream&gt;
    using namespace std;
    int main()
    {
        char  b = 'b';
        cout&lt;&lt;b&lt;&lt;", "&lt;&lt;(int)b&lt;&lt;endl;
        b = b-'a'+'A';
        cout&lt;&lt;b&lt;&lt;", "&lt;&lt;(int)b&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="mGByv" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="链接ae">
                <span class="ne-text">
                样例输入
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u09798c11">
                <span class="ne-text">
                样例输出
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="u4a664773">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u4c1fa6b8">
                <span class="ne-text">
                b, 98
                </span>
                </p>
                <p class="ne-p" id="u636a08a8">
                <span class="ne-text">
                B, 66
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u25e96916">
            <span class="ne-text">
                第5行中的
            </span>
            <code class="ne-code">
                <span class="ne-text">
                b
                </span>
            </code>
            <span class="ne-text">
                是一个变量，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                'b'
                </span>
            </code>
            <span class="ne-text">
                是一个常量字符，必须能将二者进行清晰区分。
            </span>
            </li>
            <li id="u281f6147">
            <span class="ne-text">
                第6行将变量b分别以
            </span>
            <code class="ne-code">
                <span class="ne-text">
                char
                </span>
            </code>
            <span class="ne-text">
                类型和
            </span>
            <code class="ne-code">
                <span class="ne-text">
                int
                </span>
            </code>
            <span class="ne-text">
                类型进行输出，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                int
                </span>
            </code>
            <span class="ne-text">
                类型的输出实际上就是该字符的ASCII码值。其中
            </span>
            <code class="ne-code">
                <span class="ne-text">
                (int)b
                </span>
            </code>
            <span class="ne-text">
                表示将
            </span>
            <code class="ne-code">
                <span class="ne-text">
                b
                </span>
            </code>
            <span class="ne-text">
                强制转换为
            </span>
            <code class="ne-code">
                <span class="ne-text">
                int
                </span>
            </code>
            <span class="ne-text">
                类型进行输出，转换的结果存储在一个临时空间中，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                b
                </span>
            </code>
            <span class="ne-text">
                本身没有发生任何改变。由此可见，char就是1字节长度的整型，默认时按字符解读，本质上就是一个整数。
            </span>
            </li>
            <li id="u7e71d986">
            <span class="ne-text">
                将一个浮点型强制转换为整型时，小数部分会被舍掉，并不会发生四舍五入。例如
            </span>
            <code class="ne-code">
                <span class="ne-text">
                int a = (int)2.7;
                </span>
            </code>
            <span class="ne-text">
                。则
            </span>
            <code class="ne-code">
                <span class="ne-text">
                a
                </span>
            </code>
            <span class="ne-text">
                的值为
            </span>
            <code class="ne-code">
                <span class="ne-text">
                2
                </span>
            </code>
            <span class="ne-text">
                。
            </span>
            </li>
            <li id="u0b219b4c">
            <span class="ne-text">
                第7行将一个小写字母转换为对应的大写字母。因为字符本身的连续性，因此对应大小写字母之间的差值都是相等的，即
            </span>
            <code class="ne-code">
                <span class="ne-text">
                'a'-'A'
                </span>
            </code>
            <span class="ne-text">
                。很多初学者将其写为
            </span>
            <code class="ne-code">
                <span class="ne-text">
                b=b-32;
                </span>
            </code>
            <span class="ne-text">
                。虽然结果是正确的，但是32不具有实际含义，代码阅读性差，强烈建议采用第7行的方式进行大小写字母转换。
            </span>
            </li>
            <li id="u8add64ff">
            <span class="ne-text">
                在C语言标准头文件&lt;cctype&gt;中包含了一系列字符判断和转换函数，其作用与函数名称相同，建议使用。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="u2288c7f8" style="text-align: center">
            <span class="ne-text">
            表2.4 常见转义字符
            </span>
            </p>
            <table border=1 class="ne-table" id="OLQQE" style="text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td width="84">
                <p class="ne-p" id="ufd9d2836">
                <span class="ne-text">
                函数名
                </span>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="u55e5c195">
                <span class="ne-text">
                作用
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="链接4b">
                <span class="ne-text">
                函数名
                </span>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="uba953e0d">
                <span class="ne-text">
                作用
                </span>
                </p>
                </td>
                <td width="79">
                <p class="ne-p" id="uba1272a6">
                <span class="ne-text">
                函数名
                </span>
                </p>
                </td>
                <td width="172">
                <p class="ne-p" id="u45ab9c35">
                <span class="ne-text">
                作用
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="84">
                <p class="ne-p" id="ud711f9d3">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/isalpha/" href="https://cplusplus.com/reference/cctype/isalpha/" target="_blank">
                <span class="ne-text">
                    isalpha
                </span>
                </a>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="u78b80431">
                <span class="ne-text">
                是否为字母
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="ue56a4a25">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/isdigit/" href="https://cplusplus.com/reference/cctype/isdigit/" target="_blank">
                <span class="ne-text">
                    isdigit
                </span>
                </a>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="u50fb6af7">
                <span class="ne-text">
                是否为数字字符
                </span>
                </p>
                </td>
                <td width="79">
                <p class="ne-p" id="u6aa4c6dc">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/isalnum/" href="https://cplusplus.com/reference/cctype/isalnum/" target="_blank">
                <span class="ne-text">
                    isalnum
                </span>
                </a>
                </p>
                </td>
                <td width="172">
                <p class="ne-p" id="链接ca">
                <span class="ne-text">
                是否为字母或数字字符
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="84">
                <p class="ne-p" id="u7bee12b2">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/islower/" href="https://cplusplus.com/reference/cctype/islower/" target="_blank">
                <span class="ne-text">
                    islower
                </span>
                </a>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="uba9dcbc7">
                <span class="ne-text">
                是否为小写
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="ube9d7328">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/isupper/" href="https://cplusplus.com/reference/cctype/isupper/" target="_blank">
                <span class="ne-text">
                    isupper
                </span>
                </a>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="ud77800b3">
                <span class="ne-text">
                是否为大写
                </span>
                </p>
                </td>
                <td width="79">
                <p class="ne-p" id="u3ac38825">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/isspace/" href="https://cplusplus.com/reference/cctype/isspace/" target="_blank">
                <span class="ne-text">
                    isspace
                </span>
                </a>
                </p>
                </td>
                <td width="172">
                <p class="ne-p" id="u9a2a6741">
                <span class="ne-text">
                是否为空白符
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="84">
                <p class="ne-p" id="u45f555c1">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/tolower/" href="https://cplusplus.com/reference/cctype/tolower/" target="_blank">
                <span class="ne-text">
                    tolower
                </span>
                </a>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="ub6c83a24">
                <span class="ne-text">
                转换为小写字符
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="u5ce57dfa">
                <a class="ne-link" data-href="https://cplusplus.com/reference/cctype/toupper/" href="https://cplusplus.com/reference/cctype/toupper/" target="_blank">
                <span class="ne-text">
                    toupper
                </span>
                </a>
                </p>
                </td>
                <td width="125">
                <p class="ne-p" id="uadd8b274">
                <span class="ne-text">
                转换为大写字符
                </span>
                </p>
                </td>
                <td width="79">
                </td>
                <td width="172">
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uafd965ed">
            <span class="ne-text">
                这个表中的判断函数都是以is开头，返回类型为int类型，非0表示true，0表示false；
            </span>
            </li>
            <li id="u00e8d9d6">
            <span class="ne-text">
                两个转换函数都是以to开头，在进行转换前，判断了输入是否符合要求，因此使用更加安全；
            </span>
            </li>
            <li id="u1a8d53b9">
            <span class="ne-text">
                空白符不是指空格，而是包括空格、制表符和回车符等
            </span>
            </li>
            </ul>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="Ptk2h"><span style="font-weight:bold;">代码2.9</span> 字符作为整数运算<code>#include &lt;iostream&gt;
    #include &lt;bitset&gt;
    using namespace std;
    int main(){
        char m = 9,n = 7;   		
        cout&lt;&lt;m+n&lt;&lt;endl;
        char a = 97,b = 97;   		
        cout&lt;&lt;bitset&lt;8&gt;(a)&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;8&gt;(b)&lt;&lt;endl;
        char c = a+b;
        printf("%d\n",c);			//与cout&lt;&lt;(int)c&lt;&lt;endl;等价
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="sPpQT" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="uc44e3d58">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="ua66fface">
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
                <p class="ne-p" id="ua3148b80">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u65dcfc1c">
                <span class="ne-text">
                16
                </span>
                </p>
                <p class="ne-p" id="ue162e11c">
                <span class="ne-text">
                01100001
                </span>
                </p>
                <p class="ne-p" id="uf3b97f8a">
                <span class="ne-text">
                01100001
                </span>
                </p>
                <p class="ne-p" id="ud94ec341">
                <span class="ne-text">
                -62
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="链接b2">
            <span class="ne-text">
                char在本质上就是一个无符号的8位整型（1字节），因此按照整型执行加法运算，如第5-6行所示。第6行的计算结果为整型，这是因为整型提升，详见
            </span>
            <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd/edit#vLxhS" href="ch5#CSiAQ" target="_blank">
                <span class="ne-text">
                本章第5.3节
                </span>
            </a>
            <span class="ne-text">
                。
            </span>
            </li>
            <li id="ue03ab4f8">
            <span class="ne-text">
                char的首位作为符号位，表示负数，用补码表示，补码的详细定义参见10.1节。当运算结果超过127时，结果溢出，因此
            </span>
            <code class="ne-code">
                <span class="ne-text">
                c
                </span>
            </code>
            <span class="ne-text">
                按照整型输出结果为-62。
            </span>
            </li>
            </ul>
            <h3 id="fS5PB">
            <span class="ne-text">
            随堂练习2.1
            </span>
            </h3>
            <p class="ne-p" id="uab11f23b">
            <span class="ne-text">
            将一个数字字符转换为对应的数字，例如将
            </span>
            <code class="ne-code">
            <span class="ne-text">
                '5'
            </span>
            </code>
            <span class="ne-text">
            转换为5。
            </span>
            </p>
            <h3 id="wG8i3">
            <span class="ne-text">
            知识点：T241-T242
            </span>
            </h3>
            <table border=1 class="ne-table" id="GSPVV" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u8e8ffe44">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="576">
                <p class="ne-p" id="uc1965a8e" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u583e317b">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="ua3561443">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="ubbc79ddd">
                <span class="ne-text">
                T241
                </span>
                </p>
                </td>
                <td width="576">
                <p class="ne-p" id="u0a824ba9">
                <span class="ne-text">
                掌握字符类型就是1字节的整型，可以直接作为整型进行数值运算，一个字符通过偏移（加减一个整数）可以得到另外一个字符。
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="链接f9">
                <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
                <span class="ne-text">
                    T211
                </span>
                </a>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u06036bc1">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#BlTTv" href="ch8#BlTTv">
                <span class="ne-text">
                    T851
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="693">
                <p class="ne-p" id="ubba805ae">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161701" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161701" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX212)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="链接54">
                <span class="ne-text">
                T242
                </span>
                </p>
                </td>
                <td width="576">
                <p class="ne-p" id="u8302ba21">
                <span class="ne-text">
                掌握大小写转换，数字和数字字符直接转换的正确方法
                </span>
                </p>
                <p class="ne-p" id="ufda0a239">
                <span class="ne-text">
                建议使用&lt;cctype&gt;库中的字符判断和转换函数
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u8b2e251f">
                <span class="ne-text">
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="ua65f8057">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#TSGz6" href="ch5#TSGz6">
                <span class="ne-text">
                    T549
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="693">
                <p class="ne-p" id="u4ef6c3ee">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX213)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183797" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183797" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX308)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="zbWQ8">
            <span class="ne-text">
            4.2 字符串
            </span>
            </h2>
            <p class="ne-p" id="u2ce2971e" style="text-indent: 2em">
            <span class="ne-text">
            C语言中用字符数组表示字符串，对于初学者比较复杂。但C++中提出了字符串类型，使字符串的操作变得容易。
            </span>
            <code class="ne-code">
            <span class="ne-text">
                string
            </span>
            </code>
            <span class="ne-text">
            是 C++ 中常用的一个类，使用
            </span>
            <code class="ne-code">
            <span class="ne-text">
                string
            </span>
            </code>
            <span class="ne-text">
            类需要包含头文件
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &lt;string&gt;
            </span>
            </code>
            <span class="ne-text">
            。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="v3CuQ"><span style="font-weight:bold;">代码2.10</span> <code>#include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    int main(){
        string s1;						//定义
        string s2 = "c plus plus";		//用C常量字符串进行初始化
        string s3 = s2;					//用s2对s3进行初始化
        string s4 (5, 's');				//用5个s构成字符串进行初始化，即"sssss"
        cout&lt;&lt;s2.length()&lt;&lt;'\t'&lt;&lt;s4.size()&lt;&lt;endl;	//获取字符串的长度，length和size等价
        cout&lt;&lt;"第二个字符是："&lt;&lt;s3[2]&lt;&lt;endl;	//获取第2个字符，注意语法形式
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="ebF6s" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="u0b8256f0">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u01bb9afa">
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
                <p class="ne-p" id="u195d25a9">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="ua3c412a0">
                <span class="ne-text">
                11 5
                </span>
                </p>
                <p class="ne-p" id="uab983ae1">
                <span class="ne-text">
                第二个字符是：p
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u9684c22f">
            <span class="ne-text">
                第5行定义了一个字符串变量
            </span>
            </li>
            <li id="u6a174113">
            <span class="ne-text">
                第6-8行使用了三种对字符串进行初始化的方式
            </span>
            </li>
            <li id="uf8f90c79">
            <span class="ne-text">
                第9行
            </span>
            <code class="ne-code">
                <span class="ne-text">
                length
                </span>
            </code>
            <span class="ne-text">
                和
            </span>
            <code class="ne-code">
                <span class="ne-text">
                size
                </span>
            </code>
            <span class="ne-text">
                函数都可以获取字符串中字符的数量，二者完全等价，只是因为历史原因才出现了两个名字。
            </span>
            </li>
            <li id="ua9928e83">
            <span class="ne-text">
                字符串是由字符构成，可以采用
            </span>
            <code class="ne-code">
                <span class="ne-text">
                字符串名称[i]
                </span>
            </code>
            <span class="ne-text">
                的方式获取字符串的第
            </span>
            <code class="ne-code">
                <span class="ne-text">
                i
                </span>
            </code>
            <span class="ne-text">
                个字符，注意下标
            </span>
            <code class="ne-code">
                <span class="ne-text">
                i
                </span>
            </code>
            <span class="ne-text">
                从0开始。
            </span>
            </li>
            </ul>
            <h3 id="LBVF5">
            <span class="ne-text">
            知识点：T243
            </span>
            </h3>
            <table border=1 class="ne-table" id="J9CUb" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ub6375b80">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="561">
                <p class="ne-p" id="u7067f544" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="uc9d611ae">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u87b4477d">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u3f72eca7">
                <span class="ne-text">
                T243
                </span>
                </p>
                </td>
                <td width="561">
                <p class="ne-p" id="u784adf5d">
                <span class="ne-text">
                掌握字符串的初始化、赋值、获取长度和获取第
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    i
                </span>
                </code>
                <span class="ne-text">
                个字符的语法形式。
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u48af1dca">
                <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
                <span class="ne-text">
                    T211
                </span>
                </a>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="ud8d4558a">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#eRcMx" href="ch5#eRcMx">
                <span class="ne-text">
                    T541
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="678">
                <p class="ne-p" id="u72718fc8">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX213)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>        
                     <h2 id="KmKIc">
            <span class="ne-text">
            4.3 布尔类型
            </span>
            </h2>
            <p class="ne-p" id="ue438e040" style="text-indent: 2em">
            <span class="ne-text">
            C/C++中的布尔值为
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
            ，其实这是两个宏，本质上就是1/0。这是布尔值和整型值的对应关系。但是整型值映射到布尔值有一个特殊的规定：非0值映射为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                true
            </span>
            </code>
            <span class="ne-text">
            ，0映射为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                false
            </span>
            </code>
            <span class="ne-text">
            ，特别强调这里的非0值是包括负数的。
            </span>
            </p>
            <img id="FMwNa" src="../assets/images/1671110812724-e1c0d8bf-9687-4139-8860-55f402c98e0e.jpeg" class="img-70"/>
            <p class="ne-p" id="udf97706a" style="text-indent: 2em">
            <span class="ne-text">
            例如代码2.11中求解非0值的数量。就是充分利用了整型和布尔型之间的转换规则。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="eWp7T"><span style="font-weight:bold;">代码2.11</span> 整数->布尔->整数<code>#include &lt;iostream&gt;
    using namespace std;
    int main()
    {
        int a,b,c;
        cin&gt;&gt;a&gt;&gt;b&gt;&gt;c;
        cout&lt;&lt;((bool)a+(bool)b+(bool)c);
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="wJ2Gj" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="377">
                <p class="ne-p" id="u9f11b7ae">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="377">
                <p class="ne-p" id="u7db9f0d0">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="377">
                <p class="ne-p" id="u81a81e36">
                <span class="ne-text">
                3 0 5
                </span>
                </p>
                </td>
                <td width="377">
                <p class="ne-p" id="uecd0365d">
                <span class="ne-text">
                2
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u1b986d36">
            <span class="ne-text">
                a的输入值为整数3，被强制转换为布尔类型后变成了true，随后因为加法运算需要整型值，又被作为1处理。
            </span>
            </li>
            <li id="u0821e95c">
            <span class="ne-text">
                同样道理，b最终为0，c最终为1，因此输出结果为2。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="u6d6454a7" style="text-indent: 2em">
            <span class="ne-text">
            布尔类型在屏幕打印时默认输出为1/0，如果想输入或输出true/false，需要在输出前增加boolalpha。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="xzYiQ"><span style="font-weight:bold;">代码2.12</span> <code>#include&lt;iostream&gt;
    using namespace std;

    int main()
    {
        bool a,b;
        cin&gt;&gt;boolalpha&gt;&gt;a&gt;&gt;b;
        cout&lt;&lt;a&lt;&lt;' '&lt;&lt;b&lt;&lt;endl;
        cout&lt;&lt;boolalpha&lt;&lt;a&lt;&lt;' '&lt;&lt;b&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="BUq93" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="377">
                <p class="ne-p" id="uc288d937">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="377">
                <p class="ne-p" id="ubc24bbde">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="377">
                <p class="ne-p" id="u938c72c5">
                <span class="ne-text">
                true false
                </span>
                </p>
                </td>
                <td width="377">
                <p class="ne-p" id="u0c82a2ec">
                <span class="ne-text">
                1 0
                </span>
                </p>
                <p class="ne-p" id="ued69b5eb">
                <span class="ne-text">
                true false
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h3 id="iAVWo">
            <span class="ne-text">
            知识点：T244-T245
            </span>
            </h3>
            <table border=1 class="ne-table" id="zwg9A" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ub2201728">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="571">
                <p class="ne-p" id="u5ed834a3" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u8b74c93c">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="63">
                <p class="ne-p" id="u4aaa0c6b">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u583d45f7">
                <span class="ne-text">
                T244
                </span>
                </p>
                </td>
                <td width="571">
                <p class="ne-p" id="uedccb9bb">
                <span class="ne-text">
                数值-&gt;布尔：非0值映射为
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    true
                </span>
                </code>
                <span class="ne-text">
                ，0映射为
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    false
                </span>
                </code>
                <span class="ne-text">
                ；
                </span>
                </p>
                <p class="ne-p" id="ub3239087">
                <span class="ne-text">
                布尔-&gt;数值：
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    true
                </span>
                </code>
                <span class="ne-text">
                和1等价，
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    false
                </span>
                </code>
                <span class="ne-text">
                和0等价
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="uaad55169">
                <br/>
                </p>
                </td>
                <td width="63">
                <p class="ne-p" id="链接7a">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/afrstd#MIXWN" href="#MIXWN">
                <span class="ne-text">
                    T267
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#IftcA" href="ch3#IftcA">
                <span class="ne-text">
                    T316
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#pjuoH" href="ch4#pjuoH">
                <span class="ne-text">
                    T412
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="695">
                <p class="ne-p" id="uf9a720c9">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161703" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161703" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX214)
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
                <p class="ne-p" id="u36c8d4bf">
                <span class="ne-text">
                T245
                </span>
                </p>
                </td>
                <td width="571">
                <p class="ne-p" id="u9013a32c">
                <span class="ne-text">
                输入输出true/false要用boolapha
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ufacbd0d8">
                <br/>
                </p>
                </td>
                <td width="63">
                <p class="ne-p" id="u4e413b3b">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#FdHGv" href="ch4#FdHGv">
                <span class="ne-text">
                    T475
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="695">
                <p class="ne-p" id="uadaf2521">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX211)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161703" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161703" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX214)
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
            

                <!-- Section 5 -->
        <div class="self-section">
            <h1 id="g7mND">
            <span class="ne-text">
            5. 数据类型转换
            </span>
            </h1>
            <h2 id="v9aSn">
            <span class="ne-text">
            5.1 隐式类型转换
            </span>
            </h2>
            <p class="ne-p" id="u3b252c25" style="text-indent: 2em">
            <span class="ne-text">
            在执行算术运算时，计算机比C/C++语言的限制更多。为了让计算机执行算术运算，通常要求操作数有相同的大小（即位的数量相同），并且要求存储的方式也相同。计算机可能可以直接将两个32位整数相加，但是不能直接将32位整数和64位整数相加，也不能直接将32位整数和32位浮点数相加。另一方面，C/C++语言允许在表达式中混合使用基本数据类型。在单独一个表达式中可以组合整数、浮点数、甚至是字符。当然，在这种情况下C/C++语言编译器可能需要生成一些指令将某些操作数转换成不同类型，使得硬件可以对表达式进行计算。例如，如果对32位int型数和64位long
                        long型数进行加法操作，那么编译器将安排把32位int型值转换成64位值。如果是int型数据和float型数据进行加法操作，那么编译器将安排把int型值转换成为float格式。这个转换过程稍微复杂一些，因为int型值和float型值的存储方式不同。因为编译器可以自动处理这些转换而无需程序员介入，所以这类转换称为隐式转换(implicit
                        conversion）。
            </span>
            </p>
            <p class="ne-p" id="ub22be3ab" style="text-indent: 2em">
            <strong>
            <span class="ne-text">
                当发生下列情况时会进行隐式转换：
            </span>
            </strong>
            </p>
            <p class="ne-p" id="u78063df8" style="margin-left: 2em">
            <span class="ne-text">
            1) 当算术表达式或逻辑表达式中操作数的类型不相同时。
            </span>
            </p>
            <p class="ne-p" id="u10cac06a" style="margin-left: 2em">
            <span class="ne-text">
            2) 当赋值运算符右侧表达式的类型和左侧变量的类型不匹配时。
            </span>
            </p>
            <p class="ne-p" id="u94360c53" style="text-indent: 2em">
            <strong>
            <span class="ne-text">
                隐式类型转换规则：
            </span>
            </strong>
            <span class="ne-text">
            <br/>
            </span>
            <span class="ne-text">
            C/C++自动转换的基本原则是：
            </span>
            <strong>
            <span class="ne-text">
                低精度类型向高精度类型转换，有符号类型向无符号类型转换
            </span>
            </strong>
            <span class="ne-text">
            。具体是：
            </span>
            </p>
            <img id="JQc0a" src="../assets/images/1671423433758-682eec97-4005-44b5-b214-e4cd5f1f92f8.jpeg" style="display: block; width: 100%"/>
            <p class="ne-p" id="u96aca22b" style="text-align: center">
            <span class="ne-text">
            图2.7 数据类型隐式转换
            </span>
            </p>
            <p class="ne-p" id="u4ec1572c" style="text-indent: 2em">
            <span class="ne-text">
            由上图可以看到，当数据类型的空间小于int时，都会转换为int，这是“
            </span>
            <a class="ne-link" data-href="#vLxhS" href="#vLxhS">
            <span class="ne-text">
                整型提升
            </span>
            </a>
            <span class="ne-text">
            ”的原因，详见本章5.3节。另一个需要注意的是虽然long
                        long有64位，float只有32位，但是二者进行运算的时候，会转换为float类型。可以认为整型与浮点型进行运算时，会转换为浮点型。C++可以使用typeid(变量).name()的方式获取变量的数据类型。数据类型和返回名称的对应关系如下表：
            </span>
            </p>
            <p class="ne-p" id="uc344edeb" style="text-align: center">
            <span class="ne-text">
            表2.5 climits头文件中定义的部分常量
            </span>
            </p>
            <table border=1 class="ne-table" id="NnMuu" style="text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="链接83">
                <span class="ne-text">
                类型
                </span>
                </p>
                </td>
                <td width="50">
                <p class="ne-p" id="u891c30c2">
                <span class="ne-text">
                名称
                </span>
                </p>
                </td>
                <td width="126">
                <p class="ne-p" id="u47901ffb">
                <span class="ne-text">
                类型
                </span>
                </p>
                </td>
                <td width="49">
                <p class="ne-p" id="u12fef697">
                <span class="ne-text">
                名称
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u196e543d">
                <span class="ne-text">
                类型
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u0d0d7d72">
                <span class="ne-text">
                名称
                </span>
                </p>
                </td>
                <td width="164">
                <p class="ne-p" id="u046f0fb8">
                <span class="ne-text">
                类型
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="uc9ec0e73">
                <span class="ne-text">
                名称
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="u6fb03583">
                <span class="ne-text">
                char
                </span>
                </p>
                </td>
                <td width="50">
                <p class="ne-p" id="u02053baa">
                <span class="ne-text">
                c
                </span>
                </p>
                </td>
                <td width="126">
                <p class="ne-p" id="u89f46a38">
                <span class="ne-text">
                unsigned char
                </span>
                </p>
                </td>
                <td width="49">
                <p class="ne-p" id="uf752d4f1">
                <span class="ne-text">
                h
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u704dbdce">
                <span class="ne-text">
                short
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u108ce9cd">
                <span class="ne-text">
                s
                </span>
                </p>
                </td>
                <td width="164">
                <p class="ne-p" id="ua8b4d104">
                <span class="ne-text" style="color: rgb(23, 23, 23); font-size: 14px">
                unsigned short
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u406a1c61">
                <span class="ne-text">
                t
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="u35d2a15c">
                <span class="ne-text">
                int
                </span>
                </p>
                </td>
                <td width="50">
                <p class="ne-p" id="ud56281ff">
                <span class="ne-text">
                i
                </span>
                </p>
                </td>
                <td width="126">
                <p class="ne-p" id="u7323d80f">
                <span class="ne-text">
                unsigned int
                </span>
                </p>
                </td>
                <td width="49">
                <p class="ne-p" id="udbf65338">
                <span class="ne-text">
                j
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="ud7aca974">
                <span class="ne-text">
                long long
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u279ffd27">
                <span class="ne-text">
                x
                </span>
                </p>
                </td>
                <td width="164">
                <p class="ne-p" id="udb65f9eb">
                <span class="ne-text">
                unsigned long long
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="uf2d865c8">
                <span class="ne-text">
                y
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="u164a9c4d">
                <span class="ne-text">
                float
                </span>
                </p>
                </td>
                <td width="50">
                <p class="ne-p" id="u45b71b79">
                <span class="ne-text">
                f
                </span>
                </p>
                </td>
                <td width="126">
                <p class="ne-p" id="uef3fe267">
                <span class="ne-text">
                double
                </span>
                </p>
                </td>
                <td width="49">
                <p class="ne-p" id="u34f5106b">
                <span class="ne-text">
                d
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u13b41fcd">
                <span class="ne-text">
                bool
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="u00b47aa6">
                <span class="ne-text">
                b
                </span>
                </p>
                </td>
                <td width="164">
                <p class="ne-p" id="ued5a3b0b">
                <span class="ne-text">
                long double
                </span>
                </p>
                </td>
                <td width="56">
                <p class="ne-p" id="ud847b4e9">
                <span class="ne-text">
                e
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u4c5d6ca8" style="text-indent: 2em">
            <span class="ne-text">
            以下代码以
            </span>
            <code class="ne-code">
            <span class="ne-text">
                +
            </span>
            </code>
            <span class="ne-text">
            运算为例，展现了不同数据类型之间进行运算时的隐式类型转换。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="EXTiC"><span style="font-weight:bold;">代码2.13</span> <code>#include &lt;iostream&gt;
    using namespace std;
    #define type(obj) typeid(obj).name()

    int main()
    {
        char a;
        unsigned char b;
        bool ba;
        cout&lt;&lt;type(a)&lt;&lt;' '&lt;&lt;type(b)&lt;&lt;' '&lt;&lt;type(ba)&lt;&lt;' '&lt;&lt;type(a+b)&lt;&lt;' '&lt;&lt;type(a+ba)&lt;&lt;endl;
        short sa;
        unsigned short sb;
        cout&lt;&lt;type(sa)&lt;&lt;' '&lt;&lt;type(sb)&lt;&lt;' '&lt;&lt;type(sa+sb)&lt;&lt;' '&lt;&lt;type(sa+a)&lt;&lt;endl;
        int ia;
        unsigned int ib;
        cout&lt;&lt;type(ia)&lt;&lt;' '&lt;&lt;type(ib)&lt;&lt;' '&lt;&lt;type(ia+ib)&lt;&lt;endl;
        long long lla;
        unsigned long long llb;
        cout&lt;&lt;type(lla)&lt;&lt;' '&lt;&lt;type(llb)&lt;&lt;' '&lt;&lt;type(lla+llb)&lt;&lt;' '&lt;&lt;type(lla+ia)&lt;&lt;endl;
        float fa;
        double lfa;
        cout&lt;&lt;type(fa)&lt;&lt;' '&lt;&lt;type(lfa)&lt;&lt;' '&lt;&lt;type(fa+ia)
            &lt;&lt;' '&lt;&lt;type(fa+lla)&lt;&lt;' '&lt;&lt;type(fa+lfa)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="lqcfk" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u7db5e522">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u0a7b257d">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u92fea62f">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u60a65a73">
                <span class="ne-text">
                c h b i i
                </span>
                </p>
                <p class="ne-p" id="uf546dc4e">
                <span class="ne-text">
                s t i i
                </span>
                </p>
                <p class="ne-p" id="链接3c">
                <span class="ne-text">
                i j j
                </span>
                </p>
                <p class="ne-p" id="u47bc3be3">
                <span class="ne-text">
                x y y x
                </span>
                </p>
                <p class="ne-p" id="ubb1f3d80">
                <span class="ne-text">
                f d f f d
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u3aad80b3" style="text-indent: 2em">
            <span class="ne-text">
            当把有符号操作数和无符号操作数整合时，会通过把符号位看成数的位的方法把有符号操作数"转换"成无符号的值。这条规则可能会导致某些隐蔽的编程错误。假设int型的变量i的值为-10，而且unsigned
                        int型的变量u的值为10。如果用＜运算符比较变量i和变u，那么期望的结果应该是1（真）。但是，在比较前，变量i转换成为unsigned
                        int类型。因为负数不能被表示成无符号整数，所以转换后的数值将不再为-10，而是一个大的正数（将变量i中的位看作是无符号数）。因此i&lt;u比较的结果将为0。由于此类陷阱的存在，所以最好尽最避免使用无符号整数，特别是不要把它和有符号整数混合使用。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="L64lW"><span style="font-weight:bold;">代码2.14</span> <code>#include &lt;iostream&gt;
    #include &lt;bitset&gt;
    using namespace std;
    int main(){
        int a = -1;
        cout&lt;&lt;(a&lt;sizeof(a))&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;32&gt;((unsigned int)a)&lt;&lt;'\t'&lt;&lt;((unsigned int)a)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="z9E4R" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="246">
                <p class="ne-p" id="u6c2becf8">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="503">
                <p class="ne-p" id="u303bd4ea">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="246">
                <p class="ne-p" id="u544eb107">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="503">
                <p class="ne-p" id="u180aced2">
                <span class="ne-text">
                0
                </span>
                </p>
                <p class="ne-p" id="u2692da85">
                <span class="ne-text">
                11111111111111111111111111111111
                                        4294967295
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="链接d4">
            <span class="ne-text">
                -1显然小于4，但是为什么输出结果为false(0)呢？因为sizeof返回的数据类型为unsigned
                            int，在进行比较操作时，做了隐式类型转换，将a转换为unsigned int类型，因此将符号位的1作为数值看待，-1就变成了一个非常大的数。这里-1的二进制是补码形式，详见本章10.1节。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="ua320b5a2">
            <strong>
            <span class="ne-text">
                混合运算的计算顺序
            </span>
            </strong>
            <span class="ne-text">
            ：
            </span>
            </p>
            <p class="ne-p" id="uaf2fe4fd" style="text-indent: 2em">
            <span class="ne-text">
            除了类型转换，混合运算时还要注意运算的顺序，否则可能产生错误。
            </span>
            </p>
            <ul class="ne-ul">
            <li id="u8b62c50e">
            <span class="ne-text">
                数据溢出错误：例如三个整数a，b，c，数学上保证a*b一定能被c整除，在书写时，一定要写成a*b/c，而不能写成a/c*b或b/c*a，因为除法可能产生小数
            </span>
            </li>
            </ul>
            <h3 id="jVv0C">
            <span class="ne-text">
            知识点：T251
            </span>
            </h3>
            <table border=1 class="ne-table" id="UEZGr" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u3f2200f6">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="559">
                <p class="ne-p" id="u140df5b1" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="udf48e3cf">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u4b446efc">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="uc61605d0">
                <span class="ne-text">
                T251
                </span>
                </p>
                </td>
                <td width="559">
                <p class="ne-p" id="ub232e751">
                <span class="ne-text">
                当进行混合运算时，低精度类型会自动转换为高精度类型
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u7ee8cb71">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u21f28564">
                <a class="ne-link" data-href="#GYNKe" href="#GYNKe">
                <span class="ne-text">
                    T291
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="675">
                <p class="ne-p" id="u3a501923">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161704" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161704" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX215)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161712" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161712" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX223)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="NBCax">
            <span class="ne-text">
            5.2 显式类型转换
            </span>
            </h2>
            <p class="ne-p" id="ue4308fc4" style="text-indent: 2em">
            <span class="ne-text">
            C/C++语言还允许程序员通过使用强制运算符执行显式转换（explicit
                        conversion）。C语言的类型转换格式为：（目标类型）表达式；C++推荐的格式为：目标类型（表达式）。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="dpiOf"><span style="font-weight:bold;">代码2.15</span> <code>#include &lt;iostream&gt;
    #include&lt;cmath&gt;
    using namespace std;
    int main()
    {
        double a=0.3,b=0.6;
        int ai = (int)a;    //C语言格式
        int bi = int(b);    //C++推荐格式
        cout&lt;&lt;ai&lt;&lt;'\t'&lt;&lt;bi&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="EpsLv" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="246">
                <p class="ne-p" id="u37ee69e4">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="503">
                <p class="ne-p" id="u31ec9b3f">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="246">
                <p class="ne-p" id="u4ba6c02e">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="503">
                <p class="ne-p" id="ubca8eb2a">
                <span class="ne-text">
                0 0
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uc6237006">
            <span class="ne-text">
                浮点型转换为整型，直接舍掉小数部分取整，不存在四舍五入。
            </span>
            </li>
            </ul>
            <h3 id="vctGB">
            <span class="ne-text">
            知识点：T252
            </span>
            </h3>
            <table border=1 class="ne-table" id="XnLTM" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="uc2e8d30b">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="518">
                <p class="ne-p" id="u97b6c1cd" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u5970f18b">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="115">
                <p class="ne-p" id="u174ee3cb">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 37px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u7b7a224a">
                <span class="ne-text">
                T252
                </span>
                </p>
                </td>
                <td width="518">
                <p class="ne-p" id="u8dd815bd">
                <span class="ne-text">
                显示类型转换的方法，特别注意浮点数转换整数时会舍弃小数取整
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u32ca5404">
                <br/>
                </p>
                </td>
                <td width="115">
                <p class="ne-p" id="ue76fc876">
                <a class="ne-link" data-href="#f8WvB" href="#f8WvB">
                <span class="ne-text">
                    T256
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#IS3uW" href="ch6#IS3uW">
                <span class="ne-text">
                    T622
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="694">
                <p class="ne-p" id="u0a3dff7b">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161699" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161699" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX209)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="vLxhS">
            <span class="ne-text">
            5.3 整型提升*
            </span>
            </h2>
            <p class="ne-p" id="u3c501b50" style="text-indent: 2em">
            <span class="ne-text">
            C/C++的整型算数运算总是至少以默认的整型（int型）的精度来进行，也就是说参与运算的操作数最小也不能小于4个字节的精度，如若精度小于4个字节该操作数就必须提升成整型的精度。为了获得这个精度，表达式中字符型（char，1字节）和短整型（short，2字节）操作数在使用之前会被转换为普通整型，这种转换被称为：整型提升。
            </span>
            </p>
            <p class="ne-p" id="ub762d95b">
            <span class="ne-text">
            这主要是因为表达式的整型运算是由CPU的整型运算器（ALU）执行，而该运算器操作对象的字节长度一般就是int型的字节长度。因此CPU是无法实现直接对2个char类型的操作数的运算，而是通过先转换为CPU内整型操作数的标准长度然后再进行加法运算。
            </span>
            </p>
            <p class="ne-p" id="ub5b1a82b">
            <span class="ne-text">
            </span>
            <strong>
            <span class="ne-text">
                整型提升前提
            </span>
            </strong>
            <span class="ne-text">
            ：当表达式中出现长度可能小于int型的整型值时，才须要对该值进行整型提升转换为int或unsigned int型，然后再送入CPU去执行运算。
            </span>
            </p>
            <p class="ne-p" id="uec784100">
            <span class="ne-text">
            </span>
            <strong>
            <span class="ne-text">
                整形提升规则
            </span>
            </strong>
            <span class="ne-text">
            ：对于有符号的整形变量，整型提升是在高位补变量的符号位；而对于无符号的整型变量，整型提升是直接高位补0。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="nOq0E"><span style="font-weight:bold;">代码2.16</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        char a = 97;   
        cout&lt;&lt;sizeof(a)&lt;&lt;endl;
        cout&lt;&lt;sizeof(a+a)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="hRAj3" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u3678ce4f">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="uda22ce5d">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u1039ee83">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="uf60c0cb3">
                <span class="ne-text">
                1
                </span>
                </p>
                <p class="ne-p" id="uaab4a8b3">
                <span class="ne-text">
                4
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uef6cdce2">
            <span class="ne-text">
                char是一个字节，当让char参与加法运算时，被自动提升为int，因此结果为4个字节。
            </span>
            </li>
            </ul>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="LwT1Y"><span style="font-weight:bold;">代码2.17</span> <code>#include &lt;iostream&gt;
    #include &lt;bitset&gt;
    using namespace std;
    int main(){
        char a = 0xb6;
        int b = 0xb6000000;
        cout&lt;&lt;(a==0xb6)&lt;&lt;endl;
        cout&lt;&lt;(b==0xb6000000)&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;32&gt;(0xb6)&lt;&lt;'\t'&lt;&lt;sizeof(0xb6)&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;32&gt;(a)&lt;&lt;'\t'&lt;&lt;sizeof(a)&lt;&lt;endl;
        cout&lt;&lt;bitset&lt;32&gt;(b)&lt;&lt;'\t'&lt;&lt;sizeof(b)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="tjB0L" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="uef5c4c6c">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u3e0bdc4e">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="uf586dfba">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="ub7b9a05d">
                <span class="ne-text">
                0
                </span>
                </p>
                <p class="ne-p" id="链接8b">
                <span class="ne-text">
                1
                </span>
                </p>
                <p class="ne-p" id="uc8308539">
                <span class="ne-text">
                00000000000000000000000010110110 4
                </span>
                </p>
                <p class="ne-p" id="u73f21ee1">
                <span class="ne-text">
                11111111111111111111111110110110 1
                </span>
                </p>
                <p class="ne-p" id="ub1349716">
                <span class="ne-text">
                10110110000000000000000000000000 4
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="ubc52e000">
            <span class="ne-text">
                第7行结果为false（0），主要因为在进行关系运算时，char类型变量进行了整型提升，而且提升时因为符号位为1，前面补1（见第10行输出），0xb6默认为int类型，其结果当然在32位时前面全部为0，因此二者不相等。而int类型不需要进行整型提升，因此第8行结果为true（1）。
            </span>
            </li>
            </ul>
            <div class="ne-quote">
            <p class="ne-p" id="ue678258c">
            <span class="ne-text">
                本节内容有助于理解计算机的硬件架构，初学者可以暂时忽略
            </span>
            </p>
            </div>
            <h2 id="WG6Y4">
            <span class="ne-text">
            5.4 类型转换的精度损失
            </span>
            </h2>
            <p class="ne-p" id="ud0ea504d" style="text-indent: 2em">
            <span class="ne-text">
            提升数据的精度通常是一个平滑无损害的过程。但是降低数据的精度可能导致问题。原因很简单：一个较低精度的类型存储空间不够大，不能存放一个具有更高精度的完整的数据。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="zr8JS"><span style="font-weight:bold;">代码2.18</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        long long b = 654321 * 654321;
        cout &lt;&lt; b &lt;&lt; endl;
        long long c = 654321LL * 654321;			//LL表示long long类型
        cout &lt;&lt; c &lt;&lt; endl;
        long long d = (long long)654321 * 654321;
        cout &lt;&lt; d &lt;&lt; endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="UtkmC" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u497d82ed">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u8963e522">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u24ac2c4c">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uc5ea0b51">
                <span class="ne-text">
                -1360758559
                </span>
                </p>
                <p class="ne-p" id="u4d898b6e">
                <span class="ne-text">
                428135971041
                </span>
                </p>
                <p class="ne-p" id="u68409bfa">
                <span class="ne-text">
                428135971041
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uc3f58502">
            <span class="ne-text">
                654321 * 654321的结果虽然能在long long的表示范围内，但是654321默认数据类型为int，654321 *
                            654321的计算结果也为int，保存在一个临时的int类型的空间中。第4行将int类型的中间结果转换为long long，转换之前结果已经溢出。因此第5行输出结果错误。
            </span>
            </li>
            <li id="u29bf9acd">
            <span class="ne-text">
                第6行将一个操作数转换为long long，计算结果向高精度的long long进行类型转换，存储临时结果的变量也是long
                            long类型的，因此c能显示正确的结果。
            </span>
            </li>
            <li id="uc27b0526">
            <span class="ne-text">
                第8行做了强制类型转换，将第一个数转换为long
                            long类型，转换之后的结果也是放在一个临时存储空间中，用这个中间结果与第2个操作数654321进行运行，结果也是long long类型的。保证了计算结果的正确性。
            </span>
            </li>
            </ul>
            <h3 id="zdu8o">
            <span class="ne-text">
            知识点：T253
            </span>
            </h3>
            <table border=1 class="ne-table" id="mTvM8" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ub9f7fb7a">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="559">
                <p class="ne-p" id="ua4163b93" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="uf2fd65d8">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u0a309104">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="ud61bdcbe">
                <span class="ne-text">
                T253
                </span>
                </p>
                </td>
                <td width="559">
                <p class="ne-p" id="ueeee96ea">
                <span class="ne-text">
                溢出和截断会保存在中间临时变量里，溢出发生后的类型转换不起作用
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u41dce73c">
                <a class="ne-link" data-href="#nCbZA" href="#nCbZA">
                <span class="ne-text">
                    T221
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u3644a330">
                <br/>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="gnwq9">
            <span class="ne-text">
            5.5 四舍五入和趋零舍入
            </span>
            </h2>
            <p class="ne-p" id="u288a8392" style="text-indent: 2em">
            <span class="ne-text">
            C/C++中提供了round函数，对浮点数进行四舍五入取整，该函数在&lt;cmath&gt;头文件中。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="jX2fg"><span style="font-weight:bold;">代码2.19</span> <code>#include &lt;iostream&gt;
    #include &lt;cmath&gt;
    using namespace std;
    int main(){
        printf("round(50.2) = %f \n", round(50.2));
        printf("round(50.8) = %f \n", round(50.8));
        printf("round(0.2) = %f \n", round(0.2));
        printf("round(-50.2) = %f \n", round(-50.2));
        printf("round(-50.8) = %f \n", round(-50.8));
        cout&lt;&lt;round(M_PI*100)/100&lt;&lt;endl;		//保留两位数字精度
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="FlA5P" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u304d535b">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u948ed4ef">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u25035af4">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u37a9a9b6">
                <span class="ne-text">
                round(50.2) = 50.000000
                </span>
                </p>
                <p class="ne-p" id="u649e0bb4">
                <span class="ne-text">
                round(50.8) = 51.000000
                </span>
                </p>
                <p class="ne-p" id="u363dcaa5">
                <span class="ne-text">
                round(0.2) = 0.000000
                </span>
                </p>
                <p class="ne-p" id="uae31e142">
                <span class="ne-text">
                round(-50.2) = -50.000000
                </span>
                </p>
                <p class="ne-p" id="u9d65acfc">
                <span class="ne-text">
                round(-50.8) = -51.0000000
                </span>
                </p>
                <p class="ne-p" id="ufa4b285b">
                <span class="ne-text">
                3.14
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uffd60df4">
            <span class="ne-text">
                round函数可以对整数进行四舍五入，第10行是它的一种特殊用法，可以保留指定精度进行四舍五入。首先乘100进行整数的四舍五入，然后再除100，回退到原有的值域范围。从而实现了指定精度的四舍五入。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="u8a1f2d12" style="text-indent: 2em">
            <span class="ne-text">
            如果仅仅是对输出结果进行精度控制，不需要round函数，printf可以直接满足要求。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="nxEL4"><span style="font-weight:bold;">代码2.20</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        double pi=3.1415926;
        printf("%.0lf \n", pi);
        printf("%.2lf \n", pi);
        printf("%.3lf \n", pi);
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="IYQKs" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ue594e096">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u6f9a3111">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u7fb41bf4">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u0ce0a164">
                <span class="ne-text">
                3
                </span>
                </p>
                <p class="ne-p" id="u61b904fa">
                <span class="ne-text">
                3.14
                </span>
                </p>
                <p class="ne-p" id="ud10d22ec">
                <span class="ne-text">
                3.142
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uf2c9cc59">
            <span class="ne-text">
                可以看到，printf对精度控制是进行四舍五入的。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="udcb88b96" style="text-indent: 2em">
            <span class="ne-text">
            cout也可以进行精度控制，但是因为书写上比较复杂，不建议使用。对输出结果上进行精度控制时，建议使用printf。但cout有个很好的特性，可以进行趋零舍入，也就是说，当结果非常接近一个上限或下限时，不会显示太长的精度，会自动进行舍入。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="uGfbc"><span style="font-weight:bold;">代码2.21</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        double a=3.139999999999;
        cout&lt;&lt;a&lt;&lt;endl;
        double b=3.140000000001;
        cout&lt;&lt;b&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="TPiF4" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u687e9a9f">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="ue73c027e">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="链接52">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u79e42041">
                <span class="ne-text">
                3.14
                </span>
                </p>
                <p class="ne-p" id="u19cc13c0">
                <span class="ne-text">
                3.14
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u319de5d9" style="text-indent: 2em">
            <span class="ne-text">
            再看一个例子，这是在计算中可能会大概率遇到的问题。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="QiPqN"><span style="font-weight:bold;">代码2.22</span> <code>#include &lt;iostream&gt;
    #include&lt;cmath&gt;				//round函数的头文件
    using namespace std;
    int main(){
        double x=99;
        x=x/100;
        int a=2/(1-x);
        cout&lt;&lt;a&lt;&lt;endl;						//输出为199，是一个错误的结果
        cout&lt;&lt;2/(1-x)&lt;&lt;endl;				//200,结果正确，趋零舍入的原因
        printf("%lf\n",2/(1-x));    		//6位精度时结果正确，第7位四舍五入的原因
        printf("%.14lf\n",2/(1-x));			//14位精度时，整数部分为199
        a = round(2/(1-x));				
        cout&lt;&lt;a&lt;&lt;endl;						//结果为200
        printf("%.14lf\n",round(2/(1-x)));	//小数部分四舍五入为整数
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="YIPUG" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="377">
                <p class="ne-p" id="u0bd0f1b9">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="377">
                <p class="ne-p" id="u1741d5c5">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="377">
                <p class="ne-p" id="u1b223ecf">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="377">
                <p class="ne-p" id="u7761fcd2">
                <span class="ne-text">
                199
                </span>
                </p>
                <p class="ne-p" id="u3c8ba788">
                <span class="ne-text">
                200
                </span>
                </p>
                <p class="ne-p" id="ueb22589a">
                <span class="ne-text">
                200.000000
                </span>
                </p>
                <p class="ne-p" id="u727a0334">
                <span class="ne-text">
                199.99999999999983
                </span>
                </p>
                <p class="ne-p" id="u08e76b91">
                <span class="ne-text">
                200
                </span>
                </p>
                <p class="ne-p" id="u6edd29cf">
                <span class="ne-text">
                200.00000000000000
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="链接84">
            <span class="ne-text">
            数学推导悖论：经过简单的数学运算，可知第7行的运算结果应该为200，但第8行的输出结果却是199。
            </span>
            </p>
            <p class="ne-p" id="u79bbcee0">
            <span class="ne-text">
            结果初步验证：第9-10行的结果为200，证明预期结果应该没问题。第9行保留默认6位，会在第7位上进行四舍五入。第9行因为采用cout输出，会进行趋零舍入。
            </span>
            </p>
            <p class="ne-p" id="ud65b82f1">
            <span class="ne-text">
            错误原因分析：第11行保留14位精度进行输出，找到了错误的原因。2/(1-x)的运算结果是一个非常接近200的数，但是因为浮点数无法精确表示，在计算机中保留为一个非常接近200，但是却小于200的数。在第8行转换为整数时，按照计算机中的取整规则，将小数点后的数据自动截断，就得到了一个错误的结果。
            </span>
            </p>
            <p class="ne-p" id="udc7ee33b">
            <span class="ne-text">
            错误修正方式：在这样情况下，应该采用第12行的形式，使用round函数，保证结果的正确性。
            </span>
            </p>
            <h3 id="AENqP">
            <span class="ne-text">
            随堂练习
            </span>
            <span class="ne-text" style="color: rgb(64, 64, 64)">
            2.2
            </span>
            </h3>
            <p class="ne-p" id="ua78a7500" style="text-indent: 2em">
            <span class="ne-text">
            两个double类型变量a和b，a为已知，且有5位精度。采用round函数用a对b进行赋值，且b四舍五入地保留a的两位精度。例如a=3.14159，则b应该为3.14。如果a=3.14591，则b应该为3.15。
            </span>
            </p>
            <h3 id="f8WvB">
            <span class="ne-text">
            知识点：T254-T256
            </span>
            </h3>
            <table border=1 class="ne-table" id="HTFhL" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ub1067341">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="565">
                <p class="ne-p" id="u90ddda79" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u16cb9849">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u384bdb4a">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="链接34">
                <span class="ne-text">
                T254
                </span>
                </p>
                </td>
                <td width="565">
                <p class="ne-p" id="u0521edcf">
                <span class="ne-text">
                printf的精度控制会进行四舍五入
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u7db22697">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u8bb60d04">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="681">
                <p class="ne-p" id="uded64cba">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161693" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161693" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX204)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="uab534888">
                <span class="ne-text">
                T255
                </span>
                </p>
                </td>
                <td width="565">
                <p class="ne-p" id="u2079f280">
                <span class="ne-text">
                cout对浮点数的输出会进行趋零舍入
                </span>
                </p>
                </td>
                <td width="61">
                </td>
                <td width="55">
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="ua49b6109">
                <span class="ne-text">
                T256
                </span>
                </p>
                </td>
                <td width="565">
                <p class="ne-p" id="uce46aaf4">
                <span class="ne-text">
                round函数的正确使用，尤其对于浮点运算结果
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="uc8044079">
                <a class="ne-link" data-href="#vctGB" href="#vctGB">
                <span class="ne-text">
                    T252
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="uc980650d">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#DJ77U" href="ch3#DJ77U">
                <span class="ne-text">
                    T322
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="681">
                <p class="ne-p" id="u0d8ea050">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161705" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161705" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX216)
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

                <!-- Section 6 -->
        <div class="self-section">
            <h1 id="hRxto">
            <span class="ne-text">
            6. 操作符
            </span>
            </h1>
            <h2 id="d9t6j">
            <span class="ne-text">
            6.1 运算符
            </span>
            </h2>
            <p class="ne-p" id="u835d87ec" style="text-indent: 2em">
            <span class="ne-text">
            编程常用
            </span>
            <code class="ne-code">
            <span class="ne-text">
                +
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                -
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                *
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                /
            </span>
            </code>
            <span class="ne-text">
            来分别执行加、减、乘、除数学运算，用=来执行赋值操作，关系运算符
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &gt;
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &gt;=
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &lt;
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &lt;=
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                ==
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                !=
            </span>
            </code>
            <span class="ne-text">
            与小学数学中的用法相同。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="u0ab398fc">
            <span class="ne-text">
                特别强调，
            </span>
            <strong>
                <span class="ne-text">
                等于运算符是两个等号
                </span>
            </strong>
            <code class="ne-code">
                <strong>
                <span class="ne-text">
                ==
                </span>
                </strong>
            </code>
            <span class="ne-text">
                ，初学者常用赋值号代替等于判断，从而产生了无法预知的结果。初学者在进行等于判断的时候要特别注意=的数量。
            </span>
            </p>
            </div>
            <p class="ne-p" id="uc4b0f60a" style="text-indent: 2em">
            <span class="ne-text">
            有时为了书写方便，还会采用复合运算符
            </span>
            <code class="ne-code">
            <span class="ne-text">
                +=
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                -=
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                *=
            </span>
            </code>
            <span class="ne-text">
            、
            </span>
            <code class="ne-code">
            <span class="ne-text">
                /=
            </span>
            </code>
            <span class="ne-text">
            表示。例如
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a+=2
            </span>
            </code>
            <span class="ne-text">
            表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a=a+2
            </span>
            </code>
            <span class="ne-text">
            。注意
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a*=m+1
            </span>
            </code>
            <span class="ne-text">
            表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a=a*(m+1)
            </span>
            </code>
            <span class="ne-text">
            。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="ubf9b94c7">
            <span class="ne-text">
                C/C++中没有幂次运算符，初学者常把
            </span>
            <code class="ne-code">
                <span class="ne-text">
                ^
                </span>
            </code>
            <span class="ne-text">
                当做幂运算符，实际上它是“位或”操作符。可以包含头文件
            </span>
            <code class="ne-code">
                <span class="ne-text">
                &lt;cmath&gt;
                </span>
            </code>
            <span class="ne-text">
                ，使用
            </span>
            <code class="ne-code">
                <span class="ne-text">
                pow
                </span>
            </code>
            <span class="ne-text">
                函数进行代替。但是要特别注意，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                pow
                </span>
            </code>
            <span class="ne-text">
                的返回值为浮点数类型。
            </span>
            </p>
            </div>
            <h3 id="bqzYv">
            <span class="ne-text">
            知识点：T261-T263
            </span>
            </h3>
            <table border=1 class="ne-table" id="tdcpl" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ud794cdec">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="564">
                <p class="ne-p" id="u526baa74" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u8739fbd9">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u6fdd078c">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u3f6427a2">
                <span class="ne-text">
                T261
                </span>
                </p>
                </td>
                <td width="564">
                <p class="ne-p" id="ue28c8edd">
                <span class="ne-text">
                等于判断是
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    ==
                </span>
                </code>
                <span class="ne-text">
                ，初学者经常容易写成
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    =
                </span>
                </code>
                <span class="ne-text">
                ，这是初学者的经典错误！
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ufa6bb2f7">
                <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
                <span class="ne-text">
                    T213
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="ude5f1ab5">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#rVM6q" href="ch3#rVM6q">
                <span class="ne-text">
                    T317
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u67cf3ec6">
                <span class="ne-text">
                T262
                </span>
                </p>
                </td>
                <td width="564">
                <p class="ne-p" id="ub112cc34">
                <span class="ne-text">
                掌握复合运算符的语法书写方式
                </span>
                </p>
                </td>
                <td width="61">
                </td>
                <td width="55">
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="ubf0c2398">
                <span class="ne-text">
                T263
                </span>
                </p>
                </td>
                <td width="564">
                <p class="ne-p" id="u3185fe17">
                <span class="ne-text">
                C/C++中没有幂次运算符；幂运算函数为pow，但是其返回值是浮点型，不建议使用，一定要使用时要注意浮点舍入的潜在问题
                </span>
                </p>
                </td>
                <td width="61">
                </td>
                <td width="55">
                <p class="ne-p" id="u2c300f22">
                <a class="ne-link" data-href="#GYNKe" href="#GYNKe">
                <span class="ne-text">
                    T291
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="pbqKK">
            <span class="ne-text">
            6.2 除法和整除
            </span>
            </h2>
            <p class="ne-p" id="u095b1ec0" style="text-indent: 2em">
            <span class="ne-text">
            C/C++中除法和整除都用相同的操作符
            </span>
            <code class="ne-code">
            <span class="ne-text">
                /
            </span>
            </code>
            <span class="ne-text">
            。二者的区别是：如果分子和分母都为整数，则商自动取整，即整除运算。如果分子和分母中有一个为浮点数，则商为浮点数。当分子和分母都为整数时，为了取得浮点数的结果，需要将其中之一强制转换为浮点数。从理论上讲，整数除整数等于整数，浮点数除浮点数等于浮点数，因为
            </span>
            <a class="ne-link" data-href="#jVv0C" href="#jVv0C">
            <span class="ne-text">
                隐式类型转换
            </span>
            </a>
            <span class="ne-text">
            的存在，混合运算时整型会转换为浮点型，因此只要分子和分母其中之一为浮点数即可。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="u4702de63">
            <span class="ne-text">
                除法和整除的区分是初学者的常犯错误之一，常常忽略了整除而导致结果不正确。
            </span>
            </p>
            </div>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="MPiLc"><span style="font-weight:bold;">代码2.23</span> 除法和整除运算<code>#include &lt;iostream&gt;
    #include &lt;cmath&gt;
    using namespace std;
    int main()
    {
        cout&lt;&lt;(1/3)&lt;&lt;endl;
        cout&lt;&lt;(1.0/3)&lt;&lt;endl;
        cout&lt;&lt;(1./3)&lt;&lt;endl;
        int a=1,b=3;
        cout&lt;&lt;(a/b)&lt;&lt;endl;
        cout&lt;&lt;((float)a/b)&lt;&lt;endl;
        cout&lt;&lt;(float(a)/b)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="Xa9cc" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="链接20">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u29e3a719">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u021d532d">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u66f10156">
                <span class="ne-text">
                0
                </span>
                </p>
                <p class="ne-p" id="uaad16864">
                <span class="ne-text">
                0.333333
                </span>
                </p>
                <p class="ne-p" id="u4fce5899">
                <span class="ne-text">
                0.333333
                </span>
                </p>
                <p class="ne-p" id="ud7cd719a">
                <span class="ne-text">
                0
                </span>
                </p>
                <p class="ne-p" id="链接1e">
                <span class="ne-text">
                0.333333
                </span>
                </p>
                <p class="ne-p" id="u686ff715">
                <span class="ne-text">
                0.333333
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="udaf74b43">
            <span class="ne-text">
                第8行将1写为1.后，也将1作为浮点数。
            </span>
            </li>
            <li id="ue2fe112d">
            <span class="ne-text">
                第11行是类型强制转换，形成了一个新的浮点型临时变量，第12行是用a构造一个float型对象，二者的含义不同，但达到的效果相同。
            </span>
            </li>
            </ul>
            <div class="ne-quote">
            <p class="ne-p" id="ucc0b4d4b">
            <strong>
                <span class="ne-text">
                计算顺序
                </span>
            </strong>
            <span class="ne-text">
                ：因为整除的原因，一定要特别注意计算顺序。例如三个整数a，b，c，如果数学上保证a*b一定能被c整除，在书写时，一定要写成a*b/c，而不能写成a/c*b或b/c*a，因为整除会导致小数精度的丢失，从而导致结果错误。如果能数学上能保证a或b都能被c整除，那么建议使用a/c*b或b/c*a，这样会避免因为a*b数值过大而导致的内存溢出。
            </span>
            </p>
            </div>
            <h3 id="aihAX">
            <span class="ne-text">
            知识点：T264
            </span>
            </h3>
            <table border=1 class="ne-table" id="eBTcO" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u8eeb0b43">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="593">
                <p class="ne-p" id="ub298d67a" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="链接1a">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="57">
                <p class="ne-p" id="u2a84fb95">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u114e8ab7">
                <span class="ne-text">
                T264
                </span>
                </p>
                </td>
                <td width="593">
                <p class="ne-p" id="u7c8b19b9">
                <code class="ne-code">
                <span class="ne-text">
                    /
                </span>
                </code>
                <span class="ne-text">
                既可以进行浮点除法（被除数和除数其中之一为浮点数），也可以进行整除（被除数和除数都为整数），一定要能区分二者的不同，混合运算时要特别注意计算顺序
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u8cd5aa0c">
                <a class="ne-link" data-href="#jVv0C" href="#jVv0C">
                <span class="ne-text">
                    T251
                </span>
                </a>
                </p>
                </td>
                <td width="57">
                <p class="ne-p" id="u97dba815">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="711">
                <p class="ne-p" id="ubb9bdc85">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161704" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161704" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX215)
                </span>
                </a>
                <span class="ne-text">
                ，
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?id=190098&question_bank_id=13997" href="https://www.qingline.net/practice-list/practice?id=190098&question_bank_id=13997" target="_blank">
                <span class="ne-text">
                    (LX224)
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="hfuhq">
            <span class="ne-text">
            6.3 求模运算
            </span>
            </h2>
            <p class="ne-p" id="u2daedae6">
            <span class="ne-text">
            a%b称为a对b求模(modulus)
                        ，简言之就是求a除以b的余数，要求a和b必须都为整数。求模运算在程序设计中比较常见，主要有以下功能：
            </span>
            </p>
            <ul class="ne-ul">
            <li id="u09ad351e">
            <span class="ne-text">
                倍数判断。如果a%b==0，则a是b的倍数。
            </span>
            </li>
            <li id="u673d72e1">
            <span class="ne-text">
                奇偶判断。如果a%2==0，则a是偶数，否则a为奇数。
            </span>
            </li>
            <li id="链接90">
            <span class="ne-text">
                取n进制的个位数。如果a%n的结果为m，则m是a作为n进制的各位数。例如153%10=3表示153在十进制下的个位数为3，153%2=1表示153在二进制下的个位数为1。
            </span>
            </li>
            </ul>
            <h3 id="KQ3JL">
            <span class="ne-text">
            例题2.1
            </span>
            </h3>
            <p class="ne-p" id="u68ad362d" style="text-indent: 2em">
            <span class="ne-text">
            输入一个两位数，输出每个数位上的数值，以空格分隔。
            </span>
            </p>
            <table border=1 class="ne-table" id="ig1qF" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ufae24cda">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uf2229385">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ue91dc9a9">
                <span class="ne-text">
                78
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uab314560">
                <span class="ne-text" style="color: var(--text-normal)">
                7 8
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="adqhi"><span style="font-weight:bold;">代码2.24</span> <code>#include &lt;iostream&gt;
    using namespace std;

    int main()
    {
        int v;
        cin&gt;&gt;v;
        cout&lt;&lt;v/10&lt;&lt;' '&lt;&lt;v%10&lt;&lt;endl;
        return 0;
    }</code></pre>
            <ul class="ne-ul">
            <li id="u7f39d752">
            <span class="ne-text">
                取余可以得到个位数值，整除操作可以让其他数位移动到个位上。
            </span>
            </li>
            </ul>
            <h3 id="AJjs3">
            <span class="ne-text">
            例题
            </span>
            <span class="ne-text" style="color: rgb(64, 64, 64)">
            2.2
            </span>
            </h3>
            <p class="ne-p" id="uf9b99f0d" style="text-indent: 2em">
            <span class="ne-text" style="color: rgb(64, 64, 64)">
            Tom 和
                        Mary 玩取石子的游戏：
            </span>
            <em>
            <span class="ne-text" style="color: rgb(64, 64, 64)">
                n
            </span>
            </em>
            <span class="ne-text" style="color: rgb(64, 64, 64)">
            颗石子码成一堆，从 Tom 开始，两人轮流取石子，最少取 1 颗、最多取 2
                        颗，谁取到最后一颗石子，谁就失败。两个人都极聪明，不会放过任何取胜的机会。请同样聪明的你编写程序，输入石子的数量，输出Mary是否获胜。
            </span>
            </p>
            <table border=1 class="ne-table" id="G2QVv" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ue67dce8b">
                <strong>
                <span class="ne-text">
                    样例输入1
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uce6e6e80">
                <strong>
                <span class="ne-text">
                    样例输出1
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="uc8c3cc4d">
                <span class="ne-text">
                1
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u99a2a00b">
                <span class="ne-text" style="color: var(--text-normal)">
                true
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u699c8d80">
                <strong>
                <span class="ne-text">
                    样例输入2
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uf2d4b7d8">
                <strong>
                <span class="ne-text">
                    样例输出2
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u427a0297">
                <span class="ne-text">
                2
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="ua82749ee">
                <span class="ne-text" style="color: var(--text-normal)">
                false
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u4d576c2e">
            <span class="ne-text">
            【题目解析】
            </span>
            </p>
            <p class="ne-p" id="u81c3b525" style="text-indent: 2em">
            <span class="ne-text">
            当只有1颗时，只能Tom取走，因此Mary获胜。当有2-3颗时，Tom可以取走1-2颗，把最后一颗留个Mary，因此Tom获胜。而当有4颗时，无论Tom怎么取，都会把主动权交给Mary，因此Mary获胜。当有5-6颗时，Tom重新掌握了主动权。由此可知，当两个人都非常聪明时，结果出现了循环，石子数为3的倍数加1时，Mary获胜，石子数为3的倍数加2或3的倍数时，Tom获胜。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="Ppboq"><span style="font-weight:bold;">代码2.25</span> <code>#include &lt;iostream&gt;
    using namespace std;

    int main()
    {
        int n;
        cin&gt;&gt;n;
        cout&lt;&lt;boolalpha&lt;&lt;(n%3==1)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <h3 id="aQStI">
            <span class="ne-text">
            知识点：T265
            </span>
            </h3>
            <table border=1 class="ne-table" id="NHIgb" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u0e5b4e6a">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="559">
                <p class="ne-p" id="ued0f89dd" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="59">
                <p class="ne-p" id="链接6c">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="82">
                <p class="ne-p" id="u088daea8">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u2c535b18">
                <span class="ne-text">
                T265
                </span>
                </p>
                </td>
                <td width="559">
                <p class="ne-p" id="u46f7cb17">
                <span class="ne-text">
                对于周期性运算，首先要考虑取余运算
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    %
                </span>
                </code>
                <span class="ne-text">
                ，经典使用场景为奇偶判断、倍数判断和整数的数位分解
                </span>
                </p>
                </td>
                <td width="59">
                <p class="ne-p" id="uc350332c">
                <br/>
                </p>
                </td>
                <td width="82">
                <p class="ne-p" id="链接ef">
                <a class="ne-link" data-href="#fzLrK" href="#fzLrK">
                <span class="ne-text">
                    T26A
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#IcjHC" href="ch4#IcjHC">
                <span class="ne-text">
                    T471
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#FdHGv" href="ch4#FdHGv">
                <span class="ne-text">
                    T477
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="700">
                <p class="ne-p" id="u5bf80bbb">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161695" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161695" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX206)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161697" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161697" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX208)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161701" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161701" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX212)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="SBkOV">
            <span class="ne-text">
            6.4 逻辑运算符
            </span>
            </h2>
            <table border=1 class="ne-table" id="uJ2M4" style="text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td style="background-color: rgb(63, 63, 63)" width="75">
                <p class="ne-p" id="u38055b5b">
                <strong>
                <span class="ne-text" style="color: rgb(255, 255, 255); font-size: 16px">
                    运算符
                </span>
                </strong>
                </p>
                </td>
                <td style="background-color: rgb(63, 63, 63)" width="72">
                <p class="ne-p" id="u92d327a1">
                <strong>
                <span class="ne-text" style="color: rgb(255, 255, 255); font-size: 16px">
                    说明
                </span>
                </strong>
                </p>
                </td>
                <td style="background-color: rgb(63, 63, 63)" width="81">
                <p class="ne-p" id="链接8c">
                <strong>
                <span class="ne-text" style="color: rgb(255, 255, 255); font-size: 16px">
                    范例
                </span>
                </strong>
                </p>
                </td>
                <td style="background-color: rgb(63, 63, 63)" width="518">
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="75">
                <p class="ne-p" id="ua81c68b2">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                &amp;&amp;
                </span>
                </p>
                </td>
                <td width="72">
                <p class="ne-p" id="链接cc">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                逻辑与
                </span>
                </p>
                </td>
                <td width="81">
                <p class="ne-p" id="ubcb79c74">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                A &amp;&amp; B
                </span>
                </p>
                </td>
                <td width="518">
                <p class="ne-p" id="u705bfc72">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                如果 A 和 B 的值都为真，那么结果为真，否则结果为假。
                </span>
                </p>
                <p class="ne-p" id="ue5e44df7">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                如果 A 的值为假，那么不会计算 B 的值，这叫做短路。
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td style="background-color: rgb(246, 248, 250)" width="75">
                <p class="ne-p" id="uc59460ad">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                ||
                </span>
                </p>
                </td>
                <td style="background-color: rgb(246, 248, 250)" width="72">
                <p class="ne-p" id="u618a3326">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                逻辑或
                </span>
                </p>
                </td>
                <td style="background-color: rgb(246, 248, 250)" width="81">
                <p class="ne-p" id="u8a9a764c">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                A || B
                </span>
                </p>
                </td>
                <td style="background-color: rgb(246, 248, 250)" width="518">
                <p class="ne-p" id="u8f827394">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                只要 A 和 B 的值一个为真，那么结果为真，否则结果为假。
                </span>
                </p>
                <p class="ne-p" id="u0b5b3ad4">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                如果 A 的值为真，那么不会计算 B 的值，这叫做短路。
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="75">
                <p class="ne-p" id="ucd9881b2">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                !
                </span>
                </p>
                </td>
                <td width="72">
                <p class="ne-p" id="u630b9cbf">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                逻辑非
                </span>
                </p>
                </td>
                <td width="81">
                <p class="ne-p" id="uda9e93bf">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                !A
                </span>
                </p>
                </td>
                <td width="518">
                <p class="ne-p" id="u056afea4">
                <span class="ne-text" style="color: rgb(36, 41, 46); font-size: 16px">
                如果原来 A 为真，那么结果为假。如果原来 A 为假，那么结果为真。
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="ud76d900f" style="text-indent: 2em">
            <span class="ne-text">
            因为逻辑与和逻辑或存在短路运算，所以要将重要的条件放在前面，如果前面的条件不成立，将不会考虑后面的条件。短路运算在很多场合都可以大幅提升计算的效率。
            </span>
            </p>
            <p class="ne-p" id="ud2f3c10f" style="text-indent: 2em">
            <span class="ne-text">
            特别注意，C/C++中不支持连续比较。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="Xyc0p"><span style="font-weight:bold;">代码2.26</span> <code>#include&lt;iostream&gt;
    using namespace std;
    int main()
    {
        int m=4;
        cout&lt;&lt;(3&lt;m&lt;5)&lt;&lt;endl;
        m=2;
        cout&lt;&lt;(3&lt;m&lt;5)&lt;&lt;endl;
        m=6;
        cout&lt;&lt;(3&lt;m&lt;5)&lt;&lt;endl;
    }</code></pre>
            <table border=1 class="ne-table" id="DG6BB" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u9d6c5cd7">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uae58ed84">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u73c03344">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u5ae53b1b">
                <span class="ne-text">
                1
                </span>
                </p>
                <p class="ne-p" id="链接01">
                <span class="ne-text">
                1
                </span>
                </p>
                <p class="ne-p" id="ue3822376">
                <span class="ne-text">
                1
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u6fd294f9" style="text-indent: 2em">
            <span class="ne-text">
            从输出结果可以看到，无论
            </span>
            <code class="ne-code">
            <span class="ne-text">
                m
            </span>
            </code>
            <span class="ne-text">
            为2或4或6，结果都为1，即判断结果都为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                true
            </span>
            </code>
            <span class="ne-text">
            。这是因为首先判断
            </span>
            <code class="ne-code">
            <span class="ne-text">
                3&lt;m
            </span>
            </code>
            <span class="ne-text">
            ，无论结果是0或1，都是小于5。因此最终结果为1。如果需要进行连续关系判断，必须使用逻辑运算，即改为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                3&lt;m &amp;&amp; m&lt;5
            </span>
            </code>
            <span class="ne-text">
            ，才能得到预期结果。这也是初学者的常犯错误之一。
            </span>
            </p>
            <p class="ne-p" id="u683f502b" style="text-indent: 2em">
            <span class="ne-text">
            代码2.11的第7行也可以用逻辑非改写为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                cout&lt;&lt;(!!a+!!b+!!c);
            </span>
            </code>
            <span class="ne-text">
            ，以
            </span>
            <code class="ne-code">
            <span class="ne-text">
                a=3
            </span>
            </code>
            <span class="ne-text">
            为例，3为非0值，表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                true
            </span>
            </code>
            <span class="ne-text">
            ，则
            </span>
            <code class="ne-code">
            <span class="ne-text">
                !3
            </span>
            </code>
            <span class="ne-text">
            表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                false
            </span>
            </code>
            <span class="ne-text">
            ，则
            </span>
            <code class="ne-code">
            <span class="ne-text">
                !!3
            </span>
            </code>
            <span class="ne-text">
            表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                true
            </span>
            </code>
            <span class="ne-text">
            ，参与算术运算时被计算为1。同理
            </span>
            <code class="ne-code">
            <span class="ne-text">
                !!0
            </span>
            </code>
            <span class="ne-text">
            表示0，
            </span>
            <code class="ne-code">
            <span class="ne-text">
                !!5
            </span>
            </code>
            <span class="ne-text">
            表示1，因此计算结果和代码2.11相同。
            </span>
            </p>
            <h3 id="iWk2T">
            <span class="ne-text">
            随堂练习2.3
            </span>
            </h3>
            <p class="ne-p" id="u7e1d676c" style="text-indent: 2em">
            <span class="ne-text">
            能被400整除的为闰年，或能被4整除并且不能被100整除的为闰年。完成以下程序的标记为TODO的缺失部分，闰年输出为1，否则输出为0。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="agzJ2"><span style="font-weight:bold;">代码2.27</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main()
    {
        int year;
        cin&gt;&gt;year;
        cout&lt;&lt;(  /*TODO*/            )&lt;&lt;endl;
        return 0;
    }</code></pre>
            <div class="ne-quote">
            <p class="ne-p" id="u078d98b3">
            <span class="ne-text">
                /*注释内容*/在C/C++中表示块注释
            </span>
            </p>
            </div>
            <h3 id="MIXWN">
            <span class="ne-text">
            知识点：T266-T267
            </span>
            </h3>
            <table border=1 class="ne-table" id="bxO9U" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u6aa854fe">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="571">
                <p class="ne-p" id="u911cae5f" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u9d660df5">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="uc9206218">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="uad3a8fa5">
                <span class="ne-text">
                T266
                </span>
                </p>
                </td>
                <td width="571">
                <p class="ne-p" id="u470a0169">
                <span class="ne-text">
                C/C++中没有连续关系判断，多条件时必须采用
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    &amp;&amp;
                </span>
                </code>
                <span class="ne-text">
                和
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    ||
                </span>
                </code>
                <span class="ne-text">
                运算符
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u8033ac03">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u26d8aeee">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="687">
                <p class="ne-p" id="u383d16b8">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183800" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183800" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX311)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="ub5eb600c">
                <span class="ne-text">
                T267
                </span>
                </p>
                </td>
                <td width="571">
                <p class="ne-p" id="u6ad5be68">
                <span class="ne-text">
                注意取反运算
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    !
                </span>
                </code>
                <span class="ne-text">
                在数值类型和逻辑类型中的映射方式变化
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ubf020a98">
                <a class="ne-link" data-href="#iAVWo" href="#iAVWo">
                <span class="ne-text">
                    T244
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="EBh5U">
            <span class="ne-text">
            6.5 自增和自减运算
            </span>
            </h2>
            <p class="ne-p" id="链接ff" style="text-indent: 2em">
            <span class="ne-text">
            在 C++ 中，
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i++
            </span>
            </code>
            <span class="ne-text">
            （后自增）或
            </span>
            <code class="ne-code">
            <span class="ne-text">
                ++i
            </span>
            </code>
            <span class="ne-text">
            （前自增）都表示
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i=i+1
            </span>
            </code>
            <span class="ne-text">
            。
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i++
            </span>
            </code>
            <span class="ne-text">
            具有赋值运算，改变
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i
            </span>
            </code>
            <span class="ne-text">
            的值，而
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i+1
            </span>
            </code>
            <span class="ne-text">
            没有赋值运算，不改变
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i
            </span>
            </code>
            <span class="ne-text">
            的值，因此
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i++
            </span>
            </code>
            <span class="ne-text">
            和
            </span>
            <code class="ne-code">
            <span class="ne-text">
                i+1
            </span>
            </code>
            <span class="ne-text">
            是不同的。
            </span>
            </p>
            <p class="ne-p" id="u552f2931" style="text-indent: 2em">
            <span class="ne-text">
            前自增与后自增的区别是前自增是先自增后赋值，后自增是先赋值后自增。与之类似，前自减与后自减的区别是前自减是先自减后赋值，后自减是先赋值后自减。
            </span>
            </p>
            <p class="ne-p" id="uc6bb00d6">
            <br/>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="RkfOs"><span style="font-weight:bold;">代码2.28</span> 前自增与后自增<code>#include &lt;iostream&gt;
    using namespace std;
    int main(int argc, char **argv)
    {
        int a = 100;
        int b = a++;
        int c = 100;
        int d = ++c;
        cout &lt;&lt; "a = " &lt;&lt; a &lt;&lt; " b = " &lt;&lt; b &lt;&lt; endl;
        cout &lt;&lt; "c = " &lt;&lt; c &lt;&lt; " d = " &lt;&lt; d &lt;&lt; endl;
    }</code></pre>
            <table border=1 class="ne-table" id="ZrCfZ" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ub77e2190">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u7965f5b2">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ubb9609c2">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uab616dc4">
                <span class="ne-text">
                a = 101 b = 100
                </span>
                </p>
                <p class="ne-p" id="uf6dbfad4">
                <span class="ne-text">
                c = 1 01 d = 101
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h3 id="t5tWx">
            <span class="ne-text">
            知识点：T268
            </span>
            </h3>
            <table border=1 class="ne-table" id="jYJoE" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u5dfd3d34">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="578">
                <p class="ne-p" id="u86f41a36" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u03b7708b">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="ue48d0b8e">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u9d5eccb4">
                <span class="ne-text">
                T268
                </span>
                </p>
                </td>
                <td width="578">
                <p class="ne-p" id="uc5df9609">
                <span class="ne-text">
                在复合语句中，要注意自增和自减运算的发生时刻。建议初学者把自增和自减运算形成独立语句，仅利用其书写上的便捷性，不要因为运算顺序的错误而产生潜在问题
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ubf85f0e0">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u9ebe4b86">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#pjuoH" href="ch4#pjuoH">
                <span class="ne-text">
                    T412
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="jmQM3">
            <span class="ne-text">
            6.6 sizeof运算符
            </span>
            </h2>
            <p class="ne-p" id="u9a37b41e" style="text-indent: 2em">
            <span class="ne-text">
            在 C/C++ 中，sizeof
                        运算符用于获取一个变量或者数据类型所占的内存的字节大小。注意sizeof是一个运算符，而不是一个函数。函数求值是在运行的时候，而关键字 sizeof 求值是在编译的时候。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="Blmy3"><span style="font-weight:bold;">代码2.29</span> sizeof运算符<code>#include &lt;iostream&gt;
    using namespace std;
    int main(int argc, char **argv)
    {
        int sizeofInt = sizeof(int);
        int sizeofLL = sizeof(long long);
        int sizeofChar = sizeof(char);
        int sizeofFloat = sizeof(float);
        int sizeofDouble = sizeof(double);
        cout &lt;&lt;"sizeofInt = "&lt;&lt;sizeofInt&lt;&lt;" sizeofLL = "&lt;&lt;sizeofLL&lt;&lt;endl;
        cout &lt;&lt;"sizeofChar = "&lt;&lt;sizeofChar&lt;&lt;endl;
        cout &lt;&lt;"sizeofFloat = "&lt;&lt;sizeofFloat&lt;&lt;" sizeofDouble = "&lt;&lt;sizeofDouble&lt;&lt;endl;
    }</code></pre>
            <table border=1 class="ne-table" id="Wa7Ci" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ueecb7d78">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u00df86f4">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u68df39c2">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u3e165e22">
                <span class="ne-text">
                sizeofInt = 4 sizeofLL = 8
                </span>
                </p>
                <p class="ne-p" id="ua7534e89">
                <span class="ne-text">
                sizeofChar = 1
                </span>
                </p>
                <p class="ne-p" id="u627e5109">
                <span class="ne-text">
                sizeofFloat = 4 sizeofDouble = 8
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h3 id="e1CxH">
            <span class="ne-text">
            知识点：T269
            </span>
            </h3>
            <table border=1 class="ne-table" id="WTfGk" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ucd01e341">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="570">
                <p class="ne-p" id="链接e5" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ue4ac7775">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u51d99b4d">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u7f35911f">
                <span class="ne-text">
                T269
                </span>
                </p>
                </td>
                <td width="570">
                <p class="ne-p" id="u7d0164d8">
                <span class="ne-text">
                通过sizeof运算符，了解变量和常量的空间占用状况
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ue27add41">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="udc5aa48c">
                <br/>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="k0cda">
            <span class="ne-text">
            6.7 位运算*
            </span>
            </h2>
            <p class="ne-p" id="ub2befd9c" style="text-indent: 2em">
            <span class="ne-text">
            计算机中的一切最终都是以二进制形式表示的，一个1/0称为一位（bit）。C++中提供了针对二进制的运算，直接操作一个对象的某个比特位。以a=22=0b10110,
                        b=28=0b11100为例，a和b都是unsigned char，下表展示了位运算的示例。请注意，运算时不需要特意将数值转换为二进制。
            </span>
            </p>
            <table border=1 class="ne-table" id="rafyB" style="text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td width="80">
                <p class="ne-p" id="ubb6217c4">
                <span class="ne-text">
                运算
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="ucfbe20a1">
                <span class="ne-text">
                符号
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="ud33e0803">
                <span class="ne-text">
                说明
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="u94cdc4e7">
                <span class="ne-text">
                样例
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="u5df6afd9">
                <span class="ne-text">
                结果
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u1d2dfca8">
                <span class="ne-text">
                二进制
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 64px">
                <td width="80">
                <p class="ne-p" id="u4c62e923">
                <span class="ne-text">
                按位取反
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="ub4d82746">
                <span class="ne-text">
                ~
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="链接c0">
                <span class="ne-text">
                将操作数按位取反，即对于每个二进制位，1变0，0变1。
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="ue62062f8">
                <span class="ne-text">
                ~a
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="链接7b">
                <span class="ne-text">
                233
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u944e3a26">
                <span class="ne-text">
                11101001
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 63px">
                <td width="80">
                <p class="ne-p" id="ub0dd644f">
                <span class="ne-text">
                按位与
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="u8ff19251">
                <span class="ne-text">
                &amp;
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="u3d28ebf2">
                <span class="ne-text">
                将a与b对应二进制位逐一进行按位与运算。当且仅当a与b中对应二进制位均为1时，结果位为1，否则为0。
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="u2b195aaf">
                <span class="ne-text">
                a&amp;b
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="u0f46d515">
                <span class="ne-text">
                20
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="uefa69634">
                <span class="ne-text">
                10100
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="80">
                <p class="ne-p" id="udaa7d754">
                <span class="ne-text">
                按位或
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="链接93">
                <span class="ne-text">
                |
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="u62efcced">
                <span class="ne-text">
                将a与b对应二进制位逐一进行按位或运算。当且仅当a与b中对应二进制位中至少有一个1时，结果位为1，否则为0。
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="u59073bbd">
                <span class="ne-text">
                a|b
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="链接91">
                <span class="ne-text">
                30
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u278c0f55">
                <span class="ne-text">
                11110
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="80">
                <p class="ne-p" id="u05e3676a">
                <span class="ne-text">
                按位异或
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="ua31bd2bc">
                <span class="ne-text">
                ^
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="u64637c60">
                <span class="ne-text">
                将a与b对应二进制位逐一进行按位异或运算。当且仅当a与b中对应二进制位不同时，结果位为1，否则为0。
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="uf1d6abcf">
                <span class="ne-text">
                a^b
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="ua2f4b400">
                <span class="ne-text">
                10
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u8db34fe7">
                <span class="ne-text">
                1010
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="80">
                <p class="ne-p" id="uf43dfa11">
                <span class="ne-text">
                左移位
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="u9a907b77">
                <span class="ne-text">
                &lt;&lt;
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="u5a6492a4">
                <span class="ne-text">
                a&lt;&lt;n表示将对象a的二进制位逐次左移n位，超出左端的二进制位丢弃，并用0填充右端空出的位置，相当于乘2
                </span>
                <sup>
                <span class="ne-text">
                    n
                </span>
                </sup>
                <span class="ne-text">
                。
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="ue904361c">
                <span class="ne-text">
                a&lt;&lt;2
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="u1b8afac8">
                <span class="ne-text">
                88
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="ue5779739">
                <span class="ne-text">
                1011000
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="80">
                <p class="ne-p" id="u54387bbc">
                <span class="ne-text">
                右移位
                </span>
                </p>
                </td>
                <td width="52">
                <p class="ne-p" id="ud80f33d5">
                <span class="ne-text">
                &gt;&gt;
                </span>
                </p>
                </td>
                <td width="406">
                <p class="ne-p" id="ucdf93127">
                <span class="ne-text">
                a&gt;&gt;n表示将对象a的二进制位逐次右移n位，超出右端的二进制位丢弃。如果a是无符号整数，用0填充左端空位，如果a为有符号整数，填充值取决于具体的机器，可以是0，也可以是符号位，相当于整除2
                </span>
                <sup>
                <span class="ne-text">
                    n
                </span>
                </sup>
                <span class="ne-text">
                。
                </span>
                </p>
                </td>
                <td width="62">
                <p class="ne-p" id="u40f8aa9d">
                <span class="ne-text">
                a&gt;&gt;3
                </span>
                </p>
                </td>
                <td width="53">
                <p class="ne-p" id="ua755ff70">
                <span class="ne-text">
                2
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u21e7ed71">
                <span class="ne-text">
                10
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="Z2aBr"><span style="font-weight:bold;">代码2.30</span> 位运算基本操作<code>#include &lt;iostream&gt;
    #include &lt;bitset&gt;
    using namespace std;
    int main(){
        unsigned char a = 0b10110,b=0b11100;   //0b开始表示一个二进制数
        cout&lt;&lt;(int)a&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(a)&lt;&lt;endl;
        cout&lt;&lt;(int)b&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(b)&lt;&lt;endl;
        cout&lt;&lt;(int)(unsigned char)~a&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(~a)&lt;&lt;endl;
        cout&lt;&lt;(a&amp;b)&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(a&amp;b)&lt;&lt;endl;
        cout&lt;&lt;(a|b)&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(a|b)&lt;&lt;endl;
        cout&lt;&lt;(a^b)&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(a^b)&lt;&lt;endl;
        cout&lt;&lt;(a&lt;&lt;2)&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(a&lt;&lt;2)&lt;&lt;endl;
        cout&lt;&lt;(a&gt;&gt;3)&lt;&lt;'\t'&lt;&lt;bitset&lt;8&gt;(a&gt;&gt;3)&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="K9NWf" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u521d1551">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u50185e59">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u1d728856">
                <span class="ne-text">
                （无）
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u1ef1b7f1">
                <span class="ne-text">
                22 00010110
                </span>
                </p>
                <p class="ne-p" id="u5705afc4">
                <span class="ne-text">
                28 00011100
                </span>
                </p>
                <p class="ne-p" id="u1b9cfc6a">
                <span class="ne-text">
                233 11101001
                </span>
                </p>
                <p class="ne-p" id="ufdf37ad9">
                <span class="ne-text">
                20 00010100
                </span>
                </p>
                <p class="ne-p" id="链接1a">
                <span class="ne-text">
                30 00011110
                </span>
                </p>
                <p class="ne-p" id="u65dbe25b">
                <span class="ne-text">
                10 00001010
                </span>
                </p>
                <p class="ne-p" id="u98aee70c">
                <span class="ne-text">
                88 01011000
                </span>
                </p>
                <p class="ne-p" id="ue770bf20">
                <span class="ne-text">
                2 00000010
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u8cf8b5cf" style="text-indent: 2em">
            <span class="ne-text">
            当需要进行二进制相关的运算时，位运算能发挥极好的作用。
            </span>
            </p>
            <ul class="ne-ul">
            <li id="u7b8d4e2d">
            <span class="ne-text">
                计算一个数的二进制中有几个1时，就可以通过位与操作进行逐位判断，详见第四章9.4节。
            </span>
            </li>
            <li id="uf446aaa1">
            <span class="ne-text">
                第6-7行在输出a和b时，要进行强制类型转换，因为这里需要看到的是数值，即ASCII码值，如果直接输出，会显示一个不可见字符。
            </span>
            </li>
            <li id="u87aac28a">
            <span class="ne-text">
                第9-13行不需要进行强制类型转换，是因为有运算存在。一旦执行运算，就会产生整型提升，运算结果会以int形式存在，因此不进行类型转换也能显示ASCII码值。
            </span>
            </li>
            <li id="ud566ccab">
            <span class="ne-text">
                第8行比较特殊，是因为233在作为字符类型时，最高位为1，如果直接转换为int，根据整形提升的规则，符号位为1时前面补1，得到一个非常大的数，这并不是期望的结果。因此先转换为unsigned
                            char类型，让最高位不作为符号位，然后再转换为int，才能输出正确的ASCII值。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="u52db2d5c" style="text-indent: 2em">
            <span class="ne-text">
            因为二进制是数据在计算机中的终极表达形式，所以位运算具有较高的性能。在一些特殊需求下，可以用位运算代替正常的数学运算。
            </span>
            </p>
            <ul class="ne-ul">
            <li id="udbd13c4d">
            <span class="ne-text">
                二进制每右移一位，相当于整除2；每左移一位，相当于放大2倍；当需要进行2
            </span>
            <sup>
                <span class="ne-text">
                n
                </span>
            </sup>
            <span class="ne-text">
                倍放大或缩小时，可以通过移位操作代替数学的乘除法。
            </span>
            </li>
            <li id="u17ff38c3">
            <span class="ne-text">
                二进制中，奇数个位为1，偶数个位为0，因此奇偶判断除了前文提到的
            </span>
            <code class="ne-code">
                <span class="ne-text">
                n%2
                </span>
            </code>
            <span class="ne-text">
                外，还可以用
            </span>
            <code class="ne-code">
                <span class="ne-text">
                n&amp;1
                </span>
            </code>
            <span class="ne-text">
                进行判断，而且显然后者的效率要高很多。
            </span>
            </li>
            </ul>
            <h3 id="fzLrK">
            <span class="ne-text">
            知识点：T26A
            </span>
            </h3>
            <table border=1 class="ne-table" id="HtUM2" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ueca7c1c9">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="577">
                <p class="ne-p" id="u4e9fa5a3" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ucc5a3d4c">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="65">
                <p class="ne-p" id="ubff6ef92">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u3363a524">
                <span class="ne-text">
                T26A
                </span>
                </p>
                </td>
                <td width="577">
                <p class="ne-p" id="u9cf33208">
                <span class="ne-text">
                理解位运算的基本含义，增强对计算机底层结构的理解。位运算的效率高，移位运算可以进行2
                </span>
                <sup>
                <span class="ne-text">
                    n
                </span>
                </sup>
                <span class="ne-text">
                的乘法或除法，
                </span>
                <code class="ne-code">
                <span class="ne-text">
                    n&amp;1
                </span>
                </code>
                <span class="ne-text">
                可以代替奇偶判断，初学者可以忽略位运算
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u2b3b18cb">
                <a class="ne-link" data-href="#aQStI" href="#aQStI">
                <span class="ne-text">
                    T265
                </span>
                </a>
                </p>
                </td>
                <td width="65">
                <p class="ne-p" id="uaabeafc5">
                <a class="ne-link" data-href="#panTK" href="#panTK">
                <span class="ne-text">
                    T26C
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#p3aHU" href="#p3aHU">
                <span class="ne-text">
                    T2A2
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#JieQ4" href="ch4#JieQ4">
                <span class="ne-text">
                    T478
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/khnvy8#G4CX6" href="ch4#G4CX6">
                <span class="ne-text">
                    T479
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="m6vI7">
            <span class="ne-text">
            6.8 三个层次的变量交换
            </span>
            </h2>
            <p class="ne-p" id="uaf7ddfd7" style="text-indent: 2em">
            <span class="ne-text">
            两个变量的值交换是程序设计中的基本运算。
            </span>
            </p>
            <ul class="ne-ul">
            <li id="u9f01206a">
            <span class="ne-text">
                基本形式：为了防止值被覆盖，需要引入一个临时变量，保留被覆盖的值。
            </span>
            </li>
            </ul>
            <img id="tjz36" src="../assets/images/1673252102497-c5c4d3c4-7748-4125-9591-4ebf695c6bec.jpeg" class="img-70"/>
            <p class="ne-p" id="u89d76f66" style="text-align: center">
            <span class="ne-text">
            图2.8 交换咖啡与牛奶
            </span>
            </p>
            <ul class="ne-ul">
            <li id="链接88">
            <span class="ne-text">
                数学方法：如果要求不使用第三个变量，可以通过数学方法解决。
            </span>
            </li>
            </ul>
            <ul class="ne-list-wrap">
            <ul class="ne-ul" ne-level="1">
            <li id="u9ce56844">
                <span class="ne-text">
                第5行保留了两个变量的和；第6行用和减去原来的
                </span>
                <code class="ne-code">
                <span class="ne-text">
                b
                </span>
                </code>
                <span class="ne-text">
                ，就得到了原来的
                </span>
                <code class="ne-code">
                <span class="ne-text">
                a
                </span>
                </code>
                <span class="ne-text">
                ，赋值给
                </span>
                <code class="ne-code">
                <span class="ne-text">
                b
                </span>
                </code>
                <span class="ne-text">
                ；第7行用和减去原来的
                </span>
                <code class="ne-code">
                <span class="ne-text">
                a
                </span>
                </code>
                <span class="ne-text">
                ，就得到了原来的
                </span>
                <code class="ne-code">
                <span class="ne-text">
                b
                </span>
                </code>
                <span class="ne-text">
                ，实现了两个变量的交换。
                </span>
            </li>
            </ul>
            </ul>
            <ul class="ne-ul">
            <li id="u5dad6a19">
            <span class="ne-text">
                位运算形式：数学方法还有一点点小的弊端，如果两个变量都非常大，相加后可能超出了存储范围。可以采用异或运算进行代替。异或有个特点：任何数和自身异或都等于0，而任何数和0异或都等于自身。由此推导出一个新的结论，一个值a另一个值b异或2次，又变成了值a。
            </span>
            </li>
            </ul>
            <ul class="ne-list-wrap">
            <ul class="ne-ul" ne-level="1">
            <li id="u4ffbe06f">
                <span class="ne-text">
                第5行用
                </span>
                <code class="ne-code">
                <span class="ne-text">
                a
                </span>
                </code>
                <span class="ne-text">
                保留了
                </span>
                <code class="ne-code">
                <span class="ne-text">
                a^b
                </span>
                </code>
                <span class="ne-text">
                的结果，因此第6行相当于
                </span>
                <code class="ne-code">
                <span class="ne-text">
                a^b^b=a^(b^b)=a^0=a
                </span>
                </code>
                <span class="ne-text">
                并赋值给
                </span>
                <code class="ne-code">
                <span class="ne-text">
                b
                </span>
                </code>
                <span class="ne-text">
                ；第7行相当于
                </span>
                <code class="ne-code">
                <span class="ne-text">
                a^b^a=(a^a)^b=0^b=b
                </span>
                </code>
                <span class="ne-text">
                ，从而实现了两个变量的交换。位运算不会存在数据溢出的风险。
                </span>
            </li>
            </ul>
            </ul>
            <table id="e8XVN" style="width: 100%">
            <tbody>
            <tr style="height: 33px" >
                <td width="255">
        <pre class="ne-codeblock language-cpp" data-language="cpp" id="JqrQM"><span style="font-weight:bold;">代码2.31</span> 基本形式<code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        int a=3,b=5;
        int temp = a;
        a = b;
        b = temp;
        return 0;
    }</code></pre>
                </td>
                <td width="255">
        <pre class="ne-codeblock language-cpp" data-language="cpp" id="ysXqm"><span style="font-weight:bold;">代码2.32</span> 数学方法<code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        int a=3,b=5;
        a = a+b;
        b = a-b;
        a = a-b;
        return 0;
    }</code></pre>
                </td>
                <td width="255">
        <pre class="ne-codeblock language-cpp" data-language="cpp" id="HYTaJ"><span style="font-weight:bold;">代码2.33</span> 位运算形式<code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        int a=3,b=5;
        a = a^b;
        b = a^b;
        a = a^b;
        return 0;
    }</code></pre>
                </td>
            </tr>
            </tbody>
            </table>
            <div class="ne-quote">
            <p class="ne-p" id="u6ed4cc03">
            <span class="ne-text">
                C++中提供了模板函数swap，用来交换两个相同类型变量的值。例如：
            </span>
            <code class="ne-code">
                <span class="ne-text">
                swap(a,b)
                </span>
            </code>
            <span class="ne-text">
                。
            </span>
            </p>
            </div>
            <h3 id="panTK">
            <span class="ne-text">
            知识点：T26B-T26C
            </span>
            </h3>
            <table border=1 class="ne-table" id="bYc5e" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u87d55f1b">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="532">
                <p class="ne-p" id="u2657f2d3" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u6794bc5e">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u6abe5c13">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="ucf2ddce5">
                <span class="ne-text">
                T26B
                </span>
                </p>
                </td>
                <td width="532">
                <p class="ne-p" id="ue9894677">
                <span class="ne-text">
                变量交换的基本形式是必须掌握的内容，在C++中可以简易的使用swap。
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u8d7ed0e2">
                <br/>
                </p>
                </td>
                <td width="96">
                <p class="ne-p" id="u7f542724">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#XPPV7" href="ch3#XPPV7">
                <span class="ne-text">
                    T312
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#e79I0" href="ch8#e79I0">
                <span class="ne-text">
                    T811
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="689">
                <p class="ne-p" id="uff228691">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161706" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161706" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX217)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u88437dc7">
                <span class="ne-text">
                T26C
                </span>
                </p>
                </td>
                <td width="532">
                <p class="ne-p" id="u55a1bc17">
                <span class="ne-text">
                异或运算是计算机中的最基本操作之一，要掌握使用方法。特别注意位运算是在二进制级别进行对位操作，不会产生溢出。
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ube0e057d">
                <a class="ne-link" data-href="#fzLrK" href="#fzLrK">
                <span class="ne-text">
                    T26A
                </span>
                </a>
                </p>
                </td>
                <td width="96">
                </td>
            </tr>
            </tbody>
            </table>
        </div>

            <!-- Section 7 -->
        <div class="self-section">
            <h1 id="YkVT4">
            <span class="ne-text">
            7. 获取用户输入
            </span>
            </h1>
            <h2 id="ogstE">
            <span class="ne-text">
            7.1 整型和浮点型的cin输入
            </span>
            </h2>
            <p class="ne-p" id="ude0dd964" style="text-indent: 2em">
            <code class="ne-code">
            <span class="ne-text">
                cin
            </span>
            </code>
            <span class="ne-text">
            可以理解为c和in，表示C++中的标准输入。
            </span>
            <code class="ne-code">
            <span class="ne-text">
                cin
            </span>
            </code>
            <span class="ne-text">
            根据变量的数据类型，将输入信息进行转换，赋值给相应的变量。当遇到与当前变量类型不匹配的字符时，将会自动停止。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="pPGje"><span style="font-weight:bold;">代码2.34</span> <code>#include &lt;iostream&gt;
    using namespace std;
    int main ()
    {
        float a,b;
        cin&gt;&gt;a&gt;&gt;b;
        cout&lt;&lt;a+b&lt;&lt;endl;
        int c,d;
        cin&gt;&gt;c;
        cout&lt;&lt;c&lt;&lt;endl;
        cin&gt;&gt;d;
        cout&lt;&lt;d&lt;&lt;endl;
    }</code></pre>
            <table border=1 class="ne-table" id="q4r1k" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u5671ddf4">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u3b473738">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u8da2c13c">
                <span class="ne-text">
                1.2 3.4
                </span>
                </p>
                <p class="ne-p" id="ub9a72a97">
                <span class="ne-text">
                12.34
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u9dd9a189">
                <span class="ne-text">
                4.6
                </span>
                </p>
                <p class="ne-p" id="u12b30889">
                <span class="ne-text">
                12
                </span>
                </p>
                <p class="ne-p" id="链接60">
                <span class="ne-text">
                0
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u2ba20f67">
            <span class="ne-text">
                “空格”，“制表符”和“回车”被统称为空白符。
            </span>
            </li>
            <li id="链接1f">
            <span class="ne-text">
                当输入数据并回车后，输入的内容被添加到一个输入缓冲区里，程序从缓冲区内读取数据。当执行到
            </span>
            <code class="ne-code">
                <span class="ne-text">
                cin
                </span>
            </code>
            <span class="ne-text">
                时，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                cin
                </span>
            </code>
            <span class="ne-text">
                读取缓冲区，如果缓冲区内有内容，直接从缓冲区读取。如果缓冲区为空，光标闪烁，等待用户输入。
            </span>
            </li>
            <li id="u5aa9d167">
            <code class="ne-code">
                <span class="ne-text">
                cin
                </span>
            </code>
            <span class="ne-text">
                在对整型和浮点型进行输入的时候，首先忽略空白符，然后读取有效的字符进行解析，到第一个与当前变量类型不匹配的字符时停止。被读取的有效字符从缓冲区内被清除，而从第一个无效字符开始的内容依旧保留在缓冲区里。
            </span>
            </li>
            <li id="u33657c5d">
            <span class="ne-text">
                第6行对
            </span>
            <code class="ne-code">
                <span class="ne-text">
                a
                </span>
            </code>
            <span class="ne-text">
                赋值时，1.2前面的所有空白符被忽略，1.2被输入，遇到1.2后的空格时，输入自动停止。1.2被解析为浮点数并赋值给
            </span>
            <code class="ne-code">
                <span class="ne-text">
                a
                </span>
            </code>
            <span class="ne-text">
                。被读取的内容从缓冲区内被清除，而
            </span>
            <code class="ne-code">
                <span class="ne-text">
                3.4
                </span>
            </code>
            <span class="ne-text">
                被继续保留在缓冲区里。
            </span>
            </li>
            <li id="ud6b7a995">
            <span class="ne-text">
                对b进行赋值时，因为缓冲区非空，直接从缓冲区读取，3.4被赋值给b。特别注意，回车符作为第一个无效字符，被保留在缓冲区中。
            </span>
            </li>
            <li id="ue7fd35a7">
            <span class="ne-text">
                第9行对
            </span>
            <code class="ne-code">
                <span class="ne-text">
                c
                </span>
            </code>
            <span class="ne-text">
                进行输入时，忽略缓冲区中残留的回车，未得到有效信息，因此光标闪烁，等待用户输入。用户输入12.34后，因为
            </span>
            <code class="ne-code">
                <span class="ne-text">
                c
                </span>
            </code>
            <span class="ne-text">
                是整型，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                .
                </span>
            </code>
            <span class="ne-text">
                被认为是无效字符，输入停止。因此
            </span>
            <code class="ne-code">
                <span class="ne-text">
                c
                </span>
            </code>
            <span class="ne-text">
                被赋值为12。
            </span>
            <code class="ne-code">
                <span class="ne-text">
                .34
                </span>
            </code>
            <span class="ne-text">
                被保留在缓冲区中。
            </span>
            </li>
            <li id="u950d7e93">
            <span class="ne-text">
                第9行对
            </span>
            <code class="ne-code">
                <span class="ne-text">
                d
                </span>
            </code>
            <span class="ne-text">
                进行输入时，遇到
            </span>
            <code class="ne-code">
                <span class="ne-text">
                .34
                </span>
            </code>
            <span class="ne-text">
                ，这是一个非法输入，标志位被设置为异常，
            </span>
            <code class="ne-code">
                <span class="ne-text">
                cin
                </span>
            </code>
            <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
                不再接受输入，直接跳过。
            </span>
            <code class="ne-code">
                <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
                d
                </span>
            </code>
            <span class="ne-text" style="color: rgb(77, 77, 77); font-size: 16px">
                被赋值为0。
            </span>
            </li>
            </ul>
            <div class="ne-quote">
            <p class="ne-p" id="u154a8df6">
            <span class="ne-text" style="font-size: 16px">
                遇到非法输入时，可以使用
            </span>
            <code class="ne-code">
                <span class="ne-text" style="font-size: 16px">
                cin.clear();
                </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
                重置标志位，然后使用
            </span>
            <code class="ne-code">
                <span class="ne-text" style="font-size: 16px">
                cin.sync();
                </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
                或
            </span>
            <code class="ne-code">
                <span class="ne-text" style="font-size: 16px">
                cin.ignore();
                </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
                清除缓冲区。这种操作比较复杂，初学者可以先行忽略缓冲区非法输入的问题，保证输入的合法性。
            </span>
            </p>
            </div>
            <p class="ne-p" id="u29801cab" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 16px">
            在一些特殊的应用场景下，需要输入或输出8进制或16进制数据。在c++中主要体现在oct（八进制）、dec（十进制）和hex（十六进制）三个关键字。但是在cin和cout要分别设置。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="HUMZf"><span style="font-weight:bold;">代码2.35</span> <code>#include &lt;iostream&gt;
    using namespace std;

    int main()
    {
        int v;
        cin&gt;&gt;oct&gt;&gt;v;
        cout&lt;&lt;"十进制:"&lt;&lt;v&lt;&lt;";八进制:"&lt;&lt;oct&lt;&lt;v&lt;&lt;endl;
        cin&gt;&gt;hex&gt;&gt;v;
        cout&lt;&lt;"八进制:"&lt;&lt;v&lt;&lt;";十进制:"&lt;&lt;dec&lt;&lt;v&lt;&lt;";十六进制:"&lt;&lt;hex&lt;&lt;v&lt;&lt;endl;
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="iqQHc" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="373">
                <p class="ne-p" id="u26ec2b37">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u5e3f187e">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="373">
                <p class="ne-p" id="链接53">
                <span class="ne-text">
                11
                </span>
                </p>
                <p class="ne-p" id="ua2e6ae25">
                <span class="ne-text">
                aa
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uf078e7c0">
                <span class="ne-text">
                十进制:9;八进制:11
                </span>
                </p>
                <p class="ne-p" id="u3b9d0c65">
                <span class="ne-text">
                八进制:252;十进制:170;十六进制:aa
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uacce9b44">
            <span class="ne-text" style="font-size: 16px">
                默认的通道是十进制，因此第8行直接输出v时，是按照十进制进行输出的。
            </span>
            </li>
            <li id="uf2a4a569">
            <span class="ne-text" style="font-size: 16px">
                因为第8行中已经将输出通道改为八进制了，因此在第10行直接进行输出时，按照八进制进行输出，直到改为dec后才改为十进制。
            </span>
            </li>
            </ul>
            <h3 id="ri2d9">
            <span class="ne-text">
            知识点：T271-T272
            </span>
            </h3>
            <table border=1 class="ne-table" id="zJE2p" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="ub7c49a60">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="484">
                <p class="ne-p" id="ufe204324" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ub47de3bb">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="135">
                <p class="ne-p" id="u505be511">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="ub2368593">
                <span class="ne-text">
                T271
                </span>
                </p>
                </td>
                <td width="484">
                <p class="ne-p" id="uc9c1e23d">
                <span class="ne-text">
                必须掌握输入的基本原理，输入和缓冲区的关系
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u131d7c89">
                <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
                <span class="ne-text">
                    T212
                </span>
                </a>
                <span class="ne-text">
                </span>
                </p>
                </td>
                <td width="135">
                <p class="ne-p" id="u69e93779">
                <a class="ne-link" data-href="#W9YYd" href="#W9YYd">
                <span class="ne-text">
                    T273
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#QvLqY" href="#QvLqY">
                <span class="ne-text">
                    T275
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#qAd0N" href="#qAd0N">
                <span class="ne-text">
                    T277
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/bhbw2z#CUEPT" href="ch5#CUEPT">
                <span class="ne-text">
                    T546
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
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="ub7d2ef4a">
                <span class="ne-text">
                T272
                </span>
                </p>
                </td>
                <td width="484">
                <p class="ne-p" id="ud36a8f23">
                <span class="ne-text">
                掌握8进制和16进制的输入和输出方法
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u78d582af">
                <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                <span class="ne-text">
                    T222
                </span>
                </a>
                </p>
                </td>
                <td width="135">
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="680">
                <p class="ne-p" id="u9ca5e2e2">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX213)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="xjz7k">
            <span class="ne-text">
            7.2 字符串的输入
            </span>
            </h2>
            <p class="ne-p" id="ufdbc5968" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 16px">
            与整型和浮点型类似，字符串也可以采用
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                cin
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            的方式进行读取。但是因为字符串包含的字符范围比较多，只有遇到空白符时输入才结束。空白符之后的内容不会被读取。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="sv79N"><span style="font-weight:bold;">代码2.36</span> <code>#include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    int main ()
    {
        string s;
        cin&gt;&gt;s;
        cout&lt;&lt;s&lt;&lt;endl;
    }</code></pre>
            <table border=1 class="ne-table" id="usmxE" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ub0411a4d">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uff42ecf9">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u22bbc7ea">
                <span class="ne-text">
                first second
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="ufe83c632">
                <span class="ne-text" style="font-size: 16px">
                first
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u9befa6f0" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 16px">
            可以推断，
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                cin
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            方式读取的字符串中不包括空白符。如果字符串中需要包含空格，或者读入空字符串，需要采用
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                getline
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            方式，该方式需要包含
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                &lt;string&gt;
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            头文件。该方式读取一行字符串，并且把末尾的回车符从缓冲区中清除。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="wNpPT"><span style="font-weight:bold;">代码2.37</span> <code>#include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    int main ()
    {
        string s1,s2,s3;
        getline(cin,s1);
        getline(cin,s2);
        getline(cin,s3);
        cout&lt;&lt;"s1:"&lt;&lt;s1&lt;&lt;endl;
        cout&lt;&lt;"s2:"&lt;&lt;s2&lt;&lt;endl;
        cout&lt;&lt;"s3:"&lt;&lt;s3&lt;&lt;"\ts3 size: "&lt;&lt;s3.size()&lt;&lt;endl;
        cout &lt;&lt; s3[5] &lt;&lt; ' ' &lt;&lt; s3[6] &lt;&lt; endl;
    }</code></pre>
            <table border=1 class="ne-table" id="fbuDq" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u92f8aaf5">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u986a571c">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u5de345a1">
                <span class="ne-text">
                </span>
                </p>
                <p class="ne-p" id="u509dc389">
                <span class="ne-text">
                first second
                </span>
                </p>
                <p class="ne-p" id="u11e1f681">
                <span class="ne-text">
                first\tsecond
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="ud23eaee9">
                <span class="ne-text">
                s1:
                </span>
                </p>
                <p class="ne-p" id="u3dc368a3">
                <span class="ne-text">
                s2:first second
                </span>
                </p>
                <p class="ne-p" id="uc479049c">
                <span class="ne-text">
                s3:first\tsecond s3 size: 13
                </span>
                </p>
                <p class="ne-p" id="ue82030f7">
                <span class="ne-text">
                \ t
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u7ea56d84">
            <span class="ne-text" style="font-size: 16px">
                第一行输入一个空行，第二行两个单词中间有一个空格，但是整行字符串被统一输入给
            </span>
            <code class="ne-code">
                <span class="ne-text" style="font-size: 16px">
                s2
                </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
                。
            </span>
            </li>
            <li id="u3287f5ea">
            <span class="ne-text" style="font-size: 16px">
                当输入中有专业字符时，如s3的输入，用cin读入时会将转义字符识别成两个字符'\\'和't'，而不会自己作为转义字符。
            </span>
            </li>
            </ul>
            <h3 id="W9YYd">
            <span class="ne-text">
            知识点：T273-T274
            </span>
            </h3>
            <table border=1 class="ne-table" id="Q4egQ" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u033d1227">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="522">
                <p class="ne-p" id="u4b97b634" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="链接b2">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u18847ea1">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="ua8a349d2">
                <span class="ne-text">
                T273
                </span>
                </p>
                </td>
                <td width="522">
                <p class="ne-p" id="uc9819d47">
                <span class="ne-text">
                区分字符串输入时cin（空白符分隔）和getline（回车符分隔）的区别
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u4a388550">
                <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                <span class="ne-text">
                    T271
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="链接50">
                <a class="ne-link" data-href="#UaFTI" href="#UaFTI">
                <span class="ne-text">
                    T276
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#qAd0N" href="#qAd0N">
                <span class="ne-text">
                    T277
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="681">
                <p class="ne-p" id="uea53cb85">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161707" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161707" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX218)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u696f1661">
                <span class="ne-text">
                T274
                </span>
                </p>
                </td>
                <td width="522">
                <p class="ne-p" id="ufb7e15f8">
                <span class="ne-text">
                特别注意输入时的转义字符会被逐个字符读取，不会作为转义字符
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ua30a50db">
                <a class="ne-link" data-href="#ISHX3" href="#ISHX3">
                <span class="ne-text">
                    T214
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="C0tmV">
            <span class="ne-text">
            7.3 字符的输入
            </span>
            </h2>
            <p class="ne-p" id="ucb864f77" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 16px">
            C++中采用
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                cin.get()
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            读取一个任意字符，包括空白符。可以用
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                cout&lt;&lt;
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            或
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                cout.put()
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            输出字符。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="G6x3n"><span style="font-weight:bold;">代码2.38</span> <code>#include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    int main ()
    {
        char a;
        a = cin.get();cout.put(a);
        a = cin.get();cout&lt;&lt;a;
        a = cin.get();cout.put(a);		//这里读取的是回车符
        a = cin.get();cout&lt;&lt;a;
    }</code></pre>
            <table border=1 class="ne-table" id="o3GuL" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u929f6886">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u2036e8e0">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u86acfb87">
                <span class="ne-text">
                ab
                </span>
                </p>
                <p class="ne-p" id="uad05c3f3">
                <span class="ne-text">
                c
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u1b19b5f0">
                <span class="ne-text">
                ab
                </span>
                </p>
                <p class="ne-p" id="链接3c">
                <span class="ne-text">
                c
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="ua383869d">
            <span class="ne-text" style="font-size: 16px">
                注意第9行读取的字符是回车符，第10行读取的字符是字符'c'，因此字符'c'的输入才会在新行上出现。
            </span>
            </li>
            </ul>
            <h3 id="QvLqY">
            <span class="ne-text">
            知识点：T275
            </span>
            </h3>
            <table border=1 class="ne-table" id="przPb" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u0afc2fb9">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="567">
                <p class="ne-p" id="u9da22422" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ua80c3410">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u107b08a4">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u44e280d3">
                <span class="ne-text">
                T275
                </span>
                </p>
                </td>
                <td width="567">
                <p class="ne-p" id="u05d4565e">
                <span class="ne-text">
                特别注意在输入时空白符也是一个字符
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u725a5316">
                <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                <span class="ne-text">
                    T271
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u7cc18ef9">
                <a class="ne-link" data-href="#UaFTI" href="#UaFTI">
                <span class="ne-text">
                    T276
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="tNld8">
            <span class="ne-text">
            7.4 数字和字符的混合输入
            </span>
            </h2>
            <p class="ne-p" id="u457eb565" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 16px">
            如7.1所示，无论是整型或浮点型，在读取正确的输入后，如果后继是一个空白符，空白符会被残留在缓冲区中。如果接下来读取一个字符，或者用
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                getline
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            读取一个字符串，这个残留的空白符也会被作为有效字符进行输入，这与程序的目的可能存在违背。这时需要调用
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                cin.ignore()
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            函数，去除缓冲区中残留的空白符。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="c3KNL"><span style="font-weight:bold;">代码2.39</span> <code>#include&lt;iostream&gt;
    #include&lt;string&gt;
    using namespace std;

    int main()
    {
        int num;
        string str;
        cin &gt;&gt; num;
        getline(cin,str);
        cout &lt;&lt; "Number :" &lt;&lt; num &lt;&lt; ", String:" &lt;&lt; str &lt;&lt;"#"&lt;&lt; endl;
    }</code></pre>
            <table border=1 class="ne-table" id="usmLe" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u201a9cad">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uc16a4383">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u83f4d6a8">
                <span class="ne-text">
                34
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u22cc00ea">
                <span class="ne-text">
                Number :34, String:#
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u2d11bea6" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 16px">
            执行以上程序时会发现，只输入34并回车后，程序就会输出并结束。这是因为34后面的回车残留在缓冲区中，执行
            </span>
            <code class="ne-code">
            <span class="ne-text" style="font-size: 16px">
                getline
            </span>
            </code>
            <span class="ne-text" style="font-size: 16px">
            时，会读取一个空字符串。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="t2qNh"><span style="font-weight:bold;">代码2.40</span> <code>#include&lt;iostream&gt;
    #include&lt;string&gt;
    using namespace std;

    int main()
    {
        int num;
        string str;
        cin &gt;&gt; num;
        cin.ignore();
        getline(cin,str);
        cout &lt;&lt; "Number :" &lt;&lt; num &lt;&lt; ", String:" &lt;&lt; str &lt;&lt;"#"&lt;&lt; endl;
    }</code></pre>
            <table border=1 class="ne-table" id="EtulE" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="ua0b1e0b9">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="ubd426560">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u10fa1bd1">
                <span class="ne-text">
                34
                </span>
                </p>
                <p class="ne-p" id="ua71b34b0">
                <span class="ne-text">
                apple
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u5b2be99f">
                <span class="ne-text">
                Number :34, String:apple#
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="ued84dc33" style="text-indent: 2em">
            <code class="ne-code">
            <span class="ne-text">
                cin.ignore()
            </span>
            </code>
            <span class="ne-text">
            的作用就是从缓冲区中读取一个字符并抛弃，这样残留的回车符就被清除，执行到第11行的时候，因为缓冲区为空，光标闪烁等待用户输入。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="ubc1b6e8c">
            <span class="ne-text">
                当需要把无效字符到当前输入行的所有内容都进行清空时，可以调用
            </span>
            <code class="ne-code">
                <span class="ne-text" style="font-size: 14px">
                cin.ignore(numeric_limits&lt;std::streamsize&gt;::max(), '\n');
                </span>
            </code>
            <span class="ne-text" style="font-size: 14px">
                ，这条语句需要头文件&lt;limits&gt;。该语句表示一直忽略到回车符。通常输入的字符串都不会那么长，比如最多只有256个字符，也可以简写为
            </span>
            <code class="ne-code">
                <span class="ne-text" style="font-size: 14px">
                cin.ignore(256, '\n');
                </span>
            </code>
            <span class="ne-text" style="font-size: 14px">
                。ignore函数的第一个参数表示最大抽取的字符数，第二个参数表示结束的字符。无参时表示只抽取并抛弃一个字符。
            </span>
            </p>
            </div>
            <h3 id="UaFTI">
            <span class="ne-text">
            知识点：T276
            </span>
            </h3>
            <table border=1 class="ne-table" id="l9ai9" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="uc3f8cfef">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="579">
                <p class="ne-p" id="ue636d0c8" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="uc2a3a75f">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u4df36b60">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="ue75cf7e5">
                <span class="ne-text">
                T276
                </span>
                </p>
                </td>
                <td width="579">
                <p class="ne-p" id="u08243fae">
                <span class="ne-text">
                在输入完数值再使用getline时，要特别注意残留回车的影响，一定要使用cin.ignore去除残留回车的影响，否则不能得到正确的输入
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ubfc1f85f">
                <a class="ne-link" data-href="#W9YYd" href="#W9YYd">
                <span class="ne-text">
                    T273
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#QvLqY" href="#QvLqY">
                <span class="ne-text">
                    T275
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u3dc9a97e">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="695">
                <p class="ne-p" id="u3dc42acb">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161708" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161708" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX219)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="eVB0T">
            <span class="ne-text">
            7.5 逗号分隔的数值
            </span>
            </h2>
            <p class="ne-p" id="u041df3c9" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 14px">
            当输入多个数据时，绝大多数情况都是用空白符分隔的，但是有时也会用其他字符进行分隔，例如逗号分隔。在处理题目时一定要特别注意输入数据的分隔符。
            </span>
            </p>
            <h3 id="TUQxY">
            <span class="ne-text">
            例题2.3
            </span>
            </h3>
            <p class="ne-p" id="u549e8611" style="text-indent: 2em">
            <span class="ne-text">
            输入三个逗号分隔的整数，依次对其输出，输出时以制表符分隔。
            </span>
            </p>
            <table border=1 class="ne-table" id="pAiLy" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="链接3f">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u1f2a739e">
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
                <p class="ne-p" id="ufca3edfd">
                <span class="ne-text" style="font-size: 14px">
                2, 3, 5
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="ud142b8a6">
                <span class="ne-text">
                2 3 5
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u67bb0897" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 14px">
            这时一定要对分隔符进行特殊处理。
            </span>
            </p>
            <p class="ne-p" id="ub2b5d7ae" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 14px">
            方法一：用ignore的方式忽略中间的逗号
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="Yyfzt"><span style="font-weight:bold;">代码2.41</span> <code>#include &lt;iostream&gt;
    using namespace std;

    int main()
    {
        int a,b,c;
        cin &gt;&gt; a;
        cin.ignore();
        cin &gt;&gt; b;
        cin.ignore();
        cin &gt;&gt; c;
        cin.ignore();
        cout &lt;&lt; a &lt;&lt; '\t' &lt;&lt; b &lt;&lt; '\t' &lt;&lt; c &lt;&lt; endl;
    }</code></pre>
            <p class="ne-p" id="u2c3235c1" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 14px">
            方法二：用一个字符变量读取中间的逗号
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="bqZND"><span style="font-weight:bold;">代码2.42</span> <code>#include &lt;iostream&gt;
    using namespace std;

    int main()
    {
        int a,b,c;
        char ch;
        cin &gt;&gt; a&gt;&gt;ch&gt;&gt;b&gt;&gt;ch&gt;&gt;c;
        cout &lt;&lt; a &lt;&lt; '\t' &lt;&lt; b &lt;&lt; '\t' &lt;&lt; c &lt;&lt; endl;
    }</code></pre>
            <p class="ne-p" id="uf6599630" style="text-indent: 2em">
            <span class="ne-text" style="font-size: 14px">
            方法三：C语言的scanf方式（推荐方式）
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="xmzKh"><span style="font-weight:bold;">代码2.43</span> <code>#include&lt;cstdio&gt;
    using namespace std;

    int main()
    {
        int a,b,c;
        scanf("%d,%d,%d",&amp;a,&amp;b,&amp;c);
        printf("%d\t%d\t%d",a,b,c);
    }</code></pre>
            <ul class="ne-ul">
            <li id="ua6facffd">
            <span class="ne-text" style="font-size: 14px">
                如果输入中存在数值外的常量字符或字符串，scanf是一个比较方便的函数，它与printf相对应，第一个参数也是一个控制字符串。如果输入中有需要忽略的常量字符或字符串，可以直接写到控制字符串中，例如例题2.3中的逗号。
            </span>
            </li>
            <li id="u58f0ed86">
            <span class="ne-text" style="font-size: 14px">
                特别注意在使用scanf的时候，每个变量前要加&amp;，表示取变量的地址，这是语法要求。
            </span>
            </li>
            </ul>
            <div class="ne-quote">
            <p class="ne-p" id="u6f79a14e">
            <span class="ne-text" style="font-size: 14px">
                scanf的方式明显没有cin简单，但是如果输入时有额外的干扰字符，scanf在书写时会清晰简单一些
            </span>
            </p>
            </div>
            <h3 id="qAd0N">
            <span class="ne-text">
            知识点：T277
            </span>
            </h3>
            <table border=1 class="ne-table" id="ql8z9" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u4d4a77b5">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="514">
                <p class="ne-p" id="u25adbb7e" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="99">
                <p class="ne-p" id="u0d494c19">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="91">
                <p class="ne-p" id="u7e8cb917">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="u0445ea3c">
                <span class="ne-text">
                T277
                </span>
                </p>
                </td>
                <td width="514">
                <p class="ne-p" id="uc371b416">
                <span class="ne-text">
                当输入数值用非空白符分隔，或有额外字符时，可以采用ignore或字符填充法输入，scanf此时更具有优势，但要特别注意scanf的语法
                </span>
                </p>
                </td>
                <td width="99">
                <p class="ne-p" id="u7f69bc3b">
                <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                <span class="ne-text">
                    T271
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#W9YYd" href="#W9YYd">
                <span class="ne-text">
                    T273
                </span>
                </a>
                </p>
                </td>
                <td width="91">
                <p class="ne-p" id="链接65">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#TOnfM" href="ch6#TOnfM">
                <span class="ne-text">
                    T612
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="704">
                <p class="ne-p" id="ueaa773c8">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX211)
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


        <!-- Section 8 -->
        <div class="self-section">
            <h1 id="PrgpW">
            <span class="ne-text">
            8. 时间处理
            </span>
            </h1>
            <p class="ne-p" id="链接ee" style="text-indent: 2em">
            <span class="ne-text">
            时间是一种常见数据，以例2.1展开讨论时间相关问题的处理。
            </span>
            </p>
            <h3 id="p59cE">
            <span class="ne-text">
            例题2.4
            </span>
            </h3>
            <p class="ne-p" id="uc9ce9ab6" style="text-indent: 2em">
            <span class="ne-text">
            国家安全局获得一份珍贵的材料，上面记载了一
                        一个即将进行的恐怖活动的信息。不过，国家安全局没法获知具体的时间，因为材料上的时间使用的是LINUX的时间戳，即是从2011年1月1日0时0吩秒开始到该时刻总共过了多少秒。此等重大的责任现在落到了你的肩上,给你该时间戳，请你计算出恐怖活动在哪一天实施?
                        (为 了简单起见，规定一年12个月,每个月固定都是30天)
            </span>
            </p>
            <p class="ne-p" id="u7e866003">
            <span class="ne-text">
            【输入】
            </span>
            </p>
            <p class="ne-p" id="u034a1fde">
            <span class="ne-text">
            一个整数n,表示从2011年1月1日0时0吩秒开始到该时刻过了n秒。
            </span>
            </p>
            <p class="ne-p" id="u3aed15ce">
            <span class="ne-text">
            【输出】
            </span>
            </p>
            <p class="ne-p" id="u424ed7ba">
            <span class="ne-text">
            输出一行，分别是三个整数y，m，d，表示恐怖活动在y年m月d日实施。
            </span>
            </p>
            <p class="ne-p" id="u2306b057" style="text-indent: 2em">
            <span class="ne-text">
            起始是一个日期，差值n是一个整数，为了计算最终结果，可以有两种方式：1）将n转换为日期，与起始日期相加求和；2）将起始日期转换为整数，求和后转换为日期类型。第一种方式在逻辑上较为顺畅，但是实际运算难度较大，因为日和月的进位都不规整。第二种方式在计算时更为顺畅。代码2.44为第二种方式。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="fuDST"><span style="font-weight:bold;">代码2.44</span> <code>#include&lt;iostream&gt;
    using namespace std;
    int main()
    {
        int seconds;
        cin&gt;&gt;seconds;
        int days = 60*60*24;							//一天包含的秒数
        int months = 30;
        int years = months*12;
        int day = seconds/days;							//总共过去了多少天
        int year = 2011+day/years;
        day = day-day/years*years;						//整除后再乘，去掉余数部分
        int month = day/ months;
        day = day-month* months;
        cout&lt;&lt;year&lt;&lt;' '&lt;&lt;month+1&lt;&lt;' '&lt;&lt;day+1&lt;&lt;endl;		//月和日都是从1开始计数
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="gKeBs" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="udc49acdd">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="u88cc69c6">
                <strong>
                <span class="ne-text">
                    样例输出
                </span>
                </strong>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="374">
                <p class="ne-p" id="u771f363c">
                <span class="ne-text">
                130432457
                </span>
                </p>
                </td>
                <td width="374">
                <p class="ne-p" id="uff89a6ec">
                <span class="ne-text">
                2015 3 10
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u7f9d68e2">
            <span class="ne-text">
                第12行去掉余数的方法在计算中经常被使用。这与数学的概念是不一致的，这里的除法表示的是整除。
            </span>
            </li>
            </ul>
            <p class="ne-p" id="ua0315181" style="text-indent: 2em">
            <span class="ne-text">
            Unix时间戳(Unix timestamp)，或称Unix时间(Unix
                        time)、POSIX时间(POSIX time)，是一种时间表示方式，定义为从格林威治时间1970年01月01日00时00分00秒起至现在的总秒数。Unix时间戳不仅被使用在Unix
                        系统、类Unix系统中，也在许多其他操作系统中被广泛采用。因为以秒为单位，数值比较大，更建议在计算时采用
            </span>
            <code class="ne-code">
            <span class="ne-text">
                long long
            </span>
            </code>
            <span class="ne-text">
            类型，防止数值溢出。
            </span>
            </p>
            <h3 id="ZBSEW">
            <span class="ne-text">
            知识点：T281
            </span>
            </h3>
            <table border=1 class="ne-table" id="BQ0Wu" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u88ba9cb4">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="575">
                <p class="ne-p" id="ufdf1eb2c" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="ubeec9428">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="uea8e7a81">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="uc127359c">
                <span class="ne-text">
                T281
                </span>
                </p>
                </td>
                <td width="575">
                <p class="ne-p" id="u86fea079">
                <span class="ne-text">
                当涉及时间相关运算时，推荐先将时间转换为整数，处理后再转换回来。可以极大程度避免时间单位进位不统一而产生的问题。
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="udc33d376">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="链接fb">
                <br/>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="691">
                <p class="ne-p" id="ud0b11202">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161709" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161709" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX220)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183798" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=183798" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX309)
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

        <!-- Section 9 -->
        <div class="self-section">
            <h1 id="lsfcr">
            <span class="ne-text">
            9. 常用数学函数
            </span>
            </h1>
            <p class="ne-p" id="ub64fe6e3" style="text-indent: 2em">
            <span class="ne-text">
            数学函数在计算中非常常用，C/C++在
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &lt;cmath&gt;
            </span>
            </code>
            <span class="ne-text">
            头文件中包括以下常用数学函数：
            </span>
            </p>
            <table border=1 class="ne-table" id="aZTH6" style="text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="链接87">
                <span class="ne-text">
                函数名
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="u6d39a868">
                <span class="ne-text">
                功能描述
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="uc97732b9">
                <span class="ne-text">
                样例
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="u8b37b0b7">
                <span class="ne-text">
                样例结果
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="链接a1">
                <span class="ne-text">
                sqrt
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="ua9ba0a13">
                <span class="ne-text">
                平方根函数
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="ud54e9af7">
                <span class="ne-text">
                sqrt(9)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="u46a40fb0">
                <span class="ne-text">
                3
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="u27a07cfa">
                <span class="ne-text">
                fabs
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="udcaa07f4">
                <span class="ne-text">
                浮点数绝对值
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="ub316fcdc">
                <span class="ne-text">
                fabs(-3.5)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="u3cf3ebe2">
                <span class="ne-text">
                3.5
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="ucb5fff34">
                <span class="ne-text">
                log10, log
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="u49182bd6">
                <span class="ne-text">
                以10为底和以e为底的自然对数
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="ue91f3c56">
                <span class="ne-text">
                log10(1000)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="u67fd8b4b">
                <span class="ne-text">
                3
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="ufcae177e">
                <span class="ne-text">
                pow
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="u976dcfcc">
                <span class="ne-text">
                幂运算
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="u2740c7a5">
                <span class="ne-text">
                pow(10,3)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="u3af75e42">
                <span class="ne-text">
                1000
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="uc0958738">
                <span class="ne-text">
                sin，cos
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="链接da">
                <span class="ne-text">
                正弦和余弦
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="u74bb99c0">
                <span class="ne-text">
                sin(M_PI/4)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="ud19eb806">
                <span class="ne-text">
                0.707107
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="uf33c416a">
                <span class="ne-text">
                round
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="链接c4">
                <span class="ne-text">
                四舍五入取整
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="u4428cc33">
                <span class="ne-text">
                round(3.7)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="ubc9b76ae">
                <span class="ne-text">
                4
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="u6a8825d8">
                <span class="ne-text">
                ceil
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="u99e817d8">
                <span class="ne-text">
                向上取整
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="u4f98c151">
                <span class="ne-text">
                ceil(5.2)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="u86f1d2f5">
                <span class="ne-text">
                6
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="133">
                <p class="ne-p" id="u7095a9c0">
                <span class="ne-text">
                min, max
                </span>
                </p>
                </td>
                <td width="243">
                <p class="ne-p" id="u5a66cec4">
                <span class="ne-text">
                最小值，最大值
                </span>
                </p>
                </td>
                <td width="132">
                <p class="ne-p" id="u642db73f">
                <span class="ne-text">
                min(5.2, 3.7)
                </span>
                </p>
                </td>
                <td width="104">
                <p class="ne-p" id="ud758d638">
                <span class="ne-text">
                3.7
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="u126c8fc5">
            <code class="ne-code">
                <span class="ne-text">
                M_PI
                </span>
            </code>
            <span class="ne-text">
                在&lt;cmath&gt;头文件中定义，表示π。
            </span>
            </li>
            <li id="u3fc9180a">
            <code class="ne-code">
                <span class="ne-text">
                round
                </span>
            </code>
            <span class="ne-text">
                和
            </span>
            <code class="ne-code">
                <span class="ne-text">
                ceil
                </span>
            </code>
            <span class="ne-text">
                函数的返回值都是
            </span>
            <code class="ne-code">
                <span class="ne-text">
                double
                </span>
            </code>
            <span class="ne-text">
                类型，如果需要整型返回值，需要做显示类型转换。
            </span>
            </li>
            <li id="ua87f0a31">
            <span class="ne-text">
                如果对整型调用
            </span>
            <code class="ne-code">
                <span class="ne-text">
                pow
                </span>
            </code>
            <span class="ne-text">
                函数，因为返回值为浮点数，因此其结果可能因为浮点数不能精确表示而产生错误。此时建议使用
            </span>
            <code class="ne-code">
                <span class="ne-text">
                int(round(pow(x,n)))
                </span>
            </code>
            <span class="ne-text">
                ，确保得到正确的整型值。
            </span>
            </li>
            <li id="ubfa57378">
            <span class="ne-text">
                对于整数a的平方和立方，建议直接写为a*a或a*a*a，对于高次方，建议使用循环。不建议使用函数pow，这样不会转换为浮点数，不会产生精度问题。
            </span>
            </li>
            </ul>
            <h3 id="mTVkF">
            <span class="ne-text">
            例题2.5
            </span>
            </h3>
            <p class="ne-p" id="u3b7bfef6" style="text-indent: 2em">
            <span class="ne-text">
            求一个整数的位数。
            </span>
            </p>
            <p class="ne-p" id="u957bd02e">
            <span class="ne-text">
            答案：
            </span>
            <code class="ne-code">
            <span class="ne-text">
                (int)log10(x)+1
            </span>
            </code>
            </p>
            <p class="ne-p" id="uc74b82f2">
            <span class="ne-text">
            解析：任何一个整数都可以表达为10
            </span>
            <sup>
            <span class="ne-text">
                y
            </span>
            </sup>
            <span class="ne-text">
            形式，其中y是一个浮点数，而且y的整数部分为x的位数减1。因此答案中先调用函数log10，强制转换为整型相当于舍弃小数部分，最后加1得到x的位数。
            </span>
            </p>
            <h3 id="ybZKx">
            <span class="ne-text">
            随堂练习2.4
            </span>
            </h3>
            <p class="ne-p" id="u533b22b0" style="text-indent: 2em">
            <span class="ne-text">
            已知三角形的三个边长a,b,c,
                        根据海伦公式编程计算三角形的面积，保留四位小数精度。海伦公式为
            </span>
            </p>
            <p class="ne-p" id="u572a75ac">
            <span class="ne-math" id="Zhah0">
            <img src="../assets/images/c9e8808dadc70c2fe23398028889b5e1.svg"/>
            </span>
            <span class="ne-text">
            ，其中
            </span>
            <span class="ne-math" id="lCmPY">
            <img src="../assets/images/27f572f3a6daa5cc6d2f2eca8d31202c.svg"/>
            </span>
            <span class="ne-text">
            。
            </span>
            </p>
            <table border=1 class="ne-table" id="kuAyw" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="uaeabe23d">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u471a8604">
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
                <p class="ne-p" id="u50b2ebfb">
                <span class="ne-text">
                1 2 2
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u9c487b18">
                <span class="ne-text">
                0.9682
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="ua6f7fe62" style="text-indent: 2em">
            <span class="ne-text">
            C/C++不具备解方程的能力，当需要处理方程式，需要人工推导出计算公式，然后交给计算机进行计算。
            </span>
            </p>
            <h3 id="XTi05">
            <span class="ne-text">
            随堂练习2.5
            </span>
            </h3>
            <p class="ne-p" id="u42fd17ef" style="text-indent: 2em">
            <span class="ne-text">
            鸡兔同笼是中国古代的数学名题之一。大约在1500年前，《孙子算经》
                        中就记载了这个有趣的问题。书中叙述为：今有雉兔同笼，上有三十五头，下有九十四足，问雉兔各几何?
                        这四句话的意思是：有若干只鸡兔同在一个笼子里，从上面数，有35个头，从下面数，有94只脚。问笼中各有多少只鸡和兔？编程实现鸡兔同笼问题，输入头和脚的数量，输出鸡和兔的数量。
            </span>
            </p>
            <table border=1 class="ne-table" id="ze4kV" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="u79f9de20">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u26a68ecb">
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
                <p class="ne-p" id="uc0029cb6">
                <span class="ne-text">
                35 94
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="ud43ea878">
                <span class="ne-text">
                23 12
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h3 id="GYNKe">
            <span class="ne-text">
            知识点：T291
            </span>
            </h3>
            <table border=1 class="ne-table" id="wqpLn" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u25ffc735">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="533">
                <p class="ne-p" id="链接07" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="95">
                <p class="ne-p" id="链接dc">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u2b0b3d17">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td rowspan="2" width="58">
                <p class="ne-p" id="链接13">
                <span class="ne-text">
                T291
                </span>
                </p>
                </td>
                <td width="533">
                <p class="ne-p" id="ua5461881">
                <span class="ne-text">
                将数学表达式改写成程序代码，是程序设计的基本要求，注意其中发生的数据类型隐式转换
                </span>
                </p>
                </td>
                <td width="95">
                <p class="ne-p" id="u11405aa6">
                <a class="ne-link" data-href="#iecae" href="#iecae">
                <span class="ne-text">
                    T234
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#jVv0C" href="#jVv0C">
                <span class="ne-text">
                    T251
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#bqzYv" href="#bqzYv">
                <span class="ne-text">
                    T263
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u8b892cab">
                <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#DJ77U" href="ch3#DJ77U">
                <span class="ne-text">
                    T321
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td colspan="3" width="683">
                <p class="ne-p" id="ud07fc293">
                
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161698" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161698" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX210)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161710" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161710" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX221)
                </span>
                </a>
                <span class="ne-text" style="font-size: 16px">
                </span>
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161711" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161711" target="_blank">
                <span class="ne-text" style="font-size: 16px">
                    (LX222)
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


        <!-- Section 10 -->
        <div class="self-section">
            <h1 id="LUjR2">
            <span class="ne-text">
            10. 运算效率的底层分析*
            </span>
            </h1>
            <h2 id="xE8Vt">
            <span class="ne-text">
            10.1 负数和补码
            </span>
            </h2>
            <p class="ne-p" id="u9f4a2b90" style="text-indent: 2em">
            <span class="ne-text">
            计算机中的有符号数有三种表示方法，即原码、反码和补码。除了最高位作为符号位之外（0代表正，1代表负），原码可以理解为将数值直接转换为二进制，例如，我们用8位二进制表示一个数，+11的原码为00001011，-11的原码就是10001011。原码不能直接参加运算，可能会出错。例如数学上，1+(-1)=0，而在二进制中00000001+10000001=10000010，换算成十进制为-2，显然错误。反码可以理解为正数的反码与原码相同，除符号位之外，各位取反。例如，+11的反码为00001011，-11的反码就是11110100。补码可以理解为正数的补码与原码相同，负数的补码等于反码+1，例如，+11的补码为00001011，-11的补码就是11110101。
            </span>
            </p>
            <p class="ne-p" id="ue521d616" style="text-indent: 2em">
            <span class="ne-text">
            除了不能直接参与运算外，原码和反码还有一个问题，0被表示为+0和-0两种表示方法。例如(+0)
            </span>
            <sub>
            <span class="ne-text">
                原码
            </span>
            </sub>
            <span class="ne-text">
            =00000000，(-0)
            </span>
            <sub>
            <span class="ne-text">
                原码
            </span>
            </sub>
            <span class="ne-text">
            =10000000，(+0)
            </span>
            <sub>
            <span class="ne-text">
                反码
            </span>
            </sub>
            <span class="ne-text">
            =00000000，(-0)
            </span>
            <sub>
            <span class="ne-text">
                反码
            </span>
            </sub>
            <span class="ne-text">
            =11111111。-0在实际运算中是没有任何意义的，因此原码和反码在表示时都存在问题。
            </span>
            </p>
            <p class="ne-p" id="链接40" style="text-indent: 2em">
            <span class="ne-text">
            为了解决以上两个问题，提出了补码的概念。在进行实际分析之前，先看一个日常生活中的例子，当前时间为3点，想将其调整为8点，可以按顺时针调整5个小时，也可以逆时针回拨7个小时，即3-7=3+12-7=3+5，对于模12而言，5和7互为补数。当需要减数a时，其效果与加补数是相同的。
            </span>
            </p>
            <p class="ne-p" id="ud7963877" style="text-indent: 2em">
            <span class="ne-text">
            现在回到补码的概念。给定位数的存储空间，例如7位。当结果超过位数限制时，高位自动被舍弃，例如11+117=128=2
            </span>
            <sup>
            <span class="ne-text">
                7
            </span>
            </sup>
            <span class="ne-text">
            =(10000000)
            </span>
            <sub>
            <span class="ne-text">
                2
            </span>
            </sub>
            <span class="ne-text">
            。因为存储空间位7位的限定，最高位的1被舍弃，所以11+117=0。也就是说11和117在模2
            </span>
            <sup>
            <span class="ne-text">
                7
            </span>
            </sup>
            <span class="ne-text">
            下互为补数。11的原码为0001011，117的原码为1110101=1110100+1=(0001011)
            </span>
            <sub>
            <span class="ne-text">
                按位取反
            </span>
            </sub>
            <span class="ne-text">
            +1，也就是说，117等于11的二进制按位取反后+1。由此得到一个结论，对于n位存储空间的限定，一个数的补码等于其相对与模2
            </span>
            <sup>
            <span class="ne-text">
                n
            </span>
            </sup>
            <span class="ne-text">
            的补数。如前所述，当需要减一个数时，等价于加这个数对模2
            </span>
            <sup>
            <span class="ne-text">
                n
            </span>
            </sup>
            <span class="ne-text">
            的补数。因此需要减去一个数时，可以将这个数用补码表示，然后加上这个补码，就完成了减法操作。
            </span>
            </p>
            <div class="ne-quote">
            <p class="ne-p" id="ua2b648df">
            <span class="ne-text">
                实际上，计算机中只有加法器，而没有减法器，所有的减法都是由加补码完成的。
            </span>
            </p>
            </div>
            <p class="ne-p" id="链接b6">
            <span class="ne-text">
            补码解决了原码和反码出现的两个问题。
            </span>
            </p>
            <p class="ne-p" id="uc05459b4" style="text-indent: 2em">
            <span class="ne-text">
            1）补码可以直接参与运算。25+(-11)=(00011001)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            +(11110101)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            =(00001110)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            =14，结果正确。
            </span>
            </p>
            <p class="ne-p" id="ua16f72a2" style="text-indent: 2em">
            <span class="ne-text">
            2）+0=(00000000)
            </span>
            <sub>
            <span class="ne-text">
                原码
            </span>
            </sub>
            <span class="ne-text">
            =(00000000)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            ，-0=(10000000)
            </span>
            <sub>
            <span class="ne-text">
                原码
            </span>
            </sub>
            <span class="ne-text">
            =(11111111)
            </span>
            <sub>
            <span class="ne-text">
                反码
            </span>
            </sub>
            <span class="ne-text">
            =(00000000)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            ，在补码下，+0和-0的表示方式完全相同。
            </span>
            </p>
            <p class="ne-p" id="u5c88669f" style="text-indent: 2em">
            <span class="ne-text">
            这里产生了一个新问题，0的表示唯一了，那么原来-0的原码10000000表示什么？(00000001)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            +(10000000)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            =(10000001)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            =-127，也就是说1+(10000000)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            =-127，因此(10000000)
            </span>
            <sub>
            <span class="ne-text">
                补码
            </span>
            </sub>
            <span class="ne-text">
            =-128=2
            </span>
            <sup>
            <span class="ne-text">
                7
            </span>
            </sup>
            <span class="ne-text">
            。这就是在2.1节中，
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &lt;climits&gt;
            </span>
            </code>
            <span class="ne-text">
            头文件里有符号类型最小值的绝对值比最大值的绝对值大1的原因。
            </span>
            </p>
    <pre class="ne-codeblock language-cpp" data-language="cpp" id="LpOaC"><span style="font-weight:bold;">代码2.45</span> 类型溢出<code>#include &lt;iostream&gt;
    using namespace std;
    int main(){
        cout &lt;&lt; (1&lt;&lt;7) &lt;&lt; endl;
        cout &lt;&lt; (1&lt;&lt;31) &lt;&lt; endl;
        cout &lt;&lt; unsigned(1&lt;&lt;31) &lt;&lt; endl;
        cout &lt;&lt; (1U&lt;&lt;31) &lt;&lt; endl;			//U表示unsigned int类型
        cout &lt;&lt; (1LL&lt;&lt;31) &lt;&lt; endl;			//LL表示long long类型
        return 0;
    }</code></pre>
            <table border=1 class="ne-table" id="te7Ru" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="375">
                <p class="ne-p" id="u8ba2e056">
                <strong>
                <span class="ne-text">
                    样例输入
                </span>
                </strong>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="u24f4d75f">
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
                <p class="ne-p" id="uf45097d3">
                <span class="ne-text" style="font-size: 14px">
                （无）
                </span>
                </p>
                </td>
                <td width="375">
                <p class="ne-p" id="ubc555c2b">
                <span class="ne-text">
                128
                </span>
                </p>
                <p class="ne-p" id="uc6a94fbe">
                <span class="ne-text">
                -2147483648
                </span>
                </p>
                <p class="ne-p" id="u6fb72ae6">
                <span class="ne-text">
                21474836488
                </span>
                </p>
                <p class="ne-p" id="u9531a918">
                <span class="ne-text">
                2147483648
                </span>
                </p>
                <p class="ne-p" id="u0dc6613b">
                <span class="ne-text">
                2147483648
                </span>
                </p>
                <p class="ne-p" id="u2c057edc">
                <span class="ne-text">
                -1360758559
                </span>
                </p>
                <p class="ne-p" id="ud3df2bad">
                <span class="ne-text">
                428135971041
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <ul class="ne-ul">
            <li id="uc678b7a1">
            <span class="ne-text">
                这段代码中使用了移位运算符
            </span>
            <code class="ne-code">
                <span class="ne-text">
                &lt;&lt;
                </span>
            </code>
            <span class="ne-text">
                ，详见本章6.7节。它表示对一个数值的二进制表达形式下向左平移，每平移一位相当于对原有数值扩大两倍，因此
            </span>
            <code class="ne-code">
                <span class="ne-text">
                1&lt;&lt;n
                </span>
            </code>
            <span class="ne-text">
                等价于2
            </span>
            <sup>
                <span class="ne-text">
                n
                </span>
            </sup>
            <span class="ne-text">
                。因此第4行输出结果为128=2
            </span>
            <sup>
                <span class="ne-text">
                7
                </span>
            </sup>
            <span class="ne-text">
                。
            </span>
            </li>
            <li id="u2dce05fb">
            <span class="ne-text">
                对于初学者最疑惑的部分在于，通过左移数值不断扩大，可能出现输出结果为负数。这是因为在有符号数据类型中，最高位的1是符号位，表示负数。默认情况下，字面量1被按照int类型处理，2
            </span>
            <sup>
                <span class="ne-text">
                31
                </span>
            </sup>
            <span class="ne-text">
                的二进制为1后面跟随31个0，表示负数，而负数的二进制是用补码表示，因此第5行输出结果为-2
            </span>
            <sup>
                <span class="ne-text">
                31
                </span>
            </sup>
            <span class="ne-text">
                =-2147483648。同样道理，对于一个任意的正数，如果某位上的1被左移到最高位，整个数值就会被解读为负数。
            </span>
            </li>
            <li id="链接6e">
            <span class="ne-text">
                对于无符号类型unsigned，最高位不作为符号位，因此不会出现左移后变为负数的情况。第6行显示正确的结果。
            </span>
            </li>
            <li id="u6fef79e4">
            <span class="ne-text">
                在数值后面添加字面量，可以修改数值的默认类型，其中1U表示unsigned int类型的1，1LL表示long
                            long类型的1。这两种类型的数值有效范围都大于31位，因此都能显示正确结果。
            </span>
            </li>
            </ul>
            <h3 id="kNeZO">
            <span class="ne-text">
            知识点：T2A1
            </span>
            </h3>
            <table border=1 class="ne-table" id="KPOcb" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="uf27efcca">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="575">
                <p class="ne-p" id="u0caba8b7" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u3cf86ef7">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="udc0d7b66">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="ua76209eb">
                <span class="ne-text">
                T2A1
                </span>
                </p>
                </td>
                <td width="575">
                <p class="ne-p" id="u157c4f9b">
                <span class="ne-text">
                了解负整数在计算机中的表示方式与正整数不同即可，这种方式叫补码
                </span>
                </p>
                </td>
                <td width="61">
                <p class="ne-p" id="u02053bb3">
                <br/>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u5fed54b8">
                <br/>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="IhTcr">
            <span class="ne-text">
            10. 2 整型的极限值
            </span>
            </h2>
            <p class="ne-p" id="u234facfc" style="text-indent: 2em">
            <span class="ne-text">
            在进行数值运算时，会用到一个数据类型的极值。例如用一个变量
            </span>
            <code class="ne-code">
            <span class="ne-text">
                m
            </span>
            </code>
            <span class="ne-text">
            记录多个数的最大值时，需要先将
            </span>
            <code class="ne-code">
            <span class="ne-text">
                m
            </span>
            </code>
            <span class="ne-text">
            的默认值设置为对应数据类型中的最小值；同样在求对小值时，需要先将
            </span>
            <code class="ne-code">
            <span class="ne-text">
                m
            </span>
            </code>
            <span class="ne-text">
            的默认值设置为它能表示的最大值。有时为了防止数据溢出，也会对极限值进行判断。如第2.1小节所示，其实这些极限值都在头文件
            </span>
            <code class="ne-code">
            <span class="ne-text">
                &lt;climits&gt;
            </span>
            </code>
            <span class="ne-text">
            中有定义，例如int类型的最大值为INT_MAX，最小值为INT_MIN，unsigned
                        int的最大值为UINT_MAX等。如果记不住这些关键字，也可以从二进制的角度进行记忆。有符号整型的最小值可以理解为负0，即符号位为1，其余位为0，最大值为符号位为0，其余位为1。以int为例，最小值为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                1&lt;&lt;31
            </span>
            </code>
            <span class="ne-text">
            ，最大值为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                ~(1&lt;&lt;31)
            </span>
            </code>
            <span class="ne-text">
            。这是因为字面量1的默认数据类型为int。对于long long类型，对应的最小最大值分别为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                1LL&lt;&lt;63
            </span>
            </code>
            <span class="ne-text">
            和
            </span>
            <code class="ne-code">
            <span class="ne-text">
                ~(1LL&lt;&lt;63)
            </span>
            </code>
            <span class="ne-text">
            。因为溢出位被自动截断的原因，数值表示构成循环，最小值减1对应的也是最大值，即int和long long的最大值也可以表示为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                (1&lt;&lt;31)-1
            </span>
            </code>
            <span class="ne-text">
            和
            </span>
            <code class="ne-code">
            <span class="ne-text">
                (1LL&lt;&lt;63)-1
            </span>
            </code>
            <span class="ne-text">
            。而无符号整型的最大值为全1，unsigned int和unsigned long
                        long的最大值分别为~0U和~0LLU。因为溢出位被自动截断的原因，数值表示构成循环，-1的内存表示与对应最大值的内存表示相同，所以也可以表示为
            </span>
            <code class="ne-code">
            <span class="ne-text">
                -1U
            </span>
            </code>
            <span class="ne-text">
            和
            </span>
            <code class="ne-code">
            <span class="ne-text">
                -1LLU
            </span>
            </code>
            <span class="ne-text">
            。
            </span>
            </p>
            <p class="ne-p" id="ub965ea4c" style="text-indent: 2em; text-align: center">
            <span class="ne-text">
            表2.6 int和long
                        long极值的位运算表示法
            </span>
            </p>
            <table border=1 class="ne-table" id="n3t65" style="width: 670px；text-align:center" align="center">
            <tbody>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="u2fff4f63" style="text-align: center">
                <span class="ne-text">
                类型
                </span>
                </p>
                </td>
                <td width="51">
                <p class="ne-p" id="u690c8423" style="text-align: center">
                <span class="ne-text">
                字节
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="u495a5deb" style="text-align: center">
                <span class="ne-text">
                最小值
                </span>
                </p>
                </td>
                <td width="51">
                <p class="ne-p" id="链接7f">
                <span class="ne-text">
                值
                </span>
                </p>
                </td>
                <td width="105">
                <p class="ne-p" id="u38b3c744">
                <span class="ne-text">
                最大值
                </span>
                </p>
                </td>
                <td width="69">
                <p class="ne-p" id="u66874b68">
                <span class="ne-text">
                值
                </span>
                </p>
                </td>
                <td width="133">
                <p class="ne-p" id="udca3a348">
                <span class="ne-text">
                unsigned最大值
                </span>
                </p>
                </td>
                <td width="88">
                <p class="ne-p" id="u5e16797a">
                <span class="ne-text">
                值
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="uadd325f4" style="text-align: center">
                <span class="ne-text">
                int
                </span>
                </p>
                </td>
                <td width="51">
                <p class="ne-p" id="ub1085945" style="text-align: center">
                <span class="ne-text">
                4
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="uac232ddf" style="text-align: center">
                <span class="ne-text">
                1&lt;&lt;31
                </span>
                </p>
                </td>
                <td width="51">
                <p class="ne-p" id="ub1ba412f">
                <span class="ne-text">
                -2
                </span>
                <sup>
                <span class="ne-text">
                    31
                </span>
                </sup>
                </p>
                </td>
                <td width="105">
                <p class="ne-p" id="u2fea4f39">
                <span class="ne-text">
                ~(1&lt;&lt;31)
                </span>
                </p>
                </td>
                <td width="69">
                <p class="ne-p" id="u369e5534">
                <span class="ne-text">
                +2
                </span>
                <sup>
                <span class="ne-text">
                    31
                </span>
                </sup>
                <span class="ne-text">
                -1
                </span>
                </p>
                </td>
                <td width="133">
                <p class="ne-p" id="uf1cf10a2">
                <span class="ne-text">
                -1U或~0U
                </span>
                </p>
                </td>
                <td width="88">
                <p class="ne-p" id="ueb58706c">
                <span class="ne-text">
                +2
                </span>
                <sup>
                <span class="ne-text">
                    32
                </span>
                </sup>
                <span class="ne-text">
                -1
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="89">
                <p class="ne-p" id="ue0c50b61" style="text-align: center">
                <span class="ne-text">
                long long
                </span>
                </p>
                </td>
                <td width="51">
                <p class="ne-p" id="ucfb27371" style="text-align: center">
                <span class="ne-text">
                8
                </span>
                </p>
                </td>
                <td width="84">
                <p class="ne-p" id="u11f5ce86" style="text-align: center">
                <span class="ne-text">
                1LL&lt;&lt;63
                </span>
                </p>
                </td>
                <td width="51">
                <p class="ne-p" id="u6788a13f">
                <span class="ne-text">
                -2
                </span>
                <sup>
                <span class="ne-text">
                    63
                </span>
                </sup>
                </p>
                </td>
                <td width="105">
                <p class="ne-p" id="u7ff15bd3">
                <span class="ne-text">
                ~(1LL&lt;&lt;63)
                </span>
                </p>
                </td>
                <td width="69">
                <p class="ne-p" id="u56488dfe">
                <span class="ne-text">
                +2
                </span>
                <sup>
                <span class="ne-text">
                    63
                </span>
                </sup>
                <span class="ne-text">
                -1
                </span>
                </p>
                </td>
                <td width="133">
                <p class="ne-p" id="ub0d4ee3c">
                <span class="ne-text">
                -1LLU或~0LLU
                </span>
                </p>
                </td>
                <td width="88">
                <p class="ne-p" id="ueb9572ec">
                <span class="ne-text">
                +2
                </span>
                <sup>
                <span class="ne-text">
                    64
                </span>
                </sup>
                <span class="ne-text">
                -1
                </span>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h3 id="p3aHU">
            <span class="ne-text">
            知识点：T2A2
            </span>
            </h3>
            <table border=1 class="ne-table" id="jGOKW" style="width: 100%">
            <tbody>
            <tr class="table-header">
                <td width="58">
                <p class="ne-p" id="u1358e7b7">
                <span class="ne-text">
                索引
                </span>
                </p>
                </td>
                <td width="449">
                <p class="ne-p" id="u25ac624d" style="text-align: center">
                <span class="ne-text">
                要点
                </span>
                </p>
                </td>
                <td width="116">
                <p class="ne-p" id="ue7cf62f6">
                <span class="ne-text">
                正链
                </span>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="u1d2c328a">
                <span class="ne-text">
                反链
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="58">
                <p class="ne-p" id="u3d11a84d">
                <span class="ne-text">
                T2A2
                </span>
                </p>
                </td>
                <td width="449">
                <p class="ne-p" id="链接46">
                <span class="ne-text">
                int和long long以及对应的无符号整数的极值表示
                </span>
                </p>
                </td>
                <td width="116">
                <p class="ne-p" id="uc5e15e45">
                <a class="ne-link" data-href="#nCbZA" href="#nCbZA">
                <span class="ne-text">
                    T221
                </span>
                </a>
                <span class="ne-text">
                ,
                </span>
                <a class="ne-link" data-href="#fzLrK" href="#fzLrK">
                <span class="ne-text">
                    T26A
                </span>
                </a>
                </p>
                </td>
                <td width="55">
                <p class="ne-p" id="uf512fe7e">
                <br/>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <h2 id="Q6pVG">
            <span class="ne-text">
            10.3 常见运算的效率分析
            </span>
            </h2>
            <p class="ne-p" id="u437f9c47" style="text-indent: 2em">
            <span class="ne-text">
            基础运算之间有效率差距，当数据量比较大时，考虑用效率高的运算代替效率低的运算。
            </span>
            </p>
            <details class="lake-collapse">
            <summary id="ua413f696">
            <span class="ne-text">
                移位 &gt; 赋值 &gt; 大小比较 &gt; 加法 &gt; 减法 &gt; 乘法 &gt; 取模 &gt;
                            除法
            </span>
            </summary>
            </details>
            <p class="ne-p" id="u1d05b9e3" style="text-indent: 2em">
            <span class="ne-text">
            从数学上讲，CPU中的算术逻辑单元ALU在算术上只干了两件事，加法，移位，顶多加上取反，在逻辑上，只有与、或、非、异或4种操作。计算机中有专门的移位功能部件，这也是最基础的部件。计算机中有专门的加法器，但是没有乘法器和除法器。减法是取补码相加（补码即对一个数的二进制表示进行取反加1），乘法和除法都是靠移位实现的。左移n位执行乘2
            </span>
            <sup>
            <span class="ne-text">
                n
            </span>
            </sup>
            <span class="ne-text">
            ，右移n位执行除2
            </span>
            <sup>
            <span class="ne-text">
                n
            </span>
            </sup>
            <span class="ne-text">
            。以此为基础，乘法器是一步一步乘(移位)出来的，每次取乘数的一位与被乘数操作，1则把被乘数照写，0则为0，然后乘数右移。这样循环，最后把每一步结果加起来。最后将上面每一步的结果，然后直接相加。乘法是加操作，而除法是每步的结果作加法或减法(加减交替法)，有的算法还需要恢复上一次的结果(余数恢复法)，而且每一步加减后还要进行移位，此外，每次移位后比乘法还多出一次试错操作，所以除法效率最低。
            </span>
            </p>
            <p class="ne-p" id="链接0a" style="text-indent: 2em">
            <span class="ne-text">
            综上所述，计算机用加法器、移位器和基本逻辑门电路就构成一个简单的算术逻辑单元ALU。
            </span>
            </p>
        </div>
        
        <!-- Section lasts -->
        <div class="self-section">
            <h1 id="d0bfT">
            <span class="ne-text">
            题单
            </span>
            </h1>

            <table border=1 class="ne-table" id="okMtq" style="width: 100%">
            <tbody>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="ue21d32ca">
                <span class="ne-text">
                序号
                </span>
                </p>

                <td width="132">
                <p class="ne-p" id="uc826776c">
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                题目名称
                </span>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u72a5f104">
                <span class="ne-text">
                知识点
                </span>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="uf6cc0190">
                <span class="ne-text">
                序号
                </span>
                </p>

                <td width="123">
                <p class="ne-p" id="uc7f70386">
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                题目名称
                </span>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u9b68f967">
                <span class="ne-text">
                知识点
                </span>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="u571f475d">
                <span class="ne-text">
                LX201
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="uce24935b">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161690" target="_blank">
                <span class="ne-text">
                    你叫什么？
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u02fde3ac">
                <a class="ne-link" data-href="#XPPV7" href="#XPPV7">
                <span class="ne-text">
                    T211
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u1d6b699e">
                <span class="ne-text">
                LX202
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="u436a6df4">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161691" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161691" target="_blank">
                <span class="ne-text">
                    昕哥铁粉团
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="uc0146856">
                <a class="ne-link" data-href="#ISHX3" href="#ISHX3">
                <span class="ne-text">
                    T212
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="ub214cfc5">
                <span class="ne-text">
                LX203
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u18c5f73b">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161692" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161692" target="_blank">
                <span class="ne-text">
                    名称缩写
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u3efd1bab">
                <a class="ne-link" data-href="#ISHX3" href="#ISHX3">
                <span class="ne-text">
                    T214
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u2329e695">
                <span class="ne-text">
                LX204
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="u0f75df16">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161693" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161693" target="_blank">
                <span class="ne-text">
                    圆的面积
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u7958ec2d">
                <a class="ne-link" data-href="#MOJpK" href="#MOJpK">
                <span class="ne-text">
                    T215
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="链接06">
                <span class="ne-text">
                LX205
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u35e24180">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161694" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161694" target="_blank">
                <span class="ne-text">
                    优秀率
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="ubb900d9d">
                <a class="ne-link" data-href="#MOJpK" href="#MOJpK">
                <span class="ne-text">
                    T216
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u7d107561">
                <span class="ne-text">
                LX206
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="uf7d03b71">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161695" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161695" target="_blank">
                <span class="ne-text">
                    N进制转十进制
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u63d3d942">
                <a class="ne-link" data-href="#wfiRs" href="#wfiRs">
                <span class="ne-text">
                    T223
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#aQStI" href="#aQStI">
                <span class="ne-text">
                    T265
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="u6486f6ac">
                <span class="ne-text">
                LX207
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u4a83505d">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161696" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161696" target="_blank">
                <span class="ne-text">
                    平方也不简单
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u373c371c">
                <a class="ne-link" data-href="#wfiRs" href="#wfiRs">
                <span class="ne-text">
                    T224
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="uc782d30b">
                <span class="ne-text">
                LX208
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="u13d943c8">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161697" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161697" target="_blank">
                <span class="ne-text">
                    十进制转N进制
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="ua234c7e8">
                <a class="ne-link" data-href="#ru7rn" href="#ru7rn">
                <span class="ne-text">
                    T225
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#aQStI" href="#aQStI">
                <span class="ne-text">
                    T265
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="uc4cfa99c">
                <span class="ne-text">
                LX209
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u4f826110">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161699" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161699" target="_blank">
                <span class="ne-text">
                    纯小数的二进制
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u0ccc3d40">
                <a class="ne-link" data-href="#iecae" href="#iecae">
                <span class="ne-text">
                    T233
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#vctGB" href="#vctGB">
                <span class="ne-text">
                    T252
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u647f448f">
                <span class="ne-text">
                LX210
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="u2f637d96">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161698" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161698" target="_blank">
                <span class="ne-text">
                    房子的高度
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u909a6522">
                <a class="ne-link" data-href="#wfiRs" href="#wfiRs">
                <span class="ne-text">
                    T224
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#GYNKe" href="#GYNKe">
                <span class="ne-text">
                    T291
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="ua8837f7e">
                <span class="ne-text">
                LX211
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="uc48afcb9">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161700" target="_blank">
                <span class="ne-text">
                    浮点数比较
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u060aae87">
                <a class="ne-link" data-href="#iecae" href="#iecae">
                <span class="ne-text">
                    T234
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#iAVWo" href="#iAVWo">
                <span class="ne-text">
                    T245
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#qAd0N" href="#qAd0N">
                <span class="ne-text">
                    T277
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u5e742358">
                <span class="ne-text">
                LX212
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="链接6d">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161701" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161701" target="_blank">
                <span class="ne-text">
                    循环加密
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u73392e95">
                <a class="ne-link" data-href="#wG8i3" href="#wG8i3">
                <span class="ne-text">
                    T241
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#aQStI" href="#aQStI">
                <span class="ne-text">
                    T265
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="u867c357d">
                <span class="ne-text">
                LX213
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u69dada59">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161702" target="_blank">
                <span class="ne-text">
                    16-&gt;10进制转换
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="uc631e20c">
                <a class="ne-link" data-href="#wfiRs" href="#wfiRs">
                <span class="ne-text">
                    T223
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#wG8i3" href="#wG8i3">
                <span class="ne-text">
                    T242
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#LBVF5" href="#LBVF5">
                <span class="ne-text">
                    T243
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#ri2d9" href="#ri2d9">
                <span class="ne-text">
                    T272
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u8387a2f1">
                <span class="ne-text">
                LX214
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="uaf9335b4">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161703" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161703" target="_blank">
                <span class="ne-text">
                    闰年的二月
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u961a7cb3">
                <a class="ne-link" data-href="#iAVWo" href="#iAVWo">
                <span class="ne-text">
                    T244
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#iAVWo" href="#iAVWo">
                <span class="ne-text">
                    T245
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="udadd238c">
                <span class="ne-text">
                LX215
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u4e8354cb">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161704" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161704" target="_blank">
                <span class="ne-text">
                    整数的平均数
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="uff6caef7">
                <a class="ne-link" data-href="#jVv0C" href="#jVv0C">
                <span class="ne-text">
                    T251
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#aihAX" href="#aihAX">
                <span class="ne-text">
                    T264
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u58f3ce92">
                <span class="ne-text">
                LX216
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="u1cbbcdfc">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161705" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161705" target="_blank">
                <span class="ne-text">
                    猴子吃桃
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="ufe79a673">
                <a class="ne-link" data-href="#f8WvB" href="#f8WvB">
                <span class="ne-text">
                    T256
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="u4a8f9933">
                <span class="ne-text">
                LX217
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u5e933b2a">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161706" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161706" target="_blank">
                <span class="ne-text">
                    交换字符串
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="uc143792f">
                <a class="ne-link" data-href="#panTK" href="#panTK">
                <span class="ne-text">
                    T26B
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u1c1a661e">
                <span class="ne-text">
                LX218
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="u73f5579b">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161707" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161707" target="_blank">
                <span class="ne-text">
                    复制图案
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="ue3c9b8f5">
                <a class="ne-link" data-href="#W9YYd" href="#W9YYd">
                <span class="ne-text">
                    T273
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="u5d89a094">
                <span class="ne-text">
                LX219
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="ufd97c2ac">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161708" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161708" target="_blank">
                <span class="ne-text">
                    字符串和数字
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u9b9f65cc">
                <a class="ne-link" data-href="#UaFTI" href="#UaFTI">
                <span class="ne-text">
                    T276
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="ub963a558">
                <span class="ne-text">
                LX220
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="uc1123e3f">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161709" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161709" target="_blank">
                <span class="ne-text">
                    时间流逝
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u5d290e01">
                <a class="ne-link" data-href="#qAd0N" href="#qAd0N">
                <span class="ne-text">
                    T277
                </span>
                </a>
                <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
                ,
                </span>
                <a class="ne-link" data-href="#ZBSEW" href="#ZBSEW">
                <span class="ne-text">
                    T281
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="链接d6">
                <span class="ne-text">
                LX221
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u50f6a662">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161710" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161710" target="_blank">
                <span class="ne-text">
                    数学函数调用
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="u0f2c9513">
                <a class="ne-link" data-href="#GYNKe" href="#GYNKe">
                <span class="ne-text">
                    T291
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="ub6496737">
                <span class="ne-text">
                LX222
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="ub2bd7997">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161711" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161711" target="_blank">
                <span class="ne-text">
                    正五边形
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u5f874e45">
                <a class="ne-link" data-href="#GYNKe" href="#GYNKe">
                <span class="ne-text">
                    T291
                </span>
                </a>
                </p>
                </td>
            </tr>
            <tr style="height: 33px">
                <td width="63">
                <p class="ne-p" id="u40ffaa47">
                <span class="ne-text">
                LX223
                </span>
                </p>
                </td>

                <td width="132">
                <p class="ne-p" id="u51dc7598">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161712" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161712" target="_blank">
                <span class="ne-text">
                    火车相遇
                </span>
                </a>
                </p>
                </td>
                <td width="98">
                <p class="ne-p" id="ue975253d">
                <a class="ne-link" data-href="#jVv0C" href="#jVv0C">
                <span class="ne-text">
                    T251
                </span>
                </a>
                </p>
                </td>
                <td width="64">
                <p class="ne-p" id="u73d0553d">
                <span class="ne-text">
                LX224
                </span>
                </p>
                </td>

                <td width="123">
                <p class="ne-p" id="ue5103605">
                <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?id=190098&question_bank_id=13997" href="https://www.qingline.net/practice-list/practice?id=190098&question_bank_id=13997" target="_blank">
                <span class="ne-text">
                    头疼的公倍数
                </span>
                </a>
                </p>
                </td>
                <td width="123">
                <p class="ne-p" id="u2a4a2c36">
                <a class="ne-link" data-href="#aihAX" href="#aihAX">
                <span class="ne-text">
                    T264
                </span>
                </a>
                </p>
                </td>
            </tr>
            </tbody>
            </table>
            <p class="ne-p" id="u2b33088d">
            <span class="ne-text">
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
    name: 'Ch2',
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
        this.$store.dispatch('toChapter', 5);
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
