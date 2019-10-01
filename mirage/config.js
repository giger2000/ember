export default function() {
  this.namespace = '/api';

  this.get('/products', function() {
    return {
      data: [{
        type: 'products',

        attributes: {
          productId: 'GR1',
          isPublished: 'true',
          productName: 'Green Tea',
          productQuantity: 0,
          productImage: 'https://picjumbo.com/wp-content/uploads/young-woman-drinking-a-tea-2210x1774.jpg'

        }
      }, {
        type: 'products',

        attributes: {
          productId: 'SR1',
          isPublished: 'true',
          productName: 'Strawberries',
          productQuantity: 0,
          productImage: 'https://picjumbo.com/wp-content/uploads/strawberries-close-up-free-photo-DSC08167-2210x1473.jpg'

        }
      }, {
        type: 'products',

        attributes: {
          productId: 'CF1',
          isPublished: 'true',
          productName: 'Coffee',
          productQuantity: 0,
          productImage: 'https://picjumbo.com/wp-content/uploads/coffee-beans-in-glass-2210x1473.jpg'

        }
      }]
    };
  });
}
