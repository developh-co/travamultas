import Link from 'next/link'
import Image from 'next/image'

export default function Teaser() {
  return (
    <main className='h-dvh text-body px-8 py-8 sm:px-24 lg:px-32 lg:p-28 2xl:px-56 2xl:p-28 lg:flex-row lg:flex'>
      <div className='h-full w-full bg-beige rounded-xl items-center gap-10 px-8 py-8 flex flex-col lg:w-1/3 2xl:w-1/4 lg:rounded-r-none'>
        <h1 className='text-4xl lg:hidden'>Website Em Construção</h1>
        <div className='flex flex-col text-body justify-between h-full gap-4 text-left lg:justify-center sm:text-xl sm:px-10 sm:gap-2 lg:text-xl lg:px-0 lg:gap-4'>
          <p>Analisaremos de forma rápida a sua contraordenação.</p>
          <p>
            O objetivo é evitar que fique inibido de conduzir ou que perca
            pontos na sua carta de condução.
          </p>
          <p>Fique a par!</p>
        </div>
        <Link
          className='text-left w-full underline underline-offset-4 lg:text-xl sm:text-2xl sm:px-10 sm:gap-2 lg:px-0'
          href='mailto:geral@travamultas.pt'
        >
          geral@travamultas.pt
        </Link>
        <div className='h-full w-full flex items-center justify-center'>
          <Link
            href='https://consultoriojuridico.net/ '
            className='h-full w-2/3 relative sm:w-1/3 lg:w-1/2 hover:scale-95 transition-all ease-in-out duration-300 '
          >
            <Image
              className='object-contain'
              src='/logo/logo.svg'
              fill={true}
              alt=''
            />
          </Link>
        </div>
      </div>
      <div className='hidden lg:flex lg:flex-col lg:justify-end lg:h-full lg:w-2/3 2xl:w-3/4 lg:border-[3px] lg:border-beige lg:rounded-r-xl lg:px-8 lg:py-8'>
        <h1 className='text-beige text-7xl'>
          Website Em <br /> Construção
        </h1>
      </div>
    </main>
  )
}
