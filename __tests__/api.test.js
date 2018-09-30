import request from 'supertest'
import express from 'express'

import api from '../utils/api'

const server = express()

test('tests working', () => {
    expect(1).toBeGreaterThan(0)
})