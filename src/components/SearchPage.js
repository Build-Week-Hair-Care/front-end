import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { Card, Icon, Image, Input, Button } from "semantic-ui-react";

const SearchPage = props => {
  let [search, setSearch] = useState("");
  let [stylists, setStylists] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://haircarebackend.herokuapp.com/api/stylists/location/${localStorage.getItem(
          "search"
        )}, CA`
      )
      .then(res => {
        console.log(res);
        setStylists(res.data);
        // localStorage.setItem('search', `${search}, CA`)
      })
      .catch(err => console.log(err));
  }, []);

  let onChange = e => {
    setSearch(e.target.value);
  };
  const getReview = id => {
    console.log("get review");
    // /api/reviews/stylist/:stylist_id
    localStorage.setItem("s-id", id);
    props.history.push("/reviews");
  };
  let onSumbit = e => {
    console.log(search);
    e.preventDefault();
    console.log("Sumbitted");
    axiosWithAuth()
      .get(
        `https://haircarebackend.herokuapp.com/api/stylists/location/${search}, CA`
      )
      .then(res => {
        console.log(res);
        setStylists(res.data);
        localStorage.setItem("search", search);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onSumbit}>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Search by location..."
          onChange={onChange}
          type="text"
          name="search"
          // placeholder="Search by Location"
          value={search}
        />
        <Button primary>Search</Button>
        <Card.Group>
          {stylists.map(style => {
            return (
              <Card>
                <Image
                  src={`https://picsum.photos/200/300?random=${style.id}`}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{style.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">{style.location}</span>
                  </Card.Meta>
                  <Card.Description>{style.bio}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="#" onClick={() => getReview(style.id)}>
                    <Icon name="hand scissors outline" />
                    {style.specialty}
                  </a>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </form>
    </div>
  );
};
export default SearchPage;

{
  /* <div className="stylist-card">
              <p>{style.name}</p>
              <p>{style.bio}</p>
              <p>{style.location}</p>
              <p>{style.email_address}</p>
              <p>{style.specialty}</p>
              <button onClick={() => getReview(style.id)}>Reviews</button>
            </div> */
}
