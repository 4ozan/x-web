import { HeaderBase } from './Header-base'

export function Header (){
    const leftContent = (
       <h4 className='font-mono'>AURA</h4>
    )

   const rightContent = (
    <nav className='flex gap-3 justify-center items-center font-inter'>
     <ul className='flex gap-3 font-mono'>
      <li>DISCOVER</li>
      <li>CAREERS</li>
      <li>MANIFESTO</li>
      </ul>
    

    </nav>
      

    )
     
  return (
    
       <HeaderBase leftContent={leftContent}
    rightContent={rightContent} />
   
  )
}
