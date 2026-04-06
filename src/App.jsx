import { useEffect, useRef, useState } from 'react'

const assetBaseUrl = import.meta.env.BASE_URL

function resolveAssetUrl(path) {
  return `${assetBaseUrl}${path.replace(/^\/+/, '')}`
}

const profilePhoto = resolveAssetUrl('profile-photo-square.png')
const dionisPreview = resolveAssetUrl('dionis-vineyard.png')
const serviceLearningPreview = resolveAssetUrl('obucheniye.png')
const festivalPreview = resolveAssetUrl('festival.png')
const nasaRoverPreview = resolveAssetUrl('nasa-rover.png')
const smartHomePreview = resolveAssetUrl('smart-home.png')
const underWaterPreview = resolveAssetUrl('under-water.png')
const themeStorageKey = 'resume-theme'
const socialTrackId = 'social'

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

const navigation = [
  { id: 'profile', label: 'Обо мне', icon: 'person-badge' },
  { id: 'skills', label: 'Инструменты', icon: 'code-slash' },
  { id: 'experience', label: 'Направления', icon: 'layers' },
  { id: 'contact', label: 'Контакты', icon: 'person-lines-fill' },
]

const defaultSectionId = navigation[0].id

const profileFacts = [
  { label: 'Направление', value: '15.03.06 Мехатроника и робототехника' },
  { label: 'Обучение', value: 'ДГТУ, 3 курс' },
  { label: 'Город', value: 'Ростов-на-Дону' },]

const aboutParagraphs = [
  'Я студент третьего курса по направлению «Мехатроника и робототехника», специализируюсь на стыке конструирования, электроники и программного обеспечения. В работе я прежде всего ценю командную работу за возможность коллективного поиска эффективных решений и профессионального обмена опытом, который напрямую влияет на качество финального продукта. Обладая навыками решения задач в различных технических областях, я быстро погружаюсь в новые предметные области и сохраняю продуктивность, работая одновременно в нескольких ролях. Для меня особенно важны проекты полного цикла, где есть возможность не просто выполнить часть работы, а довести результат до полностью рабочего состояния. Я нацелен на непрерывный профессиональный рост, готов к решению нестандартных инженерных задач и стремлюсь реализовать свой потенциал в рамках сложных и амбициозных проектов.',
]

const skillGroups = [
  {
    id: 'software',
    title: 'Программирование и веб-разработка',
    icon: 'code-slash',
    description: 'Разработка сервисов, интерфейсов и рабочих инженерных прототипов.',
    items: ['Python', 'JavaScript', 'C', 'C++', 'FastAPI', 'React', 'Vite', 'Git', 'Docker', 'ROS2', 'SLAM', 'Webots'],
  },
  {
    id: 'cv-ml',
    title: 'CV и ML',
    icon: 'cpu',
    description: 'Детекция, сегментация, обработка изображений и прикладные пайплайны.',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'U-Net'],
  },
  {
    id: 'cad',
    title: 'CAD и моделирование',
    icon: 'bounding-box',
    description: 'Проектирование механики, узлов и компоновки робототехнических систем.',
    items: ['SolidWorks', 'Fusion 360', 'Компас 3D', 'MATLAB'],
  },
  {
    id: 'electronics',
    title: 'Электроника и робототехника',
    icon: 'motherboard',
    description: 'Платы, контроллеры, пайка и практическая работа с электронными узлами.',
    items: ['EasyEDA', 'STM32', 'ESP32', 'Arduino', 'Raspberry Pi', 'MATLAB', 'Измерительные приборы', 'Пайка', 'Лужение'],
  },
]

function UnderwaterRobotIllustration() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="underwater-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef6ea" />
          <stop offset="100%" stopColor="#fde0d6" />
        </linearGradient>
        <linearGradient id="underwater-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff7a73" />
          <stop offset="100%" stopColor="#df3c45" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="28" fill="url(#underwater-bg)" />
      <ellipse cx="158" cy="184" rx="112" ry="18" fill="#000" opacity="0.08" />
      <rect x="58" y="62" width="204" height="92" rx="26" fill="url(#underwater-body)" />
      <path d="M75 78c12-17 36-25 61-25h57c27 0 50 8 68 25" fill="none" stroke="#ffb0ad" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
      <path d="M62 153h198c13 0 24 10 24 23v6H38v-6c0-13 11-23 24-23Z" fill="#f34f56" />
      <rect x="93" y="72" width="46" height="18" rx="5" fill="#2b3340" />
      <rect x="99" y="76" width="9" height="10" rx="2" fill="#8e99ab" />
      <rect x="111" y="76" width="9" height="10" rx="2" fill="#8e99ab" />
      <rect x="123" y="76" width="9" height="10" rx="2" fill="#8e99ab" />
      <g fill="#1e232d">
        <rect x="82" y="102" width="24" height="42" rx="10" />
        <rect x="214" y="102" width="24" height="42" rx="10" />
      </g>
      <g fill="#97a1b2">
        <rect x="86" y="108" width="16" height="8" rx="2" />
        <rect x="86" y="119" width="16" height="8" rx="2" />
        <rect x="86" y="130" width="16" height="8" rx="2" />
        <rect x="218" y="108" width="16" height="8" rx="2" />
        <rect x="218" y="119" width="16" height="8" rx="2" />
        <rect x="218" y="130" width="16" height="8" rx="2" />
      </g>
      <g stroke="#962d38" strokeWidth="2">
        <line x1="114" y1="62" x2="114" y2="153" />
        <line x1="145" y1="62" x2="145" y2="153" />
        <line x1="176" y1="62" x2="176" y2="153" />
        <line x1="207" y1="62" x2="207" y2="153" />
      </g>
      <g fill="#ffd8d4">
        <circle cx="61" cy="176" r="3.2" />
        <circle cx="86" cy="176" r="3.2" />
        <circle cx="111" cy="176" r="3.2" />
        <circle cx="136" cy="176" r="3.2" />
        <circle cx="161" cy="176" r="3.2" />
        <circle cx="186" cy="176" r="3.2" />
        <circle cx="211" cy="176" r="3.2" />
        <circle cx="236" cy="176" r="3.2" />
        <circle cx="261" cy="176" r="3.2" />
      </g>
    </svg>
  )
}

function MarsRoverIllustration() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rover-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eef3fb" />
          <stop offset="100%" stopColor="#dfe9f4" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="28" fill="url(#rover-bg)" />
      <rect y="164" width="320" height="56" fill="#e4ddd3" />
      <ellipse cx="160" cy="170" rx="98" ry="16" fill="#000" opacity="0.08" />
      <g stroke="#7f8792" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M82 138 118 92H202l36 46" />
        <path d="M108 148 106 78" />
        <path d="M214 148 214 88" />
        <path d="M88 138h144" />
        <path d="M128 90v58" />
        <path d="M164 90v58" />
        <path d="M200 90v58" />
        <path d="M128 108h72" />
        <path d="M60 156 84 136" />
        <path d="M260 156 236 136" />
        <path d="M116 90 80 62" />
        <path d="M206 90 240 58" />
      </g>
      <g fill="#ffffff" stroke="#c6ccd5" strokeWidth="3">
        <rect x="116" y="86" width="92" height="22" rx="6" />
        <rect x="140" y="110" width="44" height="20" rx="5" />
        <rect x="100" y="132" width="16" height="16" rx="4" />
        <rect x="204" y="132" width="16" height="16" rx="4" />
        <rect x="70" y="152" width="20" height="18" rx="4" />
        <rect x="230" y="152" width="20" height="18" rx="4" />
      </g>
      <g fill="#616873">
        <circle cx="74" cy="173" r="12" />
        <circle cx="246" cy="173" r="12" />
        <circle cx="112" cy="162" r="10" />
        <circle cx="208" cy="162" r="10" />
      </g>
      <g fill="#9aa3af">
        <circle cx="74" cy="173" r="4" />
        <circle cx="246" cy="173" r="4" />
        <circle cx="112" cy="162" r="3.5" />
        <circle cx="208" cy="162" r="3.5" />
      </g>
    </svg>
  )
}

function FestivalAwardIllustration() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="festival-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d3d9a" />
          <stop offset="100%" stopColor="#c21f84" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="28" fill="url(#festival-bg)" />
      <rect y="160" width="320" height="60" fill="#1b1236" opacity="0.72" />
      <circle cx="244" cy="96" r="42" fill="#ff4aa8" opacity="0.46" />
      <path d="M234 60 246 86h28l-22 16 9 27-23-17-23 17 9-27-22-16h28Z" fill="#7bd0ff" opacity="0.82" />
      <rect x="94" y="86" width="42" height="74" rx="8" fill="#d9e0ea" opacity="0.9" />
      <rect x="146" y="96" width="34" height="64" rx="8" fill="#edf3ff" opacity="0.9" />
      <rect x="110" y="100" width="12" height="36" rx="5" fill="#b8c2d2" />
      <circle cx="163" cy="146" r="10" fill="#f1d9a2" />
      <rect x="158" y="118" width="10" height="26" rx="5" fill="#171a28" />
      <rect x="150" y="72" width="46" height="8" rx="4" fill="#dbe6ff" opacity="0.72" />
      <rect x="52" y="42" width="216" height="12" rx="6" fill="#ffffff" opacity="0.16" />
      <rect x="52" y="60" width="128" height="7" rx="3.5" fill="#ffffff" opacity="0.18" />
      <rect x="52" y="171" width="160" height="14" rx="7" fill="#ffffff" opacity="0.12" />
    </svg>
  )
}

const recognitionCards = [
  {
    title: 'Победитель модуля «Обучение служением»',
    meta: 'ДГТУ / 18-19 декабря 2024',
    text: 'Командный проект «Карточная игра “Безмолвный остров”», Институт опережающих технологий «Школа Икс». Проект отмечен как одна из лучших практик модуля.',
    stack: ['Социальный проект', 'Публичная защита', 'Командная работа', 'Лидер команды'],
    action: {
      href: 'https://news.donstu.ru/news/v-dgtu-podvedeny-itogi-modulya-obuchenie-sluzheniem-za-osenniy-semestr',
      label: 'Подтверждение',
      icon: 'box-arrow-up-right',
    },
    media: {
      type: 'image',
      src: serviceLearningPreview,
      alt: 'Диплом победителя модуля Обучение служением',
    },
  },
  {
    title: 'Награждение на XVI Фестивале науки Юга России',
    meta: 'Ростов Арена / 20 сентября 2025',
    text: 'Награждение на XVI Фестивале науки Юга России «Наука побеждать». Есть опыт публичной презентации проектов.',
    stack: ['Публичное выступление', 'Наука и медиа'],
    action: {
      href: 'https://festivalnauki.sfedu.ru/',
      label: 'Сайт фестиваля',
      icon: 'box-arrow-up-right',
    },
    media: {
      type: 'image',
      src: festivalPreview,
      alt: 'Награждение на XVI Фестивале науки Юга России',
    },
  },
]

const engineeringTracks = [
  {
    id: 'programming',
    label: 'Программирование',
    cases: [
      {
        title: 'Сегментация печатей на документах',
        text: 'Подготовил данные, обучил модель и собрал прикладной пайплайн для выделения печатей на документах.',
        stack: ['Python', 'PyTorch', 'U-Net', 'OpenCV'],
      },
      {
        title: 'Модуль «Умный дом»',
        text: 'Разрабатывал позиционирование мобильного робота, систему зрения на OpenCV и обмен данными между Arduino и Raspberry Pi.',
        stack: ['Raspberry Pi 5', 'OpenCV', 'Arduino', 'C/C++'],
        media: {
          type: 'image',
          src: smartHomePreview,
          alt: 'Модуль Умный дом',
        },
      },
      {
        title: 'РНИИРС: трекинг спутников в реальном времени',
        text: 'Участвовал в сборке серверного и инфраструктурного контура для мониторинга спутников в реальном времени.',
        stack: ['Ubuntu Server', 'Docker', 'Git', 'Командная работа', 'Middle кейс', 'Капитан команды', 'Реальное время', '2026'],
        githubHref: 'https://github.com/YORMOMSLOVER/Hakk',
        certificateHref: resolveAssetUrl('certificates/hackathon-spring-2026-valery-plakhov.pdf'),
        certificateIcon: 'patch-check-fill',
        certificateLabel: 'Открыть сертификат РНИИРС 2026',
      },
      {
        title: 'TitanIT: поиск людей по интересам',
        text: 'Сделал решение для поиска людей по коротким описаниям с учётом смысловой близости текста.',
        stack: ['Python', 'Семантический анализ', 'Командная работа', 'Junior кейс', 'Капитан команды', '2025'],
        githubHref: 'https://github.com/CommitDestroyer/TiTaNiT',
        certificateHref: resolveAssetUrl('certificates/hackathon-autumn-2025-valery-plakhov.pdf'),
        certificateIcon: 'patch-check-fill',
        certificateLabel: 'Открыть сертификат TitanIT 2025',
      },
    ],
  },
  {
    id: 'construction',
    label: 'Конструирование',
    cases: [
      {
        title: 'Подводный робот "РЕМОРА"',
        text: 'Моделировал робототехническую платформу для очистки подводной части судна от биообрастания: компоновка корпуса, приводов, технологичность сборки и герметизация.',
        stack: ['SolidWorks', 'Fusion 360', 'Механика', 'Герметизация', 'Магнитные гусеницы'],
        media: {
          type: 'image',
          src: underWaterPreview,
          alt: 'Подводный робот для очистки корпуса судна',
        },
      },
      {
        title: 'Мини-марсоход NASA',
        meta: 'CAD / Рама / Кинематика',
        text: 'Прорабатывал раму, опоры и компоновку мини-марсохода в духе NASA под наземные испытания.',
        stack: ['SolidWorks', 'Кинематика', 'Робототехника', 'Лидер команды'],
        media: {
          type: 'image',
          src: nasaRoverPreview,
          alt: 'Мини-марсоход NASA',
        },
      },
      {
        title: 'Робот "Дионис"',
        text: 'Участвовал в сборке и испытаниях робота для сбора винограда. Проект попал в сюжет ДонТР, где меня показывают в работе.',
        stack: ['Робототехника', 'Сборка', 'Испытания', 'Командная работа', 'Полевой проект'],
        action: {
          href: 'https://dontr.ru/novosti/dionis-na-vinogradnike-donskie-studenty-ispytali-robota-sborshchika-dlya-sbora-urozhaya/',
          label: 'Смотреть сюжет',
          icon: 'eye-fill',
        },
        media: {
          type: 'image',
          src: dionisPreview,
          alt: 'Робот Дионис для сбора винограда',
        },
      },
    ],
  },
  {
    id: 'electronics',
    label: 'Электроника',
    cases: [
      {
        title: 'Схемы и платы в EasyEDA',
        text: 'Делаю схемы и разводку учебных и прикладных плат под датчики, питание и исполнительные узлы.',
        stack: ['EasyEDA', 'Платы', 'Сенсоры', 'Питание', 'Датчики'],
      },
      {
        title: 'Монтаж и пайка электроники',
        text: 'Паяю и лужу соединения, собираю проводку и повышаю надёжность электрической части робототехнических систем.',
        stack: ['Пайка', 'Лужение', 'Проводка', 'Сборка'],
      },
      {
        title: 'Измерения и отладка электроники',
        text: 'Работаю с измерительными приборами, проверяю питание и сигналы.',
        stack: ['Осциллограф', 'Мультиметр', 'Логический анализатор', 'Диагностика'],
      },
      {
        title: 'Работа с MCU и одноплатными компьютерами',
        text: 'Есть практика работы с платами Arduino, ESP32, STM32 и Raspberry Pi 2/4/5 в учебных и инженерных проектах.',
        stack: ['Arduino', 'ESP32', 'STM32', 'Raspberry Pi'],
      },
    ],
  },
  {
    id: socialTrackId,
    label: 'Социальная активность',
    cases: recognitionCards,
  },
]

const contactHighlights = [
  {
    title: 'Что ищу',
    text: 'Junior-позицию на стыке программирования, CAD, электроники и робототехники.',
  },
  {
    title: 'Где полезен',
    text: 'В проектах, где важно связать код, механику, плату, модель и оборудование в рабочую систему.',
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

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return 'light'
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

function ActionLink({ action }) {
  return (
    <a
      className="case-action-link"
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`bi bi-${action.icon}`} />
      <span>{action.label}</span>
    </a>
  )
}

function CaseMedia({ media }) {
  if (!media) {
    return null
  }

  if (media.type === 'image') {
    return (
      <div className="case-media">
        <img src={media.src} alt={media.alt} />
      </div>
    )
  }

  const Illustration = media.component

  return (
    <div className="case-media" aria-hidden="true">
      <Illustration />
    </div>
  )
}

function CaseCard({ item }) {
  return (
    <article className="project-card case-card full-height">
      <CaseMedia media={item.media} />

      <strong>{item.title}</strong>
      <small className="card-meta">{item.meta}</small>
      <p>{item.text}</p>

      {item.stack?.length ? (
        <div className="tag-cloud block-offset-sm">
          {item.stack.map((stackItem) => (
            <span key={stackItem} className="skill-chip">
              {stackItem}
            </span>
          ))}
        </div>
      ) : null}

      {item.action || item.githubHref || item.certificateHref ? (
        <div className="case-actions">
          {item.action ? <ActionLink action={item.action} /> : null}

          <div className="case-icon-links">
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

            {item.certificateHref ? (
              <a
                className="project-link"
                href={item.certificateHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.certificateLabel ?? `Открыть сертификат проекта ${item.title}`}
                title={item.certificateLabel ?? 'Открыть сертификат'}
              >
                <i className={`bi bi-${item.certificateIcon ?? 'patch-check'}`} />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
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
  const [activeTrackId, setActiveTrackId] = useState(engineeringTracks[0].id)
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

  const activeTrack = engineeringTracks.find((track) => track.id === activeTrackId) ?? engineeringTracks[0]
  const visibleSections = {
    profile: (
      <section id="profile" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Обо мне</p>
            <h2 className="section-title">
              Профиль
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
                <p className="profile-role"> </p>
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
          </div>
        </div>
      </section>
    ),
    skills: (
      <section id="skills" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Инструменты</p>
            <h2 className="section-title">Инструменты, в которых уже есть практика</h2>
          </div>
        </div>

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
            <p className="section-kicker text-tight">Направления</p>
            <h2 className="section-title">Направления и активность</h2>
          </div>
        </div>

        <p className="lead-copy block-offset">
          Ниже собраны ключевые направления, в которых у меня уже есть практические результаты, реальные инженерные кейсы и опыт публичной презентации проектов.
        </p>

        <div className="direction-tabs block-offset" role="tablist" aria-label="Инженерные направления">
          {engineeringTracks.map((track) => (
            <button
              key={track.id}
              type="button"
              role="tab"
              className={`direction-tab ${activeTrackId === track.id ? 'direction-tab-active' : ''}`}
              aria-selected={activeTrackId === track.id}
              onClick={() => setActiveTrackId(track.id)}
            >
              {track.label}
            </button>
          ))}
        </div>

        <div className="direction-grid block-offset-sm" role="tabpanel">
          {activeTrack.cases.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    ),
    contact: (
      <section id="contact" className="neo-panel shell-pad shell-pad-section resume-section">
        <div className="section-head">
          <div>
            <p className="section-kicker text-tight">Контакты</p>
            <h2 className="section-title">Открыт к инженерным задачам</h2>
          </div>
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
            <p className="topbar-subtitle">Робототехника</p>
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
