import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const SingleBlog = () => {
  let params = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posts/${params.slug}`)
      .then((response) => setPost(response.data));
  }, []);
  return (
    <Container className="mt-5">
      <Row>
        <Col md="8" className="m-auto">
          <Card>
            <h3 className="text-center">{post.title}</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBlog;
