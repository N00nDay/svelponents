<script>
  import { CONTEXT } from "./Context.svelte";
  import { getContext } from "svelte";
  import { slide } from "svelte/transition";
  import Tag from "../Tag/Tag.svelte";
  export let style = undefined;
  export let filters = [];
  export let onClose = undefined;

  const { bordered, registerFilter } = getContext(CONTEXT);

  registerFilter();
</script>

<style>
  .filter-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: start;
    align-items: center;
    padding: 8px 24px;
  }
  .bordered {
    border-bottom: 1px solid #d9d9d9;
  }
</style>

{#if filters.length > 0}
  <div transition:slide|local class="filter-row" class:bordered {style}>
    <span style="margin-right: 8px;">Filters:</span>
    {#each filters as filter (filter._id)}
      <Tag color="rgb(16, 142, 233)" onClose={() => onClose(filter._id)}>
        {filter.name}
      </Tag>
    {/each}
  </div>
{/if}
