const portfolioItems = [
  {
    category: "پوشاک",
    title: "استایل محصول برای اینستاگرام",
    beforeLabel: "عکس اولیه",
    afterLabel: "خروجی تبلیغاتی",
    tone: "from-rose-100 via-white to-orange-100",
    accent: "bg-rose-500",
    icon: "👕",
  },
  {
    category: "کافه و رستوران",
    title: "تصویر تبلیغاتی غذا",
    beforeLabel: "عکس موبایلی",
    afterLabel: "تصویر تبلیغاتی",
    tone: "from-amber-100 via-white to-red-100",
    accent: "bg-amber-500",
    icon: "🍔",
  },
  {
    category: "آرایشی",
    title: "ویژوال لوکس محصول",
    beforeLabel: "عکس ساده",
    afterLabel: "خروجی استودیویی",
    tone: "from-fuchsia-100 via-white to-violet-100",
    accent: "bg-fuchsia-500",
    icon: "🧴",
  },
  {
    category: "فروشگاهی",
    title: "نمایش محصول برای فروشگاه",
    beforeLabel: "عکس خام",
    afterLabel: "آماده انتشار",
    tone: "from-sky-100 via-white to-cyan-100",
    accent: "bg-cyan-500",
    icon: "📦",
  },
  {
    category: "اکسسوری",
    title: "ویژوال مینیمال محصول",
    beforeLabel: "عکس اولیه",
    afterLabel: "خروجی نهایی",
    tone: "from-slate-100 via-white to-indigo-100",
    accent: "bg-indigo-500",
    icon: "⌚",
  },
  {
    category: "محصولات محلی",
    title: "تصویر تبلیغاتی برند",
    beforeLabel: "عکس موبایلی",
    afterLabel: "محتوای برند",
    tone: "from-emerald-100 via-white to-teal-100",
    accent: "bg-emerald-500",
    icon: "🫙",
  },
];

const categories = ["همه", "پوشاک", "کافه و رستوران", "آرایشی", "فروشگاهی", "اکسسوری"];

function ProductVisual({
  item,
  after = false,
}: {
  item: (typeof portfolioItems)[number];
  after?: boolean;
}) {
  return (
    <div
      className={`relative h-full min-h-[250px] overflow-hidden bg-gradient-to-br ${item.tone}`}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/80 blur-2xl" />

      {after ? (
        <>
          <div className="absolute inset-x-8 bottom-8 top-10 rounded-[2rem] border border-white/80 bg-white/45 shadow-[0_25px_60px_rgba(0,0,0,.10)] backdrop-blur">
            <div className="absolute right-5 top-5 rounded-full bg-black/80 px-3 py-1.5 text-[10px] font-bold text-white">
              AI VISUAL
            </div>
            <div className="flex h-full items-center justify-center">
              <div className="flex h-36 w-28 rotate-[-4deg] items-center justify-center rounded-[1.6rem] border border-white/80 bg-white/80 text-6xl shadow-2xl">
                {item.icon}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-bold text-black/45">
              <span>AKSINO</span>
              <span>READY TO POST</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-x-12 bottom-12 top-16 rounded-[1.8rem] border border-black/5 bg-white/65 shadow-lg">
            <div className="flex h-full items-center justify-center">
              <div className="flex h-28 w-24 items-center justify-center rounded-2xl border border-black/5 bg-white text-5xl shadow-sm grayscale">
                {item.icon}
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 rounded-full border border-black/5 bg-white/80 px-3 py-1.5 text-[10px] font-bold text-black/45 backdrop-blur">
            ORIGINAL PHOTO
          </div>
        </>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#fafafa] text-[#111]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fafafa]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-lg text-white shadow-lg">
              آ
            </span>
            <div>
              <div className="text-xl font-black tracking-tight">عکسینو</div>
              <div className="hidden text-[10px] font-medium text-black/45 sm:block">
                AI CREATIVE STUDIO
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/" className="text-black/55 transition hover:text-black">
              خانه
            </a>
            <a href="/services" className="text-black/55 transition hover:text-black">
              خدمات
            </a>
            <a href="/portfolio" className="text-black">
              نمونه‌کارها
            </a>
            <a href="/order" className="text-black/55 transition hover:text-black">
              ثبت سفارش
            </a>
          </nav>

          <a
            href="/order"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            شروع سفارش
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-bold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              نمونه‌کارهای عکسینو
            </div>

            <h1 className="text-5xl font-black leading-[1.12] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              یک عکس ساده،
              <span className="block bg-gradient-to-l from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                چند برابر حرفه‌ای‌تر.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
              نمونه‌های زیر شکل خروجی‌ای را نشان می‌دهند که می‌توانیم از یک عکس
              معمولی محصول برای فروشگاه، اینستاگرام و کمپین تبلیغاتی بسازیم.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  index === 0
                    ? "bg-black text-white shadow-lg"
                    : "border border-black/8 bg-white text-black/55 hover:border-black/20 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_20px_70px_rgba(0,0,0,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,.10)]"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <ProductVisual item={item} />
                  <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black text-black/55 shadow-sm backdrop-blur">
                    BEFORE
                  </div>
                </div>

                <div className="relative">
                  <ProductVisual item={item} after />
                  <div className="absolute right-5 top-5 rounded-full bg-black px-3 py-1.5 text-[10px] font-black text-white shadow-sm">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-between gap-5 border-t border-black/6 p-6">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold text-black/40">
                    <span className={`h-2 w-2 rounded-full ${item.accent}`} />
                    {item.category}
                  </div>
                  <h2 className="text-xl font-black">{item.title}</h2>
                </div>
                <span className="text-xs font-black text-black/20">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-dashed border-black/12 bg-white/60 px-6 py-8 text-center">
          <p className="text-sm leading-7 text-black/45">
            تصاویر بالا در این مرحله نمونه‌های نمایشی رابط کاربری هستند. در مرحله
            بعد می‌توانیم تصاویر واقعی Before / After سفارش‌های شما را از همین
            بخش مدیریت کنیم.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#121015] px-6 py-16 text-center text-white sm:px-10 md:py-20">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative">
            <div className="text-xs font-bold tracking-[.25em] text-cyan-300">
              READY TO CREATE
            </div>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              محصولت را برای فروش
              <span className="block text-white/45">حرفه‌ای‌تر نشان بده.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
              عکس محصولت را بفرست و بگذار عکسینو نسخه تبلیغاتی آن را برایت آماده کند.
            </p>
            <a
              href="/order"
              className="mt-8 inline-flex rounded-2xl bg-white px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:shadow-2xl"
            >
              ثبت سفارش جدید
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/6 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-black/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-black text-black">عکسینو</span> — AI Creative Studio
          </div>
          <div>تولید محتوای تصویری برای کسب‌وکارهای محلی</div>
        </div>
      </footer>
    </main>
  );
}
