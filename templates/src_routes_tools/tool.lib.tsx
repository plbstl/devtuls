import { json, type ActionFunction, type LoaderFunction } from 'react-router-dom'

/** `/<:new-tool>` route loader. */
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)
  return json<<:NewTool>LoaderData>({ dummyValue: url.searchParams.get('dummyValue') ?? '' })
}

/** Data returned by `/<:new-tool>` route loader. */
export interface <:NewTool>LoaderData {
  dummyValue: string
}

/** `/<:new-tool>` route action */
export const action: ActionFunction = () => {
  return json<<:NewTool>ActionData>({ dummyValue: 'action' })
}

/** Data returned by `/<:new-tool>` route action. */
export interface <:NewTool>ActionData {
  dummyValue: string
}
