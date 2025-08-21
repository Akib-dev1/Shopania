"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = await dbConnect("users-collection");
  const user = await userCollection.findOne({ email });
  if (!user) return null;
  const isMatch = bcrypt.compare(user.password, password);
  if (!isMatch) return null;
  return user;
};
