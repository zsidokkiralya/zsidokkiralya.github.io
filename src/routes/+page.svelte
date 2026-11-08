<script lang="ts">
  import { site } from '#lib/site.ts';
</script>

<svelte:head>
  <title>zsk | home</title>
  <meta name="description" content={site.headline} />
  <link rel="canonical" href={`${site.domain}/`} />
</svelte:head>

<div class="home-wrap">
  <main class="main home-main">
    <div class="brand" aria-label={site.name}><h1>{site.name}</h1></div>
    <p class="headline">{site.headline}</p>
    <nav class="buttons" aria-label="pages">
      <a class="action-link" href="/about/">about</a>
      <a class="action-link" href="/projects/">projects</a>
      <a class="action-link" href="/social/">social</a>
    </nav>
  </main>
</div>
