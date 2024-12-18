<script>
    export let data;
    const { folders } = data;
</script>

<h1>Classes</h1>
<ul>
    {#each folders as folder}
        <li>
            <a href={`/Classes/${folder}`}>{folder}</a>
        </li>
    {/each}
</ul>
