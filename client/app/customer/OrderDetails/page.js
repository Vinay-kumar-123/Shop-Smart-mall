import AddressCart from "../AddressCart/page";
import OrderCart from "../OrderCart/page";
import OrderTracker from "../OrderTracker/page";
import { Divider, Typography } from "@mui/material";
export default function OrderDetails() {
  return (
    <>
      <div className="px:5 lg:px-15">
        <div className="py-4">
          <OrderTracker activeStep={3} />
        </div>
        <div className="py-3">
            <OrderCart/>
        </div>
        <div className="p-2 mb-3 rounded-lg shadow-lg bg-white">
            <Typography variant="h6" fontWeight="bold" gutterBottom >
              Saved Addresses
            </Typography>
            <Divider/>
            <AddressCart/>
        </div>
      </div>
    </>
  );
}
