import { useEffect, useRef, useState } from 'react'

const contacts = [
  {
    label: 'Почта',
    value: 'ValeryPlakhov@gmail.com',
    href: 'mailto:ValeryPlakhov@gmail.com',
    icon: 'envelope',
    external: false,
  },
  {
    label: 'Телефон',
    value: '+7 (999) 630-49-30',
    href: 'tel:+79996304930',
    icon: 'telephone',
    external: false,
  },
  {
    label: 'Telegram',
    value: '@ValeryPlakhov',
    href: 'https://t.me/ValeryPlakhov',
    icon: 'send',
    external: true,
  },
]

const profilePhoto = '/profile-photo-square.png'
const themeStorageKey = 'resume-theme'

const navigation = [
  { id: 'profile', label: 'Обо мне', icon: 'person-badge' },
  { id: 'skills', label: 'Стек', icon: 'code-slash' },
  { id: 'experience', label: 'Кейсы', icon: 'briefcase' },
  { id: 'certificates', label: 'Сертификаты', icon: 'patch-check' },
  { id: 'contact', label: 'Контакты', icon: 'person-lines-fill' },
]

const defaultSectionId = navigation[0].id

const profileFacts = [
  { label: 'Направление', value: '15.03.06 Мехатроника и робототехника' },
  { label: 'Обучение', value: 'ДГТУ, 3 курс' },
  { label: 'Формат', value: 'Junior / проектная работа' },
]

const aboutParagraphs = [
  'Студент 3 курса ДГТУ. Работаю на стыке fullstack, CV/ML, embedded и робототехники.',
  'Собираю решения целиком: интерфейс, API, модель, окружение и интеграция с оборудованием.',
]

const summaryCards = [
  {
    title: 'Сильная связка',
    text: 'Интерфейс, API, модель и оборудование в одной системе.',
  },
  {
    title: '3 проекта в CV/ML',
    text: 'U-Net, YOLO/OpenCV и семантический анализ текста.',
  },
  {
    title: 'Серверная практика',
    text: 'Ubuntu Server, VPN, Docker и деплой прототипов.',
  },
]

const skillGroups = [
  {
    id: 'fullstack',
    title: 'Fullstack и backend-разработка',
    icon: 'code-slash',
    description: 'Разработка веб-интерфейсов и API для инженерных задач.',
    items: ['Python', 'JavaScript', 'C', 'FastAPI', 'React', 'Vite', 'CSS'],
  },
  {
    id: 'cv-ml',
    title: 'CV и ML',
    icon: 'cpu',
    description: 'Детекция, сегментация и прикладные CV-пайплайны.',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'Pillow', 'YOLO', 'U-Net'],
  },
  {
    id: 'robotics',
    title: 'Embedded и робототехника',
    icon: 'motherboard',
    description: 'Работа с платами, C для embedded и интеграция с оборудованием.',
    items: ['Arduino', 'Raspberry Pi', 'Jetson', 'STM32', 'CMSIS', 'HAL', 'ROS2 Jazzy', 'Nav2', 'SLAM'],
  },
  {
    id: 'infra',
    title: 'Инфраструктура и серверы',
    icon: 'server',
    description: 'Linux, сервисы, контейнеры и развёртывание.',
    items: ['Docker', 'Ubuntu Server', 'VPN', 'Деплой', 'Git', 'Linux'],
  },
]

const caseStudies = [
  {
    title: 'Сегментация печатей на документах',
    meta: 'CV / PyTorch / U-Net',
    text: 'Кейс по компьютерному зрению: подготовка данных, обучение модели и сегментация печатей на документах.',
    stack: ['Python', 'PyTorch', 'U-Net', 'OpenCV'],
  },
  {
    title: 'CV-анализ сцены в Counter-Strike',
    meta: 'Личный кейс / OpenCV / YOLO',
    text: 'Прототип, который анализирует игровую сцену по изображению и определяет события в кадре.',
    stack: ['Python', 'OpenCV', 'YOLO', 'CV'],
  },
  {
    title: 'TitanIT: семантический поиск по интересам',
    meta: 'Командный кейс / NLP',
    text: 'Решение для поиска людей по интересам на основе коротких описаний с учётом смысла текста.',
    stack: ['Python', 'Семантическая близость', 'NLP', 'Хакатон'],
    githubHref: 'https://github.com/CommitDestroyer/TiTaNiT',
  },
  {
    title: 'РНИИРС: трекинг спутников в реальном времени',
    meta: 'Командный кейс / Real-time',
    text: 'Участвовал в разработке решения для отслеживания спутников в реальном времени: инфраструктура, сервер и рабочий контур.',
    stack: ['Реальное время', 'Ubuntu Server', 'Командная работа', 'Хакатон'],
    githubHref: 'https://github.com/YORMOMSLOVER/Hakk',
  },
  {
    title: 'Грядка: Android-приложение для фермерского e-commerce',
    meta: 'Mobile / Kotlin / Android',
    text: 'Мобильный кейс: приложение на Kotlin для покупки фермерской продукции напрямую у производителя.',
    stack: ['Kotlin', 'Android', 'E-commerce', 'Mobile'],
    githubHref: 'https://github.com/ohFerks/EcomApp',
  },
  {
    title: 'Подводный робот для очистки корпуса судна',
    meta: 'Робототехника / Embedded',
    text: 'Концепт подводного робота для удаления слизи и биологических отложений с подводной части корпуса судна.',
    stack: ['Робототехника', 'Embedded', 'CAD', 'Механика'],
  },
]

const contactHighlights = [
  {
    title: 'Что ищу',
    text: 'Junior-позицию на стыке backend-разработки, CV/ML, embedded-систем и робототехники.',
  },
  {
    title: 'Где полезен',
    text: 'В проектах, где важно связать интерфейс, API, модель, сервер и оборудование в рабочую систему.',
  },
]

const certificates = [
  {
    title: 'Хакатон ОСЕНЬ 2025',
    meta: 'XVII форум программных разработчиков Ростова-на-Дону',
    text: 'Сертификат участника. Команда «Invalid syntax», 24-26 октября 2025.',
    href: '/certificates/hackathon-autumn-2025-valery-plakhov.pdf',
    preview: '/certificates/hackathon-autumn-2025-valery-plakhov.png',
    icon: 'award',
  },
  {
    title: 'Хакатон ВЕСНА 2026',
    meta: 'XVIII форум программных разработчиков Ростова-на-Дону',
    text: 'Сертификат участника. Команда «AdventureTime», 20-22 марта 2026.',
    href: '/certificates/hackathon-spring-2026-valery-plakhov.pdf',
    preview: '/certificates/hackathon-spring-2026-valery-plakhov.png',
    icon: 'patch-check',
  },
]

function resolveSectionFromHash(hash) {
  const nextSection = hash.replace('#', '')

  return navigation.some((item) => item.id === nextSection) ? nextSection : defaultSectionId
}

function resolveInitialTheme() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return 'dark'
}

function ContactCard({ contact }) {
  return (
    <a
      className="contact-card full-height"
      href={contact.href}
      target={contact.external ? '_blank' : undefined}
      rel={contact.external ? 'noopener noreferrer' : undefined}
    >
      <span className="icon-shell">
        <i className={`bi bi-${contact.icon}`} />
      </span>
      <span className="contact-copy">
        <small>{contact.label}</small>
        <strong>{contact.value}</strong>
      </span>
    </a>
  )
}

function CertificateCard({ certificate }) {
  return (
    <a
      className="project-card certificate-card full-height"
      href={certificate.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="certificate-preview"
        style={{ backgroundImage: `url(${certificate.preview})` }}
        aria-hidden="true"
      >
        <span className="certificate-badge">
          <i className={`bi bi-${certificate.icon}`} />
        </span>
      </div>

      <strong>{certificate.title}</strong>
      <small className="card-meta">{certificate.meta}</small>
      <p>{certificate.text}</p>

      <span className="certificate-link">
        Открыть PDF
        <i className="bi bi-arrow-up-right" />
      </span>
    </a>
  )
}

function App() {
  const [theme, setTheme] = useState(resolveInitialTheme)
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultSectionId
    }

    return resolveSectionFromHash(window.location.hash)
  })
  const [displaySection, setDisplaySection] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultSectionId
    }

    return resolveSectionFromHash(window.location.hash)
  })
  const [sectionPhase, setSectionPhase] = useState('enter')
  const activeSectionRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleHashChange = () => {
      const nextSection = resolveSectionFromHash(window.location.hash)

      setActiveSection((currentSection) => (currentSection === nextSection ? currentSection : nextSection))
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const nextHash = `#${activeSection}`

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash)
    }

    const shouldAutoScroll = window.matchMedia('(max-width: 1199px)').matches

    if (!shouldAutoScroll) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    activeSectionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [activeSection])

  useEffect(() => {
    if (activeSection === displaySection) {
      setSectionPhase('enter')
      return undefined
    }

    if (typeof window === 'undefined') {
      setDisplaySection(activeSection)
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplaySection(activeSection)
      setSectionPhase('enter')
      return undefined
    }

    setSectionPhase('exit')

    const timerId = window.setTimeout(() => {
      setDisplaySection(activeSection)
      setSectionPhase('enter')
    }, 140)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [activeSection, displaySection])

  const visibleSections = {
    profile: (
      <section id="profile" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Профиль</p>
            <h2 className="section-title">
              Fullstack, CV/ML и embedded
            </h2>
          </div>
        </div>

        <div className="content-grid content-grid-profile layout-gap layout-top-offset">
          <div>
            <div className="neo-inset profile-card full-height">
              <div className="avatar-ring">
                <div className="avatar-core">
                  <img className="avatar-photo" src={profilePhoto} alt="Фото Валерия Плахова" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="profile-name">Валерий Плахов</h3>
                <p className="profile-role">3 курс, ДГТУ</p>
                <span className="status-badge">Junior-разработчик</span>
              </div>

              <div className="facts-list">
                {profileFacts.map((item) => (
                  <div key={item.label} className="info-row">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="lead-copy paragraph-gap">
                {paragraph}
              </p>
            ))}

            <div className="summary-grid block-offset">
              {summaryCards.map((item) => (
                <article key={item.title} className="summary-card full-height">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    skills: (
      <section id="skills" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Стек</p>
            <h2 className="section-title">Инструменты, в которых уже есть уверенность</h2>
          </div>
        </div>

        <p className="lead-copy block-offset">
          Собираю инженерные решения, где нужно связать API, модель, оборудование и деплой.
        </p>

        <div className="summary-grid block-offset">
          {skillGroups.map((group) => (
            <article key={group.id} className="project-card skill-card full-height">
              <div className="stack-row stack-start gap-3">
                <span className="icon-shell">
                  <i className={`bi bi-${group.icon}`} />
                </span>

                <div>
                  <strong>{group.title}</strong>
                  <p className="card-support">{group.description}</p>
                </div>
              </div>

              <div className="tag-cloud block-offset-sm">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
    experience: (
      <section id="experience" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Кейсы</p>
            <h2 className="section-title">Практические кейсы</h2>
          </div>
        </div>

        <p className="lead-copy block-offset">
          Командные и личные кейсы из CV/ML, mobile и real-time задач. В каждом из
          них я участвовал в разработке и сборке рабочего решения.
        </p>

        <div className="summary-grid block-offset">
          {caseStudies.map((item) => (
            <article key={item.title} className="project-card full-height">
              <strong>{item.title}</strong>
              <small className="card-meta">{item.meta}</small>
              <p>{item.text}</p>

              <div className="tag-cloud block-offset-sm">
                {item.stack.map((stackItem) => (
                  <span key={stackItem} className="skill-chip">
                    {stackItem}
                  </span>
                ))}
              </div>

              {item.githubHref ? (
                <a
                  className="project-link"
                  href={item.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Открыть GitHub-репозиторий проекта ${item.title}`}
                  title="Открыть GitHub"
                >
                  <i className="bi bi-github" />
                </a>
              ) : null}
            </article>
          ))}
        </div>

      </section>
    ),
    certificates: (
      <section id="certificates" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Сертификаты</p>
            <h2 className="section-title">Подтверждение участия в хакатонах и форумах</h2>
          </div>
        </div>

        <p className="lead-copy block-offset">
          Два сертификата с форумов программных разработчиков Ростова-на-Дону.
        </p>

        <div className="summary-grid block-offset">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </section>
    ),
    contact: (
      <section id="contact" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Контакты</p>
            <h2 className="section-title">Открыт к сильным инженерным задачам</h2>
          </div>
        </div>

        <p className="lead-copy block-offset">
          Ищу junior-позицию на стыке backend, CV/ML, embedded и робототехники.
        </p>

        <div className="summary-grid summary-grid-2col block-offset-sm">
          {contactHighlights.map((item) => (
            <article key={item.title} className="summary-card full-height">
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="summary-grid summary-grid-3col block-offset-sm">
          {contacts.map((contact) => (
            <ContactCard key={contact.label} contact={contact} />
          ))}
        </div>
      </section>
    ),
  }

  const themeToggleLabel = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'
  const themeToggleIcon = theme === 'dark' ? 'sun-fill' : 'moon-stars-fill'

  return (
    <div className="app-shell page-shell">
      <header className="neo-panel shell-pad shell-pad-header topbar">
        <div className="topbar-identity stack-row gap-3">
          <span className="brand-mark">
            <i className="bi bi-layers-fill" />
          </span>

          <div className="topbar-copy">
            <p className="section-kicker text-tight">Резюме</p>
            <h1 className="topbar-title text-tight">Валерий Плахов</h1>
            <p className="topbar-subtitle">Fullstack, CV/ML, embedded и робототехника</p>
          </div>
        </div>

        <div className="topbar-actions">
          <button
            type="button"
            className="btn-neo theme-toggle"
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            aria-label={themeToggleLabel}
            aria-pressed={theme === 'dark'}
            title={themeToggleLabel}
          >
            <i className={`bi bi-${themeToggleIcon}`} />
          </button>

          <div className="topbar-badge">3 курс • ДГТУ</div>
        </div>
      </header>

      <div className="layout-grid layout-gap layout-top-offset">
        <aside className="layout-sidebar">
          <div className="neo-panel shell-pad shell-pad-sidebar sidebar-shell">
            <nav className="stack-grid gap-3" aria-label="Разделы резюме">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`section-link ${activeSection === item.id ? 'section-link-active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                  aria-pressed={activeSection === item.id}
                >
                  <span className="icon-shell">
                    <i className={`bi bi-${item.icon}`} />
                  </span>
                  <strong>{item.label}</strong>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="layout-main">
          <div ref={activeSectionRef} className={`section-stage section-stage-${sectionPhase}`}>
            {visibleSections[displaySection]}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
