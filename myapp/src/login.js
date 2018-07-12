import React, {Component} from 'react';
class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:'',

	};
 }
	
		handleSubmit = (e) => {
			e.preventDefault();

		   if
			  ((e.target.email.value)===localStorage.getItem('email')
				&&(e.target.password.value)===localStorage.getItem('password'))
			{
				alert('Login Successfully');
				this.props.history.push('/beveragelist');
			}
			else{
				alert('Login details not matched!');
			}

	          }

	render() {
	  return (
             <div>

                <form className="form" onSubmit={this.handleSubmit}>
                <div className="div1">
                <h2>Login Form</h2>

                Email:<br/>
                <input type='email' name='email' value= {this.state.value} required /><br/>

                Password:<br/>
                <input type='password' name='password' value={this.state.value} required/><br/><br/>

                <button>Login</button><br/>

                </div>
                </form>
             </div>
			 );
	      }

	}

  export default login;