import Link from 'next/link'
import Image from 'next/image'

export default function Teaser() {
  return (
    <main className='h-dvh text-body px-8 py-8'>
      <div className='h-full w-full bg-beige rounded-xl items-center gap-10 px-8 py-8 flex flex-col'>
        <h1 className='text-4xl'>Website Em Construção</h1>
        <div className='flex flex-col text-body justify-between h-full gap-4 text-justify'>
          <p>Analisaremos de forma rápida a sua contraordenação.</p>
          <p>
            O objetivo é evitar que fique inibido de conduzir ou que perca
            pontos na sua carta de condução.
          </p>
          <p>O nosso lançamento está previsto para dia 1 de outubro. </p>
          <p>Fique a par!</p>
        </div>
        <Link
          className='text-left w-full underline underline-offset-4'
          href='mailto:geral@travamultas.pt'
        >
          geral@travamultas.pt
        </Link>
        <div className='h-full w-full relative'>
          <Image
            className='object-contain'
            src='/logo/logo.svg'
            fill={true}
            alt=''
          />
        </div>
      </div>
    </main>
  )
}
