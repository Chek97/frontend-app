//IMPORTS
import React from 'react';
import {
    Avatar,
    Button,
    TextField,
    Link,
    Grid,
    Typography,
    Container,
    Box
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import validator from 'validator';
import { Alert } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux';
import { startFacebookLogin, startGoogleLogin, startLogin } from '../actions/auth';
import { useForm } from '../hooks/useForm';
import { useStyles } from '../styles/styles';
import { useHistory } from 'react-router-dom';
import { removeError, setError } from '../actions/ui';

export const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, loading } = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const {email, password} = formValues;

    const submitGoogle = async() => {
        await dispatch(startGoogleLogin());
        history.push('/list');
    }

    const submitFacebook = async() => {
        await dispatch(startFacebookLogin());
        history.push('/list');
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(isFormValid()){
            await dispatch(startLogin(email, password));
            history.push('/list');
        }
    }

    const isFormValid = () => {
        if(!validator.isEmail(email)){
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
            <div className={classes.paper}>
                {
                    error
                    &&
                    <Alert severity="error">{error}</Alert>
                }
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        className='inputText'
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
                        Acceder
                    </Button>
                    <div className="social-btn btn-google" onClick={submitGoogle}>
                        <div className="social-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <strong>Sign in with google</strong>
                        </p>
                    </div>
                    <div className="social-btn btn-facebook" onClick={submitFacebook}>
                        <div className="social-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <strong style={{color: '#fff'}}>Sign in with facebook</strong>
                        </p>
                    </div>
                    <Box component="div" className="register-link">
                        <Link href="/register" variant="body2" color="secondary">
                            {"No tienes una cuenta? registrate aqui"}
                        </Link>
                    </Box>
                    <Grid container>
                        <Grid item>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
