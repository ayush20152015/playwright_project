const {test,expect}= require('@playwright/test');

test('test',async ({page})=>{
  await page.goto('https://chatgpt.com/');
  await page.pause();
  await page.getByRole('textbox', { name: 'Chat with ChatGPT' }).getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Chat with ChatGPT' }).fill('hi bro ');
  await page.locator('text=Hey! What’s up?')

})






