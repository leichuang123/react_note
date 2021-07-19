1.React-Redux 是 FackBook 出品的一个基于 redux 的官方组件库。
react-redux 把组件分为 2 类，一类是 ui 组件，一类是容器组件
所有的 ui 组件都被容器组件包裹，父子关系
只有容器组件可以和 redux 打交道，可以使用 reudx 的 api
ui 组件不能使用 redux 的 api
容器组件会传递 redux 的状态给 ui 组件展示 以及 操作状态的方法 props
