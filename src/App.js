import React, { useState } from 'react';
import Header from './Components/Header';
import Note from './Components/Note';
import AdditionalNotes from './Components/AdditionalNotes';


const App = () => {

  const [addItem, setAddItem] = useState([]);
  // console.log(addItem);


  const addNote = (name) => {
    setAddItem((prevData) => { return [...prevData, name]; }
    )

  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((curr, index) => {
        return index !== id;
      })
    )
  }



  return (
    <><Header />
      <Note passNote={addNote} />
      <div className="div">
        {
          addItem.map((currval, index) => {
            // console.log(currval);
            return <AdditionalNotes
              key={index}
              id={index}
              title={currval.title}
              content={currval.content}
              deleteItem={onDelete}
            />
          })
        }
      </div>
    </>
  )
}
export default App;