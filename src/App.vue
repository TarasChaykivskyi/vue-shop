<template>
  <div id="app">
    <Header />
    <div class="site-wrapper container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header/Header";
  import Footer from "./components/Footer/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1000px;
    margin: auto;
    padding: 0 20px;
  }

  .site-wrapper {
    padding-top: 50px;
    padding-bottom: 50px;
    min-height: calc(100vh - 250px);
  }

  h2 {
    padding-bottom: 30px;
    text-align: center;
  }

  button {
    background: transparent;
    border: none;
  }

  button:focus {
    outline: none;
  }

</style>
