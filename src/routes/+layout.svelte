<script lang="ts">
  import '../styles/global.css';
  import { site } from '#lib/site.ts';
  let { children } = $props();
</script>

<svelte:head>
  <meta property="og:site_name" content="zskarchive" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={site.name} />
  <meta property="og:description" content={site.headline} />
</svelte:head>

<div class="site-shell">
  <div class="site-content">
    {@render children()}
  </div>
  <footer class="site-footer">
    <span>zsk @ 2026</span>
    <span>forked from:<a href="https://pearoo.dev" target="_blank" rel="noopener noreferrer">pearoo.dev</a></span>
  </footer>
</div>
