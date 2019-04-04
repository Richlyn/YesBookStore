<template>
  <div>
    <!--logo-->
    <div class="d-flex justify-content-around align-items-center">
      <div id="top_bookstore" class="d-flex">
        <div class="logo">
          <a href="index.htmsl">
            <img src="../assets/logo2.png" alt="logo">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
/* header collage */
#collage {
  position: relative;
  max-width: 800px; /* Maximum width */
  margin: 5rem;
  padding: 5rem;
}
/* search bar */
#search input[type="text"] {
  width: 100%;
  padding: 15px;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

#search input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>
