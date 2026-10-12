var courses = [
    { id: 1, e: '🌐', c: 'c1', cat: 'front', price: 1900000, fa: 'HTML و CSS مقدماتی', en: 'HTML CSS Basics', lvl: 'مقدماتی', enLvl: 'Beginner', time: '۱۲ ساعت', enTime: '12h' },
    { id: 2, e: '⚡', c: 'c2', cat: 'front', price: 2500000, fa: 'جاوااسکریپت پروژه‌محور', en: 'Practical JavaScript', lvl: 'متوسط', enLvl: 'Mid', time: '۲۰ ساعت', enTime: '20h' },
    { id: 3, e: '⚛️', c: 'c3', cat: 'front', price: 3200000, fa: 'ری‌اکت و بازار کار', en: 'React for Jobs', lvl: 'پیشرفته', enLvl: 'Advanced', time: '۲۴ ساعت', enTime: '24h' },
    { id: 4, e: '🟦', c: 'c4', cat: 'wp', price: 2200000, fa: 'وردپرس فروشگاهی', en: 'WooCommerce WP', lvl: 'متوسط', enLvl: 'Mid', time: '۱۶ ساعت', enTime: '16h' },
    { id: 5, e: '🎨', c: 'c5', cat: 'wp', price: 1800000, fa: 'قالب‌سازی وردپرس', en: 'WP Theme Dev', lvl: 'پیشرفته', enLvl: 'Advanced', time: '۱۸ ساعت', enTime: '18h' },
    { id: 6, e: '🚀', c: 'c6', cat: 'seo', price: 1500000, fa: 'سئو و سرعت سایت', en: 'SEO and Speed', lvl: 'مقدماتی', enLvl: 'Beginner', time: '۱۰ ساعت', enTime: '10h' }
];
var cat = 'all', cart = {}, lang = 'fa', theme = 'light';
try { cart = JSON.parse(localStorage.getItem('acCart') || '{}'); } catch (e) { cart = {}; }
try { lang = localStorage.getItem('acLang') || 'fa'; } catch (e) { }
try { theme = localStorage.getItem('acTheme') || 'light'; } catch (e) { }
var dict = {
    logo: { fa: 'امیرآکادمی', en: 'Amir Academy' },
    nHome: { fa: 'خانه', en: 'Home' }, nCourses: { fa: 'دوره‌ها', en: 'Courses' }, nTeach: { fa: 'اساتید', en: 'Teachers' }, nPrice: { fa: 'تعرفه', en: 'Pricing' }, nReg: { fa: 'ثبت‌نام', en: 'Register' },
    badge: { fa: 'از صفر تا کسب درآمد + مدرک', en: 'Zero to income + certificate' },
    heroT: { fa: 'طراحی سایت رو پروژه‌محور یاد بگیر', en: 'Learn web design by projects' },
    heroS: { fa: 'HTML ،CSS ،جاوااسکریپت و وردپرس. با ۵ پروژه واقعی وارد بازار کار شو.', en: 'HTML, CSS, JS and WordPress. Enter market with 5 real projects.' },
    bCourses: { fa: 'دیدن دوره‌ها', en: 'View Courses' }, bFree: { fa: 'مشاوره رایگان', en: 'Free Consult' },
    st1: { fa: 'دانشجو', en: 'Students' }, st2: { fa: 'رضایت', en: 'Rating' }, st3: { fa: 'پروژه عملی', en: 'Projects' },
    popT: { fa: 'پیشنهاد ویژه', en: 'Special Offer' }, popS: { fa: 'بوت‌کمپ فرانت‌اند + وردپرس با ۴۰٪ تخفیف', en: 'Frontend + WP bootcamp 40% off' },
    popP: { fa: '۳٬۹۰۰٬۰۰۰ تومان', en: '3,900,000 T' }, popB: { fa: 'ثبت‌نام سریع', en: 'Quick Register' },
    cT: { fa: 'دوره‌ها', en: 'Courses' }, cS: { fa: 'فیلتر کن و دوره‌ات رو انتخاب کن', en: 'Filter and pick your course' },
    fAll: { fa: 'همه', en: 'All' }, fF: { fa: 'فرانت‌اند', en: 'Frontend' }, fW: { fa: 'وردپرس', en: 'WordPress' }, fS: { fa: 'سئو', en: 'SEO' },
    tT: { fa: 'اساتید', en: 'Teachers' }, t1n: { fa: 'امیر عباسی', en: 'Amir Abasi' }, t1r: { fa: 'مدرس فرانت‌اند', en: 'Frontend mentor' }, t2n: { fa: 'سارا محمدی', en: 'Sara Mohammadi' }, t2r: { fa: 'مدرس وردپرس', en: 'WP mentor' }, t3n: { fa: 'رضا احمدی', en: 'Reza Ahmadi' }, t3r: { fa: 'مدرس سئو', en: 'SEO mentor' },
    pT: { fa: 'تعرفه‌ها', en: 'Pricing' }, p1t: { fa: 'تک دوره', en: 'Single' }, p1p: { fa: '۱٬۹۰۰٬۰۰۰', en: '1,900,000' }, p1l1: { fa: '۸ جلسه آنلاین', en: '8 live sessions' }, p1l2: { fa: 'پروژه عملی', en: 'Practical project' }, p1l3: { fa: 'مدرک پایان دوره', en: 'Certificate' },
    p2t: { fa: 'بوت‌کمپ', en: 'Bootcamp' }, p2p: { fa: '۳٬۹۰۰٬۰۰۰', en: '3,900,000' }, p2l1: { fa: 'همه دوره‌ها', en: 'All courses' }, p2l2: { fa: 'منتور اختصاصی', en: '1-1 mentor' }, p2l3: { fa: 'معرفی به کار', en: 'Job intro' },
    p3t: { fa: 'خصوصی', en: 'Private' }, p3p: { fa: '۶٬۰۰۰٬۰۰۰', en: '6,000,000' }, p3l1: { fa: 'کلاس ۱ نفره', en: '1-1 class' }, p3l2: { fa: 'زمان دلخواه', en: 'Flexible time' }, p3l3: { fa: 'پشتیبانی دائمی', en: 'Lifetime support' },
    toman: { fa: 'تومان', en: 'T' }, toman2: { fa: 'تومان', en: 'T' }, toman3: { fa: 'تومان', en: 'T' },
    order: { fa: 'ثبت‌نام', en: 'Register' }, order2: { fa: 'ثبت‌نام', en: 'Register' }, order3: { fa: 'ثبت‌نام', en: 'Register' },
    faqT: { fa: 'سوالات پرتکرار', en: 'FAQ' }, q1: { fa: 'پیش‌نیاز لازم داره؟', en: 'Any prerequisite?' }, a1: { fa: 'نه، از صفر شروع می‌کنیم فقط لپ‌تاپ لازمه.', en: 'No, we start from zero.' }, q2: { fa: 'کلاس‌ها آنلاینن؟', en: 'Online?' }, a2: { fa: 'بله، آنلاین + ضبط شده برای مرور.', en: 'Yes, live + recorded.' }, q3: { fa: 'مدرک می‌دین؟', en: 'Certificate?' }, a3: { fa: 'بله، بعد از تحویل پروژه نهایی مدرک می‌گیری.', en: 'Yes, after final project.' },
    rT: { fa: 'فرم ثبت‌نام', en: 'Register Form' }, rS: { fa: 'پر کن تا مشاوره‌ات تماس بگیره', en: 'Fill, we call you back' },
    lName: { fa: 'نام', en: 'Name' }, lPhone: { fa: 'موبایل', en: 'Phone' }, lCourse: { fa: 'دوره', en: 'Course' },
    o1: { fa: 'بوت‌کمپ فرانت‌اند', en: 'Frontend Bootcamp' }, o2: { fa: 'وردپرس', en: 'WordPress' }, o3: { fa: 'سئو', en: 'SEO' },
    rB: { fa: 'ثبت‌نام', en: 'Register' },
    foot: { fa: 'امیرآکادمی | ساخته امیر عباسی • 09231374838', en: 'Amir Academy | by Amir Abasi' },
    cartT: { fa: 'دوره‌های من', en: 'My Courses' }, total: { fa: 'جمع:', en: 'Total:' }, pay: { fa: 'نهایی کردن ثبت‌نام', en: 'Checkout' }
};
var dictPh = { phName: { fa: 'نام شما', en: 'Your name' } };
function faN(n) { return n.toLocaleString('fa-IR'); }
function priceT(n) { return (lang === 'fa' ? faN(n) : n.toLocaleString('en-US')) + (lang === 'fa' ? ' تومان' : ' T'); }
function toast(m) { var t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); setTimeout(function () { t.classList.remove('show'); }, 2000); }
function applyLang(l) {
    lang = l;
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) { var k = els[i].getAttribute('data-i18n'); if (dict[k] && dict[k][l]) els[i].textContent = dict[k][l]; }
    var phs = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phs.length; j++) { var kp = phs[j].getAttribute('data-i18n-ph'); if (dictPh[kp]) phs[j].placeholder = dictPh[kp][l]; }
    document.documentElement.lang = l; document.documentElement.dir = (l === 'fa') ? 'rtl' : 'ltr';
    document.getElementById('langBtn').textContent = (l === 'fa') ? 'EN' : 'FA';
    try { localStorage.setItem('acLang', l); } catch (e) { }
    render(); drawCart();
}
function render() {
    var g = document.getElementById('courseGrid'); var h = '';
    for (var i = 0; i < courses.length; i++) {
        var p = courses[i]; if (cat !== 'all' && p.cat !== cat) continue;
        var nm = (lang === 'fa') ? p.fa : p.en; var lv = (lang === 'fa') ? p.lvl : p.enLvl; var tm = (lang === 'fa') ? p.time : p.enTime;
        var btn = (lang === 'fa') ? 'افزودن 📚' : 'Add';
        h += '<div class="course"><div class="c-img ' + p.c + '">' + p.e + '</div><div class="c-body"><h3>' + nm + '</h3><small>' + lv + ' • ' + tm + '</small><div class="c-meta"><span>★ 4.8</span><span class="price2">' + priceT(p.price) + '</span></div><button class="btn" data-id="' + p.id + '">' + btn + '</button></div></div>';
    }
    g.innerHTML = h;
    var btns = g.querySelectorAll('button');
    for (var j = 0; j < btns.length; j++) { btns[j].onclick = function () { addToCart(parseInt(this.getAttribute('data-id'))); }; }
    updateCount();
}
function updateCount() { var n = 0; for (var k in cart) n += cart[k]; document.getElementById('cartCount').textContent = (lang === 'fa') ? faN(n) : n; }
function save() { try { localStorage.setItem('acCart', JSON.stringify(cart)); } catch (e) { } updateCount(); }
function addToCart(id) { cart[id] = (cart[id] || 0) + 1; save(); drawCart(); openDrawer(); toast(lang === 'fa' ? 'به لیستت اضافه شد ✓' : 'Added ✓'); }
function openDrawer() { document.getElementById('drawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
function closeDrawer() { document.getElementById('drawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }
function drawCart() {
    var box = document.getElementById('cartItems'); var h = '', total = 0;
    for (var id in cart) {
        var p = null; for (var i = 0; i < courses.length; i++)if (courses[i].id == id) p = courses[i]; var q = cart[id]; total += p.price * q; var nm = (lang === 'fa') ? p.fa : p.en;
        h += '<div class="ci"><span>' + p.e + ' ' + nm + '</span><button data-id="' + id + '">✕</button></div>';
    }
    box.innerHTML = h || (lang === 'fa' ? 'هنوز دوره‌ای انتخاب نکردی' : 'Empty');
    document.getElementById('cartTotal').textContent = priceT(total);
    var btns = box.querySelectorAll('button');
    for (var j = 0; j < btns.length; j++) { btns[j].onclick = function () { delete cart[this.getAttribute('data-id')]; save(); drawCart(); }; }
}
document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('themeBtn').textContent = (theme === 'light') ? '🌙' : '☀️';
    applyLang(lang);
    document.getElementById('hamburger').onclick = function () { document.getElementById('navLinks').classList.toggle('open'); };
    document.getElementById('themeBtn').onclick = function () { theme = (theme === 'light') ? 'dark' : 'light'; document.documentElement.setAttribute('data-theme', theme); this.textContent = (theme === 'light') ? '🌙' : '☀️'; try { localStorage.setItem('acTheme', theme); } catch (e) { } };
    document.getElementById('langBtn').onclick = function () { applyLang(lang === 'fa' ? 'en' : 'fa'); };
    var fb = document.querySelectorAll('#filters .filter');
    for (var i = 0; i < fb.length; i++) { (function (b) { b.onclick = function () { for (var j = 0; j < fb.length; j++)fb[j].classList.remove('active'); b.classList.add('active'); cat = b.getAttribute('data-cat'); render(); }; })(fb[i]); }
    document.querySelectorAll('.faq-q').forEach(function (b) { b.onclick = function () { b.parentElement.classList.toggle('open'); }; });
    document.getElementById('cartBtn').onclick = function () { drawCart(); openDrawer(); };
    document.getElementById('closeCart').onclick = closeDrawer;
    document.getElementById('overlay').onclick = closeDrawer;
    document.getElementById('popBtn').onclick = function () { addToCart(2); };
    document.getElementById('payBtn').onclick = function () { if (!Object.keys(cart).length) { toast(lang === 'fa' ? 'لیست خالیه' : 'Empty'); return; } cart = {}; save(); drawCart(); closeDrawer(); toast(lang === 'fa' ? 'ثبت‌نامت انجام شد ✓' : 'Registered ✓'); };
    document.getElementById('regForm').onsubmit = function (e) {
        e.preventDefault();
        var n = document.getElementById('rName').value.trim(), ph = document.getElementById('rPhone').value.trim(), ok = true;
        document.getElementById('eName').textContent = ''; document.getElementById('ePhone').textContent = '';
        if (n.length < 3) { document.getElementById('eName').textContent = (lang === 'fa' ? 'نام کوتاهه' : 'Short name'); ok = false; }
        if (!/^09\d{9}$/.test(ph)) { document.getElementById('ePhone').textContent = (lang === 'fa' ? 'موبایل معتبر نیست' : 'Invalid phone'); ok = false; }
        if (ok) { this.reset(); toast(lang === 'fa' ? 'ثبت شد، تماس می‌گیریم ✓' : 'Done ✓'); }
    };
});