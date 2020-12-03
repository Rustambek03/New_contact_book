import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from "react-router-dom";

const Navbar = () => {

    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
    }

    return (
        <div style={{ marginTop: "80px", display: "flex" }}>
            <AppBar position="fixed">
                <Container fixed maxWidth="md">
                    <Toolbar>
                        <Link to="/">
                            <HomeIcon/>
                        </Link>
                        <Typography variant="h4" style={{ marginLeft: "10px" }}>
                            Contact Book
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Navbar;
