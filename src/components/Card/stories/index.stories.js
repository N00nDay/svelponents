import Card from "./Card.svelte";
import markdown from "./card.md";

export default {
  title: "Components/Card",
  parameters: {
    notes: { markdown },
  },
};

export const card = () => ({
  Component: Card,
});
