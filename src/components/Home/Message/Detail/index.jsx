import React, { Component } from 'react';
// 自带的
//import qs from 'querystring';

export default class index extends Component {
    render() {
        console.log(this.props);

        // 获取params参数
        // const {
        //     match: { params },
        // } = this.props;

        // 获取search参数。id=1$title=消息，是urlencoded编码字符串，需要借助querystring解析
        // const {
        //     location: { search },
        // } = this.props;
        // console.log(qs.parse(search.slice(1)));
        // const query = qs.parse(search.slice(1));

        // 获取stare参数
        const {
            location: { state: stateParams },
        } = this.props;

        return (
            <div>
                <h2>{stateParams.title}详情</h2>
                <span>id：{stateParams.id}</span>
            </div>
        );
    }
}
