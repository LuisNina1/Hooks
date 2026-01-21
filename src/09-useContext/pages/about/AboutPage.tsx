import { Link } from "react-router"

export const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Pagina corriente</h1>
      <hr />
      <div className="flex flex-col gap-2">
        <Link to="/profile" className="hover:text-blue-500 underline text-2xl">Perfil</Link>
        <Link to="/login" className="hover:text-blue-500 underline text-2xl">Login</Link>
      </div>

    </div>
  )
}
