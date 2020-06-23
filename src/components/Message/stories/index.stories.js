import Message from "./Message.svelte";
import markdown from "./message.md";

export default {
  title: "Components/Message",
  parameters: {
    notes: { markdown },
  },
};

export const message = () => ({
  Component: Message,
});
