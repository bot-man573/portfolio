document.getElementById('profile-button').addEventListener('click', function() {
    var drawerMenu = document.getElementById('drawer-menu');
    drawerMenu.classList.toggle('open');
});

document.querySelector('.works-content').addEventListener('click', function() {
    var mainElement = document.querySelector('.main');
    mainElement.innerHTML = `
        <div class="works">
            <h2>Works</h2>
            <br>
            <div class="work-item">
                <h3>KODEBU. ホームページ</h3>
                <div class="work-img">
                    <a href="https://kodebu-homepage.deno.dev/"><img src="img/works/KODEBU-homepage.png" alt="作品1の画像"></a>
                </div>
                <p> 仲のいい友達と作ったスタンプを告知するために作成したホームページです。<br>
                    （画像をクリックするとホームページに飛びます。））
                </p>
            </div>
            <div class="work-item">
                <h3>直流安定化電源</h3>
                <div class="work-img">
                    <img src="img/works/battery.jpg" alt="作品2の画像">
                </div>
                <br>
                <p>学校の実験実習で安定した直流電圧を送ることができる装置を作成しました。</p>
            </div>
            <div class="work-item">
                <h3>ロボットアーム</h3>
                <div class="work-img">
                    <img src="img/works/robot-arm.png" alt="作品3の画像">
                </div>
                <p>学校の授業の一環で作成したロボットアームです。<br>様々な部品を作成してアセンブリをすることによってロボットアームを構成しています。</p>
            </div>
            <!-- 追加の作品をここに追加 -->
            <div class="work-item">
                <h2>ミニゲーム（基礎研究成果物）</h2>
                <div class="work-img">
                    <img src="img/works/kisoken-minigame.png" alt="作品4の画像">
                </div>
                <p>
                    研究概要: 4月から11月までの約7か月間の長期研究。<br>
                    研究目的: お客様にお寿司を提供するシステムを作成する。<br>
                    活動人数: 6人<br>
                    自分の担当箇所: ミニゲーム作成・制御<br>
                    使用言語: JavaScript, HTML, CSS, python<br>
                    使用ツール: vscode<br>
                </p>

            </div>
        </div>
    `;
});

document.querySelector('.skills-content').addEventListener('click', function() {
    var mainElement = document.querySelector('.main');
    mainElement.innerHTML = `
        <div class="skills">
            <h2>skills</h2>
            <div class="skill-item">
                <h3>スキル1</h3>
                <img src="images/skill1.png" alt="スキル1のアイコン">
                <p>スキル1の説明...</p>
            </div>
            <div class="skill-item">
                <h3>スキル2</h3>
                <img src="images/skill2.png" alt="スキル2のアイコン">
                <p>スキル2の説明...</p>
            </div>
            <div class="skill-item">
                <h3>スキル3</h3>
                <img src="images/skill3.png" alt="スキル3のアイコン">
                <p>スキル3の説明...</p>
            </div>
            <!-- 追加のスキルをここに追加 -->
        </div>
    `;
});

document.querySelector('.top-footer').addEventListener('click', function() {
    var mainElement = document.querySelector('.main');
    mainElement.innerHTML = `
        <div class="intro">Hello.<br>This is Otani's Portfolio.</div>
    `;
});

// ドロワーメニュー以外の部分をクリックするとドロワーメニューが閉じるようにする
document.addEventListener('click', function(event) {
    var drawerMenu = document.getElementById('drawer-menu');
    var profileButton = document.getElementById('profile-button');
    if (drawerMenu.classList.contains('open') && !drawerMenu.contains(event.target) && !profileButton.contains(event.target)) {
        drawerMenu.classList.remove('open');
    }
});