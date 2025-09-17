// import { Grid } from "@mui/material";

// import OrderCart from "../OrderCart/page";
// export default function Orders() {
//   const orderStatus = [
//     { label: "On the way", value: "On the way" },
//     { label: "Delivered", value: "Delivered" },
//     { label: "Cancelled", value: "Cancelled" },
//     { label: "Return", value: "Return" },
//   ];
//   return (
//     <>
//       <div className="px:5 lg:px-20 py-8 bg-gray-50 min-h-screen">
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={3}>
//             <div className=" shadow-md bg-white rounded-xl p-5 sticky top-5">
//               <h1 className="text-lg font-semibold text-gray-800">Filters</h1>
//               <div className="space-y-4 mt-6">
//                 <h2 className="font-medium text-gray-700">Order Status </h2>

//                 {orderStatus.map((section, index) => (
//                   <div className="flex items-center" key={index}>
//                     <input
//                      id={section.value}
//                      value={section.value}
//                       key={index}
//                       type="checkbox"
                      
//                       className="h-4 w-4 border-gray-300 text-indigo-600 cursor-pointer"
//                     />
//                     <label
//                       htmlFor={section.value}
//                       className="ml-3 text-sm text-gray-600 "
//                     >
//                       {section.label}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Grid>
//           <Grid item xs={12} md={9} sx={{width: '80%'}}>
//           <div className="space-y-6">
//             <OrderCart />
//             <OrderCart />
//             <OrderCart />
//           </div>
            
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   );
// }


import { Grid } from "@mui/material";
import OrderCart from "../OrderCart/page";

export default function Orders() {
  // Dummy orders (future me API se fetch kar sakte ho)
  const orders = [
    {
      id: 1,
      name: "Men White Shirt",
      price: 500,
      size: "L",
      color: "White",
      status: "Delivered",
      date: "March 03",
      img: "/men1.jpg",
    },
    {
      id: 2,
      name: "Women Kurti",
      price: 899,
      size: "M",
      color: "Red",
      status: "On the way",
      date: "March 05",
      img: "/women1.jpg",
    },
  ];

  return (
    <div className="px:5 lg:px-20 py-8 bg-gray-50 min-h-screen">
      <Grid container spacing={3}>
        
        <Grid  size={{ xs: 12,  md: 3 }}>
          <div className="shadow-md bg-white rounded-xl p-5 sticky top-5">
            <h1 className="text-lg font-semibold text-gray-800">Filters</h1>
            <div className="space-y-4 mt-6">
              <h2 className="font-medium text-gray-700">Order Status</h2>
              {["On the way", "Delivered", "Cancelled", "Return"].map((status, i) => (
                <div key={i} className="flex items-center">
                  <input type="checkbox" id={status} className="h-4 w-4" />
                  <label htmlFor={status} className="ml-2 text-sm">{status}</label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Right - Orders List */}
        <Grid  size={{ xs: 12, sm: 6, md: 9 }}>
          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCart key={order.id} order={order} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
