import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import de from "@/messages/de.json";
import es from "@/messages/es.json";
import it from "@/messages/it.json";
import ar from "@/messages/ar.json";

export const locales = ["en", "fr", "de", "es", "it", "ar"] as const;
export type Locale = (typeof locales)[number];

const messages: Record<Locale, any> = {
  en,
  fr,
  de,
  es,
  it,
  ar,
};

export function getMessages(locale: string) {
  return messages[locale as Locale] ?? messages.en;
}
