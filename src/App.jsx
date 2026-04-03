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
  { label: 'Обучение', value: 'ДГТУ, 2023-2027, 3 курс' },
  { label: 'Формат', value: 'Junior-позиция, проектная работа' },
]

const aboutParagraphs = [
  'Я студент 3 курса мехатроники и робототехники в ДГТУ. Работаю на стыке fullstack, CV/ML, embedded и робототехники и люблю собирать системы целиком.',
  'Быстро поднимаю интерфейс, API, модель и окружение, а затем довожу решение до рабочего состояния. Основной стек: Python, JavaScript, C, FastAPI, React, OpenCV, PyTorch, TensorFlow, ROS2, Docker.',
]

const summaryCards = [
  {
    title: 'Сильная связка',
    text: 'Интерфейс, API, модель, железо и деплой без потери контекста.',
  },
  {
    title: '3 проекта в CV/ML',
    text: 'U-Net, YOLO/OpenCV и задачи на семантическую близость текстов.',
  },
  {
    title: 'Серверная практика',
    text: 'Свой Ubuntu-сервер: VPN, Docker, деплой и поддержка прототипов.',
  },
]

const skillGroups = [
  {
    id: 'fullstack',
    title: 'Fullstack и backend-разработка',
    icon: 'code-slash',
    description: 'Веб-интерфейсы и API для инженерных задач.',
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
    description: 'Платы, C для embedded и интеграция с железом.',
    items: ['Arduino', 'Raspberry Pi', 'Jetson', 'STM32', 'CMSIS', 'HAL', 'ROS2 Jazzy', 'Nav2', 'SLAM'],
  },
  {
    id: 'infra',
    title: 'Инфраструктура и серверы',
    icon: 'server',
    description: 'Linux, сервисы, контейнеры и деплой.',
    items: ['Docker', 'Ubuntu Server', 'VPN', 'Деплой', 'Git', 'Linux'],
  },
]

const experienceStats = [
  { label: 'CV/ML-проекты', value: '3' },
  { label: 'Хакатоны', value: '2' },
  { label: 'Командные кейсы', value: '2' },
  { label: 'Инфраструктура', value: 'Ubuntu / Docker / VPN' },
]

const caseStudies = [
  {
    title: 'Поиск печатей на документах',
    meta: 'PyTorch / U-Net / CV',
    text: 'Собрал пайплайн для поиска и сегментации печатей на документах: данные, обучение и доводка качества.',
    stack: ['Python', 'PyTorch', 'U-Net', 'OpenCV'],
  },
  {
    title: 'CV-агент для Counter-Strike',
    meta: 'Пет-проект / OpenCV / YOLO',
    text: 'Исследовательский прототип CV-агента, который понимает сцену и реагирует на происходящее по изображению.',
    stack: ['Python', 'OpenCV', 'YOLO', 'CV'],
  },
  {
    title: 'TitanIT: поиск людей по интересам',
    meta: 'Junior-кейс / семантический поиск',
    text: 'Командный кейс на поиск людей по интересам по коротким описаниям с учетом смысла, а не только совпадения слов.',
    stack: ['Python', 'Семантическая близость', 'NLP', 'Хакатон'],
  },
  {
    title: 'РНИИРС: отслеживание спутников в реальном времени',
    meta: 'Middle-кейс / система реального времени',
    text: 'Командный кейс по отслеживанию спутников в реальном времени. Поднимал часть инфраструктуры на своем сервере и помогал собрать рабочий контур решения.',
    stack: ['Реальное время', 'Ubuntu Server', 'Командная работа', 'Хакатон'],
  },
]

const contactHighlights = [
  {
    title: 'Что ищу',
    text: 'Junior-позицию на стыке backend, CV/ML, embedded и робототехники.',
  },
  {
    title: 'Где полезен',
    text: 'Когда нужен человек, который может связать интерфейс, API, модель, сервер и железо в рабочую систему.',
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
    return 'light'
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey)

  return savedTheme === 'dark' ? 'dark' : 'light'
}

function ContactCard({ contact }) {
  return (
    <a
      className="contact-card h-100"
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
      className="project-card certificate-card h-100"
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    activeSectionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [activeSection])

  useEffect(() => {
    if (activeSection === displaySection) {
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
      <section id="profile" className="neo-panel p-4 p-lg-5 resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker mb-1">Профиль</p>
            <h2 className="section-title mb-0">
              Fullstack, CV/ML и embedded
            </h2>
          </div>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-12 col-lg-5">
            <div className="neo-inset profile-card h-100">
              <div className="avatar-ring">
                <div className="avatar-core">
                  <img className="avatar-photo" src={profilePhoto} alt="Фото Валерия Плахова" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="profile-name">Валерий Плахов</h3>
                <p className="profile-role">3 курс, мехатроника и робототехника, ДГТУ</p>
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

          <div className="col-12 col-lg-7">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="lead-copy mb-3">
                {paragraph}
              </p>
            ))}

            <div className="summary-grid mt-4">
              {summaryCards.map((item) => (
                <article key={item.title} className="summary-card h-100">
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
      <section id="skills" className="neo-panel p-4 p-lg-5 resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker mb-1">Стек</p>
            <h2 className="section-title mb-0">Инструменты, в которых уже есть уверенность</h2>
          </div>
        </div>

        <p className="lead-copy mt-4">
          Базовый принцип простой: если задача требует и API, и модель, и железо, и
          деплой, мне комфортно не терять контекст между слоями и быстро собирать все
          в одну рабочую систему.
        </p>

        <div className="summary-grid mt-4">
          {skillGroups.map((group) => (
            <article key={group.id} className="project-card skill-card h-100">
              <div className="d-flex align-items-start gap-3">
                <span className="icon-shell">
                  <i className={`bi bi-${group.icon}`} />
                </span>

                <div>
                  <strong>{group.title}</strong>
                  <p className="card-support">{group.description}</p>
                </div>
              </div>

              <div className="tag-cloud mt-3">
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
      <section id="experience" className="neo-panel p-4 p-lg-5 resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker mb-1">Кейсы</p>
            <h2 className="section-title mb-0">Практика, где есть код, система и результат</h2>
          </div>
        </div>

        <div className="stats-grid mt-4">
          {experienceStats.map((item) => (
            <div key={item.label} className="stat-card">
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="summary-grid mt-4">
          {caseStudies.map((item) => (
            <article key={item.title} className="project-card h-100">
              <strong>{item.title}</strong>
              <small className="card-meta">{item.meta}</small>
              <p>{item.text}</p>

              <div className="tag-cloud mt-3">
                {item.stack.map((stackItem) => (
                  <span key={stackItem} className="skill-chip">
                    {stackItem}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </section>
    ),
    certificates: (
      <section id="certificates" className="neo-panel p-4 p-lg-5 resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker mb-1">Сертификаты</p>
            <h2 className="section-title mb-0">Подтверждение участия в хакатонах и форумах</h2>
          </div>
        </div>

        <p className="lead-copy mt-4">
          Два сертификата с форумов программных разработчиков Ростова-на-Дону.
        </p>

        <div className="summary-grid mt-4">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </section>
    ),
    contact: (
      <section id="contact" className="neo-panel p-4 p-lg-5 resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker mb-1">Контакты</p>
            <h2 className="section-title mb-0">Открыт к сильным инженерным задачам</h2>
          </div>
        </div>

        <p className="lead-copy mt-4">
          Ищу junior-позицию, где можно брать инженерные задачи на стыке backend,
          CV/ML, embedded и робототехники. Особенно интересны проекты, в которых
          нужно быстро собрать прототип, связать несколько технологий и довести
          систему до рабочего состояния.
        </p>

        <div className="row g-3 mt-2">
          {contactHighlights.map((item) => (
            <div key={item.title} className="col-12 col-md-6">
              <article className="summary-card h-100">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="row g-3 mt-2">
          {contacts.map((contact) => (
            <div key={contact.label} className="col-12 col-md-4">
              <ContactCard contact={contact} />
            </div>
          ))}
        </div>
      </section>
    ),
  }

  const themeToggleLabel = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'
  const themeToggleIcon = theme === 'dark' ? 'sun-fill' : 'moon-stars-fill'

  return (
    <div className="app-shell container-xxl py-4 py-xl-5">
      <header className="neo-panel p-3 p-md-4 topbar">
        <div className="d-flex align-items-center gap-3 topbar-identity">
          <span className="brand-mark">
            <i className="bi bi-layers-fill" />
          </span>

          <div className="topbar-copy">
            <p className="section-kicker mb-1">Резюме</p>
            <h1 className="topbar-title mb-1">Валерий Плахов</h1>
            <p className="topbar-subtitle mb-0">Fullstack, CV/ML, embedded и робототехника</p>
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

      <div className="row g-4 mt-1">
        <aside className="col-12 col-xl-3">
          <div className="neo-panel p-3 p-xl-4 sidebar-shell">
            <nav className="d-grid gap-3" aria-label="Разделы резюме">
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

        <main className="col-12 col-xl-9">
          <div ref={activeSectionRef} className={`section-stage section-stage-${sectionPhase}`}>
            {visibleSections[displaySection]}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
