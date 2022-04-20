if (/*@cc_on!@*/false || (!!window.MSInputMethodContext && !!document.documentMode)) {
    var no_particles = document.getElementById("particles-js");
    no_particles.innerHTML = "";
    var no_about = document.getElementById("about");
    no_about.innerHTML = "";
    document.write(
        '<style>' +
        'html{' +
        'overflow-x: hidden !important;' +
        'overflow-y: hidden !important;' +
        '}' +
        '.kill-ie{' +
        'text-align:center;' +
        'height: 100%;' +
        'margin-top: 15%;' +
        'margin-bottom: 5500%;' +
        '}' +
        '</style>' +
        '<div class="kill-ie">' +
        '<h1><b>抱歉，您的浏览器无法访问本站</b></h1>' +
        '<h3>Internet Explorer (IE) 11 是 Internet Explorer 的最后一个主要版本。 从 2022 年 6 月 15 日 开始，某些版本的 Windows 10 将不再支持 Internet Explorer 11 桌面应用程序；<br/>' +
        '继续使用存在极大的安全隐患，请使用当代主流的浏览器进行访问。</h3><br/>' +
        '<a target="_blank" rel="noopener" href="https://aka.ms/IEmodeblog"><strong>Internet Explorer 11 终止支持和 IE 模式公告</strong></a><p>·</p>' +
        '<a target="_blank" rel="noopener" href="https://aka.ms/IEModeWebsite"><strong>IE模式网站</strong></a>' +
        '</div>');
}
