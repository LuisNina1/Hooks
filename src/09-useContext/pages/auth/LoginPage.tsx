import { Input } from "@/components/ui/input"
import { Button} from "@/components/ui/button"
import { Link, useNavigate } from "react-router"
import { useContext, useState } from "react"
import { UserContext } from "@/09-useContext/context/UserContext"
import { toast } from "sonner"
export const LoginPage = () => {
  const {login} = useContext(UserContext)
 
  const [userID, setUserID] = useState('')
  const navigation = useNavigate();
  const handleSubmit  = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = login(+userID);
    if(!result){
      toast.error('Usuario no encontrado')
      return
    }
    navigation('/profile')
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">
        Iniciar sesion
      </h1>
      <hr />
      <form 
      onSubmit={handleSubmit}
      className="felx flex-col gap-2 my-20" >
        <Input type="number" placeholder="ID del usuario" 
        value={userID}
        onChange={e => setUserID(e.target.value)}
        ></Input>
        <Button type="submit">
          Login
        </Button>
      </form>
      <Link to='/about'> 
        <Button variant='ghost'>volver a la pagina principal</Button>
      </Link>
    </div>
  )
}
