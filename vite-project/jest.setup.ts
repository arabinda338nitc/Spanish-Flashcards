import '@testing-library/jest-dom';

// Polyfill for TextEncoder/TextDecoder in Jest (Node)
if (typeof globalThis.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  globalThis.TextEncoder = TextEncoder;
  globalThis.TextDecoder = TextDecoder;
}
