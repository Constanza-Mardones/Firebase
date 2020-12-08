<template>
  <b-container> 
    <div class="about">
      <h2>{{serie.Nombre}}</h2><br>
      <img :src="serie.Imagen" width="300">
      <h4>Canal de Transmisión: {{serie.Canal}}</h4>
      <h4>Número de Temporadas: {{serie.Temporadas}}</h4>
      <h4>En Emisión: {{serie.Emisión}}</h4>
      <h4>Géneros de la Serie: {{serie.Géneros}}</h4> <br>
      <b-button @click='home' variant="outline-primary"> Home </b-button>
    </div>
  </b-container>
</template>

<script>
import { db } from '../firebase'; 

export default {
  name: 'About',
  data(){
    return{
      serie:[]
    }
  },
  // firestore(){
  //   return {
  //     serie: []
  //   }
  // },
  mounted(){
    this.buscar()
  },
  methods:{
    home(){
      this.$router.push('/')
    },
    async buscar() {
      console.log('buscando');
      try {
        let show = await db.collection('series').doc(this.$route.params.id).get();
        if(show.exists){
          console.log('encontrado');
          let item = show.data();
          console.log(item);
          this.serie = item;
        }
      }
      catch (error) {
        console.log(error);
      }
    },
  }
}
</script>