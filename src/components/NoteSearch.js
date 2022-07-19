import {Container, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles(() => {
    return {
        textField: {
            width: '100%',
            marginTop: '120px',
            marginBottom: '20px',
        },
    }
})

export default function NoteSearch({ handleSearch, searchValue }) {

    const classes = useStyles();

    return (
        <Container>
            <form>
                <TextField
                    id="keyword"
                    label="Search Keyword"
                    variant="outlined"
                    color="primary"
                    value={searchValue}
                    className={classes.textField}
                    onChange={(e) => {handleSearch(e.target.value)}}
                />
            </form>
        </Container>
    )
}