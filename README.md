# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment

The site is a static Angular SPA hosted on **GitHub Pages as a project page**:

- **Live URL:** https://parwejalam.github.io/portfolio/
- **Trigger:** every push to `main` (PRs build but do not publish).
- **Pipeline:** [.github/workflows/node.js.yml](.github/workflows/node.js.yml) runs
  `npm ci --legacy-peer-deps` → `npm run build` → `npm run deploy:404`, then
  publishes `dist/portfolio/browser` to the `gh-pages` branch.
- **Base href:** the build sets `--base-href=/portfolio/` so all assets resolve
  under the `/portfolio/` sub-path. Do **not** add a `CNAME` unless you move to a
  custom/root domain — a custom domain also requires changing base href to `/`.
- **SPA routing:** `npm run deploy:404` copies `index.html` to `404.html` so deep
  links (e.g. `/portfolio/projects`) still load on hard refresh, since GitHub
  Pages has no built-in SPA fallback.

To reproduce a production build locally:

```bash
npm run build        # outputs to dist/portfolio/browser
npm run deploy:404   # adds the SPA fallback
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
