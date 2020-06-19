<script>
  export let style = undefined;
</script>

<style>
  .body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 24px;
    overflow: auto;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
</style>

<div class="body scrollable" {style}>
  <slot />
</div>
