# Revolut Assignment

## Basic concept 

### State management

For this assignment,
the most complicated part is state management,
I used the Redux to manipulate the state of rate, amount, currency, etc.

### Exchange calculation 

The exchange calculation is centralized in the reducer,
and the account component does render and handle UI events.

### Intergration test 

The intergration test contains the whole flow from getting rate from API,
changing the target account input when entering the number on current account, changing account to sell / buy, etc., To make sure the user flow is correct

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

Considering the users will choose another currency,
the account balances should be kept flexibility,
when user chooses the sepcific currency it should update the corresponding balance, 

<br/>

## APP functionality expand

When the customer submits the currency exchange request, 
we should also consider "Should we use the exchange rate of the one shown on the screen or the instant one?"

Followings are the considerations:

1. Calculate amount by the rate shown on the screen

    Users know well about exactly how much money they sell / buy, but result of amount might not be the latest one.

    (not sure what do you mean, I would change to "but the company needs to bear with the potential differences")


2. Calculate amount by instant rate

    Users sell / buy the latest amount, but it might confused the users.

On my previous e-commerce company, we used the rate shown on screen for calculating to prevent controversy. Considered about user experiences and amount precision I think it's can be discussed.
