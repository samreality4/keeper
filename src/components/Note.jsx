import React from "react";



function Note(props) {
  return (
    <div className="note" key={props.id}>

<h1>{props.title}</h1>
  <p>{props.content}</p>
  {console.log(props.id)}
  <button
  onClick = {()=> props.deleteCard(props.id)}
 
  >Delete</button>
    </div>
  )
}

export default Note;
