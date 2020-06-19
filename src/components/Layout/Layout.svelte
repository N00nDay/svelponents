<script>
  import { CONTEXT } from "./Context.svelte";
  import { setContext } from "svelte";
  export let style = undefined;
  let sider = false;

  setContext(CONTEXT, {
    registerSider() {
      sider = true;
    }
  });
</script>

<style>
  .layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    /* fix firefox can't set height smaller than content on flex item */
    min-height: 0;
    background: #f0f2f5;
  }
  .layout,
  .layout * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }
  .layout.has-sider {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .layout.has-sider > :global(.layout),
  .layout.has-sider > :global(.content) {
    overflow-x: hidden;
  }
</style>

<section class="layout" class:has-sider={sider} {style}>
  <slot />
</section>
