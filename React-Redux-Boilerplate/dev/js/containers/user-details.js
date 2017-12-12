import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserDetails extends Component{

    render(){
        if(!this.props.user){
            return (<h3>Select A User</h3>);
        }

        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h3>Name : {this.props.user.first} { this.props.user.last} </h3>
                <h4>Age : {this.props.user.age} </h4>
                <h5>Description : {this.props.user.description}</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);