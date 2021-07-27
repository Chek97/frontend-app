import React from 'react';
import { 
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemSecondaryAction, 
    ListItemText
} from '@material-ui/core';
import { ArtTrack, Create, Delete, Star } from '@material-ui/icons';
import { useStyles } from '../styles/styles';
import { useDispatch } from 'react-redux';
import { newPost } from '../actions/post';

export const PostListItem = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleAddFavorite = (e, title, body) => {
        e.preventDefault();
        dispatch(newPost(title, body));
    }

    return (
        <ListItem key={post.id} className={classes.listPostItem}>
            <ListItemIcon>
                <ArtTrack className={classes.icon} />
            </ListItemIcon>
            <ListItemText style={{ color: '#ffff' }} primary={post.title} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="favorites" onClick={(e) => handleAddFavorite(e, post.title, post.body)}>
                    <Star className={`fav-icon ${classes.icon}`} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
