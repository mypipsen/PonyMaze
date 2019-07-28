import React, {Component} from 'react';
import Notification from './Notification';
import MazeList from './MazeSelector';
import MazeForm from './MazeForm';
import Maze from './Maze';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Notification/>
                <MazeList/>
                <MazeForm/>
                <Maze/>
            </div>
        );
    }
}

export default App;