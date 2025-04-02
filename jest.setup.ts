import "@testing-library/jest-dom";
import { TextEncoder } from "util";

// Patch for Node.js: add TextEncoder/TextDecoder to the global environment
global.TextEncoder = TextEncoder;

// Mock redirect() from next/navigation to prevent actual navigation during tests
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  redirect: jest.fn(),
}));
