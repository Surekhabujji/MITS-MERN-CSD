import React, { useState } from 'react'

const Signup = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(user);
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSignup}>

        <label>Username :</label>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <br /><br />

        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <br /><br />

        <label>Password :</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter password"
          onChange={handleChange}
        />

        <br /><br />
        <button type="submit">Signup</button>

      </form>
    </div>
  )
}

export default Signup