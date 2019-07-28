import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createMaze} from '../redux/actions'

class MazeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    submit(e) {
        e.preventDefault();

        this.props.createMaze({
            'maze-width': 15,
            'maze-height': 25,
            'maze-player-name': this.state.name,
            'difficulty': 5
        });
    }

    changeName(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <form onSubmit={e => this.submit(e)}>
                <div className="form-group row">
                    <input type="text" onChange={e => this.changeName(e)}/>
                </div>
                <div className="form-group row">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
        )
    }
}

export default connect(null, {createMaze})(MazeForm);