const request = require('supertest');
const app = require('../src/server');  // Adjust the path if needed

describe('POST /calculate', () => {
  it('should return car value for valid model and year', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ model: 'Civic', year: 2020 });  // Year is now a number

    expect(response.status).toBe(200);
    expect(response.body.car_value).toBe(6620);  // Example value based on model length
  });

  test('should return an error if model is missing', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ year: 2020 });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid data');
  });

  test('should return an error if year is invalid', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ model: 'Civic', year: '2020' });  // Year is still a string here, expect an error

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid data');
  });

  test('should return an error if model and year are missing', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid data');
  });
});
