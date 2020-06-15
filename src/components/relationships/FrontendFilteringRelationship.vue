<template>
  <Relationship
    :initiate-conflict="initiateConflict"
    :loading="loading"
    :resolved-conflicts="resolvedConflicts"
  />
</template>

<script>
import Relationship from "./Relationship";
export default {
  name: "FrontendFilteringRelationship",
  components: { Relationship },
  data() {
    return {
      resolvedConflicts: 0,
      loading: false
    };
  },
  methods: {
    initiateConflict() {
      this.loading = true;

      const seconds = 3;
      const start = new Date().getTime();
      let end = start;
      while (end - start < seconds * 1000) {
        end = new Date().getTime();
      }

      this.resolvedConflicts++;
      this.loading = false;
    }
  }
};
</script>
