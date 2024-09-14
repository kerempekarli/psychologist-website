import Appointment from "../models/appointment";

export async function createAppointment(userId, date, notes) {
  // Yeni randevu oluştur ve kaydet
  const appointment = new Appointment({
    userId,
    date,
    notes,
  });

  await appointment.save();
  return appointment;
}

export async function getAppointments() {
  // Tüm randevuları kullanıcı bilgileriyle birlikte getir
  return await Appointment.find().populate("userId");
}

export async function getAppointmentById(id) {
  return await Appointment.findById(id).populate("userId");
}

export async function updateAppointment(id, status) {
  // Randevunun durumunu güncelle (Onaylandı, İptal Edildi, vb.)
  return await Appointment.findByIdAndUpdate(id, { status }, { new: true });
}

export async function deleteAppointment(id) {
  // Randevuyu sil
  return await Appointment.findByIdAndDelete(id);
}
