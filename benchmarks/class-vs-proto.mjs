/* eslint-disable n/no-unpublished-import */
import { bench } from '../packages/bep-004/distribution/index.js'

class ClassThing {
	a() {
		//
	}

	b() {
		//
	}

	c() {
		//
	}

	d() {
		//
	}

	e() {
		//
	}
}

function functionThing() {
	return {
		a() {
			//
		},
		b() {
			//
		},
		c() {
			//
		},
		d() {
			//
		},
		e() {
			//
		},
	}
}

await bench('Class vs Proto', async ({ mark }) => {
	await mark('class', () => {
		new ClassThing()
	})

	await mark('function', () => {
		functionThing()
	})
})
