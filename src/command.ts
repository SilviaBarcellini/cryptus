import { printPassword, printPasswordSet } from "./message";
import { askForPasswordValue } from "./questions";

export const canEnter = (masterPassword: string): boolean =>
  masterPassword === "abc123";

export const handleSetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordValue = await askForPasswordValue();
  // ToDO use response.passwordValue to update password
  printPasswordSet(passwordName);
};

export const handleGetPassword = async (
  passwordName: string
): Promise<void> => {
  printPassword(passwordName, "XYZ123");
};
