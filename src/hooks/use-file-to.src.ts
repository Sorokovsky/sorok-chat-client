"use client"
import {useState} from "react";

export const useFileToSrc: (file: File | null) => string = (file: File | null): string => {
    const reader = new FileReader();
    const [src, setSrc] = useState<string>("");
    if(file === null) return src;
    reader.onload = function(event: ProgressEvent<FileReader>) {
        setSrc(event.target?.result as string);
    };
    reader.readAsDataURL(file);
    return src;
}