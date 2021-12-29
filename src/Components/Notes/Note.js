import { MdDeleteForever } from "react-icons/md"
import { Container, Col, Row, Card } from "react-bootstrap"

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>{text}</h3>
                </Card.Title>
                <Card.Text>
                  <p>{date}</p>
                </Card.Text>
                <Card.Link href="#" onClick={() => handleDeleteNote(id)}>
                  <MdDeleteForever />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  )
}

export default Note
