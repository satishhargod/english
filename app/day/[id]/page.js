import Link from "next/link";
import { notFound } from "next/navigation";
import days from "../../../data/days";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return days.map((day) => ({ id: String(day.id) }));
}

export function generateMetadata({ params }) {
  const day = days.find((d) => String(d.id) === params.id);
  return { title: day ? `${day.title} - English Reading` : "Day not found" };
}

export default function DayPage({ params }) {
  const currentId = Number(params.id);
  const day = days.find((d) => d.id === currentId);

  if (!day) {
    notFound();
  }

  const currentIndex = days.findIndex((d) => d.id === currentId);
  const prevDay = days[currentIndex - 1];
  const nextDay = days[currentIndex + 1];

  const paragraphs = day.content
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="container">
      <Link href="/" className={styles.backLink}>
        ← All days
      </Link>

      <h1 className={styles.title}>{day.title}</h1>

      <article className={styles.article}>
        {paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </article>

      <nav className={styles.nav}>
        {prevDay ? (
          <Link href={`/day/${prevDay.id}`} className={styles.navBtn}>
            ← {prevDay.title}
          </Link>
        ) : (
          <span />
        )}
        {nextDay ? (
          <Link href={`/day/${nextDay.id}`} className={styles.navBtnPrimary}>
            {nextDay.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
