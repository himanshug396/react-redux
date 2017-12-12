import React from "react";
import { User } from '../components/User';
import { Main } from '../components/Main';
import { setUserId} from '../actions/oneAction';
import { connect } from 'react-redux';

class App extends React.Component {
    changeUsername(newName) {
    }

    render() {
      console.log('props',this.props)
        return (
            <div className="container">
                <Main changeUsername={ () => this.props.setResult(50)}/>
                <User username={this.props.reducer.reducer.result}/>
                <p>{this.props.reducer.reducer.result}</p>
                <hr />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      reducer: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      setResult : (value) => {
        dispatch(setUserId(value))
      }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
