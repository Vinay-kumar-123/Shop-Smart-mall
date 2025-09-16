import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

export default function OrderCart() {
  return (
    <div className="p-5 shadow-md hover:shadow-lg border border-gray-100 rounded-xl bg-white transition duration-300">
      <Grid container alignItems="center" spacing={2}>
       
        <Grid item xs={3} md={2}>
          <img
            className="h-28 w-24 object-cover rounded-md"
            src="/men1.jpg"
            alt="Product"
          />
        </Grid>

        
        <Grid item xs={6} md={6}>
          <h2 className="font-medium text-gray-800 text-base md:text-lg">
            Men White Shirt
          </h2>
          <p className="text-sm text-gray-500 mt-1">Size: L | Color: White</p>
          <p className="text-gray-900 font-semibold mt-2">₹500</p>
        </Grid>
        
        
        <Grid item xs={12} md={4}>
          {true && (
            <p className="flex items-center text-sm text-gray-700">
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
    </div>
  );
}
