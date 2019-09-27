import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const SearchPage = props => {
  let [search, setSearch] = useState("");
  let [stylists, setStylists] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
    .get(
      `https://haircarebackend.herokuapp.com/api/stylists/location/${localStorage.getItem("search")}, CA`
    )
    .then(res => {
      console.log(res);
      setStylists(res.data);
      // localStorage.setItem('search', `${search}, CA`)
    })
    .catch(err => console.log(err));
  },[])

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
        localStorage.setItem('search', search)
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onSumbit}>
        <input
          onChange={onChange}
          type="text"
          name="search"
          placeholder="Search by Location"
          value={search}
        />
        <button>Search</button>
        {stylists.map(style => {
          return (
            <div className="stylist-card">
              <p>{style.name}</p>
              <p>{style.bio}</p>
              <p>{style.location}</p>
              <p>{style.email_address}</p>
              <p>{style.specialty}</p>
              <button onClick={() => getReview(style.id)}>Reviews</button>
            </div>
          );
        })}
      </form>
    </div>
  );
};
export default SearchPage;
