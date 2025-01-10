import type { HttpStatusCode } from "axios";

export type ApiError = {
    message: string;
    statusCode: HttpStatusCode;
};