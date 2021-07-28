import React from 'react';
import { 
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Typography
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
        <ListItem key={fav.id} className='list-posts-item'>
            <ListItemIcon className="item-post-icon">
                <ArtTrack className={classes.icon} />
            </ListItemIcon>
            <ListItemText className="fav-content">
                <Typography className="fav-title">
                    {fav.title}
                </Typography>
            </ListItemText>
            <ListItemIcon className="item-fav-icon">
                <IconButton edge="end" aria-label="updated" onClick={(e) => handleUpdate(e, fav)}>
                    <Create className="update-icon" />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={(e) => handleDelete(e, fav.id)}>
                    <Delete className="delete-icon" />
                </IconButton>
            </ListItemIcon>
        </ListItem>
    )
}
