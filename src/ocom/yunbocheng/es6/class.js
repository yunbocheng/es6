class Phone{
    constructor(trand,price) {
        this.trand = trand;
        this.price = price;
    }
    call(){
        console.log("我是一个类的方法！");
    }
}
let phone = new Phone("盖乐世",4000);
console.log(phone);
phone.call();