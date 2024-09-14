import { handleCreateBlog, handleGetBlogs, handleUpdateBlog, handleDeleteBlog } from '../../../controllers/blogController';
import dbConnect from '../../../lib/mongodb';

export async function POST(req) {
  await dbConnect();
  return handleCreateBlog(req, NextResponse);
}

export async function GET(req) {
  await dbConnect();
  return handleGetBlogs(req, NextResponse);
}

export async function PUT(req) {
  const { id } = req.query;
  await dbConnect();
  return handleUpdateBlog(req, id, NextResponse);
}

export async function DELETE(req) {
  const { id } = req.query;
  await dbConnect();
  return handleDeleteBlog(req, id, NextResponse);
}
