import React from "react";
import "./topBar.css";
import {
    Nav,
    Navbar,
} from "react-bootstrap";
import {
    NavLink,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { HomeRounded } from "@mui/icons-material";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

const TopBar = (props) => {
    const pathName = props?.router.location.pathname;
    console.log(pathName);

    return (
        <Navbar expand="lg" sticky="top" className="topbar">
            {/* Home Link */}
            <Nav.Link as={NavLink} to="/WillingList">
                <Navbar.Brand className="topbar_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="topbar_left">
                    <Nav.Link
                        as={NavLink}
                        to="/willingList"
                        className={
                            pathName === "/willingList" ? "topbar_link_active" : "topbar_link"
                        }
                    >
                        WillingList
                    </Nav.Link>

                    <Nav.Link
                        as={NavLink}
                        to="/sellingItem"
                        className={
                            pathName === "/sellingItem" ? "topbar_link_active" : "topbar_link"
                        }
                    >
                        SellingItem
                    </Nav.Link>

                    <Nav.Link
                        as={NavLink}
                        to="/buyingHistory"
                        className={
                            pathName === "/buyingHistory"
                                ? "topbar_link_active"
                                : "topbar_link"
                        }
                    >
                        BuyingHistory
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(TopBar);
//WithRouter will pass updated match, location, and history props to the wrapped component whenever it renders.