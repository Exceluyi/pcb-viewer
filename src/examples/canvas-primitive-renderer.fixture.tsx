import { CanvasPrimitiveRenderer } from "../components/CanvasPrimitiveRenderer"
import { useState } from "react"
import { useMeasure } from "react-use"
import useMouseMatrixTransform from "use-mouse-matrix-transform"
import { compose, scale, translate } from "transformation-matrix"

const defaultTransform = compose(translate(400, 300), scale(40, 40))

const examplePrimitives = [
  {
    _pcb_drawing_object_id: "line_0",
    pcb_drawing_type: "line",
    x1: -25,
    y1: -25,
    x2: 25,
    y2: -25,
    width: 1,
    zoomIndependent: true,
    layer: "board",
    _element: {
      type: "pcb_board",
      pcb_board_id: "pcb_board_0",
      center: {
        x: 0,
        y: 0,
      },
      thickness: 1.4,
      num_layers: 2,
      width: 50,
      height: 50,
      material: "fr4",
    },
    is_in_highlighted_net: false,
    is_mouse_over: false,
  },
]

const CanvasPrimitiveRendererTest = () => {
  const [ref, refDimensions] = useMeasure()
  const [transform, setTransform] = useState(defaultTransform)
  const { ref: transformRef } = useMouseMatrixTransform({
    transform,
    onSetTransform: setTransform,
  })
  return (
    <div ref={transformRef as any}>
      <div ref={ref as any}>
        <CanvasPrimitiveRenderer
          key={refDimensions.width}
          primitives={examplePrimitives as any}
          transform={transform}
          height={600}
          width={refDimensions.width}
          grid={{
            spacing: 1,
            view_window: {
              left: 0,
              right: refDimensions.width || 500,
              top: 600,
              bottom: 0,
            },
          }}
          allowEditing={false}
          cancelPanDrag={() => {}}
          onCreateEditEvent={() => {}}
          onModifyEditEvent={() => {}}
        />
      </div>
    </div>
  )
}

export default {
  "Canvas Primitives": CanvasPrimitiveRendererTest,
}
