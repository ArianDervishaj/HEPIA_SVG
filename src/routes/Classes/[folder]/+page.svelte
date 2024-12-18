<script>
    export let data; // Receive `folder` from the load function
    import svgs from '$lib/svgs.json';
    import { base } from '$app/paths';

    const folder = data.folder;
    const svgFiles = svgs[folder] || [];
</script>

<h1>{folder}</h1>
{#if svgFiles.length > 0}
    <ul>
        {#each svgFiles as svg}
            <li>
                <!-- Remove `.svg` from the displayed URL -->
                <a href={`${base}/Classes/${folder}/${svg.replace('.svg', '')}`}>
                    {svg.replace('.svg', '')}
                </a>
            </li>
        {/each}
    </ul>
{:else}
    <p>No SVG files found for this folder.</p>
{/if}
