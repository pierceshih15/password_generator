// 隨機取出字元
function getRandomString(array) {
  // Math.floor() & Math.random() 語法隨機取出 array 的 index
  let ranNum = Math.floor(Math.random() * array.length);
  // console.log("single password", array[ranNum]);
  return array[ranNum]
}

function generatePassword(options) {
  // Step 1：Define the things user might want
  const lowerCaseLetters = 'abcdefghiklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '1234567890';
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // Step 2：Create a collection to store things user picked up
  let collection = [];

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''));
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''));
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''));
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''));
  }

  // Step 3：Remove the things user do not need
  // 若 options.excludeCharacters 內容不為空 ==> true
  if (options.excludeCharacters) {
    // 透過 filter 語法篩選 collection 資料，若回傳 true，則保留內容
    // 但題目希望，若 options.excludeCharacters 包含 character 則去除，因此得到 false
    collection = collection.filter(
      // 透過 includes 語法判定 options.excludeCharacters 資料是否包含 character
      // 若有，則是 true，反之，則為 false
      // 因應 filter 語法特性，若需刪除，則回傳 false，因此帶上 ! 將結果反轉呈現
      character => !options.excludeCharacters.includes(character))
  }

  // console.log('collection', collection);

  // 若 collection 為空，則跳出錯誤提示
  if (collection.length == 0) {
    return 'There is no vaild characters in your selection.';
  }

  // Step 4：Start generating password
  // 4-1 建立一個變數 password 存放隨機取出的字元 
  let password = '';
  for (i = 1; i <= options.length; i++) {
    // 4-2 調用 getRandomString() 函式隨機產出字元
    password += getRandomString(collection)
  }
  // Step 5：Return the generated password
  return password;
}

// Export generatePassword function for other files to use
module.exports = generatePassword;