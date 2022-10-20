import { SKELETON, GROUND } from './data.js'

function jumpSkeleton() {
  // ! If it's reached the JUMP_HEIGHT, stop IS_JUMPING
  if (SKELETON.Y === SKELETON.JUMP_HEIGHT) {
    SKELETON.IS_JUMPING = false
  }
  // ! If it's still IS_JUMPING, keep going up
  if (SKELETON.IS_JUMPING) {
    SKELETON.Y -= SKELETON.JUMP_SPEED
  }
  // ! if it's stopped IS_JUMPING, but is still airborne.. gravity.
  if (!SKELETON.IS_JUMPING && SKELETON.Y < GROUND) {
    SKELETON.Y += SKELETON.JUMP_SPEED
  }
}

export default jumpSkeleton