<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import panzoom from 'panzoom';

    const folder = $page.params.folder;
    const svg = $page.params.svg;
    const svgPath = `/Classes/${folder}/${svg}.svg`;

    let panzoomInstance;

    onMount(() => {
        const svgObject = document.getElementById('svg-object');
        svgObject.onload = () => {
            const svgDoc = svgObject.contentDocument;
            const svgElement = svgDoc.querySelector('svg');
            panzoomInstance = panzoom(svgElement);
        };
    });

    const zoomIn = () => panzoomInstance?.zoomIn();
    const zoomOut = () => panzoomInstance?.zoomOut();
    const reset = () => panzoomInstance?.reset();
</script>

<h1>{svg}</h1>
<div class="controls">
    <button on:click={zoomIn}>Zoom In</button>
    <button on:click={zoomOut}>Zoom Out</button>
    <button on:click={reset}>Reset</button>
</div>
<div>
    <object id="svg-object" data={svgPath} type="image/svg+xml" title={svg}></object>
</div>
<a href={`/Classes/${folder}`}>Back to {folder}</a>
