import {type FieldValues, type SubmitHandler} from "react-hook-form";
import {type FormField} from "@/types/form-field.type";

export type Form<T extends FieldValues = FieldValues> = {
    onSubmit: SubmitHandler<T>;
    fields: FormField<T>[]
    submitText: string;
}