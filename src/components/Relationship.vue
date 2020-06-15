<template>
  <div class="flex justify-center flex-col items-center">
    <div class="h-64">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/express-ssr-6e0e3.appspot.com/o/heart.png?alt=media&token=cf52ec09-cd7c-4d0b-9724-4e3dc6de7823"
        class="max-w-sm mx-8 mb-8"
        alt="Mr. User and Ms. Web Worker's relationship"
        ref="love"
      />
    </div>
    <div class="flex flex-col bg-white">
      <input
        type="text"
        class="border-2 border-blue-700 border-solid rounded p-4 mb-4"
      />
      <button class="bg-blue-700 text-white py-4 rounded">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Relationship",
  mounted() {
    setInterval(() => {
      const isSmall = this.$refs.love.classList.contains("max-w-sm");
      const isVerySmall = this.$refs.love.classList.contains("max-w-xs");
      if (isSmall) {
        this.$refs.love.classList.replace("max-w-sm", "max-w-xs");
      } else if (isVerySmall) {
        this.$refs.love.classList.replace("max-w-xs", "max-w-sm");
      }
    }, 100);
  }
};
</script>
