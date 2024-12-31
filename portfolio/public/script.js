document.getElementById('profile-button').addEventListener('click', function() {
    var drawerMenu = document.getElementById('drawer-menu');
    drawerMenu.classList.toggle('open');
});

document.querySelector('.works-content').addEventListener('click', function() {
    var mainElement = document.querySelector('.main');
    mainElement.innerHTML = `
        <div class="works">
            <h2>これまで作ってきた作品</h2>
            <div class="work-item">
                <h3>作品1</h3>
                <p>作品1の説明...</p>
            </div>
            <div class="work-item">
                <h3>作品2</h3>
                <p>作品2の説明...</p>
            </div>
            <div class="work-item">
                <h3>作品3</h3>
                <p>作品3の説明...</p>
            </div>
            <!-- 追加の作品をここに追加 -->
        </div>
    `;
});

document.querySelector('.skills-content').addEventListener('click', function() {
    var mainElement = document.querySelector('.main');
    mainElement.innerHTML = `
        <div class="skills">
            <h2>自分のできること</h2>
            <div class="skill-item">
                <h3>スキル1</h3>
                <p>スキル1の説明...</p>
            </div>
            <div class="skill-item">
                <h3>スキル2</h3>
                <p>スキル2の説明...</p>
            </div>
            <div class="skill-item">
                <h3>スキル3</h3>
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