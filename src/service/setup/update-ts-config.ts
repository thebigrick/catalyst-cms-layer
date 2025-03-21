import fs from 'node:fs';
import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

interface TsConfig {
  compilerOptions?: {
    paths?: Record<string, string[]>;
  };
}

const updateTsConfig = () => {
  const selfPath = fileURLToPath(dirname(import.meta.url));
  const catalystRoot = path.resolve(selfPath, '../../../../../');

  const tsconfigPath = path.join(catalystRoot, 'core', 'tsconfig.json');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const tsconfig: TsConfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));

  tsconfig.compilerOptions = tsconfig.compilerOptions || {};
  tsconfig.compilerOptions.paths = tsconfig.compilerOptions.paths || {};

  if (!('@thebigrick/catalyst-cms-layer/*' in tsconfig.compilerOptions.paths)) {
    const cmsSrcPath = path
      .relative(path.dirname(tsconfigPath), path.resolve(path.join(selfPath, '..', '..', '*')))
      .replace(/\\/g, '/');

    tsconfig.compilerOptions.paths['@thebigrick/catalyst-cms-layer/*'] = [cmsSrcPath];
  }

  // TODO: Check this with the Catalyst team to find a more consistent way to locate the current vibe
  if (!('@current-vibe/*' in tsconfig.compilerOptions.paths)) {
    const vibesPath = './vibes/soul/*';

    tsconfig.compilerOptions.paths['@current-vibe/*'] = [vibesPath];
  }

  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  console.log(
    '> This package is preconfigured for the SOUL vibe, if you want to change it, please update the tsconfig.json file both for this module and catalyst core',
  );
  console.log('✓ Updated tsconfig.json');
};

export default updateTsConfig;
