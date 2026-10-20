# wingstudio.net — rebuilt static site

A copy of Warren Yip's Wing Studio site, rebuilt from the Adobe Portfolio version (October 2026). It has the same two pages, the same layout, the same photos in the same order, and the same text.

## What's here

```
index.html          Welcome page (banner, about text, 2026 shows, all vase photos)
contact.html        Contact page with the contact form
css/main.css        Original layout styles from the old site
css/site-home.css   Original theme styles (Welcome page)
css/site-contact.css Original theme styles (Contact page)
css/extra.css       Small additions: photo pop-up, form button, font spacing
js/site.js          Mobile menu, back-to-top, photo pop-up, contact form sending
images/web/         Photos sized for the web (what the pages show)
images/full/        Full-size originals (open when you click a photo)
```

To preview, double-click `index.html`. The contact form only sends once it's online (see below).

## Differences from the Adobe version

- **Fonts:** Adobe's fonts only work with an Adobe subscription, so the site uses close free Google Fonts instead: Nunito Sans for headings and text, Zilla Slab for the menu. It looks very close but not identical.
- **Photo pop-up:** clicking a photo opens it full size, like before. It's a simpler version.
- **Contact form:** Adobe handled the old form. This one sends through Web3Forms, which is free. You need to do one setup step first (below).

## Step 1: Make the contact form work

1. Go to https://web3forms.com and enter the email address where messages should go. They'll email you an **access key**.
2. Open `contact.html` in a text editor and find this line:
   `PASTE-YOUR-WEB3FORMS-ACCESS-KEY-HERE`
3. Replace that text with your key and save the file.

Messages go to the email you signed up with. After someone sends a message, the page shows "Thank you!", same as before.

## Step 2: Put it online with GitHub Pages (free)

1. Create a new public repository on GitHub, for example `wingstudio`.
2. Upload everything in this folder to it.
3. In the repo, go to **Settings → Pages**. Set the source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. In the same Pages screen, enter **wingstudio.net** as the custom domain and turn on **Enforce HTTPS** once it's available.

## Step 3: Point the domain at it (GoDaddy)

In GoDaddy → your domain → **DNS**:

- Delete the current **A** records for `@` (the ones pointing to Adobe).
- Add four **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Set the **CNAME** for `www` to `<your-github-username>.github.io`

**Don't touch any MX records.** Those are for email on the domain.

It can take a few hours to start working. Once wingstudio.net loads the new site, it's safe to cancel the Adobe plan.

Before canceling, also check which email the old Adobe contact form was sending to, in case messages are waiting there.
