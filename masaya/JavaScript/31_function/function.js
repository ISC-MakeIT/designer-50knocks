// function
function result() {
  let txt = prompt('あなたの年齢は？');
  let age = parseInt(txt);
  if (age < 18) {
    console.log('君に言うことはないよ');
  } else {
    console.log('選挙に行こう！');
  }
}
result();

/*
// allow関数
let result = () => {
  let age = 18;
  if (age < 18) {
    console.log('君に言うことはないよ');
  } else {
    console.log('選挙に行こう！');
  }
};
result();
*/

