# Smart Gear (Static site)

Short instructions to run this project locally and deploy to GitHub.

## Prerequisites
- Git (https://git-scm.com)
- A modern browser (Edge, Chrome, Firefox)
- (Optional) Python 3 for a simple local server, or the VS Code Live Server extension

## Run locally (quick)
1. Open a terminal in the repository root (the folder that contains `index.html`).
2. Start a lightweight HTTP server (recommended) so features and relative paths work correctly:

```powershell
py -m http.server 8000 --directory "d:\semeister 3\F.S.D\FSD_I.P_23002170110197"
# then open http://localhost:8000/index.html
```

Or (in VS Code) open `index.html`, right-click and choose **Open with Live Server** (requires Live Server extension).

## Notes about browser console messages
- If you see messages like "Tracking Prevention blocked access to storage": this is an Edge privacy feature. Serving the site over `http://localhost` (as above) usually reduces those messages. You can also disable tracking prevention for localhost in Edge settings while developing.
- If you see `GET ... back[index].webp net::ERR_FILE_NOT_FOUND` (or similar): the CSS references images `back[index].webp` and `back[Home].webp` that are not present. Fix by either:
  - adding those image files to the project root with the exact names, or
  - updating `home.css` to point to an existing image path or remove the `background-image` rule.

## GitHub — push and GitHub Pages (deploy)
1. Initialize git (if not already):

```bash
git init
git add .
git commit -m "Initial site import"
# create repo on GitHub (or use web UI) and add remote
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

2. Enable GitHub Pages (two common options):
- Branch method: create and push a `gh-pages` branch and set Pages source to `gh-pages`.
- `main` + `/docs` method: move site files into a `/docs` folder on `main` and set Pages source to `main` → `/docs`.

Quick `gh-pages` push using `ghp-import` (Python) or use GitHub UI:

```bash
# using ghp-import (install with pip if desired)
# pip install ghp-import
# from repo root
ghp-import -n -p -f .
```

Alternatively, upload the files via the GitHub web UI or use the GitHub desktop app.

## Recommended `.gitignore` entries
```
# OS
.DS_Store
Thumbs.db

# Node & editor
node_modules/
.vscode/

# Python
__pycache__/
```

## Troubleshooting
- If links appear to open `home.html` instead of `index.html` when you press F5 in VS Code: make sure you open `index.html` tab and run Live Server / open the `http://localhost:8000/index.html` URL directly. Update `.vscode/launch.json` if you use the VS Code browser debugger to target the index URL.
- For missing images, check paths and make sure backslashes in HTML/CSS are valid for the server (use forward slashes `assets/img.png` ideally).

---
If you want, I can:
- create a `.gitignore` file for you, and/or
- add placeholder `back[index].webp` and `back[Home].webp` images to remove the 404s, or
- create a `.vscode/launch.json` snippet that launches Chrome to `http://localhost:8000/index.html`.
Tell me which you'd like me to add next.