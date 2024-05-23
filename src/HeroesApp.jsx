import { AuthProvide } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <AuthProvide>

        <AppRouter />

    </AuthProvide>
  )
}
