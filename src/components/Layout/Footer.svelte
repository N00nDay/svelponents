<script>
  export let style = undefined;
</script>

<style>
  .footer {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  .footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    background: #f0f2f5;
  }
</style>

<footer {style} class="footer">
  <slot />
</footer>
