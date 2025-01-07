import { useRedirectGuard } from './use-redirect-guard.hook';
export const useForAuth = () => useRedirectGuard(true);