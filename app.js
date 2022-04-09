const cardForm = document.querySelector('#cardForm');
const posts = document.querySelector('#posts');


cardForm.addEventListener('submit',function(e){
      e.preventDefault();
      const tit = cardForm.elements.title;
      const pos = cardForm.elements.description;
      addnew(tit.value, pos.value);
})

const addnew = (t , d) => {

      
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('col-md-4');
      // card.classList.add('grid')
      
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const btns = document.createElement('a');
      btns.classList.add('btn');
      btns.classList.add('btn-primary');
      btns.innerHTML = "Buy now";



      const h5  = document.createElement('h5');
      h5.classList.add('card-title');
      const ps = document.createElement('p');
      ps.classList.add('card-text');

      // card.append(cardBody);
      // cardBody.append(h5);
      // cardBody.append(ps);
      // // cardBody.append(btns);
      // posts.append(card);


      h5.append(t);
      ps.append(d);

      cardBody.append(h5);
      cardBody.append(ps);
      cardBody.append(btns);
      card.append(cardBody);
      posts.append(card);


}