import { useParams } from "react-router-dom"

export function InfoCharacters() {
  const {name} = useParams();

  // // list/17-professor-shambooboo
  // function toSlug(id: string, name: string): string {
  // }

  return (
    <div>

      <h1>Страница с конкретным персонажем {name}</h1>
    </div>
  )
}