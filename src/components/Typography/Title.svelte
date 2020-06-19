<script>
    export let style = undefined;
    export let level = 1;
    export let disabled = false;
    export let secondary = false;
    export let warning = false;
    export let danger = false;
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
    h1.typography {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 38px;
        line-height: 1.23;
    }
    h2.typography {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 30px;
        line-height: 1.35;
    }
    h3.typography {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 24px;
        line-height: 1.35;
    }
    h4.typography {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
        line-height: 1.4;
    }
    .typography + h1.typography,
    .typography + h2.typography,
    .typography + h3.typography,
    .typography + h4.typography {
        margin-top: 1.2em;
    }
    .typography div + h1,
    .typography ul + h1,
    .typography li + h1,
    .typography p + h1,
    .typography h1 + h1,
    .typography h2 + h1,
    .typography h3 + h1,
    .typography h4 + h1,
    .typography div + h2,
    .typography ul + h2,
    .typography li + h2,
    .typography p + h2,
    .typography h1 + h2,
    .typography h2 + h2,
    .typography h3 + h2,
    .typography h4 + h2,
    .typography div + h3,
    .typography ul + h3,
    .typography li + h3,
    .typography p + h3,
    .typography h1 + h3,
    .typography h2 + h3,
    .typography h3 + h3,
    .typography h4 + h3,
    .typography div + h4,
    .typography ul + h4,
    .typography li + h4,
    .typography p + h4,
    .typography h1 + h4,
    .typography h2 + h4,
    .typography h3 + h4,
    .typography h4 + h4 {
        margin-top: 1.2em;
    }
</style>

{#if level === 1}
    <h1 class="typography" {style} class:disabled class:secondary class:warning class:danger>
        <slot />
    </h1>
{:else if level === 2}
    <h2 class="typography" {style} class:disabled class:secondary class:warning class:danger>
        <slot />
    </h2>
{:else if level === 3}
    <h3 class="typography" {style} class:disabled class:secondary class:warning class:danger>
        <slot />
    </h3>
{:else if level === 4}
    <h4 class="typography" {style} class:disabled class:secondary class:warning class:danger>
        <slot />
    </h4>
{/if}
