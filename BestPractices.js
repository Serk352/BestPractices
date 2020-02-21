//Best practices
/*
The follow code contains a "few" errors acording to the principles
we saw on class, please apply as many concepts as posible.

*/

class class1
{
constructor(var1, var2) 
{
this.var1 = var1 this.var2 = var2
}

doSomething() 
{
return this.var1*this.var2
}

}

class class2 extends class1
{
constructor(var3)
{
super() this.var3=var3
}
doSom() 
{
return this.var2-this.va1/this.var3;
}
}

var obj = new class1(2, "holi") var obj2 = new class2(3)

doSome = () => console.log(obj3)

console.log(obj) console.log(obj2)

//As an extra, think outside the box, and using this structure, apply this code to "something" in your code.