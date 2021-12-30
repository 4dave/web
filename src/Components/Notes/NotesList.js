import Note from "./Note"
import AddNote from "./AddNote"
import { Row, Col } from "react-bootstrap"

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div>
      <Row
        xs={1}
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        {notes.map((note) => (
          <Col sm="auto" key={note.id}>
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          </Col>
        ))}
      </Row>
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList

// prev:

// return (
//   <div>
//     {notes.map((note) => (
//       <Note
//         key={note.id}
//         id={note.id}
//         text={note.text}
//         date={note.date}
//         handleDeleteNote={handleDeleteNote}
//       />
//     ))}
//     <AddNote handleAddNote={handleAddNote} />
//   </div>
// )
