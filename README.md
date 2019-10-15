Alice has started a restaurant and created software the determine the price of all the items on the menu
She started by creating a class for each menu item so that the price can be calculated using an interface.
```javascript
interface HasPrice {
    getPrice(): number;
}

class Ramen implements HasPrice {
    getPrice() {
        return 5;
    }
}
class Spaghetti implements HasPrice {
    getPrice() {
        return 10;
    }
}
```

She then decided there should be topping so she used the decorator pattern.
```javascript
class RamenWithPork extends Ramen {
    getPrice() {
         super.getPrice() + 3;
    }
}
```

This worked until she decided to expand the topping menu and it became too cumbersome to deal combinatorial amount of classes. How should she fix it?

follow up question: With all the choices, customers have started asking whether or not their choice of ingredients contains certain allergens.

Alice would prefer not to have to add a million methods to all her classes to specify true/false for each allergen. How can she add this 
check without having to add one function per allergen for each ingredient?