<script lang="ts">
	import "../app.scss"
	import Header from "$lib/components/Header.svelte"
	import NavBar from "$lib/components/NavBar.svelte"
	import Year from "$lib/components/Year.svelte"
	import Footer from "$lib/components/Footer.svelte"
</script>
<Header />
<!--<NavBar />-->
<main id="content">
		<div class="fr-container fr-mt-8v fr-mt-md-14v fr-mb-2v fr-mb-md-8v">
			<div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
				<div class="fr-col-20 fr-col-md-10">
					<slot></slot>
				</div>
			</div>
		</div>
</main>

<Footer />

