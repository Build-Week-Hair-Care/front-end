import React, { useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { Card, Icon, Image, Input, Button } from "semantic-ui-react";

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
            <Card>
            {r.photos.split("").length > 0 && <Image src={r.photos} wrapped ui={false} />}
            <Card.Content>
              <Card.Header>Recent Review</Card.Header>
              <Card.Description>
                Review Left: {r.review_text}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='paper plane' />
                22 Views
              </a>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export default Reviews;