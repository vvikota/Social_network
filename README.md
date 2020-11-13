
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
