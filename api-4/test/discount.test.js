const request = require('supertest');
const app = require('../app');  

describe('POST /api/v1/calculate-discount', () => {
    it('should return 10% discount for 30 years old with 6 years of experience', async () => {
        const response = await request(app)
            .post('/api/v1/calculate-discount')
            .send({ age: 30, experience: 6 });

        expect(response.status).toBe(200);
        expect(response.body.discount_rate).toBe(10);  // Another option for these parts could be - expect(response.body).toHaveProperty('discount_rate', 10); Using .toHaveProperty helps to avoid runtime errors if the key is missing :) 
    });

    it('should return error for invalid input', async () => {
        const response = await request(app)
            .post('/api/v1/calculate-discount')
            .send({ age: -1, experience: 6 });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid input');
    });
});

// Code is great!!
