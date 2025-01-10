function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const question = {
  easy: [
    {
      question: 'Question 1/10\nJavaScriptで変数を宣言するキーワードはどれか？',
      choices: ['let', 'function', 'array', 'object'],
      correct: 'let',
    },
    {
      question: 'Question 2/10\nconsole.log()は何をするメソッドですか？',
      choices: [
        '値を変数に格納する',
        'コンソールに値を出力する',
        'テンションを上げる',
        '画面にポップアップを表示する',
      ],
      correct: 'コンソールに値を出力する',
    },
    {
      question: 'Question 3/10\nletとconstの違いは？',
      choices: [
        'letは変更不可、constは変更可能',
        'letはスコープが広く、constはスコープが狭い',
        'letは再代入可能、constは再代入不可',
        'constは再代入可能、letは再代入不可',
      ],
      correct: 'letは再代入可能、constは再代入不可',
    },
    {
      question:
        'Question 4/10\n次のコードで正しい方法で変数xに値を代入するのは？',
      choices: ['x == 5;', 'x = 5;', 'x === 5;', 'X = 5;'],
      correct: 'x = 5;',
    },
    {
      question: 'Question 5/10\n文字列の長さを取得するメソッドはどれか？',
      choices: ['length', 'size', 'long', 'count'],
      correct: 'length',
    },
    {
      question: 'Question 6/10\nJavaScriptの配列を作成する方法はどれか？',
      choices: [
        'let arr = {};',
        'let arr = [];',
        'let arr = newObject();',
        'let arr = newArray();',
      ],
      correct: 'let arr = [];',
    },
    {
      question:
        'Question 7/10\nfunctionキーワードを使用する正しい関数の定義方法はどれか？',
      choices: [
        'function myFunction() { }',
        'def myFunction() { }',
        'func myFunction() { }',
        'function: myFunction() { }',
      ],
      correct: 'function myFunction() { }',
    },
    {
      question: 'Question 8/10\nJavaScriptでコメントを記述する方法はどれか？',
      choices: [
        '#コメント',
        '<!-- コメント -->',
        '!! コメント ',
        '// コメント',
      ],
      correct: '// コメント',
    },
    {
      question:
        'Question 9/10\nJavaScriptで配列の要素を追加するメソッドはどれか？',
      choices: ['push()', 'pull()', 'shift()', 'unshift()'],
      correct: 'push()',
    },
    {
      question: 'Question 10/10\nalert()メソッドは何をするか？',
      choices: [
        'ユーザーに入力を求める',
        '画面にメッセージを表示する',
        '書いたコードの可読性が悪すぎて警告が出ている',
        '画面をリロードする',
      ],
      correct: '画面にメッセージを表示する',
    },
  ],
  normal: [
    {
      question:
        '\nQuestion 1/10\n次のコードの出力は何か？ console.log(2 + "2");',
      choices: ['4', '"22"', '"2 + 2"', 'NaN'],
      correct: '"22"',
    },
    {
      question: 'Question 2/10\n==と===の違いは何か？',
      choices: [
        '==は型も比較し、===は型を無視して比較する',
        '==は型を無視して比較し、===は型も比較する',
        '=が1つしか違わないなら大差ない',
        ' 両方とも型を無視して比較する',
      ],
      correct: '==は型を無視して比較し、===は型も比較する',
    },
    {
      question:
        '\nQuestion 3/10\nforループで、0から9までの数字を表示する場合どこを修正すればいい？\nfor(let i = 0; i < 10; i++) {console.log(i);}',
      choices: [
        '修正する必要はない',
        'i < 10の条件をi <= 10に変更する',
        'i++の部分をi--に変更する',
        'letの部分をconstに変更する',
      ],
      correct: '修正する必要はない',
    },
    {
      question:
        '\nQuestion 4/10\nJavaScriptでオブジェクトを作成する方法はどれか？',
      choices: [
        'let obj = {};',
        'let obj = [];',
        'let obj = newObject();',
        'let obj =newArray();',
      ],
      correct: 'let obj = {};',
    },
    {
      question: '\nQuestion 5/10\nmap()メソッドは何をするか？',
      choices: [
        '配列の要素を順番に消去する',
        '配列をシャッフルする',
        '配列をソートする',
        '配列の各要素から新しい配列を生成する',
      ],
      correct: '配列の各要素から新しい配列を生成する',
    },
    {
      question:
        '\nQuestion 6/10\n次のコードを実行するとどうなるか？\nlet a = 5;let b = 10;[a, b] = [b, a]; console.log(a, b)',
      choices: ['5, 10', '10, 5', 'エラーが発生する', 'NaN, NaN'],
      correct: '10, 5',
    },
    {
      question:
        '\nQuestion 7/10\nfunctionを使わずに関数を定義する方法はどれか？',
      choices: [
        'let myFunction = function() { }',
        'function myFunction() { }',
        'myFunction = () => { }',
        'let myFunction = function() { }',
      ],
      correct: 'let myFunction = function() { }',
    },
    {
      question: '\nQuestion 8/10\nundefinedとnullの違いは？',
      choices: [
        'undefinedは型が未定義、nullは型がオブジェクト',
        'undefinedとnullは同じ',
        'undefinedは変数に値がない、nullは意図的に空の値',
        'undefinedはオブジェクト型、nullは数値型',
      ],
      correct: 'undefinedは変数に値がない、nullは意図的に空の値',
    },
    {
      question:
        '\nQuestion 9/10\nJavaScriptの非同期処理でよく使われる関数はどれか？',
      choices: ['setTimeout()', 'parseInt()', 'slice()', 'forEach()'],
      correct: 'setTimeout()',
    },
    {
      question: '\nQuestion 10/10\nthisキーワードが指すものは何か？',
      choices: [
        '現在の関数',
        '現在のオブジェクト',
        'グローバルオブジェクト',
        '呼び出し元の関数',
      ],
      correct: '現在のオブジェクト',
    },
  ],
  hard: [
    {
      question:
        '\nQuestion 1/10\nJavaScriptでクロージャーを作成するために必要な要素はどれですか？',
      choices: [
        'グローバルスコープ',
        '関数の中に別の関数',
        '非同期処理',
        'thisキーワード',
      ],
      correct: '関数の中に別の関数',
    },
    {
      question:
        '\nQuestion 2/10\n以下のコードの出力は何ですか？\nlet a = 10; function foo() {console.log(a);let a = 20;} foo();',
      choices: ['10', 'undefined', 'エラーが発生', '20'],
      correct: 'undefined',
    },
    {
      question:
        '\nQuestion 3/10\n以下のコードの出力は何ですか？\nfunction bar() {console.log(arguments);} bar(1, 2, 3);',
      choices: ['1 2 3', '[1, 2, 3]', '{"0":1, "1":2, "2":3}', 'エラーが発生'],
      correct: '[1, 2, 3]',
    },
    {
      question:
        '\nQuestion 4/10\n関数が実行されるのは何ミリ秒後ですか？\nsetTimeout(() => {console.log("Hello"), 0);',
      choices: [
        '即座に実行される',
        '1ミリ秒後に実行',
        '0ミリ秒後に実行されるが、次のイベントループで実行',
        '実行されない',
      ],
      correct: '0ミリ秒後に実行されるが、次のイベントループで実行',
    },
    {
      question:
        '\nQuestion 5/10\n以下のコードの出力は何ですか？\nlet x = 10; let y = x; y = 20; console.log(x, y);',
      choices: ['10 10', '20 20', '10 20', 'エラーが発生'],
      correct: '10 20',
    },
    {
      question:
        '\nQuestion 6/10\n以下のコードの出力は何ですか？\nfunction foo() {return {a: 1}; } console.log(foo());',
      choices: ['{a: 1}', 'undefined', 'エラーが発生', 'null'],
      correct: 'undefined',
    },
    {
      question:
        '\nQuestion 7/10\n以下のコードの出力は何ですか？\nconsole.log(typeof null);',
      choices: ['object', 'null', 'undefined', 'エラーが発生'],
      correct: 'object',
    },
    {
      question:
        '\nQuestion 8/10\n以下のコードの出力は何ですか？\nconsole.log([10, 20, 30].map(parseInt));',
      choices: [
        '[10, 20, 30]',
        '[0, NaN, NaN]',
        '[10, NaN, NaN]',
        'エラーが発生',
      ],
      correct: '[10, NaN, NaN]',
    },
    {
      question:
        '\nQuestion 9/10\n以下のコードの出力は何ですか？\nfunction foo() {let a = b = 0; a++; return a; }\nfoo(); console.log(typeof b);',
      choices: ['undefined', 'number', 'object', 'エラーが発生'],
      correct: 'number',
    },
    {
      question:
        '\nQuestion 10/10\n以下のコードの出力は何ですか？\nfunction foo() {} console.log(foo.prototype.constructor === foo);',
      choices: ['true', 'false', 'undefined', 'エラーが発生'],
      correct: 'true',
    },
  ],
  nightmare: [
    // koromoラジオ用
    // {
    //   question:
    //     '\n例題1\n1　===　1\ntrue(等しい)　or　false(間違っている)　を選択してください',
    //   choices: ['true', 'false'],
    //   correct: 'true',
    // },
    // {
    //   question: '\n例題2\n0.5　===　0.5\ntrue　or　false',
    //   choices: ['true', 'false'],
    //   correct: 'true',
    // },
    // {
    //   question: '\n例題3\n1　+　2　===　3\ntrue　or　false',
    //   choices: ['true', 'false'],
    //   correct: 'true',
    // },
    // {
    //   question: '\n問題です\n0.1 + 0.2　===　0.3\n"true"　or　"false"',
    //   choices: ['true', 'false'],
    //   correct: 'false',
    // },
    {
      question:
        '\nQuestion 1/10\n以下のコードの出力は何ですか？\nconsole.log(0.1 + 0.2 === 0.3);',
      choices: ['true', 'false', 'undefined', 'エラーが発生'],
      correct: 'false',
    },
    {
      question:
        '\nQuestion 2/10\n以下のコードの出力は何ですか？\nlet x = NaN; console.log(X === X);',
      choices: ['true', 'false', 'undefined', 'エラーが発生'],
      correct: 'false',
    },
    {
      question:
        '\nQuestion 3/10\n以下のコードの出力は何ですか？\nconsole.log([] + []);',
      choices: ['[]', '""', 'undefined', 'null'],
      correct: '""',
    },
    {
      question:
        '\nQuestion 4/10\n以下のコードの出力は何ですか？\nconsole.log(!5 + !"");',
      choices: ['0', '1', '5', 'NaN'],
      correct: '1',
    },
    {
      question:
        '\nQuestion 5/10\n以下のコードの出力は何ですか？\nconsole.log(typeof NaN);',
      choices: ['number', 'NaN', 'undefined', 'エラーが発生'],
      correct: 'number',
    },
    {
      question:
        '\nQuestion 6/10\n以下のコードの出力は何ですか？\nconsole.log("10" - "5");',
      choices: ['5', '"5"', 'NaN', '"10-5"'],
      correct: '5',
    },
    {
      question:
        '\nQuestion 7/10\n以下のコードの出力は何ですか？\nconsole.log([1] == true);',
      choices: ['true', 'false', '1', '2'],
      correct: 'true',
    },
    {
      question:
        '\nQuestion 8/10\n以下のコードの出力は何ですか？\nconsole.log(!!null);',
      choices: ['true', 'false', 'null', 'undefined'],
      correct: 'false',
    },
    {
      question:
        '\nQuestion 9/10\n以下のコードの出力は何ですか？\nconsole.log(null == undefined)',
      choices: ['true', 'false', 'null', 'undefined'],
      correct: 'true',
    },
    {
      question: '\nQuestion 10/10\nWould you like to try programming too?',
      choices: ['Yes', 'Yes', 'Yes', 'Yes'],
      correct: 'Yes',
    },
  ],
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

// 難易度を選択すると、その難易度の問題をセットして最初の問題を表示する
function levelSelect(difficulty) {
  currentQuiz = question[difficulty];
  currentIndex = 0;
  score = 0;
  // 選択肢を表示にする
  document.getElementById('choice-buttons').style.display = 'flex';
  // 難易度選択を非表示にする
  document.getElementById('level-buttons').style.display = 'none';

  // フォントを元に戻す
  const questionElement = document.getElementById('question');
  questionElement.style.fontFamily = "'Noto Sans JP', sans-serif";
  questionElement.style.fontWeight = '400';

  loadQuestion();
}

// 問題を表示する関数
function loadQuestion() {
  if (currentIndex < currentQuiz.length) {
    document.getElementById('question').innerText =
      currentQuiz[currentIndex].question;

    // 選択肢をシャッフル
    const shuffledChoices = shuffleArray([
      ...currentQuiz[currentIndex].choices,
    ]);

    // 選択肢の表示を更新
    const choices = document.querySelectorAll('.choice button');
    shuffledChoices.forEach((choice, index) => {
      choices[index].innerText = choice;
      choices[index].onclick = () => checkAnswer(choice);
    });
  } else {
    // 全ての問題が終わったら結果を表示
    document.getElementById(
      'question'
    ).innerText = `終了！ 正解数: ${score}/${currentQuiz.length}`;
    document
      .querySelectorAll('.choice button')
      .forEach((button) => (button.style.display = 'none'));
  }
}

const feedbackElement = document.getElementById('feedback');

// 答えをチェックする関数
function checkAnswer(selected) {
  const correctAnswer = currentQuiz[currentIndex].correct;
  const feedbackElement = document.getElementById('feedback');

  if (selected === correctAnswer) {
    score++;
    // alert('正解！');
    feedbackElement.textContent = '〇';
    feedbackElement.classList.add('correct');
  } else {
    // alert(`不正解！ 正解は ${correctAnswer}`);
    feedbackElement.textContent = '×';
    feedbackElement.classList.add('incorrect');
  }

  setTimeout(() => {
    feedbackElement.textContent = '';
    feedbackElement.classList.remove('correct', 'incorrect');
    currentIndex++;
    loadQuestion();
  }, 2000);
}
