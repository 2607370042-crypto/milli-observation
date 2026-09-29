import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  complaintFlow,
  creatorTopics,
  photos,
  statusNotes,
  timeline,
  type PhotoSample,
} from './data'

const navItems = [
  { id: '00', target: 'top', label: '封面' },
  { id: '01', target: 'profile', label: '关于我' },
  { id: '02', target: 'timeline', label: '经历' },
  { id: '03', target: 'photography', label: '照片集' },
  { id: '04', target: 'work', label: '工作现场' },
  { id: '05', target: 'research', label: '当前研究' },
  { id: '06', target: 'memes', label: '表情包' },
  { id: '07', target: 'contact', label: '联系' },
]

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <header className="section-heading">
      <div className="section-index">
        <span>§ {number}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
    </header>
  )
}

function PhotoDialog({
  photo,
  onClose,
}: {
  photo: PhotoSample
  onClose: () => void
}) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="photo-dialog" role="dialog" aria-modal="true" aria-labelledby="photo-dialog-title">
      <button
        className="dialog-backdrop"
        type="button"
        aria-label="关闭图片"
        onClick={onClose}
      />
      <figure className="dialog-content">
        <button ref={closeButton} className="dialog-close" type="button" onClick={onClose}>
          关闭
        </button>
        <img src={photo.image} alt={photo.alt} />
        <figcaption>
          <span>{photo.id} / {photo.label}</span>
          <p id="photo-dialog-title">{photo.note}</p>
        </figcaption>
      </figure>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return navItems.find((item) => item.target === hash)?.id ?? '00'
  })
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoSample | null>(null)

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const nextPage = navItems.find((item) => item.target === hash)?.id
      if (nextPage) setActivePage(nextPage)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const goToPage = (id: string, target: string) => {
    setActivePage(id)
    setMenuOpen(false)
    window.history.replaceState(null, '', `#${target}`)
  }

  return (
    <>
      <a className="skip-link" href="#main">跳至正文</a>

      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="母芸菲个人网站，返回封面"
          onClick={(event) => {
            event.preventDefault()
            goToPage('00', 'top')
          }}
        >
          <span>母芸菲</span>
          <small>MILLI / 米粒</small>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? '关闭' : '目录'}
        </button>
      </header>

      <nav id="site-nav" className={`section-nav ${menuOpen ? 'is-open' : ''}`} aria-label="章节导览">
        <p className="nav-title">INDEX / 导览</p>
        <ol>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.target}`}
                aria-current={activePage === item.id ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  goToPage(item.id, item.target)
                }}
              >
                <span>{item.id}</span>
                <strong>{item.label}</strong>
              </a>
            </li>
          ))}
        </ol>
        <p className="nav-foot">MILLI&apos;S<br />OBSERVATION FILE</p>
      </nav>

      <main id="main" className="site-pages">
        <section
          className="hero page-view"
          id="top"
          data-section="00"
          aria-labelledby="hero-title"
          hidden={activePage !== '00'}
        >
          <div className="hero-copy">
            <p className="publication-line">
              <span>MILLI&apos;S OBSERVATION FILE</span>
              <span>ISSUE 2026 / 09</span>
            </p>
            <h1 id="hero-title" aria-label="母芸菲">
              <span className="word word-one">母芸菲</span>
              <span className="latin-name">MILLI / 米粒</span>
            </h1>
            <div className="hero-abstract" aria-label="米粒的抽象个人介绍">
              <p>✈️已飞0国｜男女混血｜</p>
              <p>Wild Chicken University｜中国留宿生｜华籍美人｜</p>
              <p>📱OPPOA5（无SIM）｜🛍️PDD资深买手🏅｜</p>
              <p>蜜雪冰城品鉴师☕｜🆔国家级身份证持有者｜</p>
              <p>英语四六级没考｜雅思托福没考｜</p>
              <p>恩格尔系数1.00｜诺贝尔奖觊觎者｜</p>
              <p>🏄Internet冲浪达人｜熟练掌握🇨🇳语言｜个人存款💰0.0001</p>
            </div>
            <a
              className="continue-link"
              href="#profile"
              onClick={(event) => {
                event.preventDefault()
                goToPage('01', 'profile')
              }}
            >
              翻开样本 01 <span aria-hidden="true">↓</span>
            </a>
          </div>
          <figure className="hero-photo">
            <img
              src="./assets/hero-cat.jpg"
              alt="一只戴眼镜、穿波点衣服的小猫坐在电脑前，旁边放着咖啡"
              width="1024"
              height="1024"
              fetchPriority="high"
            />
            <figcaption>
              <span>OFFICE CAT 01</span>
              <span>WORKING VERY HARD</span>
            </figcaption>
          </figure>
        </section>

        <section
          className="profile page-section page-view"
          id="profile"
          data-section="01"
          aria-labelledby="profile-title"
          hidden={activePage !== '01'}
        >
          <SectionHeading number="01" label="人物侧写" title="先认识一下米粒" />
          <div className="profile-grid">
            <article className="profile-copy">
              <p className="lead">
                hihi，我是母芸菲，四川人，大家也可以call我米粒。
              </p>
              <p>
                现在 base 深圳景湖大厦，截至 2026 年 9 月，在深圳练习时长九个月—— 这个时长足以让我从 "附近有啥吃的" 进化成 "附近吃啥，别问别人，问我"。
              </p>
              <p>
                我的几段实习都围绕 To B 展开。第一次使用飞书时，我被这种协同方式震撼到，后来投实习甚至会特别留意一家公司是否使用飞书。现在我又回到飞书，在 FDE 团队学习如何真正用 AI 解决问题。
              </p>
              <p>
                工作之外，我会逛街、探店、旅行、摄影、唱歌，最近重新开始健身。想约饭、出去玩、找健身搭子，或者只是缺点表情包，都可以来找我。
              </p>
            </article>
            <figure className="profile-photo">
              <img
                src="./assets/snow-mountain.jpg"
                alt="母芸菲站在雪山前的旅行照片"
                width="768"
                height="1024"
                loading="eager"
              />
              <figcaption>FIELD NOTE / 旅行也是观察的一部分</figcaption>
            </figure>
            <dl className="profile-index">
              <div><dt>01</dt><dd>四川人</dd></div>
              <div><dt>02</dt><dd>深圳实习九个月</dd></div>
              <div><dt>03</dt><dd>热情 / 抽象 / ISFJ</dd></div>
            </dl>
          </div>
        </section>

        <section
          className="timeline page-section page-view"
          id="timeline"
          data-section="02"
          aria-labelledby="timeline-title"
          hidden={activePage !== '02'}
        >
          <SectionHeading number="02" label="样本档案" title="几次改变方向的现场" />
          <ol className="timeline-list">
            {timeline.map((item) => (
              <li key={item.id}>
                <div className="timeline-meta">
                  <span>{item.id}</span>
                  <time>{item.date}</time>
                </div>
                <div className="timeline-story">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <p className="impact">{item.impact}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="photography page-section page-view"
          id="photography"
          data-section="03"
          aria-labelledby="photography-title"
          hidden={activePage !== '03'}
        >
          <SectionHeading number="03" label="一人摄影组" title="从按下快门到完成交付" />
          <div className="photography-intro">
            <p>
              2023 年，我开始在小红书做摄影账号。从拍摄、后期修图，到账号运营和商务接单，全部由我一个人完成。
            </p>
            <p>
              我曾与多位博主合作，合作对象粉丝合计超过 100 万，也在青岛的摄影赛道里找到了一条属于自己的小路。这段经历让我第一次完整地对一项工作负责，也赚到了人生的第一桶金。（个人账号即作品在这里不公开，有好奇的小伙伴可以私聊我）
            </p>
          </div>
          <ol className="photo-grid">
            {photos.map((photo, index) => (
              <li className={`photo-sample photo-sample-${index + 1}`} key={photo.id}>
                <button
                  type="button"
                  className="photo-trigger"
                  aria-label={`展开${photo.label}照片`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    loading="lazy"
                    width={index === 4 ? '1024' : '768'}
                    height={index === 4 ? '768' : '1024'}
                  />
                </button>
                <div className="photo-caption">
                  <span>{photo.id} / {photo.label}</span>
                  <span>{photo.meta}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="work page-section page-view"
          id="work"
          data-section="04"
          aria-labelledby="work-title"
          hidden={activePage !== '04'}
        >
          <SectionHeading number="04" label="工作现场" title="从活动落地到客诉闭环" />
          <div className="work-content">
            <article className="event-story">
              <div className="event-gallery" aria-label="飞书 AI 先锋大赛活动照片">
                <figure className="event-photo-main">
                  <img
                    src="./assets/ai-competition.jpg"
                    alt="2026 飞书 AI 先锋大赛先进制造专场华南赛区半决赛现场合影"
                    width="1800"
                    height="1200"
                    loading="eager"
                  />
                  <figcaption>2026.03.29 / 华南赛区半决赛</figcaption>
                </figure>
                <figure>
                  <img
                    src="./assets/ai-booth.jpg"
                    alt="2026 飞书 AI 先锋大赛先进制造专场活动展台"
                    width="768"
                    height="1024"
                    loading="eager"
                  />
                  <figcaption>EVENT NOTE / 活动展台</figcaption>
                </figure>
                <figure>
                  <img
                    src="./assets/ai-stage.jpg"
                    alt="飞书活动现场讲解画面"
                    width="768"
                    height="1024"
                    loading="eager"
                  />
                  <figcaption>EVENT NOTE / 现场讲解</figcaption>
                </figure>
              </div>
              <p className="event-background">
                这是一场飞书面向先进制造行业举办的 AI 落地案例赛事，2026 年从 3 月分区半决赛走到 4 月 21 日北京全国十强赛，聚焦智能制造核心场景，覆盖研发设计、生产制造、供应链协同、销售服务全产业链，推动 AI 在先进制造领域规模化落地。
              </p>
              <div className="event-copy">
                <p className="sample-label">WORK SAMPLE 01</p>
                <h3>2026 飞书 AI 先锋大赛<br />先进制造专场</h3>
                <p>
                  我与 mentor 一起参与落地了三大赛区半决赛及全国十强赛，在现场见到了许多真实使用 AI 解决问题的人。
                </p>
              </div>
            </article>

            <article className="flow-story">
              <div className="flow-intro">
                <p className="sample-label">WORK SAMPLE 02</p>
                <h3>客诉闭环 Demo</h3>
                <p>
                  智能体接收妙记或指令，通过受控工具写入客诉收集表，再由 Base 工作流完成校验、信息提取和派单；智能体也可以读取案例库，回答相关客诉咨询。
                </p>
              </div>
              <ol className="flow-list">
                {complaintFlow.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
              <p className="flow-note">为保护业务信息，此处使用脱敏后的结构示意，不展示原始案例与界面数据。</p>
            </article>
          </div>
        </section>

        <section
          className="research page-section page-view"
          id="research"
          data-section="05"
          aria-labelledby="research-title"
          hidden={activePage !== '05'}
        >
          <SectionHeading number="05" label="当前研究" title="还没有标准答案的问题" />
          <div className="research-grid">
            <p className="research-question">
              如何把过去接触达人的经验，转化成一套真正能帮助客户做判断的方案？
            </p>
            <div>
              <ol className="topic-list">
                {creatorTopics.map((topic, index) => (
                  <li key={topic}><span>0{index + 1}</span>{topic}</li>
                ))}
              </ol>
              <p className="research-note">
                这个方向还在探索中。欢迎有想法或达人经验的同学来找我交流。
              </p>
            </div>
          </div>
        </section>

        <section
          className="meme-wall page-view"
          id="memes"
          data-section="06"
          aria-labelledby="meme-title"
          hidden={activePage !== '06'}
        >
          <div className="meme-heading">
            <p>MEME SUPPLY / 米粒的表情包补给站</p>
            <h2 id="meme-title">缺点表情包？<i>自取。</i></h2>
          </div>
          <div className="meme-grid">
            <img src="./assets/meme-youdian.jpg" alt="写着“有点”的人物表情包" loading="lazy" />
            <img src="./assets/meme-dont-hit.jpg" alt="写着“我虽然打不倒你也不能一直打我吧”的小狗表情包" loading="lazy" />
            <img src="./assets/meme-leader.jpg" alt="写着“好耀眼，这就是领导的威力吗”的表情包" loading="lazy" />
            <img src="./assets/meme-cow.jpg" alt="写着“牛不来”的表情包" loading="lazy" />
            <img src="./assets/meme-horse.jpg" alt="写着“考资历我敬你”的马表情包" loading="lazy" />
          </div>
          <aside className="status-strip" aria-label="米粒的个签摘录">
            <p>STATUS ARCHIVE</p>
            <ul>
              {statusNotes.map((note, index) => (
                <li key={note}><span>0{index + 1}</span>{note}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          className="contact page-view"
          id="contact"
          data-section="07"
          aria-labelledby="contact-title"
          hidden={activePage !== '07'}
        >
          <p className="contact-index">§ 07 / CONTACT</p>
          <h2 id="contact-title">
            想聊达人方案、约饭、简单的 <i>coffee chat</i>，或者找我要表情包，都可以来找我。
          </h2>
          <div className="contact-links">
            <div className="contact-methods">
              <a href="mailto:2607370042@qq.com">2607370042@qq.com</a>
              <p>
                或直接在飞书搜索{' '}
                <a
                  href="https://www.larkoffice.com/invitation/page/add_contact/?token=e8cjb7d9-19b7-4bc7-b406-c9fc415766e6"
                  target="_blank"
                  rel="noreferrer"
                >
                  母芸菲
                </a>
              </p>
            </div>
            <figure className="contact-qr">
              <img
                src="./assets/lark-qr.png"
                alt="母芸菲的飞书联系人二维码"
                width="686"
                height="840"
                loading="lazy"
              />
              <figcaption>扫描二维码，添加我为联系人</figcaption>
            </figure>
          </div>
          <footer>
            <p>母芸菲 / MILLI / 米粒</p>
            <a href="#top">返回封面 ↑</a>
          </footer>
        </section>
      </main>

      {selectedPhoto ? (
        <PhotoDialog photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      ) : null}
    </>
  )
}

export default App
