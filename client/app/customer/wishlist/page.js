"use client";
import Link from "next/link";
import * as React from "react";
import { toast } from "react-toastify";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CartBadge from "@/components/Navbar/CartBadge";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function stringAvatar(name = "") {
  const parts = name.split(" ");
  if(parts.length >= 2){
    return { children: `${parts[0][0]}${parts[1][0]}`.toUpperCase() };
  }else if(parts.length === 1){
      return {children: `${parts[0][0]}`.toUpperCase() };
  }
  return {
    children: "u"
  };
}

export default function NavbarActions() {
  const { user, getUser, signout } = useAuth();
   useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) getUser();
  }, []);
  const handleLogout = async () => {
    try {
      await signout().unwrap();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
    
  }

  return (
    <div className="flex items-center gap-6">
      {!user ? (
        <div className="hidden md:flex gap-4 text-sm font-medium">
          <Tooltip title="Login" arrow>
            <Link href="/customer/login" className="hover:text-yellow-500 transition">
              Login
            </Link>
          </Tooltip>
          <Tooltip title="Signup" arrow>
            <Link href="/customer/signup" className="hover:text-yellow-500 transition">
              Sign Up
            </Link>
          </Tooltip>
        </div>
      ) : (
        <ul className="flex items-center gap-4 ">
          <li>
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Stack direction="row" spacing={2}>
                  <Tooltip title={`${user.firstName}`} arrow>
                    <Avatar
                      {...stringAvatar(`${user.firstName} ${user.lastName}`)}
                    />
                  </Tooltip>
                </Stack>
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/customer/Orders"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden hover:text-blue-600"
                  >
                    Order
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Log out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
          <Link href="/customer/cart">
            <li>
              <Tooltip title="Cart" arrow>
                <IconButton aria-label="cart">
                  <CartBadge />
                </IconButton>
              </Tooltip>
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}
