import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import axios from "axios";
import FeturedCard from "../components/cards/FeturedCard";
import Tags from "../components/cards/Tags";
import Post from "../components/cards/Post";
// import { Link } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/")
      .then((response) => setPosts(response.data));
  }, []);

  // const clickHandle = async (slug) => {
  //   console.log(`click me ${slug}`);
  // };

  return (
    <Container className="mt-5">
      <div className="d-flex mb-3">
        <h4>Blog Post</h4>
        {/* <Button variant="primary" className="ms-3" size="sm">
          Add Post
        </Button> */}
        <div>
          <Button variant="primary" className="ms-3">
            Add Post
          </Button>
        </div>
      </div>
      <Row>
        <Col md="8">
          <Post posts={posts} />
        </Col>

        <Col md="4" className="pt-2">
          {/* category component */}
          <FeturedCard items={posts} title={"Recent Post"} />
          <FeturedCard items={posts} title={"Category"} />
          <Tags tags={posts} title={"Popular tags"} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
