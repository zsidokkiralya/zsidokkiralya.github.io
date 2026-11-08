<script lang="ts">
  import Navbar from '#lib/Navbar.svelte';
  import { site } from '#lib/site.ts';
</script>

<svelte:head>
  <title>zsk | projects</title>
  <meta name="description" content="zsk projects" />
  <link rel="canonical" href={`${site.domain}/projects/`} />
</svelte:head>

<Navbar />
<main class="main inner-page">
  <div class="brand brand-inner" aria-label={site.name}><h1>{site.name}</h1></div>
  <h2 class="page-subtitle">projects</h2>
  <section class="card-grid" aria-label="projects">
    {#each site.projects as project (project.url)}
      <article class="card">
        <h3>{project.title}</h3>
        <a class="card-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
          open <span aria-hidden="true">↗</span>
        </a>
      </article>
    {/each}
  </section>
</main>
