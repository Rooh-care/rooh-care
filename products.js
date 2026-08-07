document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("products-container");


if(!container){
return;
}


products.forEach(function(product){


container.innerHTML += `

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
href="https://wa.me/9647706136665?text=أريد طلب ${product.nameAr}"
target="_blank">

🟢 اطلب الآن

</a>


</div>

`;

});


});
