<script lang="ts">
    import ProjectWrapper from "./project_component/projectWrapper.svelte";
    import { projects } from "../utils/project";
</script>

<main>
    <div class="w-[880px] text-gray-700 mx-auto rounded-md p-8 h-max">
        <h1 class="text-3xl font-bold mt-2 box-shadow">What have i made?</h1>
        <div class="flex mt-8">
            <p class="text-xl leading-9 text-lg">
                As a <span class="text-xl font-bold"> Web Developer</span>. I
                was made some projects. You can see below!
            </p>
        </div>

        <div class="w-100% grid grid-cols-2 gap-4 mt-8">
            {#each projects as project}
                <ProjectWrapper {project}></ProjectWrapper>
            {/each}
        </div>
    </div>
</main>
