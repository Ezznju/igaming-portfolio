# 🚀 Deployment Guide - Ezekiel Njuguna's iGaming Portfolio

Follow these steps to deploy your landing page FOR FREE!

---

## 📋 PREREQUISITES

Before starting, make sure you have:
- [ ] GitHub account (free) - https://github.com/signup
- [ ] Cloudflare account (free) - https://dash.cloudflare.com/sign-up
- [ ] Project ready at: `C:\Users\HP\igaming-portfolio`

---

## 🎯 RECOMMENDED: Cloudflare Pages (Best Performance)

**Why Choose Cloudflare Pages?**
✅ Fastest global performance (100+ edge locations)
✅ Unlimited bandwidth (no monthly limits)
✅ 500 builds/month (plenty for a static site)
✅ Automatic HTTPS/SSL included
✅ Zero cost forever
✅ DDoS protection included

---

## 📦 DEPLOYMENT STEPS (10 minutes)

### Step 1: Prepare Your Project

1. Open your project folder:
   ```
   C:\Users\HP\igaming-portfolio
   ```

2. Verify the build works:
   ```bash
   npm run build
   ```

3. You should see:
   ```
   ✓ 1 page(s) built in 3.22s
   ✓ Complete!
   ```

4. Check the `dist/` folder exists with `index.html`

---

### Step 2: Push to GitHub

**2A: Create GitHub Repository**

1. Go to https://github.com/new
2. Repository name: `igaming-portfolio`
3. Description: `Professional iGaming content writer portfolio`
4. Set to **Public** (or Private if you prefer)
5. Click **Create repository**

**2B: Upload Your Project** (Option A - Web Interface)

1. On your new GitHub repository page, click **uploading an existing file**
2. Drag and drop ALL files from `C:\Users\HP\igaming-portfolio`
3. Make sure to include:
   - `src/` folder
   - `public/` folder
   - `astro.config.mjs`
   - `tailwind.config.js`
   - `package.json`
   - `package-lock.json`
   - `README.md`
4. Add commit message: `Initial deployment`
5. Click **Commit changes**

**2B: Upload Using Git** (Option B - Command Line)

Open terminal and run:

```bash
cd C:\Users\HP\igaming-portfolio
git init
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/igaming-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 3: Connect to Cloudflare Pages

**3A: Access Cloudflare Pages**

1. Go to https://dash.cloudflare.com/
2. Log in or create an account
3. On the left sidebar, click **Workers & Pages**
4. Click **Create application** → **Pages**

**3B: Connect GitHub**

1. Click **Connect to Git** → **GitHub**
2. Authorize Cloudflare to access your GitHub
3. Search for your repository: `igaming-portfolio`
4. Click **Connect**

**3C: Configure Build Settings**

Cloudflare will auto-detect Astro settings. Verify:

```
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
Environment variables: (none needed)
```

5. Click **Save and Deploy**

---

### Step 4: Your Site is Live! 🎉

Cloudflare will:
1. Build your project (takes 1-2 minutes)
2. Deploy to their global CDN
3. Provide a URL like:
   ```
   https://igaming-portfolio.pages.dev
   ```

You can now access your portfolio worldwide! 🌍

---

## 🔗 OPTIONAL: Set Up Custom Domain

If you want a custom domain (e.g., `ezekielnjuguna.com`):

### Step 1: Purchase Domain

Recommended registrars:
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com
- Cloudflare Registrar: https://www.cloudflare.com/products/registrar/

Cost: ~$10-15/year

### Step 2: Configure in Cloudflare

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `ezekielnjuguna.com`)
5. Click **Activate domain**

### Step 3: Update DNS

Cloudflare will give you instructions. Usually:
1. Point your domain's nameservers to Cloudflare
2. Wait 24-48 hours for DNS propagation
3. Your site will be live at your custom domain!

---

## 📧 ALTERNATIVE: Netlify (Easier, Great for Forms)

If you prefer Netlify instead of Cloudflare:

### Why Choose Netlify?
✅ Drag-and-drop deployment (no GitHub needed)
✅ Built-in form handling (Netlify Forms)
✅ Automatic HTTPS
✅ 100 submissions/month free
✅ Great developer experience

### Deployment Steps:

**1. Build Your Project**
```bash
cd C:\Users\HP\igaming-portfolio
npm run build
```

**2. Deploy via Netlify Dashboard**

1. Go to https://app.netlify.com/
2. Click **Add new site** → **Deploy manually**
3. Drag and drop the `dist/` folder
4. Wait for deployment (30 seconds)
5. Your site is live! URL provided by Netlify

**3. Configure Form (Bonus!)**

If you want to use Netlify Forms instead of Formspree:

1. In your `src/pages/index.astro`, find the form
2. Remove `action="https://formspree.io/FORMSPREE_FORM_ID"`
3. Add `netlify` attribute:
   ```html
   <form netlify method="POST" class="...">
   ```
4. Deploy again
5. Submissions will go to Netlify Dashboard → Forms

---

## 📧 ALTERNATIVE: Vercel (Simple, Fast)

If you prefer Vercel:

### Why Choose Vercel?
✅ Simple GitHub integration
✅ Automatic deployments on git push
✅ Edge network
✅ Great for static sites

### Deployment Steps:

**1. Push to GitHub** (same as Step 2 above)

**2. Deploy to Vercel**

1. Go to https://vercel.com/new
2. Import your `igaming-portfolio` repository
3. Configure:
   - Framework Preset: Astro
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**
5. Your site is live!

---

## ✅ POST-DEPLOYMENT CHECKLIST

After your site is live:

- [ ] Test all links work (portfolio samples, social media, contact)
- [ ] Test contact form (sign up for Formspree if using)
- [ ] Test on mobile phone (responsive design)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check SEO (view page source, verify meta tags)
- [ ] Set up analytics (optional but recommended)
- [ ] Share your portfolio link!

---

## 📊 DEPLOYMENT COMPARISON

| Platform | Speed | Free Tier | Forms | Custom Domain | Recommended |
|----------|--------|------------|--------|----------------|---------------|
| Cloudflare Pages | ⚡⚡⚡ | Unlimited | Formspree needed | Yes | **BEST** |
| Netlify | ⚡⚡ | 100GB/month | Built-in | Yes | Great |
| Vercel | ⚡⚡ | 100GB/month | Formspree needed | Yes | Good |

---

## 🎯 RECOMMENDATION

**For Your iGaming Portfolio: Cloudflare Pages**

**Why?**
1. **Fastest Performance**: Critical for SEO rankings
2. **Unlimited Bandwidth**: You won't hit limits even if viral
3. **Best Value**: All features free, forever
4. **Professional**: Used by major companies worldwide

---

## 🆘 TROUBLESHOOTING

### Build Fails

**Issue**: `npm run build` shows errors
**Solution**:
```bash
rm -rf node_modules
npm install
npm run build
```

### Deployment Fails

**Issue**: Cloudflare/Netlify can't build
**Solution**:
- Check build logs in dashboard
- Verify `package.json` has correct scripts
- Ensure `dist/` folder is generated locally first

### Form Doesn't Work

**Issue**: Contact form submissions not received
**Solution**:
- Formspree: Verify `FORMSPREE_FORM_ID` is correct
- Netlify Forms: Verify form has `netlify` attribute
- Check spam folder in email

### Site Not Updating

**Issue**: Changes not showing live
**Solution**:
- Push new commit to GitHub
- Wait 2-5 minutes for auto-deploy
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📞 NEED HELP?

If you get stuck at any step:

1. **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages
2. **Netlify Docs**: https://docs.netlify.com/
3. **Vercel Docs**: https://vercel.com/docs

Or reach out:
- Email: ezzekielnjuguna.en@gmail.com

---

## 🎉 CONGRATULATIONS!

Once deployed, your iGaming content writer portfolio will be:
- ✅ Live and accessible worldwide
- ✅ Optimized for search engines
- ✅ Mobile-responsive for all devices
- ✅ Professional and conversion-focused
- ✅ Ready to attract high-paying clients!

**Start attracting quality iGaming clients today! 🚀🎰✨**
