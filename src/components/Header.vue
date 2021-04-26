<template>
  <nav class="nav" flat tile>
    <v-toolbar dense>
      <v-btn class="" color="red" dark>
        Covid Tracker
        <v-icon dark>
          md_coronavirus
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-icon color="red">md_warning</v-icon>
    </v-toolbar>
  </nav>
</template>

<script>
  export default {
    name: "Header",

  }
</script>

<style scoped>
</style>