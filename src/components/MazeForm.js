import React, {Component} from 'react';
import PonyApi from '../api/PonyApi';

class MazeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            error: null,
        };
    }

    submit(e) {
        e.preventDefault();

        const payload = {
            'maze-width': 15,
            'maze-height': 25,
            'maze-player-name': this.state.name,
            'difficulty': 5
        };

        this.setState({error: null}, () => {
            PonyApi
                .create(payload)
                .catch(err => {
                    if (err.response && err.response.data) {
                        err = err.response.data;
                    }

                    this.setState({error: err})
                });
        });
    }

    changeName(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <form onSubmit={e => this.submit(e)}>
                <div className="form-group row">
                    <input type="text" onChange={e => this.changeName(e)}/>
                </div>
                <div className="form-group row">
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
                <div className="error">
                    {this.state.error}
                </div>
            </form>
        )
    }
}

export default MazeForm;