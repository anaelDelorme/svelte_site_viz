<svelte:head>
	<title>VizAgreste Bêta</title>
</svelte:head>

<h1>Les Viz d'Agreste</h1>

<script>
	import Card from "$lib/components/Card.svelte"
	import cardsData from "$lib/components/list_viz.json"
</script>
<div class="fr-grid-row fr-grid-row--gutters fr-mb-1w">

  {#each cardsData as card (card.title_card)}
	<Card title_card={card.title_card} description_card={card.description_card} image_card={card.image_card} image_card_alt={card.image_card_alt} link_card={card.link_card}/>
  {/each}

</div>