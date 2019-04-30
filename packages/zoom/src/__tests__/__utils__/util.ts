import { createEvent, CustomTouchEvent } from '@/__tests__/__utils__/event'
import { createDiv } from '@/__tests__/__utils__/layout'

export function createZoom() {
  const dom = createDiv(300, 300)
  const zoomEl = createDiv(300, 300, 0, 0)
  dom.appendChild(zoomEl)
  return { dom, zoomEl }
}

export function createTouchEvent(
  firstFingerPoint: { pageX: number; pageY: number },
  secondFingerPoint?: { pageX: number; pageY: number }
): CustomTouchEvent {
  const e = createEvent('Event', 'touch') as CustomTouchEvent
  e.touches = [firstFingerPoint]
  if (secondFingerPoint) {
    e.touches.push(secondFingerPoint)
  }
  return e
}
