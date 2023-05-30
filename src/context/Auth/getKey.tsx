import { useContext } from "react";
import { AuthContext } from ".";
import { getKeyLocalStorage } from "../../components/utils/utilAuth";

export const getKey = (): string | null => {
  const { key } = useContext(AuthContext);
  if (key) {
      return key;
  }
  const storedKey = getKeyLocalStorage();
  return storedKey ?? null;
};