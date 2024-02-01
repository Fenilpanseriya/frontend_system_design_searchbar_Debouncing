let search=[
    "hello",
    "apple",
    "mango",
    "gm",
    "hfje",
    "bjrg",
    "fjkgh",
    "fbykl",
    "qwex",
    "nmklj"
]
const debounce=(fn,d)=>{
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        else{
            setTimeout(()=>{
                fn();
            },d)
        }
    }
}
let items=[];
 function getData(){
    
    console.log("in getdata")
    let val=document.getElementById("inp")
    console.log(val.value);
    if (val ==""){
        return;
    }
    let lis=document.getElementById("uls");
    if(items.length>0){
        items=[];
        lis.innerHTML="";
    }
    
    let regex=new RegExp(val.value,"g");
    items=search.map(item=>{
        if(regex.test(item)){
            return item;
        }
        return;
    })
    
    
    console.log("items",items)
    items.map(item=>{
        if(item){
            let li=document.createElement("li",item);
            li.textContent=item;
            lis.appendChild(li);
            li.style.padding="5px";
            li.style.listStyleType="none"
            // return item;
        }
        
    })

 }
const better=debounce(getData,1000);