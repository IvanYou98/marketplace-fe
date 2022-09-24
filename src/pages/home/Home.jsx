import {
    BrowserRouter as Router,
    /* Switch,  in react-router-dom v6, Switch is replaced by Routes */
    Route,
    Routes,
} from "react-router-dom";

import { Container, Grid } from "@mui/material";
import Profile from "../../components/profile/Profile";
import Header from "../../components/header/Header";
import "./Home.css"
import { Fragment } from "react";
import TopBar from "../../components/topbar/TopBar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${localStorage.getItem("userId")}`, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setUser(res.data);
        }).catch(err => {
            console.log(err.res.data);
        })
    }, [])
    return (
        <Fragment>
            <Header />
            <Container className="home-container">
                <Grid container spacing={7}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={3}
                        lg={4}
                    >
                        <Profile user={user} />
                    </Grid>
                    <Grid item>
                        <TopBar />
                    </Grid>
                </Grid>
            </Container>
        </Fragment>

    );
}

export default Home;
