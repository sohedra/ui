import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { clamp } from "./clamp.ts";

/** Two finite or infinite numbers, ordered so that `min <= max`. */
const range = fc
	.tuple(fc.double({ noNaN: true }), fc.double({ noNaN: true }))
	.map(([a, b]) => (a <= b ? [a, b] : [b, a]) as const);

describe("clamp", () => {
	it("returns a value within the range", () => {
		fc.assert(
			fc.property(fc.double(), range, (value, [min, max]) => {
				const result = clamp(value, min, max);
				expect(result).toBeGreaterThanOrEqual(min);
				expect(result).toBeLessThanOrEqual(max);
			}),
		);
	});

	it("leaves a value that is already in range unchanged", () => {
		fc.assert(
			fc.property(range, fc.double({ min: 0, max: 1, noNaN: true }), ([min, max], t) => {
				const value = Math.min(Math.max(min + (max - min) * t, min), max);
				fc.pre(Number.isFinite(value));
				expect(clamp(value, min, max)).toBe(value);
			}),
		);
	});

	it("gives the same result when applied twice", () => {
		fc.assert(
			fc.property(fc.double(), range, (value, [min, max]) => {
				const once = clamp(value, min, max);
				expect(clamp(once, min, max)).toBe(once);
			}),
		);
	});

	it("returns min for NaN", () => {
		fc.assert(
			fc.property(range, ([min, max]) => {
				expect(clamp(Number.NaN, min, max)).toBe(min);
			}),
		);
	});
});
