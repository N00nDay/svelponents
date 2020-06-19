<script>
  import Icon from "../Icon/Icon.svelte";
  import Loader from "../Loader/Loader.svelte";
  import addStyle from "../../utils/addStyle";
  import tooltip from "../../utils/tooltip";

  export let disabled = false;
  export let ghost = false;
  export let href = undefined;
  export let target = undefined;
  export let htmlType = undefined;
  export let loading = false;
  export let icon = undefined;
  export let shape = undefined;
  export let size = undefined;
  export let type = "default";
  export let block = false;
  export let iconPlacement = "left";
  export let style = undefined;
  export let tip = {};
  export let className = undefined;

  const Slots = $$props.$$slots;

  let string =
    Slots && icon && iconPlacement === "left"
      ? "padding-left: 12px;"
      : Slots && icon && iconPlacement === "right"
      ? "padding-right: 12px;"
      : !Slots && icon
      ? "padding: 0;"
      : "padding: 0px 15px;";

  let iconStyle = "font-size: 20px; vertical-align: middle;";
  if (size === "large") {
    iconStyle = "font-size: 23px; vertical-align: middle;";
  } else if (size === "small") {
    iconStyle = "font-size: 14px; vertical-align: middle;";
  }

  style = addStyle({
    style,
    attribute: true,
    string
  });
</script>

<style>
  .btn {
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;

    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
  }

  .btn::before,
  .btn::after {
    box-sizing: inherit;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .btn,
  .btn:active,
  .btn:focus {
    outline: 0;
  }
  .btn:not([disabled]):hover {
    text-decoration: none;
  }
  .btn:not([disabled]):active {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .btn.disabled,
  .btn[disabled] {
    cursor: not-allowed;
  }
  .btn.disabled > *,
  .btn[disabled] > * {
    pointer-events: none;
  }
  .large {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }
  .small {
    height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 4px;
  }
  .btn > :global(a:only-child) {
    color: currentColor;
  }
  .btn > :global(:global(a:only-child::after)) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .btn:hover,
  .btn:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }
  .btn:hover > :global(a:only-child),
  .btn:focus > :global(a:only-child) {
    color: currentColor;
  }
  .btn:hover > :global(:global(a:only-child::after)),
  .btn:focus > :global(:global(a:only-child::after)) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .btn:active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
  }
  .btn:active > :global(a:only-child) {
    color: currentColor;
  }
  .btn:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .disabled,
  .btn.disabled,
  .btn[disabled],
  .disabled:hover,
  .btn.disabled:hover,
  .btn[disabled]:hover,
  .disabled:focus,
  .btn.disabled:focus,
  .btn[disabled]:focus,
  .disabled:active,
  .btn.disabled:active,
  .btn[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .disabled > :global(a:only-child),
  .btn.disabled > :global(a:only-child),
  .btn[disabled] > :global(a:only-child),
  .disabled:hover > :global(a:only-child),
  .btn.disabled:hover > :global(a:only-child),
  .btn[disabled]:hover > :global(a:only-child),
  .disabled:focus > :global(a:only-child),
  .btn.disabled:focus > :global(a:only-child),
  .btn[disabled]:focus > :global(a:only-child),
  .disabled:active > :global(a:only-child),
  .btn.disabled:active > :global(a:only-child),
  .btn[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .disabled > :global(:global(a:only-child::after)),
  .btn.disabled > :global(:global(a:only-child::after)),
  .btn[disabled] > :global(:global(a:only-child::after)),
  .disabled:hover > :global(:global(a:only-child::after)),
  .btn.disabled:hover > :global(:global(a:only-child::after)),
  .btn[disabled]:hover > :global(:global(a:only-child::after)),
  .disabled:focus > :global(:global(a:only-child::after)),
  .btn.disabled:focus > :global(a:only-child::after),
  .btn[disabled]:focus > :global(a:only-child::after),
  .disabled:active > :global(a:only-child::after),
  .btn.disabled:active > :global(a:only-child::after),
  .btn[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .btn:hover,
  .btn:focus,
  .btn:active {
    text-decoration: none;
    background: #fff;
  }
  .btn > :global(i),
  .btn > :global(span) {
    display: inline-block;
    -webkit-transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    pointer-events: none;
  }
  .primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  .primary > :global(a:only-child) {
    color: currentColor;
  }
  .primary > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .primary:hover,
  .primary:focus {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  .primary:hover > :global(a:only-child),
  .primary:focus > :global(a:only-child) {
    color: currentColor;
  }
  .primary:hover > :global(a:only-child::after),
  .primary:focus > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .primary:active {
    color: #fff;
    background-color: #096dd9;
    border-color: #096dd9;
  }
  .primary:active > :global(a:only-child) {
    color: currentColor;
  }
  .primary:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .primary.disabled,
  .primary[disabled],
  .primary.disabled:hover,
  .primary[disabled]:hover,
  .primary.disabled:focus,
  .primary[disabled]:focus,
  .primary.disabled:active,
  .primary[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .primary.disabled > :global(a:only-child),
  .primary[disabled] > :global(a:only-child),
  .primary.disabled:hover > :global(a:only-child),
  .primary[disabled]:hover > :global(a:only-child),
  .primary.disabled:focus > :global(a:only-child),
  .primary[disabled]:focus > :global(a:only-child),
  .primary.disabled:active > :global(a:only-child),
  .primary[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .primary.disabled > :global(a:only-child::after),
  .primary[disabled] > :global(a:only-child::after),
  .primary.disabled:hover > :global(a:only-child::after),
  .primary[disabled]:hover > :global(a:only-child::after),
  .primary.disabled:focus > :global(a:only-child::after),
  .primary[disabled]:focus > :global(a:only-child::after),
  .primary.disabled:active > :global(a:only-child::after),
  .primary[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }

  .dashed {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: dashed;
  }
  .dashed > :global(a:only-child) {
    color: currentColor;
  }
  .dashed > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .dashed:hover,
  .dashed:focus {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
  }
  .dashed:hover > :global(a:only-child),
  .dashed:focus > :global(a:only-child) {
    color: currentColor;
  }
  .dashed:hover > :global(a:only-child::after),
  .dashed:focus > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .dashed:active {
    color: #096dd9;
    background-color: #fff;
    border-color: #096dd9;
  }
  .dashed:active > :global(a:only-child) {
    color: currentColor;
  }
  .dashed:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .dashed.disabled,
  .dashed[disabled],
  .dashed.disabled:hover,
  .dashed[disabled]:hover,
  .dashed.disabled:focus,
  .dashed[disabled]:focus,
  .dashed.disabled:active,
  .dashed[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .dashed.disabled > :global(a:only-child),
  .dashed[disabled] > :global(a:only-child),
  .dashed.disabled:hover > :global(a:only-child),
  .dashed[disabled]:hover > :global(a:only-child),
  .dashed.disabled:focus > :global(a:only-child),
  .dashed[disabled]:focus > :global(a:only-child),
  .dashed.disabled:active > :global(a:only-child),
  .dashed[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .dashed.disabled > :global(a:only-child::after),
  .dashed[disabled] > :global(a:only-child::after),
  .dashed.disabled:hover > :global(a:only-child::after),
  .dashed[disabled]:hover > :global(a:only-child::after),
  .dashed.disabled:focus > :global(a:only-child::after),
  .dashed[disabled]:focus > :global(a:only-child::after),
  .dashed.disabled:active > :global(a:only-child::after),
  .dashed[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .danger {
    color: #fff;
    background-color: #ff4d4f;
    border-color: #ff4d4f;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  .danger > :global(a:only-child) {
    color: currentColor;
  }
  .danger > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .danger:hover,
  .danger:focus {
    color: #fff;
    background-color: #ff7875;
    border-color: #ff7875;
  }
  .danger:hover > :global(a:only-child),
  .danger:focus > :global(a:only-child) {
    color: currentColor;
  }
  .danger:hover > :global(a:only-child::after),
  .danger:focus > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .danger:active {
    color: #fff;
    background-color: #d9363e;
    border-color: #d9363e;
  }
  .danger:active > :global(a:only-child) {
    color: currentColor;
  }
  .danger:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .danger.disabled,
  .danger[disabled],
  .danger.disabled:hover,
  .danger[disabled]:hover,
  .danger.disabled:focus,
  .danger[disabled]:focus,
  .danger.disabled:active,
  .danger[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .danger.disabled > :global(a:only-child),
  .danger[disabled] > :global(a:only-child),
  .danger.disabled:hover > :global(a:only-child),
  .danger[disabled]:hover > :global(a:only-child),
  .danger.disabled:focus > :global(a:only-child),
  .danger[disabled]:focus > :global(a:only-child),
  .danger.disabled:active > :global(a:only-child),
  .danger[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .danger.disabled > :global(a:only-child::after),
  .danger[disabled] > :global(a:only-child::after),
  .danger.disabled:hover > :global(a:only-child::after),
  .danger[disabled]:hover > :global(a:only-child::after),
  .danger.disabled:focus > :global(a:only-child::after),
  .danger[disabled]:focus > :global(a:only-child::after),
  .danger.disabled:active > :global(a:only-child::after),
  .danger[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .link {
    color: #1890ff;
    background-color: transparent;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .link > :global(a:only-child) {
    color: currentColor;
  }
  .link > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .link:hover,
  .link:focus {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff;
  }
  .link:hover > :global(a:only-child),
  .link:focus > :global(a:only-child) {
    color: currentColor;
  }
  .link:hover > :global(a:only-child::after),
  .link:focus > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .link:active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9;
  }
  .link:active > :global(a:only-child) {
    color: currentColor;
  }
  .link:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .link.disabled,
  .link[disabled],
  .link.disabled:hover,
  .link[disabled]:hover,
  .link.disabled:focus,
  .link[disabled]:focus,
  .link.disabled:active,
  .link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .link.disabled > :global(a:only-child),
  .link[disabled] > :global(a:only-child),
  .link.disabled:hover > :global(a:only-child),
  .link[disabled]:hover > :global(a:only-child),
  .link.disabled:focus > :global(a:only-child),
  .link[disabled]:focus > :global(a:only-child),
  .link.disabled:active > :global(a:only-child),
  .link[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .link.disabled > :global(a:only-child::after),
  .link[disabled] > :global(a:only-child::after),
  .link.disabled:hover > :global(a:only-child::after),
  .link[disabled]:hover > :global(a:only-child::after),
  .link.disabled:focus > :global(a:only-child::after),
  .link[disabled]:focus > :global(a:only-child::after),
  .link.disabled:active > :global(a:only-child::after),
  .link[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .link:hover,
  .link:focus,
  .link:active {
    border-color: transparent;
  }
  .link.disabled,
  .link[disabled],
  .link.disabled:hover,
  .link[disabled]:hover,
  .link.disabled:focus,
  .link[disabled]:focus,
  .link.disabled:active,
  .link[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: transparent;
    border-color: transparent;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .link.disabled > :global(a:only-child),
  .link[disabled] > :global(a:only-child),
  .link.disabled:hover > :global(a:only-child),
  .link[disabled]:hover > :global(a:only-child),
  .link.disabled:focus > :global(a:only-child),
  .link[disabled]:focus > :global(a:only-child),
  .link.disabled:active > :global(a:only-child),
  .link[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .link.disabled > :global(a:only-child::after),
  .link[disabled] > :global(a:only-child::after),
  .link.disabled:hover > :global(a:only-child::after),
  .link[disabled]:hover > :global(a:only-child::after),
  .link.disabled:focus > :global(a:only-child::after),
  .link[disabled]:focus > :global(a:only-child::after),
  .link.disabled:active > :global(a:only-child::after),
  .link[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .ghost {
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    border-color: #d9d9d9;
  }
  .ghost > :global(a:only-child) {
    color: currentColor;
  }
  .ghost > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .ghost:hover,
  .ghost:focus {
    color: #40a9ff;
    background-color: transparent;
    border-color: #40a9ff;
  }
  .ghost:hover > :global(a:only-child),
  .ghost:focus > :global(a:only-child) {
    color: currentColor;
  }
  .ghost:hover > :global(a:only-child::after),
  .ghost:focus > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .ghost:active {
    color: #096dd9;
    background-color: transparent;
    border-color: #096dd9;
  }
  .ghost:active > :global(a:only-child) {
    color: currentColor;
  }
  .ghost:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .ghost.disabled,
  .ghost[disabled],
  .ghost.disabled:hover,
  .ghost[disabled]:hover,
  .ghost.disabled:focus,
  .ghost[disabled]:focus,
  .ghost.disabled:active,
  .ghost[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ghost.disabled > :global(a:only-child),
  .ghost[disabled] > :global(a:only-child),
  .ghost.disabled:hover > :global(a:only-child),
  .ghost[disabled]:hover > :global(a:only-child),
  .ghost.disabled:focus > :global(a:only-child),
  .ghost[disabled]:focus > :global(a:only-child),
  .ghost.disabled:active > :global(a:only-child),
  .ghost[disabled]:active > :global(a:only-child) {
    color: currentColor;
  }
  .ghost.disabled > :global(a:only-child::after),
  .ghost[disabled] > :global(a:only-child::after),
  .ghost.disabled:hover > :global(a:only-child::after),
  .ghost[disabled]:hover > :global(a:only-child::after),
  .ghost.disabled:focus > :global(a:only-child::after),
  .ghost[disabled]:focus > :global(a:only-child::after),
  .ghost.disabled:active > :global(a:only-child::after),
  .ghost[disabled]:active > :global(a:only-child::after) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    content: "";
  }
  .icon-only {
    padding: 0;
    font-size: 16px;
    border-radius: 4px;
  }
  .icon-only :global(svg) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: top left;
  }
  .icon-only.large {
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 18px;
    border-radius: 4px;
  }
  .icon-only.small {
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 14px;
    border-radius: 4px;
  }
  .icon-only > :global(i) {
    vertical-align: middle;
  }
  .round {
    height: 32px;
    padding: 0 16px;
    font-size: 14px;
    border-radius: 32px;
  }
  .round.large {
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    border-radius: 40px;
  }
  .round.small {
    height: 24px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 24px;
  }
  .round.icon-only {
    width: auto;
  }
  .circle,
  .circleOutline {
    min-width: 32px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }
  .circle.large,
  .circleOutline.large {
    min-width: 40px;
    border-radius: 50%;
  }
  .circle.small,
  .circleOutline.small {
    min-width: 24px;
    border-radius: 50%;
  }
  .btn::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: 1;
    display: none;
    background: #fff;
    border-radius: inherit;
    opacity: 0.35;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    content: "";
    pointer-events: none;
  }
  .btn .anticon {
    -webkit-transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .btn.loading:not([disabled]) {
    pointer-events: none;
  }
  .btn.block {
    display: block;
    width: 100%;
  }
  .text {
    color: rgba(0, 0, 0, 0.65);
    background: transparent;
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .text:hover,
  .text:focus {
    color: rgba(0, 0, 0, 0.65);
    background: rgba(0, 0, 0, 0.018);
    border-color: transparent;
  }
</style>

<button
  on:click
  type="button"
  {htmlType}
  {href}
  {target}
  {style}
  use:tooltip={tip}
  class="btn loader {className}"
  {disabled}
  class:disabled
  class:primary={type === 'primary'}
  class:dashed={type === 'dashed'}
  class:link={type === 'link'}
  class:danger={type === 'danger'}
  class:text={type === 'text'}
  class:round={shape === 'round'}
  class:circle={shape === 'circle'}
  class:circleOutline={shape === 'circleOutline'}
  class:ghost
  class:small={size === 'small'}
  class:large={size === 'large'}
  class:block
  class:loading
  class:icon-only={icon && !Slots}>
  {#if icon && iconPlacement === 'right'}
    <span style="vertical-align: middle; padding-right: 4px;">
      <slot />
    </span>
  {/if}
  {#if loading && !icon && Slots}
    <Loader />
    <slot />
  {:else if loading}
    <Loader />
    <span class="anticon">
      <Icon {icon} style={iconStyle} />
    </span>
  {:else if icon}
    <span class="anticon">
      <Icon {icon} style={iconStyle} />
    </span>
  {:else}
    <slot />
  {/if}
  {#if icon && iconPlacement === 'left'}
    <span style="vertical-align: middle; padding-left: 4px;">
      <slot />
    </span>
  {/if}
</button>
