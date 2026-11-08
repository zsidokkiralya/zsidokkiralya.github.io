<script lang="ts">
  import Navbar from '#lib/Navbar.svelte';
  import { site } from '#lib/site.ts';
</script>

<svelte:head>
  <title>zsk | rolam</title>
  <meta name="description" content={site.about} />
  <link rel="canonical" href={`${site.domain}/about/`} />
</svelte:head>

<Navbar />
<main class="main inner-page">
  <div class="brand brand-inner" aria-label={site.name}><h1>{site.name}</h1></div>
  <h2 class="page-subtitle">rolam</h2>
  <p class="bio">{site.about}</p>
</main>
