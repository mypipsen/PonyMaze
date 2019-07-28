import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {maze: state.maze};
};

class Maze extends Component {

    render() {
        const {maze} = this.props;

        if (!maze) {
            return null;
        }

        return (
            <div className="maze">
                {JSON.stringify(maze)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Maze);