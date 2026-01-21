import login from '@/actions/login'

export default async function LoginForm() {
  return (
    <>
      <form action={login}>
        <input name="usename" type="text" placeholder="Usuário" />
        <input name="password" type="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
    </>
  )
}
