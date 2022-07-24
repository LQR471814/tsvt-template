<script lang="ts">
    //@ts-ignore
    const production = import.meta.env.PROD
</script>

<main class="flex h-full w-full">
    <h1 class="font-semibold inline m-auto">Hello {production ? "production" : "world"}!</h1>
</main>

<style>
    :global(body) {
        margin: 0;
        height: 100vh;
    }
</style>
