(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{553:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#编译阶段"}},[t._v("编译阶段")]),s("ul",[s("li",[s("a",{attrs:{href:"#词法分析"}},[t._v("词法分析")])]),s("li",[s("a",{attrs:{href:"#语法分析"}},[t._v("语法分析")])]),s("li",[s("a",{attrs:{href:"#生成可执行代码"}},[t._v("生成可执行代码")])]),s("li",[s("a",{attrs:{href:"#jit"}},[t._v("JIT")])])])]),s("li",[s("a",{attrs:{href:"#执行阶段"}},[t._v("执行阶段")]),s("ul",[s("li",[s("a",{attrs:{href:"#执行上下文"}},[t._v("执行上下文")])]),s("li",[s("a",{attrs:{href:"#环境记录-badge-type-warning-text-仅做了解-vertical-top"}},[t._v("环境记录"),s("Badge",{attrs:{type:"warning",text:"仅做了解",vertical:"top"}})],1)]),s("li",[s("a",{attrs:{href:"#函数执行上下文的创建"}},[t._v("函数执行上下文的创建")])]),s("li",[s("a",{attrs:{href:"#词法环境-vs-变量环境"}},[t._v("词法环境 VS 变量环境")])])])]),s("li",[s("a",{attrs:{href:"#总结"}},[t._v("总结")])]),s("li",[s("a",{attrs:{href:"#附一"}},[t._v("附一")])])])]),s("p"),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("JS 是动态类型的 "),s("router-link",{attrs:{to:"#附一"}},[t._v(" 解释型 ")]),t._v("语言，它的执行共分为两个阶段：编译阶段、执行阶段。这两个阶段都是在 JS 引擎中进行的。")],1),t._v(" "),s("h1",{attrs:{id:"编译阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译阶段"}},[t._v("#")]),t._v(" 编译阶段")]),t._v(" "),s("p",[t._v("这个阶段会经历词法分析、语法分析、代码生成步骤最终生成可被 JS 引擎执行的代码")]),t._v(" "),s("h2",{attrs:{id:"词法分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[t._v("#")]),t._v(" 词法分析")]),t._v(" "),s("p",[t._v("JS 引擎会将我们写的代码当成字符串分解成词法单元（token）。例如，"),s("code",[t._v("var a = 2")]),t._v("，这段程序会被分解成："),s("code",[t._v("var、a、=、2")]),t._v("。\nToken 是能拆分的最小单位，固定 type 表述类型/属性，value 表示对应的值。")]),t._v(" "),s("Shadow-Img",{attrs:{src:t.$withBase("/assets/ecma/4.jpg")}}),t._v(" "),s("p",[t._v("可以试试这个网站地址查看 token ："),s("a",{attrs:{href:"https://esprima.org/demo/parse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Esprima"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"语法分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[t._v("#")]),t._v(" 语法分析")]),t._v(" "),s("p",[t._v("在进行词法分析转为 Token 之后，"),s("code",[t._v("解析器（Parser）")]),t._v("继续根据生成的 Token 生成对应的 AST")]),t._v(" "),s("Shadow-Img",{attrs:{src:t.$withBase("/assets/ecma/5.jpg")}}),t._v(" "),s("h2",{attrs:{id:"生成可执行代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成可执行代码"}},[t._v("#")]),t._v(" 生成可执行代码")]),t._v(" "),s("p",[t._v("对于 CPU 来说，它只认识机器码（二进制），但是 JS 引擎在经历过语法分析生成 AST 之后，并不会根据 AST 直接生成机器码，而是由 "),s("code",[t._v("解释器（Ignition）")]),t._v(" 通过 AST 生成一种介于 AST 和 机器码之间的"),s("code",[t._v("字节码（又叫中间码）")]),t._v("。字节码需要通过解释器将其转换为机器码然后执行。")]),t._v(" "),s("p",[t._v("这么做的原因主要是因为，直接将 JS 编译生成机器码的效率很低，而且体积很大（相较而言，字节码就轻量很多，如下图），对于像 web 应用这样高频访问低频更新的场景来说，js 文件的变更并不是那么频繁，但是如果用户每次打开网页都需要重新去将 js 文件编译成机器码就会影响到性能和体验。")]),t._v(" "),s("p",[t._v("除了引入字节码这种中间状态之外，为了提升 JS 的执行效率，JS 引擎还引入了 "),s("code",[t._v("即时编译")]),t._v(" 技术，即 "),s("code",[t._v("JIT")])]),t._v(" "),s("h2",{attrs:{id:"jit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jit"}},[t._v("#")]),t._v(" JIT")]),t._v(" "),s("blockquote",[s("p",[t._v("在计算机技术中，即时编译（英语：just-in-time compilation，缩写为 "),s("a",{attrs:{href:"https://zh.wikipedia.org/zh-cn/%E5%8D%B3%E6%99%82%E7%B7%A8%E8%AD%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("JIT"),s("OutboundLink")],1),t._v("；又译及时编译[1]、实时编译[2]），也称为动态翻译或运行时编译[3]，是一种执行计算机代码的方法，这种方法涉及在程序"),s("strong",[t._v("执行过程中")]),t._v("（在运行期）而不是在执行之前进行编译。")])]),t._v(" "),s("p",[t._v("它是如何工作的呢？")]),t._v(" "),s("Shadow-Img",{attrs:{src:t.$withBase("/assets/ecma/6.jpg"),wd:"600px"}}),t._v(" "),s("h3",{attrs:{id:"监视器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监视器"}},[t._v("#")]),t._v(" 监视器")]),t._v(" "),s("p",[t._v("在 JavaScript 引擎中增加一个监视器（也叫分析器）。监视器监控着代码的运行情况，记录代码一共运行了多少次、如何运行的等信息，如果同一行代码运行了几次，这个代码段就被标记成了 "),s("code",[t._v("warm")]),t._v("，如果运行了很多次，则被标记成 "),s("code",[t._v("hot")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"基线编译器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基线编译器"}},[t._v("#")]),t._v(" 基线编译器")]),t._v(" "),s("p",[t._v("如果一段代码变成了 "),s("code",[t._v("warm")]),t._v("，那么 JIT 就把它送到基线编译器去编译，并且把编译结果存储起来。")]),t._v(" "),s("h3",{attrs:{id:"优化编译器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化编译器"}},[t._v("#")]),t._v(" 优化编译器")]),t._v(" "),s("p",[t._v("如果一个代码段变得 "),s("code",[t._v("hot")]),t._v("，监视器会把它发送到优化编译器中。生成一个更快速和高效的代码版本出来，并且存储。")]),t._v(" "),s("p",[s("code",[t._v("TurboFan（译：涡轮风扇）")]),t._v("编译器 是 JIT 优化编译器，用于优化在解释器中生成的字节码。在某些时候，引擎确定代码很热并启动 TurboFan 前端，这是 TurboFan 的一部分，它处理集成分析数据和构建代码的基本机器表示。然后将其发送到另一个线程上的 TurboFan，以进一步改进代码。V8 引擎是多线程的，TurboFan 编译和生成字节码不在同一个线程上。")]),t._v(" "),s("h3",{attrs:{id:"去-反-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去-反-优化"}},[t._v("#")]),t._v(" 去（反）优化")]),t._v(" "),s("p",[t._v("由解释器收集的分析数据被 TurboFan 使用，主要是通过一种称为"),s("code",[t._v("推测优化（Speculative Optimization）")]),t._v("的技术生成高度优化的机器码。TurboFan 会查看过去看到的值类型，并假设将来我们将看到相同类型的值，这可以使得 TurboFan 省去很多不需要处理的情况。如果假设失败了，那么就会返回到解析字节码，这也就是反优化(deoptimization)。")]),t._v(" "),s("p",[t._v("JS 语言是动态类型语言，对象的结构和属性在运行时是可以发生改变的。设想一个问题，如果热代码在某次执行的时候，突然其中的某个属性被修改了，那么编译成机器码的热代码肯定不能继续执行。这个时候就要使用到优化编译器的反优化了，他会将热代码退回到 AST 这一步，这个时候解释器会重新解释执行被修改的代码，如果代码再次被标记为热代码，那么会重复执行优化编译器的这个步骤。")]),t._v(" "),s("h1",{attrs:{id:"执行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[t._v("#")]),t._v(" 执行阶段")]),t._v(" "),s("p",[t._v("执行程序需要有执行环境， Java 需要 Java 虚拟机，同样解析 JavaScript 也需要执行环境，我们称它为"),s("code",[t._v("执行上下文")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),s("p",[t._v("当执行 JS 代码时，会产生三种执行上下文:")]),t._v(" "),s("h3",{attrs:{id:"全局执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局执行上下文"}},[t._v("#")]),t._v(" 全局执行上下文")]),t._v(" "),s("p",[t._v("当 JS 引擎执行全局代码的时候，会编译全局代码并创建执行上下文，它会做两件事：")]),t._v(" "),s("ul",[s("li",[t._v("创建一个全局的 window 对象(浏览器环境下)")]),t._v(" "),s("li",[t._v("将 this 的值设置为该全局对象；全局上下文在整个页面生命周期有效，并且只有一份")])]),t._v(" "),s("h3",{attrs:{id:"函数执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数执行上下文"}},[t._v("#")]),t._v(" 函数执行上下文")]),t._v(" "),s("p",[t._v("当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行结束之后，创建的函数执行上下文会被销毁。")]),t._v(" "),s("h3",{attrs:{id:"eval-执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eval-执行上下文"}},[t._v("#")]),t._v(" eval 执行上下文")]),t._v(" "),s("p",[t._v("调用 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval",target:"_blank",rel:"noopener noreferrer"}},[t._v("eval"),s("OutboundLink")],1),t._v(" 函数也会创建自己的执行上下文。但 eval 函数容易导致恶意攻击，并且运行代码的速度比相应的替代方法慢（因为它必须调用 JS 解释器），所以一般不推荐使用")]),t._v(" "),s("p",[t._v("这里只需关注全局以及函数执行上下文。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("全局执行上下文会创建"),s("a",{attrs:{href:"#%E5%85%A8%E5%B1%80%E7%8E%AF%E5%A2%83%E8%AE%B0%E5%BD%95"}},[t._v("全局环境记录")]),t._v("，而"),s("a",{attrs:{href:"#%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%9A%84%E5%88%9B%E5%BB%BA"}},[t._v("函数执行上下文创建")]),t._v("时会同时创建 "),s("code",[t._v("This Binding")]),t._v("、"),s("code",[t._v("变量环境（VariableEnvironment）")]),t._v("、"),s("code",[t._v("词法环境（LexicalEnvironment）")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("全局环境记录")]),t._v("、"),s("code",[t._v("变量环境（VariableEnvironment）")]),t._v("和 "),s("code",[t._v("词法环境（LexicalEnvironment）")]),t._v("都是一种"),s("strong",[t._v("环境记录")]),t._v("。")])]),s("h2",{attrs:{id:"环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境记录"}},[t._v("#")]),t._v(" 环境记录"),s("Badge",{attrs:{type:"warning",text:"仅做了解",vertical:"top"}})],1),t._v(" "),s("p",[t._v("根据最新 tc39 规范文档"),s("a",{attrs:{href:"https://tc39.es/ecma262/#sec-environment-records",target:"_blank",rel:"noopener noreferrer"}},[t._v("Environment Records"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("环境记录是一种规范类型，"),s("strong",[t._v("用于记录代码中的标识符与变量和函数的映射关系")]),t._v("，类似一个对象或者 map。")]),t._v(" "),s("li",[t._v("环境记录分为\n"),s("ul",[s("li",[s("code",[t._v("声明式环境记录（Declarative Environment Record）")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("函数式环境记录（Function Environment Record）")])]),t._v(" "),s("li",[s("code",[t._v("模块式环境记录（Module Environment Record）")])])])]),t._v(" "),s("li",[s("code",[t._v("对象环境记录（Object Environment Record）")])]),t._v(" "),s("li",[s("code",[t._v("全局环境记录（Global Environment Record）")])])])]),t._v(" "),s("li",[t._v("每个环境记录都有一个 "),s("code",[t._v("outerEnv")]),t._v(" 字段，"),s("strong",[t._v("outerEnv 可能为 null")]),t._v("（全局环境记录的 outerEnv 为 null） 或者 "),s("strong",[t._v("是对外部环境记录的引用")]),t._v(" "),s("ul",[s("li",[t._v("对外部词法环境的引用将一个词法环境和其外部词法环境链接起来，外部词法环境又拥有对其自身的外部词法环境的引用。这样就形成一个链式结构，这里我们称其为环境链（即 ES6 之前的作用域链），全局环境是这条链的顶端")])])])]),t._v(" "),s("h3",{attrs:{id:"声明式环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明式环境记录"}},[t._v("#")]),t._v(" 声明式环境记录")]),t._v(" "),s("blockquote",[s("p",[t._v("声明式环境记录是用来定义那些直接将标识符与语言值绑定的 ES 语法元素，例如变量，常量，let，class，module，import 以及函数声明等。")])]),t._v(" "),s("h4",{attrs:{id:"函数式环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数式环境记录"}},[t._v("#")]),t._v(" 函数式环境记录")]),t._v(" "),s("blockquote",[s("p",[t._v("函数环境记录用于体现一个函数的顶级作用域，有 arguments 对象，且如果函数不是箭头函数，还会提供一个 this 的绑定。")])]),t._v(" "),s("h4",{attrs:{id:"模块式环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块式环境记录"}},[t._v("#")]),t._v(" 模块式环境记录")]),t._v(" "),s("blockquote",[s("p",[t._v("模块环境记录用于体现一个模块的外部作用域（即模块 export 所在环境），除了正常绑定外，也提供了所有引入的其他模块的绑定（即 import 的所有模块，这些绑定只读），因此我们可以直接访问引入的模块")])]),t._v(" "),s("h3",{attrs:{id:"对象式环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象式环境记录"}},[t._v("#")]),t._v(" 对象式环境记录")]),t._v(" "),s("p",[t._v("每个对象式环境记录都与一个对象相关联，这个对象叫做对象式环境记录的 "),s("code",[t._v("binding object")]),t._v("。可以理解为对象式环境记录就是基于这个 binding object，"),s("strong",[t._v("以对象属性的形式进行标识符绑定，标识符与 binding object 的属性名一一对应")]),t._v("。")]),t._v(" "),s("p",[t._v("是对象就可以动态添加或者删除属性，所以对象环境记录不存在不可变绑定。")]),t._v(" "),s("p",[t._v("对象式环境记录用来定义那些将标识符与某些对象属性相绑定的 ES 语法元素，例如 "),s("code",[t._v("with 语句")]),t._v("、"),s("code",[t._v("全局 var 声明")]),t._v("和"),s("code",[t._v("函数声明")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"全局环境记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局环境记录"}},[t._v("#")]),t._v(" 全局环境记录")]),t._v(" "),s("p",[t._v("上面提到"),s("strong",[t._v("全局执行上下文会创建全局环境记录")]),t._v("，它实际上是由声明式记录和对象式记录组合而成，两者都包含。")]),t._v(" "),s("p",[s("strong",[t._v("全局环境记录伪代码表示")])]),t._v(" "),s("div",{staticClass:"language-JSON line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("GlobalEnvironmentRecords"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  outerEnv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境 的外部引用为null")]),t._v("\n  GlobalThisValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this的绑定 如 window")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n  LexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ObjectRecord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包含了全局下var、function、generator、async声明的标识符 还有其他内置对象 如Math、Date")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用全局对象（如window）作为绑定对象，所以在全局下用var、function...声明的变量可以通过window[变量名] 访问（或window.变量名）")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("变量名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" undefined\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量环境")]),t._v("\n  VariableEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    DeclarativeRecord"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 除了var、function、generator、async声明的标识符保存在这里，如let、const")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("变量名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" uninitialized "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在编译阶段为uninitialized")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("关于全局环境记录，它的内部属性")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("[[ObjectRecord]]")]),t._v("指向对象式记录")])]),t._v(" "),s("p",[t._v("之前说过每个对象式环境记录都有一个 binding object，全局环境记录的对象式环境记录的 binding object 就是全局对象，在浏览器内，全局的 this 及 window 绑定都指向全局对象。")]),t._v(" "),s("p",[t._v("全局环境记录的对象式环境记录组件，绑定了所有内置全局属性、全局的函数声明以及全局的 var 声明，所以这些绑定我们可以通过 window.xx 或 this.xx 获取到。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("[[DeclarativeRecord]]")]),t._v("指向声明式记录")])]),t._v(" "),s("p",[t._v("全局代码的其他声明（如 let、const、class 等）则绑定在声明式环境记录组件内，由于声明式环境记录组件并不是基于简单的对象形式来实现绑定，所以这些声明我们并不能通过全局对象的属性来访问。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f()")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"函数执行上下文的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数执行上下文的创建"}},[t._v("#")]),t._v(" 函数执行上下文的创建")]),t._v(" "),s("p",[t._v("上面说到"),s("strong",[t._v("函数执行上下文会创建时会同时创建 "),s("code",[t._v("This Binding")]),t._v("以及"),s("code",[t._v("变量环境（VariableEnvironment）")]),t._v("和"),s("code",[t._v("词法环境（LexicalEnvironment）")]),t._v("两个环境记录组件")]),t._v("，如下图：")]),t._v(" "),s("Shadow-Img",{attrs:{src:t.$withBase("/assets/ecma/7.png")}}),t._v(" "),s("p",[s("strong",[t._v("函数执行上下文创建的环境记录的伪代码表示")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("FunctionExecutionContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量环境")]),t._v("\n  VariableEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存var声明的标识符、function")]),t._v("\n    outerEnv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GlobalExecutionContext "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部环境记录")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n  LexicalEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存let、const声明的标识符")]),t._v("\n    outerEnv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GlobalExecutionContext "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部环境记录")]),t._v("\n    arguments"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h2",{attrs:{id:"词法环境-vs-变量环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词法环境-vs-变量环境"}},[t._v("#")]),t._v(" 词法环境 VS 变量环境")]),t._v(" "),s("p",[t._v("当将一个词法环境的 var 和 let 声明的标识符分开存储时，词法环境也就有了区分")]),t._v(" "),s("ul",[s("li",[t._v("一个称之为变量环境（VariableEnvironment），用于封装 var、函数声明的标识符（会提升）")]),t._v(" "),s("li",[t._v("另一个则称之为词法环境（LexicalEnvironment），用于封装非 var 声明的标识符（不会提升）")])]),t._v(" "),s("p",[t._v("正因为如此， "),s("strong",[t._v("变量环境只有全局作用域和函数作用域")]),t._v("，同理，"),s("strong",[t._v("词法环境则是三种作用域：全局、块、函数")]),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("环境记录是用于"),s("strong",[t._v("记录代码中变量和函数标识符的映射")])]),t._v(" "),s("li",[t._v("执行上下文分为"),s("strong",[t._v("全局执行上下文")]),t._v("、"),s("strong",[t._v("函数执行上下文")]),t._v("和 "),s("strong",[t._v("eval 创建的执行上下文")])]),t._v(" "),s("li",[t._v("全局上下文会创建"),s("strong",[t._v("全局环境记录")]),t._v("，函数执行上下会创建"),s("strong",[t._v("词法环境组件")]),t._v("和"),s("strong",[t._v("变量环境组件")])]),t._v(" "),s("li",[t._v("词法环境组件用于保存"),s("strong",[t._v("let、const")]),t._v(" 标识符，变量环境组件用于保存"),s("strong",[t._v("var、函数声明")]),t._v("的标识符")]),t._v(" "),s("li",[t._v("作用域是变量查找的规则，可以简单理解作用域就是环境记录，环境记录的 outerEnv 所在的链表形成了作用域链")]),t._v(" "),s("li",[t._v("js 是采用词法（静态）作用域模型，即环境记录以及所指向的外部环境记录由你代码书写的位置决定")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("如果你了解 ES5 版本的有关执行上下文的内容，会感到奇怪为啥有关 VO、AO、作用域、作用域链等内容没有提及。其实两者概念并不冲突，一个是 ES3 规范中的定义，而词法环境则是 ES6 规范的定义。不同时期，不同称呼。")]),t._v(" "),s("ul",[s("li",[t._v("作用域 <=> 词法环境")]),t._v(" "),s("li",[t._v("作用域链 <=> outerEnv 引用")]),t._v(" "),s("li",[t._v("VO|AO <=> 环境记录")])])]),s("h1",{attrs:{id:"附一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附一"}},[t._v("#")]),t._v(" 附一")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("编译型语言")]),s("p",[t._v("程序在执行之前需要一个专门的编译过程，把程序编译成为机器语言的文件（如 exe 文件），运行时不需要重新编译，直接用编译后的文件就行了。")]),t._v(" "),s("ul",[s("li",[t._v("优点：执行效率高")]),t._v(" "),s("li",[t._v("缺点：跨平台性差")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("解释型语言")]),s("p",[t._v("程序不需要编译，程序在运行的过程中才用解释器编译成机器语言，边解释边执行")]),t._v(" "),s("ul",[s("li",[t._v("优点：跨平台性好")]),t._v(" "),s("li",[t._v("缺点：执行效率低")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);