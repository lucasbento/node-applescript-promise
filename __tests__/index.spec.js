import fs from 'fs-extra';
import applescript from '../src/index';

it('should execute file returning a promise', async () => {
  const fixturePath = `${__dirname}/../fixtures/snippetWithArgument.applescript`;
  const arg = 'should print this string';

  const response = await applescript.execFile(fixturePath, [arg]);

  expect(response).toBe(arg);
});

it('should execute string returning a promise', async () => {
  const fixturePath = `${__dirname}/../fixtures/snippet.applescript`;

  const script = await fs.readFile(fixturePath, 'utf8');
  const response = await applescript.execString(script);

  expect(response).toMatchSnapshot();
});
