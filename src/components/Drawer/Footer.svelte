<script>
    export let style = undefined;
</script>

<style>
    .footer {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px 10px;
        border-top: 1px solid #f0f0f0;
    }
</style>

<div class="footer" {style}>
    <div class="title">
        <slot />
    </div>
</div>
