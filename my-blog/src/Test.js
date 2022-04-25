import React, { useEffect, useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
const Test = () => {
  return (
    <div>
      <center>
        <h1>Learn with Anarul</h1>
        <small>Mohammad Anarul Islam</small>
      </center>
      <Profile />
    </div>
  );
};

const Profile = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log("Mounting...");
  }, []);
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {users.map((user, index) => (
              <ListGroup.Item>
                {" "}
                id: {user.id} username: {user.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default Test;
