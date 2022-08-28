import bcrypt from 'bcryptjs';
const data = {
    users: [
     {
        name:'Oumami',
        email:'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
     },
     {
        name:'Jhon',
        email:'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
     },
    ],
    products:[
        {
         name: 'Mascara',
         category: 'makeup',
         image: '/images/cosmetics-1-1474339.jpg',
         price: 96,
         countInStock: 10,
         brand: 'Maybeline',
         rating: 4.5,
         numReviews: 10,
         descreption: 'high quality product'
        },
        {
        name: 'Buble Poudre',
        category: 'makeup',
        image: '/images/cosmetic-matting-fluid-3-1558409.jpg',
        price: 199,
        countInStock: 20,
        brand: 'Flormar',
        rating: 5,
        numReviews: 20,
        descreption: 'high quality product'
        },
        {
        name: 'Lipstick',
        category: 'makeup',
        image: '/images/lipstick-1422492.jpg',
        price: 69,
        countInStock: 0,
        brand: 'Everochet',
        rating: 4,
        numReviews: 10,
        descreption: 'high quality product'
        },
        {
        name: 'Nail Polish',
        category: 'makeup',
        image: '/images/nail-polish-1555069.jpg',
        price: 60,
        countInStock: 15,
        brand: 'Maybeline',
        rating: 4.5,
        numReviews: 12,
        descreption: 'high quality product'
        },
        {
        name: 'Eye Shadow',
        category: 'makeup',
        image: '/images/cosmetic-1193616.jpg',
        price: 199,
        countInStock: 5,
        brand: 'Flormar',
        rating: 5,
        numReviews: 11,
        descreption: 'high quality product'
        }
    ],
};
export default data;