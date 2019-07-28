import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {error: state.error};
};

class Notification extends Component {

    render() {
        const {error} = this.props;

        if (!error) {
            return null;
        }

        return (
            <div className="error">
                {error}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Notification);