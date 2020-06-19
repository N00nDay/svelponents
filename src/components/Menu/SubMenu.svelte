<script>
  import { getContext, onMount } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import { slide } from "svelte/transition";
  import Icon from "../Icon.svelte";

  export let icon = undefined;
  export let disabled = false;
  export let style = undefined;
  export let titleStyle = undefined;
  export let title = undefined;
  export let key;
  export let active = false;

  const { mode, divider, openKey, collapsed, subSelected } = getContext(
    CONTEXT
  );
  let prevCollapsed;
  let hidden = false;
  let submenu;
  let hover = false;

  function handleEnter() {
    active = true;
  }

  function handleLeave() {
    setTimeout(function() {
      if (!hover) {
        active = false;
      }
    }, 35);
  }

  function handleOver() {
    hover = true;
    active = true;
  }

  function handlePopLeave() {
    hover = false;
    active = false;
  }

  function handleClick() {
    if ($openKey !== key) {
      openKey.set(key);
    } else {
      openKey.set(undefined);
    }
  }

  let popupstyle;
  onMount(async () => {
    const submenuParent = submenu.parentNode;
    let children = submenuParent.parentNode.children;
    let childArr = [];
    for (let i = 0; i < children.length; i++) {
      let role = children[i].getAttribute("role");
      if (role === "menuitem") {
        childArr.push(children[i]);
      }
    }
    const index = Array.from(childArr).indexOf(submenuParent);
    let top = 41 * index;
    popupstyle = `top: ${top}px;`;
    submenu.parentNode.parentNode.appendChild(submenu);
  });

  function custom(node, { delay = 0, duration = 200 }) {
    const o = +getComputedStyle(node).opacity;
    const l = 80;

    return {
      delay,
      duration,
      css: t => {
        return `opacity: ${t * o}; width: ${t * 100}%; left: ${l + t * 10}px;`;
      }
    };
  }
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
  .hidden {
    display: none;
  }
  .submenu,
  .submenu-inline {
    -webkit-transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .submenu-title:active {
    background: #e6f7ff;
  }
  .submenu :global(.sub) {
    cursor: initial;
    -webkit-transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .item-divider {
    height: 1px;
    overflow: hidden;
    line-height: 0;
    background-color: #f0f0f0;
  }
  .menu:not(.inline) :global(.submenu-open),
  .submenu-active,
  .submenu-title:hover {
    color: #1890ff;
  }
  .vertical.sub,
  .vertical-left.sub,
  .vertical-right.sub {
    min-width: 160px;
    max-height: calc(100vh - 100px);
    padding: 0;
    overflow: hidden;
    border-right: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .vertical.sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),
  .vertical-left.sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active),
  .vertical-right.sub:not(.zoom-big-enter-active):not(.zoom-big-leave-active) {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .vertical.sub :global(.item),
  .vertical-left.sub :global(.item),
  .vertical-right.sub :global(.item) {
    left: 0;
    margin-left: 0;
    border-right: 0;
  }
  .vertical.sub :global(.item::after),
  .vertical-left.sub :global(.item::after),
  .vertical-right.sub :global(.item::after) {
    border-right: 4px solid #1890ff;
  }
  .vertical.sub > :global(.item),
  .vertical-left.sub > :global(.item),
  .vertical-right.sub > :global(.item),
  .vertical.sub > :global(.submenu),
  .vertical-left.sub > :global(.submenu),
  .vertical-right.sub > :global(.submenu) {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .horizontal.sub {
    min-width: 114px;
  }
  .submenu-title {
    position: relative;
    display: block;
    margin: 0;
    padding: 0 20px;
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
  .submenu-title :global(.item-title),
  .submenu-title :global(.anticon > svg) {
    vertical-align: middle;
  }
  .submenu-title :global(.anticon) {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
    -webkit-transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: font-size 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .submenu-title :global(.anticon + span) {
    opacity: 1;
    -webkit-transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .item-only-child > :global(.anticon) {
    vertical-align: middle;
    margin-right: 0;
  }
  .submenu > :global(.menu) {
    background-color: #fff;
    border-radius: 2px;
  }
  .submenu > :global(.submenu-title::after) {
    -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .submenu-vertical > :global(.submenu-title .submenu-arrow),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow),
  .submenu-inline > :global(.submenu-title .submenu-arrow) {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;
    -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .submenu-vertical > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow::before),
  .submenu-inline > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical > :global(.submenu-title .submenu-arrow::after),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow::after),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow::after),
  .submenu-inline > :global(.submenu-title .submenu-arrow::after) {
    position: absolute;
    width: 6px;
    height: 1.5px;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgba(0, 0, 0, 0.65)),
      to(rgba(0, 0, 0, 0.65))
    );
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    );
    border-radius: 2px;
    -webkit-transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: "";
  }
  .submenu-vertical > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow::before),
  .submenu-inline > :global(.submenu-title .submenu-arrow::before) {
    -webkit-transform: rotate(45deg) translateY(-2px);
    transform: rotate(45deg) translateY(-2px);
  }
  .submenu-vertical > :global(.submenu-title .submenu-arrow::after),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow::after),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow::after),
  .submenu-inline > :global(.submenu-title .submenu-arrow::after) {
    -webkit-transform: rotate(-45deg) translateY(2px);
    transform: rotate(-45deg) translateY(2px);
  }
  .submenu-vertical > :global(.submenu-title:hover .submenu-arrow::after),
  .submenu-vertical-left > :global(.submenu-title:hover .submenu-arrow::after),
  .submenu-vertical-right > :global(.submenu-title:hover .submenu-arrow::after),
  .submenu-inline > :global(.submenu-title:hover .submenu-arrow::after),
  .submenu-vertical > :global(.submenu-title:hover .submenu-arrow::before),
  .submenu-vertical-left > :global(.submenu-title:hover .submenu-arrow::before),
  .submenu-vertical-right
    > :global(.submenu-title:hover .submenu-arrow::before),
  .submenu-inline > :global(.submenu-title:hover .submenu-arrow::before) {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#1890ff),
      to(#1890ff)
    );
    background: linear-gradient(to right, #1890ff, #1890ff);
  }
  .submenu-vertical > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow::before),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow::before) {
    -webkit-transform: rotate(45deg) translateY(-2px);
    transform: rotate(45deg) translateY(-2px);
  }
  .submenu-vertical > :global(.submenu-title .submenu-arrow::after),
  .submenu-vertical-left > :global(.submenu-title .submenu-arrow::after),
  .submenu-vertical-right > :global(.submenu-title .submenu-arrow::after) {
    -webkit-transform: rotate(-45deg) translateY(2px);
    transform: rotate(-45deg) translateY(2px);
  }
  .submenu-inline > :global(.submenu-title .submenu-arrow::before) {
    -webkit-transform: rotate(-45deg) translateX(2px);
    transform: rotate(-45deg) translateX(2px);
  }
  .submenu-inline > :global(.submenu-title .submenu-arrow::after) {
    -webkit-transform: rotate(45deg) translateX(-2px);
    transform: rotate(45deg) translateX(-2px);
  }
  .submenu-open.submenu-inline > :global(.submenu-title .submenu-arrow) {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  .submenu-open.submenu-inline > :global(.submenu-title .submenu-arrow::after) {
    -webkit-transform: rotate(-45deg) translateX(-2px);
    transform: rotate(-45deg) translateX(-2px);
  }
  .submenu-open.submenu-inline
    > :global(.submenu-title .submenu-arrow::before) {
    -webkit-transform: rotate(45deg) translateX(2px);
    transform: rotate(45deg) translateX(2px);
  }
  .sub.inline {
    padding: 0;
    border: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .sub.inline > :global(.item),
  .sub.inline > :global(.submenu > .submenu-title) {
    padding-left: 32px;
    height: 40px;
    line-height: 40px;
    list-style-position: inside;
    list-style-type: disc;
  }
  .sub.inline :global(.item-group-title) {
    padding-left: 32px;
  }
  .submenu-disabled {
    color: rgba(0, 0, 0, 0.25) !important;
    background: none;
    border-color: transparent !important;
    cursor: not-allowed;
  }
  .submenu-disabled :global(a) {
    color: rgba(0, 0, 0, 0.25) !important;
    pointer-events: none;
  }
  .submenu-disabled > :global(.submenu-title) {
    color: rgba(0, 0, 0, 0.25) !important;
    cursor: not-allowed;
  }
  .submenu-disabled > :global(.submenu-title > .submenu-arrow::before),
  .submenu-disabled > :global(.submenu-title > .submenu-arrow::after) {
    background: rgba(0, 0, 0, 0.25) !important;
  }
  .submenu-popup {
    position: absolute;
    z-index: 1050;
    border-radius: 2px;
    -webkit-box-shadow: none;
    box-shadow: none;
    overflow: hidden;
    -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    left: 80px;
  }
  .submenu-popup-open {
    left: 90px;
  }
  .submenu-placement-rightTop::before {
    top: 0;
    left: -7px;
  }
</style>

<li
  class="submenu"
  class:submenu-disabled={disabled}
  class:submenu-open={$openKey === key}
  class:submenu-inline={mode === 'inline' && !$collapsed}
  class:submenu-horizontal={mode === 'horizontal'}
  class:submenu-vertical={mode === 'vertical' || $collapsed === true}
  class:submenu-vertical-right={mode === 'vertical-right'}
  class:submenu-vertical-left={mode === 'vertical-left'}
  class:item-only-child={!icon}
  {style}
  role="menuitem">
  <div
    on:click={handleClick}
    class="submenu-title"
    class:submenu-active={active || $subSelected === key}
    on:mouseenter|self={handleEnter}
    on:mouseleave|self={handleLeave}
    role="button"
    style={titleStyle}>
    <span>
      {#if icon}
        <span role="img" class="anticon">
          <Icon {icon} />
        </span>
        <span class="item-title">{title}</span>
      {:else}{title}{/if}
    </span>
    <i class="submenu-arrow" />
  </div>
  {#if divider}
    <div class="item-divider" />
  {/if}
  {#if $openKey === key && !$collapsed}
    <ul
      class="menu sub"
      class:inline={mode === 'inline'}
      class:horizontal={mode === 'horizontal'}
      class:vertical={mode === 'vertical'}
      class:vertical-right={mode === 'vertical-right'}
      class:vertical-left={mode === 'vertical-left'}
      class:hidden
      transition:slide|local
      role="menu"
      bind:this={submenu}>
      <slot sub={key} />
    </ul>
  {/if}

  <div
    bind:this={submenu}
    on:mouseover={handleOver}
    on:mouseleave={handlePopLeave}
    style="position: absolute; top: 0px; left: 0px; width: 100%;">
    {#if $collapsed && active}
      <div>
        <div
          transition:custom|local
          class="submenu submenu-popup menu submenu-placement-rightTop"
          class:submenu-popup-open={$collapsed && active}
          style={popupstyle}>
          <ul class="menu sub vertical" role="menu">
            <slot sub={key} />
          </ul>
        </div>
      </div>
    {/if}
  </div>

</li>
