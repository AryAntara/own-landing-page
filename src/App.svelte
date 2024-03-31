<script lang="ts">
    import Header from "./layouts/Header.svelte"
    import Footer from "./layouts/Footer.svelte"
    import { router } from "./utils/route";
    import "./routes"
    
    const path = window.location.pathname
    let Page = router.render(path);
    
</script>
<main class="px-[50px] w-100 bg-gray-50" >
  <Header></Header>
  <svelte:component this={Page} />  
  <Footer></Footer>
</main>


