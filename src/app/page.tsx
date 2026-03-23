import Image from "next/image";

export default function Home() {
  const reasons = [
    {
      title: "Lebensqualität, die man spürt",
      text: "Südafrika verbindet auf besondere Weise das, was viele Menschen im Ruhestand suchen: ein mildes Klima, beeindruckende Natur und ein Alltag, der sich leichter anfühlt. Das Leben verlangsamt sich, ohne an Qualität zu verlieren. Statt Enge und Routine entstehen Raum, Ruhe und neue Perspektiven.",
    },
    {
      title: "Mehr Möglichkeiten mit dem, was Sie haben",
      text: "Ihre Rente oder Ihr Vermögen hat in Südafrika oft eine deutlich größere Wirkung. Das bedeutet konkret mehr Wohnqualität, mehr Unterstützung im Alltag und mehr Freiheit, den eigenen Lebensstil bewusst zu gestalten. Dinge, die in Deutschland oft als Luxus gelten, werden hier selbstverständlich.",
    },
    {
      title: "Gute Versorgung auch im Alter",
      text: "Südafrika verfügt über eine sehr gut ausgebaute private Gesundheitsversorgung. Moderne Einrichtungen, kurze Wartezeiten und eine individuellere Betreuung schaffen Sicherheit. Ergänzt wird dies durch durchdachte Wohn- und Betreuungskonzepte, die ein selbstbestimmtes Leben bis ins hohe Alter ermöglichen.",
    },
  ];

  const highlights = [
    "Hohe Lebensqualität",
    "Attraktive Lebenshaltungskosten",
    "Medizinische Versorgung",
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#2e3138]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#fef9f1_0%,#f7f1e8_45%,#efe3d2_100%)]" />

      <header className="sticky top-0 z-20 border-b border-[#d8c7ae] bg-[#faf5ee]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-5 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-4">
          <div className="flex items-center justify-between gap-3">
            <a href="#" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6bf9f] bg-white shadow-sm sm:h-11 sm:w-11">
              <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" aria-hidden>
                <path
                  d="M11 35c11-9 25-11 42-8-7-1-14 2-18 7 5 2 9 5 12 9-6-3-12-4-18-3-7 1-12 4-16 9 2-6 5-11 10-14-5-1-9-1-12 0z"
                  fill="#1f3258"
                />
              </svg>
              </span>
              <span className="truncate font-[Georgia,'Times_New_Roman',serif] text-base font-semibold tracking-tight text-[#1f3258] sm:text-lg">
                Ruhestandsberatung Südafrika
              </span>
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-[#a9783f] bg-[#b88346] px-3.5 py-2 text-xs font-semibold text-[#fff7ea] transition hover:bg-[#a9783f] sm:px-5 sm:text-sm md:hidden"
            >
              Beratung
            </a>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#3f4957] md:flex">
            <a href="#warum" className="transition hover:text-[#1f3258]">
              Warum Südafrika?
            </a>
            <a href="#leistungen" className="transition hover:text-[#1f3258]">
              Leistungen
            </a>
            <a href="#ueber" className="transition hover:text-[#1f3258]">
              Über uns
            </a>
          </div>

          <a
            href="#kontakt"
            className="hidden rounded-full border border-[#a9783f] bg-[#b88346] px-5 py-2 text-sm font-semibold text-[#fff7ea] transition hover:bg-[#a9783f] md:inline-block"
          >
            Beratungsgespräch
          </a>

          <div className="flex items-center justify-between gap-3 border-t border-[#ddccb4] pt-3 text-sm font-medium text-[#3f4957] md:hidden">
            <a href="#warum" className="transition hover:text-[#1f3258]">
              Warum Südafrika?
            </a>
            <a href="#leistungen" className="transition hover:text-[#1f3258]">
              Leistungen
            </a>
            <a href="#ueber" className="transition hover:text-[#1f3258]">
              Über uns
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d2e4f]/75 via-[#1d2e4f]/40 to-[#1d2e4f]/10" />

          <div className="relative mx-auto flex min-h-[54vh] w-full max-w-6xl items-center px-4 py-14 sm:px-5 sm:py-16 md:min-h-[60vh] md:px-8 md:py-20">
            <div className="max-w-xl text-[#fcf5ea]">
              <h1 className="font-[Georgia,'Times_New_Roman',serif] text-3xl leading-tight sm:text-4xl md:text-6xl">
                Ruhestandsberatung Südafrika
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#f8e7cf] sm:mt-5 sm:text-lg md:text-xl">
                Sicher und entspannt in den Ruhestand - mit Perspektive in
                Südafrika
              </p>
              <a
                href="#kontakt"
                className="mt-7 inline-block w-full rounded-full border border-[#a9783f] bg-[#b88346] px-7 py-3 text-center text-base font-semibold text-[#fff7ea] transition hover:bg-[#a9783f] sm:mt-8 sm:w-auto"
              >
                Beratungsgespräch vereinbaren
              </a>
            </div>
          </div>
        </section>

        <section id="warum" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
            <div>
              <h2 className="font-[Georgia,'Times_New_Roman',serif] text-3xl text-[#1f3258] sm:text-4xl">
                Warum Südafrika?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#404a59] sm:text-lg">
                Ruhestandsberatung Südafrika ist Ihr verlässlicher Partner für
                einen ruhigen und sorgenfreien Ruhestand im südlichen Afrika.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {reasons.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#deccb3] bg-[#fffaf3] p-5 shadow-[0_10px_22px_rgba(39,44,53,0.08)]"
                  >
                    <h3 className="font-[Georgia,'Times_New_Roman',serif] text-xl leading-snug text-[#21365c]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4a5564]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <ul className="mt-8 space-y-3 text-[#233655]">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base sm:text-lg">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e3c79f] text-[#7c5630]">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
                        <path
                          d="M5 12.5l4.2 4.2L19 7.8"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#leistungen"
                className="mt-8 inline-block w-full rounded-full border border-[#b88346] px-7 py-3 text-center font-semibold text-[#8a6236] transition hover:bg-[#f1dfc7] sm:w-auto"
              >
                Mehr erfahren
              </a>
            </div>

            <Image
              src="/image.png"
              alt="Sympathisches Paar im Ruhestand"
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-2xl object-cover shadow-[0_20px_40px_rgba(39,44,53,0.18)]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-3 sm:px-5 sm:pb-6 md:px-8" id="ueber">
          <div className="rounded-3xl border border-[#ddccb4] bg-[#fdf7ef] px-5 py-8 sm:px-7 sm:py-10 md:px-10">
            <h2 className="font-[Georgia,'Times_New_Roman',serif] text-2xl text-[#1f3258] sm:text-3xl">
              Ein anderes Lebensgefühl
            </h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-[#475364]">
              Südafrika ist kein klassisches Auswanderungsziel - und genau
              darin liegt seine Stärke. Viele stellen fest, dass das Bild, das
              sie zuvor hatten, nicht der Realität entspricht. Statt
              Unsicherheit erleben sie Offenheit, Lebensfreude und eine hohe
              Serviceorientierung. Der Alltag fühlt sich oft freier an. Mehr
              Zeit draußen, mehr Bewegung und mehr Begegnung prägen das Leben.
            </p>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:px-8">
          <h2 className="font-[Georgia,'Times_New_Roman',serif] text-3xl text-[#1f3258] sm:text-4xl">
            Vertrauen &amp; Sicherheit im Ruhestand
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#deccb3] bg-[#fffaf3] p-5 sm:p-7 shadow-[0_12px_25px_rgba(39,44,53,0.08)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e0c8a8] bg-[#f8ead8] text-[#855e33]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <path
                    d="M7 3h7l4 4v14H7z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3v5h5M10 12h5M10 16h5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <h3 className="mt-5 font-[Georgia,'Times_New_Roman',serif] text-xl text-[#21365c] sm:text-2xl">
                Visa und Aufenthaltsrecht
              </h3>
              <p className="mt-3 leading-relaxed text-[#4a5564]">
                Wir unterstützen Sie bei allen Fragen zu Visa und
                Aufenthaltsrecht für Ihren Ruhestand in Südafrika.
              </p>
              <a
                href="#kontakt"
                className="mt-6 inline-block w-full rounded-full border border-[#a9783f] bg-[#b88346] px-6 py-2.5 text-center font-semibold text-[#fff7ea] transition hover:bg-[#a9783f] sm:w-auto"
              >
                Mehr erfahren
              </a>
            </article>

            <article className="rounded-2xl border border-[#deccb3] bg-[#fffaf3] p-5 sm:p-7 shadow-[0_12px_25px_rgba(39,44,53,0.08)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e0c8a8] bg-[#f8ead8] text-[#855e33]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                  <path
                    d="M12 4v14M7 20h10M6 8h12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 8l-2.5 4h5L8 8zm8 0l-2.5 4h5L16 8z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-5 font-[Georgia,'Times_New_Roman',serif] text-xl text-[#21365c] sm:text-2xl">
                Rechtliche Sicherheit
              </h3>
              <p className="mt-3 leading-relaxed text-[#4a5564]">
                Seriöse Beratung zu rechtlichen und finanziellen Fragen. Wir
                sorgen für Ihren sicheren Übergang.
              </p>
              <a
                href="#leistungen"
                className="mt-6 inline-block w-full rounded-full border border-[#b88346] px-6 py-2.5 text-center font-semibold text-[#8a6236] transition hover:bg-[#f1dfc7] sm:w-auto"
              >
                Unsere Leistungen
              </a>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-2 sm:px-5 sm:py-3 md:px-8">
          <div className="rounded-3xl border border-[#ddccb4] bg-[#f9f0e5] px-5 py-8 sm:px-7 sm:py-10 md:px-10">
            <h2 className="font-[Georgia,'Times_New_Roman',serif] text-2xl text-[#1f3258] sm:text-3xl">
              Ruhestand als neuer Anfang
            </h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-[#475364]">
              Für viele ist der Ruhestand nicht nur ein Abschluss, sondern ein
              Übergang. Die Frage ist nicht mehr nur wo man lebt, sondern wie
              man leben möchte. Südafrika kann genau darauf eine Antwort sein -
              ein bewusster Schritt hin zu mehr Lebensqualität, mehr
              Selbstbestimmung und einem Alltag, der sich wieder nach Leben
              anfühlt.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-16 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h2 className="font-[Georgia,'Times_New_Roman',serif] text-3xl text-[#1f3258] sm:text-4xl">
                Persönliche Begleitung nach Ihren Wünschen
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475364] sm:text-lg">
                Wir begleiten Sie Schritt für Schritt in Ihren neuen
                Lebensabschnitt in Südafrika. Persönlich, vertrauensvoll und
                kompetent.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?auto=format&fit=crop&w=1100&q=80"
              alt="Lächelndes älteres Paar"
              width={1100}
              height={730}
              className="h-full min-h-72 w-full rounded-2xl object-cover shadow-[0_20px_35px_rgba(39,44,53,0.16)]"
            />
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-6xl px-4 pb-14 sm:px-5 sm:pb-20 md:px-8">
          <div className="rounded-3xl border border-[#d8c2a1] bg-[#f8ecdb] p-6 sm:p-8 md:p-12">
            <h2 className="font-[Georgia,'Times_New_Roman',serif] text-2xl text-[#1f3258] sm:text-3xl md:text-4xl">
              Eine Entscheidung, die gut vorbereitet sein will
            </h2>
            <p className="mt-5 max-w-4xl leading-relaxed text-[#475364]">
              So viel Potenzial Südafrika bietet - es ist kein Ort für
              unüberlegte Entscheidungen. Es braucht Klarheit, Vorbereitung und
              ein ehrliches Abwägen. Es geht nicht darum, Südafrika
              schönzureden, sondern herauszufinden: Passt dieses Land wirklich
              zu Ihnen und zu Ihrem Ruhestand?
            </p>
            <a
              href="#"
              className="mt-8 inline-block w-full rounded-full border border-[#a9783f] bg-[#b88346] px-8 py-3 text-center text-base font-semibold text-[#fff7ea] transition hover:bg-[#a9783f] sm:w-auto"
            >
              Beratungsgespräch vereinbaren
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8c7ae] bg-[#faf5ee] py-6 text-center text-sm text-[#596273]">
        Ruhestandsberatung Südafrika
      </footer>
    </div>
  );
}
