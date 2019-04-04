<template>
  <div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class="flip-card" :src="aBook.portada">
        </div>
        <div class="flip-card-back">
          <h1>{{ aBook.titulo }}</h1>
          <p>{{ aBook.descripcion }}</p>
          <button
            type="button"
            class="btn btn-primary"
            :href="'#lightBox' + index"
            data-toggle="modal"
          >Más Información</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "Book",
  props: ["aBook", "index"],
  components: {
    Modal
  }
};
</script>

<style>
</style>
