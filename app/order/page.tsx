"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export default function OrderPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = formData.get("customerName") as string;
    const phone = formData.get("phone") as string;
    const businessType = formData.get("businessType") as string;
    const serviceType = formData.get("serviceType") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as File | null;

    let imagePath: string | null = null;

    if (image && image.size > 0) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
      ];

      if (!allowedTypes.includes(image.type)) {
        setError("فرمت عکس باید JPG، PNG یا WebP باشد.");
        setLoading(false);
        return;
      }

      if (image.size > 10 * 1024 * 1024) {
        setError("حجم عکس نباید بیشتر از ۱۰ مگابایت باشد.");
        setLoading(false);
        return;
      }

      const fileExtension = image.name.split(".").pop() || "jpg";
      const fileName =
        crypto.randomUUID() + "." + fileExtension;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, image, {
          contentType: image.type,
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);
        setError("آپلود عکس انجام نشد. لطفاً دوباره تلاش کنید.");
        setLoading(false);
        return;
      }

      imagePath = fileName;
    }

    const { error: insertError } = await supabase
      .from("orders")
      .insert({
        customer_name: customerName,
        phone: phone,
        business_type: businessType,
        service_type: serviceType,
        description: description,
        image_path: imagePath,
      });

    if (insertError) {
      console.error(insertError);

      if (imagePath) {
        await supabase.storage
          .from("product-images")
          .remove([imagePath]);
      }

      setError("ثبت سفارش انجام نشد. لطفاً دوباره تلاش کنید.");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSuccess(true);
    form.reset();
  }

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

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">
            ثبت سفارش
          </p>

          <h1 className="mt-4 text-4xl font-black">
            سفارش تولید محتوای تصویری
          </h1>

          <p className="mt-5 leading-8 text-gray-600">
            اطلاعات سفارش خود را وارد کنید و عکس محصول را ارسال کنید.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-8 rounded-3xl border p-8 shadow-sm"
        >
          <div>
            <label className="mb-3 block font-semibold">
              نام و نام خانوادگی
            </label>

            <input
              name="customerName"
              required
              type="text"
              placeholder="مثلاً محمد احمدی"
              className="w-full rounded-xl border px-4 py-4 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-3 block font-semibold">
              شماره موبایل
            </label>

            <input
              name="phone"
              required
              type="tel"
              placeholder="09xxxxxxxxx"
              className="w-full rounded-xl border px-4 py-4 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-3 block font-semibold">
              نوع کسب‌وکار
            </label>

            <select
              name="businessType"
              className="w-full rounded-xl border bg-white px-4 py-4"
            >
              <option>فروشگاه</option>
              <option>رستوران</option>
              <option>کافه</option>
              <option>پوشاک</option>
              <option>لوازم آرایشی</option>
              <option>املاک</option>
              <option>فروشگاه اینترنتی</option>
              <option>سایر</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block font-semibold">
              خدمت موردنظر
            </label>

            <select
              name="serviceType"
              className="w-full rounded-xl border bg-white px-4 py-4"
            >
              <option>
                ویرایش عکس محصول — از ۱۹۰ هزار تومان
              </option>

              <option>
                تصویر تبلیغاتی با AI — از ۹۹۰ هزار تومان
              </option>

              <option>
                پک تولید محتوای محصول — از ۲.۹ میلیون تومان
              </option>
            </select>
          </div>

          <div>
            <label className="mb-3 block font-semibold">
              عکس محصول
            </label>

            <input
              name="image"
              required
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="w-full rounded-xl border px-4 py-4"
            />

            <p className="mt-2 text-sm text-gray-500">
              فرمت‌های مجاز: JPG، PNG و WebP — حداکثر ۱۰ مگابایت
            </p>
          </div>

          <div>
            <label className="mb-3 block font-semibold">
              توضیحات سفارش
            </label>

            <textarea
              name="description"
              rows={5}
              placeholder="توضیحات موردنظر خود را بنویسید..."
              className="w-full rounded-xl border px-4 py-4 outline-none focus:border-black"
            />
          </div>

          {success && (
            <div className="rounded-xl bg-green-50 p-4 text-green-700">
              سفارش شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.
            </div>
          )}

          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-xl bg-black px-6 py-4 font-semibold text-white disabled:opacity-50"
          >
            {loading
              ? "در حال آپلود و ثبت سفارش..."
              : "ثبت سفارش"}
          </button>
        </form>
      </section>
    </main>
  );
}
