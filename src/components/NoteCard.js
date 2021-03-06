import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export default function NoteCard({ note, handleDelete }) {
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={
                        <Typography variant="h5" color="primary">
                            {note.title}
                        </Typography>
                    }
                    subheader={note.date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        { note.description }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}