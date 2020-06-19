<script>
  import { getContext } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import Skeleton from "../Skeleton/Skeleton.svelte";
  export let title = undefined;
  export let description = undefined;
  export let style = undefined;
  export let metaStyle = undefined;
  export let titleStyle = undefined;
  export let descriptionStyle = undefined;

  const { handleClick, loading } = getContext(CONTEXT);
</script>

<style>
  .body {
    padding: 24px;
    zoom: 1;
  }
  .body::before,
  .body::after {
    display: table;
    content: "";
  }
  .body::after {
    clear: both;
  }
  .loading.body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @-webkit-keyframes loading {
    0%,
    100% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  @keyframes loading {
    0%,
    100% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  .meta {
    margin: -4px 0;
    zoom: 1;
  }
  .meta::before,
  .meta::after {
    display: table;
    content: "";
  }
  .meta::after {
    clear: both;
  }
  .meta-detail {
    overflow: hidden;
  }
  .meta-detail > :global(div:not(:last-child)) {
    margin-bottom: 8px;
  }
  .meta-title {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .meta-description {
    color: rgba(0, 0, 0, 0.45);
  }
</style>

<div class="body" class:loading on:click={handleClick} {style}>
  {#if loading}
    <Skeleton lines={3} />
  {:else}
    <div class="meta" style={metaStyle}>
      <div class="meta-detail">
        {#if title}
          <div class="meta-title" style={titleStyle}>{title}</div>
        {/if}
        {#if description}
          <div class="meta-description" style={descriptionStyle}>
            {description}
          </div>
        {/if}
        <slot />
      </div>
    </div>
  {/if}
</div>
