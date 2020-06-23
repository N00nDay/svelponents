<script>
  import { getContext } from "svelte";
  import { get } from "svelte/store";
  import { CONTEXT } from "./Context.svelte";
  export let style = undefined;
  export let onClick = undefined;
  export let key = null;

  const { selectable, selected } = getContext(CONTEXT);

  function handleClick() {
    if (selectable) {
      if ($selected !== key) {
        selected.set(key);
      } else {
        selected.set(null);
      }
    }
    if (onClick) onClick();
  }
</script>

<style>
  .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 12px 0;
    background: #ffffff;
  }
  .selectable {
    cursor: pointer;
  }
  .selectable:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  li.item.selected {
    background-color: rgba(98, 0, 238, 0.04) !important;
  }
  @media screen and (max-width: 576px) {
    .item {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
</style>

<li
  class="item"
  class:selectable
  class:selected={$selected === key}
  {style}
  on:click={handleClick}>
  <slot />
</li>
