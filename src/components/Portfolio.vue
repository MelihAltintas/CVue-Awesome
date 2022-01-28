<template>
  <section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">
      Open Source Projects
    </h3>
    <div class="row">
      <div
        v-for="(item, index) in portfolioInfo"
        :key="index"
        class="timeline-item rounded ml-3 p-4 shadow col-md-6"
      >
        <div class="timeline-arrow"></div>
        <img :src="getImagePath(item.logo)" style="width:100%" />
        <p class="mt-3"> 
          {{ item.description }}
          <a :href="item.github"><i :class="`fab fa-github mb-2`" style="font-size: 20px;margin-right:10px"></i></a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getImagePath(image) {
      return require("@/assets/images/" + image);
    },
  },
  props: {
    portfolioInfo: {
      type: Object,
    },
  },
};
</script>

<style></style>
