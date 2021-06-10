import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../footer/Copyright';
import axios from 'axios';
import './LoginStyle.css';


class LogIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            // user: {},
            // token: "",
        };
        this.onSubmit = this.handleSubmit.bind(this);
    }   
    
    // handle submit from form
    // get data from api
    handleSubmit(e) {
        e.preventDefault();
        const userData = { email: this.state.email, password: this.state.password};
        let token = "";
        let user = "";
        
        // console.log(userData);

        axios.post('http://dev.semangatngedrakor.my.id/api/login', userData)
        .then((res) => {
            // console.log(res.data);
            // this.setState({
            //     user: res.data.user,
            //     token: res.data.access_token,
            // })
            token = res.data.access_token;
            user = res.data.user;
            console.log("token: ", token);
            console.log("user: ", user);
        })
        .catch( err => console.log(err) )
    }

    render() {

        return (
            <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
        <img className="img-logo" src="images/bank_aceh_oke.png" height="70px" alt="logo"></img>
        
        <Typography 
        className="title"
        component="h1"
        variant="h5" 
        color="primary">
        Masuk
        </Typography>        
        <form className="login-form" method="POST" noValidate>
        <TextField
            className="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="off"
            autoFocus
            onChange={e => this.setState({ email: e.target.value })}
        />
        <TextField
            className="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
            onChange={e => this.setState({ password: e.target.value })}
        />
        <Button
            onClick={this.onSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
        >
            Masuk
        </Button>
        </form>
    </div>
        <Box mt={8}>
            <Copyright />
        </Box>
    </Container>
        );
    }
}
export default LogIn;