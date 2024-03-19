document.addEventListener('DOMContentLoaded', () => {
    const arrows = document.querySelectorAll('.arrows-animated-wrapper > img')
    const delayBetweenArrows = 200
    const stayLitDuration = 600

    function animateArrows() {
        arrows.forEach((arrow, index) => {
            setTimeout(() => {
                arrow.style.animation = `fadeIn 0.5s forwards`
            }, index * delayBetweenArrows)
        })
        
        setTimeout(() => {
            arrows.forEach((arrow) => {
                arrow.style.animation = `fadeOut 0.5s forwards`
            })
            setTimeout(animateArrows, 500)
        }, arrows.length * delayBetweenArrows + stayLitDuration)
    }

    animateArrows()
})