import { useRedirectGuard } from './use-redirect-guard.hook';
export const useForNotAuth = () => useRedirectGuard(false);