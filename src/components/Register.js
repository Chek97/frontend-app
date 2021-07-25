import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { startRegister } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { useStyles } from '../styles/styles';
import validator from 'validator';

export const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
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
            setError(true);
            return false;
        }else if(!validator.isEmail(email)){
            setError(true);
            return false;
        }else if(password.length < 5){
            setError(true);
            return false;
        }

        return true;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {
                    error
                    &&
                    <Alert severity="error">No fue posible registrar el usuario</Alert>
                }
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Nuevo Usuario
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electronico"
                        name="email"
                        value={email}
                        autoComplete="email"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nombre"
                        name="name"
                        value={name}
                        autoComplete="name"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        value={lastName}
                        autoComplete="lastName"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={password}
                        label="Contraseña"
                        type="password"
                        id="password"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        REGISTRAR
                    </Button>
                </form>
            </div>
        </Container>
    )
}
