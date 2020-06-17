<template>
  <figure class="w-1/4 lg:w-1/6">
    <img :src="url" :alt="name" />
    <figcaption class="text-center text-lg mt-4">
      {{ name }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "Character",
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
</script>
