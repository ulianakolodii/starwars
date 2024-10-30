global.ResizeObserver = class {
  observe() {}

  unobserve() {}

  disconnect() {}
};
global.IntersectionObserver = class {
  observe() {}

  unobserve() {}

  disconnect() {}
} as unknown as typeof IntersectionObserver;
