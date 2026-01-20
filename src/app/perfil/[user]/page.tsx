export default async function PerfilUserPage({params}: {params: {user: string}}) {
  return (
    <main>
      <h1>Nome: {params.user}</h1>
    </main>
  )
}