<template>
  <b-container>
     <div class="act">
       <h1>Actualización de Información</h1>
       <br>
      <b-form>
        <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="serie.Nombre"
            required
            placeholder="Nombre de la serie"
          ></b-form-input>

        </b-form-group>
        <b-form-group id="input-group-2" label="Imagen:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="serie.Imagen"
            placeholder="URL imagen serie"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Canal:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="serie.Canal"
            required
            placeholder="Canal de Emisión"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Géneros:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="serie.Géneros"
            required
            placeholder="Géneros de la serie"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Temporadas:" label-for="input-5">
          <b-form-input
            id="input-5"
            type="number"
            v-model="serie.Temporadas"
            required
            placeholder="Número de Temporadas"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="En Emisión:">
          <b-form-radio-group v-model="serie.Emisión" id="checkboxes-4">
            <b-form-radio value="Si">Si</b-form-radio>
            <b-form-radio value="No">No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-button @click="modificar" type="submit" variant="primary">guardar</b-button>
      </b-form>
    </div>
    <b-button @click='home' variant="outline-primary" class="mt-4"> Home </b-button> 
  </b-container>
</template>

<script>
import { db } from '../firebase';  
export default {
  name: 'Edit',
  data() {
    return {
      serie:[]
    }
  },
  mounted(){
    this.buscar()
  },
  
  methods: {
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
    modificar() {
        db.collection("series").doc(this.$route.params.id).update({
          Nombre: this.serie.Nombre,
          Canal: this.serie.Canal,
          Temporadas: this.serie.Temporadas,
          Emisión: this.serie.Emisión,
          Géneros: this.serie.Géneros,
          Imagen: this.serie.Imagen,
        });
        this.$router.push('/')
      }
  }
}
</script>