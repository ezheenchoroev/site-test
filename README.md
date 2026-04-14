# Wild Routes

Simple static multi-page website for testing Kameleoon experiments.

## Routes

- `index.html`
- `animals.html`
- `habitats.html`
- `adoption.html`
- `experiment-lab.html`
- `404.html`

All pages load:

- `styles.css`
- `app.js`
- the Kameleoon bootstrap snippet inline at the top of `<head>`

## Local preview

Run a basic static server from this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Kameleoon setup

Every page already includes the Kameleoon bootstrap code directly after the opening `<head>` tag.

If Kameleoon gives you a new snippet later, replace that inline snippet on each HTML page.

## GitHub setup

Initialize the repo locally:

```bash
git init
git add .
git commit -m "Create Wild Routes test site"
git branch -M main
```

Create a GitHub repository, then connect it:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## GitHub Pages deployment

After the code is pushed:

1. Open your repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save.

Your site will be published at:

- `https://YOUR-USERNAME.github.io/YOUR-REPO/`

If the repository is named `YOUR-USERNAME.github.io`, the site URL will be:

- `https://YOUR-USERNAME.github.io/`
