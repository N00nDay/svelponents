<script>
  import Icon from "../Icon/Icon.svelte";
  import { getContext } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  export let style = undefined;

  const { onClose, closable, closeIcon } = getContext(CONTEXT);
</script>

<style>
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
  }
</style>

<div class="header" {style}>
  {#if closable}
    <div class="close" on:click={onClose}>
      <Icon icon={closeIcon} />
    </div>
  {/if}
  <div class="title">
    <slot />
  </div>
</div>
