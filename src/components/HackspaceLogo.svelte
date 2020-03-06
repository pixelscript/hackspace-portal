<script>
  import { fade, draw, fly,  } from "svelte/transition";
  const path =
    "M175.262,51.21c-33.712-33.709-88.367-33.709-122.073,0c-33.713,33.712-33.713,88.365,0,122.075c33.706,33.71,88.364,33.71,122.073,0C208.972,139.575,208.972,84.922,175.262,51.21zM147.78,141.541l-19.69-19.687l6.193-6.193l-3.275-3.274l-16.645,16.646l3.271,3.277l6.41-6.413l19.695,19.688l-29.514,29.514l-19.692-19.689l3.359-3.356l-23.471-23.474l-3.363,3.36l-19.687-19.69l29.515-29.515l19.688,19.688l-6.414,6.412l4.031,4.03l16.65-16.647l-4.029-4.03l-6.197,6.196l-19.689-19.69l29.3-29.295l19.685,19.688l-3.355,3.36l23.47,23.472l3.361-3.36l19.688,19.691L147.78,141.541z";
</script>

<style>
  figure {
    margin: 0 0 1em 0;
    text-align: center;
    margin: 0 auto;
  }

  svg {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }
</style>

<figure>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 223.489 220.489"
    enable-background="new 0 0 223.489 220.489"
    xml:space="preserve">
    <g>
      <path in:draw={{ duration: 2000 }} out:draw={{ delay: 500, duration: 1000 }} style="stroke:#1AB91B; stroke-width: 1.5; fill:#FFFFFF" d={path} />
    </g>
    <g>
      <path in:fade={{ delay: 1500, duration: 1000 }}  out:fade={{duration: 500 }} style="fill:#1AB91B" d={path} />
    </g>
  </svg>
</figure>
