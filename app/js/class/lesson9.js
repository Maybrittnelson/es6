{
    //声明
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1, a2, a1===a2);

    //先去全局寻找某个变量
    let a3=Symbol.for('a3');
    let a4=Symbol.for('a3');
    console.log(a3, a4, a3===a4);
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj', obj);

    //无法取出symbol
    for(let [key,value] of Object.entries(obj)) {
        console.log('let of', key,value);
    }

    //能够获取symbol
    Object.getOwnPropertySymbols(obj)
        .forEach(function(item){
            console.log(obj[item]);
        })
    
    //获取所有的key value
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys', item, obj[item]);
    })
}