import OriginMessage from "./Message.svelte";
import { message } from "./Message.svelte";

let Message = OriginMessage;
Message.message = message;
export default Message;
