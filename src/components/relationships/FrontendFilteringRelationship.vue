<template>
  <Relationship
    :initiate-conflict="initiateConflict"
    :loading="loading"
    :resolved-conflicts="resolvedConflicts"
  />
</template>

<script>
import Relationship from "./Relationship";
import generateConflict from "./generateConflict";
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

      generateConflict();

      this.resolvedConflicts++;
      this.loading = false;
    }
  }
};
</script>
