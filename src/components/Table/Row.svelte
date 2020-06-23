<script>
  import { getContext } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import Table from "./Table.svelte";
  import Cell from "./Cell.svelte";
  import Badge from "../Badge/Badge.svelte";
  import addCommas from "../../utils/addCommas";
  import currencyFormatter from "../../utils/currencyFormatter";
  import percentFormatter from "../../utils/percentFormatter";
  import dayjs from "dayjs";
  import localizedFormat from "dayjs/plugin/localizedFormat";
  dayjs.extend(localizedFormat);
  import { colors } from "../../constants";
  export let style = undefined;
  export let key = undefined;
  export let item = undefined;

  const { selected, headers, onSelect } = getContext(CONTEXT);

  let cells = [];

  $: {
    cells = [];
    if (item) {
      for (let [key, value] of Object.entries(item)) {
        if (key !== "_id") {
          cells = [...cells, value];
        }
      }
    }
  }

  function handleClick() {
    if ($selected !== key) {
      selected.set(key);
    } else {
      selected.set(null);
    }
    if (onSelect) onSelect(key);
  }

  function renderContent(val, type) {
    if (type === "currency") {
      return currencyFormatter(val);
    } else if (type === "percent") {
      return percentFormatter(val);
    } else if (type === "number") {
      return addCommas(val);
    } else if (type === "date") {
      return dayjs(val).format("ll");
    } else {
      return val;
    }
  }
</script>

<style>
  .item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* -webkit-box-pack: justify;
    -ms-flex-pack: justify; */
    /* justify-content: space-between; */
    padding: 12px 24px;
    background: #ffffff;
  }
  .selectable {
    cursor: pointer;
  }
  .selectable:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  li.item.selected {
    background-color: rgba(98, 0, 238, 0.04) !important;
  }
  @media screen and (max-width: 576px) {
    .item {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
</style>

<li
  class="item"
  class:selectable={onSelect}
  class:selected={$selected === key && key !== undefined}
  {style}
  on:click={handleClick}>
  {#if item}
    {#each cells as cell, i}
      {#if $headers[i] && $headers[i].type !== 'badge'}
        <Table.Cell
          type={$headers[i].type}
          align={$headers[i].align}
          width={$headers[i].width}
          content={renderContent(cell, $headers[i].type)} />
      {/if}
      {#if $headers[i] && $headers[i].type === 'badge'}
        <Table.Cell type={$headers[i].type} width={$headers[i].width}>
          {#each cell as s (s)}
            <Badge
              count={s}
              color={colors[s]}
              style="margin-right: 4px; cursor: pointer;"
              on:click={() => console.log(s)} />
          {/each}
        </Table.Cell>
      {/if}
    {/each}
  {:else}
    <slot />
  {/if}
</li>
