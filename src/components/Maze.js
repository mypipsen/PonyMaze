import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../util/array';
import {movePony} from '../redux/actions';

const mapStateToProps = state => {
    return {maze: state.maze};
};

class Maze extends Component {

    componentDidMount() {
        window.addEventListener('keyup', (e) => this.onKeyUp(e), false);
    }

    onKeyUp(e) {
        const keyCode = e.keyCode;
        let direction;

        switch (keyCode) {
            case 87: // W
                direction = 'north';
                break;
            case 65: // A
                direction = 'west';
                break;
            case 83: // S
                direction = 'south';
                break;
            case 68: // D
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
        const {maze} = this.props;

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
                        <div className="row" key={i}>
                            {cells.map((cell, y) => {
                                const key = i * width + y;
                                const object = objectLocations[key] ? `object__${objectLocations[key]}` : '';

                                return (
                                    <div className={`cell ${cell.join(' ')} ${object}`} key={key}/>
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