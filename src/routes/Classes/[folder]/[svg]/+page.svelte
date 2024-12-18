<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    const { folder, svg } = $page.params;

    let svgContent = '';

    // Fetch SVG on the client-side after the component mounts
    onMount(async () => {
        try {
            const response = await fetch(`/Classes/${folder}/${svg}.svg`);
            if (response.ok) {
                svgContent = await response.text();
            } else {
                console.error('Failed to load SVG:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching SVG:', error);
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
