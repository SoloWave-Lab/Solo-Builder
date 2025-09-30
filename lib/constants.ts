export const DUMMY_PASSWORD =
  '$2b$10$k7L3lUJhDLKBGbz4Yf8ZJe9Yk6j5Qz1Xr2Wv8Ts7Nq9Mp3Lk4Jh6Fg'

export const guestRegex = /^guest-[a-zA-Z0-9_-]+@example\.com$/

export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development'

export const DEPLOY_URL =
  'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSoloWave-Lab%2FSolo-Builder&env=V0_API_KEY,AUTH_SECRET&envDescription=Get+your+v0+API+key&envLink=https%3A%2F%2Fv0.app%2Fchat%2Fsettings%2Fkeys&products=%255B%257B%2522type%2522%253A%2522integration%2522%252C%2522protocol%2522%253A%2522storage%2522%252C%2522productSlug%2522%253A%2522neon%2522%252C%2522integrationSlug%2522%253A%2522neon%2522%257D%255D&project-name=solo-builder&repository-name=solo-builder&demo-title=Solo+Builder&demo-description=A+Next.js-powered+Solo+Builder+app+with+AI+Elements&demo-url=https%3A%2F%2Fsolo-builder-demo.vercel.app'
