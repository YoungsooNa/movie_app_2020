import React from 'react';
import PropTypes from 'prop-types'

function Food({name, picture, rating} ) {
  return (
    <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: '1',
    name: 'kimchi',
    image: 'https://i2.wp.com/chopchopchoi.com/wp-content/uploads/2020/03/KimchiFriedRice-scaled.jpg?w=1024&ssl=1',
    rating : 5,
  },
  {
    id: '2',
    name: 'kimchi2',
    image: 'https://i2.wp.com/chopchopchoi.com/wp-content/uploads/2020/03/KimchiFriedRice-scaled.jpg?w=1024&ssl=1',
    rating : 4,
  },
  {
    id: '3',
    name: 'kimchi3',
    image: 'https://i2.wp.com/chopchopchoi.com/wp-content/uploads/2020/03/KimchiFriedRice-scaled.jpg?w=1024&ssl=1',
    rating : 5,
  },
  {
    id: '4',
    name: 'kimchi4',
    image: 'https://i2.wp.com/chopchopchoi.com/wp-content/uploads/2020/03/KimchiFriedRice-scaled.jpg?w=1024&ssl=1',
    rating : 3.5,
  },
  {
    id: '5',
    name: 'kimchi5',
    image: 'https://i2.wp.com/chopchopchoi.com/wp-content/uploads/2020/03/KimchiFriedRice-scaled.jpg?w=1024&ssl=1',
    rating : 3,
  },
];


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name:    PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating:  PropTypes.number,
  // number인데 string으로 지정해놔서 경고가 뜸
  // undefined 도 경고해줌
};
export default App;
