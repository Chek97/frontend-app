//IMPORTS
import React from 'react';
import { 
    Box,
    IconButton, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Typography
} from '@material-ui/core';
import { ArtTrack, Create, Delete, Star } from '@material-ui/icons';
import { useStyles } from '../styles/styles';
import { useDispatch } from 'react-redux';
import { newPost, startDeleteApiPost} from '../actions/post';
import { useHistory } from 'react-router-dom';

export const PostListItem = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddFavorite = (e, title, body) => {
        e.preventDefault();
        dispatch(newPost(title, body));
    }

    const handleUpdate = (e, post) => {
        e.preventDefault();
        history.push('/api/formData/update', post);
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(startDeleteApiPost(id));
    }

    return (
        <ListItem key={post.id} className='list-posts-item'>
            <ListItemIcon className="item-post-icon">
                <ArtTrack className={classes.icon} />
            </ListItemIcon>
            <Box component={ListItemText} className="list-post-content">
                <Typography className="post-title">
                    {post.title}
                </Typography>
                <ListItemText>
                {`${post.body.substring(0, 100)}....`}
                </ListItemText>
            </Box>
            <ListItemIcon className="item-fav-icon">
                <IconButton edge="end" aria-label="favorites" onClick={(e) => handleAddFavorite(e, post.title, post.body)}>
                    <Star className={`fav-icon`} />
                </IconButton>
                <IconButton edge="end" aria-label="updated" onClick={(e) => handleUpdate(e, post)}>
                    <Create className="update-icon" />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={(e) => handleDelete(e, post.id)}>
                    <Delete className="delete-icon" />
                </IconButton>
            </ListItemIcon>
        </ListItem>
    )
}
