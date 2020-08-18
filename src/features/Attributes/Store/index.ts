import { useState } from "react";
import { useImmer } from "use-immer";
import { TUserAttributes } from "./types";

export function useTrueVaultUserAttributes() {
  //@ts-ignore
  const [attributes, updateAttributes] = useImmer<TUserAttributes>({});
  const [updating, setUpdating] = useState(false);
  return { attributes, updateAttributes, updating, setUpdating };
}
