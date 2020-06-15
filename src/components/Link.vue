<template>
  <router-link
    :to="to"
    class="mr-4 text-lg underline text-blue-400 hover:text-purple-400"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    to: {
      required: true,
      type: String
    }
  }
};
</script>
