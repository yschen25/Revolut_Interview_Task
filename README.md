
# Revolut Assignment

#### Technologies and tools

* React
* TypeScript
* Redux 
* JSONP
* Styled component
* React testing library
* Jest
* ESlint
* Husky


#### Available Scripts

In the project directory, first you need to install the node modules

```
npm install
```

<br/>

Then the browser will open http://localhost:3310 Automatically.
The page will reload if you make edits.

```
npm run start
```

<br/>

Launch the test runner.

```
npm run test
```

<br/>

Bundle the files with base and prod webpack config

```
npm run prod 
```

<br/>

Runs the website with ESLint.
```
npm run lint
```

<br/>

Follow the ESLint principle to fix the website.
```
npm run lint-fix
```

##### APP functionality expand

When customer submit the currency exchange request, 
we need consider "Should we calculate money by the rate shows on the screen or by the instant rate?"

1. Calculate amount by the rate shows on the screen allows users knowing well about exactly how much money they sell/buy, but the rate might not the latest one.

2. Calculate amount by instant rate allows users sell/buy the accurate amount, but it might confused the users.

On my previous e-commerce company, we used the rate shows on screen for calculating to prevent controversy. So I think it depends on the company's policy.
