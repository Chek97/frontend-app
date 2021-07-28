import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Avatar,
    Button,
    TextField,
    Typography,
    Container
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../styles/styles';
import { useForm } from '../hooks/useForm';
import { Create } from '@material-ui/icons';
import { removeError, setError } from '../actions/ui';
import { startAddApiPost, startUpdateApiPost } from '../actions/post';

export const PostForm = ({location}) => {

    const { action } = useParams();
    const { id, title: titleValue, body: bodyValue } = location?.state || '';
    const classes = useStyles();
    const { error, loading, message } = useSelector(state => state.ui);
    const { uid } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        title: titleValue,
        body: bodyValue
    });
    const history = useHistory();

    const { title, body } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()){
            if(action === 'post'){
                dispatch(startAddApiPost({
                    title,
                    body,
                    user_uuid: uid
                }));
            }else{
                dispatch(startUpdateApiPost({
                    id,
                    title,
                    body
                }));
            }
        }
    }

    const handleBack = () => history.goBack();

    const isFormValid = () => {
        if(title.trim().length === 0){
            dispatch(setError('El titulo es requerido'));
            return false;
        }else if(body.trim().length < 5){
            dispatch(setError('El contenido debe tener mas de 3 palabras'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

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
                    {
                        action === 'post'
                        ?
                        'Crear Post'
                        :
                        'Actualizar Post'
                    }
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        id="title"
                        label="Titulo"
                        name="title"
                        value={title}
                        autoComplete="title"
                        onChange={handleInputChange}
                        autoFocus
                        className="inputText"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        color="secondary"
                        rows={10}
                        name="body"
                        defaultValue={body}
                        variant="outlined"
                        onChange={handleInputChange}
                        autoComplete="body"
                        className="inputText"
                        style={{width: '100%'}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        {
                            action === 'post'
                            ?
                            'Crear'
                            :
                            'Actualizar'
                        }
                    </Button>
                    <Button variant="contained" color="secondary" style={{width: '100%'}} onClick={handleBack}>Volver</Button>
                </form>
            </div>
        </Container>
    )
}
