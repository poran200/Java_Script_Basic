let post = {
    title: 'a',
    body:'b',
    author: 'c',
    views: 10,
    commnet:[{
        author: 'a', body: 'body'
    }],
    islive: true

}

// constructor function 
function  Post(titel, body, author){
    this.titel = titel;
    this.body= body;
    this.author = author;
    this.views=0;
    this.commnets= [];
    this.islive= false;
}

let post1 = new Post('a','b','c');
console.log(post1);