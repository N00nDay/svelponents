import Skeleton from "./Skeleton.svelte";
import markdown from "./skeleton.md";

export default {
  title: "Components/Skeleton",
  parameters: {
    notes: { markdown },
  },
};

export const skeleton = () => ({
  Component: Skeleton,
});
