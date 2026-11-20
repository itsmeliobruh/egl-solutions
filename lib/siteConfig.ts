// A2P 10DLC: the campaign was approved 2026-11-17, so the lead form is back on.
// The GHL chat widget is still the only thing on the site that collects SMS consent
// (the website form's T&C line no longer mentions texts). Set this to false to go
// back to chat-only mode (every /book link opens the chat widget instead).
export const LEAD_FORM_ENABLED = true

// Pages whose one job is a GHL form or calendar (Melio, 2026-11-20): no chat bubble and
// no "Get my free audit" button in the navbar there, so nothing pulls people off the form.
export const FORM_PAGE_ROUTES = ['/book', '/schedule', '/thank-you']

export const isFormPage = (pathname: string | null | undefined) =>
  FORM_PAGE_ROUTES.some((route) => pathname === route || pathname?.startsWith(route + '/'))

type ChatWidgetWindow = Window & {
  leadConnector?: { chatWidget?: { openWidget?: () => void } }
}

/** Opens the GHL chat widget. Returns false if the widget hasn't loaded yet. */
export function openChatWidget(): boolean {
  const widget = (window as ChatWidgetWindow).leadConnector?.chatWidget
  if (!widget?.openWidget) return false
  widget.openWidget()
  return true
}
