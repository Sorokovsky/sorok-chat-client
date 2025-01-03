import {type FC, type JSX} from "react";
import {type Form as FormType} from "@/types/form.type";
import {useForm} from "react-hook-form";
import {type FormField} from "@/types/form-field.type";
import cn from "clsx";
import styles from "./form.module.sass"
import {Loader} from "@/ui/loader/loader";

interface Props {
    form: FormType;
}

export const Form: FC<Props> = ({form}: Props): JSX.Element => {
    const { handleSubmit, register, formState } = useForm();
    return (
        <form
            className={cn(styles.form)}
            onSubmit={handleSubmit(form.onSubmit)}
        >
            {form.fields.map(({name, type, label, options, palaceholder}: FormField) => (
                <label key={name}>
                    {label}
                    <input
                        type={type}
                        placeholder={palaceholder}
                        {...register(name, options)}
                    />
                </label>
            ))}
            <button disabled={formState.isLoading} type={"submit"}>{formState.isLoading ? <Loader /> : form.submitText}</button>
        </form>
    );
}