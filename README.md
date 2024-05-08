# React-practice

# React Basics Tutorial

Цей репозиторій містить уроки по основах React для новачків.

## Урок 1: Основи популярної бібліотеки

### Вступ до React
У цьому уроці ми введемо вас у світ React, популярну бібліотеку для розробки інтерфейсів користувачів. Ви дізнаєтеся, що таке React, його переваги та де можна використовувати.

### Інсталяція та налаштування середовища розробки
Ми розглянемо процес інсталяції Node.js та npm, які потрібні для розробки React додатків. Також ми налаштуємо середовище розробки для зручного написання коду.

### Створення першого React додатку
У цьому кроці ми створимо простий React додаток, щоб ви могли побачити React у дії. Ми розберемося з базовими концепціями та структурою додатку.

### Огляд структури React додатку
Ми розглянемо структуру створеного React додатку, включаючи основні файли та папки, щоб ви могли зрозуміти, як організований проект.

### Короткий огляд основних понять React
Ми проведемо швидкий огляд основних понять React, таких як компоненти, JSX, пропси, стейт тощо, які будуть далі детально розглянуті в майбутніх уроках.

## Урок 2: Знайомство з React

### JSX: що це таке та як працює
Ми детально розглянемо JSX - розширення JavaScript, яке використовується в React для створення UI-елементів. Ви дізнаєтесь, як працює JSX та як його використовувати в React додатках.

### Компоненти в React
Ми вивчимо основну концепцію React - компоненти. Дізнаємось, як створювати власні компоненти та як вони допомагають організувати код.

### Класові компоненти vs. Функціональні компоненти
Ми порівняємо два основних типи компонентів в React - класові та функціональні. Дізнаємось, коли краще використовувати кожен з них.

### Пропси (Props) та їх використання
Ми розглянемо концепцію пропсів, які дозволяють передавати дані в компоненти. Дізнаємось, як працювати з пропсами та використовувати їх для налаштування компонентів.

### Життєвий цикл компонента
Ми вивчимо життєвий цикл компонента React - спеціальні методи, які викликаються в різних точках життєвого циклу компонента. Дізнаємось, як вони працюють та як їх використовувати.

## Урок 3: State, Події

### Введення в стейт (State)
Ми розглянемо поняття стану (State) в React - спеціальний об'єкт, що визначає стан компонента. Дізнаємось, як працювати зі станом та як він використовується для зберігання даних.

### Керування станом компонента
Ми вивчимо, як змінювати стан компонента та оновлювати відображення відповідно до змін стану. Дізнаємось про методи setState() та useState() для роботи зі станом.

### Обробка подій в React
Ми дослідимо, як обробляти події в React, такі як кліки миші або введення користувача. Дізнаємось, як створювати обробники подій та реагувати на них.

### Підняття стану (Lifting State Up)
Ми розглянемо концепцію підняття стану в React, яка дозволяє спільно використовувати стан між батьківськими та дочірніми компонентами. Дізнаємось, як це працює та як це застосовується в практиці.

## Урок 4: Props

### Props

Props (властивості) - це механізм передачі даних від одного компонента до іншого в React.

### Рендер за умовою

Рендер за умовою - це спосіб відображення компонентів в залежності від певних умов.

### Рендер колекцій

Рендер колекцій - це процес відображення списку елементів з масиву або іншої структури даних.

### Ключі (Keys)

Key (ключ) - це спеціальний атрибут, який потрібно вказувати при відображенні списку елементів в React для оптимізації процесу рендерингу.

### Передача пропсів між компонентами

Передача пропсів між компонентами - це спосіб передачі даних від батьківського компонента до дочірнього в React.

## Урок 5: Життеві цикли компоннтів.

### Монтаж, оновлення та розмонтаж.

Ми розглянемо фази життєвого циклу компонентів: монтаж, оновлення та розмонтаж. Ці методи життєвого циклу дозволяють керувати поведінкою компонентів в різних фазах їх життєвого циклу, що допомагає вам підтримувати чистоту коду та оптимізувати роботу програми.

### Монтаж (Mounting)

Монтаж відбувається, коли компонент вперше відображається на екрані. У цій фазі виконується ініціалізація компонента та його додавання до DOM. Для класових компонентів цей процес керується методами життєвого циклу.

constructor(): Цей метод викликається першим під час створення екземпляра компонента. Він використовується для ініціалізації стану та прив'язки методів.
componentDidMount(): Цей метод викликається після того, як компонент вперше рендериться на екрані. Він використовується для виконання додаткових дій, таких як отримання даних з сервера або підписка на події.

### Оновлення (Updating)

Оновлення відбувається, коли стан або властивості компонента змінюються. Це може статися в результаті зміни властивостей або виклику методу setState(). Після оновлення React оновлює відображення компонента відповідно до нового стану.

componentDidUpdate(prevProps, prevState): Цей метод викликається після оновлення компонента. Він дозволяє вам виконати додаткові дії після оновлення, наприклад, взаємодія з DOM або відправка запитів на сервер.

### Розмонтаж (Unmounting)

Розмонтаж відбувається, коли компонент більше не потрібний і видаляється з DOM. Це може статися, наприклад, коли компонент приховується або коли він більше не потрібен через зміну сторінки або дію користувача.

componentWillUnmount(): Цей метод викликається перед тим, як компонент буде розмонтовано. Він використовується для виконання необхідних очисток, таких як видалення підписок або зупинка таймерів.

## Урок 6: Хуки у React

У цій лекції ми розглянемо основні хуки у фреймворку React, які дозволяють працювати зі станом та ефектами в функціональних компонентах.

### 1. `useEffect`

Хук `useEffect` використовується для виконання побічних ефектів в компонентах React. Він дозволяє виконати певний код при зміні стану компонента, після його рендерингу та інших подіях.

### 2. `useLayoutEffect`

Хук `useLayoutEffect` подібний до `useEffect`, але викликає ефекти синхронно після всіх DOM-змін, тобто перед тим, як вони будуть видимі користувачу.

### 3. `useState`

Хук `useState` дозволяє компонентам зберігати локальний стан. Він повертає масив з двома елементами: поточне значення стану та функцію, яка його оновлює.

### 4. `useReducer`

Хук `useReducer` дозволяє керувати станом складних компонентів за допомогою reducer-функції. Цей підхід зазвичай використовується для складних станів, де стан може мати багато різних дій.

### 5. `useRef`

Хук `useRef` створює посилання, що залишаються незмінними між рендерами компонента. Використовується для зберігання будь-якої інформації, яка не змінюється, або для отримання доступу до DOM-елементів.
