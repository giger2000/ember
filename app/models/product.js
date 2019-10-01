import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    name: DS.attr(),
    id: DS.attr(),
    price: DS.attr('dollars'),
    quantity: DS.attr(),
    image: DS.attr(),

    subTotal: computed('price', 'quantity', function() {
      return `${this.price} * ${this.quantity}`;
    })
});


