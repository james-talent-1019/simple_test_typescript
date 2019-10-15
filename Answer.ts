interface HasPrice {
  getPrice(): number;
  getAllergen(allergy_name): boolean;
}

// Allergen list
let allergens = {
  'beef_allergy': ['beef'],
  'meat_allergy': ['beef', 'pork'],
  'sauce_allergy': ['sauce'],
}

class Ramen implements HasPrice {
  extra_materials: array;
  constructor(extra=[]) {
    this.extra_materials = extra;
  }
  getPrice() {
    let price = 5;  // Ramen Price
    this.extra_materials.forEach(item=>{
      switch (item) {
        case 'pork':
          price += 5;
          break;
        case 'sauce':
          price += 2;
          break;
        case 'beef':
          price += 6;
          break;
      }
    });

    return price;
  }
  
  getAllergen(aallergy_name) {
    for (let index in this.extra_materials) {
      if (allergens[aallergy_name].indexOf(this.extra_materials[index]) > -1) {
        return true;
      }
    }
    return false;
  }
}


let ramenWithPorkSauce = new Ramen(['pork', 'sauce']); 
let ramenWithBeefSauce = new Ramen(['beef', 'sauce']);
let ramenWithBeef = new Ramen(['beef']);

console.log(ramenWithPorkSauce.getPrice(), ramenWithPorkSauce.getAllergen('beef_allergy') ? "Danger" : "Okay");
console.log(ramenWithBeefSauce.getPrice(), (ramenWithBeefSauce.getAllergen('meat_allergy') == true) ? "Danger" : "Okay");
console.log(ramenWithBeef.getPrice(), ramenWithPorkSauce.getAllergen('sauce_allergy') ? "Danger" : "Okay");
