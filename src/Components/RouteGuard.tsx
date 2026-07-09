import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RouteGuardProps {
  /**
   * Predicate deciding whether the wrapped route may render.
   * Return `true` to allow, `false` to redirect. Swap this out for real
   * auth/feature-flag logic later (e.g. check a session token).
   */
  canActivate?: boolean | (() => boolean);
  /** Where to send the user when access is denied. */
  redirectTo?: string;
  children: ReactNode;
}

/**
 * Router guard.
 *
 * Wrap any route element to gate access behind a condition. This is the
 * skeleton requested in the brief — by default it allows everything, so the
 * public site works out of the box, but the hook is in place for future
 * protected areas (e.g. an admin/content editor).
 *
 *   <Route path="/admin" element={
 *     <RouteGuard canActivate={isAuthed} redirectTo="/">
 *       <AdminPage />
 *     </RouteGuard>
 *   } />
 */
export default function RouteGuard({
  canActivate = true,
  redirectTo = "/",
  children,
}: RouteGuardProps) {
  const location = useLocation();
  const allowed =
    typeof canActivate === "function" ? canActivate() : canActivate;

  if (!allowed) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
