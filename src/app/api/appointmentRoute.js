import { handleCreateAppointment, handleGetAppointments, handleUpdateAppointment, handleDeleteAppointment } from '../../../controllers/appointmentController';
import dbConnect from '../../../lib/mongodb';

export async function POST(req) {
  await dbConnect();
  return handleCreateAppointment(req, NextResponse);
}

export async function GET(req) {
  await dbConnect();
  return handleGetAppointments(req, NextResponse);
}

export async function PUT(req) {
  const { id } = req.query;
  await dbConnect();
  return handleUpdateAppointment(req, id, NextResponse);
}

export async function DELETE(req) {
  const { id } = req.query;
  await dbConnect();
  return handleDeleteAppointment(req, id, NextResponse);
}
