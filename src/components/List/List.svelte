<script>
  import { CONTEXT } from "./Context.svelte";
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";
  import ContentLoader from "../ContentLoader/ContentLoader.svelte";

  export let bordered = false;
  export let divider = true;
  export let table = false;
  export let header = false;
  export let size = undefined;
  export let layout = "horizontal";
  export let loading = false;
  export let style = undefined;
  export let defaultSortKey = undefined;
  export let defaultSort = "desc";
  export let selectable = false;
  export let defaultSelectedKey = undefined;

  let sortKey = writable(defaultSortKey);
  let sort = writable(defaultSort);
  let selected = writable(defaultSelectedKey);

  setContext(CONTEXT, {
    selectable,
    sortKey,
    sort,
    table,
    header,
    selected
  });
</script>

<style>
  .list {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
  }
  .list * {
    outline: none;
  }
  .items {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }
  .lg :global(.item) {
    padding: 16px 24px;
  }
  .sm :global(.item) {
    padding: 8px 16px;
  }
  .vertical :global(.item) {
    -webkit-box-align: initial;
    -ms-flex-align: initial;
    align-items: initial;
  }
  .vertical :global(.item-meta) {
    margin-bottom: 16px;
  }
  .vertical :global(.item-meta-title) {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    line-height: 24px;
  }
  .bordered {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }
  .bordered :global(.item) {
    padding-right: 24px;
    padding-left: 24px;
  }
  .bordered.sm :global(.item) {
    padding: 8px 16px;
  }
  .bordered.lg :global(.item) {
    padding: 16px 24px;
  }
  .divider :global(.item) {
    border-bottom: 1px solid #f0f0f0;
  }
  .divider :global(.item:last-child) {
    border-bottom: none;
  }
  .divider :global(svelte-virtual-list-row) {
    border-bottom: 1px solid #f0f0f0;
  }
  .divider :global(svelte-virtual-list-contents) {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  @media screen and (max-width: 576px) {
    .vertical :global(.item) {
      -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
    }
  }
</style>

<div
  {style}
  class="list"
  class:vertical={layout === 'vertical'}
  class:sm={size === 'small'}
  class:lg={size === 'large'}
  class:divider
  class:bordered>
  <ContentLoader {loading} />
  <ul class="items">
    <slot />
  </ul>
</div>
