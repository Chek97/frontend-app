import React from 'react'
import {
    Avatar,
    Button,
    TextField,
    Typography,
    Container
} from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { useStyles } from '../styles/styles';
import { Create } from '@material-ui/icons';
import { startUpdatePost } from '../actions/post';
import { useHistory } from 'react-router-dom';

export const UpdateForm = ({location}) => {

    const classes = useStyles();
    const {id, title, body, uid} = location.state;
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, loading, message } = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        title,
        body
    });

    const {title: formTitle, body: formBody} = formValues;
    const handleSubmit = (e) => {
        dispatch(startUpdatePost({
            id,
            title: formTitle,
            body: formBody,
            uid
        }));
    }

    const handleBack = () => history.goBack();

    return (
        <Container component="div" maxWidth="xs" className={classes.formContainer}>
            <div className={classes.paper}>
                {
                    error
                    &&
                    <Alert severity="error">{error}</Alert>
                }
                {
                    message !== ''
                    &&
                    <Alert severity="success">{message}</Alert>
                }
                <Avatar className={classes.avatar}>
                    <Create />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Actualizar Post
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Titulo"
                        name="title"
                        value={formTitle}
                        autoComplete="title"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={10}
                        name="body"
                        defaultValue={formBody}
                        variant="outlined"
                        onChange={handleInputChange}
                        autoComplete="body"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        Actualizar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleBack}>Volver</Button>
                </form>
            </div>
        </Container>
    )
}
