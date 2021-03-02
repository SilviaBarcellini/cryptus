import prompts from "prompts";

const run = async () => {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "How old are you?",
    validate: (value) => (value < 18 ? `Sorry, Cryptus is 18+ only` : true),
  });
  console.log("Welcome to Cryptus 🔑");
};

run();
