import { Component } from "react";

// https://react.dev/reference/react/Component

export default class ClassComponent extends Component {
    state = {
        name: 'Dave',
        age: 28
    }

    incrementAge = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render () {
        return <>
        <h1>Hi! My name is {this.state.name}</h1>
        <button onClick={this.incrementAge}>Increase my age</button>
        <p>{this.state.age}</p>
        </>
    }
}