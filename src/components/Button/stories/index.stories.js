import Button from "./Button.svelte";
import markdown from "./button.md";

export default {
  title: "Components/Button",
  parameters: {
    notes: { markdown },
  },
};

export const button = () => ({
  Component: Button,
});
