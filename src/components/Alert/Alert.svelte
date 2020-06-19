<script>
  import { slide } from "svelte/transition";
  import Icon from "../Icon/Icon.svelte";

  export let onClose = false;
  export let closeText = undefined;
  export let showIcon = false;
  export let type = "info";
  export let message;
  export let description = undefined;
  export let style = undefined;
  export let messageStyle = undefined;
  export let descriptionStyle = undefined;
</script>

<style>
  .alert {
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
    padding: 8px 15px 8px 37px;
    word-wrap: break-word;
    border-radius: 4px;
    overflow: hidden;
  }
  .alert.no-icon {
    padding: 8px 15px;
  }
  .alert.closable {
    padding-right: 30px;
  }
  .icon {
    position: absolute;
    top: 6px;
    left: 16px;
  }
  .description {
    display: none;
    font-size: 14px;
    line-height: 22px;
  }
  .success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
  }
  .success :global(.icon) {
    color: #52c41a;
  }
  .info {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }
  .info :global(.icon) {
    color: #1890ff;
  }
  .warning {
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
  }
  .warning :global(.icon) {
    color: #faad14;
  }
  .error {
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
  }
  .error :global(.icon) {
    color: #f5222d;
  }
  .close-icon {
    position: absolute;
    top: 6px;
    right: 16px;
    padding: 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 22px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .close-icon .anticon-close {
    color: rgba(0, 0, 0, 0.45);
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .close-icon .anticon-close:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  .close-text {
    color: rgba(0, 0, 0, 0.45);
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .close-text:hover {
    color: rgba(0, 0, 0, 0.75);
  }
  .with-description {
    position: relative;
    padding: 15px 15px 15px 64px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.5;
    border-radius: 4px;
  }
  .with-description.no-icon {
    padding: 15px;
  }
  .with-description :global(.icon) {
    position: absolute;
    top: 4px;
    left: 24px;
    font-size: 24px;
  }
  .with-description .close-icon {
    position: absolute;
    top: 10px;
    right: 16px;
    font-size: 14px;
    cursor: pointer;
  }
  .with-description :global(.message) {
    display: block;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
  }
  .message {
    color: rgba(0, 0, 0, 0.85);
  }
  .with-description :global(.description) {
    display: block;
  }
</style>

<div
  transition:slide|local
  {style}
  class="alert"
  class:success={type === 'success'}
  class:info={type === 'info'}
  class:error={type === 'error'}
  class:warning={type === 'warning'}
  class:closable={onClose}
  class:no-icon={!showIcon}
  class:with-description={description}>
  {#if showIcon}
    <span class="icon">
      <Icon
        icon={`alert${type.charAt(0).toUpperCase() + type.slice(1)}`}
        viewBox="64 64 896 896"
        size={description ? 24 : 14} />
    </span>
  {/if}
  <span class="message" style={messageStyle}>{message}</span>
  {#if description}
    <span class="description" style={descriptionStyle}>{description}</span>
  {/if}
  {#if onClose}
    <button type="button" class="close-icon" tabindex="0" on:click={onClose}>
      <span role="img" aria-label="close" class="anticon-close">
        {#if closeText}
          <span class="close-text">{closeText}</span>
        {:else}
          <Icon icon="close" size={18} />
        {/if}
      </span>
    </button>
  {/if}
</div>
