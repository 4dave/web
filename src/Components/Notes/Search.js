import React from "react"
// import { MdSearch } from "react-icons/md"
import { Container, Col, Row, FormControl, Form } from "react-bootstrap"

const Search = ({ handleSearchNote }) => {
  return (
    <>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="type to search..."
                className="me-2"
                aria-label="Search"
                onChange={(e) => handleSearchNote(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  )
}

export default Search
