import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../services/appointmentService";

export async function handleCreateAppointment(req, res) {
  const { userId, date, notes } = req.body;

  try {
    const appointment = await createAppointment(userId, date, notes);
    res
      .status(201)
      .json({ message: "Randevu başarıyla oluşturuldu", appointment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function handleGetAppointments(req, res) {
  try {
    const appointments = await getAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Randevular alınırken hata oluştu" });
  }
}

export async function handleUpdateAppointment(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const appointment = await updateAppointment(id, status);
    res.status(200).json({ message: "Randevu güncellendi", appointment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function handleDeleteAppointment(req, res) {
  const { id } = req.params;

  try {
    await deleteAppointment(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
