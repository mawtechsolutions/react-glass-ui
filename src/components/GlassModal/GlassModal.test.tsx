// @vitest-environment jsdom
/**
 * Centering contract for GlassModal (regression: voicedesk LAND-1-F).
 *
 * The panel is animated by framer-motion, which takes ownership of the
 * element's `transform` and rests it at `none` once the open animation
 * settles. Any transform-based centering on the panel (left/top-1/2 +
 * -translate-1/2) is therefore silently wiped the moment animations run
 * (masked under prefers-reduced-motion, which skips the transform
 * animation — that is how it originally escaped review). Centering must
 * live on the static frame div that wraps the panel.
 *
 * jsdom cannot compute layout, so this pins the class contract.
 */
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { GlassModal } from "./GlassModal";

beforeAll(() => {
  // jsdom has no matchMedia; framer-motion queries it for reduced-motion.
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  );
});

describe("GlassModal centering contract", () => {
  it("never centers the animated panel with transform classes", () => {
    render(
      <GlassModal open title="Title">
        content
      </GlassModal>
    );
    const panel = screen.getByRole("dialog");
    expect(panel.className).not.toMatch(/-translate-[xy]-1\/2/);
    expect(panel.className).not.toMatch(/(?:^|\s)(?:left|top)-1\/2(?:\s|$)/);
    // The panel opts back into pointer events (its frame disables them).
    expect(panel.className).toMatch(/pointer-events-auto/);
  });

  it("centers via a static frame that passes backdrop clicks through", () => {
    render(
      <GlassModal open title="Title">
        content
      </GlassModal>
    );
    const frame = screen.getByRole("dialog").parentElement!;
    for (const cls of [
      "fixed",
      "inset-0",
      "grid",
      "place-items-center",
      "pointer-events-none",
    ]) {
      expect(frame.className).toContain(cls);
    }
  });

  it("still respects contentClassName overrides on the panel", () => {
    render(
      <GlassModal open title="Title" contentClassName="max-w-none custom-x">
        content
      </GlassModal>
    );
    const panel = screen.getByRole("dialog");
    expect(panel.className).toContain("custom-x");
    expect(panel.className).toContain("max-w-none");
    expect(panel.className).not.toMatch(/(?:^|\s)max-w-md(?:\s|$)/);
  });
});
