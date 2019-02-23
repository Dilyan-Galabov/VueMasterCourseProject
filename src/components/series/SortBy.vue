<template>
  <b-form-group
      label="Сортирай по: "
      label-for="sortBy"
    >
    <b-form-select @change="sortBy" id="sortBy" v-model="selected" :options="options" class="mb-3" />
  </b-form-group>
</template>

<script>
export default {
  name: 'st-sort-by',
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Сортирай по' },
        { value: 'vote_average.asc', text: 'Възходящ рейтинг' },
        { value: 'vote_average.desc', text: 'Низходящ рейтинг' }
      ]
    }
  },
  methods: {
    sortBy(value){
      console.log(value);
        this.$emit('sortBy', value);
    }
  }
}
</script>