import React, { useEffect } from 'react';
import {colors, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from '@material-ui/core';
import {ArtTrack, Star} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import { startGetPosts } from '../actions/post';
import { useStyles } from '../styles/styles';

export const MainList = () => {

    const { posts } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(startGetPosts());
    }, []);

    return (
        <div style={{color: '#ffff'}}>
            <h1>Lista de Posts</h1>
            <List dense={true} component="ul" className={classes.lists}>
                    {
                        posts.map( (post) => (
                            <ListItem key={post.id} className={classes.listPostItem}>
                                <ListItemIcon>
                                    <ArtTrack className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText style={{color: '#ffff'}} primary={post.title} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="favorites">
                                        <Star className={classes.icon} />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }
            </List>
            <div>
                <h2>Lista de Favoritos</h2>
                <List dense={true} component="ul" className={classes.lists}>
                    <small>No hay favoritos aun</small>
                </List>
            </div>
        </div>
    )
}
