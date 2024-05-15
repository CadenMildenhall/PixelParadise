import { useState } from "react";
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import {
Button,
Collapse,
Nav,
NavLink,
NavItem,
Navbar,
NavbarBrand,
NavbarToggler,
} from "reactstrap";
import { logout } from "../Managers/authmanager";
import "../Styles/Navbar.css"

export default function NavBar({ loggedInUser, setLoggedInUser }) {
const [open, setOpen] = useState(false);

const toggleNavbar = () => setOpen(!open);

const navigate = useNavigate();

const toSocialPage = () =>
{
    navigate("/socialpage");
}

const toProfilePage = () =>
{
    navigate("/profilepage")
}

const toLogin = () =>
{
    navigate("/login")
}

return (
    <>
    <div>
    <Navbar className="mainNav" color="transparent" light fixed="true" expand="lg">
        <NavbarBrand className="mr-auto" tag={RRNavLink} to="/home">
            PixelParadise
        </NavbarBrand>
        {loggedInUser ? (
        <>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={open} navbar>
            <Nav navbar></Nav>
            </Collapse>
            <button onClick={toProfilePage} className="profilePage">Profile</button>
            <button onClick={toSocialPage} className="social">
                Social
            </button>
            <Button className="logoutButton"
            color="dark"
            onClick={(e) => {
                toLogin();
                e.preventDefault();
                setOpen(false);
                logout().then(() => {
                setLoggedInUser(null);
                setOpen(false);
                });
            }}
            >
            Logout
            </Button>
        </>
        ) : (
        <Nav navbar>
            <NavItem>
            <NavLink tag={RRNavLink} to="/login">
                <Button className="loginButton" color="dark">Login</Button>
            </NavLink>
            </NavItem>
        </Nav>
        )}
    </Navbar>
    </div>
    </>
);
}