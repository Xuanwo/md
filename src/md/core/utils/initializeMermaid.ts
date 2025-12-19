export async function initializeMermaid() {
  if (typeof window !== `undefined` && (window as any).mermaid) {
    const mermaid = (window as any).mermaid
    mermaid.initialize({ startOnLoad: false })
  }
}
