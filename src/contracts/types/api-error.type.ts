import {type HttpStatusCode} from "axios";

export type ApiError = {
    statusCode: HttpStatusCode;
    message: string;
}