import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: true,
            count: 0,
        };
    }
    stepCount = () => {
        const { isAdd, count } = this.state;
        this.setState({ count: isAdd ? count + 1 : count - 1 });
    };

    handlerChangeMode = () => {
        const { isAdd } = this.state;
        this.setState({ isAdd: !isAdd });
    };
    render() {
        const { step } = this.props;
        const { count } = this.state;

        return (
            <div>
                Counter : {count}
                <br />
                {/* за станом змінювати кновку  */}
                <button className="btn" onClick={this.stepCount}>
                    +/-
                </button>
                {/* по кліку  змінювати стан  isAdd  */}
                <button onClick={this.handlerChangeMode}>change mode</button>
            </div>
        );
    }
}

export default Counter;
