import chalk from "chalk";
import { printWelcomeMessage, printCannotEnter } from "./message";
import {
  askForAction,
  askForCredentials,
  askForPasswordValue,
} from "./questions";
import { handleGetPassword, handleSetPassword, canEnter } from "./command";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  closeDB,
  connectDB,
  createPasswordDoc,
  readPasswordDoc,
  updatePasswordDoc,
} from "./db";
import { listenerCount } from "events";

dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;

  try {
    await connectDB(url, "cryptus-silvia");
    await createPasswordDoc({ name: "Silvia", value: "1234" });
    console.log(await readPasswordDoc("Silvia"));
    console.log(await updatePasswordDoc);
    await closeDB();
  } catch (error) {
    console.error(error);
  }
  /*  printWelcomeMessage();
  const credentials = await askForCredentials();
  if (!hasAccess(credentials.masterPassword)) {
    printNoAccess();
    run();
    return;
  }
  const action = await askForAction();
  switch (action.command) {
    case "set":
      handleSetPassword(action.passwordName);
      break;
    case "get":
      handleGetPassword(action.passwordName);
      break;
  } */
};
run();
