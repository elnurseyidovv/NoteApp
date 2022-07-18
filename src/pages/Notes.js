import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'
import NoteSearch from '../components/NoteSearch'

export default function Notes() {
    const [notesList, setNotesList] = useState([]);
    const [notesDisplay, setNotesDisplay] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/notes')
            .then(res => res.json())
            .then(data => {setNotesList(data); setNotesDisplay(data);})
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8080/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = notesList.filter(note => note.id !== id);
        setNotesList(newNotes);
        setNotesDisplay(notesList);
    }

    const handleSearch = async (searchText) => {
        setNotesDisplay(notesList);
        const newNotes = notesList.filter
            (note => (note.description.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase())));
        setNotesDisplay(newNotes);
    }

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <Container>
            <NoteSearch
                handleSearch={handleSearch}
            />
            <Masonry
                style={{marginTop: '40px'}}
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {notesDisplay.map(note => (
                    <div key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}