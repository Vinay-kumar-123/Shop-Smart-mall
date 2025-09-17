import { Grid, Box } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export default function OrderCart() {
  return (
     <Box
      className="p-5 mb-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300"
    >
      <Grid container alignItems="center" sx={{justifyContent: "space-between"}} spacing={2} >
        <Grid item xs={12} sm={3} md={2}>
          <img
            className="h-28 w-24 object-cover object-top rounded-md hover:scale-105 transition duration-300"
            src="/men1.jpg"
            alt="Product"
          />
        </Grid>

        
          <Grid item xs={12} sm={6} md={6}>
            <h2 className="font-medium text-gray-800 text-base md:text-lg">
              Men White Shirt
            </h2>
            <p className="text-sm text-gray-500 mt-1">Size: L | Color: White</p>
            <p className="text-gray-900 font-semibold mt-2">₹500</p>
          </Grid>
         
          <Grid item xs={12} sm={3} md={4} className="text-sm md:text-right">
            {true && (
              <p className="flex items-center md:justify-end text-sm text-gray-700">
                <AdjustIcon
                  sx={{ width: "18px", height: "18px" }}
                  className="text-green-600 mr-2"
                />
                Delivered on <span className="ml-1 font-medium">March 03</span>
              </p>
            )}

            {false && (
              <p className="text-sm text-gray-700">
                Expected Delivery: <span className="font-medium">March 03</span>
              </p>
            )}
          </Grid>
        
      </Grid>
    </Box>
  );
}
