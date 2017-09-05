function test() {
    // for(let i=1;i<3;i++) {
    //     console.log(i)
    // }
    // console.log(i);
    //不能重复定义变量名
    let a =1 ;
    //let a =2
    //常量不能修改
    //且不能重新赋引用值
    const b =1;
    //这里只是对值的内容做了改变.并没有改变c的指针
    const c = {
        a: 1,   
    }
    c.b = 1;
    console.log(c);
}

test();