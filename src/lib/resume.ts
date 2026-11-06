import { existsSync } from "node:fs";
import { join } from "node:path";
import { resumeFile } from "@/content/profile";

/**
 * Public URL of the downloadable resume, or null while the PDF hasn't been added.
 * Checked at build time, so the buttons appear on the next build after the file is added.
 */
export function resumeHref(): string | null {
  return existsSync(join(process.cwd(), "public", resumeFile)) ? `/${resumeFile}` : null;
}
