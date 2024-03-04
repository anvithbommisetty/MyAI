import { BingChat } from "bing-chat-rnz";
import { config } from "dotenv";
config();
//console.log(process.env.BING_COOKIE);
// instantiate the BingChat class
const api = new BingChat({
    cookie: process.env.BING_COOKIE,
});
async function askBingChat(message, options) {
    const DEFAULT_TIMEOUT = 750000; // 75 seconds
    // send a message to Bing, timing out after 75 seconds
    const res = (await Promise.race([
        api.sendMessage(message, options),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Bing chat request timed out.")), DEFAULT_TIMEOUT)),
    ]));
    if (!res.text) {
        throw new Error("Empty response from Bing");
    }
    return {
        text: res.text,
        // return the conversationOptions so that we can continue the conversation
        conversationOptions: {
            conversationId: res.conversationId,
            clientId: res.clientId,
            conversationSignature: res.conversationSignature,
        },
    };
}
export { askBingChat };
//# sourceMappingURL=bing-chat.js.map