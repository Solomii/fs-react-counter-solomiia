import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.scss";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: true,
            count: 0,
        };
    }
    stepCount = () => {
        const { step } = this.props;
        const { isAdd, count} = this.state;
        if (step >= 1 && step < 1000000) {
            this.setState({ count: isAdd ? count + step : count - step });
        }
    };

    handlerChangeMode = () => {
        const { isAdd } = this.state;
        this.setState({ isAdd: !isAdd });
    };

    render() {
        const { count, isAdd } = this.state;

        return (
            <div className={styles.container}>
                <h2 className={styles.text}>Counter: {count}</h2>
                <button className={styles.btn} onClick={this.stepCount}>
                    {isAdd ? "Add" : "Negative"}
                </button>
                <button className={styles.btn} onClick={this.handlerChangeMode}>
                    change mode
                </button>
            </div>
        );
    }
}

Counter.defaultProps = {
    step: "0",
};

Counter.propTypes = {
    step: PropTypes.number.isRequired,
};

export default Counter;
