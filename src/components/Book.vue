<template>
  <div>
    <div class="container">
      <div class="d-flex flex-row justify-content-around flex-wrap">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="flip-card" :src="aBook.portada">
            </div>
            <div class="flip-card-back">
              <h1>{{ aBook.titulo }}</h1>
              <p>{{ aBook.descripcion }}</p>
              <b-button @click="toggleModal">Más Información</b-button>
            </div>
          </div>
        </div>
        <!-- Modal Component-->
        <b-modal v-model="showModal">
          <img :src="aBook.detalle">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide img :src="aBook.detalle"></b-carousel-slide>
          </b-carousel>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["aBook", "index"],
  data() {
    return {
      showModal: false
    };
  },
  slide() {
    return { slide: 0, sliding: null };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */

.flip-card-front {
  background-color: grey;
  color: black;
}

/* Style the back side */

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
.b-modal {
  position: fixed;
}
img {
  width: 100%;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black;
}
</style>

