<script>
  import { onMount, onDestroy } from "svelte";
  import tooltip from "../../utils/tooltip";
  import isEllipsis from "../../utils/isEllipsis";

  export let content = undefined;
  export let style = undefined;
  export let contentStyle = undefined;
  export let align = "left";
  export let type = "string";
  export let width = undefined;

  const Slots = $$props.$$slots;
  let contentTip, contentEl;

  onMount(async () => {
    if (contentEl && isEllipsis(contentEl)) {
      contentTip = tooltip(contentEl, {
        content: content,
        placement: "bottom"
      });
    }
  });

  onDestroy(async () => {
    if (contentTip) contentTip.destroy();
  });
</script>

<style>
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
    padding-right: 8px;
  }
  .item-meta:last-child {
    padding-right: 0;
  }
  .item-meta-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0;
    flex: 1 0;
    overflow: hidden;
  }
  .item-meta-description {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.5715;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .right {
    text-align: right;
  }
</style>

<div class="item-meta {`col-${width}`}" {style}>
  <div
    class="item-meta-content"
    class:right={align === 'right' || type === 'currency' || type === 'number' || type === 'percent' || type === 'date'}>
    {#if content}
      <div
        bind:this={contentEl}
        class="item-meta-description"
        class:right={align === 'right' || type === 'currency' || type === 'number' || type === 'percent' || type === 'date'}
        style={contentStyle}>
        {content}
      </div>
    {/if}
    {#if Slots}
      <div
        bind:this={contentEl}
        class:right={align === 'right' || type === 'currency' || type === 'number' || type === 'percent' || type === 'date'}
        class="item-meta-description"
        style={contentStyle}>
        <slot />
      </div>
    {/if}
  </div>
</div>
