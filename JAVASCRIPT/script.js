document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Bolo de Chocolate', price: 'R$20,00', image: 'https://recipesblob.oetker.com.br/assets/a81bc035eb7f407faaa2c93e04edaf78/750x910/bolo-de-aniversrio-de-chocolate.jpg' },
        { name: 'Cupcake', price: 'R$5,00', image: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/0fff5f03afb90bb990364a480f294cd7.jpg' },
        { name: 'Bala de Coco', price: 'R$15,00', image: 'https://cdn0.tudoreceitas.com/pt/posts/9/4/2/bala_de_coco_baiana_simples_10249_600_square.jpg' },
        { name: 'Brigadeiro', price: 'R$3,00', image: 'https://www.grupopq.com.br/wp-content/uploads/2023/09/SITE-4-1024x1024.jpg' },
        { name: 'Brigadeiro', price: 'R$3,00', image: 'https://www.grupopq.com.br/wp-content/uploads/2023/09/SITE-4-1024x1024.jpg' },
        { name: 'Brigadeiro', price: 'R$3,00', image: 'https://www.grupopq.com.br/wp-content/uploads/2023/09/SITE-4-1024x1024.jpg' },
        { name: 'Brigadeiro', price: 'R$3,00', image: 'https://www.grupopq.com.br/wp-content/uploads/2023/09/SITE-4-1024x1024.jpg' },
        { name: 'Brigadeiro', price: 'R$3,00', image: 'https://www.grupopq.com.br/wp-content/uploads/2023/09/SITE-4-1024x1024.jpg' },
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
    });

    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
