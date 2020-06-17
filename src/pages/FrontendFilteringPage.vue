<template>
  <div>
    <h1 class="text-center text-lg md:text-3xl my-8">
      Mr User And Mrs. Frontend Filtering's relationship
    </h1>
    <div class="flex justify-center container mx-auto">
      <MrUser />
      <FrontendFilteringRelationship />
      <MrsFrontendFiltering />
    </div>
  </div>
</template>

<script>
import MrUser from "../components/characters/MrUser";
import FrontendFilteringRelationship from "../components/relationships/FrontendFilteringRelationship";
import MrsFrontendFiltering from "../components/characters/MrsFrontendFiltering";

export default {
  name: "FrontendFilteringPage",
  components: { MrsFrontendFiltering, FrontendFilteringRelationship, MrUser }
};
</script>
