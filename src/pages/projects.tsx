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
    padding: '40px 20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '30px',
    color: '#1e3a8a',
    marginBottom: '20px',
  },
  project: {
    marginBottom: '25px',
    fontSize: '18px',
    color: '#333',
  },
  tech: {
    fontSize: '14px',
    color: '#555',
    fontStyle: 'italic',
  },
  link: {
    display: 'inline-block',
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#1e3a8a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default function Projects() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🛠 Projects</h1>

        <div style={styles.project}>
          📱 <strong>Medicine Reminder App</strong>
          <br />
          <span style={styles.tech}>React Native, Expo</span>
        </div>

        <div style={styles.project}>
          🕌 <strong>Hadees Bookmark App</strong>
          <br />
          <span style={styles.tech}>PHP, MySQL, Bootstrap</span>
        </div>

        <div style={styles.project}>
          🚌 <strong>Bus Reservation System</strong>
          <br />
          <span style={styles.tech}>C++, MongoDB, Linked List, BST</span>
        </div>

        <Link href="/" style={styles.link}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
