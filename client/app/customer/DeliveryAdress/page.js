"use client";

import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import AddressCart from "../AddressCart/page";

export default function DeliveryAddress() {
  const formHandle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    console.log("Form Data:", formData);
    
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={3}>
        
        <Grid
          size={{ xs: 12, lg: 5 }}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            boxShadow: 2,
            height: "32rem",
            overflowY: "scroll",
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ p: 3 }} className="saved-address-scroll" >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Saved Addresses
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <AddressCart />
            
            <Button
              fullWidth
              sx={{
                mt: 3,
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
              }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </Box>
        </Grid>

       
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box
            component="form"
            onSubmit={formHandle}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              boxShadow: 2,
              p: 4,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Add New Address
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  required
                  name="address"
                  label="Full Address"
                  fullWidth
                  multiline
                  rows={3}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField required name="city" label="City" fullWidth />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="state"
                  label="State / Province"
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="zip"
                  label="Zip / Postal Code"
                  fullWidth
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  required
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Button
                  fullWidth
                  sx={{
                    py: 1.5,
                    mt: 2,
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "primary.dark" },
                  }}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Save & Deliver Here
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
