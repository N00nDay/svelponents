# Message

Only use `<Message />` once for all mounted components. Multiple `<Message />` will cause multiple messages to be shown.

## Basic & Status

```html
<script>
  import { Message } from "svelponents";
  const { message } = Message;

  const open = () => {
    message.open({ msg: "open" });
  };

  const success = () => {
    message.success({ msg: "success" });
  };

  const info = () => {
    message.info({ msg: "info" });
  };

  const warning = () => {
    message.warning({ msg: "warning" });
  };

  const error = () => {
    message.error({ msg: "error" });
  };
</script>

<button on:click="{open}">Open</button>
<button on:click="{success}">Success</button>
<button on:click="{info}">Info</button>
<button on:click="{warning}">Warning</button>
<button on:click="{error}">Error</button>

<Message />
```

## Placement & Alignment

```html
<script>
  import { Message } from "svelponents";
  const { message } = Message;

  const openTop = () => {
    message.open({ msg: "Placement Top" });
  };

  const openBottom = () => {
    message.open({ msg: "Placement Bottom", placement: "bottom" });
  };

  const openLeft = () => {
    message.open({ msg: "Aligned Left", align: "left" });
  };

  const openRight = () => {
    message.open({ msg: "Aligned Right", align: "right" });
  };
</script>

<button on:click="{openTop}">Placement Top</button>
<button on:click="{openBottom}">Placement Bottom</button>
<button on:click="{openLeft}">Align Left</button>
<button on:click="{openRight}">Align Right</button>

<Message />
```

## Theme

```html
<script>
  import { Message } from "svelponents";
  const { message } = Message;

  const openDark = () => {
    message.open({ msg: "Dark" });
  };

  const openLight = () => {
    message.open({ msg: "Light", theme: "light" });
  };
</script>

<button on:click="{openDark}">Dark</button>
<button on:click="{openLight}">Light</button>

<Message />
```

## With Button

```html
<script>
  import { Message } from "svelponents";
  const { message } = Message;

  const openButton = () => {
    message.open({
      msg: "I have a button ->",
      btnText: "Click Me!",
      btnClick: () => console.log("I've been clicked!"),
    });
  };
</script>

<button on:click="{openButton}">With Button</button>

<Message />
```

## With Callback

```html
<script>
  import { Message } from "svelponents";
  const { message } = Message;

  const openCallback = () => {
    message.open({
      msg: "Callback coming in 3 seconds",
      onClose: () =>
        message.success({
          msg: "I showed up after the other closed!",
        }),
    });
  };
</script>

<button on:click="{openCallback}">With Callback</button>

<Message />
```
