import React, { Component } from "react";
import Counter from "../Counter";
import styles from "./BlockCounter.module.scss";

class BlockCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
        };
    }

    handleInput = ({ target: { name, value } }) => {
        this.setState({ [name]: Number(value) });
    };

    render() {
        const { step } = this.state;
        return (
            <div className={styles.box}>
                <Counter step={step} />
                <div className={styles.box__input__range}>
                    <input
                        className={styles.input}
                        type="range"
                        onChange={this.handleInput}
                        value={step}
                        name="step"
                        min={1}
                        max={1000000}
                    />
                    <span className={styles.span}> step: {step}</span>
                </div>
            </div>
        );
    }
}

export default BlockCounter;
