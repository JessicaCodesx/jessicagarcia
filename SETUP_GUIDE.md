# Setup Guide for SEO & Blog

## 🔍 SEO Features Added

✅ **Meta Tags** - Comprehensive meta tags in `index.html`
✅ **Open Graph Tags** - For better social media sharing
✅ **Twitter Cards** - Optimized Twitter sharing
✅ **Structured Data (JSON-LD)** - Schema.org markup for better search visibility
✅ **robots.txt** - Search engine crawler instructions
✅ **sitemap.xml** - Site structure for search engines
✅ **Dynamic SEO Component** - `SEOHead.tsx` for per-page optimization

## 📝 Blog Setup

The blog is set up with a simple JSON-based system:

1. **Edit blog posts:** Edit `src/data/blogPosts.json`
2. **Add new posts:** Add entries to the JSON array
3. **Format:**
   ```json
   {
     "id": 4,
     "title": "Your Post Title",
     "excerpt": "Brief description...",
     "date": "2025-01-27",
     "readTime": "5 min read",
     "tags": ["Tag1", "Tag2"],
     "published": true
   }
   ```

4. **To add full blog content later:**
   - You can extend `BlogPage.tsx` to read markdown files
   - Or create individual blog post pages
   - The current setup shows excerpts with "Read more" (ready for expansion)

## 🚀 Next Steps

1. **Set up Google Analytics** (see above)
2. **Update sitemap.xml** dates when you make significant changes
3. **Add blog content** to `blogPosts.json` or expand to full blog posts
4. **Test social sharing** - Use [Open Graph Debugger](https://developers.facebook.com/tools/debug/) to test
5. **Submit sitemap** to Google Search Console

## 📱 Social Media Preview

Your site now has proper Open Graph tags, so when shared on:
- **LinkedIn** - Shows your title, description, and profile image
- **Twitter** - Uses Twitter Card format
- **Facebook** - Uses Open Graph format

Make sure your `profile.webp` image is accessible for best results!
