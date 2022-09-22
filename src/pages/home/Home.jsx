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

function Home() {
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
                        <Profile />
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
