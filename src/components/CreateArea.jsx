import React, {useState} from "react";


function CreateArea(props) {

const [note, setNote] = useState({
  id: "",
  title: "",
  content: ""
});

function onChange(event) {
const value = event.target.value;
const name = event.target.name;
  
//add in the previous object values and change the value base on the name received from the event.
setNote(preVal => {

    return {...preVal ,
    [name] : value}

  });
};

  return (
    <div>
      <form>
        <input 
        onChange = {onChange}
        name="title" placeholder="Title" value={note.title}/>
        <textarea 
        onChange = {onChange}
        name="content" placeholder="Take a note..." rows="3" value= {note.content}/>
        <button 
        onClick={(e)=>props.addCard(e, note)}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
