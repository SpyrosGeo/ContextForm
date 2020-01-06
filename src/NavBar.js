import React, { useContext } from 'react'
import { AppBar,Toolbar,Switch,Typography,InputBase,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/NavBarStyles';
import {ThemeContext } from './Contexts/ThemeContext';
import { LanguageContext } from './Contexts/LanguageContext';

const words = {
    english:{
        search:"Search",
        appTitle:"using 'Context'"
    },
    greek:{
        search:"ΑΝΑΖΗΤΗΣΗ",
        appTitle:" Χρησιμοποιώντας 'Context'"
    }
}

function NavBar(props){
     const { isDarkMode,toggleTheme} = useContext(ThemeContext);
        const { classes} = props;
        const {language } = useContext(LanguageContext);
        const {search,appTitle} = words[language];
    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton className={classes.menuButton}></IconButton>
                    <Typography
                        className={classes.title}
                        variant='h6'
                        color='inherit'>
                        {appTitle}
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder={`${search}...`} classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }} />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar);
