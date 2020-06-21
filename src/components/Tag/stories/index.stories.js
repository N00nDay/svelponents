import Tag from "./Tag.svelte";
import markdown from "./tag.md";

export default {
  title: "Components/Tag",
  parameters: {
    notes: { markdown },
  },
};

export const tag = () => ({
  Component: Tag,
});
