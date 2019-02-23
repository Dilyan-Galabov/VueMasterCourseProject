<template>

   <b-form-group label="Жанр">
     <div class="card p-3">
      <b-form-checkbox-group 
        @input="selectGenresChange" 
        v-model="selected" 
        name="genres"
        :options="getGenres">
      </b-form-checkbox-group>
      </div>
    </b-form-group>
</template>

<script>
import actions from '../../store/action-types';
export default {
  name: 'st-genres',
   data () {
    return {
      selected: [],
    }
  },
  created(){
    this.$store.dispatch(actions.GET_SERIES_GENRES);
  },
  methods: {
    transformKeys(results) {
      const result = results.map(genre => {
        return this.transformData(genre)
      });
      return result;
    },
    transformData(genre) {
      genre.text = genre.name;
      genre.value = genre.id;
      return genre;
    },
    selectGenresChange(value){
      this.$emit('selectGenresChange', value);
    }
  },
  computed: {
    getGenres(){
      const results = this.transformKeys(this.$store.state.seriesGenres);
      return results;
    }
  }
}
</script>