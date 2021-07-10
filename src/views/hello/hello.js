import React, { Component } from 'react';

export default class hello extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 1,
        list: [],
    };
    componentDidMount() {}
    getSnapshotBeforeUpdate() {}
    render() {
        const { count, list } = this.state;
        return (
            <div>
                <button>{`点击了${count}次`}</button>
                <ul>
                    {list.map((item, index) => {
                        return <li key={item.id}>{item.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
