import { formatRelative, subDays } from "date-fns";
import { uk } from "date-fns/locale";

export function formatDate(date: Date): string {
    return formatRelative(subDays(new Date(), 3), date, {locale: uk});
};