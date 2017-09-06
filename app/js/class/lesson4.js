{
    console.log('a', `\u0061`);
    console.log('s', `\u20BB7`);

    console.log('s', `\u{20BB7}`);
}

{   
    //当他的码值大于两个字节,就将他处理成四个字节
    //在计算长度时,每两个字节就一个字符
    //结果：2
    let s='𠮷';
    console.log('length', s.length);

    let s1='𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));//124071
    console.log('code0', s1.codePointAt(0).toString(16));//20BB7
    console.log('code1', s1.codePointAt(1));//57271,取两个字节
    console.log('code2', s1.codePointAt(2));//97
}

{
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));//𠮷
}

{
    let str='\u{20bb7}abc';
    for (var index = 0; index < str.length; index++) {
        console.log('es5', str[index]);//仍按2个字节一个长度来循环
                                        //所以刚开始两个都是乱码       
    }

    for(let code of str){//刚开始20bb7按一个长度字符来显示
        console.log('es6', code);
    }
}

{
    let str='string';
    console.log('includes', str.includes('r'));
    console.log('start', str.startsWith('str'));
    console.log('end', str.endsWith('ng'));
}

{
    let str='abc';
    console.log(str.repeat(2));
}

{
    let name='list';
    let info='hello world';
    let m=`i am ${name},${info}`;
}

{
    //补0,向前补
    console.log('1'.padStart(2, '0'));
    //向后补
    console.log('1'.padEnd(2, '0'));
}

{
    let user={
        name:'list',
        info:'hello world'
    };
    //结果：i am ,,,listhello world
    console.log(abc`i am ${user.name}, ${user.info}`);
    function abc(s, v1, v2){
        console.log(s, v1, v2);
    }
}

{
    //raw不支持转义
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}
