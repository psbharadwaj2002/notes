// DisplayNote.js
import React, { useEffect, useState } from "react";
import { useNotes } from "./NotesContext";
import "../styles/displaynote/displaynote.css";

function DisplayNote() {
  const { data } = useNotes();
  const [displayData, setDisplaydata] = useState([]);

  useEffect(() => {
    setDisplaydata(data);
  }, [data]);

  return (
    <div className="margin">
      <h4>My Notes</h4>
      <div className="displayNote">
        {displayData.map((item, index) => {
          return (
            <div key={index} className="data">
              <div className="title">{item.title}</div>
              <div>{item.note}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayNote;
