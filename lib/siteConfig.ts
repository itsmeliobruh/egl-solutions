// A2P 10DLC: the campaign was approved 2026-11-17, so the lead form is back on.
// The GHL chat widget is still the only thing on the site that collects SMS consent
// (the website form's T&C line no longer mentions texts). Set this to false to go
// back to chat-only mode (every /book link opens the chat widget instead).
export const LEAD_FORM_ENABLED = true

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
