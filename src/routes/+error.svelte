<script lang="ts">
  import { page } from '$app/state';
  import Navbar from '#lib/Navbar.svelte';
</script>

<svelte:head>
  <title>{page.status} | zsk</title>
</svelte:head>

<Navbar />
<main class="main inner-page">
  <div class="brand brand-inner" aria-label="zsk"><h1>zsk</h1></div>
  <h2 class="page-subtitle">{page.status}</h2>
  <p class="bio">ez az oldal nem talalhato :3</p>
</main>
