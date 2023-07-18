
import JumboData from '../../fixtures/jumbo.json'
import {Headings } from '../../styles/globalStyles'
import { JumboCard, JumboContainer, JumboHeadingsContainer } from '../../styles/homepage/JumboTronStyle'

const JumboTron=()=>{
return <section>
   {JumboData.map((item)=>{

       return (
         <JumboContainer key={item.id} >
           <JumboCard direction={item.direction==='row-reverse'?'row-reverse':''}>
             <JumboHeadingsContainer column justifyCenter>
               <Headings size={'3.1rem'}>{item.title}</Headings>
               <p className='para'>{item.subTitle}</p>
             </JumboHeadingsContainer>
             <div className='figure'>
               <img
                 className='image'
                 src={item.image}
                 alt={item.alt}
               ></img>
             </div>
           </JumboCard>
         </JumboContainer>
       );
   })}
</section>
}
export default JumboTron 