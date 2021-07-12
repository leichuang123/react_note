import './count.less';
import React, { Component } from 'react';
import store from '../../redux/store';
import { Select, Button, Spin } from 'antd';
const { Option } = Select;

export default class count extends Component {
    state = {
        count: 0,
        selectNumber: 1,
        loading: false,
    };
    componentDidMount() {
        // 检查redux状态变化，调用render
        store.subscribe(() => {
            this.setState({});
            //this.forceUpdate();
        });
    }
    handleChange = (selectNumber) => {
        this.setState({ selectNumber });
    };
    // 加
    increment = () => {
        const { selectNumber } = this.state;
        store.dispatch({ type: 'increment', data: selectNumber * 1 });
    };
    // 减
    decrement = () => {
        const { selectNumber } = this.state;
        store.dispatch({ type: 'decrement', data: selectNumber * 1 });
    };
    // 异步加
    incrementAsync = () => {
        const { selectNumber } = this.state;
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            store.dispatch({ type: 'increment', data: selectNumber * 1 });
            this.setState({ loading: false });
        }, 1000);
    };
    render() {
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
                        result:{store.getState()}
                    </Button>
                </div>
            </div>
        );
    }
}
