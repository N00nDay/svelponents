<script>
  import { getContext, afterUpdate } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import addStyle from "../../utils/addStyle";
  export let theme = "light";
  export let style = undefined;
  export let collapsed = false;
  export let width = 200;
  export let collapsedWidth = 80;

  const { registerSider } = getContext(CONTEXT);

  registerSider();

  afterUpdate(async () => {
    if (collapsed) {
      style = addStyle({
        style,
        attribute: true,
        string: `width: ${collapsedWidth}px;`
      });
    } else {
      style = addStyle({
        style,
        attribute: true,
        string: `width: ${width}px;`
      });
    }
  });
</script>

<style>
  .sider {
    position: relative;
    /* fix firefox can't set width smaller than content on flex item */
    min-width: 0;
    background: #001529;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
  .sider-children {
    height: 100%;
    margin-top: -0.1px;
    padding-top: 0.1px;
  }
  .sider-zero-width > * {
    overflow: hidden;
  }
  .sider-light {
    background: #fff;
  }
</style>

<aside
  class="sider scrollable"
  class:sider-light={theme === 'light'}
  class:sider-dark={theme === 'dark'}
  class:collapsed
  {style}>
  <div class="sider-children">
    <slot />
  </div>
</aside>
