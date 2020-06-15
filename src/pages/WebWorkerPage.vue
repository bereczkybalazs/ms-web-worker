<template>
  <div>
    <h1 class="text-center text-3xl my-8">
      Mr User And Ms. Web Worker's relationship
    </h1>
    <div class="flex justify-center container mx-auto">
      <MrUser class="w-1/4" />
      <WebWorkerRelationship class="w-2/4" />
      <MsWebWorker class="w-1/4" />
    </div>
  </div>
</template>

<script>
import MrUser from "../components/characters/MrUser";
import MsWebWorker from "../components/characters/MsWebWorker";
import WebWorkerRelationship from "../components/WebWorkerRelationship";
export default {
  name: "WebWorkerSearch",
  components: { WebWorkerRelationship, MsWebWorker, MrUser }
};
</script>
