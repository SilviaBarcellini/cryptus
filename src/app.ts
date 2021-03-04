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
  updatePasswordValue,
  deletePasswordDoc,
} from "./db";
import { listenerCount } from "events";

dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;

  try {
    await connectDB(url, "cryptus-silvia");
    //await createPasswordDoc({ name: "Silvia", value: "1234" });
    console.log(await readPasswordDoc("Silvia"));
    await updatePasswordValue("Silvia", "1111");
    //await deletePasswordDoc("Silvia");
    //console.log(await deletePasswordDoc("Silvia"));
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
