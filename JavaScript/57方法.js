var obj = {
    name:"啊啊",
    age:18,
    gender:"boy",
    height:180
}
//使用for，会向将对象obj的属性名赋给变量n，如果将obj[n]输出，则输入为obj对象中的属性值
for (n in obj) {
    console.log(obj[n])
}