function cards() {
    class MenuCard {
        constructor(src, alt, title, desc, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            /* this.transfer = 27;
            this.changeToUAH(); */
        }

        /* changeToUAH() {
            this.price = +this.price * this.transfer;
        } */

        render() {
            const element = document.createElement('div');
            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Price:</div>
                        <div class="menu__item-total"><span>${this.price} </span>USD/per day
                    </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        '"Fitness" Menu',
        'The "Fitness" Menu is a fresh approach to meal preparation, emphasizing more fresh vegetables and fruits. It is designed for active and healthy individuals. This is an entirely new product with an optimal price and high quality!',
        9,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        '"Premium" Menu',
        'In the "Premium" menu, we not only feature beautiful packaging design but also ensure high-quality execution of dishes. Red fish, seafood, fruits - it is a restaurant-style menu without the need to dine out!',
        11,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        '"Vegeterian" Menu',
        'The "Vegetarian" Menu involves a meticulous selection of ingredients: complete absence of animal products, almond, oat, coconut, or buckwheat milk, and the right amount of proteins through tofu and imported vegetarian steaks.',
        13,
        '.menu .container',
        'menu__item'
    ).render();

}

export default cards;