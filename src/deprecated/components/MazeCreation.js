import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createMaze} from '../redux/actions'

class MazeCreation extends Component {

    create() {
        this.props.createMaze({
            'maze-width': 15,
            'maze-height': 25,
            'maze-player-name': 'Fluttershy',
            'difficulty': Math.floor(Math.random() * 11)
        });
    }

    render() {
        return (
            <div className="maze-creation">
                <button className="btn btn-primary" onClick={() => this.create()}>Create new maze</button>
            </div>
        )
    }
}

export default connect(null, {createMaze})(MazeCreation);