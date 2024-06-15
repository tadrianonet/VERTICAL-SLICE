const request = require('supertest');
const express = require('express');
const investmentRoutes = require('../../../src/features/investment/routes/investmentRoutes');
const db = require('../../../src/config/db');
const Investment = require('../../../src/features/investment/models/investmentModel');

const app = express();
app.use(express.json());
app.use('/api', investmentRoutes);

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  await Investment.deleteMany({});
});

describe('Investment Controller', () => {
  it('should create a new investment', async () => {
    const response = await request(app)
      .post('/api/investments')
      .send({
        user: '60d0fe4f5311236168a109ca', // Example user ID
        amount: 1000,
        date: '2024-01-01T00:00:00Z'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.amount).toBe(1000);
  });
});
