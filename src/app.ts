import prompts from "prompts";
import chalk from "chalk";
import { printWelcomeMessage, printCannotEnter } from "./message";
import { askForAction, askForCredentials } from "./questions";
import { handleGetPassword, handleSetPassword, canEnter } from "./command";

const run = async () => {
  printWelcomeMessage();
  const credentials = await askForCredentials();
  if (!canEnter(credentials.masterPassword)) {
    printCannotEnter();
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
  }
};

run();
