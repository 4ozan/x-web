import { HeaderBase } from './Header-base'

export function Header (){
    const leftContent = (
        <p>Acura</p>
    )

   const rightContent = (
    <nav className='flex gap-3 justify-center items-center font-inter'>
     <h2>Discover </h2>
     <h2>Carrers</h2>
     <h2>Manifesto</h2>
    </nav>
      

    )
     
  return (
    <HeaderBase leftContent={leftContent}
    rightContent={rightContent} />
  )
}
