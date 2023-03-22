# Тестовое задание на Front-end разработчика
Необходимо сверстать приложение со слайдами в соответствии с приложенным демо-роликом. Приложение будет тестироваться в Chrome в режиме совместимости с iPad (1024x768).
- Перемещение между слайдами - через горизонтальный свайп
- Нажатие на домик ведет на первый слайд
# Установка и запуск
1. Для установки зависимостей проекта необходимо запустить команду:
~~~
npm install
~~~
2. Для сборки проекта в режиме разработки необходимо выполнить команду:
~~~
npm run build:dev
~~~
3. Для запуска проекта в режиме разработки необходимо выполнить команду:
~~~
npm start
~~~
Это запустит dev-сервер на порту 3000, после чего вы сможете открыть приложение в браузере по адресу http://localhost:3000.

4. Запустите сборку в режиме "Production" для подготовки проекта к публикации на сайте
~~~
npm run build:prod
~~~
# Структура проекта
* `src/index.tsx` - точка входа в приложение
* `src/components/` - компоненты приложения
* `build/` - папка с собранным приложением
