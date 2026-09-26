export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold">عکسینو</div>

          <nav className="flex gap-6 text-sm">
            <a href="/">خانه</a>
            <a href="/services">خدمات</a>
            <a href="/portfolio">نمونه‌کارها</a>
            <a href="/order">ثبت سفارش</a>
          </nav>

          <a
            href="/order"
            className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            ثبت سفارش
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-5 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm">
            تولید محتوای تصویری با هوش مصنوعی
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            عکس محصولاتت را به محتوای تبلیغاتی حرفه‌ای تبدیل کن
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            عکسینو به کسب‌وکارهای محلی کمک می‌کند با ترکیب هوش مصنوعی و
            کنترل کیفیت انسانی، عکس محصولات خود را به محتوای جذاب تبلیغاتی
            تبدیل کنند.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/order"
              className="rounded-xl bg-black px-6 py-4 font-semibold text-white"
            >
              شروع سفارش
            </a>

            <a
              href="/portfolio"
              className="rounded-xl border px-6 py-4 font-semibold"
            >
              مشاهده نمونه‌کارها
            </a>
          </div>
        </div>

        <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-gray-100 text-8xl">
          📸
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">خدمات عکسینو</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["ویرایش عکس محصول", "از ۱۹۰ هزار تومان"],
              ["تصویر تبلیغاتی با AI", "از ۹۹۰ هزار تومان"],
              ["پک تولید محتوای محصول", "از ۲.۹ میلیون تومان"],
            ].map(([title, price]) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-gray-600">{price}</p>

                <a
                  href="/order"
                  className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-sm text-white"
                >
                  سفارش
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">چرا عکسینو؟</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            "تحویل سریع",
            "هزینه مناسب",
            "طراحی اختصاصی",
            "کنترل کیفیت انسانی",
          ].map((item) => (
            <div key={item} className="rounded-2xl border p-6">
              <h3 className="font-bold">{item}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                مناسب برای کسب‌وکارهای محلی و فروش در شبکه‌های اجتماعی.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            آماده‌ای محتوای حرفه‌ای برای کسب‌وکارت بسازی؟
          </h2>

          <a
            href="/order"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-4 font-semibold text-black"
          >
            ثبت سفارش
          </a>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © ۱۴۰۵ عکسینو — استودیو تولید محتوای تصویری با AI
      </footer>
    </main>
  );
}
