<script lang="ts">
    import { base } from "$app/paths"
</script>

<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">Ministère <br />de l'Agriculture <br />et de la Souveraineté <br />Alimentaire </p>
                        </div>
                        <div class="fr-header__navbar">
                            <img src="images/logo_agreste.svg" alt="Logo Agreste" class="logo_agreste_smartphone" />
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a
                            href="{base}/"
                            title="Accueil - VizAgreste Bêta - Ministère de l'Agriculture et de la Souveraineté alimentaire"
                        >
                        <div class="fr-header__service-title">
                            <p>VizAgreste</p>
                            <span class="fr-badge fr-badge--success fr-badge--no-icon">Bêta</span>
                          </div>
                        </a>
                        <p class="fr-header__service-tagline">
                            Les dataviz de la statistique agricole
                        </p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__search fr-modal" id="modal-541">
                        <div class="fr-container fr-container-lg--fluid">
                            <img src="images/logo_agreste.svg" alt="Logo Agreste" class="logo_agreste" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="fr-header__menu fr-modal"
        id="modal-543"
        aria-labelledby="button-544"
    >
        <div class="fr-container">
            <button
                class="fr-btn--close fr-btn"
                aria-controls="modal-543"
                title="Fermer"
            >
                Fermer
            </button>
            <div class="fr-header__menu-links"></div>
            <nav
                class="fr-nav"
                id="navigation-547"
                role="navigation"
                aria-label="Menu principal"
            >
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a class="fr-nav__link" href="{base}/" target="_self"
                            >Les viz</a
                        >
                    </li>
                    <li class="fr-nav__item">
                        <a class="fr-nav__link" href="{base}/contact" target="_self"
                            >Contact</a
                        >
                    </li>
                    <li class="fr-nav__item">
                        <a class="fr-nav__link" href="{base}/mentions" target="_self"
                            >Mentions légales</a
                        >
                    </li>

                </ul>
            </nav>
        </div>
    </div>
</header>
