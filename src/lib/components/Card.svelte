<script lang="ts">
	export let title_card:string
	export let description_card:string
	export let image_card:string
	export let image_card_alt:string
	export let link_card:string
</script>

	<div class="fr-col fr-col-md-4">
	  <div class="fr-card fr-enlarge-link">
		<div class="fr-card__body">
		  <div class="fr-card__content">
			<h3 class="fr-card__title">
			  <a href="{link_card}">{title_card}</a>
			</h3>
			<p class="fr-card__desc">{description_card}</p>
		  </div>
		</div>
		<div class="fr-card__header">
		  <div class="fr-card__img">
			<img class="fr-responsive-img" src={"images/" + image_card} alt={image_card_alt}>
		  </div>
		</div>
	  </div>
	</div>
