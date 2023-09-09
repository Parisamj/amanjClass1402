const product=[
    {name:"iphone 13",
    price:40,
    img:"img/iphone.jpg"

    },{name:"s9",
    price:30,
    img:"img/s9.jpg"

    },{name:"nokia",
    price:10

    },{name:"sony",
    price:20
    }
]

const addbut=document.getElementById("addItem");
const products=document.getElementById("products");
const productBascket=document.getElementById("productBascket");

let cart=[];
let cartprice=[];

function createEl(element,name){
const item=document.createElement(element);
item.setAttribute("class",name);
item.setAttribute("id",name);
return item;

}

function updateItems(){
    
    product.forEach(product =>{

        const prodDiv=createEl("div","product");
        const prodItem=createEl("div","name");
        const prodimg=createEl("img","myimg");    
        const prodprice=createEl("div","price"); 
        const addToCart=createEl("input","addtocart");    
        
        addToCart.type="button";
        addToCart.value="add to cart";           
        prodItem.textContent=product.name;        
        prodprice.textContent=product.price;  
    
        prodDiv.appendChild(prodItem);
        if(product.img){
    
            prodimg.src=product.img;       
    
        }
        prodDiv.appendChild(prodimg);    
        prodDiv.appendChild(prodprice);    
        products.appendChild(prodDiv);
        prodDiv.appendChild(addToCart); 
        addToCart.onclick=()=>{  
            cart.push(product);
            updateCart();
            console.log(cart);
            //cart=[];            
        }
        console.log(cart);                   
            
    })  

}

//Add To Cart 
let total=0;
function updateCart(){
    productBascket.innerHTML="";
    total=0;
    
    cart.forEach(cartp=>{
        console.log(cartp);
        console.log(cart);
        let bascketItem=createEl('div','bascketItem')
        const removeItem= createEl("input","removeItem");
        removeItem.type='button';
        removeItem.value='remove';
        bascketItem.textContent=cartp.name;
        bascketItem.appendChild(removeItem);
        removeItem.onclick=(()=>{
            cart= cart.filter(el=>el.name !==cartp.name);
            total -= Number(cartp.price);  
            updateCart();
            })
        console.log(bascketItem);
        productBascket.appendChild(bascketItem);  
        
        total += Number(cartp.price);  
        
        
        console.log(total); 
        return total;    
        

    })   
    let allPricePtxt=document.getElementById("allprice");
    allPricePtxt.value=total; 
    


   // let allPricePtxt=document.getElementById("allprice");
   // allPricePtxt.value(total); 

}          
updateItems();


addbut.onclick=()=>{
    let newItem=document.getElementById("item").value;
    let newprice=document.getElementById("price").value;
    product.forEach(product=>{

        if(newItem==product.name && newprice==product.price){
            alert('this item exist.')
           newItem="";
           newprice="";
        }

    })  
    if(newItem!="" && newprice!="" ){
        product.push({name:newItem,price:newprice})
   
        console.log(product);
        products.innerHTML="";
    
        updateItems();

    }    
    
   
}

