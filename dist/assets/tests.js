'use strict';

define("shopping-cart/tests/integration/components/app-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | app-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Z4Q1sRAw",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"app-header\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3GTSp1mS",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"app-header\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shopping-cart/tests/integration/components/available-items-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | available-items', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      this.set('products', []);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "s4FsU+k5",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"available-items\",null,[[\"products\"],[[23,[\"products\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Featured Products'); // Template block usage:

      this.set('products', []);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6OBSEzw8",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"available-items\",null,[[\"products\"],[[23,[\"products\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Featured Products');
    });
  });
});
define("shopping-cart/tests/integration/components/cart-items-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Integration | Component | cart-items', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
  });
});
define("shopping-cart/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/app-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/app-header.js should pass ESLint\n\n');
  });
  QUnit.test('components/available-items.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/available-items.js should pass ESLint\n\n');
  });
  QUnit.test('components/cart-items.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/cart-items.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('data/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'data/products.js should pass ESLint\n\n');
  });
  QUnit.test('models/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/products.js should pass ESLint\n\n');
  });
  QUnit.test('transforms/dollars.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/dollars.js should pass ESLint\n\n');
  });
});
define("shopping-cart/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('shopping-cart/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shopping-cart/templates/components/app-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/templates/components/app-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shopping-cart/templates/components/available-items.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/templates/components/available-items.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shopping-cart/templates/components/cart-items.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/templates/components/cart-items.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shopping-cart/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shopping-cart/templates/products.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shopping-cart/templates/products.hbs should pass TemplateLint.\n\n');
  });
});
define("shopping-cart/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/app-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/app-header-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/available-items-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/available-items-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/cart-items-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/cart-items-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/product-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/product-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/products-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/products-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/transforms/dollars-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/dollars-test.js should pass ESLint\n\n');
  });
});
define("shopping-cart/tests/test-helper", ["shopping-cart/app", "shopping-cart/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("shopping-cart/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("shopping-cart/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
    (0, _qunit.test)('should update showModal toggleModal action', function (assert) {
      assert.expect(2); // get the controller instance

      let controller = this.owner.lookup('controller:index'); // check the properties before the action is triggered

      assert.equal(controller.get('showModal'), false, 'showModal initialized'); // trigger the action on the controller by using the `send` method,
      // passing in any params that our action may be expecting

      controller.send('toggleModal', 'true'); // finally we assert that our values have been updated
      // by triggering our action.

      assert.equal(controller.get('showModal'), 'true', 'showModal updated');
    });
    (0, _qunit.test)('should add or remove product from cart ', function (assert) {
      assert.expect(6); // get the controller instance

      let controller = this.owner.lookup('controller:index'); // check the properties before the action is triggered

      assert.notEqual(controller.get('availableProducts').length, 0, 'Products are available');
      assert.equal(controller.get('addedProducts').length, 0, 'no products added in cart'); // trigger the action on the controller by using the `send` method,
      // passing in any params that our action may be expecting

      let intialLength = controller.get('availableProducts').length;
      controller.send('addOrRemove', controller.get('availableProducts')[2], 'add'); // finally we assert that our values have been updated
      // by triggering our action.

      assert.equal(controller.get('availableProducts').length, intialLength - 1, 'Products removed from list');
      assert.equal(controller.get('addedProducts').length, 1, 'products added in cart');
      controller.send('addOrRemove', controller.get('addedProducts')[0], 'remove'); // finally we assert that our values have been updated
      // by triggering our action.

      assert.equal(controller.get('availableProducts').length, intialLength, 'Products added back to list');
      assert.equal(controller.get('addedProducts').length, 0, 'products removed from cart');
    });
  });
});
define("shopping-cart/tests/unit/models/product-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | product', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('product', {});
      assert.ok(model);
    });
  });
});
define("shopping-cart/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("shopping-cart/tests/unit/routes/products-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | products', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:products');
      assert.ok(route);
    });
  });
});
define("shopping-cart/tests/unit/transforms/dollars-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Transform | dollars', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let transform = this.owner.lookup('transform:dollars');
      assert.ok(transform);
    });
  });
});
define('shopping-cart/config/environment', [], function() {
  var prefix = 'shopping-cart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('shopping-cart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
