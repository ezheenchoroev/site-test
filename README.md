# Wild Routes

Simple static multi-page website for testing `engine.js` integrations and Kameleoon experiments.

## Routes

- `index.html`
- `animals.html`
- `habitats.html`
- `adoption.html`
- `experiment-lab.html`
- `404.html`

All pages load:

- `styles.css`
- `engine.js`
- `app.js`

## Local preview

Run a basic static server from this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Replace the placeholder engine

Every page already loads `engine.js`:

```html
<script defer src="engine.js"></script>
```

You can either:

1. Replace the contents of `engine.js` with your own script.
2. Change that script tag on each page to your hosted Kameleoon `engine.js` URL.

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
