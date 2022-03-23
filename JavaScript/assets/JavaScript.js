alert("Elias");
console.log("15 Years Old");
console.log("أنا في الصف العاشر");

let budget = 20;
console.log(budget > 30 && budget < 80);

budget = 50;
console.log(budget > 30 && budget < 80);

let grade = prompt("What is your grade?");

if (grade >= 90) {
  console.log("لقد حصلت على امتياز 🥳");
} else if (grade >= 80) {
  console.log("لقد حصلت على جيد جداً🤩");
} else if (grade >= 70) {
  console.log("لقد حصلت على جيد🙂");
} else if (grade >= 60) {
  console.log("لقد حصلت على مقبول😕");
} else if (grade >= 50) {
  console.log("لقد حصلت على ضعيف☹️");
} else {
  console.log("راسب💔");
}
