
import { useState } from 'react';

function Form() {

  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState([]);

  const submitHandler = (e) => {
        e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { username, password } = Object.fromEntries(formData);

    console.log(username);
    console.log(password);
  }

  const onChange = (e) => {
    setUsername(e.target.value)

    if (username.length < 3) {
      console.error('Too short')
      setIsValid(false)
    }else {
      setIsValid(true)
    }



  }

  const onServiceChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Welcome to form component</h1>
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username </label>
          <input type="text" name="username" id="username" onChange={onChange}  placeholder="ex. Name..." onBlur={onServiceChange}></input>
          {!isValid && <div style={{ color: 'red' }}>It's not a valid type!</div>}
        </div>
        <div>
          <label htmlFor="paswword">Password    </label>
          <input type="password" name="password" id="password" placeholder="ex. ***..." />
        </div>
        <div>
          <label htmlFor="services">Services</label>
          <label htmlFor="services">Services</label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;