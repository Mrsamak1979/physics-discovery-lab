
/**
 * Physics Discovery Lab
 * Torque & Equilibrium Physics Engine
 *
 * Model assumptions:
 * - Horizontal rigid beam
 * - Pivot at x = 0
 * - Vertical applied forces
 * - Counterclockwise torque is positive
 *
 * SI units: m, N, N.m
 */

export interface AppliedForce {
  id: string
  position: number  // x-position (m)
  force: number     // vertical force Fy (N)
}

export interface TorqueResult {
  torques: number[]
  netTorque: number
  clockwiseTorque: number
  counterclockwiseTorque: number
  isBalanced: boolean
}

/**
 * Calculate torque from vertical forces.
 *
 * tau = x * Fy
 */
export function calculateTorque(
  forces: AppliedForce[],
  tolerance = 1e-9
): TorqueResult {

  const torques = forces.map(
    (item) => item.position * item.force
  )

  const netTorque = torques.reduce(
    (sum, torque) => sum + torque,
    0
  )

  const clockwiseTorque = torques
    .filter((torque) => torque < 0)
    .reduce((sum, torque) => sum + Math.abs(torque), 0)

  const counterclockwiseTorque = torques
    .filter((torque) => torque > 0)
    .reduce((sum, torque) => sum + torque, 0)

  const isBalanced = Math.abs(netTorque) <= tolerance

  return {
    torques,
    netTorque,
    clockwiseTorque,
    counterclockwiseTorque,
    isBalanced
  }
}
