<script>
  import { onMount } from "svelte";
  import Icon from "../Icon/Icon.svelte";
  import addStyle from "../../utils/addStyle";
  import typeOf from "../../utils/typeOf";
  import fitText from "../../utils/fitText";

  export let text = undefined;
  export let icon = undefined;
  export let src = undefined;
  export let alt = undefined;
  export let square = false;
  export let style = undefined;
  export let textStyle = undefined;
  export let iconStyle = undefined;
  export let size = undefined;
  export let gap = 0;

  size =
    size === "small"
      ? 24
      : size === "large"
      ? 40
      : typeOf(size) === "number"
      ? size
      : 32;

  style = addStyle({
    style,
    attribute: size,
    string: `width: ${size}px; height: ${size}px; line-height: ${size /
      2}px; font-size: ${size}px`
  });

  let type = "string";
  if (text) {
    textStyle = addStyle({
      style: textStyle,
      attribute: true,
      string: `line-height: ${size}px;`
    });
  } else if (icon) {
    iconStyle = addStyle({
      style: iconStyle,
      attribute: true,
      string: `font-size: ${size /
        1.6}px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); transform-origin: top left;`
    });
  }

  let el;
  onMount(async () => {
    if (el) {
      textStyle = fitText({
        el,
        size,
        className: "string",
        gap,
        style: textStyle
      });
    }
  });
</script>

<style>
  .avatar {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    overflow: hidden;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    background: #ccc;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
  }
  .avatar.image {
    background: transparent;
  }
  .avatar :global(.string) {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8em;
  }
  .square {
    border-radius: 4px;
  }
  .avatar > :global(img) {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
</style>

<span
  class="avatar"
  class:square
  class:icon={type === 'icon'}
  class:image={type === 'image'}
  {style}>
  {#if text}
    <span bind:this={el} class="string" style={textStyle}>{text}</span>
  {:else if icon}
    <Icon {icon} style={iconStyle} />
  {:else if src && alt}
    <img {src} {alt} />
  {:else}
    <slot />
  {/if}
</span>
