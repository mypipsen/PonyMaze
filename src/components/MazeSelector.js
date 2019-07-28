import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMazes, fetchMaze} from '../redux/actions';

const mapStateToProps = state => {
    return {mazes: state.mazes};
};

class MazeSelector extends Component {

    componentDidMount() {
        this.props.fetchMazes();
    }

    render() {
        const {mazes, fetchMaze} = this.props;

        return (
            <div className="maze-list">
                {mazes.map((maze, i) => {
                    return (
                        <div className="maze-item" key={i} onClick={fetchMaze(maze)}>
                            {maze}
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, {fetchMazes, fetchMaze})(MazeSelector);