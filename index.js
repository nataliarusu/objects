/*****************   Capitalise keys   ******************** */
function capitaliseKeys(obj){
    const capitalised={};
    for(const key in obj){      
        capitalised[key.toUpperCase()]=obj[key];
    }
    return capitalised;
};
console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }))//{ A: 1, B: 2, C: 3 }
console.log(capitaliseKeys({ Hello: "hi" }))//{ HELLO: 'hi' } 
console.log(capitaliseKeys({}))//{}

/*****************   String to object   ******************** */
function stringToObject(str){    
    const arrOfPairs=str.split(',');
    const obj ={};
    for(const pair of arrOfPairs){
        const arrFromPair=pair.split(":");
        obj[arrFromPair[0]]=arrFromPair[1];
    }  
   
    return obj; 
   
}
stringToObject(""); //{}
stringToObject("a:1,b:2,c:3"); // { a: "1", b: "2", c: "3" }
stringToObject("one:-1,two:hi there,three:what's that?"); //{ one: "-1", two: "hi there", three: "what's that?" }
console.log(stringToObject("one:-1,two:hi there,three:what's that?"))//{ one: "-1", two: "hi there", three: "what's that?" }


/*******************   Going shopping   ********************* */
function shoppingList(str){
    const arrOfPairs=str.split(',');

    const obj ={};
    for(const pair of arrOfPairs){
        const arrFromPair=pair.trim().split(" ");//get rid of space and then split
        if( Number(arrFromPair[0]!=0)){ 
            obj[arrFromPair[1]]=Number(arrFromPair[0]);
        }        
    }  
   
    return obj; 
}

console.log(shoppingList("2 tomatoes, 1 egg, 3 pumpkins"));//{ tomatoes: 2, egg: 1, pumpkins: 3 }
console.log(shoppingList("2 tomatoes, 1 egg, 0 pumpkins"));//{ tomatoes: 2, egg: 1}
console.log(shoppingList(""))//{}


/*********************   Map Object   ********************** */
function mapObject(obj,fn){
    const newObj={};
    for(const prop in obj){
        newObj[prop]=fn(obj[prop]);
    }
    return newObj;
}

console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));// returns { a: 3, b: 4 }
console.log(mapObject({ greeting: 'hi there, ', goodbye: 'see you later, ' }, (s) => s + 'Yvonne'))
console.log(mapObject({ greeting: 'hi there, ', goodbye: 'see you later, ' }, (s) => s + 'Yvonne'))