<script>
	export let title
</script>

<svelte:head>
	<title>{title ? title + " - " : ""}VizAgreste Bêta</title>
</svelte:head>

<slot></slot>
