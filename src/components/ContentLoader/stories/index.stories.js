import ContentLoader from "./ContentLoader.svelte";
import markdown from "./contentLoader.md";

export default {
  title: "Components/ContentLoader",
  parameters: {
    notes: { markdown },
  },
};

export const contentLoader = () => ({
  Component: ContentLoader,
});
