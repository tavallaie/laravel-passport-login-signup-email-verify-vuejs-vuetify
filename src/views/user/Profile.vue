<template>
    <v-container>
        <v-layout row>
            <router-view></router-view>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      name: "Profile",
      data() {
        return {
          user: {}
        };
      },
      created() {
        this.$store.dispatch("getUser");
      },
      computed: {
        username() {
          return this.$store.getters.user.name;
        }
      }
    };
</script>

<style scoped>
</style>