<template>
<div>
  <div class="row mt-3">
      <st-person-item v-if="peopleResults.length"
          v-for="(person) in peopleResults"
          :key="person.id"
          :id="person.id"
          :popularity="person.popularity"
          :name="person.name"
          :poster="person.profile_path"
      >
    </st-person-item>
  </div>
</div>
</template>

<script>
  import StPersonItem from './PersonItem';
  import actions from '../../store/action-types';

  export default {
    name: 'st-person-list',
    components: {
      StPersonItem
    },
    computed: {
      peopleResults(){
        return this.$store.state.people;
      }
    }
  };
</script>