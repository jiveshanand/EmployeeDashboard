import React from 'react';
import tachyons from 'tachyons';
import { connect } from 'react-redux';
import { login } from '../actions';
import { ValidateEmail } from '../utils/validator';

class SignIn extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}
	onClick = () => {
		const { login } = this.props;
		login(this.state);
		// onSignIn(this.state).then(() => onRouteChange('home'))
	}

	getEmail = e => {
		this.setState({email: e.target.value});
	}

	getPassword = e => {
		this.setState({password: e.target.value});
	}

	handleValidation = () => {
		if (this.props.isLoginValid) {
			return (
				<div 
					className="center-display"
					style={{color: 'red'}}>Invalid user Credentials</div>
			);
		}
	}
	render() {
		const { email, password } = this.state;
		const isDataValid = email.length > 0 && password.length > 0 ? true : false;
		const buttonStyle = !isDataValid ? {background: '#D3D3D3'} : {background: 'white'} ;
		const buttonClass = isDataValid ? 'grow' : null; 
		return (
			<article className="br3 shadow-2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
				<main className="pa4 black-80 center-display">
					<div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					        <legend className="f2 center fw6 ph0 mh0">Sign In</legend>
					        <div className="mt3">
					            <label className="db fw6 lh-copy center f6" htmlFor="email-address">Email</label>
					            <input 
					            	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					            	type="email"
					            	name="email-address"
					            	onBlur={e => {console.log(ValidateEmail(e.target.value));}}
					            	onChange={e => this.getEmail(e)}
					            	value={this.state.email}
					            	id="email-address"/>
					        </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy center f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
					        	type="password"
					        	name="password"
					        	onChange={e => this.getPassword(e)}
					            value={this.state.password}
					        	id="password" />
					      </div>
					    </fieldset>
					    <div className="center-display">
					      <input 
					      	className={`b ph3 pv2 button-disabled ${buttonClass} input-reset ba center b--black bg-transparent  pointer f6 dib`}
					      	style={buttonStyle}
					      	type="submit" 
					      	value="Sign in"
					      	disabled={!isDataValid}
					      	onClick={() => this.onClick()}/>
					    </div>
					  </div>
				</main>
				{this.handleValidation()}
			</article>
		);
	}
}
const mapStateToProps = state => {
	return {
		isLoginValid: state.login && state.login.isValid && state.login.isValid.invalidCredentials
	}
}

export default connect(mapStateToProps, {
	login
})(SignIn);