<script>
  import { CONTEXT } from "./Context.svelte";
  import { getContext } from "svelte";
  import ContentLoader from "../ContentLoader/ContentLoader.svelte";
  import debounce from "../../utils/debounce";
  export let style = undefined;

  let el;

  const { tableContentHeight, heightUpdated, loading } = getContext(CONTEXT);

  const handle_resize = debounce(function() {
    heightUpdated();
  }, 250);
</script>

<style>
  .rows {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }
</style>

<svelte:window on:resize={handle_resize} />
<ul
  style="{style} height: {$tableContentHeight}px;"
  class="rows"
  bind:this={el}>
  <ContentLoader {$loading} />
  <slot contentHeight={$tableContentHeight} />
</ul>
