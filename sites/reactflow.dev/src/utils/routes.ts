export type Route = ExternalRoute | InternalRoute;

export type ExternalRoute = `https://${string}`;

export type InternalRoute =
  | '/'
  | '/api-reference'
  | '/api-reference/components'
  | '/api-reference/components/background'
  | '/api-reference/components/base-edge'
  | '/api-reference/components/control-button'
  | '/api-reference/components/controls'
  | '/api-reference/components/edge-label-renderer'
  | '/api-reference/components/edge-text'
  | '/api-reference/components/handle'
  | '/api-reference/components/minimap'
  | '/api-reference/components/node-resize-control'
  | '/api-reference/components/node-resizer'
  | '/api-reference/components/node-toolbar'
  | '/api-reference/components/panel'
  | '/api-reference/hooks'
  | '/api-reference/hooks/use-edges'
  | '/api-reference/hooks/use-edges-state'
  | '/api-reference/hooks/use-key-press'
  | '/api-reference/hooks/use-node-id'
  | '/api-reference/hooks/use-nodes'
  | '/api-reference/hooks/use-nodes-initialized'
  | '/api-reference/hooks/use-nodes-state'
  | '/api-reference/hooks/use-on-selection-change'
  | '/api-reference/hooks/use-on-viewport-change'
  | '/api-reference/hooks/use-react-flow'
  | '/api-reference/hooks/use-store'
  | '/api-reference/hooks/use-store-api'
  | '/api-reference/hooks/use-update-node-internals'
  | '/api-reference/hooks/use-viewport'
  | '/api-reference/react-flow'
  | '/api-reference/react-flow-provider'
  | '/api-reference/types'
  | '/api-reference/types/background-variant'
  | '/api-reference/types/connection'
  | '/api-reference/types/connection-line-component-props'
  | '/api-reference/types/connection-line-type'
  | '/api-reference/types/coordinate-extent'
  | '/api-reference/types/default-edge-options'
  | '/api-reference/types/edge'
  | '/api-reference/types/edge-change'
  | '/api-reference/types/edge-marker'
  | '/api-reference/types/edge-props'
  | '/api-reference/types/fit-view-options'
  | '/api-reference/types/marker-type'
  | '/api-reference/types/mini-map-node-props'
  | '/api-reference/types/node'
  | '/api-reference/types/node-change'
  | '/api-reference/types/node-origin'
  | '/api-reference/types/node-props'
  | '/api-reference/types/panel-position'
  | '/api-reference/types/position'
  | '/api-reference/types/pro-options'
  | '/api-reference/types/react-flow-instance'
  | '/api-reference/types/react-flow-json-object'
  | '/api-reference/types/resize-params'
  | '/api-reference/types/viewport'
  | '/api-reference/types/xy-position'
  | '/api-reference/utils'
  | '/api-reference/utils/add-edge'
  | '/api-reference/utils/apply-edge-changes'
  | '/api-reference/utils/apply-node-changes'
  | '/api-reference/utils/get-bezier-path'
  | '/api-reference/utils/get-connected-edges'
  | '/api-reference/utils/get-incomers'
  | '/api-reference/utils/get-marker-end'
  | '/api-reference/utils/get-nodes-bounds'
  | '/api-reference/utils/get-outgoers'
  | '/api-reference/utils/get-rect-of-nodes'
  | '/api-reference/utils/get-simple-bezier-path'
  | '/api-reference/utils/get-smooth-step-path'
  | '/api-reference/utils/get-straight-path'
  | '/api-reference/utils/get-transform-for-bounds'
  | '/api-reference/utils/get-viewport-for-bounds'
  | '/api-reference/utils/is-edge'
  | '/api-reference/utils/is-node'
  | '/api-reference/utils/update-edge'
  | '/developer-survey-2023'
  | '/examples'
  | '/examples/edges/custom-connectionline'
  | '/examples/edges/custom-edges'
  | '/examples/edges/delete-edge-on-drop'
  | '/examples/edges/edge-label-renderer'
  | '/examples/edges/edge-types'
  | '/examples/edges/floating-edges'
  | '/examples/edges/markers'
  | '/examples/edges/simple-floating-edges'
  | '/examples/edges/updatable-edge'
  | '/examples/interaction/collaborative'
  | '/examples/interaction/collision-detection'
  | '/examples/interaction/context-menu'
  | '/examples/interaction/contextual-zoom'
  | '/examples/interaction/copy-paste'
  | '/examples/interaction/drag-and-drop'
  | '/examples/interaction/helper-lines'
  | '/examples/interaction/interaction-props'
  | '/examples/interaction/prevent-cycles'
  | '/examples/interaction/save-and-restore'
  | '/examples/interaction/touch-device'
  | '/examples/interaction/undo-redo'
  | '/examples/interaction/validation'
  | '/examples/interaction/zoom-transitions'
  | '/examples/layout/auto-layout'
  | '/examples/layout/dagre'
  | '/examples/layout/elkjs'
  | '/examples/layout/expand-collapse'
  | '/examples/layout/force-layout'
  | '/examples/layout/horizontal'
  | '/examples/layout/sub-flows'
  | '/examples/layout/workflow-builder'
  | '/examples/misc/download-image'
  | '/examples/misc/provider'
  | '/examples/misc/use-react-flow-hook'
  | '/examples/nodes/add-node-on-edge-drop'
  | '/examples/nodes/connection-limit'
  | '/examples/nodes/custom-node'
  | '/examples/nodes/delete-middle-node'
  | '/examples/nodes/drag-handle'
  | '/examples/nodes/dynamic-grouping'
  | '/examples/nodes/easy-connect'
  | '/examples/nodes/hidden'
  | '/examples/nodes/intersections'
  | '/examples/nodes/node-resizer'
  | '/examples/nodes/node-toolbar'
  | '/examples/nodes/proximity-connect'
  | '/examples/nodes/resize-rotate'
  | '/examples/nodes/shapes'
  | '/examples/nodes/stress'
  | '/examples/nodes/update-node'
  | '/examples/styling/base-style'
  | '/examples/styling/styled-components'
  | '/examples/styling/tailwind'
  | '/examples/styling/turbo-flow'
  | '/learn'
  | '/learn/advanced-use/accessibility'
  | '/learn/advanced-use/state-management'
  | '/learn/advanced-use/testing'
  | '/learn/advanced-use/typescript'
  | '/learn/advanced-use/uncontrolled-flow'
  | '/learn/concepts/core-concepts'
  | '/learn/concepts/introduction'
  | '/learn/concepts/plugin-components'
  | '/learn/concepts/terms-and-definitions'
  | '/learn/concepts/the-viewport'
  | '/learn/customization/custom-edges'
  | '/learn/customization/custom-nodes'
  | '/learn/customization/theming'
  | '/learn/getting-started/adding-interactivity'
  | '/learn/getting-started/building-a-flow'
  | '/learn/getting-started/installation-and-requirements'
  | '/learn/layouting/layouting'
  | '/learn/layouting/sub-flows'
  | '/learn/troubleshooting'
  | '/learn/troubleshooting/migrate-to-v10'
  | '/learn/troubleshooting/migrate-to-v11'
  | '/learn/troubleshooting/remove-attribution'
  | '/learn/tutorials'
  | '/learn/tutorials/mind-map-app-with-react-flow'
  | '/learn/tutorials/react-flow-and-the-web-audio-api'
  | '/pro'
  | '/pro/case-studies'
  | '/pro/case-studies/carto-case-study'
  | '/pro/case-studies/doubleloop-case-study'
  | '/pro/case-studies/onesignal-case-study'
  | '/pro/enterprise'
  | '/pro/examples'
  | '/pro/pricing'
  | '/showcase'
  | '/whats-new'
  | '/whats-new/2023-11-01'
  | '/whats-new/2023-11-02'
  | '/whats-new/2023-11-10'
  | '/whats-new/2023-11-14'
  | '/whats-new/2023-12-06'
  | '/whats-new/2023-12-12'
  | '/whats-new/2024-01-18';