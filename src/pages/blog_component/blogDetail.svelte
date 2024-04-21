<script lang="ts">
    import { blogs, type blog } from "../../utils/blog";
    const idBlog = location.pathname.split("/")[2],
        blogContent: blog = blogs.find((blog) => blog.id == idBlog) as blog;
</script>

<main>
    <div
        class="w-[880px] text-gray-700 font-sans mx-auto rounded-md px-8 py-4 h-max"
    >

        <div class="pl-4 py-2 border-gray-300 mt-2 box-shadow">
            <a href="/blog">
                <button
                    class="hover:shadow-lg border-black p-2 mb-4 rounded-xl border-2 text-xl"
                >
                    <i class="bi bi-arrow-left"></i> Back
                </button>
            </a>
    
            <h1 class="text-3xl font-bold border-b-2 pb-4">
                {blogContent.title}
            </h1>
            <p class="my-4 text-gray-500 font-bold">{blogContent.publishedAt} oleh <span>{blogContent.author}</span></p>
            {#each blogContent.paragraphs as blogParagraph}
                <p class="mt-4 text-xl leading-9">
                    {blogParagraph}
                </p>
            {/each}
        </div>
    </div>
</main>
