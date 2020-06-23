<script>
  import { CONTEXT } from "./Context.svelte";
  import { getContext } from "svelte";
  import Avatar from "../Avatar/Avatar.svelte";
  import Button from "../Button/Button.svelte";
  export let ghost = false;
  export let backIcon = "arrowLeft";
  export let onBack = undefined;
  export let style = undefined;
  export let compact = false;
  export let avatar = undefined;
  export let avatarStyle = undefined;

  const { bordered, registerHeader } = getContext(CONTEXT);

  registerHeader();
</script>

<style>
  .page-header {
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
    position: relative;
    padding: 16px 24px;
    background-color: #fff;
  }
  .ghost {
    background-color: inherit;
  }
  .heading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: start;
    align-items: center;
  }
  .compact .heading {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .compact {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .heading :global(.back-button) {
    color: #1890ff;
    text-decoration: none;
    outline: none;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    color: #000;
    cursor: pointer;
    margin-right: 8px;
  }
  .heading :global(.back-button:focus),
  .heading :global(.back-button:hover) {
    color: #40a9ff;
  }
  .heading :global(.back-button:active) {
    color: #096dd9;
  }
  .avatar {
    margin-right: 12px;
  }
  .bordered {
    border-bottom: 1px solid #d9d9d9;
  }
</style>

<div class="page-header" class:ghost class:bordered class:compact {style}>
  <div class="heading">
    {#if onBack}
      <Button
        classNames="back-button"
        shape="circle"
        type="text"
        on:click={onBack}
        icon={backIcon} />
    {/if}
    {#if avatar}
      <span class="avatar" style={avatarStyle}>
        <Avatar
          icon={avatar.icon}
          size={avatar.size}
          text={avatar.text}
          src={avatar.src}
          alt={avatar.alt} />
      </span>
    {/if}
    <slot />
  </div>
</div>
