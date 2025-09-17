
import { Grid, Box } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import Link from "next/link";

export default function OrderCart({ order }) {
  return (
    <Link href={`/customer/OrderDetails?id=${order.id}`}>
      <Box className="p-5 mb-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
        <Grid container alignItems="center" spacing={2} >
          
          <Grid  size={{ xs: 12, sm: 3, md: 2 }}>
            <img
              src={order.img}
              alt={order.name}
              className="h-28 w-24 object-cover object-top rounded-md hover:scale-105 transition duration-300"
            />
          </Grid>

          
          <Grid  size={{ xs: 12, sm: 6, md: 6 }}>
            <h2 className="font-medium text-gray-800 text-base md:text-lg">
              {order.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Size: {order.size} | Color: {order.color}
            </p>
            <p className="text-gray-900 font-semibold mt-2">₹{order.price}</p>
          </Grid>

          
          <Grid   size={{ xs: 12, sm: 3, md: 4 }} className="text-sm md:text-right">
            {order.status === "Delivered" ? (
              <p className="flex items-center md:justify-end text-sm text-gray-700">
                <AdjustIcon
                  sx={{ width: "18px", height: "18px" }}
                  className="text-green-600 mr-2"
                />
                Delivered on <span className="ml-1 font-medium">{order.date}</span>
              </p>
            ) : (
              <p className="flex items-center md:justify-end text-sm text-gray-700">
                <AdjustIcon
                  sx={{ width: "18px", height: "18px" }}
                  className="text-yellow-600 mr-2"
                />
                {order.status} (Expected {order.date})
              </p>
            )}
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
}
