import type { Fn } from '@cultura-ai/types';

const defaultWindow = (globalThis as any)?.window;

export function fastIdle(callback: Fn) {
	if (defaultWindow?.requestIdleCallback) {
		defaultWindow?.requestIdleCallback(callback);
	} else if (defaultWindow?.requestAnimationFrame) {
		defaultWindow?.requestAnimationFrame(callback);
	} else {
		setTimeout(callback, 0);
	}
}

export function fastIdlePromise() {
	return new Promise<void>((resolve) => fastIdle(resolve));
}
