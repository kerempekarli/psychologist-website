import {
  handleCreateReview,
  handleGetReviews,
  handleDeleteReview,
} from "../../../controllers/reviewController";
import dbConnect from "../../../lib/mongodb";

export async function POST(req) {
  await dbConnect();
  return handleCreateReview(req, NextResponse);
}

export async function GET(req) {
  await dbConnect();
  return handleGetReviews(req, NextResponse);
}

export async function DELETE(req) {
  const { id } = req.query;
  await dbConnect();
  return handleDeleteReview(req, id, NextResponse);
}
