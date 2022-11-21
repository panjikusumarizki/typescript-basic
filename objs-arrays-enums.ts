// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]
//   role: [number, string]; //tuple - fixed-length array
// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY = 6, AUTHOR = 7 };

const person = {
  name: 'Hailey',
  age: 20,
  hobbies: ['Sports', 'Gaming'],
  role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [1, 'superadmin', 'users'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');  
}
