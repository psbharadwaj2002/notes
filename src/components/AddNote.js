// AddNote.js
import React, { useState } from "react";
import { useNotes } from "./NotesContext";
import "../styles/addnote/addnote.css";

function AddNote() {
  const { data, setData } = useNotes();
  let [title, setTitle] = useState("");
  let [note, setNote] = useState("");

  const handleSubmit = (e) => {
    if (title.trim() && note.trim()) {
      setData([...data, { title, note }]);
    }

    setTitle("");
    setNote("");

    e.preventDefault();
  };

  return (
    <div className="addnote">
      <h1>Add a Note</h1>
      <form>
        <div id="title_container">
          <input
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name="title"
            id="title"
            placeholder="Title"
          />
        </div>

        <div id="content_container">
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            name="note"
            id="note"
            placeholder="Take a Note..."
          />
        </div>

        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  );
}

export default AddNote;
