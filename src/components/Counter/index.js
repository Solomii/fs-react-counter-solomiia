import React, { Component } from "react";

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAdd:true,
      count:0
    }

  
  }
    render() {
      const {step} = this.props;
        const {count } = this.state;
      

        return (
            <div>
                Counter : {count };
                {/* за станом змінювати кновку  */}
                <button onClick={() => this.setState({ count:count + 1 })}>+/-</button>
                 {/* по кліку  змінювати стан  isAdd  */}
                <button onClick={() => {}}>change mode</button>
            </div>
        );
    }
}

export default Counter;
