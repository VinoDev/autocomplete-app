### Autocomplete App
This app is an example of how to use autocomplete functionality with plain Javascript.

## Installation
Install dependencies with [npm](https://www.npmjs.com/)

```bash
npm install
```

Run locally on your machine

```bash
npm run dev
```

## Description 
Autocomplete is supposed to be a simple reusable function that returns an array of objects
that is filtered from another array of object according to client's input.

This app is an example of where and how you may use autocomplete.

autocomplete function recieves: 
* searchText {string} - client side input
* dataArr {array} - array of objects on which we will run and search through
* ObjKeyToMatch {string} - the object key we want to look for and compare our client's input to
* render {function} - **optional**  

## Code Example
```javascript
    import autocomplete from './autocomplete.js';
    //Recieved from user with an eventListener or other method.
    const userInput = "Compu"
    //Array of objects we want to search through
    const shopItems = [
        {
            id: 1,
            name: "Super Computer",
            price: 3000
        },
        {
            id: 2,
            name: "3000 gtx new computer",
            price: 6000
        },
        {
            id: 3,
            name: "mouse",
            price: 200
        }     
    ] 

    autocomplete(userInput, shopItems, "name");
    //In this case autocomplete will return 
    /*
        [
            {
                id: 1,
                name: "Super Computer",
                price: 3000
            },
            {
                id: 2,
                name: "3000 gtx new computer",
                price: 6000
            }
        ]
    */
};
```