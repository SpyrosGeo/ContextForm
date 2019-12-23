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
 class Form extends Component {
    render() {
        const { classes } =this.props;
        return (
           <main className={classes.main}>
               <Paper className={classes.paper}>
                   <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                   </Avatar>
                   <Typography variant="h5">Sign In</Typography>
                    <Select value="english">
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="greek">Greek</MenuItem>
                    </Select>               
                    <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" name="email" autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" name="password" autoFocus></Input>
                    </FormControl>
                    <FormControlLabel control={<Checkbox color='primary'/>} label='Remember Me'/>
                    <Button variant="contained" type="submit" color='primary'fullWidth className={classes.button}>Sign In</Button>
                    </form>
               </Paper>
           </main>
        )
    }
}
export default withStyles(styles)(Form);