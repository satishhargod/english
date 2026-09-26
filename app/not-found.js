import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ textAlign: "center", paddingTop: 60 }}>
      <h1>Day not found</h1>
      <p>Yeh day abhi tak add nahi hua hai.</p>
      <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>
        ← Home par jaao
      </Link>
    </main>
  );
}
