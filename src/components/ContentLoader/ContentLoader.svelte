<script>
  import { fade } from "svelte/transition";
  import Loader from "../Loader/Loader.svelte";
  export let loading = false;
  let el;

  function introstart() {
    const parent = el.parentNode;
    parent.style.position = "relative";
  }

  function outroend() {
    const parent = el.parentNode;
    parent.style.position = "initial";
  }
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    backdrop-filter: blur(2px);
    z-index: 1;
    background: rgba(0, 0, 0, 0.05);
  }
</style>

{#if loading}
  <div
    bind:this={el}
    transition:fade|local={{ duration: 100 }}
    on:outroend={outroend}
    on:introstart={introstart}
    class="container">
    <Loader />
  </div>
{/if}
