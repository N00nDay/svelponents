<script>
  import { onMount } from "svelte";
  import addWrapper from "../utils/addWrapper";
  import setSize from "../utils/setSize";
  export let direction = "horizontal";
  export let align = undefined;
  export let justify = undefined;
  export let size = "small";
  export let style = undefined;

  size = setSize(size);

  let string;
  if (justify !== undefined) {
    string = "";
  } else if (direction === "horizontal") {
    string = `margin-right: ${size};`;
  } else {
    string = `margin-bottom: ${size};`;
  }

  let currentEl;
  onMount(async () => {
    addWrapper({
      node: currentEl,
      tag: "div",
      style: string
    });
  });
</script>

<style>
  .space {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
  .space.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .vertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .align-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .align-start {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .align-end {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .align-baseline {
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
  }
  .align-stretch {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  .justify-space-around {
    justify-content: space-around;
  }
  .justify-space-between {
    justify-content: space-between;
  }
  .justify-space-evenly {
    justify-content: space-evenly;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-center {
    justify-content: center;
  }
</style>

<div
  bind:this={currentEl}
  class="space"
  {style}
  class:flex={justify}
  class:horizontal={direction === 'horizontal'}
  class:vertical={direction === 'vertical'}
  class:justify-space-around={justify === 'space-around'}
  class:justify-space-between={justify === 'space-between'}
  class:justify-space-evenly={justify === 'space-evenly'}
  class:justify-start={justify === 'start'}
  class:justify-end={justify === 'end'}
  class:justify-center={justify === 'center'}
  class:align-center={align === 'center'}
  class:align-start={align === 'start'}
  class:align-end={align === 'end'}
  class:align-baseline={align === 'baseline'}
  class:align-stretch={align === 'stretch'}>
  <slot />
</div>
