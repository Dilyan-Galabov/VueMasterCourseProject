<template>
  <div class="row">
    <div class="col-sm-4">
        <st-sort-by @sortBy="sortBy"></st-sort-by>
    </div>
       <div class="col-sm-4">
        <st-genres @selectGenresChange="selectGenresChange"></st-genres>
    </div>
  </div>
</template>

<script>
import StSortBy from '../series/SortBy';
import StGenres from '../series/Genres';
import actions from '../../store/action-types';

export default {
  name: 'st-series-filters',
  data() {
    return {
      filters: {
        with_genres: 'Crime'
      }
    }
  },
  created(){
    this.getFilteredSeries();
  },
  components: {
    StSortBy,
    StGenres
  },
  methods: {
    sortBy(value){
      this.changeFilters('sort_by', value);
    },
     selectGenresChange(value){
     this.changeFilters('with_genres', value.toString());
    },
    changeFilters(key, value){
      this.filters[key] = value;
      this.getFilteredSeries();
    },
    getFilteredSeries(){
      this.$store.dispatch(actions.GET_FILTERED_SERIES, this.filters);
    }
  }
}
</script>