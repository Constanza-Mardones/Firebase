<template>
  <b-container>
    <div class="hello">
      <b-table striped :items="series" :fields="encabezado">

        <template v-slot:cell(Nombre)="tv">
          <router-link :to="{name:'About', params: {id :tv.item.id} }">{{tv.value}}</router-link>
        </template>

        <template v-slot:cell(Acciones)="action">
          <router-link :to="{name:'Edit', params: {id :action.item.id} }">Editar</router-link>
          <b-button size="sm" @click="deleteOne(action.item.id)" class="ml-2">Eliminar</b-button>
        </template>
      </b-table>

    </div>
  </b-container>
</template>

<script>
import { db } from '../firebase';  
export default {
  name: 'HelloWorld',
  data(){
    return { 
      encabezado:[ {key:'Nombre', sortable: true}, 'Canal', 'Temporadas', 'Emisión', 'Géneros', 'Acciones'],
    }
  },
  firestore(){
    return {
      series: db.collection('series')
    }
  },
  methods: {
    async deleteOne(showsId) {
      try {
        db.collection("series").doc(showsId).delete();
        }
      catch (error) {
        console.log(error);
      }
      this.id=''
    }
  }
}
</script>

<style>
.hello{
  margin-top: 30px;
}

</style>
