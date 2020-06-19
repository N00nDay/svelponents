<style>
  .ball {
    transform-origin: 50% 50%;
    transform-box: fill-box;
    width: 1em;
    height: 1em;
    position: relative;
    color: inherit;
    display: inline-block;
    box-sizing: content-box;

    bottom: auto;
    left: 50%;
    top: 1.25em;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    margin: -0.5em;
    opacity: 1;
    z-index: 1;
    transition: all 0.3s;
    transition-timing-function: ease-in;
    animation: ball-flip 1s infinite linear;
  }

  .ball::after {
    border-radius: 50%;
    background: currentColor;
    top: 0;
  }
  .ball::after {
    content: " ";
    display: block;
    width: 2em;
    height: 2em;
    box-sizing: border-box;
    transform-origin: 0 0;
    transform: translateZ(0) scale(0.5);
    backface-visibility: hidden;
  }

  @keyframes ball-flip {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
  @-webkit-keyframes ball-flip {
    0% {
      -webkit-transform: rotateX(0deg);
    }
    50% {
      -webkit-transform: rotateX(180deg);
    }
    100% {
      -webkit-transform: rotateX(360deg);
    }
  }
</style>

<div class="ball" />
