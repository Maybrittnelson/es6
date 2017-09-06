{   
    //关于参数默认值后面不可以跟变量,必须要有默认值
    //x, y='hello', z='world'
    function test(x,y = 'world'){
        console.log('默认值', x,y);
    }

    test('hello', 'kill');
}

{
    let x='test';
    function test2(x, y=x) {//这里y=x取得是前面的x
        console.log('作用域',x,y);
    }
    test2('kill');
}

{
    //...将离散值转换成数组
    function test3(...arg){
        for(let v of arg){
            console.log('rest', v);
        }
    }
    test3(1,2,3,4,'a');
}

{
    //将数组转换成离散的值
    console.log(...[1,2,4]);
    console.log('a', ...[1,2,4]);
}

{
    let arrow = v => v*2;
    let arrow2 = () => 5;

    console.log('arrow', arrow(3))
    console.log('arrow2', arrow2())
}

{
    //函数嵌套使用写成为调用的形式
    //提升性能
    function tail(x) {
        console.log('tail', x);
    }

    function fx(x) {
        return tail(x);
    }

    fx(123)
}