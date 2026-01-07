# mangila.github.io

mangila.github.io

## Want to use this layout for your own github page?

You can use this site as a template by adding a `.env` file in the root of `/site` with the values:

- PUBLIC_GITHUB_USERNAME - your github username
- GITHUB_USER_TOKEN - create a Github user token with your prefered scope - you could roll without one to, since we are not doing alot of request with Ocktokit to hit the ratelimit.
- NAME - your name

But you would have to change the `<meta>` tags and webmanifest and the hero image in the `/assets` folder and the site url in `astro.config.mjs`

- https://realfavicongenerator.net/ - or any generator for that
