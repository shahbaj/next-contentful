# My App - Setup Guide

## Project Overview
This is a Next.js application that integrates with Contentful CMS to render dynamic pages and content blocks with full TypeScript support.

## Prerequisites
- Node.js 18+ and pnpm installed
- Contentful account with API keys
- Git (optional)

### Install pnpm

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

Verify installation:
```bash
pnpm --version
```

## Step 1: Install Dependencies

Install all required packages using pnpm:

```bash
pnpm install
```

### Key Dependencies

**Next.js Framework:**
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM rendering

**Contentful CMS:**
- `contentful` - Contentful SDK
- `@contentful/rich-text-react-renderer` - Rich text rendering
- `@contentful/rich-text-types` - Rich text types

**Image Handling:**
- `next/image` - Optimized image component (built-in)

**Development:**
- `typescript` - TypeScript support
- `@types/react` - React types
- `@types/node` - Node.js types

Install with:
```bash
pnpm add next react react-dom contentful @contentful/rich-text-react-renderer @contentful/rich-text-types
pnpm add -D typescript @types/react @types/node
```

## Step 2: Environment Variables

Create a `.env.local` file in the project root:

```bash
# filepath: d:\Workspace\my-app\.env.local

# Contentful API Configuration
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master

# Draft Mode Secret (for preview mode)
CONTENTFUL_PREVIEW_SECRET=your_random_secret_key_here
```

### Where to Get These Values:

1. **NEXT_PUBLIC_CONTENTFUL_SPACE_ID**
   - Go to Contentful Dashboard → Settings → API Keys
   - Copy the Space ID

2. **NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN**
   - In Contentful Settings → API Keys → Content Delivery tokens
   - Create or copy an existing token

3. **NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN**
   - In Contentful Settings → API Keys → Content Preview tokens
   - Create or copy an existing token

4. **CONTENTFUL_PREVIEW_SECRET**
   - Generate a random secret string for preview mode
   - Example: `openssl rand -base64 32`

## Step 3: Project Structure

```
my-app/
├── app/
│   ├── page.tsx              # Home page
│   ├── [slug]/
│   │   └── page.tsx          # Dynamic pages
│   └── layout.tsx            # Root layout
├── components/
│   ├── blocks/
│   │   ├── HeroBlock.tsx
│   │   ├── RichTextBlock.tsx
│   │   ├── TwoColumnBlock.tsx
│   │   └── MultiColumnBlock.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── BlockRenderer.tsx      # Block router
├── lib/
│   └── contentful/
│       └── api.ts            # Contentful API client
├── types/
│   └── types.ts              # TypeScript types
├── .env.local                # Environment variables
├── .npmrc                     # pnpm configuration
├── pnpm-lock.yaml            # pnpm lock file
├── tsconfig.json             # TypeScript config
├── next.config.js            # Next.js config
└── package.json
```

## Step 4: pnpm Configuration

Ensure `.npmrc` exists in your project root:

```
# filepath: d:\Workspace\my-app\.npmrc
auto-install-peers=true
shamefully-hoist=false
strict-peer-dependencies=false
```

## Step 5: Contentful Setup

Created these content types in my Contentful space:

**1. Hero Block**
- `heading` (Text, required)
- `subheading` (Text)
- `backgroundImage` (Asset)
- `ctaText` (Text)
- `ctaLink` (Text)

**2. Rich Text Block**
- `content` (Rich Text, required)

**3. Two Column Layout**
- `leftTitle` (Text, required)
- `leftDescription` (Rich Text)
- `rightImage` (Asset)

**4. Column Item**
- `title` (Text, required)
- `description` (Text)
- `icon` (Asset)

**5. Multi Column Content**
- `sectionTitle` (Text)
- `columns` (Reference to Column Item, many)

**6. Navigation Item**
- `label` (Text, required)
- `link` (Text, required)

**7. Page**
- `title` (Text, required)
- `slug` (Text, required)
- `blocks` (Reference to blocks, many)

**8. Global Settings**
- `siteName` (Text, required)
- `logo` (Asset)
- `navigation` (Reference to Navigation Item, many)
- `footerText` (Rich Text)


## Step 6: Run the Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser.

Visit Prod site `https://next-contentful-psi.vercel.app/home` in your browser.

