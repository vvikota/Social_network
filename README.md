
# Социальная сеть на React/Redux(+конспект)


## Роутинг, маршрутизация:

  вместо `<a href="/profile">Profile</a>` пишем `<Navlink to="/profile">Profile</Navlink>`  
  import NavLink from "react-router-dom"  
  `<Navlink activeClassName={activeLink}></Navlink>` (для активной ссыллки будет добавляться класс activeLink)  
  
  установить пакет: npm i react-router-dom -save (-save для сохранения в package.json)  
  в файле где происходит переключение экранов: import {BrowserRouter, Route} from "react-router-dom"  
  навигацию обернуть в тег `<BrowserRouter>`, пути для переключения оформить   
  `<Route exact path='/dialogs' component={Dialogs} />` (компонент Dialogs отрендерится при актуальном пути path='/dialogs')  
  добавляется exact в том случае если нужно точное соответствие пути path='/dialogs'  
  для передачи пропсов через Route `<Route exact path='/dialogs' render={() => <Dialogs />} />`


## Передача колбэка в компонент

  первый вариант: 
    `<button onClick={()=> alert('click')}>`
  
  второй вариант(аналогичное действие):  
   ```
    let alertClick  = () => alert('click');

    return (
      <button onClick={alertClick}>
    ) 
   ```

   третий вариант, если нужно с колбэком вернуть данные: 

  PostList.jsx:   
  ```      
  return(
    <Post showPost={(post) => alert(post)} />  
   )
   ```

  Post.jsx:
  
  ```
  return (
    <a href="#" onClick={() => props.showPost(post)}>
  )
 ```
   
## ref
получение значение текстового поля, будет содержаться в переменной text

```
  let newPostElement = React.createRef();

  let text = newPostElement.current.value;

  return (
    <textarea ref={newPostElement}></textarea>
  )
```
## API
Aplication program interface - это интерфейс программы, программой может React, браузер с его методами и т.д.

## Redux
Action - обьект с полями type(указывает что изменить), и payload(полезная нагрузка)

Reducer - чистая функция, которая принимает state, action и возвращает новый state, если action не подошел и state
не изменяется, т.е. возвращает в таком случае прежний state.

## Server API
GET-POST-PUT-DELETE (CRUD)

## Cookie
Текстовый файл, есть для каждого сайта, хранится на компьютере пользователя, применяется для сохранения данных на стороне пользователя.

## redux-thunk
thunk - это функция, которая принимает dispatch и делает асинхронную задачу и умеет диспатчить экшены

## Redirect
`return <Redirect to={"/login"} />;`
редирект на страницу логин, при этом нужно импортнуть Redirect из "react-router-dom"

## HOC
функция которая принимает компонент и возвращает новый компонент

## setState 
Метод асинхронный. Если до вызова setState и после сделать вывод изменяемой части стейта то выводы будут одинаковые,
с изначальным значением выводимых данных. В метод нужно передать обьект: 
                        `this.setState({
                               editMode: true
                         })`
## redux-form
Подключается отсюда https://redux-form.com/8.3.0/

## selectors + библиотека reselect
Селекторы встают между стейтом и компонентами. Если в state меняется его часть то 
то нужно во всех компонентах что использовали эту часть state менять код. Что бы этого не делать используются селекторы, тогда все можно поменять только в одном селекторе. Также в селекторы выносится логика , например фильтрация массива и т.д. и в компонент отправляются уже готовые данные.
Но с использованием селекторов появляются проблемы:
 - сложно дебажить
 - при изменении в state срабатывают селекторы, и если в них сложная логика то это замедляет приложение
 - лишняя перерисовка

 Что бы всего этого избежать есть библиотека reselect https://github.com/reduxjs/reselect

 ## Хуки
 useState
 хук используется для организации локального state в компоненте. Синтаксис:
 `let [editMode, setEditMode ] = useState(false);`
 такая запись означает что мы обьявляем в локальном state, поле editMode со значением false,
 setEditMode - функция которая может изменять значение поля editMode, записывается так setEditMode(true).

 useEffect
подробная статья https://habr.com/ru/company/ruvds/blog/445276/

запись такого вида:
 `let [status, setStatus] = useState(props.status);

  useEffect(()=> {
      setStatus(props.status);
    }, [props.status]
  )`
означает что при отрисовки DOM вызываем функцию setStatus, в квадратных скобках можно передать значение, при езменениии которого будет снова срабатывать хук, в данном случае при изменении  [props.status], будет повторно отрабатывать хук.

 ## Virtual DOM
 При отрисовке страницы с помощью нативного JS, DOM перерисовывается каждый раз полностью.
 А вся 'фишка' React в Virtual DOM. React создает дополнительно Virtual DOM и при изменении параметров сравнивает и перерисовывает только те части DOM которые изменились.
 Для транспиляции из JSX в JS, React APP использует BABEL.

 ## shouldComponentUpdate
 метод жизненного цикла:
 `shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state;
  }`

  сравнивает предыдущие и текущие props/state и возвращет true если они равны, тогда компонента лишний раз не перерисовывается, и false если изменились, тогда происходит перерисовка.
  Компоненту можно создавать на основе React.PureComponent, в нее по умолчанию встроен метод shouldComponentUpdate.
  Альтернативой для функционлаьных компонентов будет React.memo
