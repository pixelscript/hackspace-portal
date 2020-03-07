<script>
  export let img;
  export let title;
  export let subtitle;
</script>

<style>
  section {
    background: #eee;
    padding: 10px;
    border: 1px solid #888;
    border-radius: 10px;
    display: inline-block;
    box-shadow: #888;
    text-align:left;
  }

  .img-box {
    background: url({img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    width: 358px;
    height: 280px;
  }
</style>

<section>
  <h2>{title}</h2>
  <h3>{subtitle}</h3>
  <div class="img-box" style="background-image:url('{img}')"></div>
</section>
