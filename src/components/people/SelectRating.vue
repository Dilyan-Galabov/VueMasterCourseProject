<template>
  <b-form-group
      label="Rating"
      label-for="selectRating"
    >
    <b-form-select @change="selectRating" id="selectRating" v-model="selected" :options="options" class="mb-3" />
  </b-form-group>
</template>

<script>

import actions from '../../store/action-types';

export default {
  name: 'st-select-rating',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Сортирай по рейтинг' },
        { value: 'ascendingRating', text: 'Възходящ рейтинг' },
        { value: 'descendingRating', text: 'Низходящ рейтинг' },
      ]
    }
  },
  methods: {
    selectRating(value){
      if(value){
        this.$emit('selectRating', value);
      }
    }
  }
}
</script>