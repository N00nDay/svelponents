<script>
  export let style = undefined;
</script>

<style>
  .actions {
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
    zoom: 1;
    display: flex;
  }
  .actions::before,
  .actions::after {
    display: table;
    content: "";
  }
  .actions::after {
    clear: both;
  }
</style>

<ul class="actions" {style}>
  <slot />
</ul>
