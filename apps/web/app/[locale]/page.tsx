export default function LocalePage({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <main style={{ padding: 40 }}>
      <h1>Mounta</h1>
      <p>Your AI-powered goal & life assistant</p>
      <p>Locale: {params.locale}</p>
    </main>
  );
}
