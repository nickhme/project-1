export const FRAME_WIDTH = 600
export const FRAME_HEIGHT = 500
export const GROUND = 340
// directions
export const LEFT = 'a'
export const RIGHT = 'd'
export const NONE = 'NONE'
// for jumping
export const UP = 'w'

export const SKELETON = {
  X: 200,
  Y: 340,
  JUMP_HEIGHT: 200,
  IS_JUMPING: true,
  DIRECTION: NONE,
  MOVE_SPEED: 5,
  JUMP_SPEED: 5,
}

export const IMAGE = {
  SOURCE_X_PIXELS: 50, // where to start drawing from src image x
  SOURCE_Y_PIXELS: 50, // where to start drawing from src image y
  SOURCE_WIDTH: 80, // the num pixels to draw from src image width
  SOURCE_HEIGHT: 80, // the num pixels to draw from src image height
  IMAGE_WIDTH: 200, // scales the images width on the canvas
  IMAGE_HEIGHT: 200, // scales the images height on canvas
}
