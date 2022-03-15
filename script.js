//car1
function slideshow() 
{
    let slideshows = document.getElementById("car1");
    let img = document.createElement("img");
    let images = [
        "https://img.tttcdn.com/advertising/2021/12/6/orETAW-730116917.jpg",
        "https://img.tttcdn.com/advertising/2021/12/9/KjUpsE141155947.jpg",
        "https://img.tttcdn.com/advertising/2021/12/11/mtx4nu-412923529.jpg",
        "https://img.tttcdn.com/advertising/2021/12/9/PsCgFf1674804400.jpg",
        "https://img.tttcdn.com/advertising/2021/12/9/O90Jat2012896521.jpg",
        "https://img.tttcdn.com/advertising/2021/11/19/1b0o1B-2095491936.jpg",
        "https://img.tttcdn.com/advertising/2021/11/15/oXsBtJ1114729759.jpg",
        "https://img.tttcdn.com/advertising/2021/10/19/8DoIGd424505241.jpg",
        "https://img.tttcdn.com/advertising/2021/10/14/V99ENQ1282382910.jpg"
    ];

    img.src = images[0];
    var count = 1;
    setInterval(() => {
      if (count === images.length) 
      {
        count = 0;
      }

      img.src = images[count];
      slideshows.append(img);
      count++;
    }, 3000);

    slideshows.append(img);
}

slideshow();


//car2
let preBtn = document.querySelector('#preBtn');
let nextBtn = document.querySelector('#nextBtn');

let product = document.getElementsByClassName('product');

let product_page = Math.ceil(product.length/4);

let l = 0;

let movePer = 25.45
let maxMove = 203;

// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");

if (mob_view.matches)
{
	movePer = 50.36;
	maxMove = 504;
}

let right_mover = ()=> {
	l = l + movePer;
	if (product == 1)
	{
		l = 0; 
	}
	for(const i of product)
	{
		if (l > maxMove)
		{
			l = l - movePer;
		}
		i.style.left = '-' + l + '%';
	}

}

let left_mover = ()=> {
	l = l - movePer;
	if (l<=0)
	{
		l = 0;
	}
	for(const i of product)
	{
		if (product_page>1)
		{
			i.style.left = '-' + l + '%';
		}
	}
}

preBtn.onclick = ()=>{left_mover();}
nextBtn.onclick = ()=>{right_mover();}

function onClick()
{
    document.location.href = "signin.html";
}

function cartPage()
{
	alert("Product added to cart")
	let image = "https://img.tttcdn.com/product/xy/220/220/p/gu1/J/B/J5188B/J5188B-1-aa7b-U6Oe.jpg";
	// console.log('image:', image)
	let name = document.getElementById('nam').innerText;
	// console.log('name:', name)
	let price = document.getElementById('pri').innerText;
	// console.log('price:', price)
	
	if(localStorage.getItem('products') === null){
		localStorage.setItem("products", JSON.stringify([]));
	}

	let products = {
		image,
		name,
		price
	};

	let arr=JSON.parse(localStorage.getItem("products"));
	arr.push(products); 

	localStorage.setItem("products", JSON.stringify(arr));
}

function cartPage1()
{
	document.location.href = "cart.html";
}