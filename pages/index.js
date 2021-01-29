import Head from "next/head";
import styles from "../styles/Home.module.css";
import palettable from "../palettable";
import CopyButton from "../components/CopyButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Palettable</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className={styles.main}>
        <pre style={{textAlign:'center',verticalAlign:'center'}}>palettable</pre>
        {palettable.colors.map((paletted, idx) => {
          const description = Object.keys(paletted)[0];
          const color = paletted[description];
          console.log(idx, color, description);
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
              <div style={{ position: "relative", top: "50%"}}>
                <span>
                  {description} - {color}{" "}
                </span>
                <div style={{marginTop:24}}><CopyButton colorToCopy={color} /></div>
              </div>
            </section>
          );
        })}
      </main>
      {palettable.githubUsername ? <pre><a href={`https://github.com/${palettable.githubUsername}/palettable`}>github.com/{palettable.githubUsername}/palettable</a></pre> : null}
    </div>
  );
}
