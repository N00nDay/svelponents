<script>
  export let style = undefined;
  export let type = undefined;
  export let disabled = false;
  export let mark = false;
  export let code = false;
  export let keyboard = false;
  export let underline = false;
  export let del = false;
  export let strong = false;
  export let link = false;
  export let href = undefined;
  export let target = undefined;
</script>

<style>
  .typography {
    color: rgba(0, 0, 0, 0.65);
  }
  .typography.secondary {
    color: rgba(0, 0, 0, 0.45);
  }
  .typography.warning {
    color: #faad14;
  }
  .typography.danger {
    color: #ff4d4f;
  }
  .typography.disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .typography :glboal(a) {
    color: #1890ff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
  .typography :glboal(a:focus),
  .typography :glboal(a:hover) {
    color: #40a9ff;
  }
  .typography :glboal(a:active) {
    color: #096dd9;
  }
  .typography :glboal(a:active),
  .typography :glboal(a:hover) {
    text-decoration: none;
  }
  .typography :glboal(a[disabled]) {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    pointer-events: none;
  }
  .typography code {
    margin: 0 0.2em;
    padding: 0.2em 0.4em 0.1em;
    font-size: 85%;
    background: rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 3px;
  }
  .typography mark {
    padding: 0;
    background-color: #ffe58f;
  }
  .typography u {
    text-decoration: underline;
    -webkit-text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }
  .typography del {
    text-decoration: line-through;
  }
  .typography strong {
    font-weight: 600;
  }
</style>

{#if link}
  <a class="typography" {style} {href} {target} rel="noopener noreferrer">
    <slot />
  </a>
{:else}
  <span
    {style}
    class="typography"
    class:secondary={type === 'secondary'}
    class:warning={type === 'warning'}
    class:danger={type === 'danger'}
    class:disabled>
    {#if mark}
      <mark>
        <slot />
      </mark>
    {:else if code}
      <code>
        <slot />
      </code>
    {:else if keyboard}
      <kbd>
        <slot />
      </kbd>
    {:else if underline}
      <u>
        <slot />
      </u>
    {:else if del}
      <del>
        <slot />
      </del>
    {:else if strong}
      <strong>
        <slot />
      </strong>
    {:else}
      <slot />
    {/if}
  </span>
{/if}
