import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as appAction from '../../actions/appAction';

class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(list);
        const { status } = this.props;
        return (
            <div>
                <h3>main {status}</h3>
            </div>
        )
    }
}

export default connect(
    state => ({
        status: state.app.status
    }),
    dispatch => ({
        
    })
)(HomePage);