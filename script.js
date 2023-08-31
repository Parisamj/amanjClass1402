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
let cart=[];
let cartprice=[];


function updateItems(){
    product.forEach(product =>{

        const prodDiv=document.createElement("div");
        const prodItem=document.createElement('div');
        const prodimg=document.createElement('img');    
        const prodprice=document.createElement('div');
        const addToCart=document.createElement('input');
        addToCart.type="button";
        addToCart.value="add to cart";
        prodItem.textContent="add to cart";


    
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
    
        prodDiv.setAttribute("class","product");
        prodItem.setAttribute("class","name");
        prodprice.setAttribute("class","price");
        prodimg.setAttribute("class","myimg");
        addToCart.setAttribute("class","addtocart");

        //Add To Cart      

        addToCart.onclick=()=>{
        cart.push(product);
        //     console.log(cart);
        //     updateBascket();
        let bascketItem=document.createElement('div');
        bascketItem.textContent=product.name;
        console.log(bascketItem);
        let sidebar=document.getElementById('sidebar');
        sidebar.appendChild(bascketItem);
        let allPricePtxt=document.getElementById("allprice");
        cart.forEach(cart=>{
            let allprice=0;
            allprice += Number(cart.price);
            // allPricePtxt.textContent=allprice;
console.log(allprice);  

        })
   
    
         }
                     
            
    })  
    


}
updateItems();

//function updateBascket(){
    //cart.forEach(cart=>{

        // let bascketItem=document.createElement('div');
        // bascketItem.textContent=cart.name;
        // console.log(bascketItem);
        // let sidebar=document.getElementById('sidebar');
        // sidebar.appendChild(bascketItem);    
    
    //})
    
//}



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

