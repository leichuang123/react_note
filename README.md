1.React-Redux 是 FackBook 出品的一个基于 redux 的官方组件库。
react-redux 把组件分为 2 类，一类是 ui 组件，一类是容器组件
所有的 ui 组件都被容器组件包裹，父子关系
只有容器组件可以和 redux 打交道，可以使用 reudx 的 api
ui 组件不能使用 redux 的 api
容器组件会传递 redux 的状态给 ui 组件展示 以及 操作状态的方法 props

react-redux 基本使用
(1).明确两个概念：
1).UI 组件:不能使用任何 redux 的 api，只负责页面的呈现、交互等。
2).容器组件：负责和 redux 通信，将结果交给 UI 组件。
(2).如何创建一个容器组件————靠 react-redux 的 connect 函数
connect(mapStateToProps,mapDispatchToProps)(UI 组件)
-mapStateToProps:映射状态，返回值是一个对象
-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
(3).备注 1：容器组件中的 store 是靠 props 传进去的，而不是在容器组件中直接引入
(4).备注 2：mapDispatchToProps，也可以是一个对象
