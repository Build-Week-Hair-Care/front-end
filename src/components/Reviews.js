import React, { useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const Reviews = props => {
  const [reviews, setReviews] = React.useState([]);

  // console.log(axiosWithAuth.dog);
  const id = localStorage.getItem("s-id");
  React.useEffect(() => {
    axiosWithAuth()
      .get(`https://haircarebackend.herokuapp.com/api/reviews/stylist/${id}`)
      .then(res => {
        setReviews(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      Reviews
      {reviews.map(r => {
        return (
          <div className="stylist-card">
            <img src={r.photos} classname="image" />
            <p>Review Text: {r.review_text}</p>
            {/* <button onClick={() => getReview(style.id)}>Reviews</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
