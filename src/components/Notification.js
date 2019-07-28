import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {error: state.error};
};

class Notification extends Component {

    get className() {
        if (this.props.error === 'You won. Game ended') {
            return 'alert-success';
        }

        return 'alert-danger';
    }

    render() {
        const {error} = this.props;

        if (!error) {
            return null;
        }

        return (
            <div className="notification toast show">
                <div className="toast-header text-center m-0 p-0">
                    <div className={`alert m-0 ${this.className}`}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Notification);