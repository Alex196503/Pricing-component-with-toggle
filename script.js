document.addEventListener(('DOMContentLoaded'),()=>{
    let input = document.querySelector('.toggle-container>input');
    let containers = document.querySelectorAll('article');
    input.addEventListener(('change'),()=>{
        if(input.checked)
        {
            updatePrice('annualy');
        }
        else{
            updatePrice('monthly');
        }
    })
    async function updatePrice(type)
    {
        let req = await fetch('data.json');
        let data = await req.json();
        let amount = data[type];
        containers.forEach((container)=>{
            let nameHTML = container.dataset.type;
            let doesITContain = amount.find((item)=>item.name === nameHTML);
            if(!doesITContain) return;
            let paragraph = container.querySelector('h3');
            paragraph.innerHTML = `$${doesITContain.price}`;
        })
    }
   
    input.addEventListener(('keydown'),(e)=>{
        if(e.key === 'Enter')
        {
            input.click();
        }
    })
})