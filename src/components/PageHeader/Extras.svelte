<script>
  export let style = undefined;
</script>

<style>
  .heading-extra {
    margin: 4px 0;
    white-space: nowrap;
    flex-grow: 1;
    text-align: right;
  }
  .heading-extra > * {
    margin-left: 12px;
    white-space: unset;
  }
  .heading-extra > :global(*:first-child) {
    margin-left: 0;
  }
</style>

<span class="heading-extra" {style}>
  <slot />
</span>
