{
    let regex=new RegExp('xyz', 'i');//i表示小写
    let regex2=new RegExp(/xyz/i);

    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    
    let regex3=new RegExp(/xyz/ig, 'i');//i覆盖ig
    console.log(regex3.flags);//es6获取正则表达修饰符，结果为i
}

{   
    //y与g都是全局匹配
    //y是当匹配第二次时,从下一个字符开始
    //而g是从下次能匹配
    let s='bbb_bb_b';
    let a1=/b+/g;
    let a2=/b+/y;
    
    //结果
    //bbb bbb
    //bb null
    console.log('one', a1.exec(s),a2.exec(s));
    console.log('two', a1.exec(s),a2.exec(s));


    //查看是否开启y修饰符,开启为ture
    //结果：false, true
    console.log(a1.sticky, a2.sticky);
}

{   

    //结果：true false
    //加上u(unicode)则表示一个字符，而u-1为2字符
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));
    
    //true
    console.log(/\u{61}/u.test('a'));

    console.log(`\u{20BB7}`);
    
    let s='𠮷'
    
    //如果你的字符串中有大于两个字节的,一定要用u去标识
    //.并不能匹配所有的字符,如果大于两个字节就不行
    console.log('u', /^.$/.test(s));
    console.log('u-2', /^.$/u.test(s));

    console.log('test', /𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));
}