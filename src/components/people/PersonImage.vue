<template>
    <div class="image-container">
      <img :src="getPoster" class="person-thumbnail"/>
    </div>
</template>

<script>
  import constants from '../../constants';
  export default {
    name: 'st-person-image',
    props: {
      poster: {
        type: String,
      },
    },
    computed: {
      getPoster() {
        let poster = this.poster;
        if (!poster) {
          poster = '/static/images/default.jpg';
        } else {
          poster = constants.basePosterURL + poster;
        }
        return poster;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .person-thumbnail {
    width: 285px;
    height: 300px;
  }
</style>
