import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
// bot needs a client to communicate with Discord servers and users.
const client = new Client({
  //Events our bot have access in our entire  server
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//Letting out bot client handle the messages
client.on("messageCreate", (message) => {
  //Do not reply when the author is bot
  if (message.author.bot) return;

  //reply to commands
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating short ID for" + url,
    });
  }
  //reply to basic message from any member of server
  message.reply({
    content: `Hi Mr ${message.author.globalName}`,
  });
});

//Handling the commands interaction
client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong");
});

//Letting our bot login into our application
client.login(process.env.loginCredentials);
