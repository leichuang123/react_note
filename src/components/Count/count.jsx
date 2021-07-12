import './count.less';
import React, { Component } from 'react';
import { Select, Button, Spin } from 'antd';
const { Option } = Select;

export default class count extends Component {
    state = {
        count: 0,
        selectNumber: 1,
        loading: false,
    };
    handleChange = (selectNumber) => {
        this.setState({ selectNumber });
    };
    // 加
    increment = () => {
        const { count, selectNumber } = this.state;
        const countResult = count + selectNumber * 1;
        this.setState({
            count: countResult,
        });
    };
    // 减
    decrement = () => {
        const { count, selectNumber } = this.state;
        const countResult = count - selectNumber * 1;
        this.setState({
            count: countResult,
        });
    };
    // 异步加
    incrementAsync = () => {
        const { count, selectNumber } = this.state;
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({ count: count + selectNumber * 1, loading: false });
        }, 1000);
    };
    render() {
        const { count } = this.state;
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
                        result:{count}
                    </Button>
                </div>
            </div>
        );
    }
}
