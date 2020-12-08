<template>
  <b-container>
    <div class="holi">
      <b-form>
        <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="Nombre"
            required
            placeholder="Nombre de la serie"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Imagen:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="Imagen"
            placeholder="URL imagen serie"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Canal:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="Canal"
            required
            placeholder="Canal de Emisión"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Géneros:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="Géneros"
            required
            placeholder="Géneros de la serie"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Temporadas:" label-for="input-5">
          <b-form-input
            id="input-5"
            type="number"
            v-model="Temporadas"
            required
            placeholder="Número de Temporadas"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="En Emisión:">
          <b-form-radio-group v-model="Emisión" id="checkboxes-4">
            <b-form-radio value="Si">Si</b-form-radio>
            <b-form-radio value="No">No</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-button @click="addNewShow" type="submit" variant="primary">añadir</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import { db } from '../firebase';  
export default {
  name: 'Formulario',
  data() {
    return {
      Nombre: '',
      Canal: '',
      Géneros: '',
      Temporadas: '',
      Emisión: [],
      Imagen:'',
    }
  },
  firestore(){
    return {
      series: db.collection('series')
    }
  },
  methods: {
    addNewShow(){
      db.collection("series").add({
        Nombre:this.Nombre,
        Canal:this.Canal,
        Temporadas:this.Temporadas,
        Emisión:this.Emisión,
        Géneros:this.Géneros,
        Imagen:this.Imagen,
      });
      this.Nombre="";
      this.Canal="";
      this.Temporadas="";
      this.Emisión=[];
      this.Géneros="";
      this.Imagen="";
    }
  }
}
</script>

<style>
.holi{
  margin-top:20px;
}

</style>