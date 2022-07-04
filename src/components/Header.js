import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(60,56,195,1) 27%, rgba(118,95,189,1) 44%, rgba(253,187,45,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
          Car300
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="All Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Blog"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
