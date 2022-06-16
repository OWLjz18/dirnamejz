import path from 'path';

Object.defineProperty(global, '__filenamejz', {

	get: function () {

		try {

			throw new Error('dirnamejz: Hey! You shouldn\'t see this error :(');

		} catch (err) {

			const errorLines = err.stack.split('\n');

			const lineWithPath = errorLines.map(line => line.trim()).find(line => line.startsWith('at file:'));

			const filename = path.normalize(lineWithPath.replace('at file:', '').replace(/:\d+:\d+/, ''));

			return filename;

		}

	}

});

Object.defineProperty(global, '__dirnamejz', {

	get: function () {

		return path.join(__filenamejz, '..');

	}

});
