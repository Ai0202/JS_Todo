// ゴミ箱アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';


let addBtn = document.getElementById('add');
addBtn.addEventListener('click', function() {
    
    // 入力欄を取得
    let inputTask = document.getElementById('task');

    // liの作成
    let li = createNewTaskLi(inputTask.value);

    // NotYetのulを取得
    let notYetUl = document.getElementById('not-yet');

    // liを追加
    notYetUl.insertBefore(li, notYetUl.firstChild);
});

// タスクを削除する
function removeTask() {
    let task = this.parentElement.parentElement
    task.remove()
}

function doneTask() {
    // 移動させるliを取得
    let task = this.parentElement.parentElement;

    let doneUl = document.getElementById('done');
    doneUl.insertBefore(task, doneUl.firstChild);
}

// 新しいliを作成
// 引数：画面の入力値
function createNewTaskLi(taskText) {

    // liタグの作成
    let li = document.createElement('li');

    // liに入力値を設定
    li.textContent = taskText;

    // divの作成
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    // buttonの作成
    // 削除ボタン
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    remove.addEventListener('click', removeTask);

    // 完了ボタン
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;

    done.addEventListener('click', doneTask);

    // divにボタンを追加
    buttons.appendChild(remove);
    buttons.appendChild(done);

    // liにdivを追加
    li.appendChild(buttons);

    return li;
}