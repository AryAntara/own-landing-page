<script lang="ts">
    import blogs from "../blogs/metadata";
</script>

<main>
    {#each blogs as blog}
        <div
            class="w-[880px] text-gray-700 font-sans mx-auto rounded-md px-8 py-4 h-max"
        >
            <div class="pl-4 py-2 border-l-8 border-gray-300 mt-2 box-shadow">
                <h1 class="text-3xl font-bold border-b-2 pb-4">{blog.title}</h1>
                <p class="mt-4 text-xl leading-9">
                    {blog.shortDescription}
                </p>
                <div class="mt-4">
                    <a
                        href="/blog/{blog.id}"
                        class="rounded-md py-2 mt-4 text-xl underline"
                    >
                        Read Detail
                    </a>
                </div>
            </div>
        </div>
    {/each}
</main>
