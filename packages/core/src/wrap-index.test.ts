import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { wrapIndex } from "./wrap-index.ts";

const length = fc.integer({ min: 1, max: 1000 });
const index = fc.integer({ min: -1_000_000, max: 1_000_000 });

describe("wrapIndex", () => {
	it("returns an index within the list", () => {
		fc.assert(
			fc.property(index, length, (i, n) => {
				const result = wrapIndex(i, n);
				expect(Number.isInteger(result)).toBe(true);
				expect(result).toBeGreaterThanOrEqual(0);
				expect(result).toBeLessThan(n);
			}),
		);
	});

	it("leaves an index that is already in the list unchanged", () => {
		fc.assert(
			fc.property(
				length.chain((n) => fc.tuple(fc.integer({ min: 0, max: n - 1 }), fc.constant(n))),
				([i, n]) => {
					expect(wrapIndex(i, n)).toBe(i);
				},
			),
		);
	});

	it("gives the same item after moving a whole lap in either direction", () => {
		fc.assert(
			fc.property(index, length, (i, n) => {
				expect(wrapIndex(i + n, n)).toBe(wrapIndex(i, n));
				expect(wrapIndex(i - n, n)).toBe(wrapIndex(i, n));
			}),
		);
	});

	it("moves from the last item to the first and back", () => {
		fc.assert(
			fc.property(length, (n) => {
				expect(wrapIndex(n, n)).toBe(0);
				expect(wrapIndex(-1, n)).toBe(n - 1);
			}),
		);
	});

	it("returns -1 for an empty list", () => {
		fc.assert(
			fc.property(index, (i) => {
				expect(wrapIndex(i, 0)).toBe(-1);
			}),
		);
	});
});
