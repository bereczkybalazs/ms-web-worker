<template>
  <div class="flex justify-center flex-col items-center w-2/4 lg:w-2/3">
    <div class="mb-32">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/express-ssr-6e0e3.appspot.com/o/heart.png?alt=media&token=cf52ec09-cd7c-4d0b-9724-4e3dc6de7823"
        class="w-1/2 mx-8 mb-8 mx-auto"
        alt="Mr. User and Ms. Web Worker's relationship"
        ref="love"
      />
    </div>
    <div
      class="fixed bottom-0 p-4 bg-white border-2 border-solid border-red-400 rounded-t bg-yellow-400"
    >
      <h3 class="text-xl font-bold text-center mb-2">Conflict robot</h3>
      <div class="flex flex-col">
        <button
          class="bg-red-800 text-white p-4 rounded mb-4"
          @click="initiateConflict"
        >
          Initiate a conflict
        </button>
      </div>
      <div>
        <h3 class="text-lg">Resolved conflicts: {{ resolvedConflicts }}</h3>
      </div>
      <div :class="loading ? 'opacity-100' : 'opacity-0'" class="text-xs">
        Resolving in progress...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Relationship",
  props: {
    initiateConflict: {
      type: Function,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    resolvedConflicts: {
      type: Number,
      required: true
    }
  },
  mounted() {
    setInterval(() => {
      const largeClass = "w-1/2";
      const smallClass = "w-1/3";
      if (this.$refs.love) {
        const isFullWidth = this.$refs.love.classList.contains(largeClass);
        const isMediumWidth = this.$refs.love.classList.contains(smallClass);
        if (isFullWidth) {
          this.$refs.love.classList.replace(largeClass, smallClass);
        } else if (isMediumWidth) {
          this.$refs.love.classList.replace(smallClass, largeClass);
        }
      }
    }, 100);
  }
};
</script>
