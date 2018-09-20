<template lang="pug">
  .test-component
    h1 This is a test component
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style lang="sass" scoped>
  .test-component
      color: $_color
</style>
