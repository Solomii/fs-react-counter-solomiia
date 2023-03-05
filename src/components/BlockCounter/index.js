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
    handleInput = () => {
       
    };

    render() {
        const { step } = this.state;
        return (
            <div className={styles.box}>
                <Counter step={step}/>
                <div>
                <input
                    className={styles.input}
                    type="text"
                    onChange={this.handleInput}
                    value={step}
                />
                </div>
            </div>
        );
    }
}

export default BlockCounter;
