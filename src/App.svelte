<script lang="ts">
    import Header from "./layouts/Header.svelte"
    import Footer from "./layouts/Footer.svelte"
    import { router } from "./utils/route";
    import "./routes"
    import Loading from "./components/Loading.svelte";
    
    const path = window.location.pathname
    let isLoading = true; 

    setTimeout(() => isLoading = false, 1500)

    let Page = router.render(path);

</script>
<main class="px-[50px] w-100 bg-gray-50" >
  <Header></Header>
  {#if isLoading}
  <Loading></Loading>
  {:else}
  <svelte:component this={Page} path={path} />  
  {/if}
  <Footer></Footer>
</main>


