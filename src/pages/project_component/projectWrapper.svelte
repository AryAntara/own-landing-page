<script lang="ts">
    import type {Project} from "../../utils/project";
    export let project: Project;
</script>

<div class="w-[400px] border-4 border-gray-500 border-dashed rounded-xl p-4">
    <h3 class="text-2xl font-bold mt-2">{project.title}</h3>
    <p class="text-xl leading-9 mt-4">
        {project.description}
    </p>
    <div class="mt-4 flex">
        {#each project.technologies as technology}
            <div class="mx-1">
                <svelte:component this={technology.svgElement}/>
            </div>
        {/each}
    </div>
    <div class="flex justify-between mt-8">
        <a href="{project.webLink ?? "#"}" class='{!project.webLink ? 'border-gray-400 text-gray-400' : 'border-black hover:bg-black hover:text-white'} border-2 rounded-xl p-2 font-semibold px-4' target="_blank">view</a>
        <a href="{project.sourceLink ?? "#"}" class="{!project.sourceLink ? 'border-gray-400 text-gray-400' : 'border-black hover:bg-black hover:text-white'} border-2 rounded-xl p-2 font-semibold px-4" target="_blank">source</a>
    </div>
</div>
