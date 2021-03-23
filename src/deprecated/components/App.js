import React, {Component} from 'react';
import Notification from './Notification';
import MazeSelector from './MazeSelector';
import MazeCreation from './MazeCreation';
import Maze from './Maze';
import MazeSolver from "./MazeSolver";

class App extends Component {

    render() {
        return (
            <div className="app container">
                <div className="row jumbotron">
                    <div className="col align-items-center">
                        <h1>Pony Maze</h1>
                        <p>Help the pony escape the maze without getting eaten by the domokun! Move using the arrow keys or WASD.</p>
                        <p>
                            <a href="https://github.com/Bikstok/PonyMaze" target="_blank" rel="noopener noreferrer">Source code</a>
                        </p>
                        <div className="row">
                            <div className="col-md-auto">
                                <MazeCreation/>
                            </div>
                            <div className="col-md-auto">
                                <MazeSelector/>
                            </div>
                            <div className="col-md-auto">
                                <MazeSolver/>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-auto">
                                <Notification/>
                            </div>
                        </div>
                    </div>
                    <div className="col align-items-center">
                        <Maze/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;