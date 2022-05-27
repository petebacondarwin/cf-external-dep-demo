# External dependency demo

This repo has two projects: `core` (a vanilla TS project) and `cf` (a Cloudflare Worker that depends on `core`).

You can develop on the `cf` project by running `npm run dev` in the `cf` directory.

If you want to develop on the `core` project and automatically rebuild the `cf` project then run `npm dev` in a separate process in the `core` project.

**command prompt 1**

```
cd core
npm i
npm run dev
```

**command prompt 2**

```
cd cf
npm i
npm run dev
```
