import { Card, Badge } from "react-bootstrap";

const Tags = (props) => {
  const { tags, title } = props;
  return (
    <div className="mt-3">
      <Card className="p-2">
        <div>
          {tags.map((tag, index) => (
            <Badge bg="primary" key={index} className="m-1">
              {tag.name}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Tags;
