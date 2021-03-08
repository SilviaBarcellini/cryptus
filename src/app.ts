import chalk from "chalk";
import { printWelcomeMessage, printCannotEnter } from "./message";
import { askForAction, askForCredentials } from "./questions";
import { handleGetPassword, handleSetPassword, canEnter } from "./command";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { closeDB, connectDB } from "./db";

dotenv.config();

type CommandToFunction = {
  set: (passwordName: string) => Promise<void>;
  get: (passwordName: string) => Promise<void>;
};
const commandToFunction: CommandToFunction = {
  set: handleSetPassword,
  get: handleGetPassword,
};

const run = async () => {
  const url = process.env.MONGODB_URL;

  printWelcomeMessage();

  try {
    const credentials = await askForCredentials();
    if (!canEnter(credentials.masterPassword)) {
      printCannotEnter();
      run();
      return;
    }
    await connectDB(url, "cryptus-silvia");

    const action = await askForAction();
    const commandFunction = commandToFunction[action.command];
    await commandFunction(action.passwordName);

    await closeDB();
  } catch (error) {
    console.error(error);
  }
};
run();

//try {
//await connectDB(url, "cryptus-silvia");
//await createPasswordDoc({ name: "Silvia", value: "1234" });
//console.log(await readPasswordDoc("Silvia"));
//await updatePasswordValue("Silvia", "1111");
//await deletePasswordDoc("Silvia");
//console.log(await deletePasswordDoc("Silvia"));
//await closeDB();
//} catch (error) {
//  console.error(error);
//}
