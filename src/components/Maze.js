import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../util/array';
import {movePony} from '../redux/actions';

const mapStateToProps = state => {
    return {maze: state.maze, solution: state.solution};
};

class Maze extends Component {

    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown, false);
    }

    componentWillUnmount() {
        document.addEventListener('keydown', this.onKeyDown, false);
    }

    onKeyDown(e) {
        if (!this.props.maze) {
            return;
        }

        // Prevent scrolling on arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }

        let direction;

        switch (e.keyCode) {
            case 87: // W
            case 38: // Up
                direction = 'north';
                break;
            case 65: // A
            case 37: // Left
                direction = 'west';
                break;
            case 83: // S
            case 40: // Down
                direction = 'south';
                break;
            case 68: // D
            case 39: // Right
                direction = 'east';
                break;
            default:
                direction = null;
        }

        if (direction) {
            this.props.movePony(this.props.maze.maze_id, direction);
        }
    }

    render() {
        const {maze, solution} = this.props;

        if (!maze) {
            return null;
        }

        const width = maze.size[0];
        const rows = maze.data.chunk(width);

        let objectLocations = {};
        objectLocations[maze['pony']] = 'pony';
        objectLocations[maze['domokun']] = 'domokun';
        objectLocations[maze['end-point']] = 'end-point';

        return (
            <div className="maze">
                {rows.map((cells, i) => {
                    return (
                        <div className="maze-row" key={i}>
                            {cells.map((cell, y) => {
                                const key = i * width + y;
                                const object = objectLocations[key] ? `object__${objectLocations[key]}` : '';
                                const path = solution.indexOf(key) > -1 ? 'path' : '';

                                return (
                                    <div className={`maze-cell ${cell.join(' ')} ${object} ${path}`} key={key} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default connect(mapStateToProps, {movePony})(Maze);