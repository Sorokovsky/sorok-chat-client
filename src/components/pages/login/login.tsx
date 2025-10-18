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
    const {mutate: login} = useLogin();
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // @ts-ignore
        const result: LoginDto = {};
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, key) => {
            // @ts-ignore
            result[key] = value;
        });
        login(result);
    };
    return (
        <div className={clsx("page", styles.page)}>
            <Box
                component={"form"}
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
                    id="email"
                    label="Електронна адреса"
                    variant="outlined"
                    name={"email"}
                    type={"email"}
                    autoComplete="off"
                />
                <TextField
                    id="password"
                    label="Пароль"
                    variant="outlined"
                    name={"password"}
                    type={"password"}
                    autoComplete="off"
                />
                <Button
                    variant="contained"
                    type={"submit"}
                >Увійти</Button>
            </Box>
        </div>
    );
}