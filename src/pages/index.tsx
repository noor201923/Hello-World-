import Link from 'next/link';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f8ff, #dbeafe)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#1e40af',
  },
  paragraph: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '30px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 500,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#2563eb',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome!</h1>
        <p style={styles.paragraph}>
This is a small web app I built while learning React and Next.js.  
  You can check out my background and recent projects using the links below.        </p>

        <div style={styles.nav}>
          <Link href="/about" style={styles.button}>
            About
          </Link>
          <Link href="/projects" style={styles.button}>
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
