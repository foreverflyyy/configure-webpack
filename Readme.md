Представленный код в этом проекте предназначен для сайта Meet up. [MeetUp](https://meetup.com).

## Getting Started

Для начала, чтобы запустить проект, пропишите команды:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть результат.

## Другие варианты запуска

Также данный проект можно запустить с помощью Docker, прописав команду:

```bash
# для dev:
docker build -t web-events-app-dev -f Dockerfile .
docker run -p 3000:3000 web-events-app-dev

# для prod:
docker build -t web-events-app-prod -f Dockerfile.prod .
docker run -p 3000:3000 web-events-app-prod
```

## Посмотреть Deploy версию в Vercel

Вы можете посмотреть задеплоиную версию приложения [ по ссылке.](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
