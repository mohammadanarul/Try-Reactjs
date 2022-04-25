import { Card, ListGroup } from "react-bootstrap";
const FeturedCard = (props) => {
  const { items, title } = props;
  return (
    <div>
      <Card className="mb-3">
        <Card.Header>{title}</Card.Header>
        <ListGroup variant="flush">
          {items.map((obj, indx) => (
            <ListGroup.Item key={indx}>{obj.title}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default FeturedCard;
