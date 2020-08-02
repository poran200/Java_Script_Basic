const circle = {
    redius: 1,
    location: {
     x :1,
     y: 1
    },
    isVisible : true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw()

// factory function
function  createCircle(redius){
    return {
        redius,
        draw(){
            console.log('draw circle');
        }
    };
}
const circle1 = createCircle(2);
console.log(circle1)

//constructor function 
function Circle(redius){
    this.redius=redius;
    this.draw = function(){
        console.log('draw');
    }
}

const  ob = new Circle(1);
ob.draw(); 


const anotherOb = {...ob}
console.log(anotherOb);