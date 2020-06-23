<script context="module">
  import { writable } from "svelte/store";
  let topMessages = writable([]);
  let bottomMessages = writable([]);

  export const message = {
    open: ({
      msg = "",
      theme = "dark",
      duration = 3000,
      onClose,
      btnText = "BUTTON",
      btnClick,
      placement = "center",
      align = "top",
      showIcon = true,
      type = undefined
    }) => {
      pushMessage({
        msg,
        theme,
        duration,
        onClose,
        btnText,
        btnClick,
        placement,
        align,
        showIcon,
        type
      });
    },
    success: ({
      msg = "",
      theme = "dark",
      duration = 3000,
      onClose,
      btnText = "BUTTON",
      btnClick,
      placement = "center",
      align = "top",
      showIcon = true,
      type = "success"
    }) => {
      pushMessage({
        msg,
        theme,
        duration,
        onClose,
        btnText,
        btnClick,
        placement,
        align,
        showIcon,
        type
      });
    },
    info: ({
      msg = "",
      theme = "dark",
      duration = 3000,
      onClose,
      btnText = "BUTTON",
      btnClick,
      placement = "center",
      align = "top",
      showIcon = true,
      type = "info"
    }) => {
      pushMessage({
        msg,
        theme,
        duration,
        onClose,
        btnText,
        btnClick,
        placement,
        align,
        showIcon,
        type
      });
    },
    warning: ({
      msg = "",
      theme = "dark",
      duration = 3000,
      onClose,
      btnText = "BUTTON",
      btnClick,
      placement = "center",
      align = "top",
      showIcon = true,
      type = "warning"
    }) => {
      pushMessage({
        msg,
        theme,
        duration,
        onClose,
        btnText,
        btnClick,
        placement,
        align,
        showIcon,
        type
      });
    },
    error: ({
      msg = "",
      theme = "dark",
      duration = 3000,
      onClose,
      btnText = "BUTTON",
      btnClick,
      placement = "center",
      align = "top",
      showIcon = true,
      type = "error"
    }) => {
      pushMessage({
        msg,
        theme,
        duration,
        onClose,
        btnText,
        btnClick,
        placement,
        align,
        showIcon,
        type
      });
    }
  };

  let topMessageId = 0;
  let bottomMessageId = 0;
  let messageIdPrefix = "messageId_";
  const pushMessage = ({
    msg,
    theme,
    duration,
    onClose,
    btnText,
    btnClick,
    placement,
    align,
    showIcon,
    type
  }) => {
    let transitionObject = {
      delay: 0,
      duration: 300,
      x: 0,
      y: -50,
      opacity: 0.1,
      easing: backOut
    };
    if (placement === "bottom") {
      transitionObject.y = 50;
    }
    if (align === "left") {
      transitionObject.x = -50;
      transitionObject.y = 0;
    } else if (align === "right") {
      transitionObject.x = 50;
      transitionObject.y = 0;
    }

    if (placement === "bottom") {
      ++bottomMessageId;
      bottomMessages.update(messages => {
        let timer = setTimeout(() => {
          if (onClose) onClose();
          removeBottomMessage();
        }, duration);
        return [
          ...messages,
          {
            _id: `${messageIdPrefix}${bottomMessageId}`,
            msg,
            theme,
            onClose,
            btnText,
            btnClick,
            placement,
            align,
            showIcon,
            type,
            transitionObject,
            timer,
            duration
          }
        ];
      });
    } else {
      ++topMessageId;
      topMessages.update(messages => {
        let timer = setTimeout(() => {
          if (onClose) onClose();
          removeTopMessage();
        }, duration);
        return [
          ...messages,
          {
            _id: `${messageIdPrefix}${topMessageId}`,
            msg,
            theme,
            onClose,
            btnText,
            btnClick,
            placement,
            align,
            showIcon,
            type,
            transitionObject,
            timer,
            duration
          }
        ];
      });
    }
  };

  const removeTopMessage = () => {
    topMessages.update(messages => {
      return messages.filter((a, i) => i > 0);
    });
  };

  const removeBottomMessage = () => {
    bottomMessages.update(messages => {
      return messages.filter((a, i) => i > 0);
    });
  };
</script>

<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import Icon from "../Icon/Icon.svelte";
  import Button from "../Button/Button.svelte";

  function onMouseEnterBottom(e) {
    let _id = e.currentTarget.id;
    bottomMessages.update(messages => {
      messages.map(m => {
        if (m._id === _id) {
          clearTimeout(m.timer);
        }
        return m;
      });
      return messages;
    });
  }

  function onMouseLeaveBottom(e) {
    let _id = e.currentTarget.id;
    bottomMessages.update(messages => {
      messages.map(m => {
        if (m._id === _id) {
          m.timer = setTimeout(() => {
            if (m.onClose) m.onClose();
            removeBottomMessage();
          }, m.duration);
        }
        return m;
      });
      return messages;
    });
  }

  function onMouseEntertop(e) {
    let _id = e.currentTarget.id;
    topMessages.update(messages => {
      messages.map(m => {
        if (m._id === _id) {
          clearTimeout(m.timer);
        }
        return m;
      });
      return messages;
    });
  }

  function onMouseLeaveTop(e) {
    let _id = e.currentTarget.id;
    topMessages.update(messages => {
      messages.map(m => {
        if (m._id === _id) {
          m.timer = setTimeout(() => {
            if (m.onClose) m.onClose();
            removeTopMessage();
          }, m.duration);
        }
        return m;
      });
      return messages;
    });
  }

  let el;
  onMount(() => {
    document.body.appendChild(el);
  });
</script>

<style>
  .message {
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
    position: fixed;
    top: 16px;
    left: 0;
    z-index: 1010;
    width: 100%;
    pointer-events: none;
  }
  .message.bottom {
    top: unset;
    bottom: 16px;
  }
  .notice {
    padding: 8px;
    text-align: center;
  }
  .notice.left {
    text-align: left;
  }
  .notice.right {
    text-align: right;
  }
  .notice:first-child {
    margin-top: -8px;
  }
  .notice-content {
    display: inline-block;
    padding: 10px 16px;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    pointer-events: all;
  }
  .dark.notice-content {
    background: rgba(0, 0, 0, 0.7);
    color: #ffffff;
  }
  .success .icon {
    color: #52c41a;
  }
  .error .icon {
    color: #ff4d4f;
  }
  .warning .icon {
    color: #faad14;
  }
  .info .icon {
    color: #1890ff;
  }
  .message .icon {
    position: relative;
    top: 1px;
    margin-right: 8px;
    font-size: 16px;
  }
</style>

<div bind:this={el}>
  <div class="message">
    <span>
      {#each $topMessages as message (message._id)}
        <div
          on:mouseenter={onMouseEntertop}
          on:mouseleave={onMouseLeaveTop}
          id={message._id}
          class="notice"
          class:left={message.align === 'left'}
          class:right={message.align === 'right'}
          in:fly={message.transitionObject}
          out:fade={{ duration: 500, opacity: 0 }}>
          <div class="notice-content" class:dark={message.theme === 'dark'}>
            <div
              class="custom-content"
              class:success={message.type === 'success'}
              class:info={message.type === 'info'}
              class:warning={message.type === 'warning'}
              class:error={message.type === 'error'}>
              {#if message.showIcon && message.type}
                <span class="icon">
                  <Icon
                    icon={`alert${message.type
                      .charAt(0)
                      .toUpperCase() + message.type.slice(1)}`}
                    viewBox="64 64 896 896"
                    size={14}
                    style="vertical-align: middle;" />
                </span>
              {/if}
              <span>{message.msg}</span>
              {#if message.btnClick}
                <Button
                  type="link"
                  on:click={message.btnClick}
                  style="margin-left: 8px;">
                  {message.btnText}
                </Button>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </span>
  </div>

  <div class="message bottom">
    <span>
      {#each $bottomMessages as message (message._id)}
        <div
          id={message._id}
          on:mouseenter={onMouseEnterBottom}
          on:mouseleave={onMouseLeaveBottom}
          class="notice"
          class:left={message.align === 'left'}
          class:right={message.align === 'right'}
          in:fly={message.transitionObject}
          out:fade={{ duration: 500, opacity: 0 }}>
          <div class="notice-content" class:dark={message.theme === 'dark'}>
            <div
              class="custom-content"
              class:success={message.type === 'success'}
              class:info={message.type === 'info'}
              class:warning={message.type === 'warning'}
              class:error={message.type === 'error'}>
              {#if message.showIcon && message.type}
                <span class="icon">
                  <Icon
                    icon={`alert${message.type
                      .charAt(0)
                      .toUpperCase() + message.type.slice(1)}`}
                    viewBox="64 64 896 896"
                    size={14}
                    style="vertical-align: middle;" />
                </span>
              {/if}
              <span>{message.msg}</span>
              {#if message.btnClick}
                <Button
                  type="link"
                  on:click={message.btnClick}
                  style="margin-left: 8px;">
                  {message.btnText}
                </Button>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </span>
  </div>
</div>
