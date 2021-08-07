// Object

var point1 = {
    x: 10,
    y: 20
};

var x = point1.x;

var point2: {};
point2 = {
    x: 10,
    y: 20,
}

var point3: Object = {
     x: 1
};

var rectangle = {
    h: 10,
    w: 20,

    calcArea: function(){
        return this.h * this.w;
    }
};

console.log("Area of rectangle: ", rectangle.calcArea())

// functions

var squareIt1 = function(x: number){
    return x * x;
};

var val1 = squareIt1(2);
console.log('squareIt1 = '+ val1);
val1 = squareIt1(8);
console.log('squareIt1 = '+ val1);

// this square function is expecting a rectangle object which should have property height and width, but as we have put ? after width so width is optional
var squareIt = function( rectangle: { h: number, w?: number}){ // ? means that this parameter is optional, we can call this function with only height or with height and width both
    if(rectangle.w == undefined){ // if width is not passed then return height * height
        return rectangle.h * rectangle.h;
    }
    return rectangle.h * rectangle.w;
}

var sq1 = squareIt({h: 10}) // sq1 will infer the type number
console.log("rectangle of height and width of 10 = "+ sq1);

var sq2 = squareIt({h: 10, w: 40});
console.log('rectangle of height and width of 10 and 40 = '+ sq2);