import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const commands = [
  {
    name: "create",
    description: "Create a new short url",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.commandToken);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1230737307540390008"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
