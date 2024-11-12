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

## Урок 7: Хуки частина 2, кастомні хуки

Хуки для оптимізації в React - це функціональні API, які дозволяють покращити продуктивність компонентів та ефективно
використовувати ресурси. Принцип їх роботи полягає в тому, щоб уникнути зайвих рендерів, непотрібного обчислення та
зберігання незмінних значень між рендерами.

### 1. `useMemo`

Хук `useMemo` дозволяє кешувати та меморізувати значення, які залежать від вхідних пропсів або змінних. Він
використовує пам'ять, щоб зберегти попередні значення та повертати їх без зайвих обчислень.

### 2. `useCallback`

Хук `useCallback` дозволяє кешувати функції та використовувати їх знову, якщо залежності не змінилися. Це
корисно для передачі функцій у дочірні компоненти, оскільки вони не перерендерюються без потреби.

### 3. `React.memo()`

Хуки, такі як `React.memo()` і `useMemo`, дозволяють кешувати результати попереднього рендерингу компонента
або обчислення значень. При наступних рендерах ці значення повторно використовуються, якщо пропси або залежності не змінилися,
що допомагає уникнути зайвих обчислень.

### 4. `Кастомні хуки`

`Кастомні хуки` - це функції, які використовуються для спільного використання логіки між компонентами у React. Вони дозволяють вам витягнути
спільну функціональність з компонентів і перенести її в окремий хук, який можна повторно використовувати в будь-якому компоненті.

Приклади:

`useValidation` - хук для валідації форм або полів на основі правил валідації.
`useMediaQuery` - хук для відстежування змін розміру екрану або медіа-запитів.
`useLocalStorageState` - хук, який комбінує функціонал `useState` зі збереженням стану в локальному сховищі браузера.
`useDebounce` - хук для відкладеного виклику функції після зміни значення протягом певного періоду часу.
`useTheme` - хук для роботи з темами і стилями в програмі.

Бібліотека `react-use` є набором корисних кастомних хуків для React, які допомагають спростити розробку і покращити продуктивність ваших додатків.
Вона містить широкий спектр хуків для різних використань, включаючи роботу зі станом, ефектами, клавіатурою, мережею, анімаціями та багато іншого.


## Урок 8: Стилізація

### 1. Вбудовані стилі

Вбудовані стилі (inline styles) застосовуються безпосередньо до HTML-елементів за допомогою атрибуту `style`. Це дозволяє швидко додати стилі до окремих елементів.

Переваги:
Швидке та просте застосування.
Добре підходить для тестування та налагодження.

Недоліки:
Не масштабуються для великих проектів.
Важко підтримувати та змінювати.
Неможливо повторно використовувати стилі.

### 2. Звичайний CSS

Звичайний CSS використовується для стилізації HTML через зовнішні файли або секції `style` в HTML-документах. Стилі можуть бути застосовані до багатьох елементів одночасно.

Переваги:
Чітка структура та організація стилів.
Легкість в підтримці та масштабуванні.
Можливість повторного використання стилів.

Недоліки:
Можуть виникати конфлікти імен класів.
Залежить від правильного підключення файлів.

### 3. CSS модулі

CSS модулі дозволяють уникнути конфліктів імен класів, створюючи унікальні класи, обмежені певним компонентом.

Переваги:
Уникнення конфліктів імен класів.
Локальні стилі для компонентів.

Недоліки:
Додаткова конфігурація для налаштування.
Можуть бути складними для новачків.

### 4. CSS in JS

CSS in JS дозволяє писати стилі безпосередньо в JavaScript-коді, що забезпечує динамічне застосування стилів.

Переваги:
Легкість динамічного застосування стилів.
Можливість використовувати JavaScript-логіку для стилізації.

Недоліки:
Може бути складним для налагодження.
Збільшення розміру JavaScript-файлів.

## Урок 9: Форми

### 1. Неконтрольовані елементи

Неконтрольовані елементи — це елементи форми, стан яких керується самим DOM. У React вони реалізуються за допомогою `ref`.

### Приклад використання

```jsx
import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

### 2. Контрольовані елементи
Контрольовані елементи — це елементи форми, стан яких повністю контролюється React. Всі зміни стану відстежуються через стан компонента.

### Приклад використання

```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

### 3. Складні форми
Складні форми можуть містити безліч контрольованих та неконтрольованих елементів, а також додаткову логіку валідації та обробки.

### Приклад використання

```jsx
import React, { useState } from 'react';

function ComplexForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Data: ${JSON.stringify(formState)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ComplexForm;
```

### 4. Бібліотеки для роботи з формами
Існує безліч бібліотек для роботи з формами у React, які спрощують керування станом та валідацією форм. Найпопулярніші з них:

### Formik
Formik — це бібліотека для створення форм у React, яка надає зручні інструменти для керування станом та валідацією.
npm install formik

### Приклад використання

```jsx
import React from 'react';
import { useFormik } from 'formik';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(`Form Data: ${JSON.stringify(values)}`);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikForm;
```

### React Hook Form
React Hook Form — це бібліотека, яка використовує хуки для керування формами та валідації.
npm install react-hook-form

### Приклад використання

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`Form Data: ${JSON.stringify(data)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email')} />
      <input type="password" {...register('password')} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactHookForm;
```

## Урок 10: HTTP запити та Робота з REST API

Цей урок присвячений роботі з HTTP запитами та REST API. Ми розглянемо процес обробки запитів, завантаження даних, обробку помилок та використання бібліотеки react-query для управління станом запитів у React.

### 1. Обробка процесу завантаження

Коли ми відправляємо HTTP запит, важливо враховувати час, який потрібен серверу для обробки запиту та повернення відповіді. Під час цього періоду ми зазвичай показуємо користувачу індикатор завантаження, щоб він знав, що запит обробляється.

### Приклад використання

```jsx
import React, { useState, useEffect } from 'react';

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  return <div>Дані: {JSON.stringify(data)}</div>;
}

export default DataLoader;
```

### 2. Обробка помилок

При роботі з HTTP запитами завжди є ймовірність виникнення помилок (наприклад, проблеми з мережею або неправильний URL). Ми повинні обробляти ці помилки, щоб користувач бачив відповідні повідомлення про помилки.

### Приклад використання

```jsx
import React, { useState, useEffect } from 'react';

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error.message}</div>;
  }

  return <div>Дані: {JSON.stringify(data)}</div>;
}

export default DataLoader;
```

### 3. Бібліотека react-query

react-query - це бібліотека для управління станом запитів у React. Вона надає простий та ефективний спосіб роботи з запитами, обробкою завантаження та помилок, а також кешуванням даних.

Встановлення
npm install react-query

### Приклад використання

```jsx
import React from 'react';
import { useQuery } from 'react-query';

async function fetchData() {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

function DataLoader() {
  const { data, error, isLoading } = useQuery('data', fetchData);

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error.message}</div>;
  }

  return <div>Дані: {JSON.stringify(data)}</div>;
}

export default DataLoader;
```

Переваги використання react-query:
- Автоматичне управління станом завантаження та помилок
- Кешування даних для зменшення кількості запитів
- Простий та зрозумілий API

## Урок 11: Реакт роутинг, частина 1
У цьому уроці ми розглянемо основи роботи з бібліотекою React Router, включаючи базовий роутинг, вкладені роути та використання важливих компонентів.

## 1. URL
URL (Uniform Resource Locator) – це адреса ресурсу в інтернеті. У контексті React Router URL є шляхом, який визначає, який компонент буде відображено.

## 2. Бібліотека React Router
React Router – це популярна бібліотека для управління маршрутизацією у React-додатках. Вона дозволяє легко створювати односторінкові додатки (SPA) з динамічним переходом між сторінками без перезавантаження.

## 3. Базовий роутинг: Routes та Route
Routes та Route є основними компонентами React Router для визначення маршрутизації в додатку. Routes обгортає усі Route компоненти, а кожен Route відповідає за відображення певного компонента за відповідним шляхом.

### Приклад використання

```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
```
## 4. Вкладені роути
Вкладені роути дозволяють організовувати маршрути всередині інших маршрутів. Це корисно для побудови ієрархії сторінок та логічного структурування додатку.

### Приклад використання

```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```
## 5. Компонент Outlet
Outlet використовується для рендерингу дочірніх компонентів у вкладених маршрутах. Це "місце" в батьківському компоненті, де буде відображено відповідний дочірній компонент.

## Приклад використання

```jsx
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  );
}
```
## 6. Компоненти Link та NavLink
Link та NavLink – це компоненти, які використовуються для навігації між маршрутами. Link створює посилання на інші сторінки, а NavLink додатково дозволяє визначати активний стан посилання.

## Приклад використання

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
}
```
## Урок 12: Реакт роутинг, частина 2

## 1. Робота з історією

React Router дозволяє нам взаємодіяти зі стеком історії браузера, що полегшує програмне управління навігацією.

- useNavigate(): Хук, який надає можливість програмно переходити на різні маршрути.

## Приклад використання

```jsx
const navigate = useNavigate();
navigate('/шлях');
```

- useHistory() (застарілий у версії v6): У попередніх версіях React Router цей хук використовувався для доступу до об’єкта історії. Тепер рекомендується використовувати useNavigate.

## 2. Приватні маршрути

Приватні маршрути важливі для обмеження доступу до певних частин додатка лише для авторизованих користувачів.

Компонент PrivateRoute: Ви можете створити кастомний компонент, який перевіряє, чи користувач авторизований, перш ніж відобразити маршрут.

## Приклад використання

```jsx
const PrivateRoute = ({ children }) => {
  const isAuthenticated = // додайте вашу логіку автентифікації
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

## 3. Програмна навігація

React Router надає інструменти для програмної навігації:

- useNavigate(): Як показано вище, цей хук дозволяє програмно змінювати маршрут.

Компонент Navigate: Ви можете використовувати цей компонент для перенаправлення користувачів на інший маршрут програмно в JSX.

## Приклад використання

```jsx
<Navigate to="/новий-шлях" />
```

## 4. Хук useLocation()

Хук useLocation() використовується для отримання поточного об’єкта розташування, який містить деталі про поточний URL. Це корисно для читання параметрів запиту, шляху (pathname) або стану.

## Приклад використання

```jsx
const location = useLocation();
console.log(location.pathname);
```

## 5. Lazy Loading

Lazy loading дозволяє розбивати ваш додаток на менші частини та завантажувати код для маршруту лише тоді, коли він потрібен. Це значно покращує продуктивність великих додатків.

Функція React lazy() та компонент Suspense: Для реалізації lazy loading ми використовуємо функцію React lazy() та компонент Suspense для асинхронного завантаження компонентів.

## Приклад використання

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

return (
  <Suspense fallback={<div>Завантаження...</div>}>
    <LazyComponent />
  </Suspense>
);
```

Lazy-завантажувані маршрути: Ви також можете lazy-завантажувати маршрути безпосередньо.

## Приклад використання

```jsx
const LazyRoute = React.lazy(() => import('./LazyRoute'));

<Routes>
  <Route path="/lazy" element={<LazyRoute />} />
</Routes>
```
## Урок 13: Стейт менеджмент, useContext, Бібліотека Redux (Частина 1)

## 1. useContext

useContext — це хук у React, який дозволяє спрощено ділитися станом (state) між компонентами без необхідності передавати пропси через кожен рівень компонентів. Це корисно для уникнення "prop drilling" і створення глобального стану для певної частини програми.

## Приклад використання

```jsx
import React, { useContext } from 'react';

const MyContext = React.createContext();

const Component = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};
```
## 2. Найпопулярніші стейт менеджмент бібліотеки

Redux: найпоширеніша бібліотека для керування станом в React-програмах.
MobX: робить акцент на реактивності та простоті, зручний для невеликих проєктів.
Zustand: мінімалістична бібліотека з простим API для керування станом.
Recoil: експериментальна бібліотека від Facebook, яка підтримує асинхронні стани і атомарність даних.

## 3. Вступ до бібліотеки Redux, Redux Toolkit

Redux — це бібліотека для керування глобальним станом у програмах. Вона заснована на концепції єдиного джерела істини (Single Source of Truth) і працює за принципом dispatch/action/reducer для оновлення стану.

Redux Toolkit — це набір інструментів для спрощення використання Redux. Включає зручні утиліти для створення редюсерів, екшенів та налаштування стану.

## 4. Базове налаштування Redux Toolkit

Крок 1: Встановлення залежностей:

```jsx
npm install @reduxjs/toolkit react-redux
```
Крок 2: Створення Redux сховища за допомогою configureStore:

## Приклад використання

```jsx
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // додайте ваші редюсери тут
  },
});

export default store;
```
Крок 3: Додавання Redux Provider до React-програми:

## Приклад використання

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
## Урок 14: README для Бібліотеки Redux (Частина 2)

## 1. createSlice()
createSlice() — це функція з Redux Toolkit, яка спрощує створення ред'юсерів та дій Redux в одному об'єкті. Вона автоматично генерує створювачі дій і типи дій, що зменшує кількість шаблонного коду.

## Приклад використання

```jsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```
## 2. configureStore()
configureStore() — це функція Redux Toolkit, що налаштовує Redux стор із розумними за замовчуванням параметрами, такими як підтримка Redux DevTools та спрощена інтеграція з middleware.

## Приклад використання

```jsx
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

export default store;
```
## 3. useDispatch()
useDispatch() — це хук із React-Redux, який дозволяє виконувати дії (dispatch actions) всередині компонента.

## Приклад використання

```jsx
import { useDispatch } from 'react-redux';
import { increment } from './counterSlice';

const CounterComponent = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Збільшити
    </button>
  );
};
```
## 4. useSelector()
useSelector() — це хук із React-Redux, який дозволяє вибирати частину стану (state) з Redux стору.

## Приклад використання

```jsx
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);

  return <div>Лічильник: {count}</div>;
};
```
## 5. Рекомендована структура папок
Щоб організувати логіку Redux, рекомендується використовувати таку структуру проєкту:

## Приклад використання

```jsx
src/
|-- app/
|   |-- store.js         # Конфігурація Redux стору
|
|-- features/
|   |-- counter/
|       |-- counterSlice.js   # Логіка слайсу лічильника
|       |-- CounterComponent.js # Компонент, що використовує логіку лічильника
|
|-- hooks/
|   |-- useCustomHook.js # Кастомні хуки, якщо потрібно
|
|-- services/            # API сервіси, асинхронна логіка
```
## 6. Робота з асинхронними операціями
У Redux для обробки побічних ефектів (таких як виклики API) використовується middleware. Найпоширеніший підхід — це використання createAsyncThunk() для обробки асинхронної логіки, наприклад, отримання даних із сервера.

## Приклад використання

```jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (userId) => {
    const response = await fetch(`/api/user/${userId}`);
    return response.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default userSlice.reducer;
```
## 7. createAsyncThunk()
createAsyncThunk() — це функція з Redux Toolkit, що спрощує процес обробки асинхронної логіки та автоматично диспетчить дії життєвого циклу (pending, fulfilled, rejected) залежно від статусу асинхронної операції.

## Приклад використання

```jsx
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('/api/posts');
  return response.json();
});

// У слайсі обробляємо pending, fulfilled і rejected дії автоматично.
const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      });
  }
});
```
## Урок 15: Знайомство з React Native

У цьому уроці ми познайомимося з React Native – фреймворком для розробки мобільних додатків, який дозволяє використовувати знання React для створення кросплатформених додатків під iOS та Android.

### Тема уроку
- **React Native - що це таке**: Основи та призначення фреймворку, його особливості для розробки мобільних додатків.
- **Створення проекту**: Покрокове створення нового проекту з використанням React Native.
- **Документація**: Основні джерела та ресурси для навчання і роботи з React Native, як працювати з офіційною документацією.
- **Середовище розробки**: Налаштування середовища розробки для роботи з React Native, огляд необхідних інструментів (наприклад, Android Studio, Xcode, Expo).
- **Відмінність React від React Native**: Основні розбіжності між React (для веб-додатків) та React Native (для мобільних додатків), у чому відмінності у компонентах та методах роботи.

## Вимоги до середовища розробки
- **Node.js** та **npm** / **yarn**
- **Android Studio** або **Xcode** (для відповідної платформи)
- **Expo CLI** (за бажанням для швидкого запуску проектів)

## Ресурси
- [React Native Офіційна документація](https://reactnative.dev/docs/getting-started)
- [Expo](https://expo.dev/) - інструмент для швидкого налаштування і тестування React Native додатків.

## Урок 16: Теги і робота з данними

У цьому уроці ви дізнаєтеся, як працювати з основними компонентами React Native для створення інтерфейсів, що дозволяють вводити, обробляти та зберігати дані. Ми також розглянемо використання AsyncStorage для збереження даних локально, що дозволяє додатку зберігати інформацію між сесіями.

## 1. Огляд базових компонентів

Ознайомлення з основними компонентами React Native, що необхідні для створення форм і роботи з текстовими даними.
Компонент Text: використовується для відображення статичного або динамічного тексту на екрані. Важливий для додавання підписів, інструкцій або заголовків у додаток.
Компонент TextInput: призначений для отримання текстових даних від користувача. Ми навчимося використовувати цей компонент для введення тексту, налаштування його стилю, обмеження довжини введених даних і додавання підказок.
Компонент Button: дозволяє створювати кнопки для взаємодії з користувачем. Розглянемо налаштування обробки подій натискання, що є основою для збереження або скасування введених даних.

## 2. Введення даних

Створення форми: Ми розробимо просту форму для введення текстових даних, яка дозволить користувачеві вводити та надсилати інформацію.
Підключення обробників подій: налаштуємо функції, що будуть обробляти введення даних у TextInput, слідкувати за змінами в полі, і зберігати ці дані у стані компоненту.
Використання стану: використання useState для керування введеними даними, що дозволяє React Native динамічно оновлювати інтерфейс відповідно до введення користувача.

## 3. Обробка даних

Валідація даних: перед збереженням даних проведемо базову валідацію (наприклад, перевірку на пусте поле або формат тексту). Валідація допоможе забезпечити, що користувачі вводять коректну інформацію, з якою додаток може коректно працювати.
Керування станом компонентів: збережемо введені дані в стані за допомогою useState, що дозволяє легко контролювати інформацію всередині компоненту.
Створення функцій для обробки подій: напишемо функції для обробки натискання на кнопку — збереження даних у AsyncStorage та їх завантаження. Такі функції допомагають забезпечити чітке керування даними, що зберігаються.

## 4. AsyncStorage

Що таке AsyncStorage?: це сховище для збереження даних на локальному пристрої. На відміну від стану компонентів, дані в AsyncStorage зберігаються між сесіями, тобто не зникають після перезапуску додатка.
Підключення AsyncStorage: встановимо і налаштуємо бібліотеку @react-native-async-storage/async-storage, яка надає простий у використанні API для роботи з локальним сховищем.
Збереження даних: створимо функцію для збереження введених користувачем даних у локальне сховище. Використовуючи метод AsyncStorage.setItem(), можна зберігати пари "ключ-значення" для подальшого доступу.
Завантаження даних: додамо функцію для отримання даних з AsyncStorage за допомогою AsyncStorage.getItem(). Це дозволить при повторному запуску додатка відновлювати збережену інформацію і відображати її в інтерфейсі.
Видалення та оновлення даних: розглянемо методи для оновлення існуючих даних або їх очищення за допомогою AsyncStorage.removeItem(), що забезпечує більш гнучке управління даними в додатку.

## Команди для встановлення залежностейПриклад використання

```jsx
npm install @react-native-async-storage/async-storage
```
## Додаткові ресурси

[React Native Офіційна документація](https://reactnative.dev/docs/getting-started)
[AsyncStorage для React Native на GitHub](https://github.com/react-native-async-storage/async-storage)

## Урок 17: Використання стилів у React Native

React Native підтримує стилі, подібні до CSS у веб-розробці, проте синтаксис та підхід мають свої особливості. Стилі в React Native задаються у вигляді JavaScript-об'єктів, а всі стилі визначаються з використанням властивостей `StyleSheet`, `inline-стилів` чи зовнішніх бібліотек.

## 1. Стилізація з використанням StyleSheet

`StyleSheet` - це вбудований метод React Native для створення стилів. Використання цього методу підвищує продуктивність, оскільки він оптимізує об'єкти стилів під час рендерингу.

## Приклад використання

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привіт, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: '#333',
    fontSize: 18,
  },
});

export default MyComponent;
```
## 2. Inline-стилі

Inline-стилі надаються безпосередньо в JSX та корисні для простих і унікальних налаштувань стилів для конкретного компонента.

## Приклад використання

```javascript
<View style={{ backgroundColor: 'blue', padding: 10 }}>
  <Text style={{ color: 'white', fontSize: 16 }}>Привіт, React Native!</Text>
</View>
```
## 3. Flexbox у React Native

React Native підтримує Flexbox для розташування елементів на екрані. Flexbox допомагає створювати адаптивні інтерфейси, які змінюють свій вигляд в залежності від розміру екрану.

Основні властивості Flexbox у React Native:

flexDirection
justifyContent
alignItems

## Приклад використання

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
```
## 4. Динамічні стилі

Ви можете динамічно змінювати стилі залежно від стану або пропсів. Це особливо корисно для адаптивних компонентів.

## Приклад використання

```javascript
const MyComponent = ({ isActive }) => {
  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
      <Text style={styles.text}>Стилізований текст</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  activeContainer: { backgroundColor: 'lightgreen' },
});
```
## 5. Зовнішні бібліотеки стилів

Для більш комплексних стилів у React Native існують спеціальні бібліотеки. Найпопулярніші:

1. Styled Components - дозволяє створювати стилізовані компоненти з JavaScript.
    npm install styled-components
2. React Native Elements - бібліотека, що пропонує багато готових UI-компонентів.

3. NativeBase - набір компонентів, адаптованих до React Native.

## Корисні ресурси

[Документація React Native Styling](https://uk.legacy.reactjs.org/docs/faq-styling.html)
[Flexbox у React Native](https://reactnative.dev/docs/flexbox)
[Styled Components](https://styled-components.com)
