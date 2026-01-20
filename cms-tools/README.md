# Simple CMS Tools for Your Website

These are minimal, non-invasive tools to add content to your **existing, working website** without breaking anything.

## 🎉 IMPORTANT: Full Articles Now Loaded!

All 15 articles now have COMPLETE Nature-style content with:
- ✅ Full abstracts (Context, Problem, Argument, Conclusion)
- ✅ Complete article body with all sections
- ✅ Extended references (McKinsey, BCG, MIT research)
- ✅ Appendices with frameworks and checklists
- ✅ Glossaries with key terms
- ✅ Author's notes

Run `npm run dev` to see the full articles!

---

## What This Does

- ✅ Syncs FULL articles from markdown to your website
- ✅ Adds NEW articles to your existing content-data.js
- ✅ Doesn't touch your working site structure
- ✅ Doesn't require any dependencies
- ✅ Works with your current blog system

## Commands

```bash
# Sync markdown articles to website (updates content-data.js)
node sync-articles.js

# List all current articles  
node list-articles.js

# Add a new article
node add-article.js
```

---

## Quick Start

### 1. List Your Current Articles

```bash
cd cms-tools
node list-articles.js
```

This shows all 15 articles currently on your site.

### 2. Add a New Article

```bash
node add-article.js
```

Follow the prompts:
1. Enter article title
2. Confirm or customize the slug
3. Enter category, series, read time
4. Paste your article content (markdown)
5. Type `END_CONTENT` when done

**The script will:**
- Auto-assign the next article ID (16, 17, 18...)
- Add your article to `app/lib/content-data.js`
- Tell you where to save your image

### 3. Add Your Image

```bash
# Copy your article image to the public folder
cp ~/Downloads/my-image.jpg ../public/images/blog/
```

### 4. Restart Dev Server

```bash
cd ..
npm run dev
```

Your new article is live at: `http://localhost:3000/blog/your-slug`

---

## Example: Adding Article #16

```bash
$ node add-article.js

📝 Add New Article to Your Website

Article title: The Future of Product Management
Generated slug: the-future-of-product-management
Use this slug? (y/n): y
Category (e.g., Product Management): Product Management
Series (e.g., Foundation Canon, Product × AI, or leave blank): 
Read time (e.g., "15 min read"): 12 min read
Excerpt: Where product management is headed in the age of AI
Summary: AI is transforming how product managers work. This article explores...
Tags (comma-separated): Product Management, AI, Future of Work
Image filename (will be saved to /public/images/blog/): future-pm.jpg

📄 Now paste your article content (markdown format).
Type END_CONTENT on a new line when done:

## The Changing Role

Product managers are evolving...

[paste your content]

END_CONTENT

✅ Article added successfully!

Article ID: 16
Slug: the-future-of-product-management
URL: /blog/the-future-of-product-management

📸 Don't forget to add your image:
   Save it to: public/images/blog/future-pm.jpg

🚀 Restart your dev server to see the changes:
   npm run dev
```

---

## File Structure

```
your-website/
├── app/
│   └── lib/
│       └── content-data.js  ← Your articles live here
│
├── public/
│   └── images/
│       └── blog/            ← Save article images here
│
└── cms-tools/               ← This folder
    ├── add-article.js       ← Add new articles
    ├── list-articles.js     ← List all articles
    └── README.md            ← This file
```

---

## How It Works

### Your Current System (Unchanged)

Your website uses `app/lib/content-data.js` which contains:
- All 15 existing articles
- Portfolio items
- Experience data
- Education info

### What add-article.js Does

1. Reads `content-data.js`
2. Finds the highest article ID (currently 15)
3. Creates a new article with ID 16
4. Appends it to the `articlesData` array
5. Saves the file

**That's it!** No configuration, no dependencies, no breaking changes.

---

## Your Current Articles

You currently have **15 articles**:

### Foundation Canon (9 articles)
1. Product vs Program vs Project vs Engineering Management
2. Outcome-Driven Delivery: Beyond Velocity to Value  
3. AI Agents Management Layer
4. Product Strategy as Portfolio Bets
5. Product Governance Without Killing Speed
6. Why Most OKRs Fail
7. Why Digital Transformation Fails
8. Designing Product Organizations
9. Product Leader as System Architect

### Product × AI (6 articles)
10. AI Strategy is Product Strategy
11. From AI Pilots to AI Products
12. AI Value Realization vs Adoption
13. Why Most AI Roadmaps Are Fiction
14. AI as Capability Not Feature
15. When Not to Use AI

---

## Adding Images

Your images should go in: `public/images/blog/`

**Recommended image sizes:**
- Article hero images: 1200x630px
- Diagrams: 800-1200px wide
- Format: JPG or PNG

**Example:**
```bash
# If you have future-pm.jpg on your desktop:
cp ~/Desktop/future-pm.jpg public/images/blog/

# In add-article.js, when prompted for image filename, enter:
future-pm.jpg
```

The script will automatically add the path: `/images/blog/future-pm.jpg`

---

## Markdown Formatting

Your article content supports full markdown:

```markdown
## Headings

### Subheadings

**Bold text** and *italic text*

- Bullet points
- Another point

1. Numbered lists
2. Second item

[Links](https://example.com)

> Blockquotes for emphasis

\`\`\`javascript
// Code blocks
const example = "code";
\`\`\`
```

---

## Tips

### 1. Prepare Content First

Write your article in your preferred editor first, then paste it in. This is easier than typing directly into the script.

### 2. Image Names

Use descriptive, URL-friendly names:
- ✅ `future-of-product-management.jpg`
- ❌ `IMG_1234.jpg`

### 3. Slugs

The script auto-generates slugs from titles, but you can customize them. Good slugs:
- ✅ `ai-product-strategy`
- ❌ `article-2025-01-16`

### 4. Categories

Keep categories consistent with your existing articles:
- "Product Management"
- "AI Strategy"
- "Leadership"
- "Organizational Design"

### 5. Series

If your article is part of a series, use exact series names:
- "Foundation Canon"
- "Product × AI"

Leave blank if not part of a series.

---

## Troubleshooting

### "Cannot find content-data.js"

Make sure you're running the script from the `cms-tools` directory:
```bash
cd cms-tools
node add-article.js
```

### "Article not showing on website"

1. Check that the article was added:
   ```bash
   node list-articles.js
   ```

2. Restart your dev server:
   ```bash
   cd ..
   npm run dev
   ```

### "Image not showing"

1. Check the image is in the right location:
   ```bash
   ls -la ../public/images/blog/
   ```

2. Check the filename matches exactly (case-sensitive)

---

## What's Next?

### Add More Articles

Just run `node add-article.js` again. Each article gets a new ID automatically.

### Bulk Import

If you have multiple articles to add, you can:
1. Run `add-article.js` multiple times, or
2. Manually edit `app/lib/content-data.js` and paste multiple articles

### Deploy

Once you've added articles locally and tested them:
```bash
cd ..
npm run build
# Deploy to Vercel/Netlify
```

---

## Safety

This tool is **designed to be safe**:
- ✅ Only modifies `content-data.js`
- ✅ Creates backup before changes (optional)
- ✅ Doesn't delete existing content
- ✅ Doesn't modify your site structure

---

## Support

If something goes wrong:
1. Your original `content-data.js` has all 15 articles
2. You can always restore from Git: `git checkout app/lib/content-data.js`
3. Or manually remove the added article from the file

---

**That's it!** A simple, no-nonsense way to add articles to your existing, working website.
