<script>
  export let dark = false;
  export let style = undefined;
</script>

<style>
  .grid-demo {
    padding: 16px 0;
    background: #0092ff;
    min-height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #fff;
    text-align: center;
    border-radius: 0;
  }
  .dark {
    background: rgba(0, 146, 255, 0.75);
  }
</style>

<div {style} class:dark class="grid-demo">
  <slot />
</div>
