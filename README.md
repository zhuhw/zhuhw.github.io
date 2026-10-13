# Henry Zhu’s personal website

A personal corner of the internet about home labs, self-hosting, and skiing.
Built with plain HTML, CSS, and a small JavaScript enhancement. No build step,
package installation, or runtime service is required.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://localhost:8000>. Stop the server with Ctrl+C.

## Publish on GitHub Pages

The site’s custom domain is <https://henryzhu.dev/>. GitHub Pages hosts it from
the `zhuhw/zhuhw.github.io` repository.

1. Push the files to the `main` branch of `zhuhw/zhuhw.github.io`.
2. In the repository’s **Settings → Pages**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.

GitHub publishes `index.html` directly; `.nojekyll` disables Jekyll processing.
If the repository is private, GitHub Pages requires a plan that supports private
repositories. A public repository works with GitHub Free. See
[GitHub’s Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Custom domain: henryzhu.dev

`CNAME` declares `henryzhu.dev` as the custom domain for this branch-based
GitHub Pages site. The canonical URL, social metadata, sitemap, and robots file
use the same domain.

In **Settings → Pages**, confirm that **Custom domain** is `henryzhu.dev`.
In Porkbun’s DNS settings for `henryzhu.dev`, add the following records. Leave
the Host field blank for the root domain and use the default TTL.

| Type | Host | Answer |
| --- | --- | --- |
| A | (blank) | 185.199.108.153 |
| A | (blank) | 185.199.109.153 |
| A | (blank) | 185.199.110.153 |
| A | (blank) | 185.199.111.153 |
| CNAME | www | zhuhw.github.io |

Replace conflicting parking or forwarding records for the root and `www`;
preserve unrelated records, including email and verification records. If root
AAAA records already exist, they must also point to GitHub Pages; use the
current addresses in the GitHub guide below or remove only those conflicting
AAAA records.

After DNS resolves and GitHub provisions its TLS certificate, enable **Enforce
HTTPS** in Pages settings. GitHub redirects `www.henryzhu.dev` to the root domain
when both DNS records are configured. DNS and certificate provisioning can take
up to 24 hours. If DNS queries continue returning `SERVFAIL` after records are
saved, check with Porkbun that the domain’s DNS zone is active on its assigned
nameservers.

References: [GitHub custom-domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
and [Porkbun’s GitHub Pages guide](https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages).

## Editing

- `index.html`: introduction, interests, homelab descriptions, and links.
- `styles.css`: layout, colors, responsive behavior, and typography.
- `script.js`: connects the homelab diagram to native HTML accordions.
- `assets/images/`: locally hosted, responsive mountain photography.
- `assets/fonts/`: locally hosted fonts and their licenses.
- `404.html`: custom error page.

The homelab illustration shows the components Henry has shared, not a live
dashboard or a claim about which machine runs which service. Service links go to
public project websites. No home network addresses or private service endpoints
are exposed. The page works without JavaScript; the diagram controls enhance
the native accordions when JavaScript is available.

Content currently focuses on Henry’s interests, as requested. Photography is
credited stock imagery, not represented as personal trip photographs.

## Credits

- Ski slope / hero and social image: [Florian Rauchberger on Unsplash](https://unsplash.com/photos/a-snow-covered-ski-slope-with-mountains-in-the-background-aWJNELFgL5I).
- Glacier ski area / mountains section: [Febe Vanermen on Unsplash](https://unsplash.com/photos/a-snow-covered-mountain-with-a-ski-lift-in-the-distance-gMF8do5awr0).
- Photos used under the [Unsplash License](https://unsplash.com/license).
- DM Sans and Instrument Serif are distributed under the SIL Open Font License;
  license files are included in `assets/fonts/`.
- Interface icons and the homelab diagram are inline SVG and CSS.

All assets are served from this repository. The site makes no third-party
requests during normal browsing and uses no analytics, cookies, or forms.
