import {Routes, Route} from 'react-router-dom';
import {ListCharacters, InfoCharacters, AppTemplate} from '@/pages';

export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppTemplate/>}>
          <Route path='/' element={<ListCharacters />} />
          <Route path='/list/:name' element={<InfoCharacters />} />
          <Route path='*' element={<h1>Такой страницы нет</h1>}/>
        </Route>
      </Routes>
    </>
  );
}
