<script>
  import { onMount, onDestroy } from "svelte";
  import Icon from "../Icon/Icon.svelte";
  import { CONTEXT } from "./Context.svelte";
  import { getContext } from "svelte";
  import tooltip from "../../utils/tooltip";
  import isEllipsis from "../../utils/isEllipsis";

  export let handleSort = undefined;
  export let style = undefined;
  export let columnStyle = undefined;

  let headerEl, headerTip;

  const {
    selected,
    bordered,
    size,
    sort,
    sortKey,
    headers,
    registerColumnHeader
  } = getContext(CONTEXT);

  function onClick(key) {
    let order;
    if ($sortKey === key) {
      if ($sort === "desc") {
        sort.set("asc");
      } else {
        sort.set("desc");
      }
    } else {
      sort.set("desc");
      sortKey.set(key);
    }
    if (handleSort) {
      order = $sort === "desc" ? "-" : "";
      handleSort(order, key);
    }
  }

  onMount(async () => {
    if (headerEl && isEllipsis(headerEl)) {
      headerTip = tooltip(headerEl, {
        content: headerEl.textContent,
        placement: "bottom"
      });
    }
  });

  onDestroy(async () => {
    if (headerTip) headerTip.destroy();
  });

  registerColumnHeader();
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
  .items {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }
  .lg :global(.item) {
    padding: 0 24px;
  }
  .sm :global(.item) {
    padding: 0 16px;
  }
  .bordered {
    border-bottom: 1px solid #d9d9d9;
  }
  .bordered :global(.item) {
    padding-right: 24px;
    padding-left: 24px;
  }
  .bordered.sm :global(.item) {
    padding: 0 16px;
  }
  .bordered.lg :global(.item) {
    padding: 0 24px;
  }
  .table :global(.item) {
    border-bottom: 1px solid #f0f0f0;
  }
  .table :global(.item:last-child) {
    border-bottom: none;
  }
  .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 0;
    background: #ffffff;
  }
  @media screen and (max-width: 576px) {
    .item {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
  .item-meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    font-size: 0;
    white-space: nowrap;
  }
  .item-meta-avatar {
    margin-right: 16px;
  }
  .item-meta-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0;
    flex: 1 0;
    overflow: hidden;
  }
  .item-meta-title {
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-meta-title > :global(a) {
    color: rgba(0, 0, 0, 0.65);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .item-meta-title > :global(a:hover) {
    color: #1890ff;
  }
  .item-meta-description {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.5715;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sort {
    line-height: 48px;
    margin-left: 8px;
    vertical-align: top !important;
  }
  h4,
  .sort :global(svg) {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .sort.asc :global(svg) {
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    transform-origin: center center;
  }
  .sortable {
    cursor: pointer;
  }
  .sortable .active,
  .sortable:hover h4,
  .sortable:hover :global(svg) {
    color: #1890ff;
  }
  .right {
    text-align: right;
  }
  .item-meta {
    padding-right: 8px;
  }
  .item-meta:last-child {
    padding-right: 0;
  }
  h4.item-meta-title {
    height: 48px;
    line-height: 48px;
    display: inline-block;
  }
</style>

<div
  {style}
  class="table"
  class:sm={size === 'small'}
  class:lg={size === 'large'}
  class:bordered>
  <ul class="items">
    <li class="item" style={columnStyle}>
      {#each $headers as header, i (header.key)}
        <div
          class="item-meta {`col-${header.width}`}"
          class:sortable={header.sortable}
          style={header.style}
          on:click={header.sortable ? () => onClick(header.key) : undefined}>
          <div
            class="item-meta-content"
            class:right={header.align === 'right' || header.type === 'currency' || header.type === 'number' || header.type === 'percent' || header.type === 'date'}>
            <h4
              bind:this={headerEl}
              class="item-meta-title"
              class:active={$sortKey === header.key}>
              {header.name}
            </h4>
            {#if $sortKey === header.key}
              <span class="sort {$sort}" class:active={$sortKey === header.key}>
                <Icon icon="arrowDown" style="vertical-align: middle;" />
              </span>
            {/if}
          </div>
        </div>
      {/each}
    </li>
  </ul>
</div>
