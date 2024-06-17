<template>
<div class="whole-page">
    <!-- content -->
    <div class="self-main">
<div class="chapter-title">✋第七章 面向对象</div>
<div class="lake-content" ref="content-data" typography="classic">
    <div class="self-section">
 <h1 id="EoYNR">
  <span class="ne-text">
   1. 类和对象
  </span>
 </h1>
 <p class="ne-p" id="u534bb75a" style="text-align: center">
  <span class="ne-text" style="font-size: 16px">
   表7.1
  </span>
  <span class="ne-text">
   NBA2022年东部赛区统计数据
  </span>
 </p>
 <table border=1 class="ne-table" id="uxvRe" style="text-align:center" align="center">
  <tbody>
   <tr style="height: 22px">
    <td width="72">
     <p class="ne-p" id="ud297c60b">
      <span class="ne-text">
       排名
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u748e91e0">
      <span class="ne-text">
       球队
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="uf03c6b92">
      <span class="ne-text">
       胜
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u50637a1e">
      <span class="ne-text">
       负
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u95283c89">
      <span class="ne-text">
       胜率
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u8dd27e93">
      <span class="ne-text">
       得分
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u45ffde83">
      <span class="ne-text">
       失分
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u271cd988">
      <span class="ne-text">
       分差
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u6db9a204">
      <span class="ne-text">
       1
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="链接28">
      <span class="ne-text">
       热火
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="udd3fa8c5">
      <span class="ne-text">
       53
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ua3d1e05b">
      <span class="ne-text">
       29
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="udecda990">
      <span class="ne-text">
       64.60%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u8bd008ed">
      <span class="ne-text">
       110.02
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="ua8a2d419">
      <span class="ne-text">
       105.57
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="uaa7d58ae">
      <span class="ne-text">
       4.45
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="uefee7b59">
      <span class="ne-text">
       2
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u9919c8ac">
      <span class="ne-text">
       凯尔特人
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u1e05d784">
      <span class="ne-text">
       51
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u06dfc38b">
      <span class="ne-text">
       31
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u80bfe5dd">
      <span class="ne-text">
       62.20%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u3e7f884c">
      <span class="ne-text">
       111.76
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u2aa13f0f">
      <span class="ne-text">
       104.48
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="ufdee0e85">
      <span class="ne-text">
       7.28
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u57e482a7">
      <span class="ne-text">
       3
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u0e20b7aa">
      <span class="ne-text">
       雄鹿
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ua70a7dbb">
      <span class="ne-text">
       51
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ua95808bf">
      <span class="ne-text">
       31
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u5492e4aa">
      <span class="ne-text">
       62.20%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="链接d5">
      <span class="ne-text">
       115.49
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u3e43ae14">
      <span class="ne-text">
       112.13
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u58c8819a">
      <span class="ne-text">
       3.35
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="uee2fcf45">
      <span class="ne-text">
       4
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u1366d8f9">
      <span class="ne-text">
       76人
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u4284f6c2">
      <span class="ne-text">
       51
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="链接15">
      <span class="ne-text">
       31
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ub4ba20ce">
      <span class="ne-text">
       62.20%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ucb6ca74e">
      <span class="ne-text">
       109.94
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="uefe8aa76">
      <span class="ne-text">
       107.33
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="uba5f0913">
      <span class="ne-text">
       2.61
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u1915b11a">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="ub2b6ac0f">
      <span class="ne-text">
       猛龙
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u00a39545">
      <span class="ne-text">
       48
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="udac73943">
      <span class="ne-text">
       34
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u83833e78">
      <span class="ne-text">
       58.50%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ucb0c96f1">
      <span class="ne-text">
       109.39
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="udf17f725">
      <span class="ne-text">
       107.1
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u742e15c5">
      <span class="ne-text">
       2.29
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u2056e42c">
      <span class="ne-text">
       6
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u0e9d058f">
      <span class="ne-text">
       公牛
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u364bf118">
      <span class="ne-text">
       46
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ucf3f38cf">
      <span class="ne-text">
       36
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="链接d3">
      <span class="ne-text">
       56.10%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u8932f849">
      <span class="ne-text">
       111.61
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="uff085244">
      <span class="ne-text">
       112
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="uae9e4b01">
      <span class="ne-text">
       -0.39
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="udf7a99be">
      <span class="ne-text">
       7
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u4e0429cb">
      <span class="ne-text">
       篮网
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u6b75df0e">
      <span class="ne-text">
       44
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u4f8c878a">
      <span class="ne-text">
       38
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="uc234f35c">
      <span class="ne-text">
       53.70%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u2a4510f1">
      <span class="ne-text">
       112.9
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u27368c19">
      <span class="ne-text">
       112.12
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u367ef784">
      <span class="ne-text">
       0.78
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="uedf68102">
      <span class="ne-text">
       8
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="uf6c9497d">
      <span class="ne-text">
       老鹰
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="uc41db2dc">
      <span class="ne-text">
       43
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ua1d4b47e">
      <span class="ne-text">
       39
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="udff77364">
      <span class="ne-text">
       52.40%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ud787b97a">
      <span class="ne-text">
       113.94
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u67a28a6c">
      <span class="ne-text">
       112.38
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="ubf4cb59b">
      <span class="ne-text">
       1.56
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="ud769cc36">
      <span class="ne-text">
       9
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u9f816243">
      <span class="ne-text">
       骑士
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u1416b806">
      <span class="ne-text">
       44
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u62dd269d">
      <span class="ne-text">
       38
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u3fe03c56">
      <span class="ne-text">
       53.70%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ud0c828ad">
      <span class="ne-text">
       107.79
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u0898cf2b">
      <span class="ne-text">
       105.67
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="链接2f">
      <span class="ne-text">
       2.12
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u329a3dec">
      <span class="ne-text">
       10
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u447ce798">
      <span class="ne-text">
       黄蜂
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u5ba11f25">
      <span class="ne-text">
       43
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u8f2fab5c">
      <span class="ne-text">
       39
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u59d334b3">
      <span class="ne-text">
       52.40%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u61e6db2b">
      <span class="ne-text">
       115.33
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="ubaf01b85">
      <span class="ne-text">
       114.89
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u254ed952">
      <span class="ne-text">
       0.44
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u84d7eece">
      <span class="ne-text">
       11
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="链接e3">
      <span class="ne-text">
       尼克斯
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ube8137ed">
      <span class="ne-text">
       37
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u40f3507b">
      <span class="ne-text">
       45
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u3baff5bf">
      <span class="ne-text">
       45.10%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u2878b370">
      <span class="ne-text">
       106.48
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u7f096c63">
      <span class="ne-text">
       106.6
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u6b94fd3f">
      <span class="ne-text">
       -0.12
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="uf652fad7">
      <span class="ne-text">
       12
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u4f5713eb">
      <span class="ne-text">
       奇才
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ua4018eca">
      <span class="ne-text">
       35
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u1c48454b">
      <span class="ne-text">
       47
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ub095307d">
      <span class="ne-text">
       42.70%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ua447de9c">
      <span class="ne-text">
       108.62
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="uf0d0286b">
      <span class="ne-text">
       112
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u3f866e77">
      <span class="ne-text">
       -3.38
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u776b5be0">
      <span class="ne-text">
       13
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u6abb71da">
      <span class="ne-text">
       步行者
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u76098fea">
      <span class="ne-text">
       25
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="ufc1b0d93">
      <span class="ne-text">
       57
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="链接b0">
      <span class="ne-text">
       30.50%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="uc6250121">
      <span class="ne-text">
       111.46
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u7c4436dd">
      <span class="ne-text">
       114.94
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="链接69">
      <span class="ne-text">
       -3.48
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u76ae0d05">
      <span class="ne-text">
       14
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="u347b2cf7">
      <span class="ne-text">
       活塞
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u5a798ab0">
      <span class="ne-text">
       23
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u0b3b6efe">
      <span class="ne-text">
       59
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="uf536f9c2">
      <span class="ne-text">
       28.00%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u02404a50">
      <span class="ne-text">
       104.83
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="u2fdbc68a">
      <span class="ne-text">
       112.55
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="u9e25c43d">
      <span class="ne-text">
       -7.72
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 24px">
    <td width="72">
     <p class="ne-p" id="u943c30c7">
      <span class="ne-text">
       15
      </span>
     </p>
    </td>
    <td width="107">
     <p class="ne-p" id="uad69ed85">
      <span class="ne-text">
       魔术
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ub65587b9">
      <span class="ne-text">
       22
      </span>
     </p>
    </td>
    <td width="63">
     <p class="ne-p" id="u480c9c4d">
      <span class="ne-text">
       60
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="ua509a1b8">
      <span class="ne-text">
       26.80%
      </span>
     </p>
    </td>
    <td width="72">
     <p class="ne-p" id="u6ae75ade">
      <span class="ne-text">
       104.23
      </span>
     </p>
    </td>
    <td width="86">
     <p class="ne-p" id="ue1e371d3">
      <span class="ne-text">
       112.23
      </span>
     </p>
    </td>
    <td width="77">
     <p class="ne-p" id="uae46a6fa">
      <span class="ne-text">
       -8
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="uf4cfe859" style="text-indent: 2em">
  <span class="ne-text">
   表7.1
            是NBA2022年东部赛区的一些统计数据。如果需要存储这些数据，可以每列建一个数组，因为只有一列的数据类型才是相同的。但是经过仔细观察可以发现，一行数据才是构成一个球队的整体，每列都是这个球队的一个属性，C++中可以通过“类”或“结构体”封装具有不同数据类型多个属性的数据。结构体是C语言中提供的复合数据类型，因为类包含了结构体中的所有功能，因此只需要掌握类的使用方法即可。以下为构造类的具体代码实现：
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="udRkN"><span style="font-weight:bold;">代码7.1</span>类与对象样例
 <code>#include &lt;iostream&gt;
using namespace std;
class Team {
public:
    string name;
    int win, lose;
    double points, opoints;
    Team(const string &amp;n, int w, int l, double p, double op) {
        name = n;
        win = w;
        lose = l;
        points = p;
        opoints = op;
    }
    double rate() {
        return win / double(win + lose);
    }
    double gap() {
        return points - opoints;
    }
};
int main()
{
    Team t1 = Team("Heat", 53, 29, 110.02, 105.57);
    Team t2 = Team("Bulls", 46, 36, 111.61, 112);
    cout &lt;&lt; t1.name &lt;&lt; '\t' &lt;&lt; t1.rate() &lt;&lt; '\t' &lt;&lt; t1.gap() &lt;&lt; endl;
    cout &lt;&lt; t2.name &lt;&lt; '\t' &lt;&lt; t2.rate() &lt;&lt; '\t' &lt;&lt; t2.gap() &lt;&lt; endl;
    return 0;
}</code></pre>
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
     <p class="ne-p" id="u20f4d4ad">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="链接23">
      <span class="ne-text">
       Heat 0.646341 4.45
      </span>
     </p>
     <p class="ne-p" id="u8d677e9a">
      <span class="ne-text">
       Bulls 0.560976 -0.399
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="u8e1e577e">
   <span class="ne-text">
    第3-21行构造了一个新的类
   </span>
   <code class="ne-code">
    <span class="ne-text">
     Team
    </span>
   </code>
   <span class="ne-text">
    ，从编程的角度讲，一个类相当于一个新的数据类型，其具体使用方法与数据类型的调用完全相同。第3行的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     Team
    </span>
   </code>
   <span class="ne-text">
    是类的名称，即新数据类型的名称。第24-25行用新的类构造了两个变量
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t1
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t2
    </span>
   </code>
   <span class="ne-text">
    ，也称为对象。类是抽象概念，表示一种类别，包含特定的属性和方法；对象是通过类实例化出一个带有具体数据的变量。例如对象
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t1
    </span>
   </code>
   <span class="ne-text">
    包含了热队的数据，对象
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t2
    </span>
   </code>
   <span class="ne-text">
    包含了公牛队的数据。用同一个类构造的多个对象具有相同的行为，但是数据相互独立。
   </span>
  </li>
  <li id="uc49da888">
   <span class="ne-text">
    第5-7行定义了5个属性，这些属性可以是各种数据类型。属性是一个类的数据成员。属性可以被类内的所有函数进行访问。
   </span>
  </li>
  <li id="u08b01562">
   <span class="ne-text">
    第15-20行定义了两个函数，属于一个类的函数称为这个类的成员函数，表示这个类所能执行的行为。
   </span>
  </li>
  <li id="u4c49e3aa">
   <span class="ne-text">
    一个类的属性或行为可以通过运算符
   </span>
   <code class="ne-code">
    <span class="ne-text">
     .
    </span>
   </code>
   <span class="ne-text">
    进行调用，如第26-27行所示。
   </span>
  </li>
  <li id="u6771b374">
   <span class="ne-text">
    第8-14行定义了一个跟类同名的函数，称为构造函数。它在对象被定义时进行自动调用，如第24-25行所示。构造函数且没有函数返回值，参数列表可以由用户自行指定，根据参数列表的不同，可以构造多个构造函数。如果用户没有显式定义构造函数，将会自动构建一个无参的缺省构造函数。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u1dbc9555" style="text-indent: 2em">
  <span class="ne-text">
   以对象为基础进行程序设计，叫做面向对象编程。C++是面向对象语言，但是因为对C的兼容，并不是纯粹的面向对象语言，但是JAVA和Python都是纯面向对象语言，在纯面向对象语言中，一切都是对象。
  </span>
 </p>
 <h3 id="ZvJ3S">
  <span class="ne-text">
   知识点：T711
  </span>
 </h3>
 <table border=1 class="ne-table" id="dn2RE" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uc6458d5f">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u49bc46fe" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u19a5dfc8">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ucb2ee2c3">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 37px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="uafaa5c9f">
      <span class="ne-text">
       T711
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="链接de">
      <span class="ne-text">
       掌握类、对象、构造函数、成员变量、成员函数
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u886b1645">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u1e57b9a7">
      <a class="ne-link" data-href="#VjX61" href="#VjX61">
       <span class="ne-text">
        T791
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 37px">
    <td width="559">
     <p class="ne-p" id="u202b677f">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161755" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161755" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX701)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161756" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161756" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX702)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161757" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161757" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX703)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161758" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161758" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX704)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
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
 </div>
 <div class="self-section">
 <h1 id="SOXF7">
  <span class="ne-text">
   2. 动态对象和this指针
  </span>
 </h1>
 <p class="ne-p" id="uaf4a137d" style="text-indent: 2em">
  <span class="ne-text">
   类就是一种新的数据类型，也可以用创建动态对象。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="eqWMA"><span style="font-weight:bold;">代码7.2</span>类的动态对象
 <code>int main()
{
    Team* t1 = new Team("Heat", 53, 29, 110.02, 105.57);
    Team* t2 = new Team("Bulls", 46, 36, 111.61, 112);
    cout &lt;&lt; (*t1).name &lt;&lt; '\t' &lt;&lt; (*t1).rate() &lt;&lt; '\t' &lt;&lt; (*t1).gap() &lt;&lt; endl;
    cout &lt;&lt; t2-&gt;name &lt;&lt; '\t' &lt;&lt; t2-&gt;rate() &lt;&lt; '\t' &lt;&lt; t2-&gt;gap() &lt;&lt; endl;
    delete t1;
    delete t2;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="udbd653ff">
   <span class="ne-text">
    当访问指针变量的属性或方法时，可也采用第5行的写法，但是书写时比较繁琐，因此C/C++通常采用第6行的形式进行代替，箭头符号
   </span>
   <code class="ne-code">
    <span class="ne-text">
     -&gt;
    </span>
   </code>
   <span class="ne-text">
    也产生了指针的含义。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u70b114a5" style="text-indent: 2em">
  <span class="ne-text">
   相同类型构造的多个对象，在执行成员函数时，都是执行同一个成员函数。类的每个成员函数（静态函数除外），包括构造函数，都包含一个隐藏的名为this的形参，这个this参数为指向该对象的指针，用于指明当前正在被处理的对象。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="A2A48"><span style="font-weight:bold;">代码7.2</span>类的动态对象
 <code>#include &lt;iostream&gt;
using namespace std;
class Team {
public:
    string name;
    Team(const string &amp;n) {
        name = n;
    }
    void test(string name) {
        cout &lt;&lt; this-&gt;name &lt;&lt;'\t'&lt;&lt; name &lt;&lt; '\t' &lt;&lt; this &lt;&lt; endl;
    }
    void test1(string n) {
        cout &lt;&lt; this-&gt;name &lt;&lt;'\t'&lt;&lt; name &lt;&lt; '\t' &lt;&lt; this &lt;&lt; endl;
    }
};
int main()
{
    Team t1 = Team("Heat");
    Team t2 = Team("Bulls");
    cout &lt;&lt; &amp;t1 &lt;&lt; '\t' &lt;&lt; &amp;t2 &lt;&lt; endl;
    t1.test("t1");
    t2.test("t2");
    t1.test1("t1");
    t2.test1("t2");
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="c2XW3" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u0f05616c">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u496f9250">
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
     <p class="ne-p" id="u37a18577">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u9434a573">
      <span class="ne-text">
       0x64fda0 0x64fdc0
      </span>
     </p>
     <p class="ne-p" id="u58c3830a">
      <span class="ne-text">
       Heat t1 0x64fda0
      </span>
     </p>
     <p class="ne-p" id="u4a057838">
      <span class="ne-text">
       Bulls t2 0x64fdc0
      </span>
     </p>
     <p class="ne-p" id="u395dead4">
      <span class="ne-text">
       Heat Heat 0x64fda0
      </span>
     </p>
     <p class="ne-p" id="u5906cd6c">
      <span class="ne-text">
       Bulls Bulls 0x64fdc0
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="udccc44a9">
   <span class="ne-text">
    第20行输出2个对象的地址，说明两个对象存放在两个不同的空间，存放了不同的数据。
   </span>
  </li>
  <li id="ud1912880">
   <span class="ne-text">
    第21-24行用两个不同的对象分别调用成员函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     test
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     test1
    </span>
   </code>
   <span class="ne-text">
    时，输出的
   </span>
   <code class="ne-code">
    <span class="ne-text">
     this
    </span>
   </code>
   <span class="ne-text">
    显示了不同的地址，分别对应
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t1
    </span>
   </code>
   <span class="ne-text">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t2
    </span>
   </code>
   <span class="ne-text">
    ，其实每个对象调用成员函数时，都隐含把当前对象的地址传递给成员函数，成员函数通过
   </span>
   <code class="ne-code">
    <span class="ne-text">
     this
    </span>
   </code>
   <span class="ne-text">
    关键字访问这个地址。
   </span>
  </li>
  <li id="u9e6acb32">
   <span class="ne-text">
    第13行输出结果看出，当调用属性或成员函数时，可以添加
   </span>
   <code class="ne-code">
    <span class="ne-text">
     this
    </span>
   </code>
   <span class="ne-text">
    指针，也可以省略，二者作用相同。但是如果跟局部变量有命名冲突时，例如第10行的输出结果，省略时表示局部变量，有
   </span>
   <code class="ne-code">
    <span class="ne-text">
     this
    </span>
   </code>
   <span class="ne-text">
    指针时表示类的属性或成员函数。
   </span>
  </li>
 </ul>
 <h3 id="BrVpR">
  <span class="ne-text">
   知识点：T721
  </span>
 </h3>
 <table border=1 class="ne-table" id="Uu0Wv" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uae1fa425">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ue89cc8b9" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u64fc681e">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u4446e2e9">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ueafcce60">
      <span class="ne-text">
       T721
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u116e6f29">
      <span class="ne-text">
       掌握动态对象和this指针的使用方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ua46919db">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#QzjoP" href="ch6#QzjoP">
       <span class="ne-text">
        T631
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ubfced708">
      <a class="ne-link" data-href="#VjX61" href="#VjX61">
       <span class="ne-text">
        T791
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="e0HnG">
  <span class="ne-text">
   3. 动态属性和析构函数
  </span>
 </h1>
 <p class="ne-p" id="u3e6d3456" style="text-indent: 2em">
  <span class="ne-text">
   当一个类中有指针数据成员时，这些成员的赋值需要通过动态内存分配。如前所述，动态分配的内存将会一直占用内存空间，直到手动释放。而当一个对象使用结束时，希望它所占用的所有内存都被释放。因此每个类都提供了一个析构函数，当对象生命周期结束，或被
  </span>
  <code class="ne-code">
   <span class="ne-text">
    delete
   </span>
  </code>
  <span class="ne-text">
   删除时，自动释放它的所有成员所占据的内存。此外，如果在对象生命周期结束时，如果有需要保存的文件，需要释放的网络链接等资源，也可以在析构函数中完成。析构函数与构造函数类似，没有返回值，与类名相同，前面加一个
  </span>
  <code class="ne-code">
   <span class="ne-text">
    ~
   </span>
  </code>
  <span class="ne-text">
   运算符。析构函数都是无参的，一个类只能最多有一个析构函数。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="IULin"><span style="font-weight:bold;">代码7.3</span>析构函数的使用
 <code>#include &lt;iostream&gt;
using namespace std;
class Team {
public:
    int* score=NULL;
    Team(int n) {
        score = new int(n);
    }
    void test(string name) {
        cout &lt;&lt; *score &lt;&lt; endl;
    }
    ~Team() {
        if(score!=NULL)
            delete score;
    }
};
int main()
{
    Team *t1 = new Team(101);
    t1-&gt;test("t1");
    delete t1;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="DfmYB" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="uad25c710">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u42c16184">
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
     <p class="ne-p" id="ud0cff173">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u1a3cfeb9">
      <span class="ne-text">
       101
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ud1d5434c">
   <span class="ne-text">
    第12-15行就是析构函数。属性
   </span>
   <code class="ne-code">
    <span class="ne-text">
     score
    </span>
   </code>
   <span class="ne-text">
    在构造函数中被动态分配，当第21行清除对象
   </span>
   <code class="ne-code">
    <span class="ne-text">
     t1
    </span>
   </code>
   <span class="ne-text">
    时，自动调用析构函数，属性
   </span>
   <code class="ne-code">
    <span class="ne-text">
     score
    </span>
   </code>
   <span class="ne-text">
    所分配的堆内存被释放。
   </span>
  </li>
 </ul>
 <h3 id="Tx7ka">
  <span class="ne-text">
   知识点：T731
  </span>
 </h3>
 <table border=1 class="ne-table" id="Nlkua" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uc6a6a080">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u5b6cffbc" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ud775b6a2">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接03">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ubd64c1c0">
      <span class="ne-text">
       T731
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ue9d4a6c5">
      <span class="ne-text">
       掌握动态属性和析构函数使用方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ufb8d91f6">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/qvzagc#QzjoP" href="ch6#QzjoP">
       <span class="ne-text">
        T631
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue68d1625">
      <br/>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="Rr7De">
  <span class="ne-text">
   4. 封装
  </span>
 </h1>
 <p class="ne-p" id="u2826e007" style="text-indent: 2em">
  <span class="ne-text">
   面向对象的三大基本特征就是封装（Encapsulation）、继承（Inheritance）和多态（Polymorphism）。封装的一个非常好的实践准则就是将所有的属性成员定义为私有，这样可以更好地控制数据，当数据访问发生变更时，只需要简单地修改一个地方，就可以满足需求的变更，而不需要大规模的修改代码，从而提高数据的安全性。C++中提供了三种访问控制符进行不同级别的访问控制：
  </span>
 </p>
 <table border=1 class="ne-table" id="ipGSh">
  <tbody>
   <tr style="height: 33px">
    <td width="107">
     <p class="ne-p" id="uee24c15a">
      <span class="ne-text">
       访问控制符
      </span>
     </p>
    </td>
    <td width="644">
     <p class="ne-p" id="ua2cfd199">
      <span class="ne-text">
       说明
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="107">
     <p class="ne-p" id="udc778f7e">
      <span class="ne-text">
       private
      </span>
     </p>
    </td>
    <td width="644">
     <p class="ne-p" id="ua369caaf">
      <span class="ne-text">
       私有，说明该成员（数据/函数）仅允许在类的内部进行访问
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="107">
     <p class="ne-p" id="u787acdab">
      <span class="ne-text">
       protected
      </span>
     </p>
    </td>
    <td width="644">
     <p class="ne-p" id="ub75e274d">
      <span class="ne-text">
       保护，该成员可以在类的内部访问，也运行在该类的继承类中访问
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="107">
     <p class="ne-p" id="uce9c4b03">
      <span class="ne-text">
       public
      </span>
     </p>
    </td>
    <td width="644">
     <p class="ne-p" id="ueb9afd34">
      <span class="ne-text">
       公有，该成员可以随意访问
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Zm0rI"><span style="font-weight:bold;">代码7.4</span>访问控制
 <code>#include &lt;iostream&gt;
using namespace std;
class Team {
private:
    int score;
public:
    int getScore() { return score; }
    void setScore(int score) { this-&gt;score = score; }
};
int main()
{
    Team t1 = Team();
    t1.setScore(101);
    cout &lt;&lt; t1.getScore() &lt;&lt; endl;
    //cout &lt;&lt; t1.score &lt;&lt; endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="uf025bd9b">
   <span class="ne-text">
    以上代码中将属性score设定为private，这样类外就无法直接访问，例如第15行执行会报错。但是可以在类内进行访问，例如第7-8行函数体中所示。
   </span>
  </li>
  <li id="ua4d73d73">
   <span class="ne-text">
    设置了两个公有函数，分别对属性score进行读和写操作。这样一旦读写操作发生更改，例如将score改成百分制，只需要修改getScore和setScore两个函数的函数体即可，其他访问score的位置都不需要更改。这样对大型程序设计的维护和升级都有很有帮助。
   </span>
  </li>
 </ul>
 <h3 id="dNdcQ">
  <span class="ne-text">
   知识点：T741
  </span>
 </h3>
 <table border=1 class="ne-table" id="qmaMY" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ufecd428a">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u8e67945a" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u1a95170e">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="uef9c4209">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u0c9c8b05">
      <span class="ne-text">
       T741
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ude19ff68">
      <span class="ne-text">
       掌握对象的封装和属性的访问控制
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ufb082081">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub7a28b93">
      <a class="ne-link" data-href="#VjX61" href="#VjX61">
       <span class="ne-text">
        T791
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="u7fbd5fd5">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161759" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161759" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX705)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161760" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161760" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX706)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161761" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161761" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX707)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
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
</div>
<div class="self-section">
 <h1 id="W6gu4">
  <span class="ne-text">
   5. 继承
  </span>
 </h1>
 <p class="ne-p" id="ufb55cb03" style="text-align: justify; text-indent: 2em">
  <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
   在 C++
            中，继承是一个对象自动获取其父对象的所有属性和行为的过程。这样可以重用、扩展或修改其他类中定义的属性和行为。在 C++
            中，继承另一个类成员的类称为派生类，其成员被继承的类称为基类。派生类是基类的专用类。C++中支持五中形式的继承：1）
  </span>
  <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
   单继承；2）多重继承；3）分层继承；4）多级继承；5）混合继承。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="s3Ngv"><span style="font-weight:bold;">代码7.5</span>类的继承
 <code>#include &lt;iostream&gt;
using namespace std;
// 基类
class Vehicle {
  public:
    string brand = "Ford";
    void honk() {
      cout &lt;&lt; "Tuut, tuut! \n" ;
    }
};
// 派生类
class Car: public Vehicle {
  public:
    string model = "Mustang";
};

int main() {
  Car myCar;
  myCar.honk();
  cout &lt;&lt; myCar.brand + " " + myCar.model;
  return 0;
}</code></pre>
 <table border=1 class="ne-table" id="AFL4o" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ucb191389">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u4a793bfa">
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
     <p class="ne-p" id="u7aa959ef">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u877fe6f1">
      <span class="ne-text">
       Tuut, tuut!
      </span>
     </p>
     <p class="ne-p" id="ued9f7589">
      <span class="ne-text">
       Ford Mustangg
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ub483a206">
   <span class="ne-text" style="font-size: 16px">
    从运行结果可以看到，派生类构造的对象
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     myCar
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    可以访问父类的属性
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     brand
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    和成员函数
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     honk
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，虽然它们在
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     Car
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    中并没有定义，但是因为
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     Car
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    在第14行定义时继承了基类（父类）
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     Vehicle
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，因此父类的
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     public
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    和
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     protected
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    成员都会被继承，注意
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     private
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    成员是不能被继承的，
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     protected
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    成员可以被继承，但是不能被外部变量访问。
   </span>
  </li>
  <li id="u84c907dd">
   <span class="ne-text" style="font-size: 16px">
    父类中可以定义多个子类（派生类）中的公有属性或成员函数，相当于定义了一个标准的接口。子类中需要书写的代码也会大量的减少。
   </span>
  </li>
 </ul>
 <h3 id="Ysm79">
  <span class="ne-text">
   知识点：T751
  </span>
 </h3>
 <table border=1 class="ne-table" id="pHRUM" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uf6a80fcc">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u2c8e1bb7" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u4bf232e3">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ue8995836">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="ub1ac688f">
      <span class="ne-text">
       T751
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="ub723a885">
      <span class="ne-text">
       掌握对象的
      </span>
      <span class="ne-text" style="color: rgb(51, 51, 51); font-size: 16px">
       继承的使用方法
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u7d77092c">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u654a87f8">
      <a class="ne-link" data-href="#WLtg1" href="#WLtg1">
       <span class="ne-text">
        T771
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="ub301227f">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161762" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161762" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX708)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
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
</div>
<div class="self-section">
 <h1 id="FhY0Y">
  <span class="ne-text">
   6. 多态
  </span>
 </h1>
 <p class="ne-p" id="u3471b168" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(0, 0, 0)">
   多态意味着“多种形式”，当有许多
  </span>
  <span class="ne-text">
   通过继承相互关联的类时就会发生这种情况。继承从另一个类继承属性和方法。多态性使用这些方法来执行不同的任务，能够以不同的方式执行单个操作。多态按字面的意思就是多种形态。当类之间存在层次结构，并且类之间是通过继承关联时，就会用到多态。C++
            多态意味着调用成员函数时，会根据调用函数的对象的类型来执行不同的函数。C++中的多态主要使用关键字virtual实现的，先看一下virtual的使用方法。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="H5oaN"><span style="font-weight:bold;">代码7.6</span>virtual关键字的使用
 <code>#include&lt;iostream&gt;
using namespace std;
  
class base {
public:
    virtual void print() {
        cout &lt;&lt; "print base class\n";
    }  
    void show() {
        cout &lt;&lt; "show base class\n";
    }
};
  
class derived : public base {
public:
    void print() {
        cout &lt;&lt; "print derived class\n";
    }  
    void show()  {
        cout &lt;&lt; "show derived class\n";
    }
};
  
int main()
{
    base *bptr;
    derived d;
    bptr = &amp;d;  
    // Virtual function, binded at runtime
    bptr-&gt;print();  
    // Non-virtual function, binded at compile time
    bptr-&gt;show();    
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="GCU07" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u38dc1fc5">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u230cfb72">
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
     <p class="ne-p" id="u09dad921">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u2d31b1ba">
      <span class="ne-text">
       print derived class
      </span>
     </p>
     <p class="ne-p" id="u85f350c1">
      <span class="ne-text">
       show base class
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <p class="ne-p" id="u740e779c">
  <br/>
 </p>
 <ul class="ne-ul">
  <li id="u7f249781">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    派生类中如果重新定义了父类的成员函数，称为函数重载。通过函数重载，子类可以修改父类的同名函数。也就是说，子类和父类具有同名的访问接口（函数），但是可以具有不同的具体行为。以上例子中的show函数就是一个重载函数。
   </span>
  </li>
  <li id="u2bce6eb4">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    print函数的实现形式与show基本相同，但是加了关键字virtual。运行时多态性只能通过基类类型的指针（或引用）来实现。此外，基类指针既可以指向基类的对象，也可以指向派生类的对象。在上面的代码中，基类指针
   </span>
   <code class="ne-code">
    <span class="ne-text" style="color: rgb(39, 50, 57); font-size: 16px">
     bptr
    </span>
   </code>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    包含派生类的对象
   </span>
   <code class="ne-code">
    <span class="ne-text" style="color: rgb(39, 50, 57); font-size: 16px">
     d
    </span>
   </code>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    的地址。
   </span>
  </li>
  <li id="u3df78b54">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    后期（运行时）绑定根据指针的内容（即指针指向的位置）进行，早期（编译时）绑定根据指针的类型进行，因为 print() 函数是用 virtual
                关键字声明的，所以它将在运行时绑定（输出派生类内容，因为指针指向派生类的对象），而 show() 是非虚函数，因此它将在编译时绑定（输出基类内容，因为指针是基类类型）。
   </span>
  </li>
  <li id="ue4bb79ea">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    如果在基类中创建了一个虚函数，并且它在派生类中被覆盖，那么不需要在派生类中使用
                virtual 关键字，函数在派生类中被自动视为虚函数。
   </span>
  </li>
 </ul>
 <p class="ne-p" id="u989cee26" style="text-indent: 2em">
  <span class="ne-text" style="color: rgb(0, 0, 0)">
   下面讨论如何用virtual实现多态。例如，考虑一个
  </span>
  <span class="ne-text">
   名为
  </span>
  <code class="ne-code">
   <span class="ne-text">
    Container
   </span>
  </code>
  <span class="ne-text">
   的基类，它有一个名为
  </span>
  <code class="ne-code">
   <span class="ne-text">
    pop()
   </span>
  </code>
  <span class="ne-text">
   的方法。容器的
  </span>
  <span class="ne-text" style="color: rgb(0, 0, 0)">
   派生类可以是队列（
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    Queue
   </span>
  </code>
  <span class="ne-text" style="color: rgb(0, 0, 0)">
   ）或堆栈（
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    Stack
   </span>
  </code>
  <span class="ne-text" style="color: rgb(0, 0, 0)">
   ），对于
  </span>
  <code class="ne-code">
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    pop()
   </span>
  </code>
  <span class="ne-text" style="color: rgb(0, 0, 0)">
   这个行为，它们有各自不同的表现，实现了函数重载。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="DN8Ja"><span style="font-weight:bold;">代码7.7</span>函数重载
 <code>#include &lt;iostream&gt;
using namespace std;
// 基类
class Container {
public:
    virtual void pop()=0;    //纯虚函数，定义一个接口，没有具体实现
	// virtual void pop(){   //虚函数，可以有自己的定义实现
    //    cout &lt;&lt; "Container Pop!\n" ;
    // }
};
// 派生类
class Queue : public Container {
public:
    void pop() {
        cout &lt;&lt; "Queue: Pop the first element!\n" ;
    }
};
// 派生类
class Stack : public Container {
public:
    void pop() {
        cout &lt;&lt; "Stack: Pop the last element!\n" ;
    }
};

void polymorphism(Container* container){
    container-&gt;pop();
}

int main() {
    Queue q;
    Stack s;
    q.pop();
    s.pop();
    Container* vq = &amp;q;
    vq-&gt;pop();
    Container* vs = &amp;s;
    vs-&gt;pop();
    polymorphism(vq);
    polymorphism(vs);
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="MiJU4" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u1c8c64c6">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u264ab41e">
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
     <p class="ne-p" id="ue75c18a8">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u52d84f50">
      <span class="ne-text">
       Queue: Pop the first element!
      </span>
     </p>
     <p class="ne-p" id="u8ebb688a">
      <span class="ne-text">
       Stack: Pop the last element!
      </span>
     </p>
     <p class="ne-p" id="u0d369637">
      <span class="ne-text">
       Queue: Pop the first element!
      </span>
     </p>
     <p class="ne-p" id="ud28378c2">
      <span class="ne-text">
       Stack: Pop the last element!
      </span>
     </p>
     <p class="ne-p" id="uc1b36fd0">
      <span class="ne-text">
       Queue: Pop the first element!
      </span>
     </p>
     <p class="ne-p" id="uce4bf7a1">
      <span class="ne-text">
       Stack: Pop the last element!
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ue675d550">
   <span class="ne-text">
    第6行在基类中定义了一个纯虚函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     pop()
    </span>
   </code>
   <span class="ne-text">
    ，注意纯虚函数要
   </span>
   <code class="ne-code">
    <span class="ne-text">
     =0
    </span>
   </code>
   <span class="ne-text">
    ，这是语法规定。这个函数没有具体实现过程，只是要求其所有的派生类都必须定义
   </span>
   <code class="ne-code">
    <span class="ne-text">
     pop()
    </span>
   </code>
   <span class="ne-text">
    这个成员函数。如果派生类中没有定义成员函数
   </span>
   <code class="ne-code">
    <span class="ne-text">
     pop()
    </span>
   </code>
   <span class="ne-text">
    ，编译会报错。很多情况下，虚函数都是为了定义一个统一的接口，在父类上的实现没有意义，因此纯虚函数就发挥了它的作用。
   </span>
  </li>
  <li id="u9a0f2227">
   <span class="ne-text">
    也可以对父类的虚函数进行实现，如第7-9行所示。
   </span>
  </li>
  <li id="uadf84d3e">
   <span class="ne-text">
    第33-34行是正常的对象调用函数操作
   </span>
  </li>
  <li id="u82a2772c">
   <span class="ne-text">
    第35-38行显示不同派生类的对象会执行不同的行为。这里需要两个条件：1）必须是指针，只有指针才能实现
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    后期（运行时）绑定。基类指针既可以指向基类的对象，也可以指向派生类的对象；2）pop()函数必须是虚函数，否则父类指针调用的pop()函数将会是父类的pop()函数。只有虚函数才会调用具体指向对象的pop()函数。
   </span>
  </li>
  <li id="u3c8c8b48">
   <span class="ne-text">
    最后看第26-28行定义了一个函数polymorphism()，因为
   </span>
   <span class="ne-text" style="color: rgb(0, 0, 0)">
    基类指针既可以指向基类的对象，也可以指向派生类的对象，所以
   </span>
   <span class="ne-text">
    Container以及其所有的子类都可以用指针的形式传入。从继承的角度，Container所拥有的所有属性和方法，其子类也必然拥有，因此polymorphism()中可以定义基于Container的操作流程（语句块）。但是基于多态机制，当传入不同的对象时，会执行不同的操作。如第39-40行所示，虽然vq和vs都是Container类型的指针，但是指向不同的派生对象。相同类型的指针可以执行相同的操作，但执行的结果依赖于具体对象的具体定义。这是使用虚函数的最大作用。
   </span>
  </li>
 </ul>
 <h3 id="F5udX">
  <span class="ne-text">
   知识点：T761-T762
  </span>
 </h3>
 <table border=1 class="ne-table" id="UUpSZ" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="uf95c51fd">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u28f90b4f" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="uf696d139">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u620a7659">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="udb68e789">
      <span class="ne-text">
       T761
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u0c560756">
      <span class="ne-text">
       掌握virtual关键字的使用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u3dee6ec8">
      <br/>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u80b042b7">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="u8d7ca34b">
      <span class="ne-text">
       T762
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u27cbd9f9">
      <span class="ne-text">
       掌握
      </span>
      <span class="ne-text" style="color: rgb(0, 0, 0)">
       函数重载的实现
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
</div>
<div class="self-section">
 <h1 id="f0cmO">
  <span class="ne-text">
   7. 操作符重载
  </span>
 </h1>
 <p class="ne-p" id="u0c3566cb" style="text-align: justify; text-indent: 2em">
  <span class="ne-text" style="color: rgb(0, 0, 0); font-size: 16px">
   用户可以重新定义或重载 C++
            中可用的大多数内置运算符，可以给运算符赋予新的自定义行为，并且书写和理解上都更加清晰。重载运算符是具有特殊名称的函数：关键字“operator”后跟正在定义的运算符的符号。与任何其他函数一样，重载运算符具有返回类型和参数列表。操作符重载和普通成员函数重载的含义是完全相同的，只是在定义和使用上略有区别。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="BzhPa"><span style="font-weight:bold;">代码7.8</span>操作符重载
 <code>#include &lt;iostream&gt;
using namespace std;
class Box {
public:
    Box(double l, double b, double h) {
        length = l; breadth = b; height = h;
    }
    double getVolume(void) {
        return length * breadth * height;
    }
    // 重载操作符+
    Box operator+(const Box &amp;b) {
        return Box(this-&gt;length+b.length,this-&gt;breadth+b.breadth,this-&gt;height+b.height);
    }
private:
    double length,breadth,height;  // 长宽高
};
int main()
{
    Box box1(6., 7., 5.);    
    Box box2(12., 13., 10.); 
    cout &lt;&lt; "Volume of Box1 : " &lt;&lt; box1.getVolume() &lt;&lt; endl;
    cout &lt;&lt; "Volume of Box2 : " &lt;&lt; box2.getVolume() &lt;&lt; endl;
    Box box3 = box1 + box2;
    cout &lt;&lt; "Volume of Box3 : " &lt;&lt; box3.getVolume() &lt;&lt; endl;
    return 0;
}</code></pre>
 <ul class="ne-ul">
  <li id="u98f7676f">
   <span class="ne-text" style="font-size: 16px">
    第12-14行重载了操作符
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     +
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，两个操作数分别为当前对象
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     this
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    和参数
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     b
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    ，当第24行对
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     Box
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    对象执行
   </span>
   <code class="ne-code">
    <span class="ne-text" style="font-size: 16px">
     +
    </span>
   </code>
   <span class="ne-text" style="font-size: 16px">
    操作时，就会调用这个函数。C++中提供的操作符都可以进行重载。
   </span>
  </li>
  <li id="u6cf979f8">
   <span class="ne-text" style="font-size: 16px">
    通常对操作符重载时，参数都使用const，防止用户对其进行修改，引用可以减少传值过程中对象被复制从而浪费时间和空间。
   </span>
  </li>
 </ul>
 <h3 id="WLtg1">
  <span class="ne-text">
   知识点：T771
  </span>
 </h3>
 <table border=1 class="ne-table" id="A9sdu" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u7806bc41">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="u20d7bbae" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u29ab0381">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u8e991612">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u4b88bc5a">
      <span class="ne-text">
       T771
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="链接df">
      <span class="ne-text">
       掌握操作符重载的使用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="ue583b6cb">
      <a class="ne-link" data-href="#Ysm79" href="#Ysm79">
       <span class="ne-text">
        T751
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="链接5d">
      <a class="ne-link" data-href="#VjX61" href="#VjX61">
       <span class="ne-text">
        T791
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="u9a884289">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161763" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161763" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX709)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
      </span>
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161764" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161764" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        （LX710）
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
       
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
</div>
<div class="self-section">
 <h1 id="j5KbQ">
  <span class="ne-text">
   8. 静态属性
  </span>
 </h1>
 <p class="ne-p" id="u808f3271" style="text-indent: 2em">
  <span class="ne-text">
   在变量定义前加上关键字static，就转换为静态变量。静态变量和全局变量都存储在全局静态数据区，其生命周期都从定义开始持续到程序运行结束。静态变量的初始化只会被执行一次。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="HhAyD"><span style="font-weight:bold;">代码7.9</span>静态变量的使用
 <code>#include &lt;iostream&gt;
using namespace std;
// 基类
class Container {
public:
    static int count;
    Container() { ++count; }
    ~Container() { --count; }
};
// 派生类
class Queue : public Container {
public:
    void pop() {
        cout &lt;&lt; "Pop the first element!\n" ;
    }
};
int Container::count = 0;
int main() {
    Container c;
    cout &lt;&lt; Container::count &lt;&lt; endl;
    cout &lt;&lt; c.count &lt;&lt; endl;
    Container arr[10];
    cout &lt;&lt; Container::count &lt;&lt; endl;
    Container *p = new Container();
    cout &lt;&lt; Container::count &lt;&lt; endl;
    Container *pp = new Container[5];
    cout &lt;&lt; Container::count &lt;&lt; endl;
    delete p;
    cout &lt;&lt; Container::count &lt;&lt; endl;
    delete[] pp;
    cout &lt;&lt; Container::count &lt;&lt; endl;
    Queue q;
    cout &lt;&lt; Container::count &lt;&lt; endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="ygqoM" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="ud064f0a6">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u228b6097">
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
     <p class="ne-p" id="u16a4df00">
      <span class="ne-text">
       （无）
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ue0c4746a">
      <span class="ne-text">
       1
      </span>
     </p>
     <p class="ne-p" id="u1111a739">
      <span class="ne-text">
       11
      </span>
     </p>
     <p class="ne-p" id="u1fb7cdd9">
      <span class="ne-text">
       12
      </span>
     </p>
     <p class="ne-p" id="u69ad3f70">
      <span class="ne-text">
       17
      </span>
     </p>
     <p class="ne-p" id="ubb6bca4f">
      <span class="ne-text">
       16
      </span>
     </p>
     <p class="ne-p" id="u1c092a47">
      <span class="ne-text">
       16
      </span>
     </p>
     <p class="ne-p" id="ua54c986d">
      <span class="ne-text">
       11
      </span>
     </p>
     <p class="ne-p" id="u84dd8686">
      <span class="ne-text">
       12
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <ul class="ne-ul">
  <li id="ued0003c1">
   <span class="ne-text">
    第13行定义了一个静态成员属性，在第17行进行初始化。因为
   </span>
   <code class="ne-code">
    <span class="ne-text">
     count
    </span>
   </code>
   <span class="ne-text">
    是成员属性，调用时必须添加类修饰符，例如
   </span>
   <code class="ne-code">
    <span class="ne-text">
     Container::
    </span>
   </code>
   <span class="ne-text">
    ，或通过对象实例进行调用（第21行）
   </span>
  </li>
  <li id="u84404e03">
   <span class="ne-text">
    静态属性的使用方法和作用范围与其他属性相同，但是其分配在全局静态数据区，因此不属于任何一个对象，只有唯一的存储空间。
   </span>
  </li>
  <li id="u95dd57c3">
   <span class="ne-text">
    第19-31行显示，无论是局部变量，还是动态变量，无论是单个变量，还是数组，其构建时都会调用构造函数，释放时都会调用析构函数。因为静态变量的唯一性，可以对对象的数量进行计数。
   </span>
  </li>
  <li id="u996de262">
   <span class="ne-text">
    第32-33行的运行结果发现对派生类进行调用时，父类的构造函数也会被调用。按照C++的语法规定，构建派生类时，如果没有明确指定父类构造函数，会默认调用父类的无参构造函数。一个类如果没有明确定义构造函数和析构函数，会自动生成一个默认的无参构造函数和一个空的析构函数。
   </span>
  </li>
 </ul>
 <h3 id="Z9DBN">
  <span class="ne-text">
   知识点：T781
  </span>
 </h3>
 <table border=1 class="ne-table" id="lUUAl" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="ubaaa7ead">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="uf7f1e280" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u424f74b2">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="ub2c3b4e9">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td rowspan="2" width="58">
     <p class="ne-p" id="u185e9704">
      <span class="ne-text">
       T781
      </span>
     </p>
    </td>
    <td width="559">
     <p class="ne-p" id="链接80">
      <span class="ne-text">
       掌握静态属性的定义和使用
      </span>
     </p>
    </td>
    <td width="70">
     <p class="ne-p" id="u62b93c9a">
      <span class="ne-text">
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/iz3dks#AlX1z" href="ch3#AlX1z">
       <span class="ne-text">
        T335
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u7bc17236">
      <br/>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="559">
     <p class="ne-p" id="u91507e8a">
      
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161755" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161755" target="_blank">
       <span class="ne-text" style="font-size: 16px">
        (LX701)
       </span>
      </a>
      <span class="ne-text" style="font-size: 16px">
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
</div>
<div class="self-section">
 <h1 id="aHidZ">
  <span class="ne-text">
   9. 综合练习-构建链表
  </span>
 </h1>
 <p class="ne-p" id="uedd452e7" style="text-indent: 2em">
  <span class="ne-text">
   本节通过构建链表，练习类和对象的构造，动态对象和this指针、封装和操作符重载。更重要的是理解链表这种特殊的数据结构。链表可以形成一个序列，但是序列中的每个节点的存储空间都是不连续的。这样可以更加方便的插入和删除，但是不能进行随机访问。
  </span>
 </p>
 <p class="ne-p" id="u614e3334" style="text-indent: 2em">
  <span class="ne-text">
   首先，构建一个节点类，每个节点除了保存数据外，更重要的是形成一个指针，用与指向下一个节点，这样才能形成序列。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="qOfzC"><span style="font-weight:bold;">代码7.10</span>构建节点类
 <code>class Node
{
public:
    int val;								//存储数据，此处以int为例
    Node *next;								//用于存储下一个节点
    Node(int val, Node *next = nullptr)
    {
        this-&gt;val = val;					//成员变量和形参同名，用this指针进行区分
        this-&gt;next = next;
    }
};</code></pre>
 <p class="ne-p" id="u90735aea" style="text-indent: 2em">
  <span class="ne-text">
   其次构建一个迭代器，用于遍历节点。这里最重要的一个操作是将节点封装成private，外部无法对其直接访问。因为链表的存储空间不连续，因此不能使用大于小于等比较，但是要重载等于和不等于操作。任何迭代器都要支持自加和取值操作。从以下代码可以看出，迭代器就是一个封装后的指针，但是因为进行了封装，用户不能直接访问指针，因此只能使用Iterator中提供的方法对指针进行访问，限定了用户的访问权限，达成了安全访问。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="qVzkh"><span style="font-weight:bold;">代码7.11</span>构建迭代器
 <code>class Iterator{
private:
    Node* ptr;					//构造私有节点指针
public:
    Iterator(Node* node){
        ptr = node;
    }
    // 拷贝赋值函数
    Iterator&amp; operator=(const Iterator&amp; it) {
        ptr = it.ptr;			//对私有节点指针进行赋值
        return *this;			//返回自己
    }
    // 等于运算符
    bool operator==(const Iterator&amp; it) const {
        return ptr == it.ptr;	//对私有节点指针进行比较
    }
    // 不等于运算符
    bool operator!=(const Iterator&amp; it) const {
        return ptr != it.ptr;	//对私有节点指针进行比较
    }
    //前缀自加
    Iterator&amp; operator++() {
        ptr = ptr-&gt;next;		//让私有指针指向下一个节点
        return *this;			//返回自己
    }
    //后缀自加
    Iterator operator++(int) {
        Iterator tmp = *this;	//得到自己
        ++(*this);				//执行前缀自加操作，让私有指针指向下一个节点
        return tmp;
    }
    int operator*(){
        return ptr-&gt;val;		//取值操作
    }
};</code></pre>
 <p class="ne-p" id="u2a49c1b6" style="text-indent: 2em">
  <span class="ne-text">
   然后构建一个链表类，其中的head始终指向头节点。begin和end操作能够得到迭代器。然后分别实现了尾部添加、插入和删除操作。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="uDSYC"><span style="font-weight:bold;">代码7.12</span>构建链表类
 <code>class List{
private:
    Node* head;
public:
    List(){
        head = nullptr;
    }
    Iterator begin(){
        return Iterator(this-&gt;head);		//由头结点封装的迭代器
    }
    Iterator end(){
        return Iterator(nullptr);			//尾结点是空指针
    }
    void push_back(int val){
        Node* node = new Node(val);			//构造一个新节点
        if(!head)							//如果链表为空
            head = node;					//头结点就是新节点，构建了只有一个节点的链表
        else{
            Node* ptr = head;
            while(ptr-&gt;next)				//如果没有到尾部
                ptr = ptr-&gt;next;			//转入下一个节点
            ptr-&gt;next = node;				//新节点作为尾节点
        }
    }
    bool insert(const Iterator&amp; it,int val){
        Node* tmp = head;
        while(Iterator(tmp)!=end() &amp;&amp; Iterator(tmp-&gt;next)!=it)	//以迭代器形式比较
            tmp = tmp-&gt;next;				//转入下一个节点
        if(Iterator(tmp)==end())  return false;	//没有找到迭代器指向的位置
        Node* node = new Node(val);			//构造一个新节点
        node-&gt;next = tmp-&gt;next;				//新节点和下一个节点链接
        tmp-&gt;next = node;					//新节点和上一个节点链接，注意和上一行顺序不能变
        return true;
    }
    bool erase(const Iterator&amp; it){
        Node* tmp = head;
        while(Iterator(tmp)!=end() &amp;&amp; Iterator(tmp-&gt;next)!=it)	//以迭代器形式比较
            tmp = tmp-&gt;next;				//转入下一个节点
        if(Iterator(tmp)==end())  return false;	//没有找到迭代器指向的位置
        Node* node = tmp-&gt;next;				//保留要删除节点的指针
        tmp-&gt;next = node-&gt;next;				//让上一个节点直接执行下一个节点，形成删除
        delete node;						//删除节点
        return true;
    }
};</code></pre>
 <p class="ne-p" id="u0bb2407f" style="text-indent: 2em">
  <span class="ne-text">
   最后，利用以上的定义，演示了使用方法。这里可以看到，只能通过迭代器访问节点，用户不能直接对节点进行操作，从而实现了对链表的安全访问。因为List支持了
  </span>
  <code class="ne-code">
   <span class="ne-text">
    begin
   </span>
  </code>
  <span class="ne-text">
   、
  </span>
  <code class="ne-code">
   <span class="ne-text">
    end
   </span>
  </code>
  <span class="ne-text">
   和迭代器，因此可以执行
  </span>
  <code class="ne-code">
   <span class="ne-text">
    for(auto 变量:容器)
   </span>
  </code>
  <span class="ne-text">
   操作，进一步说明迭代器可以实现算法和具体数据的分离。
  </span>
 </p>
 <pre class="ne-codeblock language-cpp" data-language="cpp" id="Jf9hQ"><span style="font-weight:bold;">代码7.13</span>演示链表类的使用
 <code>#include&lt;iostream&gt;
using namespace std;

int main(){
    int m;
    cin&gt;&gt;m;
    List ls;
    for(int i=0;i&lt;m;i++)
        ls.push_back(i+1);		//构建链表的数据
    for(auto it = ls.begin();it!=ls.end();it++)
        cout&lt;&lt;*it&lt;&lt;' ';
    cout&lt;&lt;endl;
    auto it = ls.begin();		//指向链表的开始
    it++;						//指向下一个节点
    ls.insert(it,10);			//插入新节点
    for(auto e:ls)				//遍历
        cout&lt;&lt;e&lt;&lt;' ';
    cout&lt;&lt;endl;
    ls.erase(it);				//删除指定的节点，这时依旧指向2对应的节点
    for(auto e:ls)				//遍历
        cout&lt;&lt;e&lt;&lt;' ';
    cout&lt;&lt;endl;
    return 0;
}</code></pre>
 <table border=1 class="ne-table" id="ZJpW2" style="width: 100%">
  <tbody>
   <tr style="height: 33px">
    <td width="375">
     <p class="ne-p" id="u9da3a212">
      <strong>
       <span class="ne-text">
        样例输入
       </span>
      </strong>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="ubc827f8c">
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
     <p class="ne-p" id="u6c80d288">
      <span class="ne-text">
       5
      </span>
     </p>
    </td>
    <td width="375">
     <p class="ne-p" id="u433e31f6">
      <span class="ne-text">
       1 2 3 4 5
      </span>
     </p>
     <p class="ne-p" id="u96c6bf50">
      <span class="ne-text">
       1 10 2 3 4 5
      </span>
     </p>
     <p class="ne-p" id="链接b2">
      <span class="ne-text">
       1 10 3 4 5
      </span>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
 <h3 id="VjX61">
  <span class="ne-text">
   知识点：T791
  </span>
 </h3>
 <table border=1 class="ne-table" id="yayeM" style="width: 100%">
  <tbody>
   <tr class="table-header">
    <td width="58">
     <p class="ne-p" id="u66e15089">
      <span class="ne-text">
       索引
      </span>
     </p>
    </td>
    <td width="513">
     <p class="ne-p" id="u588b4606" style="text-align: center">
      <span class="ne-text">
       要点
      </span>
     </p>
    </td>
    <td width="98">
     <p class="ne-p" id="u76c847ef">
      <span class="ne-text">
       正链
      </span>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u69096d75">
      <span class="ne-text">
       反链
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="58">
     <p class="ne-p" id="ub021187d">
      <span class="ne-text">
       T791
      </span>
     </p>
    </td>
    <td width="513">
     <p class="ne-p" id="ua8ee86db">
      <span class="ne-text">
       掌握空间不连续序列的使用，了解迭代器的作用
      </span>
     </p>
    </td>
    <td width="98">
     <p class="ne-p" id="uee2a09d7">
      <a class="ne-link" data-href="#ZvJ3S" href="#ZvJ3S">
       <span class="ne-text">
        T711
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#BrVpR" href="#BrVpR">
       <span class="ne-text">
        T721
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#dNdcQ" href="#dNdcQ">
       <span class="ne-text">
        T741
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="#WLtg1" href="#WLtg1">
       <span class="ne-text">
        T771
       </span>
      </a>
     </p>
    </td>
    <td width="67">
     <p class="ne-p" id="u8d9c0b3e">
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#BPKTU" href="ch8#BPKTU">
       <span class="ne-text">
        T822
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <a class="ne-link" data-href="https://www.yuque.com/upcxailixin/ua125n/zzw6o7#mM2Dg" href="ch8#mM2Dg">
       <span class="ne-text">
        T863
       </span>
      </a>
     </p>
    </td>
   </tr>
  </tbody>
 </table>
</div>
<div class="self-section">
 <h1 id="RZWQr">
  <span class="ne-text">
   题单
  </span>
 </h1>
 <table border=1 class="ne-table" id="tEvjL">
  <tbody>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="u9f3f2876">
      <span class="ne-text" style="color: rgb(38, 38, 38)">
       序号
      </span>
     </p>
    </td>
    <td width="105">
     <p class="ne-p" id="u0451f3b8">
      <span class="ne-text" style="color: rgb(38, 38, 38)">
       题目名称
      </span>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ub846d235">
      <span class="ne-text" style="color: rgb(38, 38, 38)">
       知识点
      </span>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u4348a9bb">
      <span class="ne-text" style="color: rgb(38, 38, 38)">
       序号
      </span>
     </p>
    </td>
    <td width="102">
     <p class="ne-p" id="u41adb055">
      <span class="ne-text" style="color: rgb(38, 38, 38)">
       题目名称
      </span>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u850b9ce5">
      <span class="ne-text" style="color: rgb(38, 38, 38)">
       知识点
      </span>
     </p>
    </td>
   </tr>
   <tr style="height: 38px">
    <td width="93">
     <p class="ne-p" id="u53ddea7a">
      <span class="ne-text">
       LX701
      </span>
     </p>
    </td>
     
    <td width="105">
     <p class="ne-p" id="ue3188278">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161755" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161755" target="_blank">
       <span class="ne-text">
        平均分计算
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ue087b95c">
      <a class="ne-link" data-href="#EoYNR" href="#EoYNR">
       <span class="ne-text">
        T711
       </span>
      </a>
      <span class="ne-text">
       ,
      </span>
      <span class="ne-text" style="color: rgba(0, 0, 0, 0.75); font-size: 16px">
      </span>
      <a class="ne-link" data-href="#Z9DBN" href="#Z9DBN">
       <span class="ne-text">
        T781
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u5ea7bd0a">
      <span class="ne-text">
       LX702
      </span>
     </p>
    </td>
     
    <td width="102">
     <p class="ne-p" id="u3f4073d9">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161756" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161756" target="_blank">
       <span class="ne-text">
        点圆
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u11d27639">
      <a class="ne-link" data-href="#EoYNR" href="#EoYNR">
       <span class="ne-text">
        T711
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="u10804dae">
      <span class="ne-text">
       LX703
      </span>
     </p>
    </td>
     
    <td width="105">
     <p class="ne-p" id="uf3fab5da">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161757" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161757" target="_blank">
       <span class="ne-text">
        统计数字
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u702d03c4">
      <a class="ne-link" data-href="#EoYNR" href="#EoYNR">
       <span class="ne-text">
        T711
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ubb3448ee">
      <span class="ne-text">
       LX704
      </span>
     </p>
    </td>
     
    <td width="102">
     <p class="ne-p" id="u236b50b7">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161758" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161758" target="_blank">
       <span class="ne-text">
        三维坐标
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="ub241ed6d">
      <a class="ne-link" data-href="#EoYNR" href="#EoYNR">
       <span class="ne-text">
        T711
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 38px">
    <td width="93">
     <p class="ne-p" id="u781c0d73">
      <span class="ne-text">
       LX705
      </span>
     </p>
    </td>
     
    <td width="105">
     <p class="ne-p" id="uf25c2b49">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161759" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161759" target="_blank">
       <span class="ne-text">
        点圆关系
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u1e84a30b">
      <a class="ne-link" data-href="#Rr7De" href="#Rr7De">
       <span class="ne-text">
        T741
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="udf0452b8">
      <span class="ne-text">
       LX706
      </span>
     </p>
    </td>
     
    <td width="102">
     <p class="ne-p" id="uebddb2fc">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161760" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161760" target="_blank">
       <span class="ne-text">
        Car类
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="u74fef187">
      <a class="ne-link" data-href="#Rr7De" href="#Rr7De">
       <span class="ne-text">
        T741
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 38px">
    <td width="93">
     <p class="ne-p" id="ufce0b52e">
      <span class="ne-text">
       LX707
      </span>
     </p>
    </td>
     
    <td width="105">
     <p class="ne-p" id="ubaf79de8">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161761" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161761" target="_blank">
       <span class="ne-text">
        角度的加法
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="ud7c702a6">
      <a class="ne-link" data-href="#Rr7De" href="#Rr7De">
       <span class="ne-text">
        T741
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u2dbc300b">
      <span class="ne-text">
       LX708
      </span>
     </p>
    </td>
     
    <td width="102">
     <p class="ne-p" id="链接71">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161762" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161762" target="_blank">
       <span class="ne-text">
        派生类构造
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uf2297283">
      <a class="ne-link" data-href="#W6gu4" href="#W6gu4">
       <span class="ne-text">
        T751
       </span>
      </a>
     </p>
    </td>
   </tr>
   <tr style="height: 33px">
    <td width="93">
     <p class="ne-p" id="uc01014fc">
      <span class="ne-text">
       LX709
      </span>
     </p>
    </td>
     
    <td width="105">
     <p class="ne-p" id="u4df34988">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161763" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161763" target="_blank">
       <span class="ne-text">
        时间的比较
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u63d572b8">
      <a class="ne-link" data-href="#f0cmO" href="#f0cmO">
       <span class="ne-text">
        T771
       </span>
      </a>
     </p>
    </td>
    <td width="93">
     <p class="ne-p" id="u3ac27b79">
      <span class="ne-text">
       LX710
      </span>
     </p>
    </td>
     
    <td width="102">
     <p class="ne-p" id="u517bb232">
      <a class="ne-link" data-href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161764" href="https://www.qingline.net/practice-list/practice?question_bank_id=13997&id=161764" target="_blank">
       <span class="ne-text">
        N天以后
       </span>
      </a>
     </p>
    </td>
    <td width="99">
     <p class="ne-p" id="uaa15055b">
      <a class="ne-link" data-href="#f0cmO" href="#f0cmO">
       <span class="ne-text">
        T771
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
    name: 'Ch7',
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
        this.$store.dispatch('toChapter', 10);
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
