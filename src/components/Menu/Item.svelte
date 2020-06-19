<script>
  import { getContext, onMount, afterUpdate } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import Icon from "../Icon/Icon.svelte";
  import tooltip from "../../utils/tooltip";

  export let title = undefined;
  export let icon = undefined;
  export let style = undefined;
  export let active = false;
  export let disabled = false;
  export let key;
  export let handleClick = undefined;
  export let sub = undefined;

  const { divider, selectedKey, collapsed, subSelected } = getContext(CONTEXT);
  let prevCollapsed;

  function handleActive() {
    active = !active;
  }

  function handleSelect() {
    if (handleClick) handleClick();
    selectedKey.set(key);
    subSelected.set(sub);
  }

  let el, tip;
  $: {
    if (el && !sub) {
      if ($collapsed && !prevCollapsed) {
        if (tip) {
          tip.enable();
        } else {
          tip = tooltip(el, {
            content: title,
            placement: "right"
          });
        }
      } else if ($collapsed === false && prevCollapsed && tip) {
        tip.disable();
      }
      prevCollapsed = $collapsed;
    }
  }
</script>

<style>
  .item:active {
    background: #e6f7ff;
  }
  .item :global(a) {
    color: rgba(0, 0, 0, 0.65);
  }
  .item :global(a:hover) {
    color: #1890ff;
  }
  .item :global(a::before) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    content: "";
  }
  .item > :global(.badge a) {
    color: rgba(0, 0, 0, 0.65);
  }
  .item > :global(.badge a:hover) {
    color: #1890ff;
  }
  .item-divider {
    height: 1px;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0;
  }
  .item:hover,
  .item-active {
    color: #1890ff;
  }
  .item {
    position: relative;
    display: block;
    margin: 0;
    padding: 0 20px;
    padding-left: 16px;
    white-space: nowrap;
    cursor: pointer;
    -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .item :global(.item-title),
  .item :global(.anticon > svg) {
    vertical-align: middle;
  }
  .item :global(.anticon) {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
    -webkit-transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .item :global(.anticon + span) {
    opacity: 1;
    -webkit-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .item.item-only-child > :global(.anticon) {
    vertical-align: middle;
    margin-right: 0;
  }
  .item-disabled {
    color: rgba(0, 0, 0, 0.25) !important;
    background: none;
    border-color: transparent !important;
    cursor: not-allowed;
  }
  .item-disabled :global(a) {
    color: rgba(0, 0, 0, 0.25) !important;
    pointer-events: none;
  }
  .item-disabled > :global(.submenu-title) {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
  }
  .item-disabled > :global(.submenu-title > .submenu-arrow::before),
  .item-disabled > :global(.submenu-title > .submenu-arrow::after) {
    background: rgba(0, 0, 0, 0.25) !important;
  }
</style>

<li
  bind:this={el}
  class="item"
  role="menuitem"
  on:mouseenter|self={handleActive}
  on:mouseleave|self={handleActive}
  class:item-selected={$selectedKey === key}
  class:item-active={active}
  class:item-disabled={disabled}
  class:item-only-child={!icon}
  on:click={handleSelect}
  {style}>
  {#if icon}
    <span role="img" class="anticon">
      <Icon {icon} />
    </span>
    <span class="item-title">{title}</span>
  {:else}{title}{/if}
</li>
{#if divider}
  <li class="item-divider" />
{/if}
