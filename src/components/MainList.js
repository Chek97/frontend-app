//IMPORTS
import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Container, List, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { startFavoritePost, startGetPosts } from '../actions/post';
import { useStyles } from '../styles/styles';
import { PostListItem } from './PostListItem';
import { Alert } from '@material-ui/lab';
import { FavoriteListItem } from './FavoriteListItem';
import { useHistory } from 'react-router-dom';

export const MainList = () => {

    const { posts, favorites } = useSelector(state => state.post);
    const [check, setCheck] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();
    const { message, error } = useSelector(state => state.ui);
    const { uid } = useSelector(state => state.auth);
    const classes = useStyles();

    useEffect(() => {
        dispatch(startGetPosts(uid));
        dispatch(startFavoritePost(uid));
        if(posts.length > 0){
            setCheck(false);
        }
    }, [dispatch, uid, posts.length]);

    const handlePost = () => {
        history.push('/api/formData/post');
    }

    return (
        <Container component="div" maxWidth="xs" className={classes.formContainer}>
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
            <Box component="div" className="post-button">
                <Button className="add-button" onClick={handlePost}>Crear Post</Button>
            </Box>
            <Typography variant="h1" className={classes.primaryText}>
                Lista de Posts
            </Typography>
            <List dense={true} component="ul" className={classes.lists}>
                    {
                       check
                        &&
                        <div className="progress-post">
                        </div>
                    }   
                    {
                        posts.map((post) => (
                            <PostListItem key={post.id} post={post} />
                        ))
                    }
            </List>
            <Typography variant="h1" className={classes.primaryText}>Lista de Favoritos</Typography>
            <List dense={true} component="ul" className={classes.lists}>
                {
                    favorites.length === 0
                    ?
                    <Alert severity="info">No hay favoritos</Alert>
                    :
                    favorites.map((fav) => (
                       <FavoriteListItem key={fav.id} fav={fav} /> 
                    ))
                }
            </List>
        </Container>
    )
}
