// "use client";

// import { Box, Button, Grid, TextField } from "@mui/material";
// import AddressCart from "../AddressCart/page";

// export default function DeliveryAdress() {
//     const formHandle = (e) => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget);
//         const formDta = Object.fromEntries(data.entries());
//         console.log(formDta);
//     }
//   return (
//     <>
//       <div>
//         <Grid container spacing={4}>
//           <Grid
//             xs={12}
//             lg={5}
//             className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll "
//           >
//             <div className="p-5 py-7 border-b cursor-pointer">
//               <AddressCart />
//               <Button
//                 sx={{ mt: 2, bgcolor: "blue" }}
//                 size="large"
//                 variant="contained"
//               >
//                 Delivery Here
//               </Button>
//             </div>
//           </Grid>
//           <Grid item xs={12} lg={7}>
//             <Box className="border rounded-s-md shadow-md p-5">
//               <form onSubmit={formHandle}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       id="firstName"
//                       name="FirstName"
//                       label="FirstName"
//                       fullWidth
//                       autoComplete="given-name"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       id="firstName"
//                       name="lastName"
//                       label="LastName"
//                       fullWidth
//                       autoComplete="given-name"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       id="adress"
//                       name="adress"
//                       label="Address"
//                       fullWidth
//                       autoComplete="given-name"
//                       multiline
//                       rows={4}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       id="city"
//                       name="city"
//                       label="City"
//                       fullWidth
//                       autoComplete="given-name"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       id="state"
//                       name="state"
//                       label="State/Province/Region"
//                       fullWidth
//                       autoComplete="given-name"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       id="zip"
//                       name="zip"
//                       label="Zip/Postal code"
//                       fullWidth
//                       autoComplete="shipping postal-code"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       id="PhoneNumber"
//                       name="PhoneNumber"
//                       label="PhoneNumber"
//                       fullWidth
//                       autoComplete="shipping postal-code"
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <Button
//                       sx={{ py: 2, mt: 2, bgcolor: "blue" }}
//                       size="large"
//                       variant="contained"
//                       type="submit"
//                     >
//                       Delivery Here
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   );
// }


"use client";

import { Box, Button, Grid, TextField, Typography, Divider } from "@mui/material";
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
        {/* LEFT: Saved Addresses */}
        <Grid
          size={{ xs: 12, lg: 5 }}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            boxShadow: 2,
            height: "32rem",
            overflowY: "auto",
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ p: 3 }}>
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

        {/* RIGHT: Add New Address Form */}
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
