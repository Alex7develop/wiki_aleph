# Документация по проекту Alephtrade Wiki Frontend

## Оглавление
1. Введение
2. Архитектура и структура проекта
3. Описание основных компонентов
4. Работа с API
5. Стилизация и адаптивность
6. Best practices
7. Разработка и поддержка

---

## 1. Введение

Этот проект — современный фронтенд для корпоративного wiki и файлового хранилища компании Алефтрейд. Он реализован на React + TypeScript с использованием Vite и styled-components. Проект полностью адаптивен и поддерживает мобильные устройства.

## 2. Архитектура и структура проекта

```
├── src/
│   ├── assets/         # Изображения, иконки, SVG
│   ├── components/     # UI-компоненты (Header, FileList и др.)
│   ├── config/         # Конфигурационные файлы (например, aws.ts)
│   ├── services/       # Работа с API и S3
│   ├── App.tsx         # Главный компонент приложения
│   ├── main.tsx        # Точка входа
│   └── index.css       # Глобальные стили
├── .gitignore
├── README.md
├── DOCUMENTATION.md    # Подробная документация
└── ...
```

## 3. Описание основных компонентов

### Header
- Фиксированная шапка с логотипом по центру и навигацией.
- На мобильных — бургер-меню.
- Использует styled-components для стилизации.

### FileList
- Получает список файлов с backend API.
- Отображает файлы в виде карточек с иконкой папки, названием, путем и ссылкой.
- Полностью адаптивен: на мобильных — одна колонка, на десктопе — сетка.

### services/s3Service.ts
- Содержит функцию для получения списка файлов с backend.
- Типизация ответа API.

## 4. Работа с API

- Все файлы получаются с backend по адресу:
  `GET https://backend.wiki.alephtrade.com/api/list`
- Ответ содержит массив файлов с полями: name, path, url.
- Для интеграции с другим API достаточно изменить функцию в services/s3Service.ts.

## 5. Стилизация и адаптивность

- Используется styled-components.
- Все размеры, отступы и шрифты адаптируются под мобильные устройства.
- Сетка файлов реализована через CSS Grid с auto-fit/auto-fill.
- Цвета и шрифты соответствуют фирменному стилю Alephtrade.

## 6. Best practices
- Используйте только типизированные данные (TypeScript).
- Не храните секретные ключи и пароли в коде или в публичных репозиториях.
- Для новых компонентов используйте styled-components и следуйте единому стилю.
- Все компоненты должны быть максимально изолированы и переиспользуемы.
- Для работы с API используйте сервисы (services/), не делайте fetch прямо в компонентах.
- Для глобальных стилей используйте index.css и theme.
- Всегда пишите комментарии к сложным участкам кода.

## 7. Разработка и поддержка
- Для запуска используйте `npm install` и `npm run dev`.
- Для сборки — `npm run build`.
- Для добавления новых страниц используйте React Router.
- Для новых API — добавляйте сервисы в services/.
- Для новых иконок и изображений — assets/.

---

**Вопросы и предложения:**
Обращайтесь к команде Alephtrade IT Team. 