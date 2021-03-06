import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

    export const navLinks = [
        { title: `Landing`, path: `/` },
        // { title: `Listings`, path: `/listings` },
        { title: `Listings`, path: `/listing` },
        { title: `Users`, path: `/users` },
        { title: `User`, path: `/user` },
        { title: `Login`, path: `/login` },
        { title: `Register`, path: `/signUp` },
    ]

const Links = () => {


    const useStyles = makeStyles({
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `white`
        }
    });

    const classes = useStyles();

    return (
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                    <ListItem button>
                        <ListItemText primary={title} />
                    </ListItem>
                </Link>
            ))}
        </List>
    )

}

export default Links