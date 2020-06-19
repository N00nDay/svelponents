<script>
  export let style = undefined;
</script>

<style>
  .content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    /* fix firefox can't set height smaller than content on flex item */
    min-height: 0;
  }
</style>

<main id="main-content" {style} class="content scrollable">
  <slot />
</main>
