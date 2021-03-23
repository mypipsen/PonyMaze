import React, {Component} from 'react';
import {connect} from 'react-redux';
import {solveMaze} from '../redux/actions'

const mapStateToProps = state => {
    return {maze: state.maze};
};

class MazeSolver extends Component {

    render() {
        if (!this.props.maze) {
            return null;
        }

        return (
            <div className="btn btn-primary" onClick={() => this.props.solveMaze(this.props.maze)}>Solve maze</div>
        );
    }
}

export default connect(mapStateToProps, {solveMaze})(MazeSolver);