<template>
  <div class="col-md-4">
     <div class="card" style="width: 18rem;">
         <st-person-image :poster="poster"></st-person-image>
  <div class="card-body">
    <h5 class="card-title"> {{name}}</h5>
    <!-- <p class="text-black-50 overview-info"> {{overview}} </p> -->
    <p class="card-text">Rating: <b>{{popularity}}</b></p>
  </div>
</div>
    </div>
</template>
<script>
  import mutations from '../../store/mutation-types';
   import StPersonImage from './PersonImage';

  export default {
      name:'st-person-item',
        components:{
        StPersonImage
    },
    props: {
        poster:{
          type:String,  
        },
      id: Number,
      name: String,
      popularity: Number
    },
  
  };
</script>



<style>
.col-md-4{
  padding-top: 5px;
  padding-left: 55px;
  padding-bottom: 15px;
  margin-top: 7px;
  display: inline-block;

}
</style>

