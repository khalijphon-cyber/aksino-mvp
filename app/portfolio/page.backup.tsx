export default function PortfolioPage() {
  const projects = [
    {
      title: "کمپین تبلیغاتی محصول",
      category: "فروشگاه",
      description: "تبدیل عکس ساده محصول به تصویر تبلیغاتی حرفه‌ای",
    },
    {
      title: "محتوای اینستاگرام",
      category: "پوشاک",
      description: "طراحی مجموعه تصاویر هماهنگ برای شبکه‌های اجتماعی",
    },
    {
      title: "تبلیغات رستوران",
      category: "رستوران و کافه",
      description: "طراحی تصاویر جذاب برای معرفی غذا و منو",
    },
    {
      title: "معرفی محصول",
      category: "لوازم آرایشی",
      description: "ساخت تصاویر تبلیغاتی با استفاده از هوش مصنوعی",
    },
    {
      title: "محتوای فروشگاهی",
      category: "فروشگاه آنلاین",
      description: "آماده‌سازی تصاویر محصول برای فروش آنلاین",
    },
    {
      title: "کمپین شبکه اجتماعی",
      category: "کسب‌وکار محلی",
      description: "طراحی مجموعه محتوای تصویری برای تبلیغات",
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold">
            عکسینو
          </a>

          <nav className="flex gap-6 text-sm">
            <a href="/">خانه</a>
            <a href="/services">خدمات</a>
            <a href="/portfolio">نمونه‌کارها</a>
            <a href="/order">ثبت سفارش</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold text-gray-500">
            نمونه‌کارهای عکسینو
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            نمونه‌هایی از محتوای تبلیغاتی
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            در این بخش نمونه‌هایی از پروژه‌های تولید محتوای تصویری عکسینو را
            مشاهده می‌کنید.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm"
            >
              <div className="flex h-64 items-center justify-center bg-gray-100 text-7xl">
                📸
              </div>

              <div className="p-7">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  {project.category}
                </span>

                <h2 className="mt-5 text-xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            می‌خواهی محصول تو هم در این بخش قرار بگیرد؟
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            عکس محصولت را ارسال کن و اجازه بده عکسینو آن را به یک تصویر
            تبلیغاتی حرفه‌ای تبدیل کند.
          </p>

          <a
            href="/order"
            className="mt-8 inline-block rounded-xl bg-black px-7 py-4 font-semibold text-white"
          >
            ثبت سفارش
          </a>
        </div>
      </section>
    </main>
  );
}
