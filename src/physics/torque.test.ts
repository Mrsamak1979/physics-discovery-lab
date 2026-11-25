
import { describe, it, expect } from 'vitest'
import { calculateTorque } from './torque'

describe('Torque Physics Engine', () => {

  it('calculates equilibrium correctly', () => {
    const result = calculateTorque([
      { id: 'left', position: -3, force: -19.62 },
      { id: 'right', position: 2, force: -29.43 }
    ])

    expect(result.netTorque).toBeCloseTo(0)
    expect(result.isBalanced).toBe(true)
  })

  it('calculates clockwise torque', () => {
    const result = calculateTorque([
      { id: 'right', position: 2, force: -10 }
    ])

    expect(result.netTorque).toBe(-20)
    expect(result.clockwiseTorque).toBe(20)
  })

  it('calculates counterclockwise torque', () => {
    const result = calculateTorque([
      { id: 'left', position: -2, force: -10 }
    ])

    expect(result.netTorque).toBe(20)
    expect(result.counterclockwiseTorque).toBe(20)
  })

  it('gives zero torque at the pivot', () => {
    const result = calculateTorque([
      { id: 'pivot', position: 0, force: -50 }
    ])

    expect(result.netTorque).toBe(0)
    expect(result.isBalanced).toBe(true)
  })

  it('handles an empty force list', () => {
    const result = calculateTorque([])

    expect(result.netTorque).toBe(0)
    expect(result.torques).toEqual([])
  })

})
