<script>
  export let style = undefined;
</script>

<style>
  .header {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    height: 64px;
    padding: 0 50px;
    line-height: 64px;
    background: #001529;
    color: #fff;
  }
</style>

<header class="header" {style}>
  <slot />
</header>
