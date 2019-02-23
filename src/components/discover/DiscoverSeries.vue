<template>
  <div class="container mt-3">
      <st-series-filters></st-series-filters>
    <st-movies-list></st-movies-list>
    <st-pagination @changePage="getFilteredSeries"></st-pagination>
  </div>
</template>

<script>
  import StMoviesList from '../common/MoviesList';
  import StPagination from '../common/Pagination';
  import StSeriesFilters from '../series/SeriesFilters';
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-discover-series',
    components: {
     StSeriesFilters,
      StMoviesList,
      StPagination
    },
    beforeCreate() {
      this.$store.commit(mutations.SET_RESULT_TYPE, 'tv');
      this.$store.commit(mutations.SET_MOVIES, []);
    },
    created() {
      this.getFilteredSeries();
    },
    methods: {
      getFilteredSeries(page = this.$store.state.currentPage) {
        this.$store.dispatch(actions.GET_TOP_RATED_TV, {page});
      },
    },
  };
</script>
