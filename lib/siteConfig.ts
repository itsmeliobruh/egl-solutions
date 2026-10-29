// A2P 10DLC review (2026-10-29): carriers require the GHL chat widget to be the
// only form on the site that collects SMS consent. While this is false, every
// booking CTA (/book links) opens the chat widget and the lead form is hidden.
// To restore the full site: set this to true, and remove the "agree to receive
// text messages" line from the GHL form's T&C checkbox first.
// Snapshot of the site before this change: git tag `pre-a2p-chat-only`.
export const LEAD_FORM_ENABLED = false

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
