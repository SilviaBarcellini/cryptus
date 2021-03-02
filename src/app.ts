import prompts from "prompts";
import chalk from "chalk";

console.log(chalk.magenta("Hello!"));

const age = async () => {
  const response = await prompts({
    type: "number",
    name: "age",
    message: "How old are you?",
    validate: (age) => (age < 18 ? `Sorry, Cryptus is 18+ only` : true),
  });
  console.log("Welcome to Cryptus 🔑");
};

age();
