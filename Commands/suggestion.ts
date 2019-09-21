import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class suggestion implements IBotCommand{
    
    private readonly _command = "suggestion"
    
    help(): string {
        return "This command does absolutely nothing! :-)"
    }    
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        msgObject.channel.send("worked").then(m => (m as Discord.Message).delete(1000))
    }
}