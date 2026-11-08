import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

function setupLenis() {
  const lenis = new Lenis({ anchors: { offset: -72 } })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

const ease = 'power3.out'
const q = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll<T>(sel))
const fadeUp = (y: number) => ({ opacity: 1, y: 0, startAt: { opacity: 0, y } })

function onEnter(trigger: Element, build: (tl: gsap.core.Timeline) => void, start = 'top 85%') {
  const tl = gsap.timeline({ paused: true, defaults: { ease } })
  build(tl)
  ScrollTrigger.create({ trigger, start, once: true, onEnter: () => tl.play() })
}

function heroIntro() {
  const tl = gsap.timeline({ defaults: { ease } })
  tl.fromTo('[data-anim-header]', { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.4 }, 0)
  tl.to('[data-hero="badge"]', { ...fadeUp(16), duration: 0.6 }, 0.1)
  tl.to('[data-hero="hello"]', { y: 0, duration: 0.7 }, 0.18)
  tl.to('[data-hero="word"]', { y: 0, duration: 0.9, stagger: 0.07 }, 0.26)
  tl.to('[data-hero="panel"]', { opacity: 1, y: 0, scale: 1, startAt: { opacity: 0, y: 24, scale: 0.96 }, duration: 0.9 }, 0.3)
  tl.to('[data-hero="sub"]', { ...fadeUp(16), duration: 0.7 }, 0.56)
  tl.to('[data-hero="cta"]', { ...fadeUp(12), duration: 0.6, stagger: 0.08 }, 0.68)
}

function panel() {
  const el = document.querySelector<HTMLElement>('[data-panel]')
  if (!el) return
  const locale = el.dataset.locale === 'en' ? 'en-US' : 'pt-BR'
  const fmt = (n: number) => Math.round(n).toLocaleString(locale)
  const counters = q<HTMLElement>('[data-count]', el)
  const values = counters.map((c) => Number(c.dataset.count))
  const state = values.map(() => ({ v: 0 }))
  counters.forEach((c) => (c.textContent = '0'))
  state.forEach((s, i) =>
    gsap.to(s, {
      v: values[i],
      duration: 1.2,
      delay: 0.9,
      ease: 'power2.out',
      onUpdate: () => (counters[i].textContent = fmt(s.v)),
    }),
  )

  const line = el.querySelector<SVGPolylineElement>('[data-line]')!
  const area = el.querySelector<SVGPolygonElement>('[data-area]')!
  let points = line.getAttribute('points')!.split(' ').map((p) => Number(p.split(',')[1]))
  const draw = (pts: number[]) => {
    const str = pts.map((y, i) => `${((i * 300) / (pts.length - 1)).toFixed(1)},${y}`).join(' ')
    line.setAttribute('points', str)
    area.setAttribute('points', `0,64 ${str} 300,64`)
  }
  const len = 400
  gsap.fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1, delay: 1, ease: 'power2.out' })
  gsap.fromTo(area, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.2 })

  const rate = el.querySelector<HTMLElement>('[data-rate]')!
  const logs = el.querySelector<HTMLElement>('[data-logs]')!
  const templates: [string, string, () => string][] = [
    ['GET', 'get', () => `/products?store=${10 + Math.floor(Math.random() * 80)} 200`],
    ['POST', 'post', () => '/orders 201'],
    ['PUT', 'put', () => '/stock/batch 200'],
    ['HOOK', 'hook', () => (Math.random() > 0.5 ? 'webhook mercadolivre ok' : 'webhook pagamento ok')],
    ['JOB', 'job', () => (Math.random() > 0.5 ? 'job sync-stock done' : 'job reconcile-finance done')],
    ['GET', 'get', () => '/customers/me 200'],
    ['HOOK', 'hook', () => 'webhook magalu ok'],
  ]
  let clock = new Date(2026, 10, 8, 15, 58, 7)
  const pad = (n: number) => String(n).padStart(2, '0')

  function addLog() {
    clock = new Date(clock.getTime() + 1000 * (1 + Math.floor(Math.random() * 2)))
    const [kind, cls, msg] = templates[Math.floor(Math.random() * templates.length)]
    const dur = cls === 'job' ? `${(0.6 + Math.random() * 1.6).toFixed(1)}s` : `${3 + Math.floor(Math.random() * 90)}ms`
    const row = document.createElement('div')
    row.className = 'row fresh'
    row.innerHTML = `<span class="time">${pad(clock.getHours())}:${pad(clock.getMinutes())}:${pad(clock.getSeconds())}</span><span class="kind ${cls}">${kind}</span><span class="msg"></span><span class="dur">${dur}</span>`
    row.querySelector('.msg')!.textContent = msg()
    logs.querySelector('.row.fresh')?.classList.remove('fresh')
    logs.appendChild(row)
    gsap.fromTo(row, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.45, ease })
    while (logs.children.length > 9) logs.firstElementChild?.remove()
  }

  let running = true
  const io = new IntersectionObserver(([entry]) => (running = entry.isIntersecting))
  io.observe(el)

  function loop() {
    gsap.delayedCall(0.8 + Math.random() * 0.8, () => {
      if (running && !document.hidden) {
        addLog()
        state.forEach((s, i) => {
          const inc = i === 0 ? 4 + Math.floor(Math.random() * 9) : Math.random() > 0.6 ? 1 : 0
          values[i] += inc
          counters[i].textContent = fmt(values[i])
        })
        points = [...points.slice(1), Math.max(4, Math.min(40, points[points.length - 1] + (Math.random() * 10 - 5)))]
        draw(points)
        const r = 6 + Math.random() * 2.5
        rate.textContent = r.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      }
      loop()
    })
  }
  gsap.delayedCall(2.2, () => {
    line.style.strokeDasharray = ''
    line.style.strokeDashoffset = ''
    loop()
  })
}

function marquee() {
  const wrap = document.querySelector<HTMLElement>('[data-marquee]')
  const track = document.querySelector<HTMLElement>('[data-marquee-track]')
  if (!wrap || !track) return
  const tween = gsap.to(track, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
  wrap.addEventListener('mouseenter', () => gsap.to(tween, { timeScale: 0, duration: 0.3 }))
  wrap.addEventListener('mouseleave', () => gsap.to(tween, { timeScale: 1, duration: 0.3 }))
}

function impact() {
  const section = document.querySelector('[data-impact]')
  const title = document.querySelector('[data-impact-title]')
  if (!section || !title) return
  const nums = q<HTMLElement>('[data-num]', section)
  const render = (el: HTMLElement, v: number) => {
    const f = el.dataset.format
    if (f === 'tilde') el.textContent = v >= 999_500 ? '~1M' : v >= 1000 ? `~${Math.round(v / 1000)}k` : `~${Math.round(v)}`
    else if (f === 'dec') el.textContent = v.toFixed(1).replace('.', el.dataset.decimal ?? '.')
    else el.textContent = String(Math.round(v))
  }
  nums.forEach((el) => render(el, Number(el.dataset.from ?? 0)))
  onEnter(title, (tl) => {
    tl.to(title, { ...fadeUp(24), duration: 0.7 }, 0)
    tl.to(q('[data-impact-card]', section), { ...fadeUp(24), duration: 0.7, stagger: 0.1 }, 0.15)
    nums.forEach((el) => {
      const s = { v: Number(el.dataset.from ?? 0) }
      tl.to(s, { v: Number(el.dataset.num), duration: 1.6, ease: 'power3.out', onUpdate: () => render(el, s.v) }, 0.25)
    })
  })
}

function sectionHeads() {
  q('[data-section-head]').forEach((head) => {
    onEnter(head, (tl) => {
      tl.to(q('[data-head="label"]', head), { ...fadeUp(16), duration: 0.6 }, 0)
      tl.to(q('[data-head="title"]', head), { ...fadeUp(24), duration: 0.7, stagger: 0.08 }, 0)
    })
  })
}

function projects() {
  const fine = window.matchMedia('(pointer: fine)').matches
  q('[data-project]').forEach((card) => {
    const media = card.querySelector('[data-media]')!
    onEnter(card, (tl) => {
      tl.to(card, { ...fadeUp(40), duration: 0.8 }, 0)
      tl.to(q('[data-item]', card).slice(0, 3), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.15)
      tl.to(q('.decisions [data-item]', card), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.39)
      tl.to(q('[data-tag]', card), { ...fadeUp(12), duration: 0.5, stagger: 0.03 }, 0.7)
      tl.to(q('.links [data-item]', card), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.9)
      tl.to(media, { opacity: 1, scale: 1, startAt: { opacity: 0, scale: 1.04 }, duration: 0.9 }, 0.1)
    })

    q('[data-parallax]', card).forEach((img) => {
      gsap.fromTo(img, { y: 40 }, { y: -40, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } })
    })

    if (!fine) return
    const glow = card.querySelector<HTMLElement>('.project-glow')!
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.15, ease: 'power2.out' })
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.15, ease: 'power2.out' })
    gsap.set(card, { transformPerspective: 1200 })
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      ry((px - 0.5) * 8)
      rx(-(py - 0.5) * 8)
      glow.style.setProperty('--mx', `${px * 100}%`)
      glow.style.setProperty('--my', `${py * 100}%`)
    })
    card.addEventListener('pointerleave', () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.4, ease: 'power2.out' }))
  })
}

function experience() {
  const timeline = document.querySelector<HTMLElement>('[data-timeline]')
  const fill = document.querySelector<HTMLElement>('[data-timeline-fill]')
  if (!timeline || !fill) return
  const jobs = q('[data-job]', timeline)
  gsap.fromTo(
    fill,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: jobs[0], endTrigger: jobs[jobs.length - 1], start: 'top 60%', end: 'top 60%', scrub: true },
    },
  )
  jobs.forEach((job) => {
    const marker = job.querySelector('[data-marker]')!
    ScrollTrigger.create({
      trigger: job,
      start: 'top 60%',
      onEnter: () => marker.classList.add('on'),
      onLeaveBack: () => marker.classList.remove('on'),
    })
    onEnter(job, (tl) => {
      tl.to(job, { opacity: 1, x: 0, startAt: { opacity: 0, x: 24 }, duration: 0.7 }, 0)
      tl.to(q('[data-job-part]', job), { ...fadeUp(8), duration: 0.5, stagger: 0.06 }, 0.1)
      tl.to(q('[data-job-tag]', job), { ...fadeUp(8), duration: 0.5, stagger: 0.03 }, 0.25)
    })
  })
}

function stackGrid() {
  const grid = document.querySelector('[data-stack-grid]')
  if (!grid) return
  onEnter(grid, (tl) => {
    q('[data-stack-card]', grid).forEach((card, i) => {
      const at = 0.1 + i * 0.08
      tl.to(card, { ...fadeUp(24), duration: 0.6 }, at)
      tl.to(q('[data-stack-item]', card), { opacity: 1, duration: 0.3, stagger: 0.02 }, at + 0.1)
    })
  })
}

function about() {
  const section = document.querySelector('[data-about]')
  if (!section) return
  const photo = section.querySelector('[data-photo]')!
  const img = photo.querySelector('img')!
  onEnter(section, (tl) => {
    tl.to(q('[data-about-head]', section), { ...fadeUp(24), duration: 0.7 }, 0)
    tl.fromTo(photo, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9 }, 0.1)
    tl.fromTo(img, { scale: 1.06 }, { scale: 1, duration: 0.9 }, 0.1)
    tl.to(q('[data-about-text]', section), { ...fadeUp(16), duration: 0.7 }, 0.25)
    tl.to(q('[data-about-edu]', section), { opacity: 1, duration: 0.5 }, 0.5)
  })
}

function contact() {
  const section = document.querySelector('[data-contact]')
  if (!section) return
  onEnter(section, (tl) => {
    tl.to(q('[data-contact-head]', section), { ...fadeUp(16), duration: 0.6 }, 0)
    tl.to(q('[data-contact-word]', section), { y: 0, duration: 0.8, stagger: 0.07 }, 0)
    tl.to(q('[data-contact-text]', section), { ...fadeUp(16), duration: 0.7 }, 0.2)
    tl.to(q('[data-contact-link]', section), { ...fadeUp(12), duration: 0.5, stagger: 0.08 }, 0.3)
  })
}

const root = document.documentElement
const motion = root.classList.contains('motion')

if (motion) {
  gsap.registerPlugin(ScrollTrigger)
  root.classList.add('motion-ready')
  const lenis = setupLenis()
  heroIntro()
  panel()
  marquee()
  impact()
  sectionHeads()
  projects()
  experience()
  stackGrid()
  about()
  contact()
  window.addEventListener('menu', (e) => ((e as CustomEvent<boolean>).detail ? lenis.stop() : lenis.start()))
  window.addEventListener('load', () => ScrollTrigger.refresh())
}
