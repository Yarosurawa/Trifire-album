const books = document.querySelectorAll(".book")
fetch('./books.json')
.then((response) => response.json())
.then((json) => {
    var i = 1
    scroll(0, 0);
    books.forEach((book)=>{  
        bookProperty = json["book"+i]
        book.style.bottom = `${(bookProperty.shelf-1)*117+50}px`
        book.style.transform = `rotate(-${bookProperty.rot}deg)`
        book.style.left = bookProperty.xPos
        book.style.height = bookProperty.height
        book.style.width = bookProperty.width
        book.style.background = bookProperty.clr
        book.style.boxShadow = `0px 0px 5px 0 #000a`
        i++
    })
});

const hint = document.getElementById('hint')

setTimeout(()=>{
    hint.style.transition = "opacity 4s ease, filter 5s ease"
    hint.style.opacity = "1"
    hint.style.filter = "blur(1px)"
}, 5000)

const theBook = document.getElementById("the-book")
const body = document.querySelector("body")
const shelf = document.getElementById("shelf")
const blackness = document.getElementById("blackness")
const bookPage = document.getElementById("book-page")
const bookObj = {
    ttp: document.getElementById("titlepage"),
    ttpb: document.getElementById("titlepageBehind"),
    itself: document.getElementById('book-inhres'),
    p1: document.getElementById('page1'),
    p2: document.getElementById('page2'),
    p3: document.getElementById('page3'),
    p4: document.getElementById('page4'),
    p5: document.getElementById('page5'),
    p6: document.getElementById('page6'),
    p7: document.getElementById('page7'),
    p8: document.getElementById('page8'),
    p9: document.getElementById('page9'),
    p10: document.getElementById('page10'),
    p11: document.getElementById('page11'),
    p12: document.getElementById('page12'),
    p13: document.getElementById('page13'),
    p14: document.getElementById('page14'),
    bpb: document.getElementById('backpageBehind'),
    bp: document.getElementById('backpage')
}


var delta = 1
var animStage = 1

document.addEventListener("wheel", (e)=>{
    hint.style.opacity = "0"
    hint.style.display = "none"
    if (animStage === 1 && delta > 1 || e.deltaY >0) {
        delta += e.deltaY / 1000
        scroll(0, 0);
        if (delta < 4) {
            body.style.transform = `scale(${delta})`
        } else {
            animStage = 2
        }
    }
    if (animStage === 2) {
        theBook.style.transition = "transform 1s ease"
        theBook.style.transform = "translate(0, -20px) scale(1.5)"
        setTimeout(()=>{
        theBook.style.transition = "transform 0.5s ease-in"
        theBook.style.transform = "translate(0, 300px) scale(1.5)"
        }, 800)
        setTimeout(()=>{
            shelf.style.transition = "translate 500ms ease-in"
            shelf.style.translate = "0 -200px"
        }, 1100)
        setTimeout(()=>{
            blackness.style.transform = "translateY(-200vh)"
            body.style.transition = "transform 1s ease"
            body.style.transform = ""
        }, 1300)
        setTimeout(()=>{
            bookPage.style.transition = "transform 1s ease"
            bookPage.style.transform = "translateY(0)"
        },1500)
        setTimeout(()=>{
            bookObj.itself.style.opacity = "1"
            bookObj.itself.style.transform = "translate(calc(50vw - 222.5px), calc(50vh - 327.5px))"
        },2000)

    }
})

bookObj.ttp.onclick =()=>{
    bookObj.ttp.style.transform = "rotateY(-179deg) translateZ(-1px)"
    bookObj.ttpb.style.transform = "rotateY(-179deg) translateZ(-1.1px)"
    bookObj.itself.style.transform = "translate(50vw, calc(50vh - 327.5px)) rotate3d(1, 0, 0, 20deg)"
}

bookObj.ttpb.onclick =()=>{
    bookObj.ttp.style.transform = "rotateY(0deg) translateZ(20px)"
    bookObj.ttp.style.zIndex = "21"
    bookObj.ttpb.style.transform = "rotateY(0deg) translateZ(19.9px)"
    bookObj.ttpb.style.zIndex = "20"
    bookObj.itself.style.transform = "translate(calc(50vw - 222.5px), calc(50vh - 327.5px))"
}

for (let i = 1; i < 15; i++) {
    bookObj[`p${i}`].onclick =()=>{
        if (i%2 === 1) {
            j = (i+1)/2+2
            bookObj[`p${i}`].style.transform = `rotateY(-179deg) translateZ(-${j}px)`
            bookObj[`p${i+1}`].style.transform = `rotateY(-179deg) translateZ(-${j + 0.1}px)`
        } else {
            j = 19 - i/2
            bookObj[`p${i-1}`].style.transform = `rotateY(0deg) translateZ(${j}px)`
            bookObj[`p${i}`].style.transform = `rotateY(0deg) translateZ(${j - 0.1}px)`
        }
    }
}

bookObj.bpb.onclick = ()=>{
    bookObj.bpb.style.transform = "rotateY(-179deg) translateZ(-9px)"
    bookObj.bp.style.transform = "rotateY(-179deg) translateZ(-9.1px)"
    bookObj.itself.style.transform = "translate(calc(50vw + 222.5px), calc(50vh - 327.5px))"
}

bookObj.bp.onclick = ()=>{
    bookObj.bpb.style.transform = "rotateY(0deg) translateZ(11px)"
    bookObj.bp.style.transform = "rotateY(0deg) translateZ(10.9px)"
    bookObj.itself.style.transform = "translate(50vw, calc(50vh - 327.5px)) rotate3d(1, 0, 0, 20deg)"
}