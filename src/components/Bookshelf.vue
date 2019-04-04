<template>
  <!--search bar-->
  <div>
    <div id="search" class="d-flex">
      <label style="height:0rem">
        Search here:
        <input type="text" v-model="search">
      </label>
    </div>
    <!--Content-->
    <div class="d-flex flex-row justify-content-around flex-wrap">
      <div v-for="(book, index) in filteredBooks" :key="book.id">
        <Book :aBook="book" :index="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
import Modal from "@/components/Modal.vue";
export default {
  name: "bookshelf",
  components: {
    Book,
    Modal
  },
  data() {
    return {
      urlBooks: "https://api.myjson.com/bins/udbm5",
      books: [],
      search: ""
    };
  },
  computed: {
    filteredBooks: function() {
      if (this.search === "") {
        return this.books;
      }
      return this.books.filter(book => {
        return (
          book.titulo.toLowerCase().includes(this.search.toLowerCase()) ||
          book.descripcion.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  methods: {
    getData(url) {
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors"
      })
        .then(response => {
          //console.log(2);
          return response.json();
        })

        .then(data => {
          // console.log(3);
          this.books = data.books; //pulls the book with index 0
          // eslint-disable-next-line
          console.log("books", this.books);
        })
        .catch(err => console.log(err));
    }
  },

  //find way to join mounting using ( includes & titles )
  mounted() {
    this.getData(this.urlBooks);
  }
};
</script>

<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

.flip-card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: transparent;
  width: 300px;
  height: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

/* This container is needed to position the front and back side */

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

.modal.and.carousel {
  position: fixed;
}
.item img {
  width: 100%;
}
</style>
