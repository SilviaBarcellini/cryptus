import chalk from "chalk";

import { askForPasswordValue } from "./questions";

export const printWelcomeMessage = () => {
  console.log(`Welcome to ${chalk.underline.bgMagenta("Cryptus")} 🔐`);
};

export const printCannotEnter = () => {
  console.warn(chalk.bgRed("Wrong master password! Please try again"));
};

export const printPasswordSet = (passwordName: string) => {
  console.log(`You set a new ${passwordName} password.`);
};

export const printPassword = (passwordName: string, PasswordValue: string) => {
  console.log(`Your ${passwordName} password is ${PasswordValue}!`);
};
