<template>
  <div>
    <h1 class="text-center text-lg md:text-3xl my-8">
      Mr User And Ms. Web Worker's relationship
    </h1>
    <div class="flex justify-center container mx-auto">
      <MrUser />
      <WebWorkerRelationship />
      <MsWebWorker />
    </div>
  </div>
</template>

<script>
import MrUser from "../components/characters/MrUser";
import MsWebWorker from "../components/characters/MsWebWorker";
import WebWorkerRelationship from "../components/relationships/WebWorkerRelationship";
export default {
  name: "WebWorkerPage",
  components: { WebWorkerRelationship, MsWebWorker, MrUser }
};
</script>
