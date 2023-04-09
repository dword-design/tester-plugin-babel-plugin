import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'

import self from './index.js'

export default tester(
  {
    valid: {
      from: '1 |> x => x * 2',
      to: endent`
        var _;
        _ = 1, _ * 2;
      `,
    },
  },
  [
    self({
      plugins: [
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'fsharp' }],
      ],
    }),
  ],
)
