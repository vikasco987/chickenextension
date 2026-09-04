export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const IS_VERCEL = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_VERCEL_ENV;
const SETTINGS_FILE = IS_VERCEL ? '/tmp/settings.json' : path.join(process.cwd(), 'settings.json');

const DEFAULT_SETTINGS = {
  bgDesktop: '/images/hero_background_mughlai_1787676838358.png',
  bgMobile: '/images/hero_mobile.jpg',
  showFloating: false,
  hideLogo: false,
  useBakedLayout: false,
  useHybridLayout: false,
  logoSizeDesktop: 280,
  logoSizeMobile: 180,
};

export async function GET() {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const data = fs.readFileSync(SETTINGS_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    }
    return NextResponse.json(DEFAULT_SETTINGS);
  } catch (error) {
    return NextResponse.json(DEFAULT_SETTINGS);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API POST Error:", error);
    return NextResponse.json({ success: false, error: 'Failed to save settings: ' + String(error) }, { status: 500 });
  }
}
