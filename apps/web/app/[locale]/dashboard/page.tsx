import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage({
  params,
}: {
  params: { locale: string };
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect(`/${params.locale}/sign-in`);
  }

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-4 text-gray-600">
        Welcome to your Mounta dashboard.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold text-lg">Your Goals</h2>
          <p className="text-sm text-gray-500 mt-2">
            Track and improve your progress.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-lg">AI Insights</h2>
          <p className="text-sm text-gray-500 mt-2">
            Personalized recommendations from Mounta AI.
          </p>
        </div>
      </div>
    </main>
  );
}
