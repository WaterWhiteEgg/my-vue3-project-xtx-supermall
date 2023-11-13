<template>
  <loginTitle></loginTitle>
  <loginApi></loginApi>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

import loginApi from "./child/loginApi.vue";
import loginTitle from "./child/loginTitle.vue";

</script>

<style scoped></style>