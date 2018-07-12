import React, {Component} from 'react';
class signUp extends Component {

	constructor() {
		super();
		this.state = {
			name:'',
			email:'',
			contact:'',
			password:'',
		
	};
 }
	
		handleSubmit = (e) => {
			e.preventDefault();
			localStorage.setItem('name', e.target.name.value);
			localStorage.setItem('email', e.target.email.value);
			localStorage.setItem('contact', e.target.contact.value);
			localStorage.setItem('password', e.target.password.value);

			alert('SignUp Successfully');

			this.props.history.push('/login');
           }
           	
	render() {
	  return (
	  	   <div>

                <form className="form" onSubmit={this.handleSubmit}>
                <div className="div2">
                <h2>SignUp Form</h2>
                
                Name:<br/>
                <input type='text' name='name' value= {this.state.value} required/><br/>

                Email:<br/>
                <input type='email' name='email' value= {this.state.value} required/><br/>

                Contact:<br/>
                <input type='numbers' name='contact' value= {this.state.value} required/><br/>

                Password:<br/>
                <input type='password' name='password' value= {this.state.value} required/><br/><br/>

                <button>Sign Up</button>
                </div>
                </form>

	  	    </div>
	  	 );

	}

}

  export default signUp;

