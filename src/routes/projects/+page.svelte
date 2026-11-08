<script lang="ts">
  import Navbar from '#lib/Navbar.svelte';
  import { site } from '#lib/site.ts';
</script>

<svelte:head>
  <title>zsk | projektek</title>
  <meta name="description" content="zsk projektek" />
  <link rel="canonical" href={`${site.domain}/projects/`} />
</svelte:head>

<Navbar />
<main class="main inner-page">
  <div class="brand brand-inner" aria-label={site.name}><h1>{site.name}</h1></div>
  <h2 class="page-subtitle">projektek</h2>
  <section class="card-grid" aria-label="projektek">
    {#each site.projects as project (project.url)}
      <article class="card">
        <h3>{project.title}</h3>
        <a class="card-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} megnyitasa`}>
          megnyitas <span aria-hidden="true">↗</span>
        </a>
      </article>
    {/each}
  </section>
</main>
