import React from "react";

function Layout(props) {
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
                  <Button
                    variant="success"
                    onClick={() => clickHandle(post.id)}
                  >
                    More
                    {/* <i className="bi bi-arrow-right" width="30" height="20"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-right ms-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </Button>
                  <span>author by {post.user}</span>
                </div>
              </Card.Body>
            </Card>
          ))}
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

export default Layout;
