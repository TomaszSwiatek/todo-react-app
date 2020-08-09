import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: null,
        id: null,
        warning: null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content) {
            this.props.addTodo(this.state);
            e.target[0].value = null;
        } else {
            this.state.warning = "please fill input"
        }

        this.setState({
            content: null,
            id: null

        })
    }
    handleChange = (e) => {

        this.setState({
            content: e.target.value,
            id: Math.random(),
            warning: null
        })

    }
    componentDidUpdate() {
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-todo">
                <input type="text" onChange={this.handleChange} />
                <button>Add Todo</button>
                <p>{this.state.warning}</p>
            </form>
        );
    }
}

export default AddTodo;