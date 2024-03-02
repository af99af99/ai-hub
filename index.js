const allData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const datas=(data.data.tools)
    // console.log(datas)
    displaySocial(datas)
}



 const displaySocial = datas =>{
//  console.log(datas)

const phoneContainer = document.getElementById('phone-container')
     datas.forEach(social => {
        console.log(social)

     // card bananbo 
     const socialCard =  document.createElement('div');
     socialCard.classList = 'card w-96 bg-base-100  shadow-xl'
     socialCard.innerHTML = `
     <figure><img src="${social.image}"  /></figure>
     <div class="card-body">
       <h2 class="card-title">${social.name}</h2>
       <p>${social.description}</p>
       <p>${social.published_in}</p>

       <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
       <button class="btn" onclick="getSingleData('${social.id}')">open modal</button>

     `;

     phoneContainer.appendChild(socialCard);

    });
}


const  getSingleData = async (id) => {
  console.log('click',id)
  //load single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const data = await res.json();
  const details =data.data;
  showdetails(details);
}

const showdetails = (details) => {
  console.log(details);
  //modal show
  getSingleData();
}


allData ();