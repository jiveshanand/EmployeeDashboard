import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';
import tachyons from 'tachyons';

class App extends React.Component {
  render() {
      return (
        <div className="ui container pt2">
          {!this.props.isLoginValid 
            ? <Login /> 
            : <Dashboard />}
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    isLoginValid: state.login && state.login.isValid && state.login.isValid.isLoginValid
  }
}
export default connect(mapStateToProps, {})(App);
