import type { AnyFunction } from '@cultura-ai/types';

export function captureStackTrace(till: AnyFunction): string {
	const err = new Error('');

	if ('captureStackTrace' in Error) {
		(Error.captureStackTrace as any)(err, till);
	}

	return (err.stack || '').slice(6);
}
