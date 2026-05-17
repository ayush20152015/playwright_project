The tests are added in test1.spec.js file which include the specific test for login automation for a demo website 
```url
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
```

The login is automated for 3 browsers :-
* firefox
* chormium
* webkit
  

* To run all playwright test in all browsers run 
``` bash
npx playwright test
```
* To run specific test in all browsers run path for the test is needed to be added
``` bash
npx playwright test .\path
```
* To run test in specific browser run ( say firefox)
``` bash
npx playwright test -- browser = firefox 
```
* To run test in headed mode run
``` bash
npx playwright test --headed 
```
* To run test in debug mode run
``` bash
npx playwright test --debug 
```

* The report for the test is available and can be accessed in headed mode by bashing following command:-

``` bash
npx playwright show report 
```

it will show the test result for all the selected browser you choose to run your test on. 

<img width="1029" height="333" alt="image" src="https://github.com/user-attachments/assets/9b451dfe-0767-456d-9a15-9030a05363a5" />

* Process of writing test for playwright
   
For writing test we need to import playwright/test module using following code snippet

``` javascript

const {expect , test } = require( '@playwright/test')

```

The test function passes two parameters in following way ;-

``` javascript

test( 'test name ' , async ({page})=>{
 // our test
})

// where {page} is the page fixture 
```
* The test include assertions and actions like click, fill by location DOM elements 
The test return promises to test functions which can be written or generated via codegen

To know more about assertions visit 

``` url
https://playwright.dev/docs/test-assertions
```
To know more about locators visit

``` url
https://playwright.dev/docs/test-assertions
```

* For generating test use 
``` bash
 npx playwright codegen
```

* Codegen is always used in headed mode and actions of the users are recorded which are automatically caputred as a promises

<img width="1436" height="569" alt="image" src="https://github.com/user-attachments/assets/0996e7a4-c780-49cb-a9a6-eafc77bb96f1" />






















