<script>
  import { afterUpdate } from "svelte";
  import Icon from "../Icon.svelte";
  import Row from "../../Grid/Row.svelte";
  import Col from "../../Grid/Col.svelte";
  import Table from "../../Table";
  import Title from "../../Typography/Title.svelte";
  import Divider from "../../Divider/Divider.svelte";

  import Container from "../../../../demo/Container.svelte";
  import Box from "../../../../demo/Box.svelte";
  import filterList from "../../../utils/filterList";

  let list, value;
  afterUpdate(async () => {
    filterList(value, list);
  });

  let headers = [
    {
      key: "name",
      name: "Name",
      type: "string",
      width: 15
    },
    {
      key: "description",
      name: "Description",
      type: "string",
      width: 35
    },
    {
      key: "type",
      name: "Type",
      type: "string",
      width: 35
    },
    {
      key: "default",
      name: "Default",
      type: "string",
      width: 15,
      align: "right"
    }
  ];

  let props = [
    {
      name: "className",
      description: "pass class",
      type: "string",
      default: "",
      _id: "className"
    },
    {
      name: "color",
      description: "icon color",
      type: "string",
      default: "currentColor",
      _id: "color"
    },
    {
      name: "icon",
      description: "set the icon",
      type: "string",
      default: "",
      _id: "icon"
    },
    {
      name: "loading",
      description: "loading state",
      type: "boolean",
      default: false,
      _id: "loading"
    },
    {
      name: "size",
      description: "icon size",
      type: "number",
      default: 20,
      _id: "size"
    },
    {
      name: "viewbox",
      description: "viewbox size",
      type: "string",
      default: "0 0 24 24",
      _id: "viewbox"
    }
  ];
</script>

<style>
  ul.anticons-list {
    /* margin: 10px 0; */
    padding: 0;
    overflow: hidden;
    direction: ltr;
    list-style: none;
  }
  ul.anticons-list li {
    position: relative;
    float: left;
    width: 16.66%;
    height: 100px;
    margin: 3px 0;
    padding: 10px 0 0;
    overflow: hidden;
    color: #555;
    text-align: center;
    list-style: none;
    background-color: inherit;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
  ul.anticons-list li:hover {
    color: #fff;
    background-color: #1890ff;
  }
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul.anticons-list li .anticon {
    margin: 12px 0 8px;
    font-size: 36px;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    will-change: transform;
  }
  ul.anticons-list li:hover .anticon {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
  }
  ul.anticons-list li .anticon-class {
    display: block;
    font-family: lucida console, Consolas, Monaco, andale mono, ubuntu mono,
      monospace;
    white-space: nowrap;
    text-align: center;
    -webkit-transform: scale(0.83);
    transform: scale(0.83);
  }
  ul.anticons-list li::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    line-height: 110px;
    text-align: center;
    opacity: 0;
    -webkit-transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    content: "Copied!";
  }
</style>

<Container>

  <Title level={1}>List of Icons</Title>
  <Box>

    <!-- TODO: replace with Input -->
    <input bind:value />

    <ul bind:this={list} class="anticons-list">
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="account" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">account</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="add" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">add</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="addAlert" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">addAlert</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon
            icon="alertSuccess"
            style="font-size: 36px;"
            viewBox="64 64 896 896" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">alertSuccess</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon
            icon="alertInfo"
            style="font-size: 36px;"
            viewBox="64 64 896 896" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">alertInfo</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon
            icon="alertWarning"
            style="font-size: 36px;"
            viewBox="64 64 896 896" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">alertWarning</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon
            icon="alertError"
            style="font-size: 36px;"
            viewBox="64 64 896 896" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">alertError</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="arrowDown" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">arrowDown</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="arrowLeft" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">arrowLeft</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="arrowRight" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">arrowRight</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="arrowDropDownCircle" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">arrowDropDownCircle</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="assignment" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">assignment</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="attachFile" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">attachFile</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="attachMoney" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">attachMoney</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="bell" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">bell</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="bug" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">bug</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="build" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">build</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="business" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">business</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="call" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">call</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="chart" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">chart</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="chat" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">chat</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="chats" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">chats</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="checkCircle" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">checkCircle</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="checkCircleEmpty" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">checkCircleEmpty</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="checkCircleFilled" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">checkCircleFilled</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="chevronDown" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">chevronDown</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="chevronLeft" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">chevronLeft</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="chevronRight" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">chevronRight</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="clipboardCheck" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">clipboardCheck</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="close" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">close</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="codeTags" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">codeTags</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="contact" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">contact</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="contactCrossedOut" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">contactCrossedOut</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="contactMail" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">contactMail</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="contentCopy" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">contentCopy</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="createDocument" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">createDocument</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="crossHairs" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">crossHairs</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="dashboard" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">dashboard</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="delete" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">delete</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="description" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">description</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="directions" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">directions</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="doneAll" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">doneAll</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="download" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">download</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="drafts" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">drafts</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="dumpTruck" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">dumpTruck</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="edit" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">edit</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="email" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">email</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="emailOutline" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">emailOutline</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="export" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">export</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="eye" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">eye</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="file" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">file</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="filter" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">filter</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="group" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">group</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="image" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">image</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="inbox" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">inbox</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="inboxFull" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">inboxFull</span>
        </span>
      </li>
      <!-- <li class="Outlined">
      <span role="img" class="anticon">
        <Icon icon="loading" style="font-size: 36px;" />
      </span>
      <span class="anticon-class">
        <span class="ant-badge">loading</span>
      </span>
    </li> -->
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="localOffer" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">localOffer</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="localShipping" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">localShipping</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="lock" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">lock</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="menu" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">menu</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="message" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">message</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="moreVert" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">moreVert</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="newReleases" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">newReleases</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="note" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">note</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="notifications" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">notifications</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="notificationsNone" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">notificationsNone</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="openInBrowser" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">openInBrowser</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="openInNew" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">openInNew</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="person" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">person</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="phone" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">phone</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="photoLibrary" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">photoLibrary</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="pieChart" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">pieChart</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="place" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">place</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="power" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">power</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="progressWrench" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">progressWrench</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="receipt" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">receipt</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="refresh" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">refresh</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="remove" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">remove</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="rotateLeft" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">rotateLeft</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="rotateRight" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">rotateRight</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="satellite" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">satellite</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="save" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">save</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="search" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">search</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="send" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">send</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="settings" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">settings</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="share" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">share</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="shoppingCart" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">shoppingCart</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="star" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">star</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="starBorder" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">starBorder</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="textSms" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">textSms</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="timer" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">timer</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="tune" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">tune</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="viewList" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">viewList</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="viewWeek" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">viewWeek</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="wallet" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">wallet</span>
        </span>
      </li>
      <li class="Outlined">
        <span role="img" class="anticon">
          <Icon icon="youTube" style="font-size: 36px;" />
        </span>
        <span class="anticon-class">
          <span class="ant-badge">youTube</span>
        </span>
      </li>
    </ul>

  </Box>

  <br />
  <br />

  <Title level={1}>List of Icons</Title>

  <Table {headers} bordered>
    <Table.Columns />
    <Table.Content>
      {#each props as item}
        <Table.Row {item} />
      {/each}
    </Table.Content>
  </Table>
</Container>
