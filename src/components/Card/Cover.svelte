<script>
  import { getContext } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  const { handleClick } = getContext(CONTEXT);
  export let style = undefined;
  export let alt = undefined;
  export let src = undefined;
</script>

<style>
  .cover > :global(*) {
    display: block;
    width: 100%;
  }
  .cover :global(img) {
    border-radius: 2px 2px 0 0;
  }
</style>

<div class="cover" on:click={handleClick} {style}>
  <img {alt} {src} />

</div>
