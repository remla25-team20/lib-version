import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('../package.json');

export class VersionUtil {
    /**
     * Returns the current version of the package
     * @returns {string} The current version
     */
    static getVersion(): string {
        return packageJson.version;
    }
} 