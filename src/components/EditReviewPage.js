import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const EditReviewPage = props => {
  const [user, setUser] = useState({
    customers_id: "",
    stylist_id: "",
    review_text: "",
    photos: "",
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
      .put(`https://haircarebackend.herokuapp.com/api/reviews/${id}`, user)
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
      .delete(`https://haircarebackend.herokuapp.com//api/reviews/${id}`)
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
      .get(`https://haircarebackend.herokuapp.com/api/reviews/${id}`)
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
        placeholder="customer id"
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
     
      />
      <button>Submitto</button>
      </form>
      <button onClick={()=>handleDelete()}>DELETE THIS ACCOUNT</button>
    </div>
  );
};

export default EditReviewPage;
