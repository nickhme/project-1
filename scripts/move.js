import { SKELETON, LEFT, RIGHT } from './data.js'

function moveSkeleton() {
  // ! Move skeleton
  if (SKELETON.DIRECTION === LEFT) {
    SKELETON.X -= SKELETON.MOVE_SPEED
  } else if (SKELETON.DIRECTION === RIGHT) {
    SKELETON.X += SKELETON.MOVE_SPEED
  }
}

export default moveSkeleton