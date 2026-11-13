/**
 * Restricts `value` to the range `[min, max]`.
 *
 * A `NaN` value, such as from a number field holding text that isn't a number, returns `min` so
 * that a component never stores a value outside its range.
 */
export function clamp(value: number, min: number, max: number): number {
	if (Number.isNaN(value)) {
		return min;
	}
	return Math.min(Math.max(value, min), max);
}
