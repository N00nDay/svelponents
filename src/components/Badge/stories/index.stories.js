import Badge from "./Badge.svelte";
import markdown from "./badge.md";

export default {
  title: "Components/Badge",
  parameters: {
    notes: { markdown },
  },
};

export const badge = () => ({
  Component: Badge,
});
