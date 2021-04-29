<template>
  <div>
    <v-select @change='onChange()' v-model="selected" :hint="`${selected.Country}, ${selected.CountryCode}`"
      :items="countries" item-text="Country" item-value="ID" label="Select" persistent-hint return-object single-line>
    </v-select>
  </div>
</template>

<script>
  export default {
    name: 'CountrySelect',
    props: ['countries'],
    data() {
      return {
        selected: 0,
      }
    },
    methods: {
      onChange() {
        let cArr = this.countries;
        let itemID = this.selected.ID;
        const country = cArr.find((item) => item.ID === itemID)
        // console.log(country);
        this.$emit ('get-country',country);

      }
    }
  }
</script>