import { handleCreateUser } from "../../../controllers/userController";
import dbConnect from "../../../lib/mongodb";

export async function POST(req) {
  await dbConnect();
  console.log("ksadgksadsa");
  return handleCreateUser(req, NextResponse);
}
