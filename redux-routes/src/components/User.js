import React from "react";
import {browserHistory} from 'react-router';
export class User extends React.Component {
    onNavigation(){
      browserHistory.push("/");
    }
    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={()=> this.onNavigation()} className="btn btn-success">Home</button>
            </div>
        );
    }
}
