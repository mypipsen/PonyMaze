import React, {Component} from 'react';
import Notification from './Notification';
import MazeSelector from './MazeSelector';
import MazeCreation from './MazeCreation';
import Maze from './Maze';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Notification/>
                <div className="container">
                    <div className="text-center">
                        <h1>Pony Maze</h1>
                        <p>Help the pony escape the maze without getting eaten by the domokun! Move using WASD.</p>
                        <div className="row justify-content-md-center">
                            <div className="col-md-auto">
                                <MazeCreation/>
                            </div>
                            <div className="col-md-auto">
                                <MazeSelector/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3">
                        <Maze/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;