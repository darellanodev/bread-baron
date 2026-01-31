import '@testing-library/jest-dom/vitest'

// JSDOM doesn't provide matchMedia; mock a minimal implementation for tests
if (typeof (window as any).matchMedia !== 'function') {
  ;(window as any).matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}
