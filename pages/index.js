import Head from "next/head";
import styles from "../styles/Home.module.css";
import palettable from "../palettable";
import CopyButton from "../components/CopyButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palettable</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className={styles.main}>
        <pre style={{ textAlign: "center", verticalAlign: "center" }}>
          palettable
        </pre>
        {palettable.colors.map((paletted, idx) => {
          const description = Object.keys(paletted)[0];
          const color = paletted[description];
          return (
            <section
              style={{
                backgroundColor: color,
                height: 260,
                textAlign: "center",
                verticalAlign: "middle",
              }}
              key={`palettable_${idx}`}
            >
              <div style={{ position: "relative", top: "50%" }}>
                <span>
                  {description} - {color}{" "}
                </span>
                <div style={{ marginTop: 24 }}>
                  <CopyButton colorToCopy={color} />
                </div>
              </div>
            </section>
          );
        })}
      </main>
      {palettable.githubUsername ? (
        <pre>
          <a
            href={`https://github.com/${palettable.githubUsername}/palettable`}
          >
            github.com/{palettable.githubUsername}/palettable
          </a>
        </pre>
      ) : null}
    </div>
  );
}
