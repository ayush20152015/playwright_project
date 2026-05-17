const {test,expect}= require('@playwright/test');


/* test('test',async ({page})=>{
  await page.goto('https://chatgpt.com/');
  await page.pause();
  await page.getByRole('textbox', { name: 'Chat with ChatGPT' }).getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Chat with ChatGPT' }).fill('hi bro ');
  await page.locator('text=Hey! What’s up?');

}); */


test('logintest',async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // await page.pause();
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox',{name: 'Password'}).fill('admin123');
  // await page.pause();
   await page.getByRole('button', { name: 'Login' }).click();
  //  await page.pause();
await expect(
  page.getByRole('heading', { name: 'Dashboard' })
).toHaveText('Dashboard');



});












