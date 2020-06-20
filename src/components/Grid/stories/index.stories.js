import Grid from "./Grid.svelte";
import markdown from "./grid.md";

export default {
  title: "Components/Grid",
  parameters: {
    notes: { markdown },
  },
};

export const grid = () => ({
  Component: Grid,
});
