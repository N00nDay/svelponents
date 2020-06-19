<script>
  export let title = undefined;
  export let style = undefined;
</script>

<style>
  .item-group-title {
    height: 1.5715;
    padding: 8px 16px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.5715;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .item-group-list {
    margin: 0;
    padding: 0;
  }
  .item-group-list :global(.item),
  .item-group-list :global(.submenu-title) {
    padding: 0 16px 0 28px;
  }
  .item-group > .item-group-title::after {
    position: relative;
    top: 12px;
    display: block;
    width: calc(100% - 20px);
    height: 1px;
    background: #f0f0f0;
    content: "";
  }
</style>

<li class="item-group">
  {#if title}
    <div class="item-group-title" {style}>{title}</div>
  {/if}
  <ul class="item-group-list">
    <slot />
  </ul>
</li>
