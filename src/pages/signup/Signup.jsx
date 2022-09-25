import React from 'react'
import { useState, useEffect } from "react";
import { Box, Link, Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,24}$/;


export default function Signup() {

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [email, setEmail] = useState('');

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        axios.post("http://localhost:8000/api/auth/register", {
            username: user,
            email: email,
            password: data.get("password")
        }).then(res => {
            navigate("/login");
        }).catch(err => {
            window.alert(err.response.data);
        })
    };

    const paperStyle = { padding: 20, width: 300, margin: "30px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                >
                    <Grid>
                        <TextField fullWidth label='First Name' placeholder="Enter your First Name" />
                        <TextField fullWidth label='Last Name' placeholder="Enter your Last Name" />
                        <TextField fullWidth label='Email Address' placeholder="Enter your Email Address" value={email}
                            onChange={e => setEmail(e.target.value)} />

                        <TextField onChange={(e) => setUser(e.target.value)} value={user}
                            fullWidth id='username' name='username' label='UserName' placeholder="Enter your username" />



                        <TextField type="password" fullWidth id='password' name='password' label='Password' placeholder="Enter your password" />
                        <TextField type="password" fullWidth label='Confirm Password' placeholder="Confirm your password" />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => navigate("/login")}
                            >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}