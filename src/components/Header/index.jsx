import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

class index extends Component {
    //前进
    forward = () => {
        this.props.history.goForward();
    };
    //后退
    back = () => {
        this.props.history.goBack();
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>我是一般组件</h2>
                    <Button type="primary" onClick={this.back}>
                        回退
                    </Button>
                    <Button type="primary" onClick={this.forward} style={{ marginLeft: 10 }}>
                        前进
                    </Button>
                </div>
            </div>
        );
    }
}
export default withRouter(index);
