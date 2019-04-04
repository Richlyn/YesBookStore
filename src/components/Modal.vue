<template>
  <div>
    <div class="container">
      <div class="modal fade and carousel slide" :id="'lightBox' + index">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <ol class="carousel-indicators">
                <!-- <li data-slide-to="{{book.detalle}}" class="active"></li> -->
              </ol>
              <div class="carousel-inner">
                <div class="item">
                  <img :src="aBook.detalle">
                </div>
              </div>
              <!-- /.carousel-inner -->
              <a
                class="left carousel-control"
                :href="'#lightBox' + index"
                role="button"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a
                class="right carousel-control"
                :href="'#lightBox' + index"
                role="button"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["lightBox", "index"]
};
</script>

<style>
</style>
