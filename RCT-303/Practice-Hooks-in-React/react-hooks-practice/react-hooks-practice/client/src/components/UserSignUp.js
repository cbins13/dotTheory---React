import React, { useState, useContext} from 'react';
import Context from '../Context';
import { Link, useHistory } from 'react-router-dom';
import Form from './Form';

const UserSignUp = () => {
  const context = useContext(Context.Context);
  let history = useHistory();
  const [name,setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name==='name'){
      setName(value);
    }else if(name==='username'){
      setUsername(value);
    }else if(name==='password'){
      setPassword(value);
    } else {
      return;
    }
  }

  const handleSubmit = () => {
    const user = {
      name,
      username,
      password,
    }

    context.data.createUser(user)
      .then( errors => {
        if (errors.length) {
          setErrors(errors);
        } else {
          context.actions.signIn(username, password)
            .then(() => {
              history.push('/authenticated')
            });
        }
      })
      .catch((err) => {
        console.log(err);
        history.push('/error')
      });
  
  }

  const handleCancel = () => {
   history.push('/');
  }

  return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <Form 
            cancel={handleCancel}
            errors={errors}
            submit={handleSubmit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                <input 
                  id="name" 
                  name="name" 
                  type="text"
                  value={name} 
                  onChange={handleChange} 
                  placeholder="Name" />
                <input 
                  id="username" 
                  name="username" 
                  type="text"
                  value={username} 
                  onChange={handleChange} 
                  placeholder="User Name" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={handleChange} 
                  placeholder="Password" />
              </React.Fragment>
            )} />
          <p>
            Already have a user account? <Link to="/signin">Click here</Link> to sign in!
          </p>
        </div>
      </div>
    );
}

export default UserSignUp;