<script>
  import addStyle from "../../utils/addStyle";
  import { icons } from "../../constants";

  export let icon = undefined;
  export let style = undefined;
  export let size = undefined;
  export let viewBox = "0 0 24 24";
  export let color = undefined;
  export let loading = false;
  export let className = undefined;

  style = addStyle({
    style,
    attribute: size,
    string: `font-size: ${size}px;`
  });

  style = addStyle({
    style,
    attribute: color,
    string: `color: ${color};`
  });
</script>

<style>
  .svg-icon {
    user-select: none;
    width: 1em;
    fill: currentcolor;
    height: 1em;
    vertical-align: bottom;
    color: inherit;
    font-size: 20px;
  }
  .loading {
    vertical-align: top;
    display: inline-block;
    -webkit-animation: loadingCircle 1s infinite linear;
    animation: loadingCircle 1s infinite linear;
  }
  @-webkit-keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>

{#if loading}
  <svg
    focusable="false"
    viewBox="0 0 1024 1024"
    class="svg-icon loading"
    {style}>
    <path d={icons.loading} />
  </svg>
{:else}
  <svg focusable="false" {viewBox} class="svg-icon {className}" {style}>
    <path d={icons[icon]} />
  </svg>
{/if}
