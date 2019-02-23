<template>

 <div class="container mt-3">
    <st-person-list></st-person-list>
    <st-pagination @changePage="getPopularPeople"></st-pagination>
  </div>
</template>

 <script>

import actions from '../../store/action-types';
import StPersonList from './PersonList';
import StPagination from '../common/Pagination';
import mutations from '../../store/mutation-types';


  export default {
    components:{
      StPersonList,
      StPagination,
    },

  beforeCreate(){
    this.$store.commit(mutations.SET_RESULT_TYPE,'person');
    this.$store.commit(mutations.SET_PEOPLE, []);
  },
    created(){
      this.getPopularPeople();
    },
    methods:{
      getPopularPeople(page = this.$store.state.currentPage){
        this.$store.dispatch(actions.GET_POPULAR_PEOPLE,{page});
      },
    }
  };
</script>

<style>

.col-md-4{
  padding: 2px;
  margin-top: 7px;
  display: inline-block;

}

</style>
