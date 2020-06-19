<script>
  import { CONTEXT } from "./Context.svelte";
  import { setContext } from "svelte";
  import addStyle from "../../utils/addStyle";
  export let gutter = 0;
  export let justify = "start";
  export let align = "top";
  export let style = undefined;

  let margin, colStyle;
  if (gutter.constructor === Array) {
    margin = `margin: -${gutter[0] / 2}px -${gutter[1] / 2}px;`;
    colStyle = `padding: ${gutter[0] / 2}px ${gutter[1] / 2}px;`;
  } else {
    margin = `margin: -${gutter / 2}px;`;
    colStyle = `padding: ${gutter / 2}px;`;
  }

  style = addStyle({
    style,
    attribute: true,
    string: margin
  });

  setContext(CONTEXT, {
    colStyle
  });
</script>

<style>
  .row {
    position: relative;
    height: auto;
    margin-right: 0;
    margin-left: 0;
    zoom: 1;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .row::before,
  .row::after {
    display: table;
    content: "";
  }
  .row::after {
    clear: both;
  }
  .row-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .row-flex::before,
  .row-flex::after {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .row-flex-start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .row-flex-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .row-flex-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .row-flex-space-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .row-flex-space-around {
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .row-flex-top {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .row-flex-middle {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .row-flex-bottom {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
</style>

<div
  class="row"
  class:row-flex={justify !== undefined}
  class:row-flex-start={justify === 'start'}
  class:row-flex-center={justify === 'center'}
  class:row-flex-end={justify === 'end'}
  class:row-flex-space-between={justify === 'space-between'}
  class:row-flex-space-around={justify === 'space-around'}
  class:row-flex-top={align === 'top'}
  class:row-flex-middle={align === 'middle'}
  class:row-flex-bottom={align === 'bottom'}
  {style}>
  <slot />
</div>
