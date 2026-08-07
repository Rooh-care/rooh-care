const params = new URLSearchParams(window.location.search);

const productName = params.get("product");


const product = products.find(item => 
item.nameEn === productName
);



const container = document.getElementById("product-details");



if(product){


container.innerHTML = `


<div class="card">


<img src="${product.image}" alt="${product.nameAr}">


<h2>

${product.nameAr}

<br>

${product.nameEn}

</h2>


<p>

${product.description}

</p>



<div class="price">

${product.price} دينار

</div>



<a class="order"

href="https://wa.me/9647706136665?text=اريد طلب ${product.nameAr}"

target="_blank">

🟢 اطلب الآن

</a>


</div>


`;



}

else{


container.innerHTML =

"<h2>المنتج غير موجود</h2>";

}
