<script>
  export let style = undefined;
  export let title = undefined;
</script>

<style>
  .head {
    min-height: 48px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 2px 2px 0 0;
    zoom: 1;
  }
  .head::before,
  .head::after {
    display: table;
    content: "";
  }
  .head::after {
    clear: both;
  }
  .head-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .head-title {
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 16px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

<div class="head" {style}>
  <div class="head-wrapper">
    {#if title}
      <div class="head-title" {style}>{title}</div>
    {/if}
    <slot />
  </div>
</div>
