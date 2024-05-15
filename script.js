function hasOddNumber(array){
    return array.some(function(value){
        return value % 2 !== 0;
    });
};

function hasAZero(array){
    return (''+ array).split('').some(function(value){
        return value === '0'; 
    })
}

function hasNoDuplicates(array){
    return array.some(function(value){
        if(array.includes(value) === false)
            array.push(value);
    });
};

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];

function hasCertainKey (array, key){
    return array.every(function(value){
        return key in value
    });
};

let newArr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];

function hasCertainValue(array, key, val){
    return array.every(function(value){
        return value[key] === val;
    });
};