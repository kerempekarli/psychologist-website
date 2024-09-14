import {
  createUser,
  getUserByEmail,
  getUserById,
} from "../services/userService";

export async function handleCreateUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await createUser(name, email, password);
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function handleGetUserByEmail(req, res) {
  const { email } = req.params;

  try {
    const user = await getUserByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "Kullanıcı bulunamadı" });
  }
}

export async function handleGetUserById(req, res) {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "Kullanıcı bulunamadı" });
  }
}
