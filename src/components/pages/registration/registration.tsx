"use client"
import {NextPage} from "next";
import {ChangeEvent, FormEvent, JSX, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Heading from "@mui/material/Typography";
import styles from "./registration.module.scss";
import clsx from "clsx";
import {useRegistration} from "@/hooks/registration.hook";
import {NewUser} from "@/contracts/new-user.contract";


export const RegistrationPage: NextPage = (): JSX.Element => {
    const { mutate: register, isPending } = useRegistration();
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const result: Partial<NewUser> = {};
        formData.entries().forEach((item) => {
            const key: string = item[0];
            const value = item[1];
            result[key] = value;
        });
        register(result as NewUser);
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
                    Форма реєстрації
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
                <TextField
                    required
                    id="firstName"
                    label="Ім'я"
                    variant="outlined"
                    name={"firstName"}
                    type={"text"}
                    autoComplete="off"
                />
                <TextField
                    required
                    id="lastName"
                    label="Прізвище"
                    variant="outlined"
                    name={"lastName"}
                    type={"text"}
                    autoComplete="off"
                />
                <TextField
                    required
                    id="middleName"
                    label="По батькові"
                    variant="outlined"
                    name={"middleName"}
                    type={"text"}
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