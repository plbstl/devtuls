function <:newTool>(input: <:NewTool>Input): <:NewTool>Output {
  // Default error output
  const errorOutput: <:NewTool>Output = {
    data: null,
    error: 'An error occurred.',
  }

  try {
    if (input.dummyValue === 'error') {
      return errorOutput
    }
    const data = {}
    return { data, error: null }
  } catch {
    errorOutput.error = 'A contextual error message.'
    return errorOutput
  }
}

interface <:NewTool>Input {
  dummyValue: string
}

type <:NewTool>Output =
  | {
      data: unknown
      error: null
    }
  | {
      data: null
      error: string
    }

export default <:newTool>
export type { <:NewTool>Input, <:NewTool>Output }
