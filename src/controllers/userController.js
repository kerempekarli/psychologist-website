import { NextResponse } from "next/server";
import {
  createUser,
  getUserByEmail,
  getUserById,
} from "../services/userService";

export async function handleCreateUser(req) {
  try {
    const { name, email, password } = await req.json(); // req.body yerine req.json()

    const user = await createUser(name, email, password);
    return NextResponse.json(
      { message: "Kullanıcı başarıyla oluşturuldu", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function handleGetUserByEmail(req) {
  const { email } = req.nextUrl.searchParams; // req.params yerine req.nextUrl.searchParams

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { message: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function handleGetUserById(req) {
  const { id } = req.nextUrl.searchParams; // req.params yerine req.nextUrl.searchParams

  try {
    const user = await getUserById(id);
    if (!user) {
      return NextResponse.json(
        { message: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
