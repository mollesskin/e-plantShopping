import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'An upright plant with striking sword-shaped leaves.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Arching striped leaves make this a lovely hanging plant.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Glossy green foliage complemented by elegant white blooms.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Soft, feathery fronds bring lush greenery to your space.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'A bold foliage plant with large, glossy leaves.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'A sculptural succulent suited to a bright windowsill.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=600&q=80',
          description: 'Fragrant purple flowers for a sunny growing spot.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=600&q=80',
          description: 'Delicate flowers with a distinctive sweet fragrance.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'An aromatic herb with narrow evergreen leaves.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Freshly scented leaves on a vigorous, leafy plant.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'A leafy herb with a refreshing lemon fragrance.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Colorful clusters of fragrant spring flowers.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        {
          name: 'Oregano',
          image:
            'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
          description: 'A compact herb with small, aromatic green leaves.',
          cost: '$10',
        },
        {
          name: 'Marigold',
          image:
            'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
          description: 'Bright flowers add warm color to sunny spaces.',
          cost: '$8',
        },
        {
          name: 'Geraniums',
          image:
            'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg',
          description: 'Cheerful flowering plants for a bright position.',
          cost: '$20',
        },
        {
          name: 'Basil',
          image:
            'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
          description: 'A fragrant herb that enjoys warmth and sunshine.',
          cost: '$9',
        },
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=600&q=80',
          description: 'Fragrant purple flowers for a sunny growing spot.',
          cost: '$20',
        },
        {
          name: 'Catnip',
          image:
            'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
          description: 'A leafy member of the mint family with aromatic foliage.',
          cost: '$13',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'A sculptural succulent suited to a bright windowsill.',
          cost: '$14',
        },
        {
          name: 'Echinacea',
          image:
            'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description: 'Distinctive cone-shaped flower centers and colorful petals.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image:
            'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'A fragrant herb with a fresh minty scent.',
          cost: '$13',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'A leafy herb with a refreshing lemon fragrance.',
          cost: '$14',
        },
        {
          name: 'Chamomile',
          image:
            'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Small daisy-like flowers with yellow centers.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image:
            'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description: 'Sunny orange and yellow flowers brighten your collection.',
          cost: '$12',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image:
            'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Glossy foliage and a compact, upright growing habit.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image:
            'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Trailing vines look beautiful on shelves and in baskets.',
          cost: '$10',
        },
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'An upright plant with striking sword-shaped leaves.',
          cost: '$15',
        },
        {
          name: 'Cast Iron Plant',
          image:
            'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description: 'Deep green leaves give this hardy plant a classic look.',
          cost: '$20',
        },
        {
          name: 'Succulents',
          image:
            'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'A collection of plants with distinctive shapes and textures.',
          cost: '$18',
        },
        {
          name: 'Aglaonema',
          image:
            'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description: 'Decorative patterned foliage adds interest to indoor spaces.',
          cost: '$22',
        },
      ],
    },
  ];

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Synchronize buttons when items are added or removed.
  useEffect(() => {
    const added = {};

    cart.forEach((item) => {
      added[item.name] = true;
    });

    setAddedToCart(added);
  }, [cart]);

  const handleAddToCart = (plant) => {
    if (cart.some((item) => item.name === plant.name)) {
      return;
    }

    dispatch(addItem(plant));

    setAddedToCart((previous) => ({
      ...previous,
      [plant.name]: true,
    }));
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick();
    window.scrollTo(0, 0);
  };

  const handlePlantsClick = (event) => {
    event.preventDefault();
    setShowCart(false);
    window.scrollTo(0, 0);
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setShowCart(true);
    window.scrollTo(0, 0);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    window.scrollTo(0, 0);
  };

  const linkStyle = {
    color: 'white',
    fontSize: '22px',
    textDecoration: 'none',
  };

  return (
    <div>
      <nav
        className="navbar"
        aria-label="Main navigation"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <a
          href="#home"
          onClick={handleHomeClick}
          style={{
            ...linkStyle,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt=""
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
            }}
          />

          <div>
            <h3 style={{ margin: 0, color: 'white' }}>
              Paradise Nursery
            </h3>
            <i style={{ fontSize: '16px' }}>
              Where Green Meets Serenity
            </i>
          </div>
        </a>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <a
            href="#home"
            onClick={handleHomeClick}
            style={linkStyle}
          >
            Home
          </a>

          <a
            href="#plants"
            onClick={handlePlantsClick}
            style={linkStyle}
          >
            Plants
          </a>

          <a
            href="#cart"
            onClick={handleCartClick}
            aria-label={`Cart with ${totalQuantity} plants`}
            style={{
              ...linkStyle,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 3h2l3 12h11l3-9H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="19" cy="20" r="1" />
            </svg>

            <span>Cart</span>

            <span
              aria-live="polite"
              style={{
                backgroundColor: 'white',
                color: '#236b29',
                borderRadius: '50%',
                minWidth: '30px',
                padding: '4px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {totalQuantity}
            </span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <section
              key={category.category}
              style={{ width: '100%' }}
            >
              <h2>{category.category}</h2>

              <div className="product-list">
                {category.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <h3 className="product-title">
                      {plant.name}
                    </h3>

                    <p className="product-description">
                      {plant.description}
                    </p>

                    <p className="product-cost">
                      {plant.cost}
                    </p>

                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={Boolean(addedToCart[plant.name])}
                    >
                      {addedToCart[plant.name]
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;