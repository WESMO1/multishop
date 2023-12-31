const home = async () => {
  const wrap = document.createElement('div');

  wrap.innerHTML = `
    <div  class="  row py-2">
      <div  class="  col">
        <h2 class="p-3 text-emphasis-success bg-primary" class="display-5">Checkout out the information MULTISHOP</h2>
        <p>Out store is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.</p>
        <p>The customer is at the heart of our unique business model, which includes design, production, distribution and sales through our extensive retail network.</p>
        <p>Redesigning Human Uniform - or RHU for short - was co-created by Zara and Rhuigi Villaseñor in 2022. By combining Villaseñor’s aesthetic with Zara’s global network and, their shared intention was to create a wardrobe infused with the qualities and codes of modern progressive luxury at a scale and price point that made it accessible to all. Following a first collection, Zara and Villaseñor have reunited to present a newly evolved and expanded edition of RHU’s contemporary “uniform”.</p>
      </div>
    </div>
    <div class="row py-2">
      <div class="col">
        <h2 class="p-3 mb-2 bg-danger text-white"class="display-5">Checkout our sections</h2>
        <ul  class="list-unstyled ">
          <li><a href="/products">Look our products here</a></li>
          <li><a href="/categories">Look our categories here</a></li>
          <li><a href="/about">Some information about us</a></li>
          <li><a href="/cart">Check out your cart here</a></li>
        </ul>
      </div>
    </div>
  `;

  return wrap;
};

export default home;
