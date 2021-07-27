import React, { useEffect } from 'react';
import {Container, List, Typography} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { startFavoritePost, startGetPosts } from '../actions/post';
import { useStyles } from '../styles/styles';
import { PostListItem } from './PostListItem';
import {Alert} from '@material-ui/lab';
import { FavoriteListItem } from './FavoriteListItem';

export const MainList = () => {

    const { posts, favorites } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const {message, error} = useSelector(state => state.ui);
    const {uid} = useSelector(state => state.auth);
    const classes = useStyles();

    useEffect(() => {
        dispatch(startGetPosts());
        dispatch(startFavoritePost(uid));
    }, []);

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
            <Typography variant="h1" className={classes.primaryText}>
                Lista de Posts
            </Typography>
            <List dense={true} component="ul" className={classes.lists}>
                    {
                        posts.map((post) => (
                            <PostListItem key={post.id} post={post} />
                        ))
                    }
            </List>
            <h2>Lista de Favoritos</h2>
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
