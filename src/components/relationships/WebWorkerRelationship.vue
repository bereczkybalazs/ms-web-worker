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
          () => {
            const seconds = 3;
            const start = new Date().getTime();
            let end = start;
            while (end - start < seconds * 1000) {
              end = new Date().getTime();
            }
            return "conflict resolved";
          },
          [] // array of params here: methods can't be passed
        )
        .then(result => {
          console.log(result);
          this.resolvedConflicts++;
          this.loading = false;
        });
    }
  }
};
</script>
