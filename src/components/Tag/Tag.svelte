<script>
  import { scale } from "svelte/transition";
  import Icon from "../Icon/Icon.svelte";
  import addStyle from "../../utils/addStyle";
  export let style = undefined;
  export let icon = undefined;
  export let checkable = false;
  export let checked = false;
  export let hidden = false;
  export let inverse = false;
  export let color = undefined;
  export let onClose = undefined;

  let hex = undefined;
  if (color && (color.charAt(0) === "#" || color.substring(0, 3) === "rgb")) {
    style = addStyle({
      style,
      attribute: true,
      string: `background-color: ${color}`
    });
  }
</script>

<style>
  .tag {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: default;
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .tag:hover {
    opacity: 0.85;
  }
  .tag {
    color: rgba(0, 0, 0, 0.65);
  }
  .tag .anticon-close {
    display: inline-block;
    font-size: 14px;
    margin-left: 3px;
    color: rgba(0, 0, 0, 0.45);
    font-weight: bold;
    cursor: pointer;
    -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .tag .anticon-close:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .has-color {
    border-color: transparent;
  }
  .has-color,
  .has-color .anticon-close,
  .has-color .anticon-close:hover {
    color: #fff;
  }
  .checkable {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }
  .checkable:not(.checkable.checked):hover {
    color: #1890ff;
  }
  .checkable:active,
  .checkable.checked {
    color: #fff;
  }
  .checkable.checked {
    background-color: #1890ff;
  }
  .checkable:active {
    background-color: #096dd9;
  }
  .hidden {
    display: none;
  }
  .pink {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  .pink.inverse {
    color: #fff;
    background: #eb2f96;
    border-color: #eb2f96;
  }
  .magenta {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  .magenta.inverse {
    color: #fff;
    background: #eb2f96;
    border-color: #eb2f96;
  }
  .red {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  .red.inverse {
    color: #fff;
    background: #f5222d;
    border-color: #f5222d;
  }
  .volcano {
    color: #fa541c;
    background: #fff2e8;
    border-color: #ffbb96;
  }
  .volcano.inverse {
    color: #fff;
    background: #fa541c;
    border-color: #fa541c;
  }
  .orange {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
  }
  .orange.inverse {
    color: #fff;
    background: #fa8c16;
    border-color: #fa8c16;
  }
  .yellow {
    color: #fadb14;
    background: #feffe6;
    border-color: #fffb8f;
  }
  .yellow.inverse {
    color: #fff;
    background: #fadb14;
    border-color: #fadb14;
  }
  .gold {
    color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f;
  }
  .gold.inverse {
    color: #fff;
    background: #faad14;
    border-color: #faad14;
  }
  .cyan {
    color: #13c2c2;
    background: #e6fffb;
    border-color: #87e8de;
  }
  .cyan.inverse {
    color: #fff;
    background: #13c2c2;
    border-color: #13c2c2;
  }
  .lime {
    color: #a0d911;
    background: #fcffe6;
    border-color: #eaff8f;
  }
  .lime.inverse {
    color: #fff;
    background: #a0d911;
    border-color: #a0d911;
  }
  .green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .green.inverse {
    color: #fff;
    background: #52c41a;
    border-color: #52c41a;
  }
  .blue {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  .blue.inverse {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
  }
  .geekblue {
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
  }
  .geekblue.inverse {
    color: #fff;
    background: #2f54eb;
    border-color: #2f54eb;
  }
  .purple {
    color: #722ed1;
    background: #f9f0ff;
    border-color: #d3adf7;
  }
  .purple.inverse {
    color: #fff;
    background: #722ed1;
    border-color: #722ed1;
  }
  .success {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .info {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  .error {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  .warning {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
  }
  .tag > .anticon + span,
  .tag > span + .anticon {
    margin-left: 7px;
  }
</style>

<span
  transition:scale|local
  {style}
  class="tag"
  class:hidden
  class:success={color === 'success'}
  class:warning={color === 'warning'}
  class:error={color === 'error'}
  class:info={color === 'info'}
  class:geekblue={color === 'geekblue'}
  class:inverse
  class:purple={color === 'purple'}
  class:blue={color === 'blue'}
  class:green={color === 'green'}
  class:lime={color === 'lime'}
  class:cyan={color === 'cyan'}
  class:volcano={color === 'volcano'}
  class:pink={color === 'pink'}
  class:magenta={color === 'magenta'}
  class:gold={color === 'gold'}
  class:orange={color === 'orange'}
  class:red={color === 'red'}
  class:yellow={color === 'yellow'}
  class:checkable
  class:checked
  class:has-color={color}
  on:click>
  {#if color === 'success'}
    <Icon
      viewBox="64 64 896 896"
      icon="alertSuccess"
      style="vertical-align: middle; font-size: 12px;" />
  {:else if color === 'info'}
    <Icon
      viewBox="64 64 896 896"
      icon="alertInfo"
      style="vertical-align: middle; font-size: 12px;" />
  {:else if color === 'warning'}
    <Icon
      viewBox="64 64 896 896"
      icon="alertWarning"
      style="vertical-align: middle; font-size: 12px;" />
  {:else if color === 'error'}
    <Icon
      viewBox="64 64 896 896"
      icon="alertError"
      style="vertical-align: middle; font-size: 12px;" />
  {:else if icon}
    <Icon {icon} />
  {/if}
  <slot />
  {#if onClose}
    <span
      role="img"
      aria-label="close"
      tabindex="-1"
      class="anticon anticon-close"
      on:click={onClose}>
      <Icon icon="close" style="vertical-align: middle; font-size: inherit;" />
    </span>
  {/if}
</span>
