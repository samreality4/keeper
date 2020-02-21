import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addCard(e, inputValues) {
    setNotes(preVal => {
      return [...preVal, inputValues];
    });
    e.preventDefault();
  };

  function deleteCard(id) {
    setNotes(preVal => {
        console.log(preVal);
      return preVal.filter((note, index) => 
         index !== id)

    });

  };

  return (
    <div>
      <Header />
      <CreateArea addCard={addCard} />
      {notes.map((note, index) => {
       
        return <Note id={index} title={note.title} content={note.content} deleteCard={deleteCard}/>;
      })}

      <Footer />
    </div>
  );
}

export default App;
