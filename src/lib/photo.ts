import { existsSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/content/profile";

/** The designed hero portrait if it has been added to public/, else null (the cut-out portrait is used). */
export function designPhoto(): string | null {
  const file = profile.designPhotoFiles.find((f) => existsSync(join(process.cwd(), "public", f)));
  return file ? `/${file}` : null;
}

/** The full-length About-page photo if it has been added to public/, else null (the cut-out portrait is used). */
export function aboutPhoto(): string | null {
  const file = profile.aboutPhotoFiles.find((f) => existsSync(join(process.cwd(), "public", f)));
  return file ? `/${file}` : null;
}
