<script>
  export let avatar = undefined;
  export let loading = true;
  export let paragraph = 1;
  export let lines = 4;
  export let title = true;
</script>

<style>
  .skeleton {
    display: table;
    width: 100%;
  }
  .skeleton-header {
    display: table-cell;
    padding-right: 16px;
    vertical-align: top;
  }
  .skeleton-header .skeleton-avatar {
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
    width: 32px;
    height: 32px;
    line-height: 32px;
  }
  .skeleton-header .skeleton-avatar.skeleton-avatar-circle {
    border-radius: 50%;
  }
  .skeleton-header .skeleton-avatar-lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .skeleton-header .skeleton-avatar-lg.skeleton-avatar-circle {
    border-radius: 50%;
  }
  .skeleton-content {
    display: table-cell;
    width: 100%;
    vertical-align: top;
  }
  .skeleton-content .skeleton-title {
    width: 100%;
    height: 16px;
    margin-top: 16px;
    background: #f2f2f2;
  }
  .skeleton-content .skeleton-title + .skeleton-paragraph {
    margin-top: 24px;
  }
  .skeleton-content .skeleton-paragraph {
    padding: 0;
  }
  .skeleton-content .skeleton-paragraph > li {
    width: 100%;
    height: 16px;
    list-style: none;
    background: #f2f2f2;
  }
  .skeleton-content
    .skeleton-paragraph
    > li:last-child:not(:first-child):not(:nth-child(2)) {
    width: 61%;
  }
  .skeleton-content .skeleton-paragraph:not(:last-child) {
    margin-bottom: 24px;
  }
  .skeleton-content .skeleton-paragraph > li + li {
    margin-top: 16px;
  }
  .skeleton-with-avatar .skeleton-content .skeleton-title {
    margin-top: 12px;
  }
  .skeleton-with-avatar
    .skeleton-content
    .skeleton-title
    + .skeleton-paragraph {
    margin-top: 28px;
  }
  .skeleton.skeleton-active .skeleton-content .skeleton-title,
  .skeleton.skeleton-active .skeleton-content .skeleton-paragraph > li {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(25%, #f2f2f2),
      color-stop(37%, #e6e6e6),
      color-stop(63%, #f2f2f2)
    );
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    -webkit-animation: skeleton-loading 1.4s ease infinite;
    animation: skeleton-loading 1.4s ease infinite;
  }
  .skeleton.skeleton-active .skeleton-avatar {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(25%, #f2f2f2),
      color-stop(37%, #e6e6e6),
      color-stop(63%, #f2f2f2)
    );
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    -webkit-animation: skeleton-loading 1.4s ease infinite;
    animation: skeleton-loading 1.4s ease infinite;
  }
  @-webkit-keyframes skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  @keyframes skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
</style>

{#if loading}
  <div class="skeleton skeleton-with-avatar skeleton-active">
    {#if avatar}
      <div class="skeleton-header">
        <span
          class="skeleton-avatar skeleton-avatar-lg skeleton-avatar-circle" />
      </div>
    {/if}
    <div class="skeleton-content">
      {#if title}
        <h3 class="skeleton-title" style="width: 50%;">&nbsp;</h3>
      {/if}
      {#each Array(paragraph) as _, i}
        <ul class="skeleton-paragraph">
          {#each Array(lines) as _, i}
            <li />
          {/each}
        </ul>
      {/each}
    </div>
  </div>
{/if}
