const container = document.getElementById("products-container");

if (container && typeof products !== "undefined") {

products.forEach(product => {

container.innerHTML += `

<div class="card">

<img src="${product.image}" alt="${product.nameEn}">


<h2>
${product.nameAr}
<br>
${product.nameEn}
</h2>


<div class="rating">
⭐⭐⭐⭐⭐
</div>


<p class="available">
متوفر الآن ✅
</p>


<p>
${product.description}
</p>


<div class="price">
${product.price} دينار
</div>


<a class="order"
href="https://wa.me/9647706136665?text=السلام عليكم ROOH CARE%0Aأرغب بطلب ${product.nameAr}"
target="_blank">

🟢 اطلب الآن

</a>


</div>

`;

});

}
