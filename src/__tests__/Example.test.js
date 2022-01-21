import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
        expect(true).toBe(true)
    })
})
