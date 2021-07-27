import React from 'react';
import { 
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemSecondaryAction, 
    ListItemText
} from '@material-ui/core';
import { ArtTrack, Create, Delete } from '@material-ui/icons';
import { useStyles } from '../styles/styles';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startDeletePost } from '../actions/post';

export const FavoriteListItem = ({fav}) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleUpdate = (e, post) => {
        e.preventDefault();
        history.push('/updatePost', post);
    } 

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(startDeletePost(id));
    }

    return (
        <ListItem key={fav.id} className={classes.listPostItem}>
            <ListItemIcon>
                <ArtTrack className={classes.icon} />
            </ListItemIcon>
            <ListItemText style={{ color: '#ffff' }} primary={fav.title} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="updated" onClick={(e) => handleUpdate(e, fav)}>
                    <Create className="update-icon" />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={(e) => handleDelete(e, fav.id)}>
                    <Delete className="delete-icon" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
