import { transform } from '@babel/core'
import { property } from '@dword-design/functions'
import { expect } from 'expect'
import P from 'path'

export default options => ({
  transform: test => async () =>
    expect(
      transform(test.from, {
        babelrc: false,
        filename: P.join(process.cwd(), 'index.js'),
        ...options,
      })
        |> await
        |> property('code'),
    ).toEqual(test.to),
})
