import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        console.log("  Counters - Rendered");

        const { onReset, counters, onIncrement, onDelete } = this.props;
        return (
            <React.Fragment>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                <div>
                    {counters.map((counter) => (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Counters;
