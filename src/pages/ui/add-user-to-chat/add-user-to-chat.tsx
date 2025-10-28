import { useAddUser, useCurrentChat } from "@/features/chats";
import { ADD_USER_INPUTS } from "@/features/chats/constants/add-user-form";
import { Form, HOME_ROUTE } from "@/shared";
import { type FC, type JSX, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router';

export const AddUserToChat: FC = (): JSX.Element => {
    const chat = useCurrentChat(store => store.currentChat);
    const { mutate } = useAddUser();
    const navigate = useNavigate();
    const addUser = useCallback((data: unknown) => {
        const userData = data as { userEmail: string };
        mutate(userData.userEmail);
    }, []);
    useEffect(() => {
        if (!chat) {
            navigate(HOME_ROUTE.path);
        }
    }, [chat]);
    return (
        <Form
            inputs={ADD_USER_INPUTS}
            submitHandler={addUser}
            title="Додавання користувача"
            submitText="Додати"
        />
    );
};