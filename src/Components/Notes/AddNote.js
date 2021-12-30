import { useState } from "react"
import { Container, Col, Row, Form, FormControl, Button } from "react-bootstrap"

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("")
  const characterLimit = 200

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value.toLowerCase())
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText("")
    }
  }

  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Type to add a note..."
                className="me-2"
                size="lg"
                aria-label="Add Note"
                onChange={handleChange}
                value={noteText}
              />
              <small>{characterLimit - noteText.length} Remaining</small>
            </Form>

            <br />
            <div className="d-grid gap-2">
              <Button variant="primary" size="md" onClick={handleSaveClick}>
                Save
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddNote
