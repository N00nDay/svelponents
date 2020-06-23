<script>
  import { CONTEXT } from "./Context.svelte";
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import ContentLoader from "../ContentLoader/ContentLoader.svelte";

  export let hoverable = undefined;
  export let defaultSortKey = null;
  export let defaultSort = undefined;
  export let defaultSelectedKey = null;
  export let style = undefined;
  export let bordered = false;
  export let loading = false;
  export let size = undefined;
  export let headers = [];
  export let onSelect = undefined;

  let sortKey = writable(defaultSortKey);
  let sort = writable(defaultSort);
  let selected = writable(defaultSelectedKey);
  let headerHeight = writable(0);
  let filterHeight = writable(0);
  let columnHeaderHeight = writable(0);
  let tableContentHeight = writable(200);
  headers = writable(headers);
  loading = writable(loading);

  function updateHeight() {
    let containerHeight = document.getElementById("main-content");
    if (containerHeight) {
      containerHeight = containerHeight.offsetHeight;
      let borders = bordered ? 2 : 0;

      let newHeight =
        containerHeight -
        $headerHeight -
        $filterHeight -
        $columnHeaderHeight -
        borders;
      tableContentHeight.set(newHeight);
    }
  }

  setContext(CONTEXT, {
    sortKey,
    sort,
    selected,
    bordered,
    headers,
    onSelect,
    loading,
    registerHeader: () => {
      headerHeight.update(val => {
        let borders = bordered ? 1 : 0;
        return val + 70 + borders;
      });
      updateHeight();
    },
    registerFilter: () => {
      filterHeight.update(val => {
        let borders = bordered ? 1 : 0;
        return val + 40 + borders;
      });
      updateHeight();
    },
    registerColumnHeader: () => {
      columnHeaderHeight.update(val => {
        let borders = bordered ? 1 : 0;
        return val + 48 + borders;
      });
      updateHeight();
    },
    tableContentHeight,
    heightUpdated: () => {
      updateHeight();
    }
  });

  onMount(() => {
    updateHeight();
  });
</script>

<style>
  .table {
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
  .table * {
    outline: none;
  }
  .lg :global(.row) {
    padding: 16px 24px;
  }
  .sm :global(.row) {
    padding: 8px 16px;
  }
  .bordered {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }
  .bordered :global(.row) {
    padding-right: 24px;
    padding-left: 24px;
  }
  .bordered.sm :global(.row) {
    padding: 8px 16px;
  }
  .bordered.lg :global(.row) {
    padding: 16px 24px;
  }
  .table :global(li.item) {
    border-bottom: 1px solid #f0f0f0;
  }
  .table :global(li.item) {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  .table :global(svelte-virtual-list-row) {
    border-bottom: 1px solid #f0f0f0;
  }
  .table :global(svelte-virtual-list-contents) {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  .table :global(svelte-virtual-list-row > li.item) {
    border-bottom: none;
  }
  .table :global(svelte-virtual-list-contents li.item) {
    box-shadow: none;
  }

  .table :global(.col-5) {
    width: 5%;
    flex: none;
  }
  .table :global(.col-10) {
    width: 10%;
    flex: none;
  }
  .table :global(.col-15) {
    width: 15%;
    flex: none;
  }
  .table :global(.col-20) {
    width: 20%;
    flex: none;
  }
  .table :global(.col-25) {
    width: 25%;
    flex: none;
  }
  .table :global(.col-30) {
    width: 30%;
    flex: none;
  }
  .table :global(.col-35) {
    width: 35%;
    flex: none;
  }
  .table :global(.col-40) {
    width: 40%;
    flex: none;
  }
  .table :global(.col-45) {
    width: 45%;
    flex: none;
  }
  .table :global(.col-50) {
    width: 50%;
    flex: none;
  }
  .table :global(.col-55) {
    width: 55%;
    flex: none;
  }
  .table :global(.col-60) {
    width: 60%;
    flex: none;
  }
  .table :global(.col-65) {
    width: 65%;
    flex: none;
  }
  .table :global(.col-70) {
    width: 70%;
    flex: none;
  }
  .table :global(.col-75) {
    width: 75%;
    flex: none;
  }
  .table :global(.col-80) {
    width: 80%;
    flex: none;
  }
  .table :global(.col-85) {
    width: 85%;
    flex: none;
  }
  .table :global(.col-90) {
    width: 90%;
    flex: none;
  }
  .table :global(.col-95) {
    width: 95%;
    flex: none;
  }
  .table :global(.col-100) {
    width: 100%;
    flex: none;
  }
</style>

<div
  {style}
  class="table"
  class:sm={size === 'small'}
  class:lg={size === 'large'}
  class:hoverable
  class:bordered>

  <slot />
</div>
