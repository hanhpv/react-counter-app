import React, { Component } from "react";

class Counter extends Component {
    // any data the component needs
    state = {
        // value: 0,
        // value: this.props.counter.value,
        // imageUrl: "https://picsum.photos/200", // random 200px image
        imageUrl: "part1.png",
        tags: ["tag1", "tag2", "tag3"],
    };

    // happens whenever the props or state of a component changes
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value != this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    // inline styles needs to passed in object
    styles = {
        fontSize: 10,
        fontWeight: "bold",
    };

    // the method gets called when an object of this class is initiated
    // constructor() {
    //     // this is available in the function
    //     super();
    //     // bind this obj in to handleIncrement method
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    // arrow function don't rebind the this keyword
    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // };

    render() {
        console.log("    Counter - Rendered");

        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                <div style={{ display: "none" }}>
                    <img src={this.state.imageUrl} />
                    {this.state.tags.length === 0 && (
                        <p>Please create a new tag!</p>
                    )}
                    {this.renderTags()}
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        // JSX express is converted to React element, so it can be returned in the function, can be use as function argument,...
        // return count === 0 ? <h1>Zero</h1> : count;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
