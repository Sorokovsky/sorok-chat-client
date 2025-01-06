"use client"
import {
    type ChangeEvent,
    type ChangeEventHandler,
    type FC,
    type InputHTMLAttributes,
    type JSX,
    useRef,
    useState
} from "react";
import cn from "clsx";
import styles from "./image-input.module.sass";
import Image from "next/image";
import {useFileToSrc} from "@/hooks/use-file-to.src";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const ImageInput: FC<Props> = ({className, label, ...rest}: Props): JSX.Element => {
    const input = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const src: string = useFileToSrc(file);
    const onChange: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        const {target} = event;
        setFile(target.files?.[0] || null);
    }
    return (
        <label className={cn(styles.label)}>
            <span>{label}</span>
            <button
                type={"button"}
                onClick={() => input.current?.click()}
            >Choose image</button>
            <input
                className={cn(styles.input, className)}
                {...rest}
                accept={"image/*"}
                type={"file"}
                ref={input}
                onChange={onChange}
                multiple={false}
            />
            {src !== "" && <Image
                src={src}
                className={cn(styles.preview)}
                alt={"avatar"}
                width={0}
                height={0}
            />
            }
        </label>
    );
}