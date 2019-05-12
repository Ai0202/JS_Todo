// ゴミ箱アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


let addBtn = document.getElementById('add');
addBtn.addEventListener('click', function() {
    
    // 入力欄を取得
    let inputTask = document.getElementById('task');

    // liタグの作成
    let li = document.createElement('li');

    // liに入力値を設定
    li.textContent = inputTask.value;

    // NotYetのulを取得
    let notYetUl = document.getElementById('not-yet');

    // divの作成
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    // buttonの作成
    // 削除ボタン
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    // 完了ボタン
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;

    // divにボタンを追加
    buttons.appendChild(remove);
    buttons.appendChild(done);

    // liにdivを追加
    li.appendChild(buttons);

    // liを追加
    notYetUl.insertBefore(li, notYetUl.firstChild);
});
