"use client";
import Link from "next/link";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:flex gap-4 text-sm font-medium">
        <Tooltip title="Login" arrow>
          <Link href="/login" className="hover:text-yellow-500 transition">
            Login
          </Link>
        </Tooltip>
        <Tooltip title="signup" arrow>
          <Link href="/signup" className="hover:text-yellow-500 transition">
            Sign Up
          </Link>
        </Tooltip>
      </div>

      <ul className="flex items-center gap-4 ">
        <li>
          <Menu as="div" className="relative ml-3">
            <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <Stack direction="row" spacing={2}>
                <Tooltip title="Vinay" arrow>
                  <Avatar {...stringAvatar("Vinay kumar")} />
                </Tooltip>
              </Stack>
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                >
                  Profile
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                >
                  Order
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                >
                  Sign out
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </li>

        <li>
          <Tooltip title="cart" arrow>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <BsCart4 className="w-5 h-5" />
              </StyledBadge>
            </IconButton>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
}
