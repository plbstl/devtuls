const <:newTool>Tool: RouteObject = {
  path: '<:new-tool>',
  children: [
    {
      index: true,
      lazy: () => import('./routes/tools/<:new-tool>.page'),
      loader: async (args) => {
        const { loader } = await import('./routes/tools/<:new-tool>.lib')
        return loader(args)
      },
      action: async (args) => {
        const { action } = await import('./routes/tools/<:new-tool>.lib')
        return action(args)
      },
    },
    { path: 'docs', lazy: () => import('./routes/tools/<:new-tool>.page') },
    { path: 'changelog', lazy: () => import('./routes/tools/<:new-tool>.page') },
  ],
}
