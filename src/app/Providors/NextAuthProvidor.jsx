"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";

const NextAuthProvidor = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvidor;
