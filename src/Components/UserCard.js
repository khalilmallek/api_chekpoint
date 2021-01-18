import React from "react";
import { Card, Button } from "react-bootstrap";

const UserCard = ({user}) => {
  return (
    <div className = 'col-md-4 mt-3' >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{`@${user.username}`}</Card.Text>
          <Card.Text>{user.address.city}</Card.Text>
          <Button variant="primary">User Profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
