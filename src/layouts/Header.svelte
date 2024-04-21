<script lang="ts">
    import { router } from "../utils/route";
    const routeList = router.list();
</script>

<main>
    <div class="w-full">
        <nav
            class="container relative p-8 mx-auto w-[680px] lg:justify-between xl:px-0"
        >
            <div class="flex justify-between">
                <div
                    class="font-semibold
        inline-block mb-4
        no-underline rounded-md dark:text-gray-200
        outline-none dark:bg-gray-800"
                >
                    <img
                        class="shadow-lg w-[200px] h-[200px] rounded-md object-cover object-center border-2 border-gray-700"
                        src="https://raw.githubusercontent.com/AryAntara/own-landing-page/main/public/images/profile.jpg"
                        alt=""
                    />
                </div>
                <div class="text-wrap w-[400px] ">
                    <p class="text-dark font-bold text-5xl mb-2">I Komang Ary Antara</p>
                    <a href="github.com/AryAntara" class="font-bold text-gray-500">@AryAntara</a>
                    <div class="flex mt-2">
                        <div class="w-[40px] h-[40px] bg-gray-500"></div>
                        <div class="w-[40px] h-[40px] bg-gray-400"></div>
                        <div class="w-[40px] h-[40px] bg-gray-300"></div>
                        <div class="w-[40px] h-[40px] bg-gray-200"></div>
                        <div class="w-[40px] h-[40px] bg-gray-100"></div>
                    </div>
                </div>
            </div>
            <div>
                <ul class="flex justify-between">
                    {#each routeList as route}
                        <li class="mr-3 nav__item">
                            <a
                                href={route.path}
                                class="
                                {!route.active
                                    ? 'text-gray-700 bg-gray-200 outline-none'
                                    : 'text-gray-500 bg-gray-100 outline-none dark:bg-gray-800'}
                                    font-semibold
                                    inline-block px-4 py-2 text-lg font-normal
                                    no-underline rounded-md dark:text-gray-200
                                    hover:text-gray-500
                                "
                            >
                                <div class="flex justify-between items-center">
                                    <i class="text-2xl mr-2 {route.iconClass}"
                                    ></i>
                                    <p>{route.name}</p>
                                </div>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </nav>
    </div>
</main>
