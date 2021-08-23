import React, { Fragment, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import Switch from "@material-ui/core/Switch";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import ThemeContext from "../../context/theme/themeContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const Navbar = ({ title, icon }) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;
  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <li>Hello {user && user.name}</li>
      <li
        style={{
          marginLeft: ".5rem",
          marginRight: ".5rem",
        }}
      >
        <a onClick={onLogout} href="#!">
          <Button>
            <ExitToAppIcon style={{ color: "white" }} />
          </Button>
          <span style={{ color: "white" }} className="hide-sm">
            Logout
          </span>
        </a>
      </li>
    </div>
  );
  const guestLinks = (
    <>
      <Link to="/login">
        <Button style={{ color: "white" }}>Login</Button>
      </Link>
      <Link to="/register">
        <Button style={{ color: "white" }}>Register</Button>
      </Link>
    </>
  );
  const [state, setState] = useState({
    checkedA: "light",
    checkedB: "dark",
  });
  const handleCheckbox = () => {
    if (theme === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <AppBar color={!theme ? "default" : "primary"} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Todoist
          </Typography>
          <Switch
            onClick={() => toggleTheme()}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <ul style={{ display: "flex" }}>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
