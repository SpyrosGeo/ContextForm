import React, { Component } from 'react'
import { 
    Avatar, 
    Button,
    // CssBaseline,
    FormControl,
    FormControlLabel,
    Checkbox,
    Input,
    InputLabel,
    Paper,
    Typography,
    MenuItem,
    Select } from '@material-ui/core';

import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/FormStyles';
import { LanguageContext } from './Contexts/LanguageContext';

const words = { 
    english:{
        email:"Email",
        password:"Password",
        signIn:"Sign In",
        remember:"Remember Me",

    },
    greek:{
        email:"Διευθυνση Η/Τ",
        password:"Κωδικός",
        signIn: "ΕΙΣΟΔΟΣ",
        remember: "ΑΠΟΜΝΗΜΟΝΕΥΣΗ",
    }
}
 class Form extends Component {
     static contextType = LanguageContext;
    render() {
        const { classes } =this.props;
        const { language,changeLanguage } = this.context;
        const { email, password,signIn,remember} = words[language];
        return (
           <main className={classes.main}>
               <Paper className={classes.paper}>
                   <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                   </Avatar>
            <Typography variant="h5"> {signIn} </Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="greek">Greek</MenuItem>
                    </Select>               
                    <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">{email}</InputLabel>
                    <Input id="email" name="email" autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">{password}</InputLabel>
                    <Input id="password" name="password" autoFocus></Input>
                    </FormControl>
                    <FormControlLabel control={<Checkbox color='primary'/>} label={remember}/>
                    <Button variant="contained" type="submit" color='primary'fullWidth className={classes.button}> {signIn} </Button>
                    </form>
               </Paper>
           </main>
        )
    }
}
export default withStyles(styles)(Form);