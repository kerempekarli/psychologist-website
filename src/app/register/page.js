"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("123");
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("DATA ");
      console.log("DATA ", res);
      if (res.ok) {
        setSuccess("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError(data.error || "Kayıt işlemi başarısız oldu.");
      }
    } catch (error) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}
