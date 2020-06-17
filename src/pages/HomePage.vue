<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-3xl mb-8">
      Relationships of Mr. User
    </h1>
    <MrUser />
  </div>
</template>

<script>
import MrUser from "../components/characters/MrUser";
export default {
  name: "HomePage",
  components: { MrUser }
};
</script>
