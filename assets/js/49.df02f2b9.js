(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{576:function(t,e,r){"use strict";r.r(e);var a=r(7),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("hr"),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#生命周期"}},[t._v("生命周期")]),r("ul",[r("li",[r("a",{attrs:{href:"#react16-之前的生命周期"}},[t._v("React16 之前的生命周期")])]),r("li",[r("a",{attrs:{href:"#react16-之后的生命周期"}},[t._v("React16 之后的生命周期")])])])]),r("li",[r("a",{attrs:{href:"#生命周期变更原因"}},[t._v("生命周期变更原因")]),r("ul",[r("li",[r("a",{attrs:{href:"#constructor"}},[t._v("constructor")])]),r("li",[r("a",{attrs:{href:"#static-getderivedstatefromprops"}},[t._v("static getDerivedStateFromProps")])]),r("li",[r("a",{attrs:{href:"#render"}},[t._v("render")])]),r("li",[r("a",{attrs:{href:"#componentdidmount"}},[t._v("componentDidMount")])]),r("li",[r("a",{attrs:{href:"#shouldcomponentupdate"}},[t._v("shouldComponentUpdate")])]),r("li",[r("a",{attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("getSnapshotBeforeUpdate")])]),r("li",[r("a",{attrs:{href:"#componentdidupdate"}},[t._v("componentDidUpdate")])]),r("li",[r("a",{attrs:{href:"#componentwillunmount"}},[t._v("componentWillUnmount")])])])])])]),r("p"),t._v(" "),r("hr"),t._v(" "),r("h1",{attrs:{id:"生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),r("h2",{attrs:{id:"react16-之前的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react16-之前的生命周期"}},[t._v("#")]),t._v(" React16 之前的生命周期")]),t._v(" "),r("Shadow-Img",{attrs:{src:t.$withBase("/assets/react/1.awebp")}}),t._v(" "),r("p",[t._v("需要注意的几点：")]),t._v(" "),r("h3",{attrs:{id:"挂载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("挂载过程")]),t._v("在组件的一生中仅会发生一次，在这个过程中，组件被初始化，然后会被渲染到真实 DOM 里，完成所谓的“首次渲染”。")]),t._v(" "),r("ul",[r("li",[t._v("constructor 方法，该方法仅仅在挂载的时候被调用一次，我们可以在该方法中对 this.state 进行初始化")]),t._v(" "),r("li",[t._v("componentWillMount、componentDidMount 方法同样只会在挂载阶段被调用一次。其中 componentWillMount 会在执行 render 方法前被触发")]),t._v(" "),r("li",[t._v("接下来 render 方法被触发。注意 render 在执行过程中并不会去操作真实 DOM（也就是说不会渲染），它的职能是把需要渲染的内容返回出来。真实 DOM 的渲染工作，在挂载阶段是由 ReactDOM.render 来承接的")]),t._v(" "),r("li",[t._v("componentDidMount 方法在渲染结束后被触发，此时因为真实 DOM 已经挂载到了页面上，我们可以在这个生命周期里执行真实 DOM 相关的操作。此外，类似于异步请求、数据初始化这样的操作也大可以放在这个生命周期来做")])])])]),t._v(" "),r("h3",{attrs:{id:"更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("更新过程")]),t._v("：更新分为两种，一种是由父组件更新触发的更新，另一种是组件自身调用自己的 setState 触发的更新。\n"),r("ul",[r("li",[r("code",[t._v("componentWillReceiveProps")]),t._v(" 并不是由 props 的变化触发的，而是由父组件的更新触发的。只要父组件重新渲染，不管传递给子组件的 props 的值有没有发生变化，子组件都会触发 "),r("code",[t._v("componentWillReceiveProps")]),t._v(" 这个生命周期。")]),t._v(" "),r("li",[r("code",[t._v("shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),r("ul",[r("li",[t._v("render 方法由于伴随着对虚拟 DOM 的构建和对比，过程可以说相当耗时。而在 React 当中，很多时候我们会不经意间就频繁地调用了 render。为了避免不必要的 render 操作带来的性能开销，React 为我们提供了 shouldComponentUpdate 这个钩子。")]),t._v(" "),r("li",[t._v("React 组件会根据 shouldComponentUpdate 的返回值，来决定是否执行该方法之后的生命周期，进而决定是否对组件进行 re-render（重渲染）。shouldComponentUpdate 的默认值为 true，也就是说“无条件 re-render”。在实际的开发中，我们往往通过手动往 shouldComponentUpdate 中填充判定逻辑，或者直接在项目中引入 "),r("code",[t._v("PureComponent")]),t._v(" 等最佳实践，来实现“有条件的 re-render”。")])])])])])]),t._v(" "),r("h3",{attrs:{id:"卸载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("卸载过程")]),t._v("：组件销毁的常见原因有以下两个。\n"),r("ul",[r("li",[t._v("组件在父组件中被移除了：这种情况相对比较直观")]),t._v(" "),r("li",[t._v("组件中设置了 key 属性，父组件在 render 的过程中，发现 key 值和上一次不一致，那么这个组件就会被干掉")])])])]),t._v(" "),r("h2",{attrs:{id:"react16-之后的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react16-之后的生命周期"}},[t._v("#")]),t._v(" React16 之后的生命周期")]),t._v(" "),r("p",[t._v("从 "),r("code",[t._v("v16.3")]),t._v(" 的版本开始， 对生命周期的钩子进行了调整，分别废弃和新增了一些生命周期的钩子函数。React 16 对 render 方法也进行了一些改进："),r("strong",[t._v("React 16 之前，render 方法必须返回单个元素，而 React 16 允许我们返回元素数组和字符串")])]),t._v(" "),r("Shadow-Img",{attrs:{src:t.$withBase("/assets/react/2.png")}}),t._v(" "),r("blockquote",[r("p",[t._v("从以上生命周期的对比，我们不难看出，React 从 v16.3 开始废弃 "),r("code",[t._v("componentWillMount、componentWillReceiveProps、componentWillUpdate")]),t._v(" 三个钩子函数")])]),t._v(" "),r("h3",{attrs:{id:"挂载-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#挂载-2"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("消失的 "),r("code",[t._v("componentWillMount")]),t._v("，新增的 "),r("code",[t._v("static getDerivedStateFromProps")])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("getDerivedStateFromProps")]),t._v(" 不是 componentWillMount 的替代品")]),t._v(" "),r("ul",[r("li",[t._v("getDerivedStateFromProps 这个 API，其设计的初衷不是试图替换掉 componentWillMount，而是试图替换 "),r("code",[t._v("componentWillReceiveProps")]),t._v("，因此它有且仅有一个用途："),r("strong",[t._v("使用 props 来派生/更新 state")])]),t._v(" "),r("li",[t._v("React 团队为了确保 getDerivedStateFromProps 这个生命周期的纯洁性，直接从命名层面约束了它的用途（getDerivedStateFromProps 直译过来就是**“从 Props 里派生 State”**）。所以，如果你不是出于这个目的来使用 getDerivedStateFromProps，原则上来说都是不符合规范的")])])])]),t._v(" "),r("h4",{attrs:{id:"static-getderivedstatefromprops-props-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops-props-state"}},[t._v("#")]),t._v(" "),r("code",[t._v("static getDerivedStateFromProps(props, state)")])]),t._v(" "),r("ol",[r("li",[t._v("getDerivedStateFromProps 是一个"),r("strong",[t._v("静态方法")]),t._v("。静态方法不依赖组件实例而存在，因此你在这个方法内部是访问不到 this 的。")]),t._v(" "),r("li",[t._v("该方法可以接收两个参数：props 和 state，它们分别代表"),r("strong",[t._v("当前组件接收到的来自父组件的 props")]),t._v(" 和 "),r("strong",[t._v("组件自身的 state")])]),t._v(" "),r("li",[t._v("getDerivedStateFromProps 需要一个对象格式的返回值，React 需要用这个返回值来更新（派生）组件的 state。getDerivedStateFromProps 方法对 state 的更新动作并非“覆盖”式的更新，而是针对某个属性的定向更新")])]),t._v(" "),r("h3",{attrs:{id:"更新-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新-2"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("消失的 "),r("code",[t._v("componentWillReceiveProps")]),t._v("，新增的 "),r("code",[t._v("static getDerivedStateFromProps(props, state)")])])]),t._v(" "),r("li",[r("p",[t._v("消失的 "),r("code",[t._v("componentWillUpdate")]),t._v(" 与新增的 "),r("code",[t._v("getSnapshotBeforeUpdate(prevProps, prevState)")])])])]),t._v(" "),r("h3",{attrs:{id:"卸载-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载-2"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),r("Shadow-Img",{attrs:{src:"http://img-repo.poetries.top/images/20210425121355.png"}}),t._v(" "),r("h1",{attrs:{id:"生命周期变更原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期变更原因"}},[t._v("#")]),t._v(" 生命周期变更原因")]),t._v(" "),r("p",[t._v("因为"),r("strong",[t._v("在 v15 的版本，更新过程是同步的")]),t._v("，往往一个主线程长时间被占用，会导致页面性能问题。React16 以后采用了新的 Fiber 机制：利用浏览器 "),r("code",[t._v("requestIdleCallback")]),t._v(" 将可中断的任务进行分片处理，每一个小片的运行时间很短，这样主线程就不会被独占")]),t._v(" "),r("p",[t._v("由于一次更新过程会分成多个分片完成，所以完全有可能一个更新任务还没有完成，就被另一个更高优先级的更新过程打断，这时候，优先级高的更新任务会优先处理完，而低优先级更新任务所做的工作则会完全作废，然后等待机会重头再来。")]),t._v(" "),r("p",[t._v("因为一个更新过程可能被打断，所以 React Fiber 一个更新过程被分为两个阶段(Phase)：")]),t._v(" "),r("ul",[r("li",[t._v("第一个阶段 "),r("code",[t._v("Reconciliation(调和)")]),t._v("，React Fiber 会找出需要更新哪些 DOM，这个阶段是纯净且没有副作用，可能会被 React 暂停、终止或重新启动。")]),t._v(" "),r("li",[t._v("第二阶段 "),r("code",[t._v("Commit")]),t._v("，一鼓作气把 DOM 更新完，绝不会被打断。而 commit 阶段又被细分为了\n"),r("ul",[r("li",[t._v("pre-commit：可以读取 DOM")]),t._v(" "),r("li",[t._v("commit：可以使用 DOM，运行副作用，安排更新")])])])]),t._v(" "),r("h2",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),r("p",[t._v("constructor() 在 React 组件挂载之前被调用，在为 React.Component 子类实现构造函数时，应在其他语句之前调用 super()")]),t._v(" "),r("h2",{attrs:{id:"static-getderivedstatefromprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops"}},[t._v("#")]),t._v(" static getDerivedStateFromProps")]),t._v(" "),r("h2",{attrs:{id:"render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),r("h2",{attrs:{id:"componentdidmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),r("h2",{attrs:{id:"shouldcomponentupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate"}},[t._v("#")]),t._v(" shouldComponentUpdate")]),t._v(" "),r("h2",{attrs:{id:"getsnapshotbeforeupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")]),t._v(" "),r("h2",{attrs:{id:"componentdidupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate")]),t._v(" "),r("h2",{attrs:{id:"componentwillunmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount")])],1)}),[],!1,null,null,null);e.default=o.exports}}]);