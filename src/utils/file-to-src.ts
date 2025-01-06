"use client";

export const fileToSrc: (file: File | null) => string = (
  file: File | null
): string => {
  if (file === null) return "";
  return URL.createObjectURL(file);
};
