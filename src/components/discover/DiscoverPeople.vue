<template>
  <div class="container mt-3">
    <st-select-rating></st-select-rating>
    <st-search-filter   pholder="Търси по име"></st-search-filter>
    <st-person-list></st-person-list>

    <st-pagination @changePage="getFilteredPeople"></st-pagination>
  </div>
</template>

<script>
  import StPersonList from '../people/PersonList';
  import StPagination from '../common/Pagination';
  import StSearchFilter from '../common/SearchFilter'
  import StPersonFilters from '../people/PersonFilters';
  import StSelectRating from '../people/SelectRating';
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-discover-people',
    components: {
      StPersonFilters,
      StPersonList,
      StPagination,
      StSearchFilter,
      StSelectRating
    },
    beforeCreate() {
      this.$store.commit(mutations.SET_PEOPLE, []);
      this.$store.dispatch(actions.GET_POPULAR_PEOPLE);
    },
     created() {
      this.getFilteredPeople();
    },
    computed:{
      peopleResults(){
    return this.$store.state.people;
  }
    },
   
    methods: {
      getFilteredPeople(page = this.$store.state.currentPage) {
         this.$store.dispatch(actions.GET_POPULAR_PEOPLE, {page});
      },
    },
  };
</script>
