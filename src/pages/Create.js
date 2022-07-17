import React, {useState} from 'react'
import {Button, Container, makeStyles, TextField, Typography} from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => {
    return {
        textField: {
            width: '100%',
            marginTop: '20px',
            marginBottom: '20px',
        },
        container: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        form: {
            borderStyle: 'groove',
            padding: theme.spacing(3),
            backgroundColor: 'white'
        }
    }
})

export default function Create() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const history = useHistory();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(title === '');
        setDescriptionError(description === '');

        if (title && description) {
            fetch('http://localhost:8080/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, description })
            }).then(() => history.push('/'))
        }
    }

    return (
        <Container size='sm' className={classes.container}>
            <form noValidate onSubmit={handleSubmit} className={classes.form}>
                <Typography
                    variant='h6'
                    color='textSecondary'
                    component='h2'
                    gutterBottom

                >
                    Create a New Note
                </Typography>
                <TextField
                    id="title"
                    label="Title"
                    variant="outlined"
                    className={classes.textField}
                    error={titleError}
                    required
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                    className={classes.textField}
                    error={descriptionError}
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}