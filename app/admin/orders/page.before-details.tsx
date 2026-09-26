"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Order = {
  id: number;
  customer_name: string;
  phone: string;
  business_type: string | null;
  service_type: string;
  description: string | null;
  status: string;
  image_path: string | null;
  image_url: string | null;
  admin_note: string | null;
  created_at: string;
};

const statusOptions = [
  { value: "new", label: "جدید" },
  { value: "in_progress", label: "در حال انجام" },
  { value: "completed", label: "تکمیل‌شده" },
  { value: "cancelled", label: "لغوشده" },
];

function getStatusLabel(status: string) {
  return (
    statusOptions.find((item) => item.value === status)?.label || status
  );
}

function getStatusClass(status: string) {
  switch (status) {
    case "new":
      return "bg-blue-50 text-blue-700";
    case "in_progress":
      return "bg-amber-50 text-amber-700";
    case "completed":
      return "bg-green-50 text-green-700";
    case "cancelled":
      return "bg-red-50 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function AdminOrdersPage() {
  const router = useRouter();
  const supabase = createClient();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [savingNote, setSavingNote] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [adminNote, setAdminNote] = useState("");

  async function loadOrders() {
    setLoading(true);

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const ordersWithImages = await Promise.all(
      (data || []).map(async (order) => {
        let image_url: string | null = null;

        if (order.image_path) {
          const { data: signedData } = await supabase.storage
            .from("product-images")
            .createSignedUrl(order.image_path, 60 * 60);

          image_url = signedData?.signedUrl || null;
        }

        return {
          ...order,
          image_url,
        };
      })
    );

    setOrders(ordersWithImages);
    setLoading(false);
  }

  async function updateStatus(orderId: number, newStatus: string) {
    setUpdatingId(orderId);

    const { error } = await supabase
      .from("orders")
      .update({ status: newStatus })
      .eq("id", orderId);

    if (error) {
      alert("تغییر وضعیت انجام نشد.");
      console.error(error);
      setUpdatingId(null);
      return;
    }

    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );

    if (selectedOrder?.id === orderId) {
      setSelectedOrder({
        ...selectedOrder,
        status: newStatus,
      });
    }

    setUpdatingId(null);
  }

  async function saveAdminNote() {
    if (!selectedOrder) return;

    setSavingNote(true);

    const { error } = await supabase
      .from("orders")
      .update({ admin_note: adminNote })
      .eq("id", selectedOrder.id);

    if (error) {
      alert("ذخیره یادداشت انجام نشد.");
      console.error(error);
      setSavingNote(false);
      return;
    }

    setOrders((currentOrders) =>
      currentOrders.map((order) =>
        order.id === selectedOrder.id
          ? { ...order, admin_note: adminNote }
          : order
      )
    );

    setSelectedOrder({
      ...selectedOrder,
      admin_note: adminNote,
    });

    setSavingNote(false);
    alert("یادداشت ذخیره شد.");
  }

  function openOrder(order: Order) {
    setSelectedOrder(order);
    setAdminNote(order.admin_note || "");
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("خروج انجام نشد. دوباره تلاش کنید.");
      return;
    }

    router.replace("/admin/login");
    router.refresh();
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const filteredOrders = orders
    .filter((order) => {
      const matchesFilter =
        filter === "all" || order.status === filter;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        order.customer_name.toLowerCase().includes(search) ||
        order.phone.toLowerCase().includes(search);

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      const timeA = new Date(a.created_at).getTime();
      const timeB = new Date(b.created_at).getTime();

      return sortOrder === "newest"
        ? timeB - timeA
        : timeA - timeB;
    });

  const counts = {
    all: orders.length,
    new: orders.filter((order) => order.status === "new").length,
    in_progress: orders.filter(
      (order) => order.status === "in_progress"
    ).length,
    completed: orders.filter(
      (order) => order.status === "completed"
    ).length,
    cancelled: orders.filter(
      (order) => order.status === "cancelled"
    ).length,
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gray-50 text-gray-900"
    >
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 pt-6 lg:grid-cols-5">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">کل سفارش‌ها</p>
          <p className="mt-2 text-3xl font-black text-gray-900">
            {counts.all}
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm text-blue-700">سفارش جدید</p>
          <p className="mt-2 text-3xl font-black text-blue-900">
            {counts.new}
          </p>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
          <p className="text-sm text-amber-700">در حال انجام</p>
          <p className="mt-2 text-3xl font-black text-amber-900">
            {counts.in_progress}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p className="text-sm text-emerald-700">تکمیل‌شده</p>
          <p className="mt-2 text-3xl font-black text-emerald-900">
            {counts.completed}
          </p>
        </div>

        <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
          <p className="text-sm text-red-700">لغوشده</p>
          <p className="mt-2 text-3xl font-black text-red-900">
            {counts.cancelled}
          </p>
        </div>
      </section>

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-black">
            عکسینو
          </a>

          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold">
              مدیریت سفارش‌ها
            </h1>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
            >
              خروج
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-gray-500">
              پنل مدیریت
            </p>
            <h2 className="mt-1 text-3xl font-black">
              سفارش‌های مشتریان
            </h2>
          </div>

          <button
            onClick={loadOrders}
            disabled={loading}
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-gray-50 disabled:opacity-50"
          >
            {loading ? "در حال دریافت..." : "به‌روزرسانی"}
          </button>
        </div>

        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو بر اساس نام مشتری یا شماره تلفن..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 pr-5 text-sm shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>

          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "newest" | "oldest")
            }
            className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm shadow-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 md:w-52"
            aria-label="مرتب‌سازی سفارش‌ها"
          >
            <option value="newest">جدیدترین سفارش‌ها</option>
            <option value="oldest">قدیمی‌ترین سفارش‌ها</option>
          </select>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-2xl border bg-white p-5 text-right shadow-sm ${
              filter === "all"
                ? "border-gray-900"
                : "border-gray-200"
            }`}
          >
            <p className="text-sm text-gray-500">همه سفارش‌ها</p>
            <p className="mt-2 text-3xl font-black">{counts.all}</p>
          </button>

          <button
            onClick={() => setFilter("new")}
            className={`rounded-2xl border bg-white p-5 text-right shadow-sm ${
              filter === "new"
                ? "border-blue-600"
                : "border-gray-200"
            }`}
          >
            <p className="text-sm text-gray-500">جدید</p>
            <p className="mt-2 text-3xl font-black">{counts.new}</p>
          </button>

          <button
            onClick={() => setFilter("in_progress")}
            className={`rounded-2xl border bg-white p-5 text-right shadow-sm ${
              filter === "in_progress"
                ? "border-amber-600"
                : "border-gray-200"
            }`}
          >
            <p className="text-sm text-gray-500">در حال انجام</p>
            <p className="mt-2 text-3xl font-black">
              {counts.in_progress}
            </p>
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`rounded-2xl border bg-white p-5 text-right shadow-sm ${
              filter === "completed"
                ? "border-green-600"
                : "border-gray-200"
            }`}
          >
            <p className="text-sm text-gray-500">تکمیل‌شده</p>
            <p className="mt-2 text-3xl font-black">
              {counts.completed}
            </p>
          </button>

          <button
            onClick={() => setFilter("cancelled")}
            className={`rounded-2xl border bg-white p-5 text-right shadow-sm ${
              filter === "cancelled"
                ? "border-red-600"
                : "border-gray-200"
            }`}
          >
            <p className="text-sm text-gray-500">لغوشده</p>
            <p className="mt-2 text-3xl font-black">
              {counts.cancelled}
            </p>
          </button>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            در حال دریافت سفارش‌ها...
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            سفارشی برای نمایش وجود ندارد.
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-right">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">
                      سفارش
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      مشتری
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      خدمت
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      تصویر
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      وضعیت
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">
                      جزئیات
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b last:border-b-0 hover:bg-gray-50"
                    >
                      <td className="px-5 py-5">
                        <div className="font-bold">
                          #{order.id}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {new Date(
                            order.created_at
                          ).toLocaleString("fa-IR")}
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <div className="font-semibold">
                          {order.customer_name}
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          {order.phone}
                        </div>
                        {order.business_type && (
                          <div className="mt-1 text-xs text-gray-400">
                            {order.business_type}
                          </div>
                        )}
                      </td>

                      <td className="px-5 py-5">
                        <span className="text-sm">
                          {order.service_type}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        {order.image_url ? (
                          <img
                            src={order.image_url}
                            alt="تصویر محصول"
                            className="h-16 w-16 rounded-xl object-cover"
                          />
                        ) : (
                          <span className="text-xs text-gray-400">
                            بدون تصویر
                          </span>
                        )}
                      </td>

                      <td className="px-5 py-5">
                        <select
                          value={order.status}
                          disabled={updatingId === order.id}
                          onChange={(e) =>
                            updateStatus(
                              order.id,
                              e.target.value
                            )
                          }
                          className={`rounded-lg border-0 px-3 py-2 text-sm font-medium outline-none ${getStatusClass(
                            order.status
                          )}`}
                        >
                          {statusOptions.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="px-5 py-5">
                        <button
                          onClick={() => openOrder(order)}
                          className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-100"
                        >
                          مشاهده
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-black">
                جزئیات سفارش #{selectedOrder.id}
              </h3>

              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-lg bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
              >
                بستن
              </button>
            </div>

            {selectedOrder.image_url && (
              <img
                src={selectedOrder.image_url}
                alt="تصویر محصول"
                className="mb-6 max-h-80 w-full rounded-2xl object-contain bg-gray-50"
              />
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">نام مشتری</p>
                <p className="mt-1 font-bold">
                  {selectedOrder.customer_name}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">شماره تماس</p>
                <p className="mt-1 font-bold">
                  {selectedOrder.phone}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">نوع کسب‌وکار</p>
                <p className="mt-1 font-bold">
                  {selectedOrder.business_type || "ثبت نشده"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">نوع خدمت</p>
                <p className="mt-1 font-bold">
                  {selectedOrder.service_type}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 md:col-span-2">
                <p className="text-xs text-gray-500">وضعیت</p>
                <span
                  className={`mt-2 inline-block rounded-lg px-3 py-2 text-sm font-medium ${getStatusClass(
                    selectedOrder.status
                  )}`}
                >
                  {getStatusLabel(selectedOrder.status)}
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 md:col-span-2">
                <p className="text-xs text-gray-500">
                  توضیحات مشتری
                </p>
                <p className="mt-2 whitespace-pre-wrap leading-7">
                  {selectedOrder.description ||
                    "توضیحی ثبت نشده است."}
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 md:col-span-2">
                <div className="mb-3">
                  <p className="font-bold text-amber-900">
                    یادداشت داخلی مدیر
                  </p>
                  <p className="mt-1 text-xs text-amber-700">
                    این یادداشت برای مشتری نمایش داده نمی‌شود.
                  </p>
                </div>

                <textarea
                  value={adminNote}
                  onChange={(e) => setAdminNote(e.target.value)}
                  rows={4}
                  placeholder="یادداشت داخلی سفارش را وارد کنید..."
                  className="w-full resize-y rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
                />

                <div className="mt-3 flex justify-end">
                  <button
                    onClick={saveAdminNote}
                    disabled={savingNote}
                    className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {savingNote
                      ? "در حال ذخیره..."
                      : "ذخیره یادداشت"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
