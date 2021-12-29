import React from "react"
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import NotesList from "./NotesList"
import Search from "./Search"
// import {} from "react-bootstrap"
// import "./notes.css"

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "12/01/2021",
    },
    {
      id: nanoid(),
      text: "feel free to delete these and create your own!",
      date: "12/02/2021",
    },
    {
      id: nanoid(),
      text: "notes are saved to your device",
      date: "12/03/2021",
    },
    {
      id: nanoid(),
      text: 'these aren\'t saved on a server or viewable by others, they are just "local" to your phone or pc',
      date: "12/04/2021",
    },
  ])

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("davesweb-notes"))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("davesweb-notes", JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="page-container">
      <h1>Notes</h1>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}
