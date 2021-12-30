import { MdDeleteForever, MdEdit } from "react-icons/md"
import { Container, Card, CardGroup } from "react-bootstrap"

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <>
      <Container fluid="sm">
        <CardGroup>
          <Card
            style={{
              width: "20rem",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.444)",
              minHeight: "10rem",
            }}
          >
            <Card.Body>
              <Card.Title>
                <h3>{text}</h3>
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{date}</small>
              <span
                style={{
                  float: "right",
                  cursor: "pointer",
                }}
              >
                &nbsp; <MdEdit />
              </span>
              <span
                style={{
                  float: "right",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteNote(id)}
              >
                &nbsp; <MdDeleteForever />
              </span>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
      <br />
    </>
  )
}

export default Note
