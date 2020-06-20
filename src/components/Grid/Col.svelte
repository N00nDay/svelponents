<script>
  import { getContext } from "svelte";
  import { CONTEXT } from "./Context.svelte";
  import addStyle from "../../utils/addStyle";
  const { colStyle } = getContext(CONTEXT);

  export let xs = null;
  export let sm = null;
  export let md = null;
  export let lg = null;
  export let xl = null;
  export let xxl = null;
  export let span = null;
  export let push = false;
  export let offset = false;
  export let pull = false;
  export let order = false;
  export let style = undefined;

  style = addStyle({
    style,
    attribute: true,
    string: colStyle
  });
</script>

<style>
  .col {
    position: relative;
    min-height: 1px;
  }
  .col-1,
  .col-xs-1,
  .col-sm-1,
  .col-md-1,
  .col-lg-1,
  .col-2,
  .col-xs-2,
  .col-sm-2,
  .col-md-2,
  .col-lg-2,
  .col-3,
  .col-xs-3,
  .col-sm-3,
  .col-md-3,
  .col-lg-3,
  .col-4,
  .col-xs-4,
  .col-sm-4,
  .col-md-4,
  .col-lg-4,
  .col-5,
  .col-xs-5,
  .col-sm-5,
  .col-md-5,
  .col-lg-5,
  .col-6,
  .col-xs-6,
  .col-sm-6,
  .col-md-6,
  .col-lg-6,
  .col-7,
  .col-xs-7,
  .col-sm-7,
  .col-md-7,
  .col-lg-7,
  .col-8,
  .col-xs-8,
  .col-sm-8,
  .col-md-8,
  .col-lg-8,
  .col-9,
  .col-xs-9,
  .col-sm-9,
  .col-md-9,
  .col-lg-9,
  .col-10,
  .col-xs-10,
  .col-sm-10,
  .col-md-10,
  .col-lg-10,
  .col-11,
  .col-xs-11,
  .col-sm-11,
  .col-md-11,
  .col-lg-11,
  .col-12,
  .col-xs-12,
  .col-sm-12,
  .col-md-12,
  .col-lg-12,
  .col-13,
  .col-xs-13,
  .col-sm-13,
  .col-md-13,
  .col-lg-13,
  .col-14,
  .col-xs-14,
  .col-sm-14,
  .col-md-14,
  .col-lg-14,
  .col-15,
  .col-xs-15,
  .col-sm-15,
  .col-md-15,
  .col-lg-15,
  .col-16,
  .col-xs-16,
  .col-sm-16,
  .col-md-16,
  .col-lg-16,
  .col-17,
  .col-xs-17,
  .col-sm-17,
  .col-md-17,
  .col-lg-17,
  .col-18,
  .col-xs-18,
  .col-sm-18,
  .col-md-18,
  .col-lg-18,
  .col-19,
  .col-xs-19,
  .col-sm-19,
  .col-md-19,
  .col-lg-19,
  .col-20,
  .col-xs-20,
  .col-sm-20,
  .col-md-20,
  .col-lg-20,
  .col-21,
  .col-xs-21,
  .col-sm-21,
  .col-md-21,
  .col-lg-21,
  .col-22,
  .col-xs-22,
  .col-sm-22,
  .col-md-22,
  .col-lg-22,
  .col-23,
  .col-xs-23,
  .col-sm-23,
  .col-md-23,
  .col-lg-23,
  .col-24,
  .col-xs-24,
  .col-sm-24,
  .col-md-24,
  .col-lg-24 {
    position: relative;
    padding-right: 0;
    padding-left: 0;
  }
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col-13,
  .col-14,
  .col-15,
  .col-16,
  .col-17,
  .col-18,
  .col-19,
  .col-20,
  .col-21,
  .col-22,
  .col-23,
  .col-24 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    float: left;
  }
  .col-24 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
  }
  .col-push-24 {
    left: 100%;
  }
  .col-pull-24 {
    right: 100%;
  }
  .col-offset-24 {
    margin-left: 100%;
  }
  .col-order-24 {
    -webkit-box-ordinal-group: 25;
    -ms-flex-order: 24;
    order: 24;
  }
  .col-23 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 95.83333333%;
  }
  .col-push-23 {
    left: 95.83333333%;
  }
  .col-pull-23 {
    right: 95.83333333%;
  }
  .col-offset-23 {
    margin-left: 95.83333333%;
  }
  .col-order-23 {
    -webkit-box-ordinal-group: 24;
    -ms-flex-order: 23;
    order: 23;
  }
  .col-22 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 91.66666667%;
  }
  .col-push-22 {
    left: 91.66666667%;
  }
  .col-pull-22 {
    right: 91.66666667%;
  }
  .col-offset-22 {
    margin-left: 91.66666667%;
  }
  .col-order-22 {
    -webkit-box-ordinal-group: 23;
    -ms-flex-order: 22;
    order: 22;
  }
  .col-21 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 87.5%;
  }
  .col-push-21 {
    left: 87.5%;
  }
  .col-pull-21 {
    right: 87.5%;
  }
  .col-offset-21 {
    margin-left: 87.5%;
  }
  .col-order-21 {
    -webkit-box-ordinal-group: 22;
    -ms-flex-order: 21;
    order: 21;
  }
  .col-20 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 83.33333333%;
  }
  .col-push-20 {
    left: 83.33333333%;
  }
  .col-pull-20 {
    right: 83.33333333%;
  }
  .col-offset-20 {
    margin-left: 83.33333333%;
  }
  .col-order-20 {
    -webkit-box-ordinal-group: 21;
    -ms-flex-order: 20;
    order: 20;
  }
  .col-19 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 79.16666667%;
  }
  .col-push-19 {
    left: 79.16666667%;
  }
  .col-pull-19 {
    right: 79.16666667%;
  }
  .col-offset-19 {
    margin-left: 79.16666667%;
  }
  .col-order-19 {
    -webkit-box-ordinal-group: 20;
    -ms-flex-order: 19;
    order: 19;
  }
  .col-18 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 75%;
  }
  .col-push-18 {
    left: 75%;
  }
  .col-pull-18 {
    right: 75%;
  }
  .col-offset-18 {
    margin-left: 75%;
  }
  .col-order-18 {
    -webkit-box-ordinal-group: 19;
    -ms-flex-order: 18;
    order: 18;
  }
  .col-17 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 70.83333333%;
  }
  .col-push-17 {
    left: 70.83333333%;
  }
  .col-pull-17 {
    right: 70.83333333%;
  }
  .col-offset-17 {
    margin-left: 70.83333333%;
  }
  .col-order-17 {
    -webkit-box-ordinal-group: 18;
    -ms-flex-order: 17;
    order: 17;
  }
  .col-16 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 66.66666667%;
  }
  .col-push-16 {
    left: 66.66666667%;
  }
  .col-pull-16 {
    right: 66.66666667%;
  }
  .col-offset-16 {
    margin-left: 66.66666667%;
  }
  .col-order-16 {
    -webkit-box-ordinal-group: 17;
    -ms-flex-order: 16;
    order: 16;
  }
  .col-15 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 62.5%;
  }
  .col-push-15 {
    left: 62.5%;
  }
  .col-pull-15 {
    right: 62.5%;
  }
  .col-offset-15 {
    margin-left: 62.5%;
  }
  .col-order-15 {
    -webkit-box-ordinal-group: 16;
    -ms-flex-order: 15;
    order: 15;
  }
  .col-14 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 58.33333333%;
  }
  .col-push-14 {
    left: 58.33333333%;
  }
  .col-pull-14 {
    right: 58.33333333%;
  }
  .col-offset-14 {
    margin-left: 58.33333333%;
  }
  .col-order-14 {
    -webkit-box-ordinal-group: 15;
    -ms-flex-order: 14;
    order: 14;
  }
  .col-13 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 54.16666667%;
  }
  .col-push-13 {
    left: 54.16666667%;
  }
  .col-pull-13 {
    right: 54.16666667%;
  }
  .col-offset-13 {
    margin-left: 54.16666667%;
  }
  .col-order-13 {
    -webkit-box-ordinal-group: 14;
    -ms-flex-order: 13;
    order: 13;
  }
  .col-12 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
  }
  .col-push-12 {
    left: 50%;
  }
  .col-pull-12 {
    right: 50%;
  }
  .col-offset-12 {
    margin-left: 50%;
  }
  .col-order-12 {
    -webkit-box-ordinal-group: 13;
    -ms-flex-order: 12;
    order: 12;
  }
  .col-11 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 45.83333333%;
  }
  .col-push-11 {
    left: 45.83333333%;
  }
  .col-pull-11 {
    right: 45.83333333%;
  }
  .col-offset-11 {
    margin-left: 45.83333333%;
  }
  .col-order-11 {
    -webkit-box-ordinal-group: 12;
    -ms-flex-order: 11;
    order: 11;
  }
  .col-10 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 41.66666667%;
  }
  .col-push-10 {
    left: 41.66666667%;
  }
  .col-pull-10 {
    right: 41.66666667%;
  }
  .col-offset-10 {
    margin-left: 41.66666667%;
  }
  .col-order-10 {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10;
  }
  .col-9 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 37.5%;
  }
  .col-push-9 {
    left: 37.5%;
  }
  .col-pull-9 {
    right: 37.5%;
  }
  .col-offset-9 {
    margin-left: 37.5%;
  }
  .col-order-9 {
    -webkit-box-ordinal-group: 10;
    -ms-flex-order: 9;
    order: 9;
  }
  .col-8 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 33.33333333%;
  }
  .col-push-8 {
    left: 33.33333333%;
  }
  .col-pull-8 {
    right: 33.33333333%;
  }
  .col-offset-8 {
    margin-left: 33.33333333%;
  }
  .col-order-8 {
    -webkit-box-ordinal-group: 9;
    -ms-flex-order: 8;
    order: 8;
  }
  .col-7 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 29.16666667%;
  }
  .col-push-7 {
    left: 29.16666667%;
  }
  .col-pull-7 {
    right: 29.16666667%;
  }
  .col-offset-7 {
    margin-left: 29.16666667%;
  }
  .col-order-7 {
    -webkit-box-ordinal-group: 8;
    -ms-flex-order: 7;
    order: 7;
  }
  .col-6 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 25%;
  }
  .col-push-6 {
    left: 25%;
  }
  .col-pull-6 {
    right: 25%;
  }
  .col-offset-6 {
    margin-left: 25%;
  }
  .col-order-6 {
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    order: 6;
  }
  .col-5 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 20.83333333%;
  }
  .col-push-5 {
    left: 20.83333333%;
  }
  .col-pull-5 {
    right: 20.83333333%;
  }
  .col-offset-5 {
    margin-left: 20.83333333%;
  }
  .col-order-5 {
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    order: 5;
  }
  .col-4 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 16.66666667%;
  }
  .col-push-4 {
    left: 16.66666667%;
  }
  .col-pull-4 {
    right: 16.66666667%;
  }
  .col-offset-4 {
    margin-left: 16.66666667%;
  }
  .col-order-4 {
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    order: 4;
  }
  .col-3 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 12.5%;
  }
  .col-push-3 {
    left: 12.5%;
  }
  .col-pull-3 {
    right: 12.5%;
  }
  .col-offset-3 {
    margin-left: 12.5%;
  }
  .col-order-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
  }
  .col-2 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 8.33333333%;
  }
  .col-push-2 {
    left: 8.33333333%;
  }
  .col-pull-2 {
    right: 8.33333333%;
  }
  .col-offset-2 {
    margin-left: 8.33333333%;
  }
  .col-order-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
  .col-1 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 4.16666667%;
  }
  .col-push-1 {
    left: 4.16666667%;
  }
  .col-pull-1 {
    right: 4.16666667%;
  }
  .col-offset-1 {
    margin-left: 4.16666667%;
  }
  .col-order-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
  .col-0 {
    display: none;
  }
  .col-push-0 {
    left: auto;
  }
  .col-pull-0 {
    right: auto;
  }
  .col-push-0 {
    left: auto;
  }
  .col-pull-0 {
    right: auto;
  }
  .col-offset-0 {
    margin-left: 0;
  }
  .col-order-0 {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
  }
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-13,
  .col-xs-14,
  .col-xs-15,
  .col-xs-16,
  .col-xs-17,
  .col-xs-18,
  .col-xs-19,
  .col-xs-20,
  .col-xs-21,
  .col-xs-22,
  .col-xs-23,
  .col-xs-24 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    float: left;
  }
  .col-xs-24 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
  }
  .col-xs-push-24 {
    left: 100%;
  }
  .col-xs-pull-24 {
    right: 100%;
  }
  .col-xs-offset-24 {
    margin-left: 100%;
  }
  .col-xs-order-24 {
    -webkit-box-ordinal-group: 25;
    -ms-flex-order: 24;
    order: 24;
  }
  .col-xs-23 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 95.83333333%;
  }
  .col-xs-push-23 {
    left: 95.83333333%;
  }
  .col-xs-pull-23 {
    right: 95.83333333%;
  }
  .col-xs-offset-23 {
    margin-left: 95.83333333%;
  }
  .col-xs-order-23 {
    -webkit-box-ordinal-group: 24;
    -ms-flex-order: 23;
    order: 23;
  }
  .col-xs-22 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 91.66666667%;
  }
  .col-xs-push-22 {
    left: 91.66666667%;
  }
  .col-xs-pull-22 {
    right: 91.66666667%;
  }
  .col-xs-offset-22 {
    margin-left: 91.66666667%;
  }
  .col-xs-order-22 {
    -webkit-box-ordinal-group: 23;
    -ms-flex-order: 22;
    order: 22;
  }
  .col-xs-21 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 87.5%;
  }
  .col-xs-push-21 {
    left: 87.5%;
  }
  .col-xs-pull-21 {
    right: 87.5%;
  }
  .col-xs-offset-21 {
    margin-left: 87.5%;
  }
  .col-xs-order-21 {
    -webkit-box-ordinal-group: 22;
    -ms-flex-order: 21;
    order: 21;
  }
  .col-xs-20 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 83.33333333%;
  }
  .col-xs-push-20 {
    left: 83.33333333%;
  }
  .col-xs-pull-20 {
    right: 83.33333333%;
  }
  .col-xs-offset-20 {
    margin-left: 83.33333333%;
  }
  .col-xs-order-20 {
    -webkit-box-ordinal-group: 21;
    -ms-flex-order: 20;
    order: 20;
  }
  .col-xs-19 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 79.16666667%;
  }
  .col-xs-push-19 {
    left: 79.16666667%;
  }
  .col-xs-pull-19 {
    right: 79.16666667%;
  }
  .col-xs-offset-19 {
    margin-left: 79.16666667%;
  }
  .col-xs-order-19 {
    -webkit-box-ordinal-group: 20;
    -ms-flex-order: 19;
    order: 19;
  }
  .col-xs-18 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 75%;
  }
  .col-xs-push-18 {
    left: 75%;
  }
  .col-xs-pull-18 {
    right: 75%;
  }
  .col-xs-offset-18 {
    margin-left: 75%;
  }
  .col-xs-order-18 {
    -webkit-box-ordinal-group: 19;
    -ms-flex-order: 18;
    order: 18;
  }
  .col-xs-17 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 70.83333333%;
  }
  .col-xs-push-17 {
    left: 70.83333333%;
  }
  .col-xs-pull-17 {
    right: 70.83333333%;
  }
  .col-xs-offset-17 {
    margin-left: 70.83333333%;
  }
  .col-xs-order-17 {
    -webkit-box-ordinal-group: 18;
    -ms-flex-order: 17;
    order: 17;
  }
  .col-xs-16 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 66.66666667%;
  }
  .col-xs-push-16 {
    left: 66.66666667%;
  }
  .col-xs-pull-16 {
    right: 66.66666667%;
  }
  .col-xs-offset-16 {
    margin-left: 66.66666667%;
  }
  .col-xs-order-16 {
    -webkit-box-ordinal-group: 17;
    -ms-flex-order: 16;
    order: 16;
  }
  .col-xs-15 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 62.5%;
  }
  .col-xs-push-15 {
    left: 62.5%;
  }
  .col-xs-pull-15 {
    right: 62.5%;
  }
  .col-xs-offset-15 {
    margin-left: 62.5%;
  }
  .col-xs-order-15 {
    -webkit-box-ordinal-group: 16;
    -ms-flex-order: 15;
    order: 15;
  }
  .col-xs-14 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 58.33333333%;
  }
  .col-xs-push-14 {
    left: 58.33333333%;
  }
  .col-xs-pull-14 {
    right: 58.33333333%;
  }
  .col-xs-offset-14 {
    margin-left: 58.33333333%;
  }
  .col-xs-order-14 {
    -webkit-box-ordinal-group: 15;
    -ms-flex-order: 14;
    order: 14;
  }
  .col-xs-13 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 54.16666667%;
  }
  .col-xs-push-13 {
    left: 54.16666667%;
  }
  .col-xs-pull-13 {
    right: 54.16666667%;
  }
  .col-xs-offset-13 {
    margin-left: 54.16666667%;
  }
  .col-xs-order-13 {
    -webkit-box-ordinal-group: 14;
    -ms-flex-order: 13;
    order: 13;
  }
  .col-xs-12 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
  }
  .col-xs-push-12 {
    left: 50%;
  }
  .col-xs-pull-12 {
    right: 50%;
  }
  .col-xs-offset-12 {
    margin-left: 50%;
  }
  .col-xs-order-12 {
    -webkit-box-ordinal-group: 13;
    -ms-flex-order: 12;
    order: 12;
  }
  .col-xs-11 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 45.83333333%;
  }
  .col-xs-push-11 {
    left: 45.83333333%;
  }
  .col-xs-pull-11 {
    right: 45.83333333%;
  }
  .col-xs-offset-11 {
    margin-left: 45.83333333%;
  }
  .col-xs-order-11 {
    -webkit-box-ordinal-group: 12;
    -ms-flex-order: 11;
    order: 11;
  }
  .col-xs-10 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 41.66666667%;
  }
  .col-xs-push-10 {
    left: 41.66666667%;
  }
  .col-xs-pull-10 {
    right: 41.66666667%;
  }
  .col-xs-offset-10 {
    margin-left: 41.66666667%;
  }
  .col-xs-order-10 {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10;
  }
  .col-xs-9 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 37.5%;
  }
  .col-xs-push-9 {
    left: 37.5%;
  }
  .col-xs-pull-9 {
    right: 37.5%;
  }
  .col-xs-offset-9 {
    margin-left: 37.5%;
  }
  .col-xs-order-9 {
    -webkit-box-ordinal-group: 10;
    -ms-flex-order: 9;
    order: 9;
  }
  .col-xs-8 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 33.33333333%;
  }
  .col-xs-push-8 {
    left: 33.33333333%;
  }
  .col-xs-pull-8 {
    right: 33.33333333%;
  }
  .col-xs-offset-8 {
    margin-left: 33.33333333%;
  }
  .col-xs-order-8 {
    -webkit-box-ordinal-group: 9;
    -ms-flex-order: 8;
    order: 8;
  }
  .col-xs-7 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 29.16666667%;
  }
  .col-xs-push-7 {
    left: 29.16666667%;
  }
  .col-xs-pull-7 {
    right: 29.16666667%;
  }
  .col-xs-offset-7 {
    margin-left: 29.16666667%;
  }
  .col-xs-order-7 {
    -webkit-box-ordinal-group: 8;
    -ms-flex-order: 7;
    order: 7;
  }
  .col-xs-6 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 25%;
  }
  .col-xs-push-6 {
    left: 25%;
  }
  .col-xs-pull-6 {
    right: 25%;
  }
  .col-xs-offset-6 {
    margin-left: 25%;
  }
  .col-xs-order-6 {
    -webkit-box-ordinal-group: 7;
    -ms-flex-order: 6;
    order: 6;
  }
  .col-xs-5 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 20.83333333%;
  }
  .col-xs-push-5 {
    left: 20.83333333%;
  }
  .col-xs-pull-5 {
    right: 20.83333333%;
  }
  .col-xs-offset-5 {
    margin-left: 20.83333333%;
  }
  .col-xs-order-5 {
    -webkit-box-ordinal-group: 6;
    -ms-flex-order: 5;
    order: 5;
  }
  .col-xs-4 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 16.66666667%;
  }
  .col-xs-push-4 {
    left: 16.66666667%;
  }
  .col-xs-pull-4 {
    right: 16.66666667%;
  }
  .col-xs-offset-4 {
    margin-left: 16.66666667%;
  }
  .col-xs-order-4 {
    -webkit-box-ordinal-group: 5;
    -ms-flex-order: 4;
    order: 4;
  }
  .col-xs-3 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 12.5%;
  }
  .col-xs-push-3 {
    left: 12.5%;
  }
  .col-xs-pull-3 {
    right: 12.5%;
  }
  .col-xs-offset-3 {
    margin-left: 12.5%;
  }
  .col-xs-order-3 {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
  }
  .col-xs-2 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 8.33333333%;
  }
  .col-xs-push-2 {
    left: 8.33333333%;
  }
  .col-xs-pull-2 {
    right: 8.33333333%;
  }
  .col-xs-offset-2 {
    margin-left: 8.33333333%;
  }
  .col-xs-order-2 {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  }
  .col-xs-1 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 4.16666667%;
  }
  .col-xs-push-1 {
    left: 4.16666667%;
  }
  .col-xs-pull-1 {
    right: 4.16666667%;
  }
  .col-xs-offset-1 {
    margin-left: 4.16666667%;
  }
  .col-xs-order-1 {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
  }
  .col-xs-0 {
    display: none;
  }
  .col-push-0 {
    left: auto;
  }
  .col-pull-0 {
    right: auto;
  }
  .col-xs-push-0 {
    left: auto;
  }
  .col-xs-pull-0 {
    right: auto;
  }
  .col-xs-offset-0 {
    margin-left: 0;
  }
  .col-xs-order-0 {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
  }
  @media (min-width: 576px) {
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-13,
    .col-sm-14,
    .col-sm-15,
    .col-sm-16,
    .col-sm-17,
    .col-sm-18,
    .col-sm-19,
    .col-sm-20,
    .col-sm-21,
    .col-sm-22,
    .col-sm-23,
    .col-sm-24 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      float: left;
    }
    .col-sm-24 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
    }
    .col-sm-push-24 {
      left: 100%;
    }
    .col-sm-pull-24 {
      right: 100%;
    }
    .col-sm-offset-24 {
      margin-left: 100%;
    }
    .col-sm-order-24 {
      -webkit-box-ordinal-group: 25;
      -ms-flex-order: 24;
      order: 24;
    }
    .col-sm-23 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 95.83333333%;
    }
    .col-sm-push-23 {
      left: 95.83333333%;
    }
    .col-sm-pull-23 {
      right: 95.83333333%;
    }
    .col-sm-offset-23 {
      margin-left: 95.83333333%;
    }
    .col-sm-order-23 {
      -webkit-box-ordinal-group: 24;
      -ms-flex-order: 23;
      order: 23;
    }
    .col-sm-22 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 91.66666667%;
    }
    .col-sm-push-22 {
      left: 91.66666667%;
    }
    .col-sm-pull-22 {
      right: 91.66666667%;
    }
    .col-sm-offset-22 {
      margin-left: 91.66666667%;
    }
    .col-sm-order-22 {
      -webkit-box-ordinal-group: 23;
      -ms-flex-order: 22;
      order: 22;
    }
    .col-sm-21 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 87.5%;
    }
    .col-sm-push-21 {
      left: 87.5%;
    }
    .col-sm-pull-21 {
      right: 87.5%;
    }
    .col-sm-offset-21 {
      margin-left: 87.5%;
    }
    .col-sm-order-21 {
      -webkit-box-ordinal-group: 22;
      -ms-flex-order: 21;
      order: 21;
    }
    .col-sm-20 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 83.33333333%;
    }
    .col-sm-push-20 {
      left: 83.33333333%;
    }
    .col-sm-pull-20 {
      right: 83.33333333%;
    }
    .col-sm-offset-20 {
      margin-left: 83.33333333%;
    }
    .col-sm-order-20 {
      -webkit-box-ordinal-group: 21;
      -ms-flex-order: 20;
      order: 20;
    }
    .col-sm-19 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 79.16666667%;
    }
    .col-sm-push-19 {
      left: 79.16666667%;
    }
    .col-sm-pull-19 {
      right: 79.16666667%;
    }
    .col-sm-offset-19 {
      margin-left: 79.16666667%;
    }
    .col-sm-order-19 {
      -webkit-box-ordinal-group: 20;
      -ms-flex-order: 19;
      order: 19;
    }
    .col-sm-18 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 75%;
    }
    .col-sm-push-18 {
      left: 75%;
    }
    .col-sm-pull-18 {
      right: 75%;
    }
    .col-sm-offset-18 {
      margin-left: 75%;
    }
    .col-sm-order-18 {
      -webkit-box-ordinal-group: 19;
      -ms-flex-order: 18;
      order: 18;
    }
    .col-sm-17 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 70.83333333%;
    }
    .col-sm-push-17 {
      left: 70.83333333%;
    }
    .col-sm-pull-17 {
      right: 70.83333333%;
    }
    .col-sm-offset-17 {
      margin-left: 70.83333333%;
    }
    .col-sm-order-17 {
      -webkit-box-ordinal-group: 18;
      -ms-flex-order: 17;
      order: 17;
    }
    .col-sm-16 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 66.66666667%;
    }
    .col-sm-push-16 {
      left: 66.66666667%;
    }
    .col-sm-pull-16 {
      right: 66.66666667%;
    }
    .col-sm-offset-16 {
      margin-left: 66.66666667%;
    }
    .col-sm-order-16 {
      -webkit-box-ordinal-group: 17;
      -ms-flex-order: 16;
      order: 16;
    }
    .col-sm-15 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 62.5%;
    }
    .col-sm-push-15 {
      left: 62.5%;
    }
    .col-sm-pull-15 {
      right: 62.5%;
    }
    .col-sm-offset-15 {
      margin-left: 62.5%;
    }
    .col-sm-order-15 {
      -webkit-box-ordinal-group: 16;
      -ms-flex-order: 15;
      order: 15;
    }
    .col-sm-14 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 58.33333333%;
    }
    .col-sm-push-14 {
      left: 58.33333333%;
    }
    .col-sm-pull-14 {
      right: 58.33333333%;
    }
    .col-sm-offset-14 {
      margin-left: 58.33333333%;
    }
    .col-sm-order-14 {
      -webkit-box-ordinal-group: 15;
      -ms-flex-order: 14;
      order: 14;
    }
    .col-sm-13 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 54.16666667%;
    }
    .col-sm-push-13 {
      left: 54.16666667%;
    }
    .col-sm-pull-13 {
      right: 54.16666667%;
    }
    .col-sm-offset-13 {
      margin-left: 54.16666667%;
    }
    .col-sm-order-13 {
      -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
      order: 13;
    }
    .col-sm-12 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .col-sm-push-12 {
      left: 50%;
    }
    .col-sm-pull-12 {
      right: 50%;
    }
    .col-sm-offset-12 {
      margin-left: 50%;
    }
    .col-sm-order-12 {
      -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
      order: 12;
    }
    .col-sm-11 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 45.83333333%;
    }
    .col-sm-push-11 {
      left: 45.83333333%;
    }
    .col-sm-pull-11 {
      right: 45.83333333%;
    }
    .col-sm-offset-11 {
      margin-left: 45.83333333%;
    }
    .col-sm-order-11 {
      -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
      order: 11;
    }
    .col-sm-10 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 41.66666667%;
    }
    .col-sm-push-10 {
      left: 41.66666667%;
    }
    .col-sm-pull-10 {
      right: 41.66666667%;
    }
    .col-sm-offset-10 {
      margin-left: 41.66666667%;
    }
    .col-sm-order-10 {
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
    }
    .col-sm-9 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 37.5%;
    }
    .col-sm-push-9 {
      left: 37.5%;
    }
    .col-sm-pull-9 {
      right: 37.5%;
    }
    .col-sm-offset-9 {
      margin-left: 37.5%;
    }
    .col-sm-order-9 {
      -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
      order: 9;
    }
    .col-sm-8 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 33.33333333%;
    }
    .col-sm-push-8 {
      left: 33.33333333%;
    }
    .col-sm-pull-8 {
      right: 33.33333333%;
    }
    .col-sm-offset-8 {
      margin-left: 33.33333333%;
    }
    .col-sm-order-8 {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
    .col-sm-7 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 29.16666667%;
    }
    .col-sm-push-7 {
      left: 29.16666667%;
    }
    .col-sm-pull-7 {
      right: 29.16666667%;
    }
    .col-sm-offset-7 {
      margin-left: 29.16666667%;
    }
    .col-sm-order-7 {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
    .col-sm-6 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 25%;
    }
    .col-sm-push-6 {
      left: 25%;
    }
    .col-sm-pull-6 {
      right: 25%;
    }
    .col-sm-offset-6 {
      margin-left: 25%;
    }
    .col-sm-order-6 {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
    .col-sm-5 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 20.83333333%;
    }
    .col-sm-push-5 {
      left: 20.83333333%;
    }
    .col-sm-pull-5 {
      right: 20.83333333%;
    }
    .col-sm-offset-5 {
      margin-left: 20.83333333%;
    }
    .col-sm-order-5 {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
    .col-sm-4 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 16.66666667%;
    }
    .col-sm-push-4 {
      left: 16.66666667%;
    }
    .col-sm-pull-4 {
      right: 16.66666667%;
    }
    .col-sm-offset-4 {
      margin-left: 16.66666667%;
    }
    .col-sm-order-4 {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
    .col-sm-3 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 12.5%;
    }
    .col-sm-push-3 {
      left: 12.5%;
    }
    .col-sm-pull-3 {
      right: 12.5%;
    }
    .col-sm-offset-3 {
      margin-left: 12.5%;
    }
    .col-sm-order-3 {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .col-sm-2 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 8.33333333%;
    }
    .col-sm-push-2 {
      left: 8.33333333%;
    }
    .col-sm-pull-2 {
      right: 8.33333333%;
    }
    .col-sm-offset-2 {
      margin-left: 8.33333333%;
    }
    .col-sm-order-2 {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
    .col-sm-1 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 4.16666667%;
    }
    .col-sm-push-1 {
      left: 4.16666667%;
    }
    .col-sm-pull-1 {
      right: 4.16666667%;
    }
    .col-sm-offset-1 {
      margin-left: 4.16666667%;
    }
    .col-sm-order-1 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
    .col-sm-0 {
      display: none;
    }
    .col-push-0 {
      left: auto;
    }
    .col-pull-0 {
      right: auto;
    }
    .col-sm-push-0 {
      left: auto;
    }
    .col-sm-pull-0 {
      right: auto;
    }
    .col-sm-offset-0 {
      margin-left: 0;
    }
    .col-sm-order-0 {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
  @media (min-width: 768px) {
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-13,
    .col-md-14,
    .col-md-15,
    .col-md-16,
    .col-md-17,
    .col-md-18,
    .col-md-19,
    .col-md-20,
    .col-md-21,
    .col-md-22,
    .col-md-23,
    .col-md-24 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      float: left;
    }
    .col-md-24 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
    }
    .col-md-push-24 {
      left: 100%;
    }
    .col-md-pull-24 {
      right: 100%;
    }
    .col-md-offset-24 {
      margin-left: 100%;
    }
    .col-md-order-24 {
      -webkit-box-ordinal-group: 25;
      -ms-flex-order: 24;
      order: 24;
    }
    .col-md-23 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 95.83333333%;
    }
    .col-md-push-23 {
      left: 95.83333333%;
    }
    .col-md-pull-23 {
      right: 95.83333333%;
    }
    .col-md-offset-23 {
      margin-left: 95.83333333%;
    }
    .col-md-order-23 {
      -webkit-box-ordinal-group: 24;
      -ms-flex-order: 23;
      order: 23;
    }
    .col-md-22 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 91.66666667%;
    }
    .col-md-push-22 {
      left: 91.66666667%;
    }
    .col-md-pull-22 {
      right: 91.66666667%;
    }
    .col-md-offset-22 {
      margin-left: 91.66666667%;
    }
    .col-md-order-22 {
      -webkit-box-ordinal-group: 23;
      -ms-flex-order: 22;
      order: 22;
    }
    .col-md-21 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 87.5%;
    }
    .col-md-push-21 {
      left: 87.5%;
    }
    .col-md-pull-21 {
      right: 87.5%;
    }
    .col-md-offset-21 {
      margin-left: 87.5%;
    }
    .col-md-order-21 {
      -webkit-box-ordinal-group: 22;
      -ms-flex-order: 21;
      order: 21;
    }
    .col-md-20 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 83.33333333%;
    }
    .col-md-push-20 {
      left: 83.33333333%;
    }
    .col-md-pull-20 {
      right: 83.33333333%;
    }
    .col-md-offset-20 {
      margin-left: 83.33333333%;
    }
    .col-md-order-20 {
      -webkit-box-ordinal-group: 21;
      -ms-flex-order: 20;
      order: 20;
    }
    .col-md-19 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 79.16666667%;
    }
    .col-md-push-19 {
      left: 79.16666667%;
    }
    .col-md-pull-19 {
      right: 79.16666667%;
    }
    .col-md-offset-19 {
      margin-left: 79.16666667%;
    }
    .col-md-order-19 {
      -webkit-box-ordinal-group: 20;
      -ms-flex-order: 19;
      order: 19;
    }
    .col-md-18 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 75%;
    }
    .col-md-push-18 {
      left: 75%;
    }
    .col-md-pull-18 {
      right: 75%;
    }
    .col-md-offset-18 {
      margin-left: 75%;
    }
    .col-md-order-18 {
      -webkit-box-ordinal-group: 19;
      -ms-flex-order: 18;
      order: 18;
    }
    .col-md-17 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 70.83333333%;
    }
    .col-md-push-17 {
      left: 70.83333333%;
    }
    .col-md-pull-17 {
      right: 70.83333333%;
    }
    .col-md-offset-17 {
      margin-left: 70.83333333%;
    }
    .col-md-order-17 {
      -webkit-box-ordinal-group: 18;
      -ms-flex-order: 17;
      order: 17;
    }
    .col-md-16 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 66.66666667%;
    }
    .col-md-push-16 {
      left: 66.66666667%;
    }
    .col-md-pull-16 {
      right: 66.66666667%;
    }
    .col-md-offset-16 {
      margin-left: 66.66666667%;
    }
    .col-md-order-16 {
      -webkit-box-ordinal-group: 17;
      -ms-flex-order: 16;
      order: 16;
    }
    .col-md-15 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 62.5%;
    }
    .col-md-push-15 {
      left: 62.5%;
    }
    .col-md-pull-15 {
      right: 62.5%;
    }
    .col-md-offset-15 {
      margin-left: 62.5%;
    }
    .col-md-order-15 {
      -webkit-box-ordinal-group: 16;
      -ms-flex-order: 15;
      order: 15;
    }
    .col-md-14 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 58.33333333%;
    }
    .col-md-push-14 {
      left: 58.33333333%;
    }
    .col-md-pull-14 {
      right: 58.33333333%;
    }
    .col-md-offset-14 {
      margin-left: 58.33333333%;
    }
    .col-md-order-14 {
      -webkit-box-ordinal-group: 15;
      -ms-flex-order: 14;
      order: 14;
    }
    .col-md-13 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 54.16666667%;
    }
    .col-md-push-13 {
      left: 54.16666667%;
    }
    .col-md-pull-13 {
      right: 54.16666667%;
    }
    .col-md-offset-13 {
      margin-left: 54.16666667%;
    }
    .col-md-order-13 {
      -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
      order: 13;
    }
    .col-md-12 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .col-md-push-12 {
      left: 50%;
    }
    .col-md-pull-12 {
      right: 50%;
    }
    .col-md-offset-12 {
      margin-left: 50%;
    }
    .col-md-order-12 {
      -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
      order: 12;
    }
    .col-md-11 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 45.83333333%;
    }
    .col-md-push-11 {
      left: 45.83333333%;
    }
    .col-md-pull-11 {
      right: 45.83333333%;
    }
    .col-md-offset-11 {
      margin-left: 45.83333333%;
    }
    .col-md-order-11 {
      -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
      order: 11;
    }
    .col-md-10 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 41.66666667%;
    }
    .col-md-push-10 {
      left: 41.66666667%;
    }
    .col-md-pull-10 {
      right: 41.66666667%;
    }
    .col-md-offset-10 {
      margin-left: 41.66666667%;
    }
    .col-md-order-10 {
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
    }
    .col-md-9 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 37.5%;
    }
    .col-md-push-9 {
      left: 37.5%;
    }
    .col-md-pull-9 {
      right: 37.5%;
    }
    .col-md-offset-9 {
      margin-left: 37.5%;
    }
    .col-md-order-9 {
      -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
      order: 9;
    }
    .col-md-8 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 33.33333333%;
    }
    .col-md-push-8 {
      left: 33.33333333%;
    }
    .col-md-pull-8 {
      right: 33.33333333%;
    }
    .col-md-offset-8 {
      margin-left: 33.33333333%;
    }
    .col-md-order-8 {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
    .col-md-7 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 29.16666667%;
    }
    .col-md-push-7 {
      left: 29.16666667%;
    }
    .col-md-pull-7 {
      right: 29.16666667%;
    }
    .col-md-offset-7 {
      margin-left: 29.16666667%;
    }
    .col-md-order-7 {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
    .col-md-6 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 25%;
    }
    .col-md-push-6 {
      left: 25%;
    }
    .col-md-pull-6 {
      right: 25%;
    }
    .col-md-offset-6 {
      margin-left: 25%;
    }
    .col-md-order-6 {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
    .col-md-5 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 20.83333333%;
    }
    .col-md-push-5 {
      left: 20.83333333%;
    }
    .col-md-pull-5 {
      right: 20.83333333%;
    }
    .col-md-offset-5 {
      margin-left: 20.83333333%;
    }
    .col-md-order-5 {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
    .col-md-4 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 16.66666667%;
    }
    .col-md-push-4 {
      left: 16.66666667%;
    }
    .col-md-pull-4 {
      right: 16.66666667%;
    }
    .col-md-offset-4 {
      margin-left: 16.66666667%;
    }
    .col-md-order-4 {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
    .col-md-3 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 12.5%;
    }
    .col-md-push-3 {
      left: 12.5%;
    }
    .col-md-pull-3 {
      right: 12.5%;
    }
    .col-md-offset-3 {
      margin-left: 12.5%;
    }
    .col-md-order-3 {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .col-md-2 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 8.33333333%;
    }
    .col-md-push-2 {
      left: 8.33333333%;
    }
    .col-md-pull-2 {
      right: 8.33333333%;
    }
    .col-md-offset-2 {
      margin-left: 8.33333333%;
    }
    .col-md-order-2 {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
    .col-md-1 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 4.16666667%;
    }
    .col-md-push-1 {
      left: 4.16666667%;
    }
    .col-md-pull-1 {
      right: 4.16666667%;
    }
    .col-md-offset-1 {
      margin-left: 4.16666667%;
    }
    .col-md-order-1 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
    .col-md-0 {
      display: none;
    }
    .col-push-0 {
      left: auto;
    }
    .col-pull-0 {
      right: auto;
    }
    .col-md-push-0 {
      left: auto;
    }
    .col-md-pull-0 {
      right: auto;
    }
    .col-md-offset-0 {
      margin-left: 0;
    }
    .col-md-order-0 {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
  @media (min-width: 992px) {
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-13,
    .col-lg-14,
    .col-lg-15,
    .col-lg-16,
    .col-lg-17,
    .col-lg-18,
    .col-lg-19,
    .col-lg-20,
    .col-lg-21,
    .col-lg-22,
    .col-lg-23,
    .col-lg-24 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      float: left;
    }
    .col-lg-24 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
    }
    .col-lg-push-24 {
      left: 100%;
    }
    .col-lg-pull-24 {
      right: 100%;
    }
    .col-lg-offset-24 {
      margin-left: 100%;
    }
    .col-lg-order-24 {
      -webkit-box-ordinal-group: 25;
      -ms-flex-order: 24;
      order: 24;
    }
    .col-lg-23 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 95.83333333%;
    }
    .col-lg-push-23 {
      left: 95.83333333%;
    }
    .col-lg-pull-23 {
      right: 95.83333333%;
    }
    .col-lg-offset-23 {
      margin-left: 95.83333333%;
    }
    .col-lg-order-23 {
      -webkit-box-ordinal-group: 24;
      -ms-flex-order: 23;
      order: 23;
    }
    .col-lg-22 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 91.66666667%;
    }
    .col-lg-push-22 {
      left: 91.66666667%;
    }
    .col-lg-pull-22 {
      right: 91.66666667%;
    }
    .col-lg-offset-22 {
      margin-left: 91.66666667%;
    }
    .col-lg-order-22 {
      -webkit-box-ordinal-group: 23;
      -ms-flex-order: 22;
      order: 22;
    }
    .col-lg-21 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 87.5%;
    }
    .col-lg-push-21 {
      left: 87.5%;
    }
    .col-lg-pull-21 {
      right: 87.5%;
    }
    .col-lg-offset-21 {
      margin-left: 87.5%;
    }
    .col-lg-order-21 {
      -webkit-box-ordinal-group: 22;
      -ms-flex-order: 21;
      order: 21;
    }
    .col-lg-20 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 83.33333333%;
    }
    .col-lg-push-20 {
      left: 83.33333333%;
    }
    .col-lg-pull-20 {
      right: 83.33333333%;
    }
    .col-lg-offset-20 {
      margin-left: 83.33333333%;
    }
    .col-lg-order-20 {
      -webkit-box-ordinal-group: 21;
      -ms-flex-order: 20;
      order: 20;
    }
    .col-lg-19 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 79.16666667%;
    }
    .col-lg-push-19 {
      left: 79.16666667%;
    }
    .col-lg-pull-19 {
      right: 79.16666667%;
    }
    .col-lg-offset-19 {
      margin-left: 79.16666667%;
    }
    .col-lg-order-19 {
      -webkit-box-ordinal-group: 20;
      -ms-flex-order: 19;
      order: 19;
    }
    .col-lg-18 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 75%;
    }
    .col-lg-push-18 {
      left: 75%;
    }
    .col-lg-pull-18 {
      right: 75%;
    }
    .col-lg-offset-18 {
      margin-left: 75%;
    }
    .col-lg-order-18 {
      -webkit-box-ordinal-group: 19;
      -ms-flex-order: 18;
      order: 18;
    }
    .col-lg-17 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 70.83333333%;
    }
    .col-lg-push-17 {
      left: 70.83333333%;
    }
    .col-lg-pull-17 {
      right: 70.83333333%;
    }
    .col-lg-offset-17 {
      margin-left: 70.83333333%;
    }
    .col-lg-order-17 {
      -webkit-box-ordinal-group: 18;
      -ms-flex-order: 17;
      order: 17;
    }
    .col-lg-16 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 66.66666667%;
    }
    .col-lg-push-16 {
      left: 66.66666667%;
    }
    .col-lg-pull-16 {
      right: 66.66666667%;
    }
    .col-lg-offset-16 {
      margin-left: 66.66666667%;
    }
    .col-lg-order-16 {
      -webkit-box-ordinal-group: 17;
      -ms-flex-order: 16;
      order: 16;
    }
    .col-lg-15 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 62.5%;
    }
    .col-lg-push-15 {
      left: 62.5%;
    }
    .col-lg-pull-15 {
      right: 62.5%;
    }
    .col-lg-offset-15 {
      margin-left: 62.5%;
    }
    .col-lg-order-15 {
      -webkit-box-ordinal-group: 16;
      -ms-flex-order: 15;
      order: 15;
    }
    .col-lg-14 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 58.33333333%;
    }
    .col-lg-push-14 {
      left: 58.33333333%;
    }
    .col-lg-pull-14 {
      right: 58.33333333%;
    }
    .col-lg-offset-14 {
      margin-left: 58.33333333%;
    }
    .col-lg-order-14 {
      -webkit-box-ordinal-group: 15;
      -ms-flex-order: 14;
      order: 14;
    }
    .col-lg-13 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 54.16666667%;
    }
    .col-lg-push-13 {
      left: 54.16666667%;
    }
    .col-lg-pull-13 {
      right: 54.16666667%;
    }
    .col-lg-offset-13 {
      margin-left: 54.16666667%;
    }
    .col-lg-order-13 {
      -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
      order: 13;
    }
    .col-lg-12 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .col-lg-push-12 {
      left: 50%;
    }
    .col-lg-pull-12 {
      right: 50%;
    }
    .col-lg-offset-12 {
      margin-left: 50%;
    }
    .col-lg-order-12 {
      -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
      order: 12;
    }
    .col-lg-11 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 45.83333333%;
    }
    .col-lg-push-11 {
      left: 45.83333333%;
    }
    .col-lg-pull-11 {
      right: 45.83333333%;
    }
    .col-lg-offset-11 {
      margin-left: 45.83333333%;
    }
    .col-lg-order-11 {
      -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
      order: 11;
    }
    .col-lg-10 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 41.66666667%;
    }
    .col-lg-push-10 {
      left: 41.66666667%;
    }
    .col-lg-pull-10 {
      right: 41.66666667%;
    }
    .col-lg-offset-10 {
      margin-left: 41.66666667%;
    }
    .col-lg-order-10 {
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
    }
    .col-lg-9 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 37.5%;
    }
    .col-lg-push-9 {
      left: 37.5%;
    }
    .col-lg-pull-9 {
      right: 37.5%;
    }
    .col-lg-offset-9 {
      margin-left: 37.5%;
    }
    .col-lg-order-9 {
      -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
      order: 9;
    }
    .col-lg-8 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 33.33333333%;
    }
    .col-lg-push-8 {
      left: 33.33333333%;
    }
    .col-lg-pull-8 {
      right: 33.33333333%;
    }
    .col-lg-offset-8 {
      margin-left: 33.33333333%;
    }
    .col-lg-order-8 {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
    .col-lg-7 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 29.16666667%;
    }
    .col-lg-push-7 {
      left: 29.16666667%;
    }
    .col-lg-pull-7 {
      right: 29.16666667%;
    }
    .col-lg-offset-7 {
      margin-left: 29.16666667%;
    }
    .col-lg-order-7 {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
    .col-lg-6 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 25%;
    }
    .col-lg-push-6 {
      left: 25%;
    }
    .col-lg-pull-6 {
      right: 25%;
    }
    .col-lg-offset-6 {
      margin-left: 25%;
    }
    .col-lg-order-6 {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
    .col-lg-5 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 20.83333333%;
    }
    .col-lg-push-5 {
      left: 20.83333333%;
    }
    .col-lg-pull-5 {
      right: 20.83333333%;
    }
    .col-lg-offset-5 {
      margin-left: 20.83333333%;
    }
    .col-lg-order-5 {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
    .col-lg-4 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 16.66666667%;
    }
    .col-lg-push-4 {
      left: 16.66666667%;
    }
    .col-lg-pull-4 {
      right: 16.66666667%;
    }
    .col-lg-offset-4 {
      margin-left: 16.66666667%;
    }
    .col-lg-order-4 {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
    .col-lg-3 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 12.5%;
    }
    .col-lg-push-3 {
      left: 12.5%;
    }
    .col-lg-pull-3 {
      right: 12.5%;
    }
    .col-lg-offset-3 {
      margin-left: 12.5%;
    }
    .col-lg-order-3 {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .col-lg-2 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 8.33333333%;
    }
    .col-lg-push-2 {
      left: 8.33333333%;
    }
    .col-lg-pull-2 {
      right: 8.33333333%;
    }
    .col-lg-offset-2 {
      margin-left: 8.33333333%;
    }
    .col-lg-order-2 {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
    .col-lg-1 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 4.16666667%;
    }
    .col-lg-push-1 {
      left: 4.16666667%;
    }
    .col-lg-pull-1 {
      right: 4.16666667%;
    }
    .col-lg-offset-1 {
      margin-left: 4.16666667%;
    }
    .col-lg-order-1 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
    .col-lg-0 {
      display: none;
    }
    .col-push-0 {
      left: auto;
    }
    .col-pull-0 {
      right: auto;
    }
    .col-lg-push-0 {
      left: auto;
    }
    .col-lg-pull-0 {
      right: auto;
    }
    .col-lg-offset-0 {
      margin-left: 0;
    }
    .col-lg-order-0 {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
  @media (min-width: 1200px) {
    .col-xl-1,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-13,
    .col-xl-14,
    .col-xl-15,
    .col-xl-16,
    .col-xl-17,
    .col-xl-18,
    .col-xl-19,
    .col-xl-20,
    .col-xl-21,
    .col-xl-22,
    .col-xl-23,
    .col-xl-24 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      float: left;
    }
    .col-xl-24 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
    }
    .col-xl-push-24 {
      left: 100%;
    }
    .col-xl-pull-24 {
      right: 100%;
    }
    .col-xl-offset-24 {
      margin-left: 100%;
    }
    .col-xl-order-24 {
      -webkit-box-ordinal-group: 25;
      -ms-flex-order: 24;
      order: 24;
    }
    .col-xl-23 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 95.83333333%;
    }
    .col-xl-push-23 {
      left: 95.83333333%;
    }
    .col-xl-pull-23 {
      right: 95.83333333%;
    }
    .col-xl-offset-23 {
      margin-left: 95.83333333%;
    }
    .col-xl-order-23 {
      -webkit-box-ordinal-group: 24;
      -ms-flex-order: 23;
      order: 23;
    }
    .col-xl-22 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 91.66666667%;
    }
    .col-xl-push-22 {
      left: 91.66666667%;
    }
    .col-xl-pull-22 {
      right: 91.66666667%;
    }
    .col-xl-offset-22 {
      margin-left: 91.66666667%;
    }
    .col-xl-order-22 {
      -webkit-box-ordinal-group: 23;
      -ms-flex-order: 22;
      order: 22;
    }
    .col-xl-21 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 87.5%;
    }
    .col-xl-push-21 {
      left: 87.5%;
    }
    .col-xl-pull-21 {
      right: 87.5%;
    }
    .col-xl-offset-21 {
      margin-left: 87.5%;
    }
    .col-xl-order-21 {
      -webkit-box-ordinal-group: 22;
      -ms-flex-order: 21;
      order: 21;
    }
    .col-xl-20 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 83.33333333%;
    }
    .col-xl-push-20 {
      left: 83.33333333%;
    }
    .col-xl-pull-20 {
      right: 83.33333333%;
    }
    .col-xl-offset-20 {
      margin-left: 83.33333333%;
    }
    .col-xl-order-20 {
      -webkit-box-ordinal-group: 21;
      -ms-flex-order: 20;
      order: 20;
    }
    .col-xl-19 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 79.16666667%;
    }
    .col-xl-push-19 {
      left: 79.16666667%;
    }
    .col-xl-pull-19 {
      right: 79.16666667%;
    }
    .col-xl-offset-19 {
      margin-left: 79.16666667%;
    }
    .col-xl-order-19 {
      -webkit-box-ordinal-group: 20;
      -ms-flex-order: 19;
      order: 19;
    }
    .col-xl-18 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 75%;
    }
    .col-xl-push-18 {
      left: 75%;
    }
    .col-xl-pull-18 {
      right: 75%;
    }
    .col-xl-offset-18 {
      margin-left: 75%;
    }
    .col-xl-order-18 {
      -webkit-box-ordinal-group: 19;
      -ms-flex-order: 18;
      order: 18;
    }
    .col-xl-17 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 70.83333333%;
    }
    .col-xl-push-17 {
      left: 70.83333333%;
    }
    .col-xl-pull-17 {
      right: 70.83333333%;
    }
    .col-xl-offset-17 {
      margin-left: 70.83333333%;
    }
    .col-xl-order-17 {
      -webkit-box-ordinal-group: 18;
      -ms-flex-order: 17;
      order: 17;
    }
    .col-xl-16 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 66.66666667%;
    }
    .col-xl-push-16 {
      left: 66.66666667%;
    }
    .col-xl-pull-16 {
      right: 66.66666667%;
    }
    .col-xl-offset-16 {
      margin-left: 66.66666667%;
    }
    .col-xl-order-16 {
      -webkit-box-ordinal-group: 17;
      -ms-flex-order: 16;
      order: 16;
    }
    .col-xl-15 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 62.5%;
    }
    .col-xl-push-15 {
      left: 62.5%;
    }
    .col-xl-pull-15 {
      right: 62.5%;
    }
    .col-xl-offset-15 {
      margin-left: 62.5%;
    }
    .col-xl-order-15 {
      -webkit-box-ordinal-group: 16;
      -ms-flex-order: 15;
      order: 15;
    }
    .col-xl-14 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 58.33333333%;
    }
    .col-xl-push-14 {
      left: 58.33333333%;
    }
    .col-xl-pull-14 {
      right: 58.33333333%;
    }
    .col-xl-offset-14 {
      margin-left: 58.33333333%;
    }
    .col-xl-order-14 {
      -webkit-box-ordinal-group: 15;
      -ms-flex-order: 14;
      order: 14;
    }
    .col-xl-13 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 54.16666667%;
    }
    .col-xl-push-13 {
      left: 54.16666667%;
    }
    .col-xl-pull-13 {
      right: 54.16666667%;
    }
    .col-xl-offset-13 {
      margin-left: 54.16666667%;
    }
    .col-xl-order-13 {
      -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
      order: 13;
    }
    .col-xl-12 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .col-xl-push-12 {
      left: 50%;
    }
    .col-xl-pull-12 {
      right: 50%;
    }
    .col-xl-offset-12 {
      margin-left: 50%;
    }
    .col-xl-order-12 {
      -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
      order: 12;
    }
    .col-xl-11 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 45.83333333%;
    }
    .col-xl-push-11 {
      left: 45.83333333%;
    }
    .col-xl-pull-11 {
      right: 45.83333333%;
    }
    .col-xl-offset-11 {
      margin-left: 45.83333333%;
    }
    .col-xl-order-11 {
      -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
      order: 11;
    }
    .col-xl-10 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 41.66666667%;
    }
    .col-xl-push-10 {
      left: 41.66666667%;
    }
    .col-xl-pull-10 {
      right: 41.66666667%;
    }
    .col-xl-offset-10 {
      margin-left: 41.66666667%;
    }
    .col-xl-order-10 {
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
    }
    .col-xl-9 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 37.5%;
    }
    .col-xl-push-9 {
      left: 37.5%;
    }
    .col-xl-pull-9 {
      right: 37.5%;
    }
    .col-xl-offset-9 {
      margin-left: 37.5%;
    }
    .col-xl-order-9 {
      -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
      order: 9;
    }
    .col-xl-8 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 33.33333333%;
    }
    .col-xl-push-8 {
      left: 33.33333333%;
    }
    .col-xl-pull-8 {
      right: 33.33333333%;
    }
    .col-xl-offset-8 {
      margin-left: 33.33333333%;
    }
    .col-xl-order-8 {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
    .col-xl-7 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 29.16666667%;
    }
    .col-xl-push-7 {
      left: 29.16666667%;
    }
    .col-xl-pull-7 {
      right: 29.16666667%;
    }
    .col-xl-offset-7 {
      margin-left: 29.16666667%;
    }
    .col-xl-order-7 {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
    .col-xl-6 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 25%;
    }
    .col-xl-push-6 {
      left: 25%;
    }
    .col-xl-pull-6 {
      right: 25%;
    }
    .col-xl-offset-6 {
      margin-left: 25%;
    }
    .col-xl-order-6 {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
    .col-xl-5 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 20.83333333%;
    }
    .col-xl-push-5 {
      left: 20.83333333%;
    }
    .col-xl-pull-5 {
      right: 20.83333333%;
    }
    .col-xl-offset-5 {
      margin-left: 20.83333333%;
    }
    .col-xl-order-5 {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
    .col-xl-4 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 16.66666667%;
    }
    .col-xl-push-4 {
      left: 16.66666667%;
    }
    .col-xl-pull-4 {
      right: 16.66666667%;
    }
    .col-xl-offset-4 {
      margin-left: 16.66666667%;
    }
    .col-xl-order-4 {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
    .col-xl-3 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 12.5%;
    }
    .col-xl-push-3 {
      left: 12.5%;
    }
    .col-xl-pull-3 {
      right: 12.5%;
    }
    .col-xl-offset-3 {
      margin-left: 12.5%;
    }
    .col-xl-order-3 {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .col-xl-2 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 8.33333333%;
    }
    .col-xl-push-2 {
      left: 8.33333333%;
    }
    .col-xl-pull-2 {
      right: 8.33333333%;
    }
    .col-xl-offset-2 {
      margin-left: 8.33333333%;
    }
    .col-xl-order-2 {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
    .col-xl-1 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 4.16666667%;
    }
    .col-xl-push-1 {
      left: 4.16666667%;
    }
    .col-xl-pull-1 {
      right: 4.16666667%;
    }
    .col-xl-offset-1 {
      margin-left: 4.16666667%;
    }
    .col-xl-order-1 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
    .col-xl-0 {
      display: none;
    }
    .col-push-0 {
      left: auto;
    }
    .col-pull-0 {
      right: auto;
    }
    .col-xl-push-0 {
      left: auto;
    }
    .col-xl-pull-0 {
      right: auto;
    }
    .col-xl-offset-0 {
      margin-left: 0;
    }
    .col-xl-order-0 {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
  @media (min-width: 1600px) {
    .col-xxl-1,
    .col-xxl-2,
    .col-xxl-3,
    .col-xxl-4,
    .col-xxl-5,
    .col-xxl-6,
    .col-xxl-7,
    .col-xxl-8,
    .col-xxl-9,
    .col-xxl-10,
    .col-xxl-11,
    .col-xxl-12,
    .col-xxl-13,
    .col-xxl-14,
    .col-xxl-15,
    .col-xxl-16,
    .col-xxl-17,
    .col-xxl-18,
    .col-xxl-19,
    .col-xxl-20,
    .col-xxl-21,
    .col-xxl-22,
    .col-xxl-23,
    .col-xxl-24 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      float: left;
    }
    .col-xxl-24 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
    }
    .col-xxl-push-24 {
      left: 100%;
    }
    .col-xxl-pull-24 {
      right: 100%;
    }
    .col-xxl-offset-24 {
      margin-left: 100%;
    }
    .col-xxl-order-24 {
      -webkit-box-ordinal-group: 25;
      -ms-flex-order: 24;
      order: 24;
    }
    .col-xxl-23 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 95.83333333%;
    }
    .col-xxl-push-23 {
      left: 95.83333333%;
    }
    .col-xxl-pull-23 {
      right: 95.83333333%;
    }
    .col-xxl-offset-23 {
      margin-left: 95.83333333%;
    }
    .col-xxl-order-23 {
      -webkit-box-ordinal-group: 24;
      -ms-flex-order: 23;
      order: 23;
    }
    .col-xxl-22 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 91.66666667%;
    }
    .col-xxl-push-22 {
      left: 91.66666667%;
    }
    .col-xxl-pull-22 {
      right: 91.66666667%;
    }
    .col-xxl-offset-22 {
      margin-left: 91.66666667%;
    }
    .col-xxl-order-22 {
      -webkit-box-ordinal-group: 23;
      -ms-flex-order: 22;
      order: 22;
    }
    .col-xxl-21 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 87.5%;
    }
    .col-xxl-push-21 {
      left: 87.5%;
    }
    .col-xxl-pull-21 {
      right: 87.5%;
    }
    .col-xxl-offset-21 {
      margin-left: 87.5%;
    }
    .col-xxl-order-21 {
      -webkit-box-ordinal-group: 22;
      -ms-flex-order: 21;
      order: 21;
    }
    .col-xxl-20 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 83.33333333%;
    }
    .col-xxl-push-20 {
      left: 83.33333333%;
    }
    .col-xxl-pull-20 {
      right: 83.33333333%;
    }
    .col-xxl-offset-20 {
      margin-left: 83.33333333%;
    }
    .col-xxl-order-20 {
      -webkit-box-ordinal-group: 21;
      -ms-flex-order: 20;
      order: 20;
    }
    .col-xxl-19 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 79.16666667%;
    }
    .col-xxl-push-19 {
      left: 79.16666667%;
    }
    .col-xxl-pull-19 {
      right: 79.16666667%;
    }
    .col-xxl-offset-19 {
      margin-left: 79.16666667%;
    }
    .col-xxl-order-19 {
      -webkit-box-ordinal-group: 20;
      -ms-flex-order: 19;
      order: 19;
    }
    .col-xxl-18 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 75%;
    }
    .col-xxl-push-18 {
      left: 75%;
    }
    .col-xxl-pull-18 {
      right: 75%;
    }
    .col-xxl-offset-18 {
      margin-left: 75%;
    }
    .col-xxl-order-18 {
      -webkit-box-ordinal-group: 19;
      -ms-flex-order: 18;
      order: 18;
    }
    .col-xxl-17 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 70.83333333%;
    }
    .col-xxl-push-17 {
      left: 70.83333333%;
    }
    .col-xxl-pull-17 {
      right: 70.83333333%;
    }
    .col-xxl-offset-17 {
      margin-left: 70.83333333%;
    }
    .col-xxl-order-17 {
      -webkit-box-ordinal-group: 18;
      -ms-flex-order: 17;
      order: 17;
    }
    .col-xxl-16 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 66.66666667%;
    }
    .col-xxl-push-16 {
      left: 66.66666667%;
    }
    .col-xxl-pull-16 {
      right: 66.66666667%;
    }
    .col-xxl-offset-16 {
      margin-left: 66.66666667%;
    }
    .col-xxl-order-16 {
      -webkit-box-ordinal-group: 17;
      -ms-flex-order: 16;
      order: 16;
    }
    .col-xxl-15 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 62.5%;
    }
    .col-xxl-push-15 {
      left: 62.5%;
    }
    .col-xxl-pull-15 {
      right: 62.5%;
    }
    .col-xxl-offset-15 {
      margin-left: 62.5%;
    }
    .col-xxl-order-15 {
      -webkit-box-ordinal-group: 16;
      -ms-flex-order: 15;
      order: 15;
    }
    .col-xxl-14 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 58.33333333%;
    }
    .col-xxl-push-14 {
      left: 58.33333333%;
    }
    .col-xxl-pull-14 {
      right: 58.33333333%;
    }
    .col-xxl-offset-14 {
      margin-left: 58.33333333%;
    }
    .col-xxl-order-14 {
      -webkit-box-ordinal-group: 15;
      -ms-flex-order: 14;
      order: 14;
    }
    .col-xxl-13 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 54.16666667%;
    }
    .col-xxl-push-13 {
      left: 54.16666667%;
    }
    .col-xxl-pull-13 {
      right: 54.16666667%;
    }
    .col-xxl-offset-13 {
      margin-left: 54.16666667%;
    }
    .col-xxl-order-13 {
      -webkit-box-ordinal-group: 14;
      -ms-flex-order: 13;
      order: 13;
    }
    .col-xxl-12 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
    }
    .col-xxl-push-12 {
      left: 50%;
    }
    .col-xxl-pull-12 {
      right: 50%;
    }
    .col-xxl-offset-12 {
      margin-left: 50%;
    }
    .col-xxl-order-12 {
      -webkit-box-ordinal-group: 13;
      -ms-flex-order: 12;
      order: 12;
    }
    .col-xxl-11 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 45.83333333%;
    }
    .col-xxl-push-11 {
      left: 45.83333333%;
    }
    .col-xxl-pull-11 {
      right: 45.83333333%;
    }
    .col-xxl-offset-11 {
      margin-left: 45.83333333%;
    }
    .col-xxl-order-11 {
      -webkit-box-ordinal-group: 12;
      -ms-flex-order: 11;
      order: 11;
    }
    .col-xxl-10 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 41.66666667%;
    }
    .col-xxl-push-10 {
      left: 41.66666667%;
    }
    .col-xxl-pull-10 {
      right: 41.66666667%;
    }
    .col-xxl-offset-10 {
      margin-left: 41.66666667%;
    }
    .col-xxl-order-10 {
      -webkit-box-ordinal-group: 11;
      -ms-flex-order: 10;
      order: 10;
    }
    .col-xxl-9 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 37.5%;
    }
    .col-xxl-push-9 {
      left: 37.5%;
    }
    .col-xxl-pull-9 {
      right: 37.5%;
    }
    .col-xxl-offset-9 {
      margin-left: 37.5%;
    }
    .col-xxl-order-9 {
      -webkit-box-ordinal-group: 10;
      -ms-flex-order: 9;
      order: 9;
    }
    .col-xxl-8 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 33.33333333%;
    }
    .col-xxl-push-8 {
      left: 33.33333333%;
    }
    .col-xxl-pull-8 {
      right: 33.33333333%;
    }
    .col-xxl-offset-8 {
      margin-left: 33.33333333%;
    }
    .col-xxl-order-8 {
      -webkit-box-ordinal-group: 9;
      -ms-flex-order: 8;
      order: 8;
    }
    .col-xxl-7 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 29.16666667%;
    }
    .col-xxl-push-7 {
      left: 29.16666667%;
    }
    .col-xxl-pull-7 {
      right: 29.16666667%;
    }
    .col-xxl-offset-7 {
      margin-left: 29.16666667%;
    }
    .col-xxl-order-7 {
      -webkit-box-ordinal-group: 8;
      -ms-flex-order: 7;
      order: 7;
    }
    .col-xxl-6 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 25%;
    }
    .col-xxl-push-6 {
      left: 25%;
    }
    .col-xxl-pull-6 {
      right: 25%;
    }
    .col-xxl-offset-6 {
      margin-left: 25%;
    }
    .col-xxl-order-6 {
      -webkit-box-ordinal-group: 7;
      -ms-flex-order: 6;
      order: 6;
    }
    .col-xxl-5 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 20.83333333%;
    }
    .col-xxl-push-5 {
      left: 20.83333333%;
    }
    .col-xxl-pull-5 {
      right: 20.83333333%;
    }
    .col-xxl-offset-5 {
      margin-left: 20.83333333%;
    }
    .col-xxl-order-5 {
      -webkit-box-ordinal-group: 6;
      -ms-flex-order: 5;
      order: 5;
    }
    .col-xxl-4 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 16.66666667%;
    }
    .col-xxl-push-4 {
      left: 16.66666667%;
    }
    .col-xxl-pull-4 {
      right: 16.66666667%;
    }
    .col-xxl-offset-4 {
      margin-left: 16.66666667%;
    }
    .col-xxl-order-4 {
      -webkit-box-ordinal-group: 5;
      -ms-flex-order: 4;
      order: 4;
    }
    .col-xxl-3 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 12.5%;
    }
    .col-xxl-push-3 {
      left: 12.5%;
    }
    .col-xxl-pull-3 {
      right: 12.5%;
    }
    .col-xxl-offset-3 {
      margin-left: 12.5%;
    }
    .col-xxl-order-3 {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
    }
    .col-xxl-2 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 8.33333333%;
    }
    .col-xxl-push-2 {
      left: 8.33333333%;
    }
    .col-xxl-pull-2 {
      right: 8.33333333%;
    }
    .col-xxl-offset-2 {
      margin-left: 8.33333333%;
    }
    .col-xxl-order-2 {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
    }
    .col-xxl-1 {
      display: block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 4.16666667%;
    }
    .col-xxl-push-1 {
      left: 4.16666667%;
    }
    .col-xxl-pull-1 {
      right: 4.16666667%;
    }
    .col-xxl-offset-1 {
      margin-left: 4.16666667%;
    }
    .col-xxl-order-1 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
    .col-xxl-0 {
      display: none;
    }
    .col-push-0 {
      left: auto;
    }
    .col-pull-0 {
      right: auto;
    }
    .col-xxl-push-0 {
      left: auto;
    }
    .col-xxl-pull-0 {
      right: auto;
    }
    .col-xxl-offset-0 {
      margin-left: 0;
    }
    .col-xxl-order-0 {
      -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
      order: 0;
    }
  }
</style>

<div
  class="col"
  class:col-xs-0={xs === 0 || (xs && xs.span === 0)}
  class:col-xs-1={xs === 1 || (xs && xs.span === 1)}
  class:col-xs-2={xs === 2 || (xs && xs.span === 2)}
  class:col-xs-3={xs === 3 || (xs && xs.span === 3)}
  class:col-xs-4={xs === 4 || (xs && xs.span === 4)}
  class:col-xs-5={xs === 5 || (xs && xs.span === 5)}
  class:col-xs-6={xs === 6 || (xs && xs.span === 6)}
  class:col-xs-7={xs === 7 || (xs && xs.span === 7)}
  class:col-xs-8={xs === 8 || (xs && xs.span === 8)}
  class:col-xs-9={xs === 9 || (xs && xs.span === 9)}
  class:col-xs-10={xs === 10 || (xs && xs.span === 10)}
  class:col-xs-11={xs === 11 || (xs && xs.span === 11)}
  class:col-xs-12={xs === 12 || (xs && xs.span === 12)}
  class:col-xs-13={xs === 13 || (xs && xs.span === 13)}
  class:col-xs-14={xs === 14 || (xs && xs.span === 14)}
  class:col-xs-15={xs === 15 || (xs && xs.span === 15)}
  class:col-xs-16={xs === 16 || (xs && xs.span === 16)}
  class:col-xs-17={xs === 17 || (xs && xs.span === 17)}
  class:col-xs-18={xs === 18 || (xs && xs.span === 18)}
  class:col-xs-19={xs === 19 || (xs && xs.span === 19)}
  class:col-xs-20={xs === 20 || (xs && xs.span === 20)}
  class:col-xs-21={xs === 21 || (xs && xs.span === 21)}
  class:col-xs-22={xs === 22 || (xs && xs.span === 22)}
  class:col-xs-23={xs === 23 || (xs && xs.span === 23)}
  class:col-xs-24={xs === 24 || (xs && xs.span === 24)}
  class:col-sm-0={sm === 0 || (sm && sm.span === 0)}
  class:col-sm-1={sm === 1 || (sm && sm.span === 1)}
  class:col-sm-2={sm === 2 || (sm && sm.span === 2)}
  class:col-sm-3={sm === 3 || (sm && sm.span === 3)}
  class:col-sm-4={sm === 4 || (sm && sm.span === 4)}
  class:col-sm-5={sm === 5 || (sm && sm.span === 5)}
  class:col-sm-6={sm === 6 || (sm && sm.span === 6)}
  class:col-sm-7={sm === 7 || (sm && sm.span === 7)}
  class:col-sm-8={sm === 8 || (sm && sm.span === 8)}
  class:col-sm-9={sm === 9 || (sm && sm.span === 9)}
  class:col-sm-10={sm === 10 || (sm && sm.span === 10)}
  class:col-sm-11={sm === 11 || (sm && sm.span === 11)}
  class:col-sm-12={sm === 12 || (sm && sm.span === 12)}
  class:col-sm-13={sm === 13 || (sm && sm.span === 13)}
  class:col-sm-14={sm === 14 || (sm && sm.span === 14)}
  class:col-sm-15={sm === 15 || (sm && sm.span === 15)}
  class:col-sm-16={sm === 16 || (sm && sm.span === 16)}
  class:col-sm-17={sm === 17 || (sm && sm.span === 17)}
  class:col-sm-18={sm === 18 || (sm && sm.span === 18)}
  class:col-sm-19={sm === 19 || (sm && sm.span === 18)}
  class:col-sm-20={sm === 20 || (sm && sm.span === 20)}
  class:col-sm-21={sm === 21 || (sm && sm.span === 21)}
  class:col-sm-22={sm === 22 || (sm && sm.span === 22)}
  class:col-sm-23={sm === 23 || (sm && sm.span === 23)}
  class:col-sm-24={sm === 24 || (sm && sm.span === 24)}
  class:col-md-0={md === 0 || (md && md.span === 0)}
  class:col-md-1={md === 1 || (md && md.span === 1)}
  class:col-md-2={md === 2 || (md && md.span === 2)}
  class:col-md-3={md === 3 || (md && md.span === 3)}
  class:col-md-4={md === 4 || (md && md.span === 4)}
  class:col-md-5={md === 5 || (md && md.span === 5)}
  class:col-md-6={md === 6 || (md && md.span === 6)}
  class:col-md-7={md === 7 || (md && md.span === 7)}
  class:col-md-8={md === 8 || (md && md.span === 8)}
  class:col-md-9={md === 9 || (md && md.span === 9)}
  class:col-md-10={md === 10 || (md && md.span === 10)}
  class:col-md-11={md === 11 || (md && md.span === 11)}
  class:col-md-12={md === 12 || (md && md.span === 12)}
  class:col-md-13={md === 13 || (md && md.span === 13)}
  class:col-md-14={md === 14 || (md && md.span === 14)}
  class:col-md-15={md === 15 || (md && md.span === 15)}
  class:col-md-16={md === 16 || (md && md.span === 16)}
  class:col-md-17={md === 17 || (md && md.span === 17)}
  class:col-md-18={md === 18 || (md && md.span === 18)}
  class:col-md-19={md === 19 || (md && md.span === 19)}
  class:col-md-20={md === 20 || (md && md.span === 20)}
  class:col-md-21={md === 21 || (md && md.span === 21)}
  class:col-md-22={md === 22 || (md && md.span === 22)}
  class:col-md-23={md === 23 || (md && md.span === 23)}
  class:col-md-24={md === 24 || (md && md.span === 24)}
  class:col-lg-0={lg === 0 || (lg && lg.span === 0)}
  class:col-lg-1={lg === 1 || (lg && lg.span === 1)}
  class:col-lg-2={lg === 2 || (lg && lg.span === 2)}
  class:col-lg-3={lg === 3 || (lg && lg.span === 3)}
  class:col-lg-4={lg === 4 || (lg && lg.span === 4)}
  class:col-lg-5={lg === 5 || (lg && lg.span === 5)}
  class:col-lg-6={lg === 6 || (lg && lg.span === 6)}
  class:col-lg-7={lg === 7 || (lg && lg.span === 7)}
  class:col-lg-8={lg === 8 || (lg && lg.span === 8)}
  class:col-lg-9={lg === 9 || (lg && lg.span === 9)}
  class:col-lg-10={lg === 10 || (lg && lg.span === 10)}
  class:col-lg-11={lg === 11 || (lg && lg.span === 11)}
  class:col-lg-12={lg === 12 || (lg && lg.span === 12)}
  class:col-lg-13={lg === 13 || (lg && lg.span === 13)}
  class:col-lg-14={lg === 14 || (lg && lg.span === 14)}
  class:col-lg-15={lg === 15 || (lg && lg.span === 15)}
  class:col-lg-16={lg === 16 || (lg && lg.span === 16)}
  class:col-lg-17={lg === 17 || (lg && lg.span === 17)}
  class:col-lg-18={lg === 18 || (lg && lg.span === 18)}
  class:col-lg-19={lg === 19 || (lg && lg.span === 19)}
  class:col-lg-20={lg === 20 || (lg && lg.span === 20)}
  class:col-lg-21={lg === 21 || (lg && lg.span === 21)}
  class:col-lg-22={lg === 22 || (lg && lg.span === 22)}
  class:col-lg-23={lg === 23 || (lg && lg.span === 23)}
  class:col-lg-24={lg === 24 || (lg && lg.span === 24)}
  class:col-xl-0={xl === 0 || (xl && xl.span === 0)}
  class:col-xl-1={xl === 1 || (xl && xl.span === 1)}
  class:col-xl-2={xl === 2 || (xl && xl.span === 2)}
  class:col-xl-3={xl === 3 || (xl && xl.span === 3)}
  class:col-xl-4={xl === 4 || (xl && xl.span === 4)}
  class:col-xl-5={xl === 5 || (xl && xl.span === 5)}
  class:col-xl-6={xl === 6 || (xl && xl.span === 6)}
  class:col-xl-7={xl === 7 || (xl && xl.span === 7)}
  class:col-xl-8={xl === 8 || (xl && xl.span === 8)}
  class:col-xl-9={xl === 9 || (xl && xl.span === 9)}
  class:col-xl-10={xl === 10 || (xl && xl.span === 10)}
  class:col-xl-11={xl === 11 || (xl && xl.span === 11)}
  class:col-xl-12={xl === 12 || (xl && xl.span === 12)}
  class:col-xl-13={xl === 13 || (xl && xl.span === 13)}
  class:col-xl-14={xl === 14 || (xl && xl.span === 14)}
  class:col-xl-15={xl === 15 || (xl && xl.span === 15)}
  class:col-xl-16={xl === 16 || (xl && xl.span === 16)}
  class:col-xl-17={xl === 17 || (xl && xl.span === 17)}
  class:col-xl-18={xl === 18 || (xl && xl.span === 18)}
  class:col-xl-19={xl === 19 || (xl && xl.span === 19)}
  class:col-xl-20={xl === 20 || (xl && xl.span === 20)}
  class:col-xl-21={xl === 21 || (xl && xl.span === 21)}
  class:col-xl-22={xl === 22 || (xl && xl.span === 22)}
  class:col-xl-23={xl === 23 || (xl && xl.span === 23)}
  class:col-xl-24={xl === 24 || (xl && xl.span === 24)}
  class:col-xxl-0={xxl === 0 || (xxl && xxl.span === 0)}
  class:col-xxl-1={xxl === 1 || (xxl && xxl.span === 1)}
  class:col-xxl-2={xxl === 2 || (xxl && xxl.span === 2)}
  class:col-xxl-3={xxl === 3 || (xxl && xxl.span === 3)}
  class:col-xxl-4={xxl === 4 || (xxl && xxl.span === 4)}
  class:col-xxl-5={xxl === 5 || (xxl && xxl.span === 5)}
  class:col-xxl-6={xxl === 6 || (xxl && xxl.span === 6)}
  class:col-xxl-7={xxl === 7 || (xxl && xxl.span === 7)}
  class:col-xxl-8={xxl === 8 || (xxl && xxl.span === 8)}
  class:col-xxl-9={xxl === 9 || (xxl && xxl.span === 9)}
  class:col-xxl-10={xxl === 10 || (xxl && xxl.span === 10)}
  class:col-xxl-11={xxl === 11 || (xxl && xxl.span === 11)}
  class:col-xxl-12={xxl === 12 || (xxl && xxl.span === 12)}
  class:col-xxl-13={xxl === 13 || (xxl && xxl.span === 13)}
  class:col-xxl-14={xxl === 14 || (xxl && xxl.span === 14)}
  class:col-xxl-15={xxl === 15 || (xxl && xxl.span === 15)}
  class:col-xxl-16={xxl === 16 || (xxl && xxl.span === 16)}
  class:col-xxl-17={xxl === 17 || (xxl && xxl.span === 17)}
  class:col-xxl-18={xxl === 18 || (xxl && xxl.span === 18)}
  class:col-xxl-19={xxl === 19 || (xxl && xxl.span === 19)}
  class:col-xxl-20={xxl === 20 || (xxl && xxl.span === 20)}
  class:col-xxl-21={xxl === 21 || (xxl && xxl.span === 21)}
  class:col-xxl-22={xxl === 22 || (xxl && xxl.span === 22)}
  class:col-xxl-23={xxl === 23 || (xxl && xxl.span === 23)}
  class:col-xxl-24={xxl === 24 || (xxl && xxl.span === 24)}
  class:col-0={span === 0}
  class:col-1={span === 1}
  class:col-2={span === 2}
  class:col-3={span === 3}
  class:col-4={span === 4}
  class:col-5={span === 5}
  class:col-6={span === 6}
  class:col-7={span === 7}
  class:col-8={span === 8}
  class:col-9={span === 9}
  class:col-10={span === 10}
  class:col-11={span === 11}
  class:col-12={span === 12}
  class:col-13={span === 13}
  class:col-14={span === 14}
  class:col-15={span === 15}
  class:col-16={span === 16}
  class:col-17={span === 17}
  class:col-18={span === 18}
  class:col-19={span === 19}
  class:col-20={span === 20}
  class:col-21={span === 21}
  class:col-22={span === 22}
  class:col-23={span === 23}
  class:col-24={span === 24}
  class:col-push-0={push === 0}
  class:col-push-1={push === 1}
  class:col-push-2={push === 2}
  class:col-push-3={push === 3}
  class:col-push-4={push === 4}
  class:col-push-5={push === 5}
  class:col-push-6={push === 6}
  class:col-push-7={push === 7}
  class:col-push-8={push === 8}
  class:col-push-9={push === 9}
  class:col-push-10={push === 10}
  class:col-push-11={push === 11}
  class:col-push-12={push === 12}
  class:col-push-13={push === 13}
  class:col-push-14={push === 14}
  class:col-push-15={push === 15}
  class:col-push-16={push === 16}
  class:col-push-17={push === 17}
  class:col-push-18={push === 18}
  class:col-push-19={push === 19}
  class:col-push-20={push === 20}
  class:col-push-21={push === 21}
  class:col-push-22={push === 22}
  class:col-push-23={push === 23}
  class:col-push-24={push === 24}
  class:col-xs-push-0={xs && xs.push === 0}
  class:col-xs-push-1={xs && xs.push === 1}
  class:col-xs-push-2={xs && xs.push === 2}
  class:col-xs-push-3={xs && xs.push === 3}
  class:col-xs-push-4={xs && xs.push === 4}
  class:col-xs-push-5={xs && xs.push === 5}
  class:col-xs-push-6={xs && xs.push === 6}
  class:col-xs-push-7={xs && xs.push === 7}
  class:col-xs-push-8={xs && xs.push === 8}
  class:col-xs-push-9={xs && xs.push === 9}
  class:col-xs-push-10={xs && xs.push === 10}
  class:col-xs-push-11={xs && xs.push === 11}
  class:col-xs-push-12={xs && xs.push === 12}
  class:col-xs-push-13={xs && xs.push === 13}
  class:col-xs-push-14={xs && xs.push === 14}
  class:col-xs-push-15={xs && xs.push === 15}
  class:col-xs-push-16={xs && xs.push === 16}
  class:col-xs-push-17={xs && xs.push === 17}
  class:col-xs-push-18={xs && xs.push === 18}
  class:col-xs-push-19={xs && xs.push === 19}
  class:col-xs-push-20={xs && xs.push === 20}
  class:col-xs-push-21={xs && xs.push === 21}
  class:col-xs-push-22={xs && xs.push === 22}
  class:col-xs-push-23={xs && xs.push === 23}
  class:col-xs-push-24={xs && xs.push === 24}
  class:col-sm-push-0={sm && sm.push === 0}
  class:col-sm-push-1={sm && sm.push === 1}
  class:col-sm-push-2={sm && sm.push === 2}
  class:col-sm-push-3={sm && sm.push === 3}
  class:col-sm-push-4={sm && sm.push === 4}
  class:col-sm-push-5={sm && sm.push === 5}
  class:col-sm-push-6={sm && sm.push === 6}
  class:col-sm-push-7={sm && sm.push === 7}
  class:col-sm-push-8={sm && sm.push === 8}
  class:col-sm-push-9={sm && sm.push === 9}
  class:col-sm-push-10={sm && sm.push === 10}
  class:col-sm-push-11={sm && sm.push === 11}
  class:col-sm-push-12={sm && sm.push === 12}
  class:col-sm-push-13={sm && sm.push === 13}
  class:col-sm-push-14={sm && sm.push === 14}
  class:col-sm-push-15={sm && sm.push === 15}
  class:col-sm-push-16={sm && sm.push === 16}
  class:col-sm-push-17={sm && sm.push === 17}
  class:col-sm-push-18={sm && sm.push === 18}
  class:col-sm-push-19={sm && sm.push === 19}
  class:col-sm-push-20={sm && sm.push === 20}
  class:col-sm-push-21={sm && sm.push === 21}
  class:col-sm-push-22={sm && sm.push === 22}
  class:col-sm-push-23={sm && sm.push === 23}
  class:col-sm-push-24={sm && sm.push === 24}
  class:col-md-push-0={md && md.push === 0}
  class:col-md-push-1={md && md.push === 1}
  class:col-md-push-2={md && md.push === 2}
  class:col-md-push-3={md && md.push === 3}
  class:col-md-push-4={md && md.push === 4}
  class:col-md-push-5={md && md.push === 5}
  class:col-md-push-6={md && md.push === 6}
  class:col-md-push-7={md && md.push === 7}
  class:col-md-push-8={md && md.push === 8}
  class:col-md-push-9={md && md.push === 9}
  class:col-md-push-10={md && md.push === 10}
  class:col-md-push-11={md && md.push === 11}
  class:col-md-push-12={md && md.push === 12}
  class:col-md-push-13={md && md.push === 13}
  class:col-md-push-14={md && md.push === 14}
  class:col-md-push-15={md && md.push === 15}
  class:col-md-push-16={md && md.push === 16}
  class:col-md-push-17={md && md.push === 17}
  class:col-md-push-18={md && md.push === 18}
  class:col-md-push-19={md && md.push === 19}
  class:col-md-push-20={md && md.push === 20}
  class:col-md-push-21={md && md.push === 21}
  class:col-md-push-22={md && md.push === 22}
  class:col-md-push-23={md && md.push === 23}
  class:col-md-push-24={md && md.push === 24}
  class:col-lg-push-0={lg && lg.push === 0}
  class:col-lg-push-1={lg && lg.push === 1}
  class:col-lg-push-2={lg && lg.push === 2}
  class:col-lg-push-3={lg && lg.push === 3}
  class:col-lg-push-4={lg && lg.push === 4}
  class:col-lg-push-5={lg && lg.push === 5}
  class:col-lg-push-6={lg && lg.push === 6}
  class:col-lg-push-7={lg && lg.push === 7}
  class:col-lg-push-8={lg && lg.push === 8}
  class:col-lg-push-9={lg && lg.push === 9}
  class:col-lg-push-10={lg && lg.push === 10}
  class:col-lg-push-11={lg && lg.push === 11}
  class:col-lg-push-12={lg && lg.push === 12}
  class:col-lg-push-13={lg && lg.push === 13}
  class:col-lg-push-14={lg && lg.push === 14}
  class:col-lg-push-15={lg && lg.push === 15}
  class:col-lg-push-16={lg && lg.push === 16}
  class:col-lg-push-17={lg && lg.push === 17}
  class:col-lg-push-18={lg && lg.push === 18}
  class:col-lg-push-19={lg && lg.push === 19}
  class:col-lg-push-20={lg && lg.push === 20}
  class:col-lg-push-21={lg && lg.push === 21}
  class:col-lg-push-22={lg && lg.push === 22}
  class:col-lg-push-23={lg && lg.push === 23}
  class:col-lg-push-24={lg && lg.push === 24}
  class:col-xl-push-0={xl && xl.push === 0}
  class:col-xl-push-1={xl && xl.push === 1}
  class:col-xl-push-2={xl && xl.push === 2}
  class:col-xl-push-3={xl && xl.push === 3}
  class:col-xl-push-4={xl && xl.push === 4}
  class:col-xl-push-5={xl && xl.push === 5}
  class:col-xl-push-6={xl && xl.push === 6}
  class:col-xl-push-7={xl && xl.push === 7}
  class:col-xl-push-8={xl && xl.push === 8}
  class:col-xl-push-9={xl && xl.push === 9}
  class:col-xl-push-10={xl && xl.push === 10}
  class:col-xl-push-11={xl && xl.push === 11}
  class:col-xl-push-12={xl && xl.push === 12}
  class:col-xl-push-13={xl && xl.push === 13}
  class:col-xl-push-14={xl && xl.push === 14}
  class:col-xl-push-15={xl && xl.push === 15}
  class:col-xl-push-16={xl && xl.push === 16}
  class:col-xl-push-17={xl && xl.push === 17}
  class:col-xl-push-18={xl && xl.push === 18}
  class:col-xl-push-19={xl && xl.push === 19}
  class:col-xl-push-20={xl && xl.push === 20}
  class:col-xl-push-21={xl && xl.push === 21}
  class:col-xl-push-22={xl && xl.push === 22}
  class:col-xl-push-23={xl && xl.push === 23}
  class:col-xl-push-24={xl && xl.push === 24}
  class:col-xxl-push-0={xxl && xxl.push === 0}
  class:col-xxl-push-1={xxl && xxl.push === 1}
  class:col-xxl-push-2={xxl && xxl.push === 2}
  class:col-xxl-push-3={xxl && xxl.push === 3}
  class:col-xxl-push-4={xxl && xxl.push === 4}
  class:col-xxl-push-5={xxl && xxl.push === 5}
  class:col-xxl-push-6={xxl && xxl.push === 6}
  class:col-xxl-push-7={xxl && xxl.push === 7}
  class:col-xxl-push-8={xxl && xxl.push === 8}
  class:col-xxl-push-9={xxl && xxl.push === 9}
  class:col-xxl-push-10={xxl && xxl.push === 10}
  class:col-xxl-push-11={xxl && xxl.push === 11}
  class:col-xxl-push-12={xxl && xxl.push === 12}
  class:col-xxl-push-13={xxl && xxl.push === 13}
  class:col-xxl-push-14={xxl && xxl.push === 14}
  class:col-xxl-push-15={xxl && xxl.push === 15}
  class:col-xxl-push-16={xxl && xxl.push === 16}
  class:col-xxl-push-17={xxl && xxl.push === 17}
  class:col-xxl-push-18={xxl && xxl.push === 18}
  class:col-xxl-push-19={xxl && xxl.push === 19}
  class:col-xxl-push-20={xxl && xxl.push === 20}
  class:col-xxl-push-21={xxl && xxl.push === 21}
  class:col-xxl-push-22={xxl && xxl.push === 22}
  class:col-xxl-push-23={xxl && xxl.push === 23}
  class:col-xxl-push-24={xxl && xxl.push === 24}
  class:col-pull-0={pull === 0}
  class:col-pull-1={pull === 1}
  class:col-pull-2={pull === 2}
  class:col-pull-3={pull === 3}
  class:col-pull-4={pull === 4}
  class:col-pull-5={pull === 5}
  class:col-pull-6={pull === 6}
  class:col-pull-7={pull === 7}
  class:col-pull-8={pull === 8}
  class:col-pull-9={pull === 9}
  class:col-pull-10={pull === 10}
  class:col-pull-11={pull === 11}
  class:col-pull-12={pull === 12}
  class:col-pull-13={pull === 13}
  class:col-pull-14={pull === 14}
  class:col-pull-15={pull === 15}
  class:col-pull-16={pull === 16}
  class:col-pull-17={pull === 17}
  class:col-pull-18={pull === 18}
  class:col-pull-19={pull === 19}
  class:col-pull-20={pull === 20}
  class:col-pull-21={pull === 21}
  class:col-pull-22={pull === 22}
  class:col-pull-23={pull === 23}
  class:col-pull-24={pull === 24}
  class:col-xs-pull-0={xs && xs.pull === 0}
  class:col-xs-pull-1={xs && xs.pull === 1}
  class:col-xs-pull-2={xs && xs.pull === 2}
  class:col-xs-pull-3={xs && xs.pull === 3}
  class:col-xs-pull-4={xs && xs.pull === 4}
  class:col-xs-pull-5={xs && xs.pull === 5}
  class:col-xs-pull-6={xs && xs.pull === 6}
  class:col-xs-pull-7={xs && xs.pull === 7}
  class:col-xs-pull-8={xs && xs.pull === 8}
  class:col-xs-pull-9={xs && xs.pull === 9}
  class:col-xs-pull-10={xs && xs.pull === 10}
  class:col-xs-pull-11={xs && xs.pull === 11}
  class:col-xs-pull-12={xs && xs.pull === 12}
  class:col-xs-pull-13={xs && xs.pull === 13}
  class:col-xs-pull-14={xs && xs.pull === 14}
  class:col-xs-pull-15={xs && xs.pull === 15}
  class:col-xs-pull-16={xs && xs.pull === 16}
  class:col-xs-pull-17={xs && xs.pull === 17}
  class:col-xs-pull-18={xs && xs.pull === 18}
  class:col-xs-pull-19={xs && xs.pull === 19}
  class:col-xs-pull-20={xs && xs.pull === 20}
  class:col-xs-pull-21={xs && xs.pull === 21}
  class:col-xs-pull-22={xs && xs.pull === 22}
  class:col-xs-pull-23={xs && xs.pull === 23}
  class:col-xs-pull-24={xs && xs.pull === 24}
  class:col-sm-pull-0={sm && sm.pull === 0}
  class:col-sm-pull-1={sm && sm.pull === 1}
  class:col-sm-pull-2={sm && sm.pull === 2}
  class:col-sm-pull-3={sm && sm.pull === 3}
  class:col-sm-pull-4={sm && sm.pull === 4}
  class:col-sm-pull-5={sm && sm.pull === 5}
  class:col-sm-pull-6={sm && sm.pull === 6}
  class:col-sm-pull-7={sm && sm.pull === 7}
  class:col-sm-pull-8={sm && sm.pull === 8}
  class:col-sm-pull-9={sm && sm.pull === 9}
  class:col-sm-pull-10={sm && sm.pull === 10}
  class:col-sm-pull-11={sm && sm.pull === 11}
  class:col-sm-pull-12={sm && sm.pull === 12}
  class:col-sm-pull-13={sm && sm.pull === 13}
  class:col-sm-pull-14={sm && sm.pull === 14}
  class:col-sm-pull-15={sm && sm.pull === 15}
  class:col-sm-pull-16={sm && sm.pull === 16}
  class:col-sm-pull-17={sm && sm.pull === 17}
  class:col-sm-pull-18={sm && sm.pull === 18}
  class:col-sm-pull-19={sm && sm.pull === 19}
  class:col-sm-pull-20={sm && sm.pull === 20}
  class:col-sm-pull-21={sm && sm.pull === 21}
  class:col-sm-pull-22={sm && sm.pull === 22}
  class:col-sm-pull-23={sm && sm.pull === 23}
  class:col-sm-pull-24={sm && sm.pull === 24}
  class:col-md-pull-0={md && md.pull === 0}
  class:col-md-pull-1={md && md.pull === 1}
  class:col-md-pull-2={md && md.pull === 2}
  class:col-md-pull-3={md && md.pull === 3}
  class:col-md-pull-4={md && md.pull === 4}
  class:col-md-pull-5={md && md.pull === 5}
  class:col-md-pull-6={md && md.pull === 6}
  class:col-md-pull-7={md && md.pull === 7}
  class:col-md-pull-8={md && md.pull === 8}
  class:col-md-pull-9={md && md.pull === 9}
  class:col-md-pull-10={md && md.pull === 10}
  class:col-md-pull-11={md && md.pull === 11}
  class:col-md-pull-12={md && md.pull === 12}
  class:col-md-pull-13={md && md.pull === 13}
  class:col-md-pull-14={md && md.pull === 14}
  class:col-md-pull-15={md && md.pull === 15}
  class:col-md-pull-16={md && md.pull === 16}
  class:col-md-pull-17={md && md.pull === 17}
  class:col-md-pull-18={md && md.pull === 18}
  class:col-md-pull-19={md && md.pull === 19}
  class:col-md-pull-20={md && md.pull === 20}
  class:col-md-pull-21={md && md.pull === 21}
  class:col-md-pull-22={md && md.pull === 22}
  class:col-md-pull-23={md && md.pull === 23}
  class:col-md-pull-24={md && md.pull === 24}
  class:col-lg-pull-0={lg && lg.pull === 0}
  class:col-lg-pull-1={lg && lg.pull === 1}
  class:col-lg-pull-2={lg && lg.pull === 2}
  class:col-lg-pull-3={lg && lg.pull === 3}
  class:col-lg-pull-4={lg && lg.pull === 4}
  class:col-lg-pull-5={lg && lg.pull === 5}
  class:col-lg-pull-6={lg && lg.pull === 6}
  class:col-lg-pull-7={lg && lg.pull === 7}
  class:col-lg-pull-8={lg && lg.pull === 8}
  class:col-lg-pull-9={lg && lg.pull === 9}
  class:col-lg-pull-10={lg && lg.pull === 10}
  class:col-lg-pull-11={lg && lg.pull === 11}
  class:col-lg-pull-12={lg && lg.pull === 12}
  class:col-lg-pull-13={lg && lg.pull === 13}
  class:col-lg-pull-14={lg && lg.pull === 14}
  class:col-lg-pull-15={lg && lg.pull === 15}
  class:col-lg-pull-16={lg && lg.pull === 16}
  class:col-lg-pull-17={lg && lg.pull === 17}
  class:col-lg-pull-18={lg && lg.pull === 18}
  class:col-lg-pull-19={lg && lg.pull === 19}
  class:col-lg-pull-20={lg && lg.pull === 20}
  class:col-lg-pull-21={lg && lg.pull === 21}
  class:col-lg-pull-22={lg && lg.pull === 22}
  class:col-lg-pull-23={lg && lg.pull === 23}
  class:col-lg-pull-24={lg && lg.pull === 24}
  class:col-xl-pull-0={xl && xl.pull === 0}
  class:col-xl-pull-1={xl && xl.pull === 1}
  class:col-xl-pull-2={xl && xl.pull === 2}
  class:col-xl-pull-3={xl && xl.pull === 3}
  class:col-xl-pull-4={xl && xl.pull === 4}
  class:col-xl-pull-5={xl && xl.pull === 5}
  class:col-xl-pull-6={xl && xl.pull === 6}
  class:col-xl-pull-7={xl && xl.pull === 7}
  class:col-xl-pull-8={xl && xl.pull === 8}
  class:col-xl-pull-9={xl && xl.pull === 9}
  class:col-xl-pull-10={xl && xl.pull === 10}
  class:col-xl-pull-11={xl && xl.pull === 11}
  class:col-xl-pull-12={xl && xl.pull === 12}
  class:col-xl-pull-13={xl && xl.pull === 13}
  class:col-xl-pull-14={xl && xl.pull === 14}
  class:col-xl-pull-15={xl && xl.pull === 15}
  class:col-xl-pull-16={xl && xl.pull === 16}
  class:col-xl-pull-17={xl && xl.pull === 17}
  class:col-xl-pull-18={xl && xl.pull === 18}
  class:col-xl-pull-19={xl && xl.pull === 19}
  class:col-xl-pull-20={xl && xl.pull === 20}
  class:col-xl-pull-21={xl && xl.pull === 21}
  class:col-xl-pull-22={xl && xl.pull === 22}
  class:col-xl-pull-23={xl && xl.pull === 23}
  class:col-xl-pull-24={xl && xl.pull === 24}
  class:col-xxl-pull-0={xxl && xxl.pull === 0}
  class:col-xxl-pull-1={xxl && xxl.pull === 1}
  class:col-xxl-pull-2={xxl && xxl.pull === 2}
  class:col-xxl-pull-3={xxl && xxl.pull === 3}
  class:col-xxl-pull-4={xxl && xxl.pull === 4}
  class:col-xxl-pull-5={xxl && xxl.pull === 5}
  class:col-xxl-pull-6={xxl && xxl.pull === 6}
  class:col-xxl-pull-7={xxl && xxl.pull === 7}
  class:col-xxl-pull-8={xxl && xxl.pull === 8}
  class:col-xxl-pull-9={xxl && xxl.pull === 9}
  class:col-xxl-pull-10={xxl && xxl.pull === 10}
  class:col-xxl-pull-11={xxl && xxl.pull === 11}
  class:col-xxl-pull-12={xxl && xxl.pull === 12}
  class:col-xxl-pull-13={xxl && xxl.pull === 13}
  class:col-xxl-pull-14={xxl && xxl.pull === 14}
  class:col-xxl-pull-15={xxl && xxl.pull === 15}
  class:col-xxl-pull-16={xxl && xxl.pull === 16}
  class:col-xxl-pull-17={xxl && xxl.pull === 17}
  class:col-xxl-pull-18={xxl && xxl.pull === 18}
  class:col-xxl-pull-19={xxl && xxl.pull === 19}
  class:col-xxl-pull-20={xxl && xxl.pull === 20}
  class:col-xxl-pull-21={xxl && xxl.pull === 21}
  class:col-xxl-pull-22={xxl && xxl.pull === 22}
  class:col-xxl-pull-23={xxl && xxl.pull === 23}
  class:col-xxl-pull-24={xxl && xxl.pull === 24}
  class:col-offset-0={offset === 0}
  class:col-offset-1={offset === 1}
  class:col-offset-2={offset === 2}
  class:col-offset-3={offset === 3}
  class:col-offset-4={offset === 4}
  class:col-offset-5={offset === 5}
  class:col-offset-6={offset === 6}
  class:col-offset-7={offset === 7}
  class:col-offset-8={offset === 8}
  class:col-offset-9={offset === 9}
  class:col-offset-10={offset === 10}
  class:col-offset-11={offset === 11}
  class:col-offset-12={offset === 12}
  class:col-offset-13={offset === 13}
  class:col-offset-14={offset === 14}
  class:col-offset-15={offset === 15}
  class:col-offset-16={offset === 16}
  class:col-offset-17={offset === 17}
  class:col-offset-18={offset === 18}
  class:col-offset-19={offset === 19}
  class:col-offset-20={offset === 20}
  class:col-offset-21={offset === 21}
  class:col-offset-22={offset === 22}
  class:col-offset-23={offset === 23}
  class:col-offset-24={offset === 24}
  class:col-xs-offset-0={xs && xs.offset === 0}
  class:col-xs-offset-1={xs && xs.offset === 1}
  class:col-xs-offset-2={xs && xs.offset === 2}
  class:col-xs-offset-3={xs && xs.offset === 3}
  class:col-xs-offset-4={xs && xs.offset === 4}
  class:col-xs-offset-5={xs && xs.offset === 5}
  class:col-xs-offset-6={xs && xs.offset === 6}
  class:col-xs-offset-7={xs && xs.offset === 7}
  class:col-xs-offset-8={xs && xs.offset === 8}
  class:col-xs-offset-9={xs && xs.offset === 9}
  class:col-xs-offset-10={xs && xs.offset === 10}
  class:col-xs-offset-11={xs && xs.offset === 11}
  class:col-xs-offset-12={xs && xs.offset === 12}
  class:col-xs-offset-13={xs && xs.offset === 13}
  class:col-xs-offset-14={xs && xs.offset === 14}
  class:col-xs-offset-15={xs && xs.offset === 15}
  class:col-xs-offset-16={xs && xs.offset === 16}
  class:col-xs-offset-17={xs && xs.offset === 17}
  class:col-xs-offset-18={xs && xs.offset === 18}
  class:col-xs-offset-19={xs && xs.offset === 19}
  class:col-xs-offset-20={xs && xs.offset === 20}
  class:col-xs-offset-21={xs && xs.offset === 21}
  class:col-xs-offset-22={xs && xs.offset === 22}
  class:col-xs-offset-23={xs && xs.offset === 23}
  class:col-xs-offset-24={xs && xs.offset === 24}
  class:col-sm-offset-0={sm && sm.offset === 0}
  class:col-sm-offset-1={sm && sm.offset === 1}
  class:col-sm-offset-2={sm && sm.offset === 2}
  class:col-sm-offset-3={sm && sm.offset === 3}
  class:col-sm-offset-4={sm && sm.offset === 4}
  class:col-sm-offset-5={sm && sm.offset === 5}
  class:col-sm-offset-6={sm && sm.offset === 6}
  class:col-sm-offset-7={sm && sm.offset === 7}
  class:col-sm-offset-8={sm && sm.offset === 8}
  class:col-sm-offset-9={sm && sm.offset === 9}
  class:col-sm-offset-10={sm && sm.offset === 10}
  class:col-sm-offset-11={sm && sm.offset === 11}
  class:col-sm-offset-12={sm && sm.offset === 12}
  class:col-sm-offset-13={sm && sm.offset === 13}
  class:col-sm-offset-14={sm && sm.offset === 14}
  class:col-sm-offset-15={sm && sm.offset === 15}
  class:col-sm-offset-16={sm && sm.offset === 16}
  class:col-sm-offset-17={sm && sm.offset === 17}
  class:col-sm-offset-18={sm && sm.offset === 18}
  class:col-sm-offset-19={sm && sm.offset === 19}
  class:col-sm-offset-20={sm && sm.offset === 20}
  class:col-sm-offset-21={sm && sm.offset === 21}
  class:col-sm-offset-22={sm && sm.offset === 22}
  class:col-sm-offset-23={sm && sm.offset === 23}
  class:col-sm-offset-24={sm && sm.offset === 24}
  class:col-md-offset-0={md && md.offset === 0}
  class:col-md-offset-1={md && md.offset === 1}
  class:col-md-offset-2={md && md.offset === 2}
  class:col-md-offset-3={md && md.offset === 3}
  class:col-md-offset-4={md && md.offset === 4}
  class:col-md-offset-5={md && md.offset === 5}
  class:col-md-offset-6={md && md.offset === 6}
  class:col-md-offset-7={md && md.offset === 7}
  class:col-md-offset-8={md && md.offset === 8}
  class:col-md-offset-9={md && md.offset === 9}
  class:col-md-offset-10={md && md.offset === 10}
  class:col-md-offset-11={md && md.offset === 11}
  class:col-md-offset-12={md && md.offset === 12}
  class:col-md-offset-13={md && md.offset === 13}
  class:col-md-offset-14={md && md.offset === 14}
  class:col-md-offset-15={md && md.offset === 15}
  class:col-md-offset-16={md && md.offset === 16}
  class:col-md-offset-17={md && md.offset === 17}
  class:col-md-offset-18={md && md.offset === 18}
  class:col-md-offset-19={md && md.offset === 19}
  class:col-md-offset-20={md && md.offset === 20}
  class:col-md-offset-21={md && md.offset === 21}
  class:col-md-offset-22={md && md.offset === 22}
  class:col-md-offset-23={md && md.offset === 23}
  class:col-md-offset-24={md && md.offset === 24}
  class:col-lg-offset-0={lg && lg.offset === 0}
  class:col-lg-offset-1={lg && lg.offset === 1}
  class:col-lg-offset-2={lg && lg.offset === 2}
  class:col-lg-offset-3={lg && lg.offset === 3}
  class:col-lg-offset-4={lg && lg.offset === 4}
  class:col-lg-offset-5={lg && lg.offset === 5}
  class:col-lg-offset-6={lg && lg.offset === 6}
  class:col-lg-offset-7={lg && lg.offset === 7}
  class:col-lg-offset-8={lg && lg.offset === 8}
  class:col-lg-offset-9={lg && lg.offset === 9}
  class:col-lg-offset-10={lg && lg.offset === 10}
  class:col-lg-offset-11={lg && lg.offset === 11}
  class:col-lg-offset-12={lg && lg.offset === 12}
  class:col-lg-offset-13={lg && lg.offset === 13}
  class:col-lg-offset-14={lg && lg.offset === 14}
  class:col-lg-offset-15={lg && lg.offset === 15}
  class:col-lg-offset-16={lg && lg.offset === 16}
  class:col-lg-offset-17={lg && lg.offset === 17}
  class:col-lg-offset-18={lg && lg.offset === 18}
  class:col-lg-offset-19={lg && lg.offset === 19}
  class:col-lg-offset-20={lg && lg.offset === 20}
  class:col-lg-offset-21={lg && lg.offset === 21}
  class:col-lg-offset-22={lg && lg.offset === 22}
  class:col-lg-offset-23={lg && lg.offset === 23}
  class:col-lg-offset-24={lg && lg.offset === 24}
  class:col-xl-offset-0={xl && xl.offset === 0}
  class:col-xl-offset-1={xl && xl.offset === 1}
  class:col-xl-offset-2={xl && xl.offset === 2}
  class:col-xl-offset-3={xl && xl.offset === 3}
  class:col-xl-offset-4={xl && xl.offset === 4}
  class:col-xl-offset-5={xl && xl.offset === 5}
  class:col-xl-offset-6={xl && xl.offset === 6}
  class:col-xl-offset-7={xl && xl.offset === 7}
  class:col-xl-offset-8={xl && xl.offset === 8}
  class:col-xl-offset-9={xl && xl.offset === 9}
  class:col-xl-offset-10={xl && xl.offset === 10}
  class:col-xl-offset-11={xl && xl.offset === 11}
  class:col-xl-offset-12={xl && xl.offset === 12}
  class:col-xl-offset-13={xl && xl.offset === 13}
  class:col-xl-offset-14={xl && xl.offset === 14}
  class:col-xl-offset-15={xl && xl.offset === 15}
  class:col-xl-offset-16={xl && xl.offset === 16}
  class:col-xl-offset-17={xl && xl.offset === 17}
  class:col-xl-offset-18={xl && xl.offset === 18}
  class:col-xl-offset-19={xl && xl.offset === 19}
  class:col-xl-offset-20={xl && xl.offset === 20}
  class:col-xl-offset-21={xl && xl.offset === 21}
  class:col-xl-offset-22={xl && xl.offset === 22}
  class:col-xl-offset-23={xl && xl.offset === 23}
  class:col-xl-offset-24={xl && xl.offset === 24}
  class:col-xxl-offset-0={xxl && xxl.offset === 0}
  class:col-xxl-offset-1={xxl && xxl.offset === 1}
  class:col-xxl-offset-2={xxl && xxl.offset === 2}
  class:col-xxl-offset-3={xxl && xxl.offset === 3}
  class:col-xxl-offset-4={xxl && xxl.offset === 4}
  class:col-xxl-offset-5={xxl && xxl.offset === 5}
  class:col-xxl-offset-6={xxl && xxl.offset === 6}
  class:col-xxl-offset-7={xxl && xxl.offset === 7}
  class:col-xxl-offset-8={xxl && xxl.offset === 8}
  class:col-xxl-offset-9={xxl && xxl.offset === 9}
  class:col-xxl-offset-10={xxl && xxl.offset === 10}
  class:col-xxl-offset-11={xxl && xxl.offset === 11}
  class:col-xxl-offset-12={xxl && xxl.offset === 12}
  class:col-xxl-offset-13={xxl && xxl.offset === 13}
  class:col-xxl-offset-14={xxl && xxl.offset === 14}
  class:col-xxl-offset-15={xxl && xxl.offset === 15}
  class:col-xxl-offset-16={xxl && xxl.offset === 16}
  class:col-xxl-offset-17={xxl && xxl.offset === 17}
  class:col-xxl-offset-18={xxl && xxl.offset === 18}
  class:col-xxl-offset-19={xxl && xxl.offset === 19}
  class:col-xxl-offset-20={xxl && xxl.offset === 20}
  class:col-xxl-offset-21={xxl && xxl.offset === 21}
  class:col-xxl-offset-22={xxl && xxl.offset === 22}
  class:col-xxl-offset-23={xxl && xxl.offset === 23}
  class:col-xxl-offset-24={xxl && xxl.offset === 24}
  class:col-order-0={order === 0}
  class:col-order-1={order === 1}
  class:col-order-2={order === 2}
  class:col-order-3={order === 3}
  class:col-order-4={order === 4}
  class:col-order-5={order === 5}
  class:col-order-6={order === 6}
  class:col-order-7={order === 7}
  class:col-order-8={order === 8}
  class:col-order-9={order === 9}
  class:col-order-10={order === 10}
  class:col-order-11={order === 11}
  class:col-order-12={order === 12}
  class:col-order-13={order === 13}
  class:col-order-14={order === 14}
  class:col-order-15={order === 15}
  class:col-order-16={order === 16}
  class:col-order-17={order === 17}
  class:col-order-18={order === 18}
  class:col-order-19={order === 19}
  class:col-order-20={order === 20}
  class:col-order-21={order === 21}
  class:col-order-22={order === 22}
  class:col-order-23={order === 23}
  class:col-order-24={order === 24}
  class:col-xs-order-0={xs && xs.order === 0}
  class:col-xs-order-1={xs && xs.order === 1}
  class:col-xs-order-2={xs && xs.order === 2}
  class:col-xs-order-3={xs && xs.order === 3}
  class:col-xs-order-4={xs && xs.order === 4}
  class:col-xs-order-5={xs && xs.order === 5}
  class:col-xs-order-6={xs && xs.order === 6}
  class:col-xs-order-7={xs && xs.order === 7}
  class:col-xs-order-8={xs && xs.order === 8}
  class:col-xs-order-9={xs && xs.order === 9}
  class:col-xs-order-10={xs && xs.order === 10}
  class:col-xs-order-11={xs && xs.order === 11}
  class:col-xs-order-12={xs && xs.order === 12}
  class:col-xs-order-13={xs && xs.order === 13}
  class:col-xs-order-14={xs && xs.order === 14}
  class:col-xs-order-15={xs && xs.order === 15}
  class:col-xs-order-16={xs && xs.order === 16}
  class:col-xs-order-17={xs && xs.order === 17}
  class:col-xs-order-18={xs && xs.order === 18}
  class:col-xs-order-19={xs && xs.order === 19}
  class:col-xs-order-20={xs && xs.order === 20}
  class:col-xs-order-21={xs && xs.order === 21}
  class:col-xs-order-22={xs && xs.order === 22}
  class:col-xs-order-23={xs && xs.order === 23}
  class:col-xs-order-24={xs && xs.order === 24}
  class:col-sm-order-0={sm && sm.order === 0}
  class:col-sm-order-1={sm && sm.order === 1}
  class:col-sm-order-2={sm && sm.order === 2}
  class:col-sm-order-3={sm && sm.order === 3}
  class:col-sm-order-4={sm && sm.order === 4}
  class:col-sm-order-5={sm && sm.order === 5}
  class:col-sm-order-6={sm && sm.order === 6}
  class:col-sm-order-7={sm && sm.order === 7}
  class:col-sm-order-8={sm && sm.order === 8}
  class:col-sm-order-9={sm && sm.order === 9}
  class:col-sm-order-10={sm && sm.order === 10}
  class:col-sm-order-11={sm && sm.order === 11}
  class:col-sm-order-12={sm && sm.order === 12}
  class:col-sm-order-13={sm && sm.order === 13}
  class:col-sm-order-14={sm && sm.order === 14}
  class:col-sm-order-15={sm && sm.order === 15}
  class:col-sm-order-16={sm && sm.order === 16}
  class:col-sm-order-17={sm && sm.order === 17}
  class:col-sm-order-18={sm && sm.order === 18}
  class:col-sm-order-19={sm && sm.order === 19}
  class:col-sm-order-20={sm && sm.order === 20}
  class:col-sm-order-21={sm && sm.order === 21}
  class:col-sm-order-22={sm && sm.order === 22}
  class:col-sm-order-23={sm && sm.order === 23}
  class:col-sm-order-24={sm && sm.order === 24}
  class:col-md-order-0={md && md.order === 0}
  class:col-md-order-1={md && md.order === 1}
  class:col-md-order-2={md && md.order === 2}
  class:col-md-order-3={md && md.order === 3}
  class:col-md-order-4={md && md.order === 4}
  class:col-md-order-5={md && md.order === 5}
  class:col-md-order-6={md && md.order === 6}
  class:col-md-order-7={md && md.order === 7}
  class:col-md-order-8={md && md.order === 8}
  class:col-md-order-9={md && md.order === 9}
  class:col-md-order-10={md && md.order === 10}
  class:col-md-order-11={md && md.order === 11}
  class:col-md-order-12={md && md.order === 12}
  class:col-md-order-13={md && md.order === 13}
  class:col-md-order-14={md && md.order === 14}
  class:col-md-order-15={md && md.order === 15}
  class:col-md-order-16={md && md.order === 16}
  class:col-md-order-17={md && md.order === 17}
  class:col-md-order-18={md && md.order === 18}
  class:col-md-order-19={md && md.order === 19}
  class:col-md-order-20={md && md.order === 20}
  class:col-md-order-21={md && md.order === 21}
  class:col-md-order-22={md && md.order === 22}
  class:col-md-order-23={md && md.order === 23}
  class:col-md-order-24={md && md.order === 24}
  class:col-lg-order-0={lg && lg.order === 0}
  class:col-lg-order-1={lg && lg.order === 1}
  class:col-lg-order-2={lg && lg.order === 2}
  class:col-lg-order-3={lg && lg.order === 3}
  class:col-lg-order-4={lg && lg.order === 4}
  class:col-lg-order-5={lg && lg.order === 5}
  class:col-lg-order-6={lg && lg.order === 6}
  class:col-lg-order-7={lg && lg.order === 7}
  class:col-lg-order-8={lg && lg.order === 8}
  class:col-lg-order-9={lg && lg.order === 9}
  class:col-lg-order-10={lg && lg.order === 10}
  class:col-lg-order-11={lg && lg.order === 11}
  class:col-lg-order-12={lg && lg.order === 12}
  class:col-lg-order-13={lg && lg.order === 13}
  class:col-lg-order-14={lg && lg.order === 14}
  class:col-lg-order-15={lg && lg.order === 15}
  class:col-lg-order-16={lg && lg.order === 16}
  class:col-lg-order-17={lg && lg.order === 17}
  class:col-lg-order-18={lg && lg.order === 18}
  class:col-lg-order-19={lg && lg.order === 19}
  class:col-lg-order-20={lg && lg.order === 20}
  class:col-lg-order-21={lg && lg.order === 21}
  class:col-lg-order-22={lg && lg.order === 22}
  class:col-lg-order-23={lg && lg.order === 23}
  class:col-lg-order-24={lg && lg.order === 24}
  class:col-xl-order-0={xl && xl.order === 0}
  class:col-xl-order-1={xl && xl.order === 1}
  class:col-xl-order-2={xl && xl.order === 2}
  class:col-xl-order-3={xl && xl.order === 3}
  class:col-xl-order-4={xl && xl.order === 4}
  class:col-xl-order-5={xl && xl.order === 5}
  class:col-xl-order-6={xl && xl.order === 6}
  class:col-xl-order-7={xl && xl.order === 7}
  class:col-xl-order-8={xl && xl.order === 8}
  class:col-xl-order-9={xl && xl.order === 9}
  class:col-xl-order-10={xl && xl.order === 10}
  class:col-xl-order-11={xl && xl.order === 11}
  class:col-xl-order-12={xl && xl.order === 12}
  class:col-xl-order-13={xl && xl.order === 13}
  class:col-xl-order-14={xl && xl.order === 14}
  class:col-xl-order-15={xl && xl.order === 15}
  class:col-xl-order-16={xl && xl.order === 16}
  class:col-xl-order-17={xl && xl.order === 17}
  class:col-xl-order-18={xl && xl.order === 18}
  class:col-xl-order-19={xl && xl.order === 19}
  class:col-xl-order-20={xl && xl.order === 20}
  class:col-xl-order-21={xl && xl.order === 21}
  class:col-xl-order-22={xl && xl.order === 22}
  class:col-xl-order-23={xl && xl.order === 23}
  class:col-xl-order-24={xl && xl.order === 24}
  class:col-xxl-order-0={xxl && xxl.order === 0}
  class:col-xxl-order-1={xxl && xxl.order === 1}
  class:col-xxl-order-2={xxl && xxl.order === 2}
  class:col-xxl-order-3={xxl && xxl.order === 3}
  class:col-xxl-order-4={xxl && xxl.order === 4}
  class:col-xxl-order-5={xxl && xxl.order === 5}
  class:col-xxl-order-6={xxl && xxl.order === 6}
  class:col-xxl-order-7={xxl && xxl.order === 7}
  class:col-xxl-order-8={xxl && xxl.order === 8}
  class:col-xxl-order-9={xxl && xxl.order === 9}
  class:col-xxl-order-10={xxl && xxl.order === 10}
  class:col-xxl-order-11={xxl && xxl.order === 11}
  class:col-xxl-order-12={xxl && xxl.order === 12}
  class:col-xxl-order-13={xxl && xxl.order === 13}
  class:col-xxl-order-14={xxl && xxl.order === 14}
  class:col-xxl-order-15={xxl && xxl.order === 15}
  class:col-xxl-order-16={xxl && xxl.order === 16}
  class:col-xxl-order-17={xxl && xxl.order === 17}
  class:col-xxl-order-18={xxl && xxl.order === 18}
  class:col-xxl-order-19={xxl && xxl.order === 19}
  class:col-xxl-order-20={xxl && xxl.order === 20}
  class:col-xxl-order-21={xxl && xxl.order === 21}
  class:col-xxl-order-22={xxl && xxl.order === 22}
  class:col-xxl-order-23={xxl && xxl.order === 23}
  class:col-xxl-order-24={xxl && xxl.order === 24}
  {style}>
  <slot />
</div>
