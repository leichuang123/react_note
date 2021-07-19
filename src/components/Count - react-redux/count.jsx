import './count.less';
import React, { Component } from 'react';
import store from '../../redux/store';
import { Select, Button, Spin } from 'antd';
const { Option } = Select;

export default class count extends Component {
    state = {
        selectNumber: 1,
        loading: false,
    };
    componentDidMount() {}
    handleChange = (selectNumber) => {
        this.setState({ selectNumber });
    };
    // 加
    increment = () => {
        const { selectNumber } = this.state;
        this.props.increment(selectNumber * 1);
    };
    // 减
    decrement = () => {
        const { selectNumber } = this.state;
        this.props.decrement(selectNumber * 1);
    };
    // 异步加
    incrementAsync = () => {
        const { selectNumber } = this.state;
        this.setState({
            loading: true,
        });
        this.props.incrementAsync(selectNumber * 1, 1000);
        this.setState({ loading: false });
    };
    render() {
        console.log('ui组件接受的props:' + this.props.count);
        return (
            <div className="count-box">
                <div className="count-button">
                    {this.state.loading && (
                        <div className="count-loading">
                            <Spin></Spin>
                        </div>
                    )}
                    <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="1">选择数字1</Option>
                        <Option value="2">选择数字2</Option>
                        <Option value="3">选择数字3</Option>
                    </Select>
                    <Button style={{ marginLeft: 10 }} type="primary" onClick={this.increment}>
                        +
                    </Button>
                    <Button style={{ marginLeft: 10 }} type="primary" onClick={this.decrement}>
                        -
                    </Button>
                    <Button style={{ marginLeft: 10 }} type="primary" ghost onClick={this.incrementAsync}>
                        异步加
                    </Button>
                    <Button style={{ marginLeft: 10 }} type="text">
                        result:{this.props.count}
                    </Button>
                </div>
            </div>
        );
    }
}
