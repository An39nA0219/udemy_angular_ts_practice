//インターフェイス
interface Animal {
  name: string;
  legs: number;
  isCry: boolean;
  cry(): void;
}

interface SuperAnimal extends Animal {
  canRun: boolean;

}

let Dog: Animal = {
  name: 'maru',
  legs: 4,
  isCry: true;
  cry: function () {
    console.log('bow wow')
  }
}


class Dog implements SuperAnimal {
  name: string = 'Maru';
  legs: number = 4;
  isCry: boolean = true;
  canRun: boolean = true;
  cry(): void {
    if (this.isCry){
      console.log('bow, wow');
    }
  }
}

let maru = new Dog();
maru.cry()