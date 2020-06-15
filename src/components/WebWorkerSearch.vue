<template>
  <div>
    <h1 class="text-center text-3xl my-8">
      Mr User And Ms. Web Worker's relationship
    </h1>
    <div class="flex justify-center">
      <MrUser />
      <Relationship />
      <MsWebWorker />
    </div>
  </div>
</template>

<script>
import MrUser from "./characters/MrUser";
import MsWebWorker from "./characters/MsWebWorker";
import Relationship from "./Relationship";
export default {
  name: "WebWorkerSearch",
  components: { Relationship, MsWebWorker, MrUser }
};
</script>
