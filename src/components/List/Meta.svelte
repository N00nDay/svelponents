<script>
  import { getContext, onMount, onDestroy } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import Avatar from "../Avatar/Avatar.svelte";
  import Icon from "../Icon/Icon.svelte";
  import addStyle from "../../utils/addStyle";
  import tooltip from "../../utils/tooltip";
  import isEllipsis from "../../utils/isEllipsis";

  export let src = undefined;
  export let alt = undefined;
  export let title = undefined;
  export let description = undefined;
  export let style = undefined;
  export let titleStyle = undefined;
  export let descriptionStyle = undefined;
  export let align = "left";
  export let key = false;
  export let handleClick = undefined;
  export let sortable = false;

  let titleTip, descriptionTip;
  const Slots = $$props.$$slots;

  let titleEl, descriptionEl;

  const { sortKey, sort, table } = getContext(CONTEXT);

  function onClick() {
    if (sortable) {
      let order;
      if ($sortKey === key) {
        if ($sort === "desc") {
          sort.set("asc");
        } else {
          sort.set("desc");
        }
      } else {
        sort.set("desc");
        sortKey.set(key);
      }
      if (handleClick) {
        order = $sort === "desc" ? "-" : "";
        handleClick(order);
      }
    }
  }

  if (src && alt && description && !title) {
    descriptionStyle = addStyle({
      style: descriptionStyle,
      attribute: true,
      string: "height: 32px; line-height: 32px;"
    });
  } else if (src && alt && !description && title) {
    titleStyle = addStyle({
      style: titleStyle,
      attribute: true,
      string: "margin-bottom: 0; height: 32px; line-height: 32px;"
    });
  } else if (!src && !alt && !description && !sortable && title) {
    titleStyle = addStyle({
      style: titleStyle,
      attribute: true,
      string: "margin-bottom: 0; height: 32px; line-height: 32px;"
    });
  } else if (!src && !alt && !description && sortable && title) {
    titleStyle = addStyle({
      style: titleStyle,
      attribute: true,
      string: "margin-bottom: 0; height: 48px; line-height: 48px;"
    });
  }

  if (align === "right" && title) {
    titleStyle = addStyle({
      style: titleStyle,
      attribute: true,
      string: "text-align: right;"
    });
  }

  if (sortable) {
    titleStyle = addStyle({
      style: titleStyle,
      attribute: true,
      string: "display: inline-block;"
    });
  }

  if (align === "right" && description) {
    descriptionStyle = addStyle({
      style: descriptionStyle,
      attribute: true,
      string: "text-align: right;"
    });
  }

  onMount(async () => {
    if (titleEl && isEllipsis(titleEl)) {
      titleTip = tooltip(titleEl, { content: title, placement: "bottom" });
    }
    if (descriptionEl && isEllipsis(descriptionEl)) {
      descriptionTip = tooltip(descriptionEl, {
        content: description,
        placement: "bottom"
      });
    }
  });

  onDestroy(async () => {
    if (titleTip) titleTip.destroy();
    if (descriptionTip) descriptionTip.destroy();
  });
</script>

<style>
  .item-meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    font-size: 0;
    white-space: nowrap;
  }
  .item-meta-avatar {
    margin-right: 16px;
  }
  .item-meta-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0;
    flex: 1 0;
    overflow: hidden;
  }
  .item-meta-title {
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-meta-title > :global(a) {
    color: rgba(0, 0, 0, 0.65);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .item-meta-title > :global(a:hover) {
    color: #1890ff;
  }
  .item-meta-description {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.5715;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sort {
    line-height: 48px;
    margin-left: 8px;
    vertical-align: top !important;
  }
  h4,
  .sort :global(svg) {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .sort.asc :global(svg) {
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    transform-origin: center center;
  }
  .sortable {
    cursor: pointer;
  }
  .sortable .active,
  .sortable:hover h4,
  .sortable:hover :global(svg) {
    color: #1890ff;
  }
  .right {
    text-align: right;
  }
  .table.item-meta {
    padding-right: 8px;
  }
  .table.item-meta:last-child {
    padding-right: 0;
  }
</style>

<div
  class="item-meta"
  class:sortable
  class:table
  {style}
  on:click={sortable ? onClick : undefined}>
  {#if src && alt}
    <div class="item-meta-avatar">
      <Avatar {alt} {src} />
    </div>
  {/if}
  <div class="item-meta-content" class:right={align === 'right'}>
    {#if title}
      <h4
        bind:this={titleEl}
        class="item-meta-title"
        class:active={$sortKey === key}
        style={titleStyle}>
        {title}
      </h4>
    {/if}
    {#if $sortKey === key}
      <span class="sort {$sort}" class:active={$sortKey === key}>
        <Icon icon="arrowDown" style="vertical-align: middle;" />
      </span>
    {/if}
    {#if description}
      <div
        bind:this={descriptionEl}
        class="item-meta-description"
        style={descriptionStyle}>
        {description}
      </div>
    {/if}
    {#if Slots}
      <div
        bind:this={descriptionEl}
        class="item-meta-description table-cell"
        style={descriptionStyle}>
        <slot />
      </div>
    {/if}
  </div>
</div>
