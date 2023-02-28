import { ProductFactory } from './product.factory';

describe('Product factory unit test', () => {
	it('Should create a product type a', () => {
		const product = ProductFactory.create({ type: 'a', name: 'Product A', price: 1 });
		expect(product.id).toBeDefined();
		expect(product.name).toBe('Product A');
		expect(product.price).toBe(1);
		expect(product.constructor.name).toBe('Product');
	});

	it('Should create a product type b', () => {
		const product = ProductFactory.create({ type: 'b', name: 'Product B', price: 2 });
		expect(product.id).toBeDefined();
		expect(product.name).toBe('Product B');
		expect(product.price).toBe(4);
		expect(product.constructor.name).toBe('ProductB');
	});

});