import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const UserProfile = props => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    location: "",
    specialty: "",
    bio: "",
    email_address: "",
  });

  const handleChange = e => {
    console.log("handle");
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    let id = localStorage.getItem("id");
    e.preventDefault();
    console.log("submit");
    console.log(user);
    axiosWithAuth()
      .put(`https://haircarebackend.herokuapp.com/api/stylists/${id}`, user)
      .then(res => {
        console.log(res);
        alert("update successful");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleDelete = () =>{
      console.log('delete');
      let id = localStorage.getItem("id");

      axiosWithAuth()
      .delete(`https://haircarebackend.herokuapp.com/api/stylists/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        // localStorage.setItem('token', "");
        // props.history.push('/login')
      })
      .catch(err => {
        console.log(err);
      });

  }

  useState(() => {
    // let id = 1;
    let id = localStorage.getItem("id");

    axiosWithAuth()
      .get(`https://haircarebackend.herokuapp.com/api/stylists/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      awef
      <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        placeholder="username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        placeholder="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        placeholder="location"
        name="location"
        value={user.location}
        onChange={handleChange}
      />
      <input
        placeholder="specialty"
        name="specialty"
        value={user.specialty}
        onChange={handleChange}
      />
      <input
        placeholder="bio"
        name="bio"
        value={user.bio}
        onChange={handleChange}
      />
      <input
        placeholder="email address"
        name="email_address"
        value={user.email_address}
        onChange={handleChange}
      />
      <button>Submitto</button>
      </form>
      <button onClick={()=>handleDelete()}>DELETE THIS ACCOUNT</button>
    </div>
  );
};

export default UserProfile;
