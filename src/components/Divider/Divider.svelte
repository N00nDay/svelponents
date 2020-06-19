<script>
  export let direction = "horizontal";
  export let dashed = false;
  export let align = "center";
  export let plain = false;

  const SLOTS = $$props.$$slots;
</script>

<style>
  .divider {
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
    background: #e8e8e8;
  }
  .divider,
  .vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    width: 1px;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
  }
  .horizontal {
    display: block;
    clear: both;
    width: 100%;
    min-width: 100%;
    height: 1px;
    margin: 24px 0;
  }
  .horizontal.with-text-center,
  .horizontal.with-text-left,
  .horizontal.with-text-right {
    display: table;
    margin: 16px 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-align: center;
    background: transparent;
  }
  .horizontal.with-text-center::before,
  .horizontal.with-text-left::before,
  .horizontal.with-text-right::before,
  .horizontal.with-text-center::after,
  .horizontal.with-text-left::after,
  .horizontal.with-text-right::after {
    position: relative;
    top: 50%;
    display: table-cell;
    width: 50%;
    border-top: 1px solid #e8e8e8;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    content: "";
  }
  .horizontal.with-text-left .inner-text,
  .horizontal.with-text-right .inner-text {
    display: inline-block;
    padding: 0 10px;
  }
  .horizontal.with-text-left::before {
    top: 50%;
    width: 5%;
  }
  .horizontal.with-text-left::after {
    top: 50%;
    width: 95%;
  }
  .horizontal.with-text-right::before {
    top: 50%;
    width: 95%;
  }
  .horizontal.with-text-right::after {
    top: 50%;
    width: 5%;
  }
  .inner-text {
    display: inline-block;
    padding: 0 24px;
  }
  .dashed {
    background: none;
    border-color: #e8e8e8;
    border-style: dashed;
    border-width: 1px 0 0;
  }
  .horizontal.with-text-center.dashed,
  .horizontal.with-text-left.dashed,
  .horizontal.with-text-right.dashed {
    border-top: 0;
  }
  .horizontal.with-text-center.dashed::before,
  .horizontal.with-text-left.dashed::before,
  .horizontal.with-text-right.dashed::before,
  .horizontal.with-text-center.dashed::after,
  .horizontal.with-text-left.dashed::after,
  .horizontal.with-text-right.dashed::after {
    border-style: dashed none none;
  }
  .vertical.dashed {
    border-width: 0 0 0 1px;
  }
  .horizontal.with-text-center.plain,
  .horizontal.with-text-left.plain,
  .horizontal.with-text-right.plain {
    color: rgba(0, 0, 0, 0.65);
    font-weight: 400;
    font-size: 14px;
  }
</style>

<div
  class="divider"
  class:horizontal={direction === 'horizontal'}
  class:vertical={direction === 'vertical'}
  class:with-text={SLOTS && true}
  class:with-text-center={SLOTS && align === 'center'}
  class:with-text-left={SLOTS && align == 'left'}
  class:with-text-right={SLOTS && align === 'right'}
  class:plain
  class:dashed
  role="separator">
  {#if SLOTS}
    <span class="inner-text">
      <slot />
    </span>
  {/if}
</div>
