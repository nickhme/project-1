import { FRAME_HEIGHT, FRAME_WIDTH, SKELETON, IMAGE } from "./data.js"

import jumpSkeleton from "./jump.js"
import moveSkeleton from "./move.js"

import { handleKeydown, handleKeyup } from "./events.js"

const c = document.querySelector('#myCanvas')
const img = document.createElement('img')
img.src = 'assets/skeleton-sprite.png'

function drawSkeleton() {
  var ctx = c.getContext("2d");

  // ! Removes the skeleton from where he previously was.
  ctx.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT)

  // ! Draw a new skeleton
  ctx.drawImage(img,
    IMAGE.SOURCE_X_PIXELS, 
    IMAGE.SOURCE_Y_PIXELS,
    IMAGE.SOURCE_WIDTH,
    IMAGE.SOURCE_HEIGHT,
    SKELETON.X,
    SKELETON.Y,
    IMAGE.IMAGE_WIDTH,
    IMAGE.IMAGE_HEIGHT
  )
}

document.addEventListener('keydown', handleKeydown)
document.addEventListener('keyup', handleKeyup)

function update() {
  moveSkeleton()
  jumpSkeleton()
  drawSkeleton()
  
  requestAnimationFrame(update)
}

requestAnimationFrame(update)