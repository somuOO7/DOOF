import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { ReactComponent as LoginImage } from '../assets/loginImage.svg';

import './LoginPage.css';

function LoginPage() {
	return (
		<div className='loginPage'>
			<div className='loginPage__input'>
				<div className='inputHeader'>
					<h1>DOOF</h1>
				</div>

				<div className='inputBody'>
					<h4>Login</h4>
					<TextField label='Email' variant='outlined' type='email' />
					<div className='inputBody__password'>
						<TextField label='Password' variant='outlined' />
						<p>Forgot Password</p>
					</div>
					<Button variant='contained'>Login</Button>

					<p>
						Don't have an account yet? <strong>Signup</strong>
					</p>
				</div>
				<div className='inputFooter'>
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
				</div>
			</div>

			<div className='loginImage'>
				<div className='loginImage__circle' />
				<Button variant='contained'>Test</Button>

				<h2>Unlock your stuck revenue.</h2>
				<p>
					We help you unlock the true potential connect with your
					customers to
				</p>
				<p>understand the rights and wrongs with your product.</p>

				<LoginImage style={{ width: '100%' }} />
			</div>
		</div>
	);
}

export default LoginPage;
