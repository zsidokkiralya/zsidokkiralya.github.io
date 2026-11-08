# zskarchive.me

sveltekit 3 + svelte 5 alapu, lassan animalt szivarvanyos bemutatkozo oldal, a pearoo.dev / rnxm.github.io eredeti elrendezese alapjan.

## tartalom

- fooldal: zsk, `sysadmin // sometimes a developer // :3`
- rolam: `avid wrongdoer of exactly nothing :3`
- projektek: beatcloud, dmann, skywave
- social: github, steam
- lab: `src/lib/site.ts` alatt szerkesztheto minden nev, szoveg es url
- kep es eredeti pearoo szemelyes tartalom nincs
- footer: `zsk @ 2026` es `forked from:pearoo.dev`

## helyi futtatas

node.js 22.17+ szukseges (node 24 ajanlott).

```bash
pnpm install
pnpm dev
```

## github pages

1. a zip tartalmat masold a `zsidokkiralya/zsidokkiralya.github.io` repo gyokerebe, ne egy plusz almappaba.
2. github > settings > pages > build and deployment > source: github actions.
3. a `main` branch-re push utan a `.github/workflows/pages.yml` automatikusan buildel es publikalo.
4. a github pages custom domain maradjon `zskarchive.me`.
5. a dns rekordoknak a github pages-re kell mutatniuk.

## forras es licenc

az alapelrendezes a [rnxm/rnxm.github.io](https://github.com/rnxm/rnxm.github.io) / [pearoo.dev](https://pearoo.dev) projekt alapjan keszult. a licenc gpl-3.0, l. `LICENSE`. az eredeti szemelyes kepek, szovegek es projektlinkek nem kerultek at.
