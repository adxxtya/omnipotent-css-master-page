import React from 'react'

function index() {
  return (
<body className='body-on-hover'>
  <h1 class="heading">3D Card Hover Effect</h1>
  <div class="container">
    <div class="item">
      <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Green Forests" />
        <div class="card__content">
          <h1 class="card__header">Green Forests</h1>
          <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem sit
            amet massa aliquet aliquet. Phasellus at ipsum
            congue urna commodo gravidas</p><button class="card__btn">Explore
            <span>&rarr;</span></button>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1505245208761-ba872912fac0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Beutiful Oceans" />
        <div class="card__content">
          <h1 class="card__header">Beautiful Oceans</h1>
          <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem sit
            amet massa aliquet aliquet. Phasellus at ipsum
            congue urna commodo gravida</p><button class="card__btn">Explore
            <span>&rarr;</span></button>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1431512284068-4c4002298068?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTB8fG5hdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s" alt="Snowy Mountains" />
        <div class="card__content">
          <h1 class="card__header">Snowy Mountains</h1>
          <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id sem sit
            amet massa aliquet aliquet. Phasellus at ipsum
            congue urna commodo gravida</p><button class="card__btn">Explore
            <span>&rarr;</span></button>
        </div>
      </div>
    </div>
  </div>
</body>

 
  )
}

export default index