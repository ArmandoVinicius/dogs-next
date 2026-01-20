export default async function FotoIdPage({params}: {params: {id: number}}) {
  return (
    <main>
      <h1>Id da foto: {params.id}</h1>
    </main>
  )
}