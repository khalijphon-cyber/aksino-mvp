export default function Home() {
  const services = [
    ["01", "ویرایش عکس محصول", "حذف پس‌زمینه، اصلاح نور و رنگ و آماده‌سازی عکس برای فروشگاه و شبکه‌های اجتماعی.", "از ۱۹۰ هزار تومان", "✦"],
    ["02", "تصویر تبلیغاتی با AI", "تبدیل عکس ساده محصول به یک تصویر تبلیغاتی خلاقانه و حرفه‌ای متناسب با برند شما.", "از ۹۹۰ هزار تومان", "✧"],
    ["03", "پک تولید محتوای محصول", "یک پکیج کامل برای معرفی محصول؛ مناسب کمپین، اینستاگرام و فروش آنلاین.", "از ۲.۹ میلیون تومان", "◈"],
  ];

  const benefits = [
    ["01", "تحویل سریع", "برای حضور سریع‌تر محصول شما در بازار و شبکه‌های اجتماعی."],
    ["02", "طراحی اختصاصی", "هر تصویر بر اساس محصول، مخاطب و هویت کسب‌وکار شما ساخته می‌شود."],
    ["03", "هوش مصنوعی + انسان", "سرعت AI را با کنترل کیفیت و نگاه انسانی ترکیب می‌کنیم."],
    ["04", "مناسب کسب‌وکار محلی", "راهکاری ساده و قابل‌دسترس برای فروشگاه‌ها و برندهای محلی."],
  ];

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#fafafa] text-[#111]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fafafa]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-lg text-white shadow-lg">آ</span>
            <div>
              <div className="text-xl font-black tracking-tight">عکسینو</div>
              <div className="hidden text-[10px] font-medium text-black/45 sm:block">AI CREATIVE STUDIO</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/" className="text-black">خانه</a>
            <a href="/services" className="text-black/55 transition hover:text-black">خدمات</a>
            <a href="/portfolio" className="text-black/55 transition hover:text-black">نمونه‌کارها</a>
            <a href="/order" className="text-black/55 transition hover:text-black">ثبت سفارش</a>
          </nav>

          <a href="/order" className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl">
            شروع سفارش
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-cyan-200/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 sm:px-8 md:grid-cols-[1.05fr_.95fr] md:items-center md:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-bold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              استودیو تولید محتوای تصویری با هوش مصنوعی
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.12] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              عکس محصولت را
              <span className="block bg-gradient-to-l from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                به تبلیغ تبدیل کن.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
              عکسینو با ترکیب هوش مصنوعی و کنترل کیفیت انسانی، عکس‌های معمولی محصولات شما را به محتوای حرفه‌ای و آماده انتشار تبدیل می‌کند.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="/order" className="rounded-2xl bg-black px-7 py-4 text-center font-bold text-white shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:shadow-2xl">
                ساخت محتوای تبلیغاتی ←
              </a>
              <a href="/portfolio" className="rounded-2xl border border-black/10 bg-white px-7 py-4 text-center font-bold transition hover:-translate-y-1 hover:border-black/20">
                دیدن نمونه‌کارها
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-black/45">
              <span>✓ مناسب فروشگاه‌ها</span>
              <span>✓ مناسب اینستاگرام</span>
              <span>✓ کنترل کیفیت انسانی</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-fuchsia-300/30 via-transparent to-cyan-300/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-[0_30px_100px_rgba(0,0,0,.12)]">
              <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#17131e] via-[#342044] to-[#0d2430]">
                <div className="absolute -right-16 top-12 h-52 w-52 rounded-full bg-fuchsia-500/40 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-cyan-400/30 blur-3xl" />
                <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">AI PRODUCT VISUAL</div>

                <div className="absolute inset-x-10 bottom-10 top-20 flex items-center justify-center">
                  <div className="relative h-64 w-48 rotate-[-5deg] rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/25 to-white/5 shadow-2xl backdrop-blur-md">
                    <div className="absolute inset-4 rounded-[1.4rem] border border-white/15" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl">📦</div>
                    <div className="absolute bottom-7 left-0 right-0 text-center text-xs font-bold tracking-[.25em] text-white/70">AKSINO</div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-xs text-white/70 backdrop-blur-xl">
                  <span>Before → After</span>
                  <span className="font-bold text-white">Generated by AI</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-black/5 bg-white px-4 py-3 text-xs font-bold shadow-xl sm:-right-8">✨ آماده برای انتشار</div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 text-sm text-black/60 sm:grid-cols-3 sm:px-8">
          <div><strong className="text-black">سریع</strong> — بدون دردسر تولید محتوای سنتی</div>
          <div><strong className="text-black">خلاق</strong> — ایده‌های بصری متناسب با محصول</div>
          <div><strong className="text-black">قابل سفارش</strong> — از یک عکس تا یک پک کامل</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs font-black tracking-[.2em] text-violet-600">SERVICES</div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">از عکس تا محتوای آماده فروش</h2>
          </div>
          <a href="/services" className="text-sm font-bold text-black/50 hover:text-black">همه خدمات ←</a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map(([number, title, description, price, icon]) => (
            <div key={number} className="group rounded-[2rem] border border-black/7 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-black/25">{number}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-xl text-white">{icon}</span>
              </div>
              <h3 className="mt-10 text-2xl font-black">{title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-black/50">{description}</p>
              <div className="mt-7 flex items-center justify-between border-t border-black/6 pt-5">
                <span className="text-sm font-bold">{price}</span>
                <a href="/order" className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white">سفارش</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="mb-3 text-xs font-black tracking-[.2em] text-cyan-300">HOW IT WORKS</div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">سه قدم تا محتوایی که <span className="block text-white/45">می‌شود با آن فروخت.</span></h2>
          </div>

          <div className="grid gap-4">
            {[
              ["01", "عکس را آپلود کن", "یک عکس ساده از محصولت برای شروع کافی است."],
              ["02", "ما آن را می‌سازیم", "AI ایده و تصویر را می‌سازد و تیم ما خروجی را بررسی می‌کند."],
              ["03", "محتوا را تحویل بگیر", "خروجی نهایی آماده استفاده در شبکه‌های اجتماعی و تبلیغات است."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex gap-5">
                  <span className="text-sm font-black text-cyan-300">{num}</span>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/45">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-12">
          <div className="mb-3 text-xs font-black tracking-[.2em] text-violet-600">WHY AKSINO</div>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">چرا عکسینو؟</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/7 bg-black/7 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([num, title, text]) => (
            <div key={num} className="bg-white p-7">
              <span className="text-xs font-black text-black/20">{num}</span>
              <h3 className="mt-10 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/45">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#151019] via-[#24152e] to-[#10232a] px-7 py-16 text-center text-white sm:px-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <div className="mb-4 text-sm text-white/50">READY TO CREATE?</div>
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-5xl">آماده‌ای محصولت را حرفه‌ای‌تر نشان بدهی؟</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">یک عکس بفرست و بگذار عکسینو ایده تبلیغاتی بعدی‌ات را بسازد.</p>
            <a href="/order" className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-black text-black transition hover:-translate-y-1 hover:shadow-2xl">ثبت سفارش جدید</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-black/45 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="font-black text-black">عکسینو</div>
          <div>استودیو تولید محتوای تصویری با AI</div>
          <div>© ۱۴۰۵ عکسینو</div>
        </div>
      </footer>
    </main>
  );
}
