import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Auth: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login?.(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Введите почту" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
            <button type="submit">Войти</button>
        </form>
    )
}