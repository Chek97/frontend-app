import React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Typography,
    Container
} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { useStyles } from '../styles/styles';
import validator from 'validator';
import { removeError, setError } from '../actions/ui';

export const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { error, message, loading } = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        email: '',
        name: '',
        lastName: '',
        password: ''
    });

    const {email, name, lastName, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegister(email, name, lastName, password));
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            dispatch(setError('El nombre es requerido'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('El correo no es valido'));
            return false;
        }else if(password.length < 5){
            dispatch(setError('La contraseña debe tener minimo 6 caracteres'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <Container component="div" maxWidth="xs" className={classes.formContainer}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Nuevo Usuario
                </Typography>
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
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electronico"
                        name="email"
                        value={email}
                        autoComplete="email"
                        onChange={handleInputChange}
                        autoFocus
                        className="inputText"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        id="name"
                        label="Nombre"
                        name="name"
                        value={name}
                        autoComplete="name"
                        onChange={handleInputChange}
                        autoFocus
                        className="inputText"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        value={lastName}
                        autoComplete="lastName"
                        onChange={handleInputChange}
                        autoFocus
                        className="inputText"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        name="password"
                        value={password}
                        label="Contraseña"
                        type="password"
                        id="password"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                        className="inputText"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        REGISTRAR
                    </Button>
                </form>
            </div>
        </Container>
    )
}
