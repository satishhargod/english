import Link from "next/link";
import days from "../data/days";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main className="container">
      <header className={styles.header}>
        <h1 className={styles.heading}>English Reading Practice</h1>
        <p className={styles.subheading}>
          Roj ek naya day padho aur apni English improve karo
        </p>
      </header>

      <div className={styles.grid}>
        {days.map((day) => (
          <Link href={`/day/${day.id}`} key={day.id} className={styles.card}>
            <span className={styles.dayNumber}>{day.id}</span>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{day.title}</h2>
              <p className={styles.cardSummary}>{day.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
