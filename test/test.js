// test.js
const assert = require('assert');
const request = require('supertest');
const app = require('../src/calculator');

//Now everything should be working!!!

describe('Calculator API', function ()
{
    it('should add two numbers correctly', function (done)
    {
        request(app)
            .post('/add')
            .send({ a: 1, b: 2 })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res)
            {
                if (err) return done(err);
                assert.strictEqual(res.body.result, 553);//Code tests will fail
                done();
            });
    });

    it('should subtract two numbers correctly', function (done)
    {
        request(app)
            .post('/subtract')
            .send({ a: 5, b: 3 })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res)
            {
                if (err) return done(err);
                assert.strictEqual(res.body.result, 2);
                done();
            });
    });

    it('should multiply two numbers correctly', function (done)
    {
        request(app)
            .post('/multiply')
            .send({ a: 4, b: 2 })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res)
            {
                if (err) return done(err);
                assert.strictEqual(res.body.result, 8);
                done();
            });
    });

    it('should divide two numbers correctly', function (done)
    {
        request(app)
            .post('/divide')
            .send({ a: 6, b: 2 })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res)
            {
                if (err) return done(err);
                assert.strictEqual(res.body.result, 3);
                done();
            });
    });

    it('should handle division by zero', function (done)
    {
        request(app)
            .post('/divide')
            .send({ a: 6, b: 0 })
            .expect(400)
            .expect('Content-Type', /json/)
            .end(function (err, res)
            {
                if (err) return done(err);
                assert.strictEqual(res.body.error, 'Cannot divide by zero');
                done();
            });
    });
});
