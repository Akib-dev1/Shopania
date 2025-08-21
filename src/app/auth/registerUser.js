"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const registerUser = async (userData) => {
  const userCollection = dbConnect("users-collection");
  const user = await userCollection.findOne({ email: userData.email });
  if (!userData.email || !userData.password) {
    return null;
  }
  if (!user) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const result = await userCollection.insertOne(userData);
    result.insertedId = result.insertedId.toString();
    return result;
  }
  return null;
};
