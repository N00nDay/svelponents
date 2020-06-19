<script>
  import { onMount } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import { setContext } from "svelte";

  export let placement = "left";
  export let open = false;
  export let mask = true;
  export let style = undefined;
  export let maskClosable = true;
  export let onClose = undefined;
  export let closable = true;
  export let closeIcon = "close";
  export let appendToParent = false;

  setContext(CONTEXT, {
    onClose,
    closable,
    closeIcon
  });

  let drawer;
  onMount(async () => {
    if (appendToParent) {
      let parent = drawer.parentElement;
      parent.classList.add("contain-child");
    }
  });
</script>

<style>
  .drawer {
    position: fixed;
    z-index: 1000;
    width: 0%;
    height: 100%;
    -webkit-transition: height 0s ease 0.3s, width 0s ease 0.3s,
      -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: height 0s ease 0.3s, width 0s ease 0.3s,
      -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      height 0s ease 0.3s, width 0s ease 0.3s;
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      height 0s ease 0.3s, width 0s ease 0.3s,
      -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
  .drawer > * {
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      -webkit-box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      -webkit-box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      -webkit-box-shadow 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
  .content-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
  .drawer .content {
    width: 100%;
    height: 100%;
  }
  .left,
  .right {
    top: 0;
    width: 0%;
    height: 100%;
  }
  .left .content-wrapper,
  .right .content-wrapper {
    height: 100%;
    width: 320px;
  }
  .left .content-wrapper {
    transform: translateX(-100%);
  }
  .right .content-wrapper {
    transform: translateX(100%);
  }
  .left.open,
  .right.open {
    width: 100%;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
  .right.open .content-wrapper,
  .left.open .content-wrapper {
    transform: translateX(0);
  }
  .left {
    left: 0;
  }
  .left .content-wrapper {
    left: 0;
  }
  .left.open .content-wrapper {
    -webkit-box-shadow: 6px 0 16px -8px rgba(0, 0, 0, 0.08),
      9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03);
    box-shadow: 6px 0 16px -8px rgba(0, 0, 0, 0.08),
      9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03);
  }
  .right {
    right: 0;
  }
  .right .content-wrapper {
    right: 0;
  }
  .right.open .content-wrapper {
    -webkit-box-shadow: -6px 0 16px -8px rgba(0, 0, 0, 0.08),
      -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03);
    box-shadow: -6px 0 16px -8px rgba(0, 0, 0, 0.08),
      -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03);
  }
  .right.open.no-mask {
    right: 1px;
    -webkit-transform: translateX(1px);
    transform: translateX(1px);
    pointer-events: none;
  }
  .top,
  .bottom {
    left: 0;
    width: 100%;
    height: 0%;
  }
  .top .content-wrapper,
  .bottom .content-wrapper {
    width: 100%;
    height: 100%;
  }
  .top .content-wrapper {
    transform: translateY(-100%);
  }
  .bottom .content-wrapper {
    transform: translateY(100%);
  }
  .top.open,
  .bottom.open {
    height: 100%;
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
      -webkit-transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
  .top.open .content-wrapper,
  .bottom.open .content-wrapper {
    transform: translateY(0);
  }
  .top {
    top: 0;
  }
  .top.open .content-wrapper {
    -webkit-box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
      0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
    box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
      0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
  }
  .bottom {
    bottom: 0;
  }
  .bottom .content-wrapper {
    bottom: 0;
  }
  .bottom.open .content-wrapper {
    -webkit-box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08),
      0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03);
    box-shadow: 0 -6px 16px -8px rgba(0, 0, 0, 0.08),
      0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03);
  }
  .bottom.open.no-mask {
    bottom: 1px;
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  .drawer.open .mask {
    height: 100%;
    opacity: 1;
    -webkit-transition: none;
    transition: none;
    -webkit-animation: drawerFadeIn 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    animation: drawerFadeIn 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  }
  .content {
    position: relative;
    z-index: 1;
    overflow: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
  }
  .wrapper-body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.45);
    opacity: 0;
    filter: alpha(opacity=45);
    -webkit-transition: opacity 0.3s linear, height 0s ease 0.3s;
    transition: opacity 0.3s linear, height 0s ease 0.3s;
  }
  .appendToParent {
    position: absolute;
  }
  :global(.contain-child) {
    position: relative;
    overflow: hidden;
  }
  @-webkit-keyframes drawerFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes drawerFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* .body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 24px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }

  .footer {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px 10px;
    border-top: 1px solid #f0f0f0;
  }

  .title {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: block;
    padding: 20px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: 700;
    font-size: 16px;
    font-style: normal;
    line-height: 1;
    text-align: center;
    text-transform: none;
    text-decoration: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    text-rendering: auto;
  }
  .close:focus,
  .close:hover {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
  }
  .header {
    position: relative;
    padding: 18.5px 24px;
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
  } */
</style>

<div
  bind:this={drawer}
  tabindex="-1"
  class="drawer"
  class:left={placement === 'left'}
  class:top={placement === 'top'}
  class:right={placement === 'right'}
  class:bottom={placement === 'bottom'}
  class:open
  class:no-mask={!mask}
  class:appendToParent>
  {#if mask}
    <div class="mask" on:click={maskClosable ? onClose : null} />
  {/if}
  <div class="content-wrapper" {style}>
    <div class="content">
      <div class="wrapper-body">
        <slot />

      </div>
    </div>
  </div>

</div>
