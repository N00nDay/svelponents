<script>
  import { CONTEXT } from "./Context.svelte";
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import Icon from "../Icon/Icon.svelte";

  export let style = undefined;
  export let theme = "light";
  export let mode = "vertical";
  export let divider = false;
  export let collapsed = false;
  export let defaultSelectedKey = undefined;
  export let defaultOpenKey = undefined;

  let selectedKey = writable(defaultSelectedKey);
  let openKey = writable(defaultOpenKey);
  let inlineCollapsed = writable(collapsed);
  let subSelected = writable(defaultOpenKey);

  $: {
    inlineCollapsed.set(collapsed);
  }

  let menu;
  setContext(CONTEXT, {
    mode,
    divider,
    menu,
    selectedKey,
    openKey,
    subSelected,
    collapsed: inlineCollapsed
  });
</script>

<style>
  .menu {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    line-height: 1.5715;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    margin-bottom: 0;
    padding-left: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 0;
    text-align: left;
    list-style: none;
    background: #fff;
    outline: none;
    -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    -webkit-transition: background 0.3s, width 0.2s;
    transition: background 0.3s, width 0.2s;
  }
  .menu::before {
    display: table;
    content: "";
  }
  .menu::after {
    display: table;
    clear: both;
    content: "";
  }
  .menu :global(ul),
  .menu :global(ol) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .horizontal :global(.item),
  .horizontal :global(.submenu) {
    margin-top: -1px;
  }
  .horizontal > :global(.item:hover),
  .horizontal > :global(.item-active),
  .horizontal > :global(.submenu .submenu-title:hover) {
    background-color: transparent;
  }
  :global(.item-selected) {
    color: #1890ff;
  }
  :global(.item-selected a),
  :global(.item-selected a:hover) {
    color: #1890ff;
  }
  .menu:not(.horizontal) :global(.item-selected) {
    background-color: #e6f7ff;
  }
  .inline,
  .vertical,
  .vertical-left {
    border-right: 1px solid #f0f0f0;
  }
  .vertical-right {
    border-left: 1px solid #f0f0f0;
  }
  .vertical :global(.submenu-selected),
  .vertical-left :global(.submenu-selected),
  .vertical-right :global(.submenu-selected) {
    color: #1890ff;
  }
  .vertical :global(.submenu-selected a),
  .vertical-left :global(.submenu-selected a),
  .vertical-right :global(.submenu-selected a) {
    color: #1890ff;
  }
  .horizontal {
    line-height: 46px;
    white-space: nowrap;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .horizontal > :global(.item),
  .horizontal > :global(.submenu) {
    position: relative;
    top: 1px;
    display: inline-block;
    vertical-align: bottom;
    border-bottom: 2px solid transparent;
  }
  .horizontal > :global(.item:hover),
  .horizontal > :global(.submenu:hover),
  .horizontal > :global(.item-active),
  .horizontal > :global(.submenu-active),
  .horizontal > :global(.item-open),
  .horizontal > :global(.submenu-open),
  .horizontal > :global(.item-selected),
  .horizontal > :global(.submenu-selected) {
    color: #1890ff;
  }
  .horizontal > :global(.item::after) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    border-bottom: 3px solid #1890ff;
    -webkit-transform: scaleX(0.0001);
    transform: scaleX(0.0001);
    opacity: 0;
    -webkit-transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: "";
  }
  .horizontal :global(.item.selected::after),
  .horizontal :global(.item.item-selected::after) {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
    -webkit-transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .horizontal > :global(.item a) {
    color: rgba(0, 0, 0, 0.65);
  }
  .horizontal > :global(.item a:hover) {
    color: #1890ff;
  }
  .horizontal > :global(.item a::before) {
    bottom: -2px;
  }
  .horizontal > :global(.item-selected a) {
    color: #1890ff;
  }
  .horizontal::after {
    display: block;
    clear: both;
    height: 0;
    content: "\20";
  }
  .vertical :global(.item),
  .vertical-left :global(.item),
  .vertical-right :global(.item),
  .inline :global(.item) {
    position: relative;
  }
  .vertical :global(.item::after),
  .vertical-left :global(.item::after),
  .vertical-right :global(.item::after),
  .inline :global(.item::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    border-right: 3px solid #1890ff;
    -webkit-transform: scaleY(0.0001);
    transform: scaleY(0.0001);
    opacity: 0;
    -webkit-transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
    content: "";
  }
  .vertical :global(.item),
  .vertical-left :global(.item),
  .vertical-right :global(.item),
  .inline :global(.item),
  .vertical :global(.submenu-title),
  .vertical-left :global(.submenu-title),
  .vertical-right :global(.submenu-title),
  .inline :global(.submenu-title) {
    height: 40px;
    /* margin-top: 4px;
    margin-bottom: 4px; */
    padding: 0 16px;
    overflow: hidden;
    line-height: 40px;
    text-overflow: ellipsis;
  }
  .vertical :global(.submenu),
  .vertical-left :global(.submenu),
  .vertical-right :global(.submenu),
  .inline :global(.submenu) {
    padding-bottom: 0.02px;
  }
  /* .vertical :global(.item:not(:last-child)),
  .vertical-left :global(.item:not(:last-child)),
  .vertical-right :global(.item:not(:last-child)),
  .inline :global(.item:not(:last-child)) {
    margin-bottom: 8px;
  } */
  .vertical > :global(.item),
  .vertical-left > :global(.item),
  .vertical-right > :global(.item),
  .inline > :global(.item),
  .vertical > :global(.submenu > .submenu-title),
  .vertical-left > :global(.submenu > .submenu-title),
  .vertical-right > :global(.submenu > .submenu-title),
  .inline > :global(.submenu > .submenu-title) {
    height: 40px;
    line-height: 40px;
  }
  .vertical :global(.submenu-title) {
    padding-right: 34px;
  }
  .inline {
    width: 100%;
  }
  .inline :global(.item.selected::after),
  .inline :global(.item.item-selected::after) {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    opacity: 1;
    -webkit-transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .inline :global(.item),
  .inline :global(.submenu-title) {
    width: calc(100% + 1px);
  }
  .inline :global(.submenu-title) {
    padding-right: 34px;
  }
  .inline-collapsed {
    width: 80px;
    position: relative;
  }
  .inline-collapsed :global(.item-group-title) {
    display: none;
  }
  .inline-collapsed > :global(.item),
  .inline-collapsed > :global(.item-group > .item-group-list > .item),
  .inline-collapsed
    > :global(.item-group > .item-group-list > .submenu > .submenu-title),
  .inline-collapsed > :global(.submenu > .submenu-title) {
    left: 0;
    padding: 0 30px;
    text-overflow: clip;
  }
  .inline-collapsed > :global(.item .submenu-arrow),
  .inline-collapsed
    > :global(.item-group > .item-group-list > .item .submenu-arrow),
  .inline-collapsed
    > :global(.item-group
      > .item-group-list
      > .submenu
      > .submenu-title
      .submenu-arrow),
  .inline-collapsed > :global(.submenu > .submenu-title .submenu-arrow) {
    display: none;
  }
  .inline-collapsed > :global(.item .anticon),
  .inline-collapsed > :global(.item-group > .item-group-list > .item .anticon),
  .inline-collapsed
    > :global(.item-group
      > .item-group-list
      > .submenu
      > .submenu-title
      .anticon),
  .inline-collapsed > :global(.submenu > .submenu-title .anticon) {
    margin: 0;
    font-size: 16px;
    line-height: 40px;
  }
  .inline-collapsed > :global(.item .anticon + span),
  .inline-collapsed
    > :global(.item-group > .item-group-list > .item .anticon + span),
  .inline-collapsed
    > :global(.item-group
      > .item-group-list
      > .submenu
      > .submenu-title
      .anticon
      + span),
  .inline-collapsed > :global(.submenu > .submenu-title .anticon + span) {
    display: inline-block;
    max-width: 0;
    opacity: 0;
  }
  .inline-collapsed :global(.anticon) {
    display: inline-block;
  }
  .inline-collapsed :global(.item-group-title) {
    padding-right: 4px;
    padding-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .root.vertical,
  .root.vertical-left,
  .root.vertical-right,
  .root.inline {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .menu.dark,
  .dark :global(.sub) {
    color: rgba(255, 255, 255, 0.65);
    background: rgb(40, 41, 44);
  }
  .menu.dark :global(.submenu-title .submenu-arrow),
  .dark :global(.sub .submenu-title .submenu-arrow) {
    opacity: 0.45;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .menu.dark :global(.submenu-title .submenu-arrow::after),
  .dark :global(.sub .submenu-title .submenu-arrow::after),
  .menu.dark :global(.submenu-title .submenu-arrow::before),
  .dark :global(.sub .submenu-title .submenu-arrow::before) {
    background: #fff;
  }
  .dark :global(.inline.sub) {
    background: rgb(40, 41, 44);
  }
  .dark.horizontal {
    border-bottom: 0;
  }
  .dark.horizontal > :global(.item),
  .dark.horizontal > :global(.submenu) {
    top: 0;
    margin-top: 0;
    border-color: rgb(40, 41, 44);

    border-bottom: 0;
  }
  .dark.horizontal > :global(.item > a::before) {
    bottom: 0;
  }
  .dark :global(.item),
  .dark :global(.item-group-title),
  .dark :global(.item > a),
  .dark :global(.item > span > a) {
    color: rgba(255, 255, 255, 0.65);
  }
  .dark.inline,
  .dark.vertical,
  .dark.vertical-left,
  .dark.vertical-right {
    border-right: 0;
  }
  .dark.inline :global(.sub.vertical) {
    background: rgb(40, 41, 44);
  }
  .dark.inline :global(.item-divider) {
    background: rgb(46, 49, 52);
  }
  .dark.inline :global(.item),
  .dark.vertical :global(.item),
  .dark.vertical-left :global(.item),
  .dark.vertical-right :global(.item) {
    left: 0;
    margin-left: 0;
    border-right: 0;
    background: transparent;
  }
  .dark.inline :global(.item::after),
  .dark.vertical :global(.item::after),
  .dark.vertical-left :global(.item::after),
  .dark.vertical-right :global(.item::after) {
    border-right: 0;
  }
  .dark.inline :global(.item),
  .dark.inline :global(.submenu-title) {
    width: 100%;
  }
  .dark :global(.item:hover),
  .dark :global(.item-active),
  .dark :global(.submenu-active),
  /* .dark :global(.submenu-open), */
  .dark :global(.submenu-selected),
  .dark :global(.submenu-title:hover) {
    color: #fff;
    background-color: transparent;
  }
  .dark :global(.item:hover > a),
  .dark :global(.item-active > a),
  .dark :global(.submenu-active > a),
  .dark :global(.submenu-open > a),
  .dark :global(.submenu-selected > a),
  .dark :global(.submenu-title:hover > a),
  .dark :global(.item:hover > span > a),
  .dark :global(.item-active > span > a),
  .dark :global(.submenu-active > span > a),
  .dark :global(.submenu-open > span > a),
  .dark :global(.submenu-selected > span > a),
  .dark :global(.submenu-title:hover > span > a) {
    color: #fff;
  }
  .dark :global(.item:hover > .submenu-title > .submenu-arrow),
  .dark :global(.item-active > .submenu-title > .submenu-arrow),
  .dark :global(.submenu-active > .submenu-title > .submenu-arrow),
  .dark :global(.submenu-open > .submenu-title > .submenu-arrow),
  .dark :global(.submenu-selected > .submenu-title > .submenu-arrow),
  .dark :global(.submenu-title:hover > .submenu-title > .submenu-arrow),
  .dark :global(.item:hover > .submenu-title:hover > .submenu-arrow),
  .dark :global(.item-active > .submenu-title:hover > .submenu-arrow),
  .dark :global(.submenu-active > .submenu-title:hover > .submenu-arrow),
  .dark :global(.submenu-open > .submenu-title:hover > .submenu-arrow),
  .dark :global(.submenu-selected > .submenu-title:hover > .submenu-arrow),
  .dark :global(.submenu-title:hover > .submenu-title:hover > .submenu-arrow) {
    opacity: 1;
  }
  .dark :global(.item:hover > .submenu-title > .submenu-arrow::after),
  .dark :global(.item-active > .submenu-title > .submenu-arrow::after),
  .dark :global(.submenu-active > .submenu-title > .submenu-arrow::after),
  .dark :global(.submenu-open > .submenu-title > .submenu-arrow::after),
  .dark :global(.submenu-selected > .submenu-title > .submenu-arrow::after),
  .dark :global(.submenu-title:hover > .submenu-title > .submenu-arrow::after),
  .dark :global(.item:hover > .submenu-title:hover > .submenu-arrow::after),
  .dark :global(.item-active > .submenu-title:hover > .submenu-arrow::after),
  .dark :global(.submenu-active > .submenu-title:hover > .submenu-arrow::after),
  .dark :global(.submenu-open > .submenu-title:hover > .submenu-arrow::after),
  .dark
    :global(.submenu-selected > .submenu-title:hover > .submenu-arrow::after),
  .dark
    :global(.submenu-title:hover
      > .submenu-title:hover
      > .submenu-arrow::after),
  .dark :global(.item:hover > .submenu-title > .submenu-arrow::before),
  .dark :global(.item-active > .submenu-title > .submenu-arrow::before),
  .dark :global(.submenu-active > .submenu-title > .submenu-arrow::before),
  .dark :global(.submenu-open > .submenu-title > .submenu-arrow::before),
  .dark :global(.submenu-selected > .submenu-title > .submenu-arrow::before),
  .dark :global(.submenu-title:hover > .submenu-title > .submenu-arrow::before),
  .dark :global(.item:hover > .submenu-title:hover > .submenu-arrow::before),
  .dark :global(.item-active > .submenu-title:hover > .submenu-arrow::before),
  .dark
    :global(.submenu-active > .submenu-title:hover > .submenu-arrow::before),
  .dark :global(.submenu-open > .submenu-title:hover > .submenu-arrow::before),
  .dark
    :global(.submenu-selected > .submenu-title:hover > .submenu-arrow::before),
  .dark
    :global(.submenu-title:hover
      > .submenu-title:hover
      > .submenu-arrow::before) {
    background: #fff;
  }
  .dark :global(.item:hover) {
    background-color: transparent;
  }
  .dark.dark:not(.horizontal) :global(.item-selected) {
    background-color: #1890ff;
  }
  .dark :global(.item-selected) {
    color: #fff;
    border-right: 0;
  }
  .dark :global(.item-selected::after) {
    border-right: 0;
  }
  .dark :global(.item-selected > a),
  .dark :global(.item-selected > span > a),
  .dark :global(.item-selected > a:hover),
  .dark :global(.item-selected > span > a:hover) {
    color: #fff;
  }
  .dark :global(.item-selected .anticon) {
    color: #fff;
  }
  .dark :global(.item-selected .anticon + span) {
    color: #fff;
  }
  .menu.dark :global(.item-selected) {
    background-color: #1890ff;
  }
  .dark :global(.item-disabled),
  .dark :global(.submenu-disabled),
  .dark :global(.item-disabled > a),
  .dark :global(.submenu-disabled > a),
  .dark :global(.item-disabled > span > a),
  .dark :global(.submenu-disabled > span > a) {
    color: rgba(255, 255, 255, 0.35) !important;
    opacity: 0.8;
  }
  .dark :global(.item-disabled > .submenu-title),
  .dark :global(.submenu-disabled > .submenu-title) {
    color: rgba(255, 255, 255, 0.35) !important;
  }
  .dark :global(.item-disabled > .submenu-title > .submenu-arrow::before),
  .dark :global(.submenu-disabled > .submenu-title > .submenu-arrow::before),
  .dark :global(.item-disabled > .submenu-title > .submenu-arrow::after),
  .dark :global(.submenu-disabled > .submenu-title > .submenu-arrow::after) {
    background: rgba(255, 255, 255, 0.35) !important;
  }
</style>

<ul
  bind:this={menu}
  class="menu root"
  class:light={theme === 'light'}
  class:dark={theme === 'dark'}
  class:inline={mode === 'inline'}
  class:horizontal={mode === 'horizontal'}
  class:vertical={mode === 'vertical'}
  class:vertical-right={mode === 'vertical-right'}
  class:vertical-left={mode === 'vertical-left'}
  class:inline-collapsed={collapsed}
  role="menu"
  {style}>
  <slot />
</ul>
