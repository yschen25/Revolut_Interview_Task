# Revolut Assignment

## Basic concept 

### State 

State managent for exchange rate is complicate so I uesed the Redux to manipulate the state.

<br/>

### Caculation 

The caculation base in account component. 

<br/>

### Test 
Intergration test to make sure the user flow is working normally.

<br/>

## Technologies and tools

* React
* TypeScript
* Redux
* JSONP
* Styled component
* React testing library
* Jest

<br/>

## Available Scripts


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

## Can be improved

The account balance should be keep flexible.

<br/>

## APP functionality expand

When customer submit the currency exchange request, 
we need consider "Should we calculate money by the rate shows on the screen or by the instant rate?"

1. Calculate amount by the rate shows on the screen allows users knowing well about exactly how much money they sell/buy, but the rate might not the latest one.

2. Calculate amount by instant rate allows users sell/buy the accurate amount, but it might confused the users.

On my previous e-commerce company, we used the rate shows on screen for calculating to prevent controversy. I think it depends on the company's policy.
