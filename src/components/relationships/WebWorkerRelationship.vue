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
  name: "WebWorkerRelationship",
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
      this.$worker
        .run(
          // method which will run, external methods can't be used inside this method// eg: () => { external method }
          generateConflict,
          // array of params here: methods can't be passed
          []
        )
        .then(() => {
          this.resolvedConflicts++;
          this.loading = false;
        });
    }
  }
};
</script>
