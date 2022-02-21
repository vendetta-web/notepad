import React from "react";
import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h2>Let's Note Something</h2>
      <div className="note-container_notes custom-scrollbar">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note key={item.id} note={item} deleteNote={props.deleteNote} 
            updatetext={props.updatetext} />
          ))
        ) : (
          <h3>No Notes Present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
