const { $ } = require('@wdio/globals');
const Page = require('./page');

class HelloPage extends Page {
	get input() {
		return $('input[data-testid="input"]');
	}

	get button() {
		return $('button[data-testid="button"]');
	}

	get title() {
		return $('h1[data-testid="title"]');
	}

	async toggleTitle(text) {
		await this.input.setValue(text);
		await this.button.click();
	}

	open() {
		return super.open('hello-world');
	}
}

module.exports = new HelloPage();
