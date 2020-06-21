import Typography from "./Typography.svelte";
import markdown from "./typography.md";

export default {
  title: "Components/Typography",
  parameters: {
    notes: { markdown },
  },
};

export const typography = () => ({
  Component: Typography,
});
