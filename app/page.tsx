import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { projects } from "@/lib/projects";

const heroStats = [
  ["24小时", "全年开放，夜间同样可预约到店"],
  ["3层空间", "沐浴、汤池、汗蒸、餐饮、休憩分区"],
  ["18项服务", "从泡汤到SPA的完整休闲项目"],
  ["明码标价", "项目公开透明，先确认后消费"],
];

const services = [
  ["泉", "温泉泡汤", "恒温热泉、草本汤池、冷暖交替池，适合舒缓肩颈与放松疲惫。", "预约泡汤"],
  ["蒸", "汗蒸理疗", "盐砖房、玉石房、低温休养房，分区温度清晰标识。", "了解汗蒸"],
  ["足", "足道养护", "足浴、肩颈放松、腿部舒缓，正规技师服务，按时计费。", "预约足道"],
  ["香", "芳香SPA", "香薰精油、热石舒缓、草本热敷，适合深度放松与护理体验。", "咨询SPA"],
  ["背", "肩颈背部舒缓", "针对久坐紧绷、肩背酸胀，提供分时段护理方案。", "查看时段"],
  ["耳", "采耳助眠", "安静房间、柔和灯光、专业工具，适合作为夜间放松项目。", "预约采耳"],
  ["茶", "餐饮茶歇", "热粥、简餐、茶饮与水果供应，休闲区可与朋友轻松小聚。", "咨询餐饮"],
  ["房", "客房休憩", "钟点休息与过夜休憩均可预约，前台统一办理。", "预留客房"],
];

const menuGroups = [
  {
    title: "泡汤与汗蒸",
    items: [
      ["基础沐浴入场", "¥68"],
      ["草本温泉汤池", "¥98"],
      ["盐砖汗蒸体验", "¥88"],
      ["玉石低温理疗", "¥108"],
      ["冷暖交替池", "含入场"],
    ],
  },
  {
    title: "养护与SPA",
    items: [
      ["足道养护 45分钟", "¥128"],
      ["肩颈背部舒缓", "¥168"],
      ["芳香精油SPA", "¥298"],
      ["热石草本护理", "¥268"],
      ["采耳助眠护理", "¥98"],
    ],
  },
  {
    title: "休闲与配套",
    items: [
      ["茶饮水果套餐", "¥38"],
      ["养生简餐套餐", "¥58"],
      ["休闲大厅过夜", "¥88"],
      ["独立客房 3小时", "¥168"],
      ["团体包间预留", "咨询"],
    ],
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="天上人间洗浴中心首页">
            <span className="brand-mark">泉</span>
            <span className="brand-text">
              <strong>天上人间洗浴中心</strong>
              <span>城市温泉 · 康养休闲 · 官方网站</span>
            </span>
          </a>
          <div className="header-info" aria-label="门店摘要">
            <div className="info-item">
              <span className="info-label">今日营业</span>
              <span className="info-value">24小时开放</span>
            </div>
            <div className="info-item">
              <span className="info-label">预约热线</span>
              <span className="info-value">400-888-0520</span>
            </div>
            <div className="info-item">
              <span className="info-label">门店位置</span>
              <span className="info-value">云泉路 88 号</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#about">会所介绍</a>
            <a href="#gallery">现场环境</a>
            <a href="#glam">魅力项目</a>
            <a href="#services">服务项目</a>
            <a href="#packages">门票套餐</a>
            <a href="#contact">预约到店</a>
            <a className="btn btn-primary" href="tel:400-888-0520">
              电话预约
            </a>
          </div>
        </nav>
      </header>

      <section className="hero home-hero" id="top">
        <div className="hero-inner">
          <div className="eyebrow">SINCE 2012 · OFFICIAL SITE</div>
          <h1>天上人间洗浴中心</h1>
          <p className="hero-copy">
            在城市里留一处灯光暧昧、热汽缭绕的放松空间。温泉泡汤、汗蒸理疗、足道养护、芳香SPA、茶歇餐饮与客房休憩，一次到店即可把身心从紧绷里慢慢松开。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              立即预约
            </a>
            <a className="btn btn-secondary" href="#services">
              查看项目
            </a>
          </div>
        </div>
        <div className="hero-strip" aria-label="门店亮点">
          {heroStats.map(([title, text]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="section" id="about">
          <div className="section-head">
            <div>
              <div className="section-kicker">关于我们</div>
              <h2>正规、舒适、适合商务休闲与朋友小聚的城市洗浴空间</h2>
            </div>
            <p>
              我们以干净水质、稳定温控、专业服务和沉浸式环境为核心，让洗浴不只是一场清洁，更是一段有仪式感的放松体验。
            </p>
          </div>
          <div className="about-grid">
            <div className="panel">
              <p>
                门店采用清晰分区动线：入店换鞋、沐浴净身、汤池泡浴、汗蒸排湿、足道护理、餐饮茶歇、客房休憩。服务人员经过统一培训，所有项目均在前台与房间价目表公开展示。
              </p>
              <ul className="checks">
                <li>每日水质巡检</li>
                <li>一次性客用品</li>
                <li>男女宾独立浴区</li>
                <li>独立护理房间</li>
              </ul>
            </div>
            <div className="panel hours" aria-label="营业信息">
              <div className="hours-row">
                <span>营业时间</span>
                <strong>全天 24 小时</strong>
              </div>
              <div className="hours-row">
                <span>预约电话</span>
                <strong>400-888-0520</strong>
              </div>
              <div className="hours-row">
                <span>门店地址</span>
                <strong>城市中心区云泉路 88 号</strong>
              </div>
              <div className="hours-row">
                <span>停车服务</span>
                <strong>到店消费可享 3 小时免费停车</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="section-head">
            <div>
              <div className="section-kicker">现场环境</div>
              <h2>真实感图片展示汤池、房间与服务团队</h2>
            </div>
            <p>
              水汽、灯光、香氛、制服服务与护理陈列同时出现，让页面从单一介绍变成可感知的到店体验。
            </p>
          </div>
          <div className="gallery">
            <article className="photo-card tall">
              <img src="/assets/spa-bath-hall.png" alt="天上人间洗浴中心温泉汤池大厅" />
              <div className="photo-caption">
                <strong>多区温泉汤池</strong>
                <span>恒温热泉、冷暖交替池、蒸汽房与休闲动线一体呈现。</span>
              </div>
            </article>
            <div className="gallery-stack">
              <article className="photo-card">
                <img src="/assets/spa-staff.png" alt="天上人间洗浴中心前厅服务团队" />
                <div className="photo-caption">
                  <strong>精致服务团队</strong>
                  <span>统一制服、微笑迎宾，营造高端、亲切、有吸引力的第一印象。</span>
                </div>
              </article>
              <article className="photo-card">
                <img src="/assets/spa-treatment-room.png" alt="天上人间洗浴中心芳香SPA护理房" />
                <div className="photo-caption">
                  <strong>私享护理房</strong>
                  <span>足浴、芳香精油、热石、草本热敷等项目用品整齐陈列。</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="glam">
          <div className="section-head">
            <div>
              <div className="section-kicker">魅力项目</div>
              <h2>更有吸引力的夜间会所氛围，点开查看项目详情</h2>
            </div>
            <p>
              制服迎宾、香薰护理、VIP茶歇、玫瑰足浴，以灯光、姿态、香气和私享空间营造暧昧但正规的体验感。
            </p>
          </div>
          <div className="glam-grid">
            {projects.map((project) => (
              <article className="glam-card" key={project.slug}>
                <img src={project.image} alt={project.alt} />
                <div className="glam-copy">
                  <small>{project.eyebrow}</small>
                  <h3>{project.title}</h3>
                  <p>{project.intro}</p>
                  <Link href={`/projects/${project.slug}`}>查看详情</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="project-cloud" aria-label="更多项目">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                {project.title}
              </Link>
            ))}
            <a href="#menu">热石草本护理</a>
            <a href="#menu">采耳助眠</a>
            <a href="#menu">香氛汗蒸</a>
            <a href="#menu">私享客房</a>
            <a href="#menu">夜间舒缓套餐</a>
            <a href="#menu">团体包间预留</a>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <div>
              <div className="section-kicker">服务项目</div>
              <h2>项目更多，从热汤到养护，一站式舒缓身心</h2>
            </div>
            <p>
              覆盖泡汤、汗蒸、足道、SPA、采耳、茶歇、客房与团体接待，到店可按需选择单项或套餐。
            </p>
          </div>
          <div className="service-grid">
            {services.map(([icon, title, text, action]) => (
              <article className="service-card" key={title}>
                <div>
                  <div className="service-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <a href="#contact">{action}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band" aria-label="环境特色">
          <div className="feature-inner">
            <div>
              <div className="section-kicker">环境特色</div>
              <h2>灯光、水汽、香气与制服服务，构成更有记忆点的会所氛围</h2>
              <p>
                访客能看到宽敞汤池、护理房细节与服务人员形象，整体从“文字介绍”升级为“可想象的到店体验”。
              </p>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <strong>分区控温</strong>
                <span>汤池、汗蒸、休息区分别管理温度，舒适度更稳定。</span>
              </div>
              <div className="feature-item">
                <strong>定时清洁</strong>
                <span>公共区域高频巡检，拖鞋、毛巾、浴服分类消毒。</span>
              </div>
              <div className="feature-item">
                <strong>专业迎宾</strong>
                <span>服务团队统一制服，负责引导、介绍项目与预约安排。</span>
              </div>
              <div className="feature-item">
                <strong>团体接待</strong>
                <span>支持家庭、朋友局与商务小型聚会提前预留位置。</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="menu">
          <div className="section-head">
            <div>
              <div className="section-kicker">项目菜单</div>
              <h2>洗浴项目更丰富，清晰展示可消费内容</h2>
            </div>
            <p>
              将项目按泡汤、理疗、休闲三类展示，访客一眼就能知道“这里能做什么”。价格为页面展示用参考价。
            </p>
          </div>
          <div className="menu-grid">
            {menuGroups.map((group) => (
              <article className="menu-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([name, price]) => (
                    <li key={name}>
                      {name}
                      <span>{price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="packages">
          <div className="section-head">
            <div>
              <div className="section-kicker">门票套餐</div>
              <h2>公开价格，到店可核验</h2>
            </div>
            <p>
              以下为参考价，节假日与门店活动以现场公示为准。所有消费均可先确认后下单。
            </p>
          </div>
          <div className="packages">
            <article className="package">
              <small>基础入浴</small>
              <h3>净享门票</h3>
              <div className="price">
                ¥68 <span>/ 位</span>
              </div>
              <ul>
                <li>沐浴及公共汤池</li>
                <li>基础汗蒸区体验</li>
                <li>浴服、毛巾、拖鞋</li>
              </ul>
            </article>
            <article className="package featured">
              <small>人气推荐</small>
              <h3>半日舒缓套餐</h3>
              <div className="price">
                ¥168 <span>/ 位</span>
              </div>
              <ul>
                <li>净享门票全部内容</li>
                <li>足浴养护 45 分钟</li>
                <li>茶饮与水果一份</li>
              </ul>
            </article>
            <article className="package">
              <small>深度体验</small>
              <h3>芳香SPA套餐</h3>
              <div className="price">
                ¥398 <span>/ 位</span>
              </div>
              <ul>
                <li>入浴、汗蒸与汤池</li>
                <li>芳香精油SPA 60 分钟</li>
                <li>独立休憩房 2 小时</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="section">
            <div className="section-head">
              <div>
                <div className="section-kicker">预约到店</div>
                <h2>提前预约，减少等候</h2>
              </div>
              <p>
                提交意向后，前台会根据时段与项目安排回电确认。紧急到店请直接拨打电话。
              </p>
            </div>
            <div className="contact-grid">
              <aside className="contact-card">
                <h3>门店信息</h3>
                <dl>
                  <div>
                    <dt>服务热线</dt>
                    <dd>400-888-0520</dd>
                  </div>
                  <div>
                    <dt>营业地址</dt>
                    <dd>城市中心区云泉路 88 号</dd>
                  </div>
                  <div>
                    <dt>交通提示</dt>
                    <dd>地铁 2 号线云泉站 B 口步行 6 分钟</dd>
                  </div>
                  <div>
                    <dt>官方声明</dt>
                    <dd>本店为正规洗浴休闲场所，谢绝任何违规服务咨询。</dd>
                  </div>
                </dl>
              </aside>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 天上人间洗浴中心 版权所有</span>
          <span>健康休闲 · 明码标价 · 正规经营</span>
        </div>
      </footer>
    </>
  );
}
