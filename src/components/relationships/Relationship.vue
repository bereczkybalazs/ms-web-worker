<template>
  <div class="flex justify-center flex-col items-center">
    <div class="h-64 mb-32">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/express-ssr-6e0e3.appspot.com/o/heart.png?alt=media&token=cf52ec09-cd7c-4d0b-9724-4e3dc6de7823"
        class="max-w-sm mx-8 mb-8"
        alt="Mr. User and Ms. Web Worker's relationship"
        ref="love"
      />
    </div>
    <div class="flex flex-col bg-white">
      <button
        class="bg-red-800 text-white p-4 rounded mb-4"
        @click="initiateConflict"
      >
        Initiate a conflict
      </button>
    </div>
    <div>
      <h3 class="text-lg mb-4">Resolved conflicts: {{ resolvedConflicts }}</h3>
    </div>
    <div v-show="loading">
      Resolving in progress
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
      if (this.$refs.love) {
        const isSmall = this.$refs.love.classList.contains("max-w-sm");
        const isVerySmall = this.$refs.love.classList.contains("max-w-xs");
        if (isSmall) {
          this.$refs.love.classList.replace("max-w-sm", "max-w-xs");
        } else if (isVerySmall) {
          this.$refs.love.classList.replace("max-w-xs", "max-w-sm");
        }
      }
    }, 100);
  }
};
</script>
