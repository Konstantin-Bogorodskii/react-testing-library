const HelloPage = require('../pages/hello.page');

describe('My hello world page', () => {
	it('should toggle', async () => {
		await HelloPage.open();
		await HelloPage.toggleTitle('hello');
		await expect(HelloPage.title).toBeExisting();
		await HelloPage.button.click();
		await expect(HelloPage.title).not.toBeExisting();
	});

	it('should not toggle', async () => {
		await HelloPage.open();
		await HelloPage.toggleTitle('asfasfasf');
		await expect(HelloPage.title).not.toBeExisting();
	});
});
