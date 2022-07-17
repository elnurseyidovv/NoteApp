import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NoteCard from '../components/NoteCard'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => {
    return {
        cardsField: {
            marginTop: '80px',
        },
    }
})

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch('http://localhost:8080/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8080/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
    }

    return (
        <Container>
            <Grid container spacing={3} className={classes.cardsField}>
                {notes.map(note => (
                    <Grid item xs={12} md={6} lg={4} key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}