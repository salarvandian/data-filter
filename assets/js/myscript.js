const indicators = document.querySelector('.indicator').children
const items = document.querySelector('.item').children

for(let i = 0 ; i < indicators.length ; i++)
{
    indicators[i].onclick = function (e) {
       
        for(let x = 0 ; x < indicators.length ; x++)
        {
            indicators[x].classList.remove('active')
        }

       e.target.classList.add('active')

       let dataFilter = e.target.getAttribute('data-filter')
       
       for(let z = 0 ; z < items.length ; z++)
       {
            items[z].style.transform = 'scale(0)'

            setTimeout(()=>{
                items[z].style.display = 'none';
            },500)

            if(items[z].getAttribute('data-category') == dataFilter || dataFilter == 'all')
            {
                items[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    items[z].style.display = 'block';
                },500)
            }
        }
    }
}