# Awesome Zero-Knowledge Proofs

A visual, interactive roadmap and awesome list for mastering Zero Knowledge Proofs.

## Features

- **Story Mode Journey**: Chaptered path with core steps and side quests.
- **Curated Resources**: Everything from "ELI5" articles to deep dissertations and security audits.
- **Visual Design**: Sleek, dark-mode aesthetic with animations and glassmorphism.

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Go to `http://localhost:5173`

## Deploy to GitHub Pages

This site is served from `https://floatingpragma.io/awesome-zk` via the
`/Users/muellerberndt/Projects/muellerberndt.github.io` repo.

1. Build the app:
   ```bash
   npm run build
   ```
2. Copy the build output to the GitHub Pages repo:
   ```bash
   mkdir -p /Users/muellerberndt/Projects/muellerberndt.github.io/awesome-zk
   cp -R dist/* /Users/muellerberndt/Projects/muellerberndt.github.io/awesome-zk/
   ```
3. Commit and push in `/Users/muellerberndt/Projects/muellerberndt.github.io`.

## Awesome List

Generate the README awesome list from the graph data:
```bash
npm run awesome
```
