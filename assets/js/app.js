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

    // liを追加
    notYetUl.insertBefore(li, notYetUl.firstChild);
});