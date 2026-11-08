<script lang="ts">
  import Navbar from '#lib/Navbar.svelte';
  import { site } from '#lib/site.ts';
</script>

<svelte:head>
  <title>zsk | social</title>
  <meta name="description" content="zsk social linkek" />
  <link rel="canonical" href={`${site.domain}/social/`} />
</svelte:head>

<Navbar />
<main class="main inner-page">
  <div class="brand brand-inner" aria-label={site.name}><h1>{site.name}</h1></div>
  <h2 class="page-subtitle">social</h2>
  <section class="card-grid social-grid" aria-label="social oldalak">
    {#each site.socials as social (social.url)}
      <article class="card">
        <h3>{social.title}</h3>
        <a class="card-link" href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.title} megnyitasa`}>
          megnyitas <span aria-hidden="true">↗</span>
        </a>
      </article>
    {/each}
  </section>
</main>
