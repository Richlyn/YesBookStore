<template>
  <div class="home">
    <Bookshelf/>
  </div>
</template>
 
<script>
// @ is an alias to /src
import Bookshelf from "@/components/Bookshelf.vue";

export default {
  name: "home",
  components: {
    Bookshelf
  }
};
</script>
