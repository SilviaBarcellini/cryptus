import prompts from "prompts";
import chalk from "chalk";

const run = async () => {
  printWelcomeMessage();
  const credentials = await askForCredentials();

  const response = await prompts({
    type: "number",
    name: "age",
    message: "How old are you?",
    validate: (age) => (age < 18 ? `Sorry, Cryptus is 18+ only` : true),
  });
  console.log("Welcome to Cryptus 🔑");
};

age();

const name = async () => {
  const response = await prompts({
    type: "password",
    name: "masterPassword",
    message: "What is your master Password?",
  });
  if (response.masterPassword !== "abc123") {
    console.warn(chalk.bgRed("Wrong!"));
  }
  console.log("Welcome back to Cryptus 🔑");
};

name();
