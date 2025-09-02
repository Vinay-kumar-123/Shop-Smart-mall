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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

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
          <Tooltip title="compare" arrow>
            <IconButton aria-label="compare">
              <StyledBadge badgeContent={2} color="secondary">
                <IoGitCompareOutline className="w-5 h-5" />
              </StyledBadge>
            </IconButton>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="wishlist" arrow>
            <IconButton aria-label="wishlist">
              <StyledBadge badgeContent={3} color="secondary">
                <IoIosHeartEmpty className="w-5 h-5" />
              </StyledBadge>
            </IconButton>
          </Tooltip>
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
