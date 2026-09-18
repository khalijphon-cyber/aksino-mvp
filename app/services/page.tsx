export default function ServicesPage() {
  const services = [
    {
      title: "ویرایش عکس محصول",
      price: "از ۱۹۰ هزار تومان",
      description:
        "حذف پس‌زمینه، اصلاح نور و رنگ، افزایش کیفیت و آماده‌سازی عکس محصول برای فروشگاه و شبکه‌های اجتماعی.",
    },
    {
      title: "تصویر تبلیغاتی با AI",
      price: "از ۹۹۰ هزار تومان",
      description:
        "تبدیل عکس ساده محصول به یک تصویر تبلیغاتی حرفه‌ای با طراحی خلاقانه و متناسب با برند شما.",
    },
    {
      title: "پک تولید محتوای محصول",
      price: "از ۲.۹ میلیون تومان",
      description:
        "تولید مجموعه‌ای از تصاویر هماهنگ برای معرفی محصول، تبلیغات و استفاده در اینستاگرام.",
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
            خدمات عکسینو
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            محتوای تصویری حرفه‌ای برای کسب‌وکار شما
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            عکس محصول خود را ارسال کنید و محتوای آماده تبلیغات و فروش تحویل
            بگیرید.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-3xl border p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold">{service.title}</h2>

              <div className="mt-5 text-xl font-bold">{service.price}</div>

              <p className="mt-5 flex-1 leading-8 text-gray-600">
                {service.description}
              </p>

              <a
                href="/order"
                className="mt-8 rounded-xl bg-black px-5 py-4 text-center font-semibold text-white"
              >
                سفارش این خدمت
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            مناسب برای چه کسب‌وکارهایی؟
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "فروشگاه‌ها",
              "رستوران‌ها",
              "کافه‌ها",
              "پوشاک",
              "لوازم آرایشی",
              "املاک",
              "فروشندگان اینستاگرامی",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border bg-white px-5 py-3"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          آماده‌ای سفارش خودت را ثبت کنی؟
        </h2>

        <a
          href="/order"
          className="mt-8 inline-block rounded-xl bg-black px-7 py-4 font-semibold text-white"
        >
          ثبت سفارش
        </a>
      </section>
    </main>
  );
}
