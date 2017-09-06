{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=', arr);

    let empty= Array.of();
}

{
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(item => {
        console.log(item.textContent);
    });

    console.log(Array.from([1,3,5], function(item){
        return item*2;
    }));
}

{   
    //替换数组中所有元素为某个值
    console.log('fill-7', [1, 'a',undefined].fill(7));

    //1,3:1是起始位置,3是结束位置
    console.log('fill, pos', [1, 'a',undefined].fill(7,1,3));
}

{   
    //keys()数组下标
    for(let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }

    //values()数组值,存在兼容问题,
    for(let index of ['1', 'c', 'ks'].values()) {
        console.log('keys', index);
    }

    //取出下标以及对应的值
    for(let [index,value] of ['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
    //find找出第一个满足条件的数
    console.log([1,2,3,4,5,6].find(function(item){
        return item>3;
    }));

    //返回符合元素大于3的下标
    //4的下标为3
    console.log([1,2,3,4,5,6].findIndex(function(item){
        return item>3;
    }));
}

{
    console.log('number', [1,2,NaN].includes(1));

    //es5中不能做NaN比较,但是es6可以
    console.log('number', [1,2,NaN].includes(NaN));
}

