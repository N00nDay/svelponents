import Avatar from "./Avatar.svelte";
import markdown from "./avatar.md";

export default {
  title: "Components/Avatar",
  parameters: {
    notes: { markdown },
  },
};

export const avatar = () => ({
  Component: Avatar,
});
