import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import http from "http";
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

//port for deployment
// Handle incoming HTTP requests to satisfy Render's requirements
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Discord bot is running");
});

// Listen on a port for incoming HTTP requests
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
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
