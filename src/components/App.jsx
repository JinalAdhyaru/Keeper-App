import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "../notes";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
        //console.log(notes);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return ( 
        <div>
            <Header />
            {/* {notes.map((note) =>  <Note 
                key = {note.id}
                title = {note.title}
                content = {note.content}
            />) } */}
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem,index) => {
                return <Note 
                    key={index} 
                    id={index} 
                    title={noteItem.title} 
                    content={noteItem.content}
                    onDelete = {deleteNote}
                />
            })}
            {/* <Note key={1} id={1} title="Note title" content="Note content" />         */}
            <Footer />
        </div> 
    );  
}

export default App;