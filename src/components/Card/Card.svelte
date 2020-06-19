<script>
  import { CONTEXT } from "./Context.svelte";
  import { setContext } from "svelte";
  export let small = false;
  export let bordered = true;
  export let hoverable = false;
  export let style = undefined;
  export let elevation = null;
  export let handleClick = undefined;
  export let loading = false;

  setContext(CONTEXT, {
    handleClick,
    loading
  });
</script>

<style>
  .card {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
    background: #fff;
    border-radius: 6px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden;
  }
  .hoverable {
    cursor: pointer;
  }
  .hoverable:hover {
    border-color: rgba(0, 0, 0, 0.09);
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
  .bordered {
    border: 1px solid #e8e8e8;
  }
  .loading {
    overflow: hidden;
  }
  .elevation-1 {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation-2 {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation-3 {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation-4 {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .elevation-5 {
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  }

  .small :global(.head) {
    min-height: 36px;
    padding: 0 12px;
    font-size: 14px;
  }
  .small :global(.head > .head-wrapper > .head-title) {
    padding: 8px 0;
  }

  .small :global(.body) {
    padding: 12px;
  }

  .small :global(.extra) {
    padding: 8px 0;
    font-size: 14px;
  }
</style>

<div
  class={`card ${elevation ? `elevation-${elevation}` : ''}`}
  class:bordered
  class:small
  class:hoverable
  {style}>
  <slot />
</div>
