import Link from "next/link";
import { notFound } from "next/navigation";
import days from "../../../data/days";
import { getTheme } from "../../../lib/palette";
import ReadingProgress from "./ReadingProgress";
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
  const theme = getTheme(day.id);

  const paragraphs = day.content
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const wordCount = day.content.trim().split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 180));

  return (
    <>
      <ReadingProgress from={theme.from} to={theme.to} />
      <main
        className="container"
        style={{ "--accent-from": theme.from, "--accent-to": theme.to }}
      >
        <Link href="/" className={styles.backLink}>
          ← All days
        </Link>

        <div className={styles.hero}>
          <span className={styles.dayBadge}>Day {day.id}</span>
          <h1 className={styles.title}>{day.title}</h1>
          <div className={styles.meta}>
            <span>📖 {readingMinutes} min read</span>
            <span className={styles.dot}>•</span>
            <span>{paragraphs.length} paragraphs</span>
          </div>
        </div>

        <article className={styles.article}>
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className={idx === 0 ? styles.firstPara : undefined}
            >
              {para}
            </p>
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
            <Link
              href={`/day/${nextDay.id}`}
              className={styles.navBtnPrimary}
            >
              {nextDay.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </>
  );
}
