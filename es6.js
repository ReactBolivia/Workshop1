const array = [1, 2, 3, 4, 5, 6];
const object = { a: 1, b: 2 };

const innerFn1 = function() {
   console.log(this.a);
};
const innerFn2 = () => console.log(this.b);

function normalNestedFns() {
   this.a = 1;
   innerFn1();
}

function modernNestedFns() {
   this.b = 2;
   innerFn2();
}

console.log('\nUsing spread operator in array: ', [8, 9, ...array]);
console.log('\nUsing spread operator with object ', { ...object, a: 5 });

modernNestedFns();
normalNestedFns();
