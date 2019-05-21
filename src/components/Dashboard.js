import React from 'react';
import { fetchDashBoardData, signOut } from '../actions';
import { connect } from 'react-redux';
import tachyons from 'tachyons';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.fetchDashBoardData();
	}

	renderUserList = data => {
		return data && data.length > 0 && data.map(user => {
			return (
				<div className='item' key={user.id}>
					<i className="midle aligned large icon user" />
					<div className="content">
					<div className="header f3 pb2">{user.name}</div>
					<div className="description">
						<span><strong>Gender: </strong> {user.gender}</span>
						<br />
						<span><strong>Age: </strong> {user.age}</span>
						<br />
						<span><strong>Email: </strong> {user.email}</span>
						<br />
						<span><strong>Contact: </strong> {user.phoneNo}</span>
					</div>
					</div>
				</div>
			)
		});
	}

	render() {
		const data = this.props.data ? this.props.data.user : [];
		return (
			<div>
				<h2 className="center-display"> DashBoard </h2>
				<div className="ui celled list">
					{this.renderUserList(data)}
				</div>
				<div className="">
					<button 
						class="ui pt5 button center-display"
						onClick={() => this.props.signOut({})}>
					  Sign Out
					</button>
				</div>
			</div>		
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state.dashboardData.data
	}
}
export default connect(mapStateToProps, {
	fetchDashBoardData,
	signOut
})(Dashboard);