<template>
  <div class="row">
    <div class="col-sm-4">
        <st-select-year @selectRating="selectRating"></st-select-year>
    </div>
    <div class="col-sm-4">
    </div>
        <!-- <st-select-genres @selectName="selectName"></st-select-genres> -->
  </div>
</template>

<script>
import StSelectRating from './SelectRating';

export default {
    name:'st-person-filters',
    data(){
        return{
            filters:{
                rating:'ascendingRating'
            }
        }
    },
    created(){
    this.getFilteredPeople(); 
    },
    components:{
        StSelectRating
    },
    methods:{
        getFilteredPeople(){
      this.$store.dispatch(actions.GET_FILTERED_PEOPLE, this.filters);
    },
    changeFilters(key, value){
      this.filters[key] = value;
      this.getFilteredPeople();
    },
      selectRating(value){
      this.changeFilters('rating', parseInt(value));
    },

    }

}







</script>