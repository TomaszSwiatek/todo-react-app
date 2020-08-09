import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: null
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state);
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="add-todo">
                <input type="text" onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default AddTodo;