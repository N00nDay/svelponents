<script>
  import Icon from "../Icon.svelte";
  export let style = undefined;
  export let icon = undefined;
  export let text = undefined;
  export let iconPlacement = "left";
</script>

<style>
  li {
    margin: 12px 0;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    flex-grow: 1;
  }
  li > span {
    position: relative;
    display: block;
    min-width: 32px;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }
  li > span:hover {
    color: #1890ff;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  li > span :global(a:not(.btn)) {
    display: inline-block;
    width: 100%;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  li > span :global(a:not(.btn):hover) {
    color: #1890ff;
  }
  li:not(:last-child) {
    border-right: 1px solid #e8e8e8;
  }
</style>

<li {style} on:click>
  <span>
    {#if iconPlacement === 'right' && text}
      <span>{text}</span>
    {/if}
    <Icon {icon} />
    {#if iconPlacement === 'left' && text}
      <span>{text}</span>
    {/if}
  </span>
</li>
