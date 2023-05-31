import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import GoogleButton from "react-google-button";

// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM7xtU2cMDIKbKaDfLkXrfqB5kGEVxth0",
  authDomain: "electroboom-44995.firebaseapp.com",
  projectId: "electroboom-44995",
  storageBucket: "electroboom-44995.appspot.com",
  messagingSenderId: "997835859524",
  appId: "1:997835859524:web:bc2bf2981ad3e7ac63fe11",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful sign-in with Google
      console.log("Sign in with Google successful", result.user);
    })
    .catch((error) => {
      // Handle sign-in with Google error
      console.error("Error signing in with Google", error);
    });
};

function SignUpSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous error states
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    // Validate email format
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    // Validate password format
    if (!isValidPassword(password)) {
      setPasswordError(true);
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }

    // Perform sign up logic
    // ...
    console.log("Sign up successful");
    // Redirect to a different page or perform any desired actions
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="main-body">
      <ThemeProvider theme={createTheme()}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError && "Invalid email format"}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                  helperText={passwordError && "Invalid password format"}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={confirmPasswordError}
                  helperText={confirmPasswordError && "Passwords do not match"}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                {/* <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  OR
                </p> */}

                <GoogleButton type="light" onClick={signInWithGoogle} />
                {/* <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={signInWithGoogle}
                  startIcon={
                    <Avatar
                      src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" // Replace with the actual image URL
                      alt="Google Logo"
                      sx={{ width: 24, height: 24 }}
                    />
                  }
                  sx={{
                    mb: 2,
                    backgroundColor: "#1DA1F2",
                    "&:hover": {
                      backgroundColor: "#1A91DA",
                    },
                  }}
                >
                  Sign Up with Google
                </Button> */}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default SignUpSide;
