import React from 'react';

class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: []};
	}
	
	componentDidMount() {
		fetch('http://localhost:3000', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				body: 'New body added. Hello body.',
				userId: 2
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});
	}
	render() {                            
		return (
			<div>
				<p><b>New Resource created in the server as shown below</b></p>
				<p>Id : {this.state.user.id}</p>
				<p>Title : {this.state.user.title}</p>
				<p>Body : {this.state.user.body}</p>
				<p>UserId : {this.state.user.userId}</p>
			</div>
		)
	}
}

export default RestController;