<script>
  import { scale } from "svelte/transition";
  import addStyle from "../../utils/addStyle";
  import typeOf from "../../utils/typeOf";
  export let count = null;
  export let overflow = 99;
  export let dot = false;
  export let color = undefined;
  export let showZero = false;
  export let style = undefined;
  export let offset = undefined;
  export let text = undefined;
  const Slots = $$props.$$slots;

  let hex = undefined,
    colorName = undefined;
  if (color && (color.charAt(0) === "#" || color.substring(0, 3) === "rgb")) {
    style = addStyle({
      style,
      attribute: true,
      string: `background-color: ${color}`
    });
  } else {
    colorName = color;
  }

  if (offset) {
    const offsetType = typeOf(offset);
    if (offsetType === "number") {
      style = addStyle({
        style,
        attribute: true,
        string: `right: ${offset}px; margin-top: ${offset}px;`
      });
    } else if (offsetType === "array") {
      style = addStyle({
        style,
        attribute: true,
        string: `right: ${offset[0]}px; margin-top: ${offset[1]}px;`
      });
    }
  }

  style = addStyle({
    style,
    attribute: hex,
    string: `background: ${hex}`
  });

  function renderCount(x) {
    return x > overflow ? `${overflow}+` : x;
  }
</script>

<style>
  .badge {
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
    color: unset;
    line-height: 1;
  }
  .count {
    z-index: auto;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #f5222d;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
    -moz-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  .multiple-words {
    padding: 0 8px;
  }
  .dot {
    z-index: auto;
    width: 6px;
    height: 6px;
    background: #f5222d;
    border-radius: 100%;
    -webkit-box-shadow: 0 0 0 1px #fff;
    box-shadow: 0 0 0 1px #fff;
  }
  .count,
  .dot,
  .badge .scroll-number-custom-component {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: translate(50%, -50%);
    -ms-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
    -moz-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  .status {
    line-height: inherit;
    vertical-align: baseline;
  }
  .status-dot {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 6px;
    height: 6px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .status-default {
    background-color: #d9d9d9;
  }
  .status-success {
    background-color: #52c41a;
  }
  .status-processing {
    background-color: #1890ff;
  }
  .status-error {
    background-color: #f5222d;
  }
  .status-warning {
    background-color: #faad14;
  }
  .status-pink {
    background: #eb2f96;
  }
  .status-magenta {
    background: #eb2f96;
  }
  .status-red {
    background: #f5222d;
  }
  .status-volcano {
    background: #fa541c;
  }
  .status-orange {
    background: #fa8c16;
  }
  .status-yellow {
    background: #fadb14;
  }
  .status-gold {
    background: #faad14;
  }
  .status-cyan {
    background: #13c2c2;
  }
  .status-lime {
    background: #a0d911;
  }
  .status-green {
    background: #52c41a;
  }
  .status-blue {
    background: #1890ff;
  }
  .status-geekblue {
    background: #2f54eb;
  }
  .status-purple {
    background: #722ed1;
  }
  .status-text {
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
  .not-a-wrapper:not(.status) {
    vertical-align: middle;
  }
  .not-a-wrapper .scroll-number {
    position: relative;
    top: auto;
    display: block;
  }
  .not-a-wrapper .count {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .not-a-wrapper .dot {
    display: inline-block;
  }
  @-webkit-keyframes antStatusProcessing {
    0% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(2.4);
      transform: scale(2.4);
      opacity: 0;
    }
  }
  @keyframes antStatusProcessing {
    0% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(2.4);
      transform: scale(2.4);
      opacity: 0;
    }
  }
  .scroll-number {
    overflow: hidden;
  }
  .scroll-number-only {
    display: inline-block;
    height: 20px;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .scroll-number-symbol {
    vertical-align: top;
  }
</style>

{#if Slots}
  <span class="badge">
    <slot />
    {#if dot}
      <span
        transition:scale|local
        {style}
        class:status-success={dot === 'success'}
        class:status-processing={dot === 'processing'}
        class:status-error={dot === 'error'}
        class:status-warning={dot === 'warning'}
        class="scroll-number dot status-default {colorName ? `status-${colorName}` : ''}" />
      {#if text}
        <span class="status-text">{text}</span>
      {/if}
    {/if}
    {#if count > 0 || (showZero && count === 0)}
      <sup
        on:click|stopPropagation
        transition:scale|local
        {style}
        class="scroll-number count multiple-words {colorName ? `status-${colorName}` : ''}"
        title={count}>
        {typeOf(count) === 'number' ? renderCount(count) : count}
      </sup>
    {/if}
  </span>
{:else}
  <span class={`badge ${Slots ? '' : 'not-a-wrapper'}`}>
    <slot />
    {#if dot}
      <span
        transition:scale|local
        {style}
        class:status-success={dot === 'success'}
        class:status-processing={dot === 'processing'}
        class:status-error={dot === 'error'}
        class:status-warning={dot === 'warning'}
        class="scroll-number dot status-default {colorName ? `status-${colorName}` : ''}" />
      {#if text}
        <span class="status-text">{text}</span>
      {/if}
    {/if}
    {#if count > 0 || (showZero && count === 0) || typeOf(count) === 'string'}
      <sup
        on:click|stopPropagation
        transition:scale|local
        {style}
        class="scroll-number count multiple-words {colorName ? `status-${colorName}` : ''}"
        title={count}>
        {typeOf(count) === 'number' ? renderCount(count) : count}
      </sup>
    {/if}
  </span>
{/if}
