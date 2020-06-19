<script>
  export let style = undefined;
</script>

<style>
  .extra {
    float: right;
    margin-left: auto;
    padding: 16px 0;
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    font-size: 14px;
  }
</style>

<div class="extra" {style}>
  <a href="." on:click={e => e.preventDefault()}>
    <slot />
  </a>
</div>
