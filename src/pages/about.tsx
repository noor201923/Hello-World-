import Link from 'next/link';
import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '30px',
    color: '#1e3a8a',
    marginBottom: '16px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '30px',
  },
  link: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  },
};

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>📘 About Me</h1>
        <p style={styles.paragraph}>
<p>I'm Noor — an IT student currently learning modern web development using React and Next.js.</p>
<p>This site is part of my practice project where I'm building pages and adding features step-by-step.</p>        </p>
        <Link href="/" style={styles.link}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
