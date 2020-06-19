import { configure } from "@storybook/svelte";
import { addParameters } from "@storybook/svelte";

import "./global.css";
import "./tippy.css";

addParameters({
  options: {
    showRoots: true,
  },
});

configure(require.context("../src/components", true, /.stories.js$/), module);
