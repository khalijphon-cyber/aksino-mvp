"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
const router = useRouter();
const supabase = createClient();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();

setError("");
setLoading(true);

const { error } = await supabase.auth.signInWithPassword({
  email,
  password,
});

if (error) {
  setError("ایمیل یا رمز عبور صحیح نیست.");
  setLoading(false);
  return;
}

router.replace("/admin/orders");
router.refresh();

}

return ( <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6"> <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-200"> <div className="text-center mb-8"> <h1 className="text-2xl font-bold text-slate-900">
ورود مدیر </h1> <p className="mt-2 text-sm text-slate-500">
برای ورود به پنل مدیریت وارد شوید </p> </div>

    <form onSubmit={handleLogin} className="space-y-5" dir="rtl">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          ایمیل
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
          placeholder="ایمیل مدیر"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          رمز عبور
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-500"
          placeholder="رمز عبور"
        />
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "در حال ورود..." : "ورود به پنل"}
      </button>
    </form>
  </div>
</main>

);
}
