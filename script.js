// class

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    // методи
    introduce() {
        console.log(`Привіт! Мене звати ${this.name}. Я - ${this.type}`);
    }
}

const dog = new Animal("Бетховен", "собака");
dog.introduce();

const cat = new Animal("Гарфілд", "кіт");
cat.introduce();
//

const fish = new Animal("Немо", 'риба');
fish.introduce();


// 2-га частина Class 
// Ми робимо описа класу. Цей клас зазначає розміри тварин.

class AnimalSize extends Animal {
    constructor(name, type, size) {
        super(name, type, size)
        this.size = size;
    }

    introduce() {
        console.log(`Привіт! Мене звати ${this.name}. Я - ${this.type} i важу ${this.size} кг`);
    }
}

const dogSize = new AnimalSize("Бетховен", "собака", "15");
console.log(dogSize);
dogSize.introduce();