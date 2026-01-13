# RGB Chromatic Calibrator

A vintage broadcast monitor-style RGB color picker built with Next.js 15, featuring authentic CRT effects, scanlines, and Supabase database integration for saving color values.

## Features

- 🎨 **Vintage Aesthetic**: 1980s broadcast equipment design with phosphor green displays
- 📺 **CRT Monitor Effects**: Authentic scanlines, glow effects, and sweep animations
- 🎚️ **Dual Input Controls**: Synchronized sliders and number inputs for precise RGB control
- 🌈 **SMPTE Color Bars**: Click to instantly load standard broadcast test colors
- 💾 **Cloud Storage**: Save and load colors with Supabase integration
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS animations
- **Database**: Supabase (PostgreSQL)
- **Fonts**: Orbitron + Share Tech Mono (Google Fonts)
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/brianhoulihan/ClaudeTest.git
cd ClaudeTest/rgb-calibrator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Supabase

#### Create a Supabase Project
1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Create a new project
3. Wait for the project to finish setting up

#### Create the Database Table
1. Go to the SQL Editor in your Supabase dashboard
2. Run this SQL command:

```sql
CREATE TABLE rgb_colors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  red INTEGER NOT NULL CHECK (red >= 0 AND red <= 255),
  green INTEGER NOT NULL CHECK (green >= 0 AND green <= 255),
  blue INTEGER NOT NULL CHECK (blue >= 0 AND blue <= 255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Get Your API Credentials
1. Go to Settings > API in your Supabase dashboard
2. Copy your Project URL and anon/public key
3. Create a `.env.local` file in the project root:

```bash
cp .env.local.template .env.local
```

4. Edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and add your environment variables when asked.

## Usage

### Adjusting Colors
- Use the **sliders** or **number inputs** to adjust RGB values (0-255)
- Both inputs are synchronized in real-time

### Quick Color Selection
- Click any of the **8 color bars** below the monitor to load standard colors:
  - White, Yellow, Cyan, Green, Magenta, Red, Blue, Black

### Saving Colors
1. Adjust the RGB values to your desired color
2. Click the **"Save Color"** button
3. Your color will be saved to Supabase and appear in the history below

### Loading Saved Colors
- Scroll through your saved colors at the bottom
- Click any color swatch to load it into the calibrator

## Project Structure

```
rgb-calibrator/
├── app/
│   ├── api/
│   │   └── colors/
│   │       └── route.ts        # GET & POST endpoints
│   ├── globals.css             # Global styles + animations
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Main page
├── components/
│   ├── ColorBars.tsx           # SMPTE color bars
│   ├── ColorHistory.tsx        # Saved colors list
│   ├── ControlPanel.tsx        # RGB sliders & inputs
│   ├── CRTMonitor.tsx          # Display with effects
│   └── RGBCalibrator.tsx       # Main component
├── lib/
│   └── supabase.ts             # Supabase client
├── .env.local.template         # Environment template
└── package.json
```

## License

MIT

## Credits

Created by Brian Houlihan with assistance from Claude (Anthropic).

Inspired by vintage broadcast equipment and CRT monitors from the 1980s.
