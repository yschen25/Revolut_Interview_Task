# Revolut Assignment

## Basic concept 

### State management

For this assignment,
the most complicate part is about state management,
I used the Redux to manipulate the state of rate, amount, currency, etc.

### Exchange caculation 

The exchange caculations are based in account component.

### Intergration test 

The intergration test contains the whole flow from get rate from API,
chane the target account input when entering the number on current account, change account to sell / buy, etc., To make sure the correct user flow.

<br/>

## Technologies and tools

* React
* TypeScript
* Redux
* JSONP
* Jest
* React testing library
* Styled component

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

Considered about the users will choose another currency,
the account balances should be keep flexibility,
when user choose the sepcific currency it should update to the corresponding balance, 

<br/>

## APP functionality expand

When customer submit the currency exchange request, 
we need consider "Should we calculate money by the rate shows on the screen or by the instant rate?"

There are two conditions :

1. Calculate amount by the rate shows on the screen

    Users knowing well about exactly how much money they sell / buy, but result of amount might not be the latest one.


2. Calculate amount by instant rate 
    
    Users sell / buy the latest amount, but it might confused the users.

On my previous e-commerce company, we used the rate shows on screen for calculating to prevent controversy. Considered about user experiences and amount precision I think it's can be discussed.
