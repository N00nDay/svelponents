import Table from "./Table.svelte";
import markdown from "./table.md";

export default {
  title: "Components/Table",
  parameters: {
    notes: { markdown },
  },
};

export const table = () => ({
  Component: Table,
});
