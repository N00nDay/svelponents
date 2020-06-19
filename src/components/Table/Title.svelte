<script>
  export let style = undefined;
</script>

<style>
  .heading-title {
    margin-right: 12px;
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

<span class="heading-title" {style}>
  <slot />
</span>
