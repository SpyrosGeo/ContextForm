import React, { Component } from 'react'
import { AppBar,Toolbar,Switch,Typography,InputBase,IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/NavBarStyles';
import {ThemeContext } from './Contexts/ThemeContext';
import { withLanguageContext } from './Contexts/LanguageContext';

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
class NavBar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkMode,toggleTheme} = this.context;
        const { classes} = this.props;
        const {language } = this.props.languageContext;
        const {search,appTitle} = words[language];
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode?'default':'primary'}>
                    <Toolbar>
                        <IconButton className={classes.menuButton}></IconButton>
                        <Typography
                        className={classes.title}
                        variant='h6'
                        color='inherit'>
                        {appTitle}
                        </Typography>
                        <Switch onChange={toggleTheme}/>
                        <div className={classes.grow}/>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder={`${search}...`} classes={{
                                root:classes.inputRoot,
                                input:classes.inputInput
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default withLanguageContext(withStyles(styles)(NavBar));
