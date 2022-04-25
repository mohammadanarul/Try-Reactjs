import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {post.category}
            </Card.Subtitle>
            <Card.Text>{post.description}</Card.Text>
            <div>
              {post.tags.map((tag, tindx) => (
                <Badge bg="primary" key={tindx} className="m-1">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="d-flex justify-content-between justify-items-center">
              <Link to={`posts/${post.slug}`}>More</Link>
              {/* <Button
                    variant="success"
                    onClick={() => clickHandle(post.slug)}
                  >
                    More
                    <i className="bi bi-arrow-right" width="30" height="20"></i>
                  </Button> */}
              <span>author by {post.user}</span>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Post;
