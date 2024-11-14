const mobileNav = document.getElementById("mobile-nav")

function handleMenu(){
    mobileNav.classList.toggle("hidden")
}
 
const initialTranslateLTR = -48*4
const initialTranslateRTL = 36*4


function setupIntersectionObserver(element, isLTR, speed){
        const intersectionCallback=(entries)=>{
            const isIntersecting = entries[0].isIntersecting
         
            if(isIntersecting){
                document.addEventListener('scroll', scrollHandler)
            }else{
                document.removeEventListener('scroll', scrollHandler)
            }
        }

        const intersectionObserver = new IntersectionObserver(intersectionCallback, )

        intersectionObserver.observe(element)

        const scrollHandler=()=>{
        
            
            const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed


            let totalTranslate = 0
            if(isLTR){
                totalTranslate = translateX+initialTranslateLTR
            }else{
                totalTranslate = -(translateX+initialTranslateRTL)

            }
         
            element.style.transform = `translateX(${totalTranslate}px)`
        }

}

document.addEventListener('DOMContentLoaded', ()=>{
    const heading = document.getElementById('heading')

    const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('animate-heading-LTR')
                    observer.unobserve(entry.target)
                }
            })
    },{threshold:1})
    observer.observe(heading)

})

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const line4 = document.getElementById('line4')

setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
setupIntersectionObserver(line4, true, 0.8)

const dtElements = document.querySelectorAll('dt')

dtElements.forEach(element=>{
    element.addEventListener('click', ()=>{
        const ddId = element.getAttribute('aria-controls')
     
        
        const ddElement = document.getElementById(ddId)
        const ddArrowIcon = element.querySelectorAll("i")[0]
        console.log("🚀 ~ element.addEventListener ~ ddArrowIcon:", ddArrowIcon)

        ddArrowIcon.classList.toggle('rotate-180')
        ddElement.classList.toggle("hidden")

        
            
    })
})

