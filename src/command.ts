import { printPassword, printPasswordSet } from "./message";
import { askForPasswordValue } from "./questions";
import dotenv from "dotenv";
import { closeDB, connectDB, createPasswordDoc, readPasswordDoc } from "./db";

dotenv.config;

export const canEnter = (masterPassword: string): boolean =>
  masterPassword === process.env.CRYPTO_MASTER_PASSWORD;

export const handleSetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordValue = await askForPasswordValue();
  const passwordDoc = {
    name: passwordName,
    value: passwordValue,
  };
  await createPasswordDoc(passwordDoc); //(passwordDoc creates the problem #words); ({ name: passwordName, value: passwordValue });
  printPasswordSet(passwordName);
  console.log(`${passwordName}`);
};

export const handleGetPassword = async (
  passwordName: string
): Promise<void> => {
  //printPassword(passwordName, "XYZ123");
  const passwordDoc = await readPasswordDoc(passwordName);
  if (!passwordDoc) {
    console.log("No password found!");
    return;
  }
  printPassword(passwordDoc.name, passwordDoc.value);
};

/* export const canEnter = (masterPassword: string): boolean =>
  masterPassword === "abc123";

export const handleSetPassword = async (
  passwordName: string
): Promise<void> => {
  try {
    await connectDB(url, "cryptus-silvia");
    const passwordValue = await askForPasswordValue();
    createPasswordDoc({ name: passwordName, value: passwordValue });
    await closeDB();
  } catch (error) {
    console.error(error);
  }
  printPasswordSet(passwordName);
  const passwordValue = await askForPasswordValue();
  // ToDO use response.passwordValue to update password
  printPasswordSet(passwordName);
};

export const handleGetPassword = async (
  passwordName: string,
  passwordValue: string
): Promise<void> => {
  try {
    await connectDB(url, "cryptus-silvia");
    const passwordValue = await askForPasswordValue();
    createPasswordDoc({ name: passwordName, value: passwordValue });
    await closeDB();
  } catch (error) {
    console.error(error);
  }
  printPassword(passwordName, passwordValue);
};
 */
