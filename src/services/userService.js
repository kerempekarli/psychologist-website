import User from "../models/user";
import bcrypt from "bcryptjs";

export async function createUser(name, email, password) {
  // E-posta ile kullanıcı olup olmadığını kontrol et
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("E-posta zaten kullanılıyor.");
  }

  // Şifreyi hashle
  const hashedPassword = await bcrypt.hash(password, 10);

  // Yeni kullanıcı oluştur ve kaydet
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  return user;
}

export async function getUserByEmail(email) {
  return await User.findOne({ email });
}

export async function getUserById(id) {
  return await User.findById(id);
}
