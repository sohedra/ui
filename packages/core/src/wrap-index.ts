/**
 * Wraps `index` into a list of `length` items, so that moving past either end continues from the
 * other: `wrapIndex(-1, 3)` is `2` and `wrapIndex(3, 3)` is `0`. Arrow-key navigation in lists,
 * menus and tabs uses this to loop focus.
 *
 * Returns `-1`, meaning no item, when the list is empty.
 */
export function wrapIndex(index: number, length: number): number {
	if (length <= 0) {
		return -1;
	}
	return ((index % length) + length) % length;
}
