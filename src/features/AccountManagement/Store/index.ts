import { useImmer } from "use-immer";
export function useAccountManagement() {
  const [credentials, updateCredentials] = useImmer<any>({});
  return { credentials, updateCredentials };
}
