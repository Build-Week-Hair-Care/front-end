import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { Button, Card, Image } from 'semantic-ui-react'

const UserProfile = props => {
  console.log(props);
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
  const handleDelete = () => {
    console.log("delete");
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
  };

  useEffect(() => {
    // let id = 1;
    let id = localStorage.getItem("id");
    console.log(id);

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
  console.log(user);
  return (
    <Card.Group
          itemsPerRow="two">  
          <Card 
            className="trip-card"
            style={cardStyle}>

      <Card.Content>  
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>{user.location}</Card.Meta>
        <Card.Meta>{user.specialty}</Card.Meta>
        <Card.Meta>{user.email_address}</Card.Meta>
        <Card.Description>{user.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='trip-btn-container'>
            <Button
              floated="right"
              className="btn add-btn"
              icon="add"
              labelPosition="right"
              content="Add Trip"
              onClick={() => handleDelete()}>DELETE THIS ACCOUNT
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>// Tyler Quinn was here
  );// Or was he??
};

const cardStyle = {
  width: '600px',
  height: '300px',
  margin: '20px auto',
  border: '1px solid gray',
  borderRadius: '3px',
  boxShadow: '2px 2px lightgray'
}

export default UserProfile;
