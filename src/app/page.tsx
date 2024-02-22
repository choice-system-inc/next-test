// src/pages/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* Linkコンポーネントの使用方法を更新 */}
      <Link href="/cal" style={{ display: 'inline-block', margin: '10px 0', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>Cal</Link>
      <Link href="/cal" style={{ display: 'inline-block', margin: '10px 0', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>***</Link>
      <Link href="/cal" style={{ display: 'inline-block', margin: '10px 0', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>***</Link>

    </div>
  );
};

export default HomePage;