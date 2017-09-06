{
    //二进制数值表达式：503
    console.log('B',0b111110111);
    //8进制
    console.log(0o767);
}

{
    console.log('15', Number.isFinite(15));
    console.log('1/0', Number.isFinite(1/0));
    console.log('NaN', Number.isNaN(0));
}

{
    console.log('25', Number.isInteger(25.0));
}

{
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
}

{   
    //4,4
    console.log(4.1,Math.trunc(4.1));
    console.log(4.9,Math.trunc(4.9));
}

{
    console.log('-5', Math.sign(-5));//-1
    console.log('0', Math.sign(0));//0
    console.log('5', Math.sign(5));//1
    console.log('50', Math.sign('50'));//1
    console.log('foo', Math.sign('foo'));//NaN    
}

{
    console.log('-1', Math.cbrt(-1));//-1
    console.log('8', Math.cbrt(8));//2
}