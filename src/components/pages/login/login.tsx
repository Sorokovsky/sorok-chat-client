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
import { useFilterAccess } from "@/hooks/use-filter-access.hook";


export const LoginPage: NextPage = (): JSX.Element => {
    const {mutate: login, isPending} = useLogin();
    useFilterAccess(false);
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const result: Partial<LoginDto> = {};
        formData.entries().forEach((item) => {
            const key: string = item[0];
            const value = item[1];
            result[key] = value;
        });
        login(result as LoginDto);
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
                />
                <TextField
                    required
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
                    disabled={isPending}
                >Увійти</Button>
            </Box>
        </div>
    );
}