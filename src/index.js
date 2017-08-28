import 'babel-polyfill';

import applescript from 'applescript';

const exec = type => (script, args = []) => {
  let functionToCall = applescript.execFile;
  let functionParams = [script, args];
  if (type === 'string') {
    functionToCall = applescript.execString;
    functionParams = [script];
  }

  return new Promise((resolve, reject) =>
    functionToCall(...functionParams, (error, response) => {
      if (error) {
        return reject(error);
      }

      return resolve(response);
    }),
  );
};

export default {
  execFile: exec('file'),
  execString: exec('string'),
};
