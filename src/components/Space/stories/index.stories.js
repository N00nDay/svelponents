import Space from "./Space.svelte";
import markdown from "./space.md";

export default {
  title: "Components/Space",
  parameters: {
    notes: { markdown },
  },
};

export const space = () => ({
  Component: Space,
});
