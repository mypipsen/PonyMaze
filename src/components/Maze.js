import React, {Component} from 'react';
import {connect} from 'react-redux';
import MazeForm from './MazeForm';
import {getIdFromCookie} from '../redux/actions';

const mapStateToProps = state => {
    return {maze_id: state.maze_id};
};

class Maze extends Component {

    componentDidMount() {
        this.props.getIdFromCookie();
    }

    render() {
        const {maze_id} = this.props;

        if (maze_id === null) {
            return (
                <MazeForm/>
            );
        }

        return (
            <div>{JSON.stringify(maze_id)}</div>
        )
    }
}

export default connect(mapStateToProps, {getIdFromCookie})(Maze);