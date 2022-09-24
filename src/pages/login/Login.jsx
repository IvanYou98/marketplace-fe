import React from 'react'
import { Box, Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../service/authService';
import axios from 'axios';


export default function Login({ handleChange }) {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        axios.post("http://localhost:8000/api/auth/login", {
            username: data.get("username"),
            password: data.get("password")
        }).then(res => {
            const loginUser = res.data;
            console.log(loginUser);
            localStorage.setItem('token', loginUser.accessToken);
            localStorage.setItem('userId', loginUser._id);
            localStorage.setItem('currentUser', loginUser.username);
            navigate("/")
        }).catch(err => {
            window.alert(err.response.data)
        })
    };

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "30px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                >
                    <TextField name='username' label='Username' placeholder='Enter username' fullWidth required />
                    <TextField name='password' label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        {/* <Link component = "button" onClick={()=>handleChange("event",1)} > */}
                        <Link component="button" onClick={() => navigate("/signup")} >
                            Sign Up
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
}