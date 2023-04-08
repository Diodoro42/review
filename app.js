const reviews = [
{
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id:2,
    name:'anna johnson',
    job:'web designer',
    img: 'person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
},
{
    id:3,
    name: 'peter jones',
    job: 'intern',
    img: 'person-3.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
},
{
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'person-4.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
}
]

// itens que vão ser trocados dinamicamente
const img = document.querySelector('#person-img')
const author = document.querySelector('#author')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

//atribuindo botões as suas variaveis
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//variavel para posição inicial
let item_atual = 0;

//carregar item inicial
window.addEventListener('DOMContentLoaded', function(){
    showPerson(item_atual)
})

//mostrar a pessoa baseada no item

function showPerson(person){
    let item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

//mostrar proxima pessoa

nextBtn.addEventListener('click', function(){
    item_atual ++;
    console.log(item_atual)
    if(item_atual > reviews.length - 1){
        item_atual = 0;
    }
    
    showPerson(item_atual)
    

})

//mostrar pessoa anterior

prevBtn.addEventListener('click', function(){
    item_atual --  ;
    if(item_atual < 0 ){
        item_atual = reviews.length - 1
        
    }
    showPerson(item_atual)
    console.log(item_atual)
    

})

function getRandomNumber(){
    return Math.floor(Math.random() * reviews.length)
}

//show random person
randomBtn.addEventListener('click', function(){
    
    
    showPerson(getRandomNumber())
    console.log(getRandomNumber())
})