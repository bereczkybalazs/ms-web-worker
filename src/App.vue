<template>
  <div id="app">
    <ul class="flex container mx-auto justify-center my-4">
      <Link to="/">
        Home
      </Link>
      <Link to="/mrs-frontend-filtering">
        Mrs. Frontend Filtering
      </Link>
      <Link to="/ms-web-worker">
        Ms. Web Worker
      </Link>
    </ul>
    <router-view />
  </div>
</template>

<script>
import Link from "./components/Link";
export default {
  name: "App",
  components: { Link }
};
</script>
