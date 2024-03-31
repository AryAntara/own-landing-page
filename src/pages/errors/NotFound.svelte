<script lang="ts">
    export let path: string;
</script>
<main>
    <div class="w-[880px] text-gray-700 font-sans mx-auto rounded-md p-8 h-max">
        <div
            class="pl-4 py-2 border-l-8 border-gray-300 bg-gray-100 font-mono mt-2 box-shadow"
        >
            // Page not found<br />
            <span class="text-red-900">const</span> page =
            <span class="text-blue-900">()</span>
            => <span class="text-purple-900">searchPage</span>("{path}");<br />
            page.<span class="text-purple-900">render</span>().<span class="text-purple-900">capture</span>();
        </div>
    </div>
</main>
