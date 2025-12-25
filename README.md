# 🎮 Brawl Stars Mod Landing Page

A professional, high-converting landing page for a Brawl Stars Mod with OGADS integration. This project features a modern, responsive design optimized for maximum conversions.

![Version](https://img.shields.io/badge/version-V64.264-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## ✨ Features

- 🎯 **High-Converting Design** - Professional landing page optimized for OGADS conversions
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🚀 **Fast Performance** - Optimized Next.js 15 with App Router
- 🎬 **Promotional Images** - AI-generated high-quality images included
- ⚡ **Instant Loading** - Optimized for fast load times
- 🌙 **Dark Mode Support** - Built-in theme support with next-themes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Database**: Prisma ORM with SQLite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/brawl-stars-mod-landing.git
   cd brawl-stars-mod-landing
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run development server**
   ```bash
   bun run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization

### Update OGADS Link

Edit `src/app/page.tsx` line 17:

```typescript
const ogadsLink = 'https://lockedapp.org/cl/i/9v9q8v' // Your OGADS link here
```

### Update Version Number

Edit `src/app/page.tsx` line 43:

```tsx
<Badge>V64.264 Latest</Badge>
```

### Replace Images

Replace images in the `public/` folder:
- `brawl-stars-hero.png` - Hero section image
- `brawl-stars-features.png` - Features section image
- `brawl-stars-download.png` - Download section image

## 📁 Project Structure

```
my-project/
├── public/                    # Static assets
│   ├── brawl-stars-hero.png
│   ├── brawl-stars-features.png
│   └── brawl-stars-download.png
├── src/
│   ├── app/
│   │   └── page.tsx          # Main landing page
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── db.ts             # Database client
├── prisma/
│   └── schema.prisma         # Database schema
└── worklog.md                # Development work log
```

## 🎨 Key Sections

1. **Header** - Branding and version display
2. **Hero Section** - Main CTA with download button
3. **Stats Bar** - Download count, rating, and support info
4. **Features** - 6 feature cards highlighting mod capabilities
5. **How It Works** - 3-step installation guide
6. **FAQ** - Common questions and answers
7. **Testimonials** - User reviews and ratings
8. **Footer** - Branding and copyright

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Render
- Railway
- DigitalOcean App Platform

## 📝 Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run lint         # Run ESLint
bun run db:push      # Push database schema
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is a fan-made modification and is not affiliated with Supercell or Brawl Stars.

## ⚠️ Disclaimer

This is a demonstration landing page. Please ensure you comply with OGADS terms of service and Supercell's guidelines when using this page.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Brawl Stars](https://www.supercell.com/en/games/brawlstars)

---

Made with ❤️ for the Brawl Stars community

**Note**: Replace `your-username` in the clone URL with your actual GitHub username.
