import { GROUND, UP, SKELETON, LEFT, NONE, RIGHT } from "./data.js"

export function handleKeydown(event) {
  const key = event.key
  // ! If you're on the ground, and you jump, start IS_JUMPING.
  if (key === UP && SKELETON.Y === GROUND) {
    SKELETON.IS_JUMPING = true
  // ! Go left.
  } else if (key === LEFT) {
    SKELETON.DIRECTION = LEFT
  // ! Go right.
  } else if (key === RIGHT) {
    SKELETON.DIRECTION = RIGHT
  }
}

export function handleKeyup(event) {
  // ! Stops moving in that SKELETON.DIRECTION
  const key = event.key
  if (key === LEFT) {
    SKELETON.DIRECTION = NONE
  } else if (event.key === RIGHT) {
    SKELETON.DIRECTION = NONE
  }
}