import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-main">
      <Container maxWidth="md">
        <Box sx={{ py: 4, paddingTop: "100px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Contact Information
                </Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <LocationOnOutlinedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography>
                      007 Sector 67,
                      <br />
                      Mohali, Punjab
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <EmailOutlinedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography>info@electroboom.com</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <PhoneOutlinedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography>+91 91155-13782</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Get in Touch
                </Typography>
                <form action="https://formspree.io/f/xjvdqbzr" method="POST">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.3219302251737!2d76.72284517546096!3d30.681217074609226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feff07850ac79%3A0xa4dc419c7b492fdf!2sNetsmartz%20Square!5e0!3m2!1sen!2sin!4v1683786476183!5m2!1sen!2sin"
                width="100%"
                height="auto"
                //   style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ContactUsPage;
