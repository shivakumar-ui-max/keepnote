import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const AdditionalNotes = (props) => {

     const deleteNote = () => {
          props.deleteItem(props.id);
     }
     return (

          <div className="card">
               <div className="flex-card">
                    <h3>{props.title}</h3>
                    <Button onClick={deleteNote}><DeleteIcon color='error' /></Button>
               </div>
               <p>{props.content} </p>
          </div>

     )
}
export default AdditionalNotes;