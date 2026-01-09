import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Muhammad Usama - QA Engineer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D1117 0%, #1a1f2e 50%, #0D1117 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(255,107,107,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: 24,
            background: 'linear-gradient(135deg, #FF6B6B 0%, #7C3AED 100%)',
            marginBottom: 30,
            boxShadow: '0 25px 50px -12px rgba(255, 107, 107, 0.25)',
          }}
        >
          <span style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>MU</span>
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #FF6B6B, #7C3AED)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 16,
          }}
        >
          Muhammad Usama
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            color: '#C9D1D9',
            marginBottom: 24,
          }}
        >
          QA Engineer & ERP Testing Specialist
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Manual Testing', 'ERP Systems', 'AI-Powered QA', '500+ Bugs Found'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                background: 'rgba(255, 107, 107, 0.2)',
                color: '#FF6B6B',
                fontSize: 18,
                border: '1px solid rgba(255, 107, 107, 0.3)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 20,
            color: '#8B949E',
          }}
        >
          hmusama.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
