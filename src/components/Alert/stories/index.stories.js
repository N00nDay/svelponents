import Alert from "./Alert.svelte";
import markdown from "./alert.md";

export default {
  title: "Components/Alert",
  parameters: {
    notes: { markdown },
  },
};

export const alert = () => ({
  Component: Alert,
});
