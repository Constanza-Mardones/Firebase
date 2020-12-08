<template>
  <div class="home">
    <img alt="tv" src="https://cdn.shopify.com/s/files/1/0186/4128/products/LT-xxMA875_Cast_TV_-_front_2048x_787c62ed-c497-4060-9e96-3eda1e6e9a85_1200x1200.png?v=1578612542" width="250">
    <h2>Series de TV</h2>
    <HelloWorld/>
    <h3>Añadir una Serie de TV</h3>
    <Formulario/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Formulario from '@/components/Formulario.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Formulario
   
  }
}
</script>
<style>
img{
  margin-bottom: 20px;
}
h3{
  padding: 30px;
}
</style>