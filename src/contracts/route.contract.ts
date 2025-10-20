import { ACCESS_RULE } from './access.contract';
export type Route = {
    name: string;
    path: string;
    accessRule: ACCESS_RULE;
};