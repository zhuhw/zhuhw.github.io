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

The site is designed for <https://zhuhw.github.io/>.

1. Push the files to the `main` branch of `zhuhw/zhuhw.github.io`.
2. In the repository’s **Settings → Pages**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.

GitHub publishes `index.html` directly; `.nojekyll` disables Jekyll processing.
If the repository is private, GitHub Pages requires a plan that supports private
repositories. A public repository works with GitHub Free. See
[GitHub’s Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

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
