"use client";

import { BsCart4 } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { useCart } from "@/hooks/useCart";

export default function CartBadge(){
    const {cartCount} = useCart();
    return (
    <Badge
      badgeContent={cartCount || 0}
      color="secondary"
      overlap="circular"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <BsCart4 className="w-5 h-5 text-gray-700" />
    </Badge>
  );
}