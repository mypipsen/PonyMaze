import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMazes, fetchMaze} from '../redux/actions';

const mapStateToProps = state => {
    return {mazes: state.mazes, maze: state.maze};
};

class MazeSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {active: false};
    }

    componentDidMount() {
        this.props.fetchMazes();
    }

    toggle() {
        this.setState(prevState => ({active: !prevState.active}));
    }

    select(maze) {
        this.setState({active: false});
        this.props.fetchMaze(maze);
    }

    render() {
        const {mazes} = this.props;

        if (mazes.length === 0) {
            return null;
        }

        return (
            <div className="dropdown clickable">
                <div className="btn btn-primary dropdown-toggle" onClick={() => this.toggle()}>Select an existing maze</div>
                <div className={`dropdown-menu ${this.state.active ? 'show' : ''}`}>
                    {mazes.map((maze, i) => {
                        const active = this.props.maze && this.props.maze.maze_id === maze;
                        return (
                            <div className={`dropdown-item ${active ? 'active' : ''}`} key={i}
                                 onClick={() => this.select(maze)}>
                                {maze}
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {fetchMazes, fetchMaze})(MazeSelector);