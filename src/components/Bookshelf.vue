<template>
  <!--search bar-->
  <div>
    <div id="search" class="d-flex justify-content-end p-5">
      <label style="height:0rem">
        Search here:
        <input type="text" v-model="search">
      </label>
    </div>
    <!--Content-->
    <div class="d-flex flex-row justify-content-around flex-wrap">
      <div v-for="(book, index) in filteredBooks" :key="book.id">
        <Book :aBook="book" :index="index"/>
        <Modal/>
      </div>
    </div>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";
export default {
  name: "bookshelf",
  components: {
    Book
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
        // eslint-disable-next-line
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
/* search bar */
#search input[type="text"] {
  width: 100%;

  display: inline-block;
  border: none;
  background: #f1f1f1;
}

#search input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>
