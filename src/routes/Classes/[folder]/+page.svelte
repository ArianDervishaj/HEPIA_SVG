<script>
    export let data;
    const { folder, svgs } = data;
</script>

<h1>{folder}</h1>
<ul>
    {#each svgs as svg}
        <li>
            <a href={`/Classes/${folder}/${svg}`}>{svg}</a>
        </li>
    {/each}
</ul>
<a href="/Classes">Back to Classes</a>
