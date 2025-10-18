"use client"
import {NextPage} from "next";
import {ChangeEvent, FormEvent, JSX, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Heading from "@mui/material/Typography";
import styles from "./login.module.scss";
import clsx from "clsx";
import {useLogin} from "@/hooks/login.hook";
import {LoginDto} from "@/contracts/login.contract";


export const LoginPage: NextPage = (): JSX.Element => {
    const {mutate: login, isPending} = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result: LoginDto = {
            email,
            password,
        };
        login(result);
    };
    return (
        <div className={clsx("page", styles.page)}>
            <Box
                component={"form"}
                method={"post"}
                autoComplete="off"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 700,
                    width: "100%",
                    margin: "auto",
                    gap: 10
                }}
                onSubmit={onSubmit}
            >
                <Heading
                    variant={"h3"}
                    align={"center"}
                >
                    Форма авторизації
                </Heading>
                <TextField
                    required
                    id="email"
                    label="Електронна адреса"
                    variant="outlined"
                    name={"email"}
                    type={"email"}
                    autoComplete="off"
                    value={email}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                />
                <TextField
                    required
                    id="password"
                    label="Пароль"
                    variant="outlined"
                    name={"password"}
                    type={"password"}
                    autoComplete="off"
                    value={password}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
                <Button
                    variant="contained"
                    type={"submit"}
                    disabled={isPending}
                >Увійти</Button>
            </Box>
        </div>
    );
}