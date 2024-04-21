<script lang="ts">
    import WaIcon from "../components/Icons/wa.svelte";
    import EmailIcon from "../components/Icons/email.svelte";
    import GithubIcon from "../components/Icons/github.svelte";
    import TelegramIcon from "../components/Icons/telegram.svelte";
</script>

<main>
    <div class="w-[880px] text-gray-700 mx-auto rounded-md p-8 h-max">
        <h1 class="text-3xl font-bold mt-2 box-shadow">
            Do you want to contact me?
        </h1>

        <div class="mt-8">
            <p class="text-xl leading-9">
                Whether you have a question, some feedback, or just want to say
                hello, I'd be happy to hear from you! Feel free to reach out
                using the convenient options below.
            </p>

            <div class="flex mt-8">
                <a href="https://wa.me/6282"  target="_blank" class="hover:shadow-2xl border-2 border-black p-4 rounded-md mr-4">
                    <svelte:component this={WaIcon} />
                </a>
                <a href="mailto:ikomangary@x.com" class="hover:shadow-2xl border-2 border-black p-4 rounded-md mr-4">
                    <svelte:component this={EmailIcon} />
                </a>
                <a href="https://github.com/AryAntara" target="_blank" class="hover:shadow-2xl border-2 border-black p-4 rounded-md mr-4">
                    <svelte:component this={GithubIcon} />
                </a>
                <a href="https://t.me/HERONMAN" target="_blank" class="hover:shadow-2xl border-2 border-black p-4 rounded-md mr-4">
                    <svelte:component this={TelegramIcon} />
                </a>
            </div>
        </div>
    </div>
</main>
