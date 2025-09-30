# Solo Builder

> **🚀 Developer Preview**: Solo Builder SDK is currently in beta. Use it for experimentation and prototyping. Production use is at your own discretion.

<p align="center">
    <img src="https://raw.githubusercontent.com/SoloWave-Lab/Solo-Builder/refs/heads/main/Screenshot.png" alt="Solo Builder Screenshot" width="800" />
</p>

<p align="center">
    Transform your ideas into fully functional apps with Solo Builder's AI-powered platform, featuring real-time previews, authentication, and multi-tenant support.
</p>

<p align="center">
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#setup"><strong>Setup</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a>
</p>
<br/>

---

## Deploy Your Own

Launch your personal Solo Builder app on Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSoloWave-Lab%2FSolo-Builder&env=V0_API_KEY,AUTH_SECRET&envDescription=Get+your+v0+API+key&envLink=https%3A%2F%2Fv0.app%2Fchat%2Fsettings%2Fkeys&products=%255B%257B%2522type%2522%253A%2522integration%2522%252C%2522protocol%2522%253A%2522storage%2522%252C%2522productSlug%2522%253A%2522neon%2522%252C%2522integrationSlug%2522%253A%2522neon%2522%257D%255D&project-name=solo-builder&repository-name=solo-builder&demo-title=Solo+Builder&demo-description=A+Next.js-powered+Solo+Builder+app+with+AI+Elements&demo-url=https%3A%2F%2Fsolo-builder-demo.vercel.app)


---

## Setup

### Environment Variables

Create a `.env` file with the following configuration:

```bash
AUTH_SECRET=your-auth-secret-here
POSTGRES_URL=postgresql://user:password@localhost:5432/solo_builder
SOLO_API_KEY=your_solo_api_key_here
# Optional: Custom API URL
```

### Database Setup

Initialize your database with Drizzle ORM:

```bash
pnpm db:generate  # Generate migration files
pnpm db:migrate   # Apply migrations
pnpm db:studio    # Optional: Open Drizzle Studio
```

---

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to explore your Solo Builder.

---

## Usage

1. **Anonymous Mode**: Visit the homepage and start building apps (3 builds/day)  
2. **Guest Mode**: Register for a temporary account (5 builds/day)  
3. **Full Account**: Create a permanent account for maximum usage (50 builds/day)  
4. Enable/disable **Streaming Mode** from the header for live AI feedback  
5. Enter prompts describing the app you want to create  
6. Watch Solo Builder generate your app in real-time  
7. Iterate with continuous AI feedback  
8. All chats and builds are automatically saved for authenticated users  

---

## Security & Performance

- Passwords are securely hashed with bcrypt  
- Secure session cookies and CSRF protection  
- SQL injection prevention via Drizzle ORM  
- Multi-tenant data isolation ensures your data stays private  
- Rate limits applied per user type to maintain system performance  

### User Types & Rate Limits

| User Type   | Account    | Daily Limit | Data Persistence |
|------------|------------|------------|----------------|
| Anonymous  | None       | 3 builds   | None           |
| Guest      | Temporary  | 5 builds   | During session |
| Registered | Permanent  | 50 builds  | Across sessions |

---

Experience the **next-level app building** with Solo Builder. Explore [Solo Builder SDK]() to unlock its full potential and build smarter, faster, and better.
