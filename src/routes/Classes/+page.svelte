<script>
	import svgs from '$lib/svgs.json';
	import { base } from '$app/paths';

	// List all available folders
	const folders = Object.keys(svgs);
</script>

<h1>Classes</h1>
<ul>
	{#each folders as folder}
		<li>
			<a href={`${base}/Classes/${folder}`}>{folder}</a>
		</li>
	{/each}
</ul>
