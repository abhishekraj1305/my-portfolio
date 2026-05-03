// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

if (typeof require.context !== 'function') {
  require.context = () => {
    const context = () => '';
    context.keys = () => [];
    return context;
  };
}

HTMLCanvasElement.prototype.getContext = () => null;

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = window.IntersectionObserver || MockIntersectionObserver;
window.ResizeObserver = window.ResizeObserver || MockResizeObserver;
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }));
