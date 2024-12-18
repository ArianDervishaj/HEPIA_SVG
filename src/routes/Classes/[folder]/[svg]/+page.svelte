<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    const { folder, svg } = $page.params;
    let svgContent = '';

    // Fetch the SVG content only on the client side
    onMount(async () => {
        const response = await fetch(`/HEPIA_SVG/Classes/${folder}/${svg}.svg`);
        if (response.ok) {
            svgContent = await response.text();
        } else {
            console.error('Failed to load SVG:', response.statusText);
        }
    });
</script>

<h1>{svg}</h1>

{#if svgContent}
    <!-- Render the SVG content inline -->
    <div class="svg-container">
        {@html svgContent}
    </div>
{:else}
    <p>Loading SVG...</p>
{/if}

<style>
    .svg-container {
        width: 100%;
        height: 600px;
    }
</style>
