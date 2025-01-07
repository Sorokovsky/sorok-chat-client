import { useIsAuth } from './use-is-auth.hook';
import { useRedirectGuard } from './use-redirect-guard.hook';
export const useForAuth = () => {
  const { isAuth } = useIsAuth();
  useRedirectGuard(isAuth);
}