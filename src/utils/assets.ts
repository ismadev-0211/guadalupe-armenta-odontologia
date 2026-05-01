/// <reference types="vite/client" />

/**
 * Resolves a public asset path using Vite's BASE_URL.
 * Works correctly both in development (base: '/') and
 * in production with a sub-path base (e.g. '/my-repo/').
 *
 * Usage:
 *   getAssetUrl('/logo.jpeg')  →  '/guadalupe-armenta-odontologia/logo.jpeg'
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
