// pages/index.js
export default function Home() {
  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <h1 style={{ fontSize: '3rem', margin: '0.5em 0', color: '#2C3E50' }}>
        🎉 Hello from Coolify!
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#34495E' }}>
        This colorful Next.js app is ready to deploy 🚀
      </p>
    </div>
  );
}
