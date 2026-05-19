// ===== CONTENT DATA =====
const navItems = [
    { id: 'overview', label: 'نظرة عامة', icon: 'fa-th-large', section: 'عام' },
    { id: 'hero', label: 'الصفحة الرئيسية', icon: 'fa-home', section: 'عام' },
    { id: 'door1', label: 'الباب الأول: التعريف', icon: 'fa-book-open', section: 'الأبواب التنظيمية', num: '01' },
    { id: 'door2', label: 'الباب الثاني: نطاق التطبيق', icon: 'fa-globe', section: 'الأبواب التنظيمية', num: '02' },
    { id: 'door3', label: 'الباب الثالث: الرؤية والرسالة', icon: 'fa-bullseye', section: 'الأبواب التنظيمية', num: '03' },
    { id: 'door4', label: 'الباب الرابع: الهيكل التنظيمي', icon: 'fa-sitemap', section: 'الأبواب التنظيمية', num: '04' },
    { id: 'door5', label: 'الباب الخامس: المسؤوليات', icon: 'fa-user-shield', section: 'الأبواب التنظيمية', num: '05' },
    { id: 'door6', label: 'الباب السادس: مركزية الأنظمة', icon: 'fa-server', section: 'الأبواب التنظيمية', num: '06' },
    { id: 'door7', label: 'الباب السابع: أمن البيانات', icon: 'fa-lock', section: 'الأبواب التنظيمية', num: '07' },
    { id: 'door8', label: 'الباب الثامن: لجنة الميديا', icon: 'fa-camera', section: 'الأبواب التنظيمية', num: '08' },
    { id: 'door9', label: 'الباب التاسع: شجرة الوصول', icon: 'fa-key', section: 'الأبواب التنظيمية', num: '09' },
    { id: 'door10', label: 'الباب العاشر: الملكية المركزية', icon: 'fa-fingerprint', section: 'الأبواب التنظيمية', num: '10' },
    { id: 'door11', label: 'الباب الحادي عشر: KPIs', icon: 'fa-chart-line', section: 'الأبواب التنظيمية', num: '11' },
    { id: 'door12', label: 'الباب الثاني عشر: المخالفات', icon: 'fa-gavel', section: 'الأبواب التنظيمية', num: '12' },
    { id: 'door13', label: 'الباب الثالث عشر: التحصين', icon: 'fa-shield-virus', section: 'الأبواب التنظيمية', num: '13' },
    { id: 'door14', label: 'الباب الرابع عشر: الانسحاب', icon: 'fa-door-open', section: 'الأبواب التنظيمية', num: '14' },
    { id: 'door15', label: 'الباب الخامس عشر: التطوير', icon: 'fa-graduation-cap', section: 'الأبواب التنظيمية', num: '15' },
    { id: 'door16', label: 'الباب السادس عشر: حق التعديل', icon: 'fa-edit', section: 'الأبواب التنظيمية', num: '16' },
];

const overviewCards = [
    { target: 'door1', icon: 'fa-book-open', color: 'var(--accent-primary)', bg: 'rgba(59,130,246,0.1)', title: 'التعريف والإطار', desc: 'التعريف باللجنة، التبعية المؤسسية، والاختصاص الحصري' },
    { target: 'door4', icon: 'fa-sitemap', color: 'var(--purple)', bg: 'rgba(139,92,246,0.1)', title: 'الهيكل التنظيمي', desc: 'المسؤول المركزي، الفريق المعاون، متابعو القطاعات، فرق الجامعات' },
    { target: 'door9', icon: 'fa-key', color: 'var(--success)', bg: 'rgba(16,185,129,0.1)', title: 'الصلاحيات الرقمية', desc: 'مستويات الوصول، شجرة الصلاحيات، أولوية لجنة IT' },
    { target: 'door12', icon: 'fa-gavel', color: 'var(--danger)', bg: 'rgba(239,68,68,0.1)', title: 'المخالفات والجزاءات', desc: 'تصنيف المخالفات، سلم الجزاءات، الإجراءات التنظيمية' },
    { target: 'door11', icon: 'fa-chart-line', color: 'var(--warning)', bg: 'rgba(245,158,11,0.1)', title: 'مؤشرات الأداء', desc: 'KPIs، أدوات المتابعة، نظام التقييم الدوري' },
    { target: 'door15', icon: 'fa-graduation-cap', color: 'var(--accent-primary)', bg: 'rgba(59,130,246,0.1)', title: 'التطوير الداخلي', desc: 'التدريبات، التقنيات المستخدمة، تأهيل الكوادر' },
];

const searchData = [
    { id: 'door1', title: 'الباب الأول: التعريف والإطار المؤسسي', preview: 'التعريف باللجنة، التبعية المؤسسية، الاختصاص الحصري', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door2', title: 'الباب الثاني: نطاق التطبيق والإلزام', preview: 'نطاق التطبيق على جميع الكيانات، الإلزام العام', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door3', title: 'الباب الثالث: الرؤية والرسالة والأهداف', preview: 'الرؤية، الرسالة، الأهداف الاستراتيجية الـ 12', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door4', title: 'الباب الرابع: الهيكل التنظيمي', preview: 'التكوين الإداري، المسؤول المركزي، الفريق المعاون', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door5', title: 'الباب الخامس: المسؤوليات والصلاحيات', preview: 'المسؤول المركزي، متابعو القطاعات، فريق العمليات', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door6', title: 'الباب السادس: مركزية الأنظمة', preview: 'منع التكرارية، حظر التنفيذ قبل الاعتماد', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door7', title: 'الباب السابع: أمن البيانات والملكية', preview: 'ملكية البيانات، حظر الاستخدام الشخصي، تسليم الصلاحيات', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door8', title: 'الباب الثامن: العلاقة بلجنة الميديا', preview: 'الاحترام المتبادل، حظر التداخل، الالتزام بالقواعد', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door9', title: 'الباب التاسع: شجرة الوصول والصلاحيات', preview: 'مستويات الصلاحيات، أولوية لجنة IT، تمثيل اللجنة', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door10', title: 'الباب العاشر: الملكية المركزية للحسابات', preview: 'البريد المركزي، نقل الملكية، سحب الصلاحيات', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door11', title: 'الباب الحادي عشر: نظام التقييم وKPIs', preview: 'أدوات المتابعة، مؤشرات الأداء، نظام التقييم', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door12', title: 'الباب الثاني عشر: المخالفات والجزاءات', preview: 'المخالفات العادية والجسيمة، سلم الجزاءات', badge: 'باب تنظيمي', badgeColor: 'var(--danger)' },
    { id: 'door13', title: 'الباب الثالث عشر: التحصين التنظيمي', preview: 'الإلغاء الإجباري، وحدة المرجعية، السلطة التقديرية', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door14', title: 'الباب الرابع عشر: آلية الانسحاب', preview: 'الانسحاب التطوعي، إنهاء العضوية، استرداد الحسابات', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door15', title: 'الباب الخامس عشر: التطوير الداخلي', preview: 'التدريبات، التقنيات المستخدمة، تأهيل الكوادر', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'door16', title: 'الباب السادس عشر: حق التعديل', preview: 'اقتراح التعديل، الاعتماد، الإعلان الرسمي', badge: 'باب تنظيمي', badgeColor: 'var(--accent-primary)' },
    { id: 'overview', title: 'نظرة عامة على اللائحة', preview: '16 باباً تنظيمياً تغطي جميع جوانب إدارة التحول الرقمي', badge: 'عام', badgeColor: 'var(--success)' },
];

// ===== SECTIONS CONTENT =====
const sectionsContent = {};

sectionsContent.overview = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-th-large"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">OVERVIEW</div>
        <h2 class="section-title">نظرة عامة على اللائحة</h2>
        <p class="section-desc">16 باباً تنظيمياً تغطي جميع جوانب إدارة التحول الرقمي</p>
    </div>
</div>
<div class="overview-grid">
    <div class="overview-card" onclick="scrollToSection('door1')">
        <div class="overview-card-icon" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">
            <i class="fas fa-book-open"></i>
        </div>
        <div class="overview-card-title">التعريف والإطار</div>
        <div class="overview-card-desc">التعريف باللجنة، التبعية المؤسسية، والاختصاص الحصري</div>
    </div>
    <div class="overview-card" onclick="scrollToSection('door4')">
        <div class="overview-card-icon" style="background: rgba(139,92,246,0.1); color: var(--purple);">
            <i class="fas fa-sitemap"></i>
        </div>
        <div class="overview-card-title">الهيكل التنظيمي</div>
        <div class="overview-card-desc">المسؤول المركزي، الفريق المعاون، متابعو القطاعات، فرق الجامعات</div>
    </div>
    <div class="overview-card" onclick="scrollToSection('door9')">
        <div class="overview-card-icon" style="background: rgba(16,185,129,0.1); color: var(--success);">
            <i class="fas fa-key"></i>
        </div>
        <div class="overview-card-title">الصلاحيات الرقمية</div>
        <div class="overview-card-desc">مستويات الوصول، شجرة الصلاحيات، أولوية لجنة IT</div>
    </div>
    <div class="overview-card" onclick="scrollToSection('door12')">
        <div class="overview-card-icon" style="background: rgba(239,68,68,0.1); color: var(--danger);">
            <i class="fas fa-gavel"></i>
        </div>
        <div class="overview-card-title">المخالفات والجزاءات</div>
        <div class="overview-card-desc">تصنيف المخالفات، سلم الجزاءات، الإجراءات التنظيمية</div>
    </div>
    <div class="overview-card" onclick="scrollToSection('door11')">
        <div class="overview-card-icon" style="background: rgba(245,158,11,0.1); color: var(--warning);">
            <i class="fas fa-chart-line"></i>
        </div>
        <div class="overview-card-title">مؤشرات الأداء</div>
        <div class="overview-card-desc">KPIs، أدوات المتابعة، نظام التقييم الدوري</div>
    </div>
    <div class="overview-card" onclick="scrollToSection('door15')">
        <div class="overview-card-icon" style="background: rgba(59,130,246,0.1); color: var(--accent-primary);">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="overview-card-title">التطوير الداخلي</div>
        <div class="overview-card-desc">التدريبات، التقنيات المستخدمة، تأهيل الكوادر</div>
    </div>
</div>
`;

sectionsContent.door1 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-book-open"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الأول</div>
        <h2 class="section-title">التعريف والإطار المؤسسي</h2>
        <p class="section-desc">التأسيس القانوني للجنة وحدود اختصاصها</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 1</span>
            <h3 class="article-title">التعريف</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>لجنة إدارة تكنولوجيا المعلومات والتحول الرقمي هي الجهة التنظيمية المركزية المختصة حصرياً بإدارة وتنظيم وضبط كافة المساحات والأنظمة والبُنى الرقمية داخل الرابطة</li>
                <li>تضع اللجنة السياسات الرقمية الملزمة، وتشرف على تنفيذها، وتمارس سلطة الرقابة والمساءلة</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 2</span>
            <h3 class="article-title">التبعية المؤسسية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>تتبع اللجنة تنظيمياً مجلس إدارة متطوعي صناع الحياة مصر</li>
                <li>المجلس هو الجهة الممثلة والموجهة للجنة في الإطار المؤسسي العام بما يتسق مع هوية الجامعات</li>
                <li>يخلّذ ذلك بالاختصاص الحصري للجنة في إدارة وتنظيم الشأن الرقمي داخل نطاق الرابطة</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 3</span>
            <h3 class="article-title">الاختصاص الحصري</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>إنشاء واعتماد الأنظمة والمنصات الرقمية</li>
                <li>إدارة قواعد البيانات المركزية</li>
                <li>اعتماد أدوات جمع البيانات والتقييم</li>
                <li>تنظيم الصلاحيات الرقمية ومنحها وسحبها</li>
                <li>إصدار سياسات أمن المعلومات</li>
                <li>إدارة التقارير والتحليلات المركزية</li>
                <li>تصنيف المخالفات الرقمية واتخاذ الإجراءات بشأنها</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-exclamation-triangle"></i>
                <div>لا يجوز لأي جهة أو لجنة أو جامعة إنشاء أو تشغيل أي نظام أو قاعدة بيانات أو أداة رقمية خارج الإطار المعتمد مركزياً</div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door2 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-globe"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الثاني</div>
        <h2 class="section-title">نطاق التطبيق والإلزام</h2>
        <p class="section-desc">حدود تطبيق اللائحة على جميع الكيانات</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 4</span>
            <h3 class="article-title">نطاق التطبيق</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>جميع اللجان والملفات والإدارات والقطاعات</li>
                <li>جميع الجامعات وتفرعاتها ومسؤوليها</li>
                <li>كافة مسؤولي الأنظمة الرقمية ومستخدميها</li>
                <li>جميع البيانات والمنصات والحسابات الرقمية</li>
                <li>أي مساحة رقمية تمثل الرابطة داخلياً أو خارجياً</li>
            </ul>
            <div class="highlight-box info">
                <i class="fas fa-info-circle"></i>
                <div>يُعد كل ما يندرج تحت الإطار الرقمي داخل الرابطة خاضعاً لإشراف اللجنة</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 5</span>
            <h3 class="article-title">الإلزام العام</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>أحكام هذه اللائحة ملزمة للجميع دون استثناء</li>
                <li>لا يجوز منح أي تحصين إداري أو استثناء تقني يخالفها</li>
                <li>تلتزم جميع الجهات بالقواعد الرقمية الصادرة عن اللجنة</li>
                <li>كل مخالفة تُعرض مرتكبها أو الجهة التابعة لها للمساءلة التنظيمية</li>
            </ul>
            <div class="highlight-box warning">
                <i class="fas fa-exclamation-circle"></i>
                <div>لا يجوز منح أي تحصين إداري أو استثناء تقني يخالف أحكام هذه اللائحة</div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door3 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-bullseye"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الثالث</div>
        <h2 class="section-title">الرؤية والرسالة والأهداف الاستراتيجية</h2>
        <p class="section-desc">التوجه الاستراتيجي للجنة وغاياتها</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 6</span>
            <h3 class="article-title">الرؤية</h3>
        </div>
        <div class="article-body">
            <div class="highlight-box info">
                <i class="fas fa-eye"></i>
                <div><strong>تحقيق تحول رقمي كامل</strong> داخل الرابطة يضمن النضباط الإداري، ورفع كفاءة الأداء، وصناعة أثر مستدام لكل من يتعامل مع المنظومة الرقمية</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 7</span>
            <h3 class="article-title">الرسالة</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>بناء نظام رقمي مركزي منضبط</li>
                <li>ضبط عضوية المتطوعين</li>
                <li>تحديث البيانات بصورة مستمرة</li>
                <li>إنشاء أنظمة تقييم ومتابعة احترافية</li>
                <li>إصدار تقارير تحليلية داعمة لصنع القرار</li>
                <li>تأهيل كوادر رقمية قادرة على مواكبة سوق العمل</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 8</span>
            <h3 class="article-title">الأهداف الاستراتيجية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>ضبط عضوية متطوعي الجامعات بالكامل</li>
                <li>تحديث بيانات المتطوعين بشكل دوري</li>
                <li>إصدار شهادات تطوع معتمدة</li>
                <li>إنشاء نظام واضح للحسابات والصلاحيات داخل كل جامعة</li>
                <li>بناء فريق مركزي قوي لإدارة التفرعات</li>
                <li>إنشاء نظام رصد لأنشطة ومشاركات التطوعية</li>
                <li>ربط المشاركات بنظام تقييم</li>
                <li>إطلاق منصة تدريبات رقمية</li>
                <li>إنشاء غرفة دعم تقني مركزية</li>
                <li>أتمتة العمليات باستخدام أدوات رقمية</li>
                <li>إصدار تقارير تحليلية شهرية للإدارة العليا</li>
                <li>ضمان أمن البيانات وتخزينها وفق ضوابط واضحة</li>
            </ul>
        </div>
    </div>
</div>
`;

sectionsContent.door4 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-sitemap"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الرابع</div>
        <h2 class="section-title">الهيكل التنظيمي</h2>
        <p class="section-desc">التكوين الإداري للجنة وتوزيع المهام</p>
    </div>
</div>
<div class="governance-tree">
    <div class="tree-level">
        <div class="tree-node owner">
            <div class="node-icon"><i class="fas fa-crown"></i></div>
            <div class="node-title">المسؤول المركزي</div>
            <div class="node-desc">صاحب الصلاحية العليا</div>
        </div>
    </div>
    <div class="tree-level">
        <div class="tree-node admin">
            <div class="node-icon"><i class="fas fa-users-cog"></i></div>
            <div class="node-title">الفريق المعاون</div>
            <div class="node-desc">دعم المهام المركزية</div>
        </div>
        <div class="tree-node admin">
            <div class="node-icon"><i class="fas fa-cogs"></i></div>
            <div class="node-title">فريق العمليات</div>
            <div class="node-desc">تنفيذ الحاجات التقنية</div>
        </div>
    </div>
    <div class="tree-level">
        <div class="tree-node manager">
            <div class="node-icon"><i class="fas fa-map-marked-alt"></i></div>
            <div class="node-title">متابعو القطاعات</div>
            <div class="node-desc">إشراف على الجامعات</div>
        </div>
    </div>
    <div class="tree-level">
        <div class="tree-node editor">
            <div class="node-icon"><i class="fas fa-university"></i></div>
            <div class="node-title">فرق الجامعات</div>
            <div class="node-desc">مسؤولو IT بالجامعات</div>
        </div>
    </div>
</div>
<div class="articles-grid" style="margin-top: 32px;">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 9</span>
            <h3 class="article-title">التكوين الإداري</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>المسؤول المركزي للجنة</li>
                <li>الفريق المعاون</li>
                <li>متابعو القطاعات</li>
                <li>فريق العمليات</li>
                <li>فرق الجامعات</li>
            </ul>
        </div>
    </div>
</div>
`;

sectionsContent.door5 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-user-shield"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الخامس</div>
        <h2 class="section-title">المسؤوليات والصلاحيات</h2>
        <p class="section-desc">توزيع الصلاحيات والمهام داخل الهيكل التنظيمي</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 10</span>
            <h3 class="article-title">المسؤول المركزي</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>اعتماد الأنظمة والأدوات الرقمية</li>
                <li>إصدار القرارات التنظيمية النهائية</li>
                <li>منح وسحب الصلاحيات الرقمية</li>
                <li>تصنيف المخالفات وتحديد درجتها</li>
                <li>تمثيل اللجنة أمام الإدارة العليا</li>
                <li>اقتراح تعديل هذه اللائحة ورفعها للاعتماد</li>
            </ul>
            <div class="highlight-box success">
                <i class="fas fa-check-circle"></i>
                <div>تُعد قراراته ملزمة وواجبة التنفيذ</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 11</span>
            <h3 class="article-title">متابعو القطاعات</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>الإشراف على جامعات القطاع</li>
                <li>متابعة تسجيل البيانات وضمان دقتها وتحديثها</li>
                <li>ضمان استخدام الأدوات المركزية المعتمدة</li>
                <li>رفع التقارير الدورية للإدارة المركزية</li>
                <li>يحق لهم اعتماد أنظمة تشغيلية تفصيلية بشرطين مجتمعين:</li>
                <li style="padding-right:30px;">أ) ألا تتعارض مع نظام مركزي قائم</li>
                <li style="padding-right:30px;">ب) ألا تُنشئ قاعدة بيانات موازية خارج الهيكل المركزي</li>
            </ul>
            <div class="highlight-box warning">
                <i class="fas fa-exclamation-circle"></i>
                <div>في حال وجود شك في التعارض، يُرفع الأمر للمسؤول المركزي للفصل فيه قبل التنفيذ</div>
            </div>
            <div class="highlight-box danger">
                <i class="fas fa-ban"></i>
                <div>لا يجوز لهم إنشاء منصات استراتيجية أو أنظمة مركزية دون اعتماد مباشر مكتوب من المسؤول المركزي</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 12</span>
            <h3 class="article-title">فريق العمليات</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>تنفيذ الاحتياجات التقنية المعتمدة</li>
                <li>تشغيل وصيانة الأنظمة المركزية</li>
                <li>تنفيذ قرارات التجميد أو التفعيل</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 13</span>
            <h3 class="article-title">الفريق المعاون</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>دعم المهام المركزية والحملات الرقمية</li>
                <li>تنفيذ التحركات التقنية المعتمدة</li>
                <li>التعاون المؤسسي وفق موافقة المسؤول المركزي</li>
            </ul>
        </div>
    </div>
</div>
`;

sectionsContent.door6 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-server"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب السادس</div>
        <h2 class="section-title">مركزية الأنظمة ومنع التكرارية</h2>
        <p class="section-desc">ضمان التوحيد المركزي لجميع الأنظمة الرقمية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 14</span>
            <h3 class="article-title">المركزية الإلزامية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>تُنشأ وتُعتمد جميع الأنظمة والمنصات الرقمية مركزياً فقط</li>
                <li>يُحظر إنشاء أي نظام أو قاعدة بيانات أو أداة موازية بأي مسمى خارج الإطار المركزي المعتمد</li>
                <li>أي أداة غير معتمدة تُعد مخالفة تنظيمية</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-ban"></i>
                <div>يُحظر إنشاء أي نظام أو قاعدة بيانات أو أداة موازية بأي مسمى خارج الإطار المركزي المعتمد</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 15</span>
            <h3 class="article-title">حظر التنفيذ قبل الاعتماد</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>لا يجوز تنفيذ أو تشغيل أو اختبار أي نظام قبل صدور اعتماد مكتوب رسمي من المسؤول المركزي</li>
                <li>يُعد التنفيذ المسبق مخالفة جسيمة</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-exclamation-triangle"></i>
                <div>يُعد التنفيذ المسبق <strong>مخالفة جسيمة</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door7 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-lock"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب السابع</div>
        <h2 class="section-title">أمن البيانات والملكية</h2>
        <p class="section-desc">حماية البيانات وضوابط الملكية التنظيمية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 16</span>
            <h3 class="article-title">حماية البيانات والملكية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>جميع البيانات والحسابات الرقمية هي ملك تنظيمي للرابطة</li>
                <li>يُحظر نسخ أو مشاركة أو استخدام البيانات لأغراض شخصية دون إذن رسمي</li>
                <li>تحتفظ الإدارة المركزية (البريد الرسمي للجنة) بحق الوصول الكامل في أي وقت</li>
                <li>تُسلم كافة الصلاحيات والحسابات والبيانات فور انتهاء التكليف أو تغيير الدور</li>
                <li>الامتناع عن التسليم يُعد مخالفة جسيمة</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-exclamation-triangle"></i>
                <div>الامتناع عن تسليم الصلاحيات والحسابات يُعد <strong>مخالفة جسيمة</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door8 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-camera"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الثامن</div>
        <h2 class="section-title">العلاقة بلجنة الميديا المركزية</h2>
        <p class="section-desc">ضوابط التعاون والفصل بين اللجنتين</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 17</span>
            <h3 class="article-title">ضوابط التعاون</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>تحترم وتُقر لجنة إدارة تكنولوجيا المعلومات بلجنة الميديا المركزية كجهة تنظيمية مماثلة وموازية في اختصاصها الإعلامي</li>
                <li>تمتلك لجنة الميديا حصرياً الصفحات والحسابات الإعلامية بمختلف المنصات</li>
                <li>يُحظر التداخل بين اللجنتين في إدارة الحسابات</li>
                <li>تلتزم لجنة الميديا وسائر اللجان بالقواعد الرقمية المنظمة للأنظمة والبيانات وأمن المعلومات الصادرة عن لجنة IT</li>
            </ul>
            <div class="highlight-box info">
                <i class="fas fa-handshake"></i>
                <div>يُحظر التداخل بين اللجنتين في إدارة الحسابات - كل لجنة مختصة بمجالها</div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door9 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-key"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب التاسع</div>
        <h2 class="section-title">شجرة الوصول والصلاحيات الرقمية</h2>
        <p class="section-desc">Access Tree & Permission Governance</p>
    </div>
</div>
<div class="access-levels">
    <div class="access-card" style="--card-color: var(--accent-primary); --card-bg: var(--bg-accent);">
        <div class="access-icon"><i class="fas fa-pen"></i></div>
        <div class="access-title">محرر Editor</div>
        <div class="access-desc">يُمنح لمن له صلاحية التعديل المباشر، مثل الإضافة والتحديث والإدارة التشغيلية، وذلك في حدود نطاقه المعتمد فقط</div>
        <span class="access-badge">تعديل كامل</span>
    </div>
    <div class="access-card" style="--card-color: var(--text-muted); --card-bg: rgba(148,163,184,0.1);">
        <div class="access-icon"><i class="fas fa-eye"></i></div>
        <div class="access-title">مشاهد Viewer</div>
        <div class="access-desc">يُمنح لمن له صلاحية الاطلاع واستخراج التقارير والقراءة فقط، دون أي حق في التعديل</div>
        <span class="access-badge">قراءة فقط</span>
    </div>
    <div class="access-card" style="--card-color: var(--purple); --card-bg: rgba(139,92,246,0.1);">
        <div class="access-icon"><i class="fas fa-comment"></i></div>
        <div class="access-title">معلق Commenter</div>
        <div class="access-desc">يُمنح لمن له حق إبداء الملاحظات والاقتراحات دون المساس بالبيانات أو هيكل النظام</div>
        <span class="access-badge">تعليق فقط</span>
    </div>
</div>
<div class="articles-grid" style="margin-top: 32px;">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 18</span>
            <h3 class="article-title">مبدأ تنظيم الوصول</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يُنظم الوصول إلى الأنظمة والبيانات وفقاً لموضع مسؤولية الشخص وطبيعة دوره الفعلي داخل النظام، وليس بناءً على صفته الإدارية العامة</li>
                <li>يُحظر منح أي صلاحية تتجاوز حدود الاختصاص الوظيفي للشخص</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 19</span>
            <h3 class="article-title">مستويات الصلاحيات المعتمدة</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li><strong>أولاً: محرر (Editor)</strong> - يُمنح لمن له صلاحية التعديل المباشر في حدود نطاقه المعتمد فقط</li>
                <li><strong>ثانياً: مشاهد (Viewer)</strong> - يُمنح لمن له صلاحية الاطلاع والقراءة فقط</li>
                <li><strong>ثالثاً: معلق (Commenter)</strong> - يُمنح لمن له حق إبداء الملاحظات دون المساس بالبيانات</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 20</span>
            <h3 class="article-title">أولوية صلاحيات لجنة IT</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يُعد المسؤول المركزي للجنة صاحب أعلى مستوى وصول رقمي داخل نطاق الرابطة</li>
                <li>يتمتع فريق IT المركزي بأعلى صلاحيات تشغيلية داخل الأنظمة المعتمدة</li>
                <li>لا يجوز أن يمتلك مسؤول جامعة صلاحية رقمية أعلى من ممثل لجنة IT داخل نفس الجامعة</li>
                <li>لا يجوز أن يمتلك متابع قطاع صلاحية تنفيذية داخل نظام جامعة تتجاوز صلاحيات مسؤول IT المختص بها</li>
            </ul>
            <div class="highlight-box warning">
                <i class="fas fa-shield-alt"></i>
                <div>لا يجوز أن يمتلك مسؤول جامعة صلاحية رقمية أعلى من ممثل لجنة IT داخل نفس الجامعة</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 21</span>
            <h3 class="article-title">تمثيل اللجنة داخل الجامعات</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يُعد مسؤول IT بالجامعة ممثلاً رسمياً للجنة داخل جامعته، وله حق التمثيل الرقمي والتنفيذي وفق الإطار المركزي</li>
                <li>تخضع صلاحياته للرقابة المركزية، ولا تُعد مستقلة عن اللجنة</li>
            </ul>
        </div>
    </div>
</div>
`;

sectionsContent.door10 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-fingerprint"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب العاشر</div>
        <h2 class="section-title">إلزامية الملكية المركزية للحسابات الرقمية</h2>
        <p class="section-desc">ضوابط الملكية والاسترداد للحسابات الرقمية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 22</span>
            <h3 class="article-title">ملكية الحسابات الرقمية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>أي حساب رقمي يتم إنشاؤه لتمثيل الرابطة يجب أن يُنشأ بحيث يكون البريد المركزي <strong>Lifemakersclub.it@gmail.com</strong> هو المالك الأساسي (Primary Owner)</li>
                <li>يُسجل البريد المركزي كذلك كـ بريد استرداد (Recovery Email) لأي حساب أو منصة أو أداة رقمية</li>
                <li>لا يجوز إنشاء أي حساب رسمي باستخدام ملكية فردية مستقلة دون ربطه بالبريد المركزي</li>
                <li>في حال تعذر الإضافة الفورية، يجب استكمال نقل الملكية خلال مدة لا تتجاوز 48 ساعة من تاريخ الإنشاء</li>
                <li>الامتناع عن نقل الملكية أو التحايل على تسجيل البريد المركزي يُعد مخالفة جسيمة</li>
                <li>تحتفظ اللجنة بحق استرداد أي حساب يمثل الرابطة في حال ثبوت مخالفته</li>
            </ul>
            <div class="highlight-box info">
                <i class="fas fa-envelope"></i>
                <div><strong>البريد المركزي:</strong> Lifemakersclub.it@gmail.com - يجب أن يكون المالك الأساسي لجميع الحسابات</div>
            </div>
            <div class="highlight-box warning">
                <i class="fas fa-clock"></i>
                <div>مدة النقل: <strong>48 ساعة</strong> كحد أقصى من تاريخ الإنشاء</div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 23</span>
            <h3 class="article-title">سحب الصلاحيات</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يحق للجنة سحب أو تعديل أي صلاحية رقمية في أي وقت وفق مقتضيات المصلحة التنظيمية</li>
                <li>يتم سحب الصلاحيات فور انتهاء التكليف أو تغيير الدور، والاحتفاظ بها بعد انتهاء الدور يُعد مخالفة جسيمة</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-exclamation-triangle"></i>
                <div>الاحتفاظ بالصلاحيات بعد انتهاء الدور يُعد <strong>مخالفة جسيمة</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door11 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-chart-line"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الحادي عشر</div>
        <h2 class="section-title">نظام التقييم ومؤشرات الأداء KPIs</h2>
        <p class="section-desc">أدوات المتابعة والتقييم الدوري</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 24</span>
            <h3 class="article-title">أدوات المتابعة</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>قناة التواصل الرسمية المركزية</li>
                <li>استمارات تسجيل الأنشطة للمسؤولين</li>
                <li>لوحات متابعة رقمية مركزية</li>
                <li>تقارير شهرية تحليلية</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 25</span>
            <h3 class="article-title">مؤشرات الأداء الرئيسية KPIs</h3>
        </div>
        <div class="article-body">
            <div class="kpis-grid" style="margin-top: 16px;">
                <div class="kpi-card">
                    <div class="kpi-header">
                        <div class="kpi-title">نسبة التزام الجامعات بالأدوات المركزية</div>
                        <div class="kpi-value">85%</div>
                    </div>
                    <div class="kpi-bar-bg"><div class="kpi-bar-fill" style="width: 85%;"></div></div>
                    <div class="kpi-footer"><span>الهدف: 100%</span><span>الحالي: 85%</span></div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-header">
                        <div class="kpi-title">معدل تحديث البيانات</div>
                        <div class="kpi-value">78%</div>
                    </div>
                    <div class="kpi-bar-bg"><div class="kpi-bar-fill" style="width: 78%;"></div></div>
                    <div class="kpi-footer"><span>الهدف: 95%</span><span>الحالي: 78%</span></div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-header">
                        <div class="kpi-title">زمن الاستجابة للدعم الفني</div>
                        <div class="kpi-value">62%</div>
                    </div>
                    <div class="kpi-bar-bg"><div class="kpi-bar-fill" style="width: 62%;"></div></div>
                    <div class="kpi-footer"><span>الهدف: 90%</span><span>الحالي: 62%</span></div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-header">
                        <div class="kpi-title">معدل اكتمال التقارير في مواعيدها</div>
                        <div class="kpi-value">91%</div>
                    </div>
                    <div class="kpi-bar-bg"><div class="kpi-bar-fill" style="width: 91%;"></div></div>
                    <div class="kpi-footer"><span>الهدف: 100%</span><span>الحالي: 91%</span></div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-header">
                        <div class="kpi-title">نسبة دقة البيانات</div>
                        <div class="kpi-value">93%</div>
                    </div>
                    <div class="kpi-bar-bg"><div class="kpi-bar-fill" style="width: 93%;"></div></div>
                    <div class="kpi-footer"><span>الهدف: 98%</span><span>الحالي: 93%</span></div>
                </div>
                <div class="kpi-card">
                    <div class="kpi-header">
                        <div class="kpi-title">مستوى تفعيل مسؤولي الجامعات</div>
                        <div class="kpi-value">68%</div>
                    </div>
                    <div class="kpi-bar-bg"><div class="kpi-bar-fill" style="width: 68%;"></div></div>
                    <div class="kpi-footer"><span>الهدف: 85%</span><span>الحالي: 68%</span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 26</span>
            <h3 class="article-title">نظام التقييم</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>تقييم شهري لمسؤولي الجامعات</li>
                <li>تقييم فصلي لمتابعي القطاعات</li>
            </ul>
            <div class="highlight-box info">
                <i class="fas fa-clipboard-check"></i>
                <div>يعتمد التقييم على: <strong>الالتزام، جودة البيانات، سرعة التنفيذ، والتعاون الإداري</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door12 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-gavel"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الثاني عشر</div>
        <h2 class="section-title">المخالفات والجزاءات</h2>
        <p class="section-desc">تصنيف المخالفات وسلم الجزاءات التنظيمية</p>
    </div>
</div>
<div class="violations-grid">
    <div class="violation-card">
        <div class="violation-header normal">
            <div class="violation-icon"><i class="fas fa-exclamation-circle"></i></div>
            <div class="violation-title">المخالفات العادية</div>
        </div>
        <div class="violation-body">
            <ul class="violation-list">
                <li class="normal-item"><i class="fas fa-circle"></i> تأخير غير متعمد</li>
                <li class="normal-item"><i class="fas fa-circle"></i> أخطاء تشغيلية قابلة للتصحيح</li>
            </ul>
        </div>
    </div>
    <div class="violation-card">
        <div class="violation-header severe">
            <div class="violation-icon"><i class="fas fa-skull-crossbones"></i></div>
            <div class="violation-title">المخالفات الجسيمة</div>
        </div>
        <div class="violation-body">
            <ul class="violation-list">
                <li><i class="fas fa-circle"></i> إنشاء نظام موازٍ أو أداة رقمية دون اعتماد</li>
                <li><i class="fas fa-circle"></i> تنفيذ أي إجراء تقني قبل الحصول على موافقة كتابية رسمية</li>
                <li><i class="fas fa-circle"></i> تعطيل الأدوات أو الأنظمة المركزية عمداً</li>
                <li><i class="fas fa-circle"></i> الاحتفاظ بنسخ من بيانات الرابطة دون تصريح رسمي</li>
                <li><i class="fas fa-circle"></i> الامتناع عن تسليم الصلاحيات أو الحسابات عند انتهاء التكليف</li>
                <li><i class="fas fa-circle"></i> التحايل بأي صورة لتفادي الرقابة أو الإجراءات التنظيمية</li>
                <li><i class="fas fa-circle"></i> استغلال النفوذ الإداري لتحقيق مكاسب رقمية أو تجاوز الصلاحيات</li>
                <li><i class="fas fa-circle"></i> تجاوز إلزام الإبلاغ المنصوص عليه في المادة 29</li>
                <li><i class="fas fa-circle"></i> عدم نقل ملكية الحسابات إلى البريد المركزي خلال المدة المحددة</li>
            </ul>
        </div>
    </div>
</div>
<div class="articles-grid" style="margin-top: 32px;">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 29</span>
            <h3 class="article-title">الجزاءات</h3>
        </div>
        <div class="article-body">
            <div class="penalty-ladder">
                <div class="penalty-step">
                    <div class="penalty-step-number">1</div>
                    <div class="penalty-step-title">تنبيه رسمي</div>
                    <span class="penalty-step-badge">أولى</span>
                </div>
                <div class="penalty-arrow"><i class="fas fa-arrow-down"></i></div>
                <div class="penalty-step">
                    <div class="penalty-step-number">2</div>
                    <div class="penalty-step-title">إنذار موثق</div>
                    <span class="penalty-step-badge">ثانية</span>
                </div>
                <div class="penalty-arrow"><i class="fas fa-arrow-down"></i></div>
                <div class="penalty-step">
                    <div class="penalty-step-number">3</div>
                    <div class="penalty-step-title">تعليق الصلاحيات الرقمية</div>
                    <span class="penalty-step-badge">ثالثة</span>
                </div>
                <div class="penalty-arrow"><i class="fas fa-arrow-down"></i></div>
                <div class="penalty-step">
                    <div class="penalty-step-number">4</div>
                    <div class="penalty-step-title">إنهاء التكليف داخل اللجنة</div>
                    <span class="penalty-step-badge">رابعة</span>
                </div>
                <div class="penalty-arrow"><i class="fas fa-arrow-down"></i></div>
                <div class="penalty-step">
                    <div class="penalty-step-number">5</div>
                    <div class="penalty-step-title">التوصية بإنهاء العضوية في الرابطة للجهات المختصة</div>
                    <span class="penalty-step-badge">خامسة</span>
                </div>
            </div>
            <div class="highlight-box danger" style="margin-top: 24px;">
                <i class="fas fa-exclamation-triangle"></i>
                <div>يجوز تجاوز التدرج في توقيع الجزاءات والوصول مباشرة إلى الجزاءات الأشد في حالات المخالفات الجسيمة، ويصدر قرار الإنهاء من المسؤول المركزي</div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door13 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-shield-virus"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الثالث عشر</div>
        <h2 class="section-title">التحصين التنظيمي (سد الثغرات)</h2>
        <p class="section-desc">إجراءات سد الثغرات التنظيمية والقانونية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 30</span>
            <h3 class="article-title">الإلغاء الإجباري</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>أي إجراء أو ممارسة أو نظام غير منصوص عليه صراحة في هذه اللائحة يخضع للإلغاء الإجباري</li>
                <li>يتم الإلغاء وفق التدرج الإداري الخاص بالشخص</li>
                <li>لا يجوز التنفيذ قبل صدور موافقة مكتوبة من المسؤول المركزي</li>
                <li>تجاوز ذلك يُعد مخالفة جسيمة</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-ban"></i>
                <div>تجاوز الإلغاء الإجباري يُعد <strong>مخالفة جسيمة</strong></div>
            </div>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 31</span>
            <h3 class="article-title">وحدة المرجعية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>في حال عدم وجود نص صريح يغطي حالة معينة، يُرجع فيها إلى المسؤول المركزي للجنة، ويكون قراره ملزماً</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 32</span>
            <h3 class="article-title">السلطة التقديرية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يملك المسؤول المركزي سلطة تقدير درجة المخالفة وفق أثرها الفعلي ومدى الضرار بالمصلحة التنظيمية</li>
            </ul>
        </div>
    </div>
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 33</span>
            <h3 class="article-title">سوء النية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يُعد سوء نية كل تصرف يهدف إلى الالتفاف على الإجراءات أو إفراغ نصوص هذه اللائحة من مضمونها، ويستوجب المساءلة الفورية</li>
            </ul>
            <div class="highlight-box danger">
                <i class="fas fa-exclamation-triangle"></i>
                <div>سوء النية يستوجب <strong>المساءلة الفورية</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door14 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-door-open"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الرابع عشر</div>
        <h2 class="section-title">آلية الانسحاب أو إنهاء العضوية</h2>
        <p class="section-desc">إجراءات الانسحاب التطوعي وإنهاء العضوية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 34</span>
            <h3 class="article-title">الانسحاب وإنهاء العضوية</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li><strong>في حالة الانسحاب:</strong> يجب توضيح الأسباب كتابياً، مع فترة انتقالية تقل عن أسبوع لتسليم كامل للحسابات والبيانات والصلاحيات</li>
                <li><strong>في حالة الإنهاء:</strong> يتم التنفيذ فورياً بعد اعتماد القرار، مع استرداد جميع الصلاحيات الرقمية والحسابات</li>
            </ul>
            <div class="highlight-box warning">
                <i class="fas fa-clock"></i>
                <div>فترة التسليم الانتقالية: <strong>أسبوع كحد أقصى</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door15 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-graduation-cap"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب الخامس عشر</div>
        <h2 class="section-title">التطوير الداخلي والتقنيات</h2>
        <p class="section-desc">تأهيل الكوادر وتطوير المهارات الرقمية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 35</span>
            <h3 class="article-title">التطوير الداخلي</h3>
        </div>
        <div class="article-body">
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">تلتزم اللجنة بتأهيل أعضائها من خلال تدريبات داخلية في مجالات تحليل البيانات وإدارة النظم:</p>
            <div class="tech-grid">
                <div class="tech-item"><i class="fab fa-google"></i><span>Google Sheets</span></div>
                <div class="tech-item"><i class="fab fa-wpforms"></i><span>Google Forms</span></div>
                <div class="tech-item"><i class="fas fa-database"></i><span>KoboToolbox</span></div>
                <div class="tech-item"><i class="fas fa-chart-pie"></i><span>Looker Studio</span></div>
                <div class="tech-item"><i class="fas fa-file-excel"></i><span>Excel</span></div>
                <div class="tech-item"><i class="fas fa-chart-bar"></i><span>Power BI</span></div>
                <div class="tech-item"><i class="fas fa-database"></i><span>SQL</span></div>
                <div class="tech-item"><i class="fab fa-python"></i><span>Python</span></div>
                <div class="tech-item"><i class="fas fa-chart-area"></i><span>Tableau</span></div>
            </div>
            <div class="highlight-box success" style="margin-top: 16px;">
                <i class="fas fa-bullseye"></i>
                <div>بهدف إعداد <strong>كوادر مؤهلة لسوق العمل</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.door16 = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-edit"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">الباب السادس عشر</div>
        <h2 class="section-title">حق التعديل</h2>
        <p class="section-desc">إجراءات تعديل اللائحة التنظيمية</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">مادة 36</span>
            <h3 class="article-title">حق التعديل</h3>
        </div>
        <div class="article-body">
            <ul class="article-list">
                <li>يحق للمسؤول المركزي اقتراح تعديل هذه اللائحة</li>
                <li>لا يُعمل بالتعديل إلا بعد اعتماده من الجهة المختصة داخل صناع الحياة مصر (مجلس إدارة متطوعي صناع الحياة مصر)</li>
                <li>يُعلن التعديل رسمياً لجميع الجهات الخاضعة</li>
            </ul>
            <div class="highlight-box info">
                <i class="fas fa-info-circle"></i>
                <div>الجهة المختصة بالاعتماد: <strong>مجلس إدارة متطوعي صناع الحياة مصر</strong></div>
            </div>
        </div>
    </div>
</div>
`;

sectionsContent.closing = `
<div class="section-header">
    <div class="section-icon"><i class="fas fa-stamp"></i></div>
    <div class="section-title-wrapper">
        <div class="section-number">CLOSING</div>
        <h2 class="section-title">المادة الختامية</h2>
        <p class="section-desc">المرجع التنظيمي الحاكم للشأن الرقمي</p>
    </div>
</div>
<div class="articles-grid">
    <div class="article-card">
        <div class="article-header">
            <span class="article-number">ختامية</span>
            <h3 class="article-title">النص الختامي</h3>
        </div>
        <div class="article-body">
            <div class="highlight-box info">
                <i class="fas fa-gavel"></i>
                <div>تُعد هذه اللائحة <strong>المرجع التنظيمي الحاكم</strong> للشأن الرقمي داخل رابطة أسر صناع الحياة بالجامعات المصرية. ويُعمل بها من تاريخ اعتمادها، وتلتزم بها جميع الكيانات الخاضعة <strong>دون استثناء</strong>.</div>
            </div>
            <div class="highlight-box success" style="margin-top: 16px;">
                <i class="fas fa-user-shield"></i>
                <div><strong>المسؤول المركزي للجنة IT المركزية</strong><br>برابطة أسر صناع الحياة بالجامعات المصرية</div>
            </div>
        </div>
    </div>
</div>
`;
